import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import List1Item  from '../common/List1Item'
import Card from '../common/Card'
import { useEffect } from 'react'
import './Week13.css'
import src2 from '../static/image/hehe.png'
import { useLocation } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
function Week13() {
  const [back,setBack]=useState(false)
 const [isVisible,setIsVisible]=useState(false)
 const [lastClicked,setLastClicked]=useState('')
  const [selectedCourse,setSelectedCourse]=useState('')
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
    const navigate=useNavigate()
    const list1=[{
      id:0,
     uname:'周一',
     day:'20日'
  },
   {
      id:1,
      uname:'周二',
      day:'21日'
   },
   {
      id:2,
      uname:'周三',
      day:'22日'
   },
   {  id:3,
      uname:'周四',
      day:'23日'
   },
   {      id:4,
      uname:'周五',
      day:'24日'
   },
   {        id:5,
      uname:'周六',
      day:'25日'
   },
   {        id:6,
      uname:'周天',
      day:'26日'
   }
]
const list2=[
  {id:0,text:'5月'},{id:1,text:'1'},{id:2,text:'2'},{id:3,text:'3'},{id:4,text:'4'},
  {id:5,text:'5'},{id:6,text:'6'},{id:7,text:'7'},{id:8,text:'8'},
  {id:9,text:'9'},{id:10,text:'10'},{id:11,text:'11'},{id:12,text:'12'}
 ]
    const [show,setShow]=useState(false)
    const [clickCount5,setClickCount5]=useState(0) 
    const [clickCount4,setClickCount4]=useState(0)
    const [clickCount3,setClickCount3]=useState(0)
    const [clickCount2,setClickCount2]=useState(0)
    const [clickCount1,setClickCount1]=useState(0)
 
    const [isShow1,setIsShow1]=useState(false)
    const [isShow2,setIsShow2]=useState(false)
    const [isShow3,setIsShow3]=useState(false)
    const [isShow4,setIsShow4]=useState(false)
    const [isShow5,setIsShow5]=useState(false)
    const [isTrue1, setIsTrue1] = useState(false); const [isTrue2, setIsTrue2] = useState(false); const [isTrue3, setIsTrue3] = useState(false); const [isTrue4, setIsTrue4] = useState(false); const [isTrue5, setIsTrue5] = useState(false);
    let touchStartX = 0, touchEndX = 0;
    const [open, setOpen] = useState(false)
    const [open2,setOpen2]=useState(false)
  
    const handleStart = (e) => {
        touchStartX = e.touches[0].clientX;
      };
      const handleCourseClick = (courseText) => {
        if (courseText === lastClicked) {
          setIsVisible(!isVisible);
        } else {
          setSelectedCourse(courseText);
          setIsVisible(true);
        }
        setLastClicked(courseText);
      };
      const handleMove = (e) => {
        touchEndX = e.touches[0].clientX;
        //条件判断
        if (touchEndX - touchStartX >30) { 
          setOpen(true);
          if(open){
            navigate('/week14')
          }
        }
        if (touchStartX-touchEndX >30) { 
          setOpen2(true);
          if(open2){
            navigate('/week12')
          }
        }
      };
      const handleClick2 = () => {
        setShow(true)
        if(show){
        navigate('/week15')
        }
}
const handleClick = () => {
  setBack(true)
  if(back){
  navigate('/')
  }
}

const handleGridClick1=()=>{
  console.log('isTrue1:', isTrue1); 
console.log('isShow1:', isShow1); 
console.log('ida:', ida); 
console.log('msg:', msg); 
console.log('message:', message); 
  setIsShow1(true)
  setIsTrue1(true)
  const currentClickCount = (clickCount1 || 0) + 1;
  if (currentClickCount === 2 &&(isShow1)) {
    navigate('/add?id=1'); 
  }
  setClickCount1(currentClickCount);
}
const handleGridClick2=()=>{
  setIsShow2(true)
    setIsTrue2(true)
  const currentClickCount = (clickCount2 || 0) + 1;
  if (currentClickCount === 2 &&(isShow2)) {
    navigate('/add?id=2'); 
   
  }
  setClickCount2(currentClickCount);
}
const handleGridClick3=()=>{
  setIsShow3(true)
  setIsTrue3(true)
  const currentClickCount = (clickCount3 || 0) + 1;
  if (currentClickCount === 2 &&(isShow3)) {
    navigate('/add?id=3'); 
  }
  setClickCount3(currentClickCount);
}
const handleGridClick4=()=>{
  setIsShow4(true)
  setIsTrue4(true)
  const currentClickCount = (clickCount4 || 0) + 1;
  if (currentClickCount === 2 &&(isShow4)) {
    navigate('/add?id=4'); 
  }
  setClickCount4(currentClickCount);
}
const handleGridClick5=()=>{
  setIsShow5(true)
  setIsTrue5(true)
 const currentClickCount = (clickCount5 || 0) + 1;
  if (currentClickCount === 2 &&(isShow5)) {
    navigate('/add?id=5'); 
  }
  setClickCount5(currentClickCount);
}
const [params]=useSearchParams()

const ida=params.get('ida')
//监听全局的点击事件
useEffect(() => {
 
  const handleDocumentClick = (event) => {
    if (!event.target.closest('.item')) { 
      setIsVisible(false);
      setSelectedCourse(''); 
      setLastClicked('')
    }
    if (!event.target.closest('.grid-item')) { 
      setIsShow1(false); // 点击其他地方时隐藏图片
    }
    if (!event.target.closest('.grid-item')) { 
      setIsShow2(false); // 点击其他地方时隐藏图片
    }
    if (!event.target.closest('.grid-item')) { 
      setIsShow3(false); // 点击其他地方时隐藏图片
    }
    if (!event.target.closest('.grid-item')) { 
      setIsShow4(false); // 点击其他地方时隐藏图片
    }
    if (!event.target.closest('.grid-item')) { 
      setIsShow5(false); // 点击其他地方时隐藏图片
    }
  };

  document.addEventListener('click', handleDocumentClick);

  return () => {
    document.removeEventListener('click', handleDocumentClick);
  };
}, []);

const location = useLocation();
let msg = '';
let message = '';
if (location.state) {
  ({ msg, message } = location.state);
}
  return (
    <div
    onTouchStart={handleStart}
    onTouchMove={handleMove}
    >
     <span><button 
        onClick={handleClick}
        className='btn2'>btn</button></span>
      <span className='span1'>
            <h2>第十三周</h2>
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
        <div className='box1'>
       {/*    第一行 */}
       <div className="grid-item"  onClick={handleGridClick1}> 
       {isTrue1? (isShow1 && <img style={{'width':'45px'}} src={src2}/>) : (ida === '1' && <div style={{ backgroundColor: 'skyblue', width: '51px', height: '57px' }}>{`${msg}${message}`}</div>)}
      </div>
        <div className="item"  onClick={()=>handleCourseClick('C语言程序设计')} >C语言</div>
        <div className="grid-item"  onClick={handleGridClick2}> {isTrue2? (isShow2 && <img style={{'width':'45px'}} src={src2}/>) : (ida === '2' && <div style={{ backgroundColor: 'skyblue', width: '51px', height: '57px' }}>{`${msg}${message}`}</div>)}</div>
        <div className="item"  onClick={()=>handleCourseClick('大学物理C上')}>大学物理</div>
        <div className="grid-item"  onClick={handleGridClick3}>  {isTrue3? (isShow3 && <img style={{'width':'45px'}} src={src2}/>) : (ida === '3' && <div style={{ backgroundColor: 'skyblue', width: '51px', height: '57px' }}>{`${msg}${message}`}</div>)}</div>
        <div className="grid-item"  onClick={handleGridClick4}> {isTrue4? (isShow4 && <img style={{'width':'45px'}} src={src2}/>) : (ida === '4' && <div style={{ backgroundColor: 'skyblue', width: '51px', height: '57px' }}>{`${msg}${message}`}</div>)}</div>
        <div className="grid-item"  onClick={handleGridClick5}> {isTrue5? (isShow5&& <img style={{'width':'45px'}} src={src2}/>) : (ida === '5' && <div style={{ backgroundColor: 'skyblue', width: '51px', height: '57px' }}>{`${msg}${message}`}</div>)}</div>
       {/*  第二行 */}
        <div className="grid-item"></div>
        <div className="item"  onClick={()=>handleCourseClick('C语言程序设计')}>C语言</div>
        <div class="grid-item"></div>
        <div className="item"  onClick={()=>handleCourseClick('大学物理C上')}>大学物理</div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
       {/*  第三行 */}
        <div className="item" onClick={()=>handleCourseClick('高等数学A(下)')} >高数</div>
        <div className="item"  onClick={()=>handleCourseClick('体育1(下)跆拳道3班')}>体育</div>
        <div className="item"  onClick={()=>handleCourseClick('微生物学')}>微生物学</div>
        <div className="item" onClick={()=>handleCourseClick('大学英语2')}>大学英语</div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>

      
       {/*  第四行 */}
        <div className="item"  onClick={()=>handleCourseClick('高等数学A(下)')}>高数</div>
        <div className="item"  onClick={()=>handleCourseClick('体育1(下)跆拳道3班')}>体育</div>
        <div className="item" onClick={()=>handleCourseClick('微生物学')}>微生物学</div>
        <div className="item" onClick={()=>handleCourseClick('大学英语2')}>大学英语</div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
      {/*   第五行 */}
        <div className="grid-item"></div>
        <div className="item" onClick={()=>handleCourseClick('大学物理C上')}>大学物理</div>
        <div className="grid-item"></div>
        <div className="item"onClick={()=>handleCourseClick('中国近代史纲要')}>近代史纲要</div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
     {/*    第六行 */}
        <div className="grid-item"></div>
        <div className="item" onClick={()=>handleCourseClick('大学物理C上')}>大学物理</div>
        <div className="grid-item"></div>
        <div className="item" onClick={()=>handleCourseClick('中国近代史纲要')}>近代史纲要</div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
 {/*        第七行 */}
        <div className="grid-item"></div>
        <div className="item" onClick={()=>handleCourseClick('大学英语2')}>大学英语</div>
        <div className="grid-item"></div>
        <div className="item" onClick={()=>handleCourseClick('中国近代史纲要')}>近代史纲要</div>
        <div className="item" onClick={()=>handleCourseClick('高等数学A(下)')}>高数</div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
      {/*   第八行 */}
        <div className="grid-item"></div>
        <div className="item" onClick={()=>handleCourseClick('大学英语2')}>大学英语</div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="item" onClick={()=>handleCourseClick('高等数学A(下)')}>高数</div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
       {/*  第九行 */}
        <div className="grid-item"></div>
        <div className="item" onClick={()=>handleCourseClick('瑰丽的唐宋文学艺术')}>瑰丽唐宋</div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
      {/*   第十行 */}
        <div className="grid-item"></div>
        <div className="item" onClick={()=>handleCourseClick('瑰丽的唐宋文学艺术')}>瑰丽唐宋</div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
       {/*  第十一行 */}
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
      {/*   第十二行 */}
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        </div>{
      isVisible &&   <span>
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
                </span>}
    </div>
  )
}

export default Week13
