import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import "../style/Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
      <FacebookIcon/>
      <InstagramIcon/>
      <TwitterIcon/>
      </div>
      <p>Tüm Hakları Saklıdır</p>
    </div>
  )
}

export default Footer