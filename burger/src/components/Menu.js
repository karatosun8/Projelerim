import React from 'react'
import {Data} from '../helpers/data'
import { MenuItem } from '@mui/material'
import "../style/Menu.css"

const Menu = () => {
    console.log(Data)
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Burgerlerimiz</h1>
        <div className='menuList'>
           {Data.map((item,key)=>{
            
            return(
                <MenuItem 
                key={key}
                image ={item.image} 
                content = {item.content}
                name = {item.name}
                price = {item.price}/>
            )

           })} 
        </div>


    </div>
  )
}

export default Menu