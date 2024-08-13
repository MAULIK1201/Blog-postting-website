import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const { user, dispatch } = useContext(Context);
  // const PF = "https://blog-postting-website.onrender.com/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });

    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };

    if (file) {
      const formData = new FormData();
      const filename = Date.now() + file.name;
      formData.append("name", filename);
      formData.append("file", file);
      updatedUser.profilePic = filename;
      try {
        const res = await axios.post("https://blog-postting-website.onrender.com/api/upload", formData);
        updatedUser.profilePic = res.data.filename;
      } catch (err) {
        console.log(err);
        setError("Error uploading profile picture");  
      }
    }

    try {
      const res = await axios.put(`https://blog-postting-website.onrender.com/api/users/${user._id}`, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      setError("Error updating user information");
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          {/* <span className="settingsDeleteTitle">Delete Account</span> */}
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile :</label>
          <div className="settingsPP">
            <img
              src={"https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"}
              alt=""
            />
            {/* <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label> */}
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
          {success && (
            <span style={{ color: "green" }}>Profile has been updated</span>
          )}
          {error && <span style={{ color: "red" }}>{error}</span>}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
