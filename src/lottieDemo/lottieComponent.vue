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
                width: "320px",
                height: "320px",
                overflow: "hidden",
                margin: "0 auto"
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
            import("./q4-bg.json").then(module => {
                console.log(`module`, 34);
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
<!-- <style lang="scss" scoped></style> -->
