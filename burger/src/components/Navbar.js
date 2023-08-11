import React from 'react'
import Logo from "../assets/burgerLogo.png"
import "../style/Navbar.css"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='main'>
        <img src={Logo}/>
        <div className='mainLink'>
          <Link to="/">Anasayfa</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">Hakkında</Link>
          <Link to="/contact">İletişim</Link>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar