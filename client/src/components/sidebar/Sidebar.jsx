import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img width = "350"
          src="https://media.istockphoto.com/id/485614909/photo/guide-explaining-to-tourists-the-coliseum-of-rome.jpg?s=612x612&w=0&k=20&c=cPJKPvRAi4M5g2NVHts5P7mZ1iwl_92ru6bXdTub6jQ="
          alt=""
        />
        <p>
          MERN Full Stack Project by Aryan,Vinod,Kaushik
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <a href="https://www.facebook.com/incredibleindia/"><i href="" className="topIcon fab fa-facebook-square" ></i></a>
          <a href="https://twitter.com/incredibleindia"><i className="topIcon fab fa-twitter-square"></i></a>
          <a href="https://in.pinterest.com/abhinil20/tourism-india/"><i className="topIcon fab fa-pinterest-square"></i></a>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
