import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
function Home() {
    const [open,setOpen]= useState(false);
    const navigate= useNavigate();
    let touchStartY=0;
    let touchEndY=0;
    const handleStart=(e)=>{
        touchStartY=e.targetTouches[0].clientY;
      
    }
    const handleMove=(e)=>{
        touchEndY=e.targetTouches[0].clientY;
      
        if (Math.abs(touchEndY - touchStartY) > 50) { 
            setOpen(true);
            // 当 open 为 true 时直接进行导航
            if (open) {
              navigate('/week12');
            }
          }
    }
    const handleBtn1 = () => {
        console.log("Button 1 clicked");
        navigate("/week12");
    }
  return (
    <div>
        Home
        <div className='nav'>
        <ul>
            <li><Link to="/week12">Week12</Link></li>
            <li><Link to="/week13">Week13</Link></li>
            <li><Link to="/week14">Week14</Link></li>
            <li><Link to="/week15">Week15</Link></li>
        </ul>
        <Outlet/>
        </div>
        <div className='card'
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        >
           <span><button
           onClick={handleBtn1}
           className='btn1'>
            btn
            </button></span>
           <span><h2>今天和明天都没课咯~</h2></span>
        </div>
        </div>
  )
}

export default Home