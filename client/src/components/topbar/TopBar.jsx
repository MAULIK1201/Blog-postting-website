import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  // const PF = "https://blog-postting-website.onrender.com/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
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

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/About">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            {/* <img className="topImg" src={PF+user.profilePic} alt="" /> */}
            PROFILE
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}