
  // import Posts from "../../components/posts/posts";
  import Sidebar from "../../components/sidebar/Sidebar";
  import "./About.css";  
  import React from "react";


  export default function About() {
    // console.log(location);
    return (
        <div className="container">
        <div className="Content">
        <h1 className="AboutHeading">Full Stack Project Created by Maulik and Lord Kuldip</h1>
        <h2 className="Para">
        Creating a blog posting website using the MERN stack (MongoDB, Express.js, React, and Node.js) is an excellent choice for developers looking to build a full-stack application. This stack combines the flexibility and performance of MongoDB as a database, the simplicity and power of Express.js as a server framework, the dynamic capabilities of React for building interactive user interfaces, and the scalability of Node.js for server-side logic. <br></br>
        <br></br>
        <br></br>
        <spam className="kuldip"> "Welcome to the World's Best Blog community!"</spam>
        <br></br>

        <spam className="Para"> Under the guidance of Sunil Gautam Sir</spam>
        </h2>
        </div>
        <div className="sidebar"><Sidebar /></div>
        
        </div>
    );
  }