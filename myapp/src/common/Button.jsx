import './Button.css'
import React, { useState } from'react';
import { useEffect } from 'react';
import src1 from '../static/image/加号.png'

import { useNavigate } from 'react-router-dom';

function Button( ) {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(0);

  useEffect(() => {
    if (clickCount === 2 && Date.now() - lastClickTime < 300) {
      navigate('/add');
    }
  }, [clickCount, lastClickTime]);
  const handleClick = () => {
    setIsClicked(true);
    setClickCount(clickCount + 1);
    setLastClickTime(Date.now());

    if (clickCount === 1) {
      setTimeout(() => {
        setClickCount(0);
      }, 300);
    }
  };
  
  return (
    <button className='btn4'
      style={{ backgroundColor: isClicked? 'transparent' : 'white' }} 
      onClick={handleClick}

    >
      {isClicked? <img  className='img' src={src1} alt="Button Image" /> : ' '}
    </button>
  );
}

export default Button;