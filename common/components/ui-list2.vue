<template>
    <div class="list-wrapper" >
        <!-- <div class="handler">
            <div class="handler-del" @click="scrollDelTest(true)">顶部移除</div>
            <div class="handler-del" @click="scrollDelTest(false)">顶部增加</div>
        </div> -->
        <div class="list-container">
            <div class="list-content"  ref="listWrapper" @touchstart="touchStartHander" :style="{transform:`translate(${transformX}%,${transformY}%)`}">

                <div class="list-item" v-for="item in actList" :key="item.index">
                    <img class="list-item-img" :src="item.imgUrl"/>
                    <p class="list-item-label">
                        pageNo,{{pageNo}},{{item.label}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props:{
            imgList:{
                type:Array,
                default:[]
            }
        },
        data(){
            return {
                pageNo:0,
                startIndex:0,
                endIndex:1,
                timerTask:0,
                startY:0,   //触摸开始位置
                endY:0, //触摸停止位置
                transformX:0,
                transformY:0,
                clientHeight:document.documentElement.clientHeight,
            }
        },
        computed:{
            dataList(){
                let res=[]
                for(let i=0;i<this.pageNo*10;i++){
                    res.push({
                        index:i,
                        label:'this is label'+i,
                        imgUrl:this.imgList[i%4].imgUrl,
                        imgLabel:this.imgList[i%4].label
                    })
                }
                return res;
            },
            actList(){
                let res=this.dataList.slice(this.startIndex,this.endIndex);
                // console.log('res',res)
                return res;
            },
            pRec(){
                return this.$refs.listWrapper.getBoundingClientRect();
            }
        },
        mounted(){
            this.pageNo=20;
            // setTimeout(()=>{

            // })
            // 容器宽高
            this._initContainerrNum();
            // 子元素宽高

            setTimeout(()=>{
                this._addBottom()
            },0)
        },
        methods:{
            scrollDelTest(param){
                if(param){
                    this.startIndex++;
                }else{
                    this.startIndex--;
                }
            },
            touchStartHander(e){
                // console.log('e',e)
                this.startY=e.touches[0].clientY;
                // console.log('startY',this.startY)
                window.addEventListener('touchmove',this.touchMoveHandler,false)
                window.addEventListener('touchend',this.touchEndHandler,false)
            },
            async touchMoveHandler(e){
                let curY=e.touches[0].clientY;
                if(curY-this.startY>10){
                    // down
                    console.log('down')

                    this._transitionMove(curY-this.startY)
                    this._downHandler()
                }else if(curY-this.startY<-10){
                    // up
                    console.log('up')
                    this._transitionMove(curY-this.startY)
                    this._upHandler()
                    // console.log('_transitionMove start')

                }else{
                    return;
                }
                this.startY=curY;
            },
            touchEndHandler(){
                this.startY=0;
                window.removeEventListener('touchmove',this.touchMoveHandler,false)
                window.removeEventListener('touchend',this.touchEndHandler,false)
            },
            _els(){
                let pEl=this.$refs.listWrapper;
                let childs=pEl.childNodes;
                return {
                    p:pEl,
                    f:childs[0],
                    l:childs[childs.length-1]
                }
            },
            _transitionMove(distance){
                // console.log('distance',distance,'clientHeight',this.clientHeight)
                return new Promise((resolve,reject)=>{
                    let moveRation=distance/this.clientHeight;
                    console.log('moveRation',moveRation)
                    this.transformY+=moveRation*100
                    console.log('transformY',this.transformY)

                    setTimeout(()=>{
                        resolve()
                    },1500)
                })
                // console.log('_transitionMove')
                // console.log('clientHeight',this.clientHeight)

                // console.log('transformY',this.transformY)
                // let {p}=this._els();
                // console.log('pRec.bottom',p.getBoundingClientRect().bottom)

            },
            // 下滑，尾部回收，头部追加
            _downHandler(){
                

            },
            _recycleBottom(p,l){
            },
            _addTop(){

            },
            // 上滑，尾部追加，头部回收
           async _upHandler(){
                await this._addBottom();
                // await this._recycleTop()
            },
            _recycleTop(){
                return new Promise((resolve,reject)=>{
                    let {f}=this._els()
                    let pRec=this.pRec,fRec=f.getBoundingClientRect()
                    // console.log('pRec.top',pRec.top,'fRec.top',fRec.top,'f.offsetHeight',f.offsetHeight)
                    if(pRec.top+fRec.top<-(f.offsetHeight)){
                        // console.log('del',150)
                        this.startIndex++;
                        requestAnimationFrame(()=>{
                            resolve(true)
                        })
                    }
                })
            },
            _addBottom(){
                return new Promise((resolve,reject)=>{
                    let {p,l}=this._els()
                    let pRec=this.pRec,lRec=l.getBoundingClientRect()
                    // console.log('pRect.bottom',pRec.bottom,'lRec.bottom',lRec.bottom,'l.offsetHeight',l.offsetHeight)
                    if(lRec.bottom-pRec.bottom<=l.offsetHeight){
                        console.log('add')
                        this.endIndex++;
                        requestAnimationFrame(()=>{
                            this._addBottom()
                        })
                    }else{
                        resolve(true)
                    }
                })
            },
            // 容器边界
            _initContainerrNum(){
            },
            _throttle(func,delay){
                let that=this;
                return function(params){
                    if(that.timerTask&&new Date().getTime()-that.timerTask<delay){
                        return;
                    }
                    func.bind(this)(params)
                    that.timerTask=new Date().getTime()
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
div{
    box-sizing: border-box;
    overflow: hidden;
}
.list-wrapper{
    width:100%;
    height:100%;
    padding:10px;
    border:1px red solid;
    padding:40px 10px;
}
.handler{
    display: flex;
    height:40px;
    padding-bottom: 10px;
    &-del{
        line-height: 28px;
        padding:0px 10px;
        border-radius:20%;
    }
}
.list-container{
    width:100%;
    height:100%;
    overflow:hidden;
    border:1px grey solid;

}
.list-content{
    overflow: visible;
    width:100%;
    height:100%;
    transition:all .6s linear;
    border:1px blue solid;
}
.list-item{
    line-height: 62px;
    display:flex;
    height:130px;
    padding:7px 10px;
    /* border-bottom:1px grey solid; */
    &-img{
        width:80px;
    }
    &-label{
        height:100%;
        padding-left:20px;
    }
}
</style>