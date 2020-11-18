<template>
    <div class="lazy-wrapper">
        <div class="cards">

            <div class="cards-item" v-for="item in cardList" :key="item.index">
                <img :src="item.cardUrl" v-lazy:imgData="{imgData:item,method:_loadImg}"/>
            </div>
        </div>
    </div>
</template>
<script>
    import {cardList} from './cards.config.js';
    export default{
        data(){
            return{
                cardList:cardList
            }
        },
        directives:{
            lazy:{
                bind:(el,binding,vnode)=>{
                    if(window.IntersectionObserver){
                        let handleObj=binding.value
                        // let method=binding.value.method;
                        let intersectionObserver=new IntersectionObserver(()=>{
                            handleObj.method(el,handleObj.imgData)
                            // console.log(imgData)
                            // this._loadImg(el,imgData)
                        })
                        intersectionObserver.observe(el);
                    }
                }
            }
        },
        methods:{
            _loadImg(el,imgData){
                console.log(imgData,71,new Date().getTime())
                // console.log(el);
                // if(el['loaded']) return;
                // console.log(el['loaded'],80)
                // el.setAttribute('src',imgData.cardUrl)
                // el.setAttribute('loaded',true)
                // console.log(this.containerRc)

            },
        }
    }
</script>
<style lang="scss" scoped>
    .lazy-wrapper{
        width:100%;
        height:100%;
    }
    .cards{
        width:100%;
        height:100%;
        overflow-y: scroll;
        &-item{
            width:150px;
            margin:10px;
        }
    }
</style>