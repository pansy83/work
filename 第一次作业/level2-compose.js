const compose=(...fns)=>{
    return fns.reduce((f,g)=>{
        return (...args)=>f(g(...args))
    })
}
let add=function(x){
    return x+5;
}
let mul=function(x){
    return x*5;
}
let sub=function(x){
    return x-5;
}
let div=function(x){
    return x/5;
}
let fn=compose(add,mul,sub,div);
console.log(fn(50));


