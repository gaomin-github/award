// h5调起app demo
<template>
    <div class="chrisRule-wrapper">
        <div class="cbtns">
             <div class="cbtn" ref="android_btn" @click="_openApp">跳转客户端</div>
        </div>
    </div>
</template>
<script>
import { CallApp } from './h5callApp.js'
export default {
    data() {
        return {
            stepUrl: '',
            callObj: null
        }
    },
    created() {
        try{
            this.callObj = new CallApp(
                {
                    openLink: 'mitu://mitu.com/splash?target_url=https://mitukids.tv.mi.com/feedback'
                },
                {
                    openLink: 'https://mitukids.tv.mi.com/app/feedback'
                },
                2500
            )
        }catch(e){
            this.callObj=null;
        }
        
    },
    methods: {
        async _openApp() {
            try {
                let res=await this.callObj.open()
            } catch (e) {
                this.callObj.download({
                    mi: 'http://app.mi.com/details?id=com.xiaomi.mitukid&ref=search',
                    miui: 'http://app.mi.com/details?id=com.xiaomi.mitukid&ref=search',
                    miuibrowser: 'http://app.mi.com/details?id=com.xiaomi.mitukid&ref=search',
                    ios: 'https://itunes.apple.com/cn/app/id1523630423?mt=8',
                    default: 'http://cnbj1.fds.api.xiaomi.com/apk-resource/mitukids/release/Mikids-tv.apk'
                })
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.cbtns {
    display: flex;
}
.cbtn {
    min-width: 100px;
    padding: 5px 10px;
    border: 1px white solid;
    border-radius: 5px;
    margin: 10px 20px;
}
</style>
