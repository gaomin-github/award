// _hmt全局不存在，则引入脚本
try{
    console.log(_hmt)
}catch(e){
    console.log(e,20)
    importHml()
}
function importHml(){
    return new Promise((resolve,reject)=>{
        let hmEl=document.createElement('script');
        hmEl.src="https://hm.baidu.com/hm.js?aed5b22f977f7df51e0f9e87402eb81b";
        let scriptArr=document.getElementsByTagName('script');
        scriptArr[0].parentNode.insertBefore(hmEl,scriptArr[0]);
        hmEl.onload=()=>{
            return resolve()
        }
    })
}
export async function bdTrack(method,params){
    try{
        if(!_hmt){
            console.log('baidutongji.js 引入失败',3);
            return;
        }
        if(method==='pv'){
            _hmt.push(['_trackPageview',params])
        }else if(method==='event'){
            _hmt.push(['_trackEvent',...params])
        }
    }catch(e){
        await importHml();
        bdTrack(method,params)
    }
    
}
