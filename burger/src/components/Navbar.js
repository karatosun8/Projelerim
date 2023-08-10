import React from 'react'
import burgerLogo from "../assets/burgerLogo.png"
import {Link} from "react-router-dom"
import "../style/Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='main'>
            <img src= {burgerLogo} alt=''/>
        </div>
        <div className='mainLink'>
        <Link to ="/">Anasayfa</Link>
        <Link to ="/menu">Menu</Link>
        <Link to ="/about">Hakkımızda</Link>
        <Link to ="/contact">İletişim</Link>
        </div>

    </div>
  )
}

export default Navbar