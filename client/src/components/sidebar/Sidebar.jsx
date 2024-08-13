import React, { useEffect, useState } from 'react';
import './sidebar.css';
import axios from 'axios'; 
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      try {
        const res = await axios.get("https://blog-postting-website.onrender.com/api/categories");
        setCats(res.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    getCats();
  }, []);

  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className='sidebarTitle'>ABOUT THIS WEBSITE</span>
        <img className='sidebarAboutImg' src="https://images.squarespace-cdn.com/content/v1/55c8fa72e4b07630cf663e8a/8ec87e1c-d9af-4dcf-946d-78456ca80a6c/cosy+writing+set+up+in+bed+with+candle+and+notebook+stack?format=2500w" alt="" />
        <p>This blog posting website is creted by 
        <br></br>
        Maulik Adhyaru - 22bce176 
        <br></br>
         Kuldip Lakum - 22bce165</p>
      </div>
      <div className="sidebarItem">
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link" key={c._id}>
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className='sidebarTitle'>FOLLOW US</span>
        <div className="topLeft">
        <a href="https://www.facebook.com/profile.php?id=100089472828584" target="_blank" rel="noopener noreferrer">
          <i className="topIcon fab fa-facebook-square"></i>
        </a>
        <a href="https://twitter.com/DaveDa26943" target="_blank" rel="noopener noreferrer">
          <i className="topIcon fab fa-twitter-square"></i>
        </a>
        <a href="https://in.pinterest.com/" target="_blank" rel="noopener noreferrer">
          <i className="topIcon fab fa-pinterest-square"></i>
        </a>
        <a href="https://www.instagram.com/maulik1201/?next=%2F" target="_blank" rel="noopener noreferrer">
          <i className="topIcon fab fa-instagram-square"></i>
        </a>
      </div>
      </div>
    </div>
  );
}
