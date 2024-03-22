async function foo() {
    console.log("start");
    await bar();
    console.log("end");
  }
  /* 上面的函数声明等于下面这个函数声明 */
  // //function foo(){
  // console.log("start")
  //   return Promise.resolve(bar()).then(()=>{
  //     console.log("end")
  //   })
  // }
  
  async function bar() {
    console.log("bar");
  }
  
  console.log(1);
  
  setTimeout(() => {
    console.log("time");
  });
  
  foo();
  
  new Promise((resolve) => {
    console.log("p1");
    resolve();
  }).then(() => {
    console.log("p2");
  });
  
  console.log(2);
  
  //给出代码执行流程分析和结果
  //首先 主线程 宏任务 微任务
  //列个表
  //主线程：打印1(全局)  调用foo函数(打印start)  调用函数(打印bar)  promise打印p1  打印2(全局)
  //宏任务：定时器(打印time)  
  //微任务：打印end  打印p2(promise.then())
  //结果 1 start bar p1 2 end p2 time
  //先判断同步还是异步，在看是微任务还是宏任务