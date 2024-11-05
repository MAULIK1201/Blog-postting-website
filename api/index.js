const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

dotenv.config(); // Load environment variables at the top

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

// Mongoose Connection
mongoose
  .connect(process.env.MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Multer Configuration for File Uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
const upload = multer({ storage: storage });

// File Upload Endpoint
app.post("/api/upload", (req, res) => {
  upload.single("file")(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(500).json({ message: "Multer error", error: err.message });
    } else if (err) {
      return res.status(500).json({ message: "Unknown error", error: err.message });
    }
    res.status(200).json("File has been uploaded");
  });
});

// Routes
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

// Default Route
app.get("/", (req, res) => {
  res.send("Backend server is running");
});

// Start Server
app.listen(port, () => {
  console.log(`Backend is running on port ${port}.`);
});
