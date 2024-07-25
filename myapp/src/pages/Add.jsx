import React, { useState } from 'react'
import './Add.css'
import src2 from '../static/image/右箭头.png'
import { useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
function Add() {
    const list1=["自习","值班","考试","英语"]
    const list2=["开会","作业","补课","实验"]
    const list3=["复习","学习"]
    
    const [params]=useSearchParams()
   const id=params.get('id')
   const uid1=params.get('uid1')
   const uid2=params.get('uid2')
   const uid3=params.get('uid3')
   const uid4=params.get('uid4')
   const uid5=params.get('uid5')
    const [msg,setMsg]=useState("")
    const navigate=useNavigate()
    const handleClick=()=>{
      console.log(id)
      console.log(uid1)
      if(msg.length==0){
        alert("掌友,标题不能为空哟！")
    }  else{
        navigate("/add1",{state:{msg,id,uid1,uid2,uid3,uid4,uid5}})
    }
    }
  return (
    <div className='Add'>
        <span><h1>为你的行程添加一个标题{id||uid1||uid2||uid3||uid4||uid5}</h1></span>
        
        <span>
            <input 
            value={msg}
            onChange={(e)=>{setMsg(e.target.value)}}
            className='enter'
            type="text" />
        </span>
        <span className='line1'>
         {list1.map((item,index)=>(<button
         onClick={()=>{
            setMsg(item)
         }}
         key={index}>{item}</button>))}
        </span>
        <span className='line2'>
         {list2.map((item,index)=>(<button
         onClick={()=>{setMsg(item)}}
         key={index}>{item}</button>))}
        </span>
        <span className='line3'>
           {list3.map((item,index)=>(<button
           onClick={()=>{setMsg(item)}}
           key={index}>{item}</button>))}
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

export default Add