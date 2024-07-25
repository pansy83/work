import React from 'react'
import './Week12.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import List1Item from '../common/List1Item'
import Item2 from '../common/Item2'
import Item3 from '../common/Item3'
import Card from '../common/Card'
import Button from '../common/Button'

function Week12() {
    const list1=[{
        id:0,
       uname:'周一',
       day:'13日'
    },
     {
        id:1,
        uname:'周二',
        day:'14日'
     },
     {
        id:2,
        uname:'周三',
        day:'15日'
     },
     {  id:3,
        uname:'周四',
        day:'16日'
     },
     {      id:4,
        uname:'周五',
        day:'17日'
     },
     {        id:5,
        uname:'周六',
        day:'18日'
     },
     {        id:6,
        uname:'周天',
        day:'19日'
     }
]
   const list2=[
    {id:0,text:'5月'},{id:1,text:'1'},{id:2,text:'2'},{id:3,text:'3'},{id:4,text:'4'},
    {id:5,text:'5'},{id:6,text:'6'},{id:7,text:'7'},{id:8,text:'8'},
    {id:9,text:'9'},{id:10,text:'10'},{id:11,text:'11'},{id:12,text:'12'}
   ]
   //list3是周二的课表
   const list3=[{id:0,text:'C语言程序设计',place:'3105',style:'必修',teacher:'苏贞'},
   {id:1,text:'体育',place:'太极',style:'必修',teacher:'教师3'},
   {id:2,text:'大学物理',place:'3207',style:'必修',teacher:'潘睿亨'},
   {id:3,text:'大学英语',place:'2101',style:'必修',teacher:'曹洁'},
   {id:4,text:'瑰丽唐宋',place:'2216',style:'选修',teacher:'张杰'}
]
//list4是周一的课表
const list4=[{id:0,text:'高等数学',place:'3403',style:'必修',teacher:'潘建辉'}]
//list5是周三的课表
const list5=[{id:0,text:'微生物学',place:'2305','style':'必修',teacher:'教师2'},]
//list6是周四的课表
const list6=[{id:0,text:'大学物理',place:'3207',style:'必修',teacher:'潘睿亨'},{id:1,text:'大学英语',place:'2101',style:'必修',teacher:'曹洁'}]
//list7是周五的课表
const list7=[{id:0,text:'高等数学',place:'3403',style:'必修',teacher:'潘建辉'}]
//list8是周四下午(三节课)的课表
const list8=[{id:0,text:'近代史纲要',place:'3304'}]
    const [back,setBack]=useState(false)
    const [show,setShow]=useState(false)
    const [next,setNext]=useState(false)
    const [courseId,setCourseId]=useState(null)
    const [showCard, setShowCard] = useState(false);
    const handleClickCard = (courseId) => {
      if (showCard) {
        setShowCard(false);
        setCourseId(null);
      } else {
        setCourseId(courseId);
        setShowCard(true);
      }
    };
    const navigate=useNavigate()
    const handleClick = () => {
            setBack(true)
            if(back){
            navigate('/')
            }
    }
    const handleClick2 = () => {
        setShow(true)
        if(show){
        navigate('/week15')
        }
}

// 在需要跳转到 week12 页面的地方调用 navigateToWeek12 函数，并传入具体的周数

let touchStartY = 0;
let touchEndY = 0;
let touchStartX = 0;
let touchEndX = 0;
const handleStart=(e)=>{
    touchStartY=e.targetTouches[0].clientY;
    touchStartX=e.targetTouches[0].clientX;
}
const handleTouchMove=(e)=>{
    touchEndY=e.targetTouches[0].clientY;
    touchEndX=e.targetTouches[0].clientX;
    if (Math.abs(touchEndY - touchStartY) > 50) { 
        setBack(true);
        // 当 back 为 true 时直接进行导航
        if (back) {
          navigate('/');
        }
      }
      if( Math.abs(touchStartX - touchEndX) > 20) {
        setNext(true);
        // 当 next 为 true 时直接进行导航
        if (next) {
          navigate('/week13');
        }
      }
}
  return (
    <div 
    onTouchStart={handleStart}
      onTouchMove={handleTouchMove}
    className='week12'>
        <span><button 
        onClick={handleClick}
        className='btn2'>btn</button></span>
        <span className='span1'>
            <h2>第十二周</h2>
            <button 
            onClick={handleClick2}
            className='btn3'>回到本周</button>
        </span>
        <span className='span2'>
          {list1.map((item)=>(
              <List1Item
              key={item.id}
              uname={item.uname}
              day={item.day}
              />
          )
          )}
        </span>
        <span className='span3'>
         {list2.map((item)=>(
             <li key={item.id}>{item.text}</li>
         ))}
        </span>
          <span className='span4'>
            {list3.map((item)=>(
                <Item2
                onClick={()=>handleClickCard(item.id)}
                text={item.text}
                place={item.place}
                teacher={item.teacher}
                key={item.id}
                />
            ))}
          </span>
          <span className='span5'>
            {list4.map((item)=>(
                <Item2
                teacher={item.teacher}
                onClick={()=>handleClickCard(item.id)}
                text={item.text}
                place={item.place}
                key={item.id}
                />
            ))}
          </span>
          <span className='span6'>
            {list5.map((item)=>(<Item2 teacher={item.teacher} onClick ={()=> handleClickCard(item.id)} text={item.text} place={item.place} key={item.id}/>))}
          </span>
          <span className='span7'>
            {list6.map((item)=>(<Item2 teacher={item.teacher} onClick={()=> handleClickCard(item.id)} text={item.text} place={item.place} key={item.id}/>))}
            </span>
            <span className='span8'>{list7.map((item)=>(<Item2 teacher={item.teacher} onClick={()=> handleClickCard(item.id)} text={item.text} place={item.place} key={item.id}/>))}</span>
           <span className='span9'>
             {list8.map((item)=>(<Item3 text={item.text} place={item.place} key={item.id}/>))}
           </span>
   
         {showCard &&courseId!== null && list3.find(course => course.id === courseId) && (
  <Card
     teacher={list3.find(course => course.id === courseId).teacher}
    text={list3.find(course => course.id === courseId).text}
    place={list3.find(course => course.id === courseId).place}
    style={list3.find(course => course.id ===courseId).style}
  />
)}
         {showCard &&courseId!== null && list4.find(course => course.id === courseId) && (
  <Card
  teacher={list4.find(course => course.id === courseId).teacher}
    text={list4.find(course => course.id === courseId).text}
    place={list4.find(course => course.id === courseId).place}
    style={list4.find(course => course.id ===courseId).style}
  />
)}
{showCard &&courseId!== null && list5.find(course => course.id === courseId) && (
  <Card
  teacher={list5.find(course => course.id === courseId).teacher}
    text={list5.find(course => course.id === courseId).text}
    place={list5.find(course => course.id === courseId).place}
    style={list5.find(course => course.id ===courseId).style}
  />
)}
{showCard &&courseId!== null && list6.find(course => course.id === courseId) && (
  <Card
  teacher={list6.find(course => course.id === courseId).teacher}
    text={list6.find(course => course.id === courseId).text}
    place={list6.find(course => course.id === courseId).place}
    style={list6.find(course => course.id ===courseId).style}
  />
)}
{courseId!== null && list7.find(course => course.id === courseId) && (
  <Card
  teacher={list7.find(course => course.id === courseId).teacher}
    text={list7.find(course => course.id === courseId).text}
    place={list7.find(course => course.id === courseId).place}
    style={list7.find(course => course.id ===courseId).style}
  />
)}
  <span className='group1'>
    <Button/><Button/>
    </span>
    <span className='group2'>
    <Button/><Button/><Button/><Button/><Button/> <Button/><Button/><Button/>
    </span>
    <span className='group3'>
    <Button/><Button/>
  </span>
      <span className='group4'><Button/><Button/><Button/><Button/><Button/><Button/><Button/><Button/>
    </span>
    <span className='group5'> <Button/><Button/><Button/><Button/> <Button/><Button/><Button/><Button/> <Button/> <Button/><Button/><Button/>
    </span>
    <span className='group6'> <Button/><Button/><Button/><Button/> <Button/><Button/><Button/><Button/> <Button/><Button/><Button/><Button/>
    </span>
    <span className='group7'> <Button/><Button/><Button/><Button/><Button/><Button/>
    </span>
    <span className='group8'> <Button/><Button/>
    </span>
    <span className='group9'>
    <Button/><Button/><Button/><Button/><Button/>
    </span>
        </div>
  )
}

export default Week12 