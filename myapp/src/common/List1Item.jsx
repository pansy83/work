import React from 'react'
import './List1Item.css'
function ListItem(props) {
  const {uname,day}=props
  return (
    <div className='list1-item'>
      <h4 className='uname'>{uname}</h4>
      <p  className='day'>{day}</p>
    </div>
  )
}

export default ListItem