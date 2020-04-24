<template>
    <section class="animate-wrapper">
        this is lottie img test 123
        <section v-for="(item, key) in jsUrlList" :key="key">
            <lottie-component :jsUrl="item" class="img-item"></lottie-component>
        </section>
    </section>
</template>
<script>
import lottieComponent from "./lottieComponent.vue";
export default {
    components: {
        lottieComponent
    },
    mounted() {
        document.title = "lottie Demo";
    },
    data() {
        return {
            jsUrlList: [
                "./q8-bg-3.json"
                // "./q4-bg.json",
                // "./q9-mi-new-bg1.json",
                // "./q9-mi-new-bg2.json",
                // "./q9-mi-old-bg1.json",
                // "./q9-mi-old-bg2.json",
                // "./q9-oneplus-bg1.json"
                // "http://192.168.31.252:9080/jsDemoA.js",
                // "http://192.168.31.252:9080/jsDemoB.js",
                // "http://192.168.31.252:9080/jsDemoC.js"
            ]
        };
    }
};
</script>
<style lang="scss" scoped>
section {
    display: block;
    overflow: hidden;
    box-sizing: border-box;
}
.animate-wrapper {
    height: 100%;
    overflow-y: scroll;
}
.img-item {
    // width: 100%;
    height: 600px;
    border: 1px red solid;
    // margin: 20px 0px;
    // padding: 10px;
    // height: 100%;
    // height: 300px;
}
</style>
