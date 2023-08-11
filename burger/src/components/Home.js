import React from "react";
import { Link } from "react-router-dom";
import "../style/Home.css"
import BackgroundImage from "../assets/burger-background.jpg"

const Home = () => {
  return (
    <div className="mainPage" style={{backgroundImage:`url(${BackgroundImage})`}}>
      <div className="order">
        <Link to="/menu">
          <button>Sipariş Gir</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
