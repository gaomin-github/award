
// 请求超时处理 sdk
// 超时
function timeoutReq(url,time,count){
    return new Promise((resolve,reject)=>{
        let timerTask=setTimeout(()=>{
            resolve(false);
        },time)
        executeReq(url,count).then((res)=>{
            clearTimeout(timerTask)
            resolve(true);
        })
    })
}

// 请求
function executeReq(url,count){
    return new Promise((resolve,reject)=>{
        console.log(`count:${count},task start:${new Date().getTime()}`)
        fetch(url).then(res=>{
            console.log(`count:${count},task   end:${new Date().getTime()}`)
            resolve(true)
        })
    })
}
// sdk暴露方法
/* url：请求地址
time：超时时间
count：复试次数
 */
function reqLimit(url,time,count){
    return new Promise(async (resolve,reject)=>{
        let res=await timeoutReq(url,time,count)
        console.log('count',count,'res',res)
        count--;
        if(!res){
            if(count>0){
                res=await reqLimit(url,time,count);
            }
            resolve(res);
        }
        resolve(res);
    })
}
// sdk调用demo
function reqDemo(){
    reqLimit('/xian/estateArea',1000*0.051,3).then(res=>{
        console.log('reqLimit res')
    })
}

export {
    reqLimit,reqDemo
}