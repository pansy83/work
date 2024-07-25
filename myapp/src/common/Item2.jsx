import React from 'react'
import './Item2.css'
function Item2(props) {
    const {text,place,onClick}=props
    const handleClick = () => {
        console.log(text);
      };
    
  return (
    <div 
    onClick={onClick}
    className='item2'>
      <p className='text'>{text}</p>
      <p className='place'>{place}</p>
        </div>
  )
}

export default Item2