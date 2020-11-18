<template>
    <div class="cardswitch-wrapper">
        <!-- 个人信息展示 -->
        <div class="info">
            <!-- <div class="info-menu">我的游戏</div>
            <div class="info-user">
                <div class="info-user-name">张三</div>
                <div class="info-user-setting">setting</div>
                <div class="info-user-duetime"></div>
            </div> -->
        </div>
        <!-- 卡片 -->
        <img class="container_bg" :src="actBgUrl" />

        <div class="container" >
            <div class="content" ref="container">
                <template v-if="curList&&curList.length>0" >
                
                    <div class="cards" :style="{transform:`translateX(${transformX}px`}">
                        <div v-for="(item,index) in curList" :key="item.index" class="cards-item" @mouseenter="handleMouseOver(item,index)" @mouseleave="handleMouseLeave" :ref="`pic_${item.index}`" @click="handleEnterCard(item)">
                            <img :class="['cards-item-pic',actCardId==item.index?'cards-item-pic-active':'']" v-lazy:imgData="{imgData:item,method:_loadImg}"/>
                        </div>
                    </div>
                    
                </template>
            </div>
            
        </div>
        <!-- 操作按钮 -->
        <div class="ope">
            <div class="ope-btn" v-show="actCardId>=0">
                进入游戏
            </div>
        </div>
        <my-modal v-show="showModal" :showModal="showModal"  @closeModal="showModal=false" :bgUrl="actBgUrl"></my-modal>
    </div>
</template>
<script>
    // 完成：
    // 横向图片懒加载
    // 图片聚焦样式
    // 图片聚焦右边，向右滑动，聚焦左边，向左滑动
    // 待补充：
    // 浏览器大小变化，样式更新
    // 懒加载，图片加载失败兜底处理
    import {cardList} from './cards.config.js';
    export default{
        data(){
            return {
                actCardId:-1,
                transformX:0,
                timerTask:null,
                hasLock:false,  //锁定动画触发；
                actBgUrl:require('./imgs/01.png'),
                showModal:false
            }
        },
        components:{
            myModal:()=>import('./modal.vue')
        },
        directives:{
            lazy:{
                bind:(el,binding,vnode)=>{
                    if(window.IntersectionObserver){
                        let handleObj=binding.value
                        let intersectionObserver=new IntersectionObserver(()=>{
                            handleObj.method(el,handleObj.imgData)
                        })
                        intersectionObserver.observe(el);
                    }
                }
            }
        },
        computed:{
            curList(){
                return cardList;
            },
            containerRc(){
                if(this.$refs.container){
                    let $container=this.$refs.container;
                    let cr=$container.getBoundingClientRect();
                    // 左右边界位置
                    return [cr.left,cr.right]
                }
            }
        },
        methods:{
            handleMouseLeave(){
                    // if(this.hasLock) return;
                    this.actCardId=-1;
            },
    
            handleMouseOver(item,index){
                // console.log(item.index,112)
                // console.log(new Date().getTime(),112);
                this._mouseOverAnimate(item,index)
                // (this._throttle(this._mouseOverAnimate,200))(item,index)
            },
            handleEnterCard(item){
                // console.log(item,91)
                this.showModal=true;
            },
            _loadImg(el,imgData){
                // console.log(imgData.index)
                // console.log(el.getAttribute('loaded'),80)
                if(el.getAttribute('loaded')) return;
                let elRc=el.getBoundingClientRect();
                // console.log(elRc.left,'left',this.containerRc[1],'right')
                if(elRc.left<this.containerRc[1]+20){
                    el.setAttribute('src',imgData.cardUrl)
                    el.setAttribute('loaded',true)
                }
            },
            _mouseOverAnimate(item,index){
                // 获取当前宽度配置，
                // 滑动结束后，暂时锁定该事件；

                if(this.hasLock) return;
                if(this.actCardId===item.index) return ;
                // 头尾元素处理
                let $firstEl=this.$refs[`pic_${this.curList[0].index}`][0];
                let $lastEl=this.$refs[`pic_${this.curList[this.curList.length-1].index}`][0];
                let firstElRc=$firstEl.getBoundingClientRect()
                let lastElRc=$lastEl.getBoundingClientRect()
                // 当前元素
                let $curEl=this.$refs[`pic_${item.index}`][0];
                let curElCr=$curEl.getBoundingClientRect();

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
                // console.log('moveSet',moveSet)
                if(moveSet>0){
                    // console.log('right',this.containerRc[0]-firstElRc.left)
                    this.transformX+=Math.min(moveSet,this.containerRc[0]-firstElRc.left)
                }
                if(moveSet<0){
                    // console.log('left',this.containerRc[1]-lastElRc.right,0)
                    // console.log('left',this.containerRc[1],1)
                    // console.log('left',lastElRc.right,2)

                    this.transformX+=Math.max(moveSet,this.containerRc[1]-lastElRc.right)
                }
                // console.log(this.transformX,'transformX',96)
                this.actCardId=item.index;
                this.actBgUrl=item.bgUrl;
                this.hasLock=true;
                setTimeout(()=>{
                    this.hasLock=false;
                },500)

                // if(curElCr.left<this.containerMidSet[0]){
                //     this.transformX+=this.containerMidSet[0]-curElCr.left;
                // }else if(curElCr.right>this.containerMidSet[1]){
                //     this.transformX+=this.containerMidSet[1]-curElCr.right;
                // }
                // console.log(this.transformX,'transformX',85)


            },
            _throttle(func,timer){
                let that=this;
                return function(){
                    let params=Array.from(new Set(arguments));
                    params=params.slice(0,params.length)
                    if(!that.timerTask){
                        func.bind(this)(...params);
                        that.timerTask=new Date().getTime();
                        return;
                    }

                    if(new Date().getTime()>that.timerTask+timer){
                        func.bind(this)(...params);
                        that.timerTask=new Date().getTime();
                        return;
                    }
                    // if(!that.timerTask){
                    //     func.bind(this)(...params);
                    // }else{
                    //     clearTimeout(that.timerTask)
                    //     that.timerTask=null;
                    // }
                    // that.timerTask=setTimeout(()=>{
                    //     func.bind(this)(...params);
                    // },timer)
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    div{
        display: block;
        /* overflow: hidden; */

    }
    .cardswitch-wrapper{
        width:100%;
        height:100%;
        display: flex;
        flex-direction:column;       
         position:relative;

    }
    .info{
        height: 100px;
        flex-shrink: 1;
        /* border:1px black solid; */
    }
    .ope{
        height:100px;
        flex-shrink: 1;
        color:#fff;
        position:relative;
        &-btn{
            display: inline-block;
            position: absolute;
            right:50px;
            line-height:32px;
            padding:0px 15px;
            border:1px white solid;
            border-radius:20px;
        }
    }
    .container{
        width:100%;
        margin:0 auto;
        flex:1;
        padding:0px 20px;

    }
    .content{
        width:100%;
        height:100%;
    }
    .container_bg{
        position: absolute;
        z-index:-1;
        width:100%;
        height:100%;
    }
    .cards{
        margin-right:30px;
        width:100%;
        height:100%;
        display: flex; 
        flex-wrap: nowrap;
        align-items: center;
        transition: all .6s ease;
        &-item{
            display:block;
            flex-shrink:0;
            width:200px;
            margin-right:20px;
            padding:20px;
            &-pic{
                display: block;
                width:100%;
                transition: all .6s ease;
            }

        }
    }
    
    .cards-item-pic-active{
        transform: scale(1.1,1.1);
        border:2px white solid;
        border-top-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }
</style>