import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false)
    try {
      const res = await axios.post("https://blog-postting-website.onrender.com/api/auth/register", {
        username,
        email,
        password,
        
      });
      res.data && window.location.replace("/login")
    } catch (error) {
     setError(true)
    }
   
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter Your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter Your Password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link to={"/login"} className="link">
          Login
        </Link>
      </button>
     {error && <span style={{color:"red", marginTop:"10px"}} >Something Went Wrong!!</span>}
    </div>
  );
}
