<template>
    <div class="cardswitch-wrapper">
        <!-- 个人信息展示 -->
        <div class="info">

        </div>
        <!-- 卡片 -->
        <div class="container" >
            <img class="container_bg" :src="actBgUrl"/>
            <div class="content" ref="container">
                <template v-if="curList&&curList.length>0" >
                
                    <div class="cards" :style="{transform:`translateX(${transformX}px`}">
                        <div v-for="(item,index) in curList" :key="item.index" class="cards-item" @mouseover="handleMouseOver(item,index)" @mouseleave="handleMouseLeave" :ref="`pic_${item.index}`">
                            <img :class="['cards-item-pic',actCardId==item.index?'cards-item-pic-active':'']" :src="item.cardUrl"/>
                            <!-- {{item}} -->
                        </div>
                    </div>
                    
                </template>
            </div>
            
        </div>
        <!-- 操作按钮 -->
        <div class="ope">

        </div>
    </div>
</template>
<script>
    // 横向图片懒加载
    // 图片聚焦样式
    // 图片聚焦右边，向右滑动，聚焦左边，向左滑动
    import {cardList} from './cards.config.js';
    export default{
        data(){
            return {
                actCardId:0,
                transformX:0,
                timerTask:null,
                hasLock:false,  //锁定动画触发；
                actBgUrl:'',
            }
        },
        computed:{
            curList(){
                // console.log(cardList,35)
                return cardList;
            },
            containerRc(){
                if(this.$refs.container){
                    let $container=this.$refs.container;
                    let cr=$container.getBoundingClientRect();
                    // let containerMid=Math.round((cr.left+cr.right)/2)
                    // console.log(containerMid,'containerMid')
                    // return containerMid
                    // 左右边界位置
                    return [cr.left,cr.right]
                }
            }
        },
        methods:{
            handleMouseLeave(){
                // setTimeout(()=>{
                    if(this.hasLock) return;
                    this.actCardId=-1;
                // },1000)
            },
            handleMouseOver(item,index){
                // (this.throttle(()=>{
                //     console.log(new Date().getTime(),64)

                // },500))(item)
                // console.log('index',index,68);
                (this.throttle(this._mouseOverAnimate,500))(item,index)
            },
            _mouseOverAnimate(item,index){
                // mouseover做节流处理
            
                // 获取当前宽度配置，
                // 移入后200ms内放大，移除后，200ms后缩小
                // 滑动结束后，暂时锁定该事件；
                if(this.hasLock) return;
                // 头尾元素做处理

                // 当前元素
                if(this.actCardId===item.index) return ;
                let $firstEl=this.$refs[`pic_${this.curList[0].index}`][0];
                
                let $lastEl=this.$refs[`pic_${this.curList[this.curList.length-1].index}`][0];
                // console.log($lastEl,86)
                let firstElRc=$firstEl.getBoundingClientRect()
                let lastElRc=$lastEl.getBoundingClientRect()

                let $curEl=this.$refs[`pic_${item.index}`][0];
                let curElCr=$curEl.getBoundingClientRect();
                // console.log('left',firstElRc,1)
                // console.log('left',lastElRc,2)

                let moveSet=0;
                if(index===0){
                    this.transformX=0;
                }else if(index===this.curList.length-1){
                    moveSet=this.containerRc[1]-curElCr.right
                }else{
                    let curEl_tcenter=Math.round((curElCr.left+curElCr.right)/2)
                    let container_tcenter=Math.round((this.containerRc[0]+this.containerRc[1])/2);
                    // console.log(this.containerMidSet,'aaa')
                    // console.log(curEl_tcenter,94)
                    // console.log(container_tcenter,96)
                    moveSet=container_tcenter-curEl_tcenter;
                }
                // 向右移动
                console.log('moveSet',moveSet)
                if(moveSet>0){
                    console.log('right',this.containerRc[0]-firstElRc.left)
                    this.transformX+=Math.min(moveSet,this.containerRc[0]-firstElRc.left)
                }
                if(moveSet<0){
                    console.log('left',this.containerRc[1]-lastElRc.right,0)
                    console.log('left',this.containerRc[1],1)
                    console.log('left',lastElRc.right,2)

                    this.transformX+=Math.max(moveSet,this.containerRc[1]-lastElRc.right)-50
                }
                console.log(this.transformX,'transformX',96)
                this.actCardId=item.index;
                this.actBgUrl=item.bgUrl;
                this.hasLock=true;
                setTimeout(()=>{
                    this.hasLock=false;
                },1000)

                // if(curElCr.left<this.containerMidSet[0]){
                //     this.transformX+=this.containerMidSet[0]-curElCr.left;
                // }else if(curElCr.right>this.containerMidSet[1]){
                //     this.transformX+=this.containerMidSet[1]-curElCr.right;
                // }
                // console.log(this.transformX,'transformX',85)


            },
            throttle(func,timer){
                let that=this;
                return function(){
                    let params=Array.from(new Set(arguments));
                    params=params.slice(0,params.length)
                    if(!that.timerTask){
                        func.bind(this)(...params);
                    }else{
                        clearTimeout(that.timerTask)
                        that.timerTask=null;
                    }


                    that.timerTask=setTimeout(()=>{
                        func.bind(this)(...params);
                    },timer)
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    div{
        display: block;
        box-sizing: border-box;
        /* overflow: hidden; */

    }
    .cardswitch-wrapper{
        width:100%;
        height:100%;
        display: flex;
        flex-direction:column;
    }
    .info{
        height: 100px;
        flex-shrink: 1;
        border:1px black solid;
    }
    .ope{
        height:100px;
        flex-shrink: 1;
    }
    .container{
        /* width:500px; */
        width:100%;
        margin:0 auto;
        flex:1;
        border:1px red solid;
        overflow: visible;
        position:relative;

    }
    .content{
        padding:0px 20px;
    }
    .container_bg{
        position: absolute;
        z-index:-1;
        width:100%;
        height:100%;
    }
    .cards{
        width:100%;
        height:100%;
        display: flex; 
        align-items: center;
        transition: all 1s ease;
        /* padding:0px 20px; */
        padding-right:20px;
        &-item{
            display:block;
            flex-shrink:1;
            min-width:200px;
            /* border:1px black solid; */
            margin-right:20px;
            padding:15px;
            &-pic{
                display: block;
                width:100%;
                transition: all 1s ease;
            }

        }
        /* flex-direction: column; */
    }
    .cards-item-pic-active{
        transform: scale(1.1,1.1);
        border:2px white solid;
        border-top-left-radius: 20px;
        border-bottom-right-radius: 20px;
        /* transform:translate(20px,10px); */
        /* .pic{
            /* transform: scale: (1.5);; */
        /* } */
    }
</style>