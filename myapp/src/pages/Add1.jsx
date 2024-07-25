import './Add1.css';
import React from 'react'
import src2 from '../static/image/右箭头.png'
import { useLocation, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function Add1() {
    const navigate= useNavigate();
    const location = useLocation();
  
    const { msg,id ,uid1,uid2,uid3} = location.state;
    const [message, setMessage] = useState('');

    const handleClick = () => {
     console.log(id)
     console.log(uid1)
     console.log(uid2)
     console.log(message.length)
     
      if (message.length > 0) {
        if(uid1==='0'||uid1==='1'||uid1==='2'||uid1==='3'||uid1==='4'||uid1==='5'||uid1==='6'){
          navigate(`/week15?uid1=${uid1}&message1=${message}&msg1=${msg}`)
        }
       if(uid2==='0'||uid2==='1'||uid2==='2'||uid2==='3'||uid2==='4'||uid2==='5'||uid2==='6'){
          navigate(`/week15?uid2=${uid2}&message2=${message}&msg2=${msg}`)
        }
         if(uid3==='0'||uid3==='1'||uid3==='2'||uid3==='3'||uid3==='4'||uid3==='5'||uid3==='6'){
          navigate(`/week15?uid3=${uid3}&message3=${message}&msg3=${msg}`)
        }
        // if(uid4==='0'||'1'||'2'||'3'||'4'||'5'||'6'){
        //   navigate('/week15')
        // }
        // if(uid5==='0'||'1'||'2'||'3'||'4'||'5'||'6'){
        //   navigate('/week15')
        // }
      if(id==='1'){ navigate('/week13?ida=1', {
          state: {
            msg: msg,
            message: message
          }
        });
      }
    if(id==='2'){ navigate('/week13/?ida=2', {
          state: {
            msg: msg,
            message: message
          }
    })}
    if(id==='3'){ navigate('/week13/?ida=3', {
      state: {
        msg: msg,
        message: message
      }
})}
if(id==='4'){ navigate('/week13/?ida=4', {
  state: {
    msg: msg,
    message: message
  }
})}
if(id==='5'){ navigate('/week13/?ida=5', {
  state: {
    msg: msg,
    message: message
  }
})}

    }
     else {
        alert('请输入内容');
      }
    }
      
  return (
    <div className='add1'>
     <span>
        <h2>
           标题： {msg}
        </h2>
     </span>
     <span>
        <h1>
            为你的行程添加具体内容

        </h1>
     </span>
      <span>
      <input 
            value={message}
            onChange={(e)=>{setMessage(e.target.value)}}
            className='enter'
            type="text" />
      </span>
     <span className='next'>
          <img
          onClick={handleClick}
          className=' arrow'
          src={src2}/>
        </span>
     
    </div>
  )
}

export default Add1