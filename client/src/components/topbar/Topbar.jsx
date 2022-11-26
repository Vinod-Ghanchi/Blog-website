// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function Topbar() {
  const { user,dispatch } = useContext(Context);
  const PF = 'http://localhost:5000/images/'

  const handleLogout=() =>{
    dispatch({type: "LOGOUT"}) 
  }
    return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">HOME</Link>
          </li>
          <li className="topListItem"><Link to="/" className="link">ABOUT</Link></li>
          <li className="topListItem"><Link to="/" className="link">CONTACT</Link></li>
          <li className="topListItem"><Link to="/write" className="link">WRITE</Link></li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
      
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src={PF + user.profilePic}
              alt=""
            />
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
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}