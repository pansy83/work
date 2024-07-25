import React, { useState, useEffect } from'react';
import { useNavigate } from'react-router-dom';
import List1Item  from '../common/List1Item';
import Card from '../common/Card';
import './Week13.css';
import { useRef } from 'react';

function Week14() {
  const [back, setBack] = useState(false);
  const [isshow, setIsShow] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(''); 
  const [cardVisible, setCardVisible] = useState(false); 
  const [lastClicked,setLastClicked]=useState('')
  const specialList=[{
    id:0,
    text:'高等数学A(下)',
    style:'必修', 
    teacher:'潘建辉',
    place:'3403'
},
{
   id:1,
   text:'C语言程序设计',
   style:'必修',
   teacher:'苏贞',
   place:'3105'
},
{
  id:2,
  text:'大学英语2',
  style:'必修',
  teacher:'曹洁',
  place:'2101'
},
{
 id:3,
 text:'大学物理C上',
 style:'必修',
 teacher:'潘睿亨',
 place:'3207'
},
{
id:4,
text:'瑰丽的唐宋文学艺术',
style:'选修',
teacher:'张杰',
place:'2216'
},
{
id:5,
text:'中国近现代史纲要',
style:'必修',
teacher:'罗川',
place:'3304'
},
{
 id:6,
 text:'微生物学',
 style:'必修',
 teacher:'江怀仲',
 place:'2305'
},
{
id:7,
text:'体育1(下)跆拳道3班',
style:'必修',
teacher:'教师3',
place:'太极运动场'
}]

  const navigate = useNavigate();

  const list1 = [
    { id: 0, uname: '周一', day: '27 日' },
    { id: 1, uname: '周二', day: '28 日' },
    { id: 2, uname: '周三', day: '29 日' },
    { id: 3, uname: '周四', day: '30 日' },
    { id: 4, uname: '周五', day: '31 日' },
    { id: 5, uname: '周六', day: '1 日' },
    { id: 6, uname: '周天', day: '2 日' }
  ];

  const list2 = [
    { id: 0, text: '5 月' },
    { id: 1, text: '1' },
    { id: 2, text: '2' },
    { id: 3, text: '3' },
    { id: 4, text: '4' },
    { id: 5, text: '5' },
    { id: 6, text: '6' },
    { id: 7, text: '7' },
    { id: 8, text: '8' },
    { id: 9, text: '9' },
    { id: 10, text: '10' },
    { id: 11, text: '11' },
    { id: 12, text: '12' }
  ];

  const [show, setShow] = useState(false);
  let touchStartX = 0, touchEndX = 0;

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleStart1 = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleMove1 = (e) => {
    touchEndX = e.touches[0].clientX;
    // 条件判断
    if (touchEndX - touchStartX > 30) {
      setOpen(true);
      if (open) {
        navigate('/week15');
      }
    }
    if (touchEndX - touchStartX > 10) {
      setOpen(true);
      if (open) {
        navigate('/week15');
      }
    }
  };

  const handleClick2 = () => {
    setShow(true);
    if (show) {
      navigate('/week15');
    }
  };

  const handleClick = () => {
    setBack(true);
    if (back) {
      navigate('/');
    }
  };

  const handleCourseClick = (courseText) => {
    if (courseText === lastClicked) {
      setCardVisible(!cardVisible);
    } else {
      setSelectedCourse(courseText);
      setCardVisible(true);
    }
    setLastClicked(courseText);
  };
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (!event.target.closest('.item')) { 
        setCardVisible(false);
        setSelectedCourse(''); 
        setLastClicked('')
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);
  const [isDragging, setIsDragging] = useState(false);
  const ref = useRef(null);

  const handleMouseDown = (event) => {
    let shiftX = event.clientX - ref.current.getBoundingClientRect().left;
    let shiftY = event.clientY - ref.current.getBoundingClientRect().top;

    ref.current.style.position = 'absolute';
    ref.current.style.zIndex = 1000;
    document.body.append(ref.current);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      ref.current.style.left = pageX - shiftX + 'px';
      ref.current.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    ref.current.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      ref.current.onmouseup = null;
    };

    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  return (
    <div onTouchStart={handleStart1} onTouchMove={handleMove1}>
      <span><button onClick={handleClick} className='btn2'>btn</button></span>
      <span className='span1'>
        <h2>第十四周</h2>
        <button onClick={handleClick2} className='btn3'>回到本周</button>
      </span>
      <span className='span2'>
        {list1.map((item) => (
          <List1Item
            key={item.id}
            uname={item.uname}
            day={item.day}
          />
        ))}
      </span>
      <span className='span3'>
        {list2.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </span>
      <div className='box1'>
        {/*  第一行  */}
        <div className="grid-item"></div>
        <div className="item"
        ref={ref}
         onMouseDown={handleMouseDown}
         onMouseUp={handleMouseUp}
        onClick={() => handleCourseClick('高等数学A(下)')}>高等数学 A(下)</div>
        <div className="grid-item"></div>
        <div className="item"
        onClick={() => handleCourseClick('C语言程序设计')}>C 语言程序设计</div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        {/*  第二行  */}
        <div className="grid-item"></div>
        <div className="item"
        onClick={() => handleCourseClick('高等数学A(下)')}>高等数学 A(下)</div>
        <div className="grid-item"></div>
        <div className="item" onClick={() => handleCourseClick('C语言程序设计')}>C 语言程序设计</div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        {/*  第三行  */}
        <div className="item" onClick={() => handleCourseClick('高等数学A(下)')}>高等数学 A(下)</div>
        <div className="item" onClick={() => handleCourseClick('体育1(下)跆拳道3班')}>体育</div>
        <div className="item" onClick={() => handleCourseClick('微生物学')}>微生物学</div>
        <div className="item" onClick={() => handleCourseClick('大学英语2')}>大学英语</div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        {/*  第四行  */}
        <div className="item" onClick={() => handleCourseClick('高等数学A(下)')}>高等数学 A(下)</div>
        <div className="item" onClick={() => handleCourseClick('体育1(下)跆拳道3班')}>体育</div>
        <div className="item" onClick={()=>handleCourseClick('微生物学')}>微生物学</div>
        <div className="item" onClick={()=>handleCourseClick('大学英语2')}>大学英语</div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        {/*  第五行  */}
        <div className="grid-item"></div>
        <div className="item" onClick={() => handleCourseClick('C语言程序设计')}>C 语言程序设计</div>
        <div className="grid-item"></div>
        <div className="item"onClick={()=>handleCourseClick('中国近代史纲要')}>近代史纲要</div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        {/*  第六行  */}
        <div className="grid-item"></div>
        <div className="item" onClick={() => handleCourseClick('C语言程序设计')}>C 语言程序设计</div>
        <div className="grid-item"></div>
        <div className="item" onClick={()=>handleCourseClick('中国近代史纲要')}>近代史纲要</div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        {/*  第七行  */}
        <div className="grid-item"></div>
        <div className="item" onClick={()=>handleCourseClick('大学英语2')}>大学英语</div>
        <div className="grid-item"></div>
        <div className="item" onClick={()=>handleCourseClick('中国近代史纲要')}>近代史纲要</div>
        <div className="item" onClick={()=>handleCourseClick('高等数学A(下)')}>高等数学 A(下)</div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        {/*  第八行  */}
        <div className="grid-item"></div>
        <div className="item" onClick={()=>handleCourseClick('大学英语2')}>大学英语</div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="item" onClick={()=>handleCourseClick('高等数学A(下)')}>高等数学 A(下)</div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        {/*  第九行  */}
        <div className="grid-item"></div>
        <div className="item" onClick={()=>handleCourseClick('瑰丽的唐宋文学艺术')}>瑰丽唐宋</div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        {/*  第十行  */}
        <div className="grid-item"></div>
        <div className="item" onClick={()=>handleCourseClick('瑰丽的唐宋文学艺术')}>瑰丽唐宋</div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        {/*  第十一行  */}
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        {/*  第十二行  */}
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
      </div>
      {cardVisible && (
        <span>
          {selectedCourse &&
            specialList.filter(item => item.text === selectedCourse).map((item) => (
              <Card
                text={item.text}
                place={item.place}
                style={item.style}
                teacher={item.teacher}
                key={item.id}
              />
            ))}
        </span>
      )}
    </div>
  );
}

export default Week14;
