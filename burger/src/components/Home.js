import {Link} from "react-router-dom"
import React from 'react'
import BannerImage from "../assets/burger-background.jpg"
import "../style/Home.css"


const Home = () => {
  return (
    <div className="mainPage" style={{backgroundImage:`url(${BannerImage})`}}>
    <div className="order">
        <Link to="/menu">
            <button>Sipariş Ver</button>
        </Link>
    </div>
    </div>
  )
}

export default Home