<template>
    <div class="swiper-wrapper">
        <div class="arrow arrow-left" @click="chageHandler(false)">《</div>
        <div class="arrow arrow-right" @click="chageHandler(true)">》</div>
        <div class="swiper-continer">

            <div :class="['swiper-content',hasAnimate?'swiper-animate':'']" ref="swiper_con":style="{transform:`translateX(-${(actIndex)*100}%)`}">
            <!-- <div :class="['swiper-content',hasAnimate?'swiper-animate':'']" v-if="dataList&&dataList.length>0" ref="swiper_con" > -->

                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props:{
            dataList:{
                default:()=>{

                },
                type:Array
            }
        },
        data(){
            return{
                actIndex:0,//活跃索引
                hasAnimate:true
            }
        },
        computed:{
            showList(){
                return [this.dataList[this.dataList.length-1],...this.dataList,this.dataList[0]]
            }
        },
        mounted(){
            // console.log(this.dataList,'dataList')
            this._initDom()
        },
        methods:{
            _initDom(){
                // console.log('_initDom',42)
                let $pEl=this.$refs.swiper_con;
                let childEl=$pEl.childNodes;
                let $firstEl=childEl[0],$lastEl=childEl[childEl.length-1];
                console.log('firstEl',$firstEl)
                console.log('lastEl',$lastEl)
                $pEl.appendChild($firstEl.cloneNode(true))
                $pEl.insertBefore($lastEl.cloneNode(true),$firstEl)
                this.actIndex++;
            },
            chageHandler(flag){
                console.log(flag,'flag')
                if(flag){
                    this.actIndex++;
                    let that=this;
                    // 不能用nextTick只能用settimeout且需要设置时间间隔的原因：
                    // data修改是同步的，dom更新/渲染是异步的
                    // setTimout,0设置动画，也会有跑帧数的情况
                    // 参考：https://zhuanlan.zhihu.com/p/66398148
                    // console.log('actIndex',this.actIndex,'showList.length',this.showList.length)
                    if(this.actIndex===this.showList.length-1){
                        // 加settimeout作用：动画执行为600ms，执行/渲染过程中，动画被取消，按照新的取消属性执行
                        setTimeout(()=>{
                            requestAnimationFrame(()=>{
                                that.hasAnimate=false;
                                that.actIndex=1;
                                requestAnimationFrame(()=>{
                                    that.hasAnimate=true;

                                })
                            })
                        },600)
                    }
                }else{
                    this.actIndex--;
                    if(this.actIndex===0){
                        this.actIndex=this.showList.length-2;
                    }
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
    .swiper-wrapper{
        width:100%;
        height:100%;
        position:relative;
        padding:0px 30px;
    }
    .swiper-continer{
        width:100%;
        height:100%;
        overflow: hidden;

    }
    .swiper-content{
        display: flex;
        flex-wrap: nowrap;
        position:relative;
        width:100%;
        height:100%;
        overflow: visible;
        div{
            flex-shrink: 0;
        }
    }
    .swiper-animate{
        transition:all .6s linear;

    }
    .item{
        display:block;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        margin-right:20px;
        &-img{
            display: block;
            flex:1;
            overflow: hidden;
            width:100%;
        }
        &-label{
            flex-shrink: 0;
            line-height: 30px;
            text-align: center;
        }
    }
    .arrow{
        position:absolute;
        width:35px;
        font-size: 30px;
        top:50%;
        transform: translateY(-50%);
        background:grey;
        text-align: center;
        &-left{
            left:0px;
        }
        &-right{
            right:0px;
        }
    }
</style>