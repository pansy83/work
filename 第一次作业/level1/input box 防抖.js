function debounce(fn,delay=500){
    let timer=null;
    return function(){
        if(timer!=null){
            clearTimeout(timer)
        }
        timer=setTimeout(()=>{
            fn.apply(this,arguments)
            timer=null
        },delay)
    }
}
let input1=document.querySelector('.input');

input1.addEventListener('click',debounce(function(){
    console.log(9)
},600))
input1.addEventListener('keydown',debounce(function(){
    console.log(8)
},600))
input1.addEventListener('keyup',debounce(function(){
    console.log(7)
},600))