// 微任务中创建微任务
// 每调用一次resolve，会将相应的then函数执行放到任务队列中

new Promise((resolve,reject)=>{
    console.log(1);
    Promise.resolve().then(()=>{
        setTimeout(() => {
            console.log(7)
        }, 0);
        console.log(2)
    })
    setTimeout(() => {
        console.log(9)
    }, 0);

    // new Promise((res1,rej1)=>{
    //     console.log(2)
    //     res1()
    // }).then(()=>{
    //     console.log(3)
    // })
    resolve();
}).then(()=>{
    console.log(4);
});
new Promise((resolve,reject)=>{
    console.log(5)
    
    resolve()
}).then(()=>{
    console.log(6)
});
setTimeout(()=>{
    console.log(8)
},0)