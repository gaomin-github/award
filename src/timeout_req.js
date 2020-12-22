
// 请求超时处理
function timeoutReq(url,time){
    return new Promise((resolve,reject)=>{
        let timerTask=setTimeout(()=>{
            resolve(false);
        },time)
        executeReq(url).then((res)=>{
            clearTimeout(timerTask)
            resolve(true);
        })
    })
}

function executeReq(url){
    let curCount=count;
    return new Promise((resolve,reject)=>{
        console.log(`count:${curCount},task start:${new Date().getTime()}`)
        fetch(url).then(res=>{
            console.log(`count:${curCount},task   end:${new Date().getTime()}`)
            resolve(true)
        })
    })
}
let count=3;
function reqLimit(url,time){
    return new Promise(async (resolve,reject)=>{
        let res=await timeoutReq(url,time)
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

export {
    reqLimit
}