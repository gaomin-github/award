<template>
    <section ref="lottieCon" class="lottie-wrapper" :style="style"></section>
</template>
<script>
import lottie from "lottie-web";
export default {
    props: {
        jsUrl: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            remoteJsonUrl: "http://192.168.31.252:9080/lottie.json",
            remoteJsUrl: "http://192.168.31.252:9080/jsDemoA.js",
            jsonImgUrl: "./q4-bg.json",
            style: {
                // width: "370px"
                height: ""
                // minHeight: "300px"
                // overflow: "hidden",
                // margin: "0 auto"
            }
        };
    },
    mounted() {
        // this._loadRemoteJson();
        // this._loadRemoteJs();
        this._loadJsonImg();
    },
    methods: {
        _loadJsonImg() {
            let that = this;
            let el = this.$refs.lottieCon;
            // console.log(el.offsetWidth, 35);
            // console.log(el.offsetHeight, 36);
            // console.log(el, 34);

            import("" + this.jsUrl).then(module => {
                this.style = { height: `${module.h / 2}px` };
                requestAnimationFrame(() => {
                    console.log(this.style, 44);
                    lottie.loadAnimation({
                        container: that.$refs.lottieCon,
                        renderer: "canvas",
                        loop: false,
                        autoplay: true,
                        animationData: module,
                        className: "canvas-default",
                        rendererSettings: {
                            // preserveAspectRatio: "slice"
                        }
                    });
                });
            });
        },
        _loadRemoteJs() {
            let scriptEl = document.createElement("script");
            scriptEl.src = this.jsUrl;
            window.executeJson = data => {
                console.log(`executeJson`, data, 26);
            };
            document.getElementsByTagName("head")[0].append(scriptEl);
        },
        _loadRemoteJson() {
            //   fetch(this.remoteJsonUrl)
            //     .then(res => {
            //       return res.json();
            //     })
            import("./demo.json").then(res => {
                let animObj = lottie.loadAnimation({
                    container: this.$refs.lottieCon,
                    renderer: "svg",
                    loop: true,
                    autoplay: true,
                    animationData: res,
                    rendererSettings: {}
                });
                this.$emit("animCreated", this.animObj);
            });
        },
        _loadLocalJson() {
            // import(/*webpackChunkName:'[request]'*/ "./demo.json").then(res => {
            //   console.log(res, 29);
            // });
        }
    }
};
</script>
<style lang="scss" scoped>
.lottie-wrapper {
    // width: 100%;
    // width: 100px;
    // height: 300px;
    // height: 100%;
    height: 600px;
}
.canvas-default {
    // min-height: 300px;
}
</style>
<!-- <style lang="scss" scoped></style> -->
