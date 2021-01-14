<template>
    <div class="frame-wrapper">
        <div class="handle">
            <div class="handle-item" @click="sendMessage">sendMsg</div>
            <div class="handle-item" @click="getMessage">getMsg</div>
        </div>
        <iframe ref="iframe" src="http://localhost:8093/"></iframe>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                iframe:null
            }
        },
        mounted(){
            this._initFrameListener()
            let iframe=this.$refs.iframe;
            let that=this;
            iframe.onload=function(){
                that.iframe=iframe;
            }
        },
        methods:{
            // 监听子页面返回值
            _initFrameListener(){
                window.addEventListener('message',this._reciveMsgFromChild,false)
            },
            _reciveMsgFromChild(event){
                console.log('_reciveMsgFromChild')
                console.log(event,32)
                if(event.data&&event.data.key){
                    console.log(event.data,34)
                    // let data=JSON.parse(event.data)
                    // console.log('data from child',data)
                }
            },
            sendMessage(){
                if(this.iframe){

                    console.log('already send')
                    this.iframe.contentWindow.postMessage({
                        type:'set',
                        key:'token',
                        val:'12345fromaward'
                    },'*')
                }else{
                    console.log('this.iframe null')
                }
            },
            getMessage(){
                console.log('getMEssage')
                this.iframe.contentWindow.postMessage({
                    type:'get',
                    key:'token'
                },'*')

            }
        }
    }
</script>
<style lang="scss" scoped>
    .handle{
        line-height: 32px;
        margin:15px 0px;
        display: flex;
        justify-content: space-around;
        &-item{
            padding:0px 10px;
            border:1px grey solid;
            border-radius:15px;
        }
    }
</style>