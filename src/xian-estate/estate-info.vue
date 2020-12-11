<template>
    <div class="estateInfo-wrapper">
        
        <div v-if="estInfo" class="estate">
            <div class="estate-head">
                <div class="title" v-html="estInfo.label"></div>
                <div class="time">备案时间：{{ bInfo.time }}</div>
            </div>
            <div class="estate-con">
                <div class="unitprice">
                    单价：最低 <span>{{ bInfo.minUnitPrice }}</span> 元，最高
                    <span>{{ bInfo.maxUnitPrice }}</span> 元
                </div>
                <div class="drive h">
                    <div class="h-l">
                        <img class="drive-icon" src="https://i3.dd-img.com/upload/2018/0705/1530787534754.jpg!ddb"/>
                    </div>
                    <div class="h-r">
                        <div class="drive-label">开车</div>
                        <div class="drive-content">
                            距离
                            <span>
                            {{
                                Math.ceil(
                                parseInt(bInfo.drivingRoute.distance || 0) / 100
                                ) / 10
                            }}
                            </span>
                            公里,需要
                            <span>{{
                            Math.ceil(parseInt(bInfo.drivingRoute.duration) / 60)
                            }}</span>
                            分钟
                        </div>

                    </div>
                </div>
                <div class="bus h">
                    <div class="h-l">
                        <img class="bus-icon" src="https://img95.699pic.com/element/40091/3312.png_300.png"/>
                    </div>
                    <div class="h-r">
                        <div class="bus-label">乘公交</div>
                        <div class="bus-content">
                            距离{{
                                Math.ceil(parseInt(bInfo.busRoute.distance || 0) / 100) /
                                10
                            }}
                            公里，需要
                            {{ Math.ceil(parseInt(bInfo.busRoute.duration) / 60) }}
                            分钟，需要步行{{ bInfo.busRoute.walking_distance }}米
                        </div>
                    </div>
                </div>
                <div class="garden">
                周边
                <span
                    >&nbsp;{{
                    bInfo.garden ? bInfo.garden.num : 0
                    }}&nbsp;</span
                >家公园
                </div>
            </div>
            
        </div>
        <div v-else class="nestate">
            <div class="nestate-head">
                <div class="title"></div>
            </div>
            <div class="nestate-con">
                <div class="nestate-unitprice"></div>
                <div class="nestate-bus">
                    <div class="nestate-icon"></div>
                    <div class="nestate-content"></div>
                </div>
                <div class="nestate-drive">
                    <div class="nestate-icon"></div>
                    <div class="nestate-content"></div>
                </div>
                <div class="nestate-garden"></div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props:{
            bInfo:{
                type:Object,
                default:()=>{
                    // label:'',
                    // time:'',
                    // minUnitPrice:'',
                    // maxUnitPrice:'',
                    // garden.num
                    // drivingRoute.distance:10,
                    // drivingRoute.duration
                    // busRoute.distance:'',
                    // busRoute.duration:'',
                    // busRoute.walking_distance

                }
            }
        },
        data(){
            return{
                estInfo:null,
            }
        },
        mounted(){
            setTimeout(()=>{
                this.estInfo=this.bInfo
                console.log(this.bInfo,'bInfo')
            },5000)
        },
        methods:{
        }
    }
</script>
<style lang="scss" scoped>
div{
    box-sizing: border-box;
    overflow: hidden;
}
@keyframes loading {
    0%{
        opacity:0.3;
    }
    50%{
        opacity:0.9;
    }
    100%{
        opacity: 0.3;
    }
}
.nestate{
    padding:10px;
    /* animation: loading 2s infinite; */
    &-head{
        background: rgb(90, 128, 216);
        min-height:24px;
        margin-bottom:5px;
        padding:5px 10px;
        border-radius:5px;
    }
    &-con{
        background: rgba(20, 53, 129, 1);

        /* background: rgba(90, 128, 216,0.2); */
        padding:5px 10px;
        border-radius:5px;
    }
    &-unitprice{
        min-height: 28px;
    }
    &-drive{
        margin-top:15px;
    }
    &-bus,&-drive{
        display:flex;
        margin-top:15px;
    }
    &-icon{
        display: block;
        flex-shrink:0;
        width:40px;
        height:40px;
        border-radius:50%;
        background: rgba(90, 128, 216,0.3);
    }
    &-content{
        flex:1;
        min-height:50px;
        background: rgba(90, 128, 216,0.3);
        border-radius:5px;
        margin-left:10px;
    }
    &-garden{
        min-height: 28px;
    }
}
.estate{
    padding: 10px;
    border-radius: 5px;
    color: rgba(255, 255, 255, 1);
    &-head{
        background: rgb(90, 128, 216);
        margin-bottom:5px;
        padding:5px 10px;
        border-radius:5px;
    }
    &-con{
        background: rgba(20, 53, 129, 1);
        padding:5px 10px;
        border-radius:5px;

    }
}
    
.title {
    line-height: 28px;
    font-size: 18px;
    font-weight: 600;
    /* color: rgba(1, 1, 1, 1); */
    color: rgb(255, 178, 11);
}
.time {
    line-height: 20px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
}
.unitprice {
    line-height: 42px;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom:5px;
    span {
        color: rgba(243, 88, 67, 1);
        font-weight: 600;
    }
}
.h{
    display: flex;
    margin-bottom:10px;
    &-l{
        flex-shrink: 0;
        /* min-width:60px; */

    }
    &-r{
        flex:1;
        flex-shrink: 0;
        padding-left:15px;
    }
}
.drive {
    line-height: 26px;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.9);
    
    &-icon{
        display: block;
        width:40px;
        height:40px;
        border-radius:50%;
    }
    span {
        color:rgb(255, 178, 11);
    }
    &-content{
        line-height: 100%;
    }
}
.bus{
    margin-top:15px;
    &-icon{
        display: block;
        width:40px;
        height:40px;
        border-radius:50%;
    }

}



.bus,
.garden {
    line-height: 24px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
}
.garden {
    span {
        line-height: 24px;
        color: rgba(112, 226, 30, 1);
        font-size: 16px;
        font-weight: 600;
    }
}

.bus,
.garden,
.drive {
    display: flex;
    &-label {
        width: 60px;
        flex-shrink: 1;
        text-align: justify;
        text-align-last: justify;
    }
}
.content {
    flex: 1;
    flex-shrink: 1;
    justify-content: start;
}
.list-enter{
    /* opacity:0; */
    min-height: 50px;
    background:grey;

    .title{
        min-height: 32px;
        background:grey;
    }
    .time{
        min-height: 24px;
        background:grey;
    }
}
.list-enter-active{
    /* transition:all 3s ease; */
}
.list-enter-to{
    
}
</style>