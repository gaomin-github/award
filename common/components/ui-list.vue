<template>
    <div class="list-wrapper" ref="listWrapper">
        <div class="list-item" v-for="item in actList" :key="item.index">
            <img class="list-item-img" :src="item.imgUrl"/>
            <p class="list-item-label">
                pageNo,{{pageNo}},{{item.label}}
            </p>
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
                pRec:0,
                timerTask:0,
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
                console.log('res',res)
                return res;
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
                for(let i=0;i<4;i++){
                    this._initChildRect()
                }
            },0)
            window.addEventListener('touchmove',()=>{
                (this._throttle(this._initChildRect,300))()
                // this._initChildRect()
            },true)
        },
        methods:{
            // 容器边界
            _initContainerrNum(){
                this.pRec=this.$refs.listWrapper.getBoundingClientRect();
                // console.log('clientHeight',this.clientHeight)
            },
            // 头尾元素更新
            _initChildRect(){
                console.log('_initChildRect',new Date().getTime())
                let childEl=this.$refs.listWrapper.childNodes;
                let lastEl=childEl[childEl.length-1];
                // console.log('lastEl',lastEl)
                let lastRec=lastEl.getBoundingClientRect();
                let firstEl=childEl[0];
                let firstRec=firstEl.getBoundingClientRect();
                // console.log('pRec',this.pRec)
                // console.log('lastRec',lastRec)
                console.log('lastEl',lastEl,82)
                console.log('pEl.bottom',this.pRec.bottom,'lastEl.bottom',lastRec.bottom)

                if(lastRec.bottom-this.pRec.bottom<=50){
                    console.log('add')
                    // console.log('lastEl',lastEl)

                    this.endIndex++;
                    setTimeout(()=>{

                    },0)
                    requestAnimationFrame(()=>{

                        // this._initChildRect()
                        if(firstRec.top+firstEl.offsetHeight<-10){
                            this.startIndex++;
                            this.$nextTick(()=>{
                                // this._initChildRect()
                            })
                        }

                    })
                    this.$nextTick(()=>{
                    })
                }
                // console.log('firstEl.top',firstRec.top,'firstEl.height',firstEl.offsetHeight,'pEl.top',this.pRec.top)
                // // if(firstRec.top)
                
            },
            _throttle(func,delay){
                let that=this;
                return function(params){
                    // console.log('timerTask',that.timerTask,'now',new Date().getTime())
                    // if(!that.timerTask){
                    //     func.bind(this)(params)
                    //     that.timerTask=new Date().getTime()
                    //     return ;
                    // }
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
.list-wrapper{
    width:100%;
    height:100%;
    padding:10px;
    border:1px red solid;
    overflow-y: scroll;
}
.list-item{
    line-height: 62px;
    display:flex;
    height:130px;
    padding:7px 10px;
    border-bottom:1px grey solid;
    &-img{
        width:80px;
    }
    &-label{
        height:100%;
        padding-left:20px;
    }
}
</style>