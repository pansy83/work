import React, { useState, useEffect } from'react';
import { useNavigate } from'react-router-dom';
import List1Item  from '../common/List1Item';
import Card from '../common/Card';
import './Week13.css';
import src3 from '../static/image/hehe.png'
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function Week15() {
  const [back, setBack] = useState(false);
  const [isshow1, setIsShow1] = useState(true);
  const [isshow2, setIsShow2] = useState(true);
  const [isshow3, setIsShow3] = useState(true);
  const [isshow4, setIsShow4] = useState(true);
  const [isshow5, setIsShow5] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState(''); 
  const [cardVisible, setCardVisible] = useState(false); 
 
 
  const navigate = useNavigate();

  const list1 = [
    { id: 0, uname: '周一', day: '3 日' },
    { id: 1, uname: '周二', day: '4 日' },
    { id: 2, uname: '周三', day: '5 日' },
    { id: 3, uname: '周四', day: '6 日' },
    { id: 4, uname: '周五', day: '7 日' },
    { id: 5, uname: '周六', day: '8 日' },
    { id: 6, uname: '周天', day: '9 日' }
  ];

  const list2 = [
    { id: 0, text: '6 月' },
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
  const [params]=useSearchParams()

  const uid1=params.get('uid1')
  const uid2=params.get('uid2')
  const msg1=params.get('msg1')
  const message1=params.get('message1')
  const message2=params.get('message2')
  const msg2=params.get('msg2')
  const [show, setShow] = useState(false);
  let touchStartX = 0, touchEndX = 0;
  const currentClickCount1=0;
  const currentClickCount2=0;
  const currentClickCount3=0;
  const currentClickCount4=0;
  const currentClickCount5=0;
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleMove = (e) => {
    touchEndX = e.touches[0].clientX;
    // 条件判断
    if (touchEndX - touchStartX > 30) {
      setOpen(true);
      if (open) {
        navigate('/week14');
      }
    }
    if (touchStartX - touchEndX > 30) {
      setOpen2(true);
      if (open2) {
        navigate('/week12');
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
    setSelectedCourse(courseText);
    setCardVisible(true); 
  };

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (!e.target.closest('.item')) { 
        setCardVisible(false);
        setSelectedCourse(''); 
      }
      if (!e.target.closest('.grid-item')) { 
        setIsShow1(false); 
        setIsShow2(false); 
        setIsShow3(false); 
        setIsShow4(false); 
        setIsShow5(false);
      }
    };
  
    document.addEventListener('click', handleDocumentClick);
  
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [cardVisible, selectedCourse]);
  
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
const data=[1,2,3,4,5,6,7]
const [clickCount1, setClickCount1] = useState(0);

const [clickCount2, setClickCount2] = useState(0);
const [clickCount3, setClickCount3] = useState(0);
const [clickCount4, setClickCount4] = useState(0);
const [clickCount5, setClickCount5] = useState(0);
const gridItems1 = [{id:0,showImage:false}, {id:1,showImage:false},{id:2,showImage:false}, {id:3,showImage:false},{id:4,showImage:false},{id:5,showImage:false},{id:6,showImage:false}];
const [gridItems, setGridItems] = useState(gridItems1);

const handleChange = (item, index) => {
  console.log(item.id)
  const updatedItems = [...gridItems];
  updatedItems[index].showImage = true;
  setGridItems(updatedItems);
  setClickCount1(prevCount => prevCount + 1); 
  if (clickCount1 === 1) { 
    navigate('/add?uid1=' + item.id); 
  }
};
const gridItems2 = [{id:0,showImage:false}, {id:1,showImage:false},{id:2,showImage:false}, {id:3,showImage:false},{id:4,showImage:false},{id:5,showImage:false},{id:6,showImage:false}];
const gridItems3 = [{id:0,showImage:false}, {id:1,showImage:false},{id:2,showImage:false}, {id:3,showImage:false},{id:4,showImage:false},{id:5,showImage:false},{id:6,showImage:false}];
const gridItems4 = [{id:0,showImage:false}, {id:1,showImage:false},{id:2,showImage:false}, {id:3,showImage:false},{id:4,showImage:false},{id:5,showImage:false},{id:6,showImage:false}];
const gridItems5 = [{id:0,showImage:false}, {id:1,showImage:false},{id:2,showImage:false}, {id:3,showImage:false},{id:4,showImage:false},{id:5,showImage:false},{id:6,showImage:false}];
const gridItems6 = [{id:0,showImage:false}, {id:1,showImage:false},{id:2,showImage:false}, {id:3,showImage:false},{id:4,showImage:false},{id:5,showImage:false},{id:6,showImage:false}];
const gridItems7= [{id:0,showImage:false}, {id:1,showImage:false},{id:2,showImage:false}, {id:3,showImage:false},{id:4,showImage:false},{id:5,showImage:false},{id:6,showImage:false}];
const gridItems8= [{id:0,showImage:false}, {id:1,showImage:false},{id:2,showImage:false}, {id:3,showImage:false},{id:4,showImage:false},{id:5,showImage:false},{id:6,showImage:false}];
const gridItems9= [{id:0,showImage:false}, {id:1,showImage:false},{id:2,showImage:false}, {id:3,showImage:false},{id:4,showImage:false},{id:5,showImage:false},{id:6,showImage:false}];
const gridItems10= [{id:0,showImage:false}, {id:1,showImage:false},{id:2,showImage:false}, {id:3,showImage:false},{id:4,showImage:false},{id:5,showImage:false},{id:6,showImage:false}];
const [gridItemstwo, setGridItemstwo] = useState(gridItems2);
const [gridItemsthree, setGridItemsthree] = useState(gridItems3);
const [gridItemsfour, setGridItemsfour] = useState(gridItems4);
const [gridItemsfive, setGridItemsfive] = useState(gridItems5);
const [gridItemsix, setGridItemsix] = useState(gridItems6);
const [gridItemsseven, setGridItemsseven] = useState(gridItems7);
const [gridItemseight, setGridItemseight] = useState(gridItems8);
const [gridItemsnine, setGridItemsnine] = useState(gridItems9);
const [gridItemsten, setGridItemsten] = useState(gridItems10);

const handleChange2 = (item, index) => {
  const updatedItems2 = [...gridItemstwo];
  updatedItems2[index].showImage = true;
  setGridItemstwo(updatedItems2);
  const currentClickCount2 = (clickCount2 || 0) + 1;
  if (currentClickCount2 === 2 &&(isshow2)) {
    navigate('/add?uid2= '+item.id); 
  }
  setClickCount2(currentClickCount2)
};
const handleChange3 = (item, index) => {
  const updatedItems3 = [...gridItemsthree];
  updatedItems3[index].showImage = true;
  setGridItemsthree(updatedItems3);
  const currentClickCount3 = (clickCount3 || 0) + 1;
  if (currentClickCount3 === 2 &&(isshow3)) {
    navigate('/add?uid3= '+item.id,); 
  }
  setClickCount3(currentClickCount3)
};
const handleChange4 = (item, index) => {
  const updatedItems4 = [...gridItemsfour];
  updatedItems4[index].showImage = true;
  setGridItemsfour(updatedItems4);
  const currentClickCount4 = (clickCount4 || 0) + 1;
  if (currentClickCount4 === 2 &&(isshow4)) {
    navigate('/add?uid4= '+item.id,); 
  }
  setClickCount4(currentClickCount4)
};
const handleChange5 = (item, index) => {
  const updatedItems5 = [...gridItemsfive];
  updatedItems5[index].showImage = true;
  setGridItemsfive(updatedItems5);
  const currentClickCount5 = (clickCount5 || 0) + 1;
  if (currentClickCount5 === 2 &&(isshow5)) {
    navigate('/add?uid5= '+item.id,); 
  }
  setClickCount5(currentClickCount5)
};
const handleChange6 = (item, index) => {
  const updatedItems6 = [...gridItemsix];
  updatedItems6[index].showImage = true;
  setGridItemsix(updatedItems6);
}
const handleChange7 = (item, index) => {
  const updatedItems7 = [...gridItemsseven];
  updatedItems7[index].showImage = true;
  setGridItemsseven(updatedItems7);
}
const handleChange8 = (item, index) => {
  const updatedItems8 = [...gridItemseight];
  updatedItems8[index].showImage = true;
  setGridItemseight(updatedItems8);
}
const handleChange9 = (item, index) => {
  const updatedItems9 = [...gridItemsnine];
  updatedItems9[index].showImage = true;
  setGridItemsnine(updatedItems9);
}
const handleChange10 = (item, index) => {
  const updatedItems10 = [...gridItemsten];
  updatedItems10[index].showImage = true;
  setGridItemsten(updatedItems10);

}

  return (
    <div onTouchStart={handleStart} onTouchMove={handleMove}>
      <span><button onClick={handleClick} className='btn2'>btn</button></span>
      <span className='span1'>
        <h2>第十五周</h2>
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
        {gridItems.map((item,index) => (
  <div 
  onClick={()=>handleChange(item,index)}
  key={item.id}
   className="grid-item">
     {isshow1 && item.showImage && <img  style={{'width':'50px'}} src={src3} />}
    {uid1!==null ? (uid1.toString()===item.id.toString()&& <div style={{'width':'51px','height':'57px','backgroundColor':'skyblue'}}>{msg1}{message1}</div>):''}

  
  </div>
))}
        {/*  第二行  */}
        {gridItemstwo.map((item,index) => (
  <div 
  onClick={()=>handleChange2(item,index)}
  key={item.id}
  className="grid-item"> 
  {isshow2 && item.showImage && <img  style={{'width':'50px','height':'57px'}} src={src3} />}
  {uid2!==null ? (uid2.toString()===item.id.toString()&& <div style={{'width':'51px','height':'57px','backgroundColor':'skyblue'}}>{msg2}{message2}</div>):''}
  </div>
))}
        {/*  第三行  */}
        <div className="grid-item" ></div>
        <div className="item" onClick={() => handleCourseClick('体育1(下)跆拳道3班')}>体育</div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        {/*  第四行  */}
        <div className="grid-item"></div>
        <div className="item"  onClick={() => handleCourseClick('体育1(下)跆拳道3班')}>体育</div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        {/*  第五行  */}
        {gridItemsthree.map((item,index) => (
  <div 
  onClick={()=>handleChange3(item,index)}
  key={item.id}
   className="grid-item">
     {isshow3 &&item.showImage && <img  style={{'width':'50px'}} src={src3} />}
  </div>
))}
        {/*  第六行  */}
        {gridItemsfour.map((item,index) => (
  <div 
  onClick={()=>handleChange4(item,index)}
  key={item.id}
   className="grid-item">{isshow4 && item.showImage && <img  style={{'width':'50px'}} src={src3} />}</div>
))}
        {/*  第七行  */}
        {gridItemsfive.map((item,index) => (
  <div 
  onClick={()=>handleChange5(item,index)}
  key={item.id}
  className="grid-item">  {isshow5 &&item.showImage && <img  style={{'width':'50px'}} src={src3} />}</div>
))}
        {/*  第八行  */}
        {gridItemsix.map((item,index) => (
  <div 
  onClick={()=>handleChange6(item,index)}
  key={item.id}
 className="grid-item"> {item.showImage && <img  style={{'width':'50px'}} src={src3} />}</div>
))}
        {/*  第九行  */}
        {gridItemsseven.map((item,index) => (
  <div 
  onClick={()=>handleChange7(item,index)}
  key={item.id}
className="grid-item">{item.showImage && <img  style={{'width':'50px'}} src={src3} />}</div>
))}
        {/*  第十行  */}
        {gridItemseight.map((item,index) => (
  <div 
  onClick={()=>handleChange8(item,index)}
  key={item.id}
  className="grid-item">{item.showImage && <img  style={{'width':'50px'}} src={src3} />}</div>
))}
        {/*  第十一行  */}
        {gridItemsnine.map((item,index) => (
  <div 
  onClick={()=>handleChange9(item,index)}
  key={item.id}
 className="grid-item">{item.showImage && <img  style={{'width':'50px'}} src={src3} />}</div>
))}
        {/*  第十二行  */}
        {gridItemsten.map((item,index) => (
  <div 
  onClick={()=>handleChange10(item,index)}
  key={item.id}
className="grid-item">{item.showImage && <img  style={{'width':'50px'}} src={src3} />}</div>
))}
      </div>
      {cardVisible && (
        <span>
          {selectedCourse &&
            specialList.filter(item => item.text === selectedCourse).map((item, index) => (
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

export default Week15;