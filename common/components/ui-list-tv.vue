<!-- 电视端list键盘操作下滑组件 -->
<!-- 需更新：
1）配置，列表宽高是否一致 -->
<template>
    <div class="list-wrapper">
        <div class="list-container" ref="con">
            <div class="list-content" ref="pel" :style="{transform:`translate(0,-${translateY}%)`,transition:`all ${duration}ms linear`}" >
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            translateY:0,
            clientH:document.documentElement.clientHeight,
        }
    },
    props:{
        duration:{
            type:Number,
            default:1000
        },
        actOrder:{
            type:Number,
            default:0
        }
    },
    mounted(){
        this._initKeyListener()
    },
    computed:{
        
    },
    methods:{
        _initKeyListener(){
            let {$pEl}=this._getEls();
            let maxLen=$pEl.children.length;
            window.addEventListener('keydown',(e)=>{
                // up
                if(e.keyCode===38){
                    if(this.actOrder===0) return;
                    this.$emit('changeAct',this.actOrder-1)
                    requestAnimationFrame(()=>{
                        this._handleUp()
                    })
                    return;
                }
                // down
                if(e.keyCode===40){
                    if(this.actOrder===maxLen-1) return;
                    this.$emit('changeAct',this.actOrder+1)
                    requestAnimationFrame(()=>{
                        this._handleDown()
                    })
                    return;
                }
            })
        },
        _getEls(){
            let $pEl=this.$refs['pel'];
            let $lEl=$pEl.children[$pEl.children.length-1]
            let $fEl=$pEl.children[0]
           let $con=this.$refs.con
            return {$pEl,$con,$fEl,$lEl}
        },
       _handleDown(){
           let {$pEl,$con,$lEl}=this._getEls()
        //    尾元素
            let lRec=$lEl.getBoundingClientRect()
        //    父容器
           let pRec=$con.getBoundingClientRect();
        //    当前元素
           let $actEl=$pEl.children[this.actOrder]
           let actRec=$actEl.getBoundingClientRect();
        //    console.log('actRec.bottom',actRec.bottom,'pRec.bottom',pRec.bottom,'actEl.offsetHeight',$actEl.offsetHeight,'actOrder',this.actOrder+1)
           if(actRec.bottom>=pRec.bottom){
            //    console.log('down')
            //    下滑
                let curDistance=$con.offsetHeight/2+$actEl.offsetHeight/2-(pRec.bottom-actRec.top)
                let lDistance=lRec.bottom-pRec.bottom;
                let distance=Math.min(curDistance,lDistance)
                let moveRatio=(distance)*100/$con.offsetHeight
                this.translateY+=moveRatio
           }
       },
       _handleUp(){
            // console.log('this.translateY start',this.translateY)

            let {$pEl,$con,$fEl}=this._getEls()
        //    尾元素
            let fRec=$fEl.getBoundingClientRect()
        //    父容器
           let pRec=$con.getBoundingClientRect();
        //    当前元素
           let $actEl=$pEl.children[this.actOrder]
           let actRec=$actEl.getBoundingClientRect();
        //    console.log('actRec.top',actRec.top,'pRec.top',pRec.top,'actEl.offsetHeight',$actEl.offsetHeight)
           if(actRec.top<=pRec.top){
            //    下滑
                let curDistance=$con.offsetHeight/2+$actEl.offsetHeight/2-(actRec.bottom-pRec.top)
                let fDistance=fRec.top-pRec.top;
                // let distance=curDistance;
                let distance=Math.min(Math.abs(curDistance),Math.abs(fDistance));
                let moveRatio=(distance)*100/$con.offsetHeight
                // console.log('distance',distance,'moveRatio',moveRatio)
                this.translateY-=moveRatio
                // console.log('this.translateY',this.translateY)
           }

       }
    }
}
</script>
<style lang="scss" scoped>
.list-wrapper{
    width:100%;
    height:100%;
}
.list-container{
    width:100%;
    height:800px;
    overflow-y: hidden;

}
.list-content{
    height:100%;
    overflow-y: visible;
    padding:50px 0px;
    // transition:all 1s linear;
}
.list-item{
    height: 190px;
    width:60%;
    margin:0 auto;
    margin-bottom:35px;
    background:rgba(255,255,255,0.3);
}
.list-item-active{
    transform: scale(1.03,1.03);
    border:1px #fff solid;
}
</style>