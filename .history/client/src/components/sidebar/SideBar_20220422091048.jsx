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
        <span className="sidebarTitle">ABOUT US</span>
        <img className="sidebarImg"
          src={require('../../assets/Anna_Daan.png')}
          alt=""
        />
        <p>
        <strong>WHO ARE WE?</strong>  
We are a group of undergraduates pursuing B.Tech in Computer Science Engineering in different specializations who came together with an idea to do something for the society with our knowledge

<strong>WHY ARE WE HERE?</strong>
wasting food increases greenhouse gas emissions and contributes to climate change. Reducing food loss and waste is essential in a world where millions of people go hungry every day.

WOULD YOU LIKE TO CONNECT WITH US?
To connect with us with your queries and concerns you can mail us. For any contributions you can fill up the form attached in the Contact section of this website and our representative will get right back to you!
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
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}