import React from 'react'
import BackgroundImage from "../assets/burger-background.jpg"
import "../style/About.css"

const About = () => {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage:`url${BackgroundImage}`}}>
       
      </div>
      <div className='aboutBottom'>
        <h1>HAkkımızda</h1>
        <p>lorem50</p>
      </div>



    </div>
  )
}

export default About