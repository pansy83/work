import React from 'react'
import './Card.css'
function Card(props) {
   const {text,place,style,teacher}=props
    return (
    <div>
        <span className='card2'>
        <h1>{text}</h1>
        <h2>{place}</h2>
        <h2>{teacher}</h2>
        <h2>{style}</h2>
          </span>
        </div>
  )
}

export default Card