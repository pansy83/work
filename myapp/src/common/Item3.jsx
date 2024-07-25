import React from 'react'
import './Item3.css'
function Item3(props) {
    const {text,place}=props
    const handleClick=()=>{console.log('clicked')}
  return (
    <div 
    onClick={handleClick}
    className='item3'>
      <p className='text'>{text}</p>
      <p className='place'>{place}</p>
        </div>
  )
}

export default Item3