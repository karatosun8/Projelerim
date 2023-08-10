import React from 'react'

function MenuItem ({image,price,name,content,key})
console.log(price)
  return (
    <div className='menuItem'>
        <div style={{backgroundImage: `url(${image})`}}>
            <h1> {name}</h1>
            <h6>{content}</h6>
            <p>{price}</p>
        </div>
    </div>
  )


export default MenuItem