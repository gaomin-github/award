<template>
    <div class="assess-img-wrapper">
        <div v-if="imgUrl"></div>
        <div v-else class="assess-img" @click="chooseImg"></div>
    </div>
</template>
<script>
export default {
    props: {
        imgUrl: ""
    },
    methods: {
        chooseImg() {
            this.$emit("chooseImg");
        }
    }
};
</script>
<style lang="scss" scoped>
@import url("https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css");
section,
div {
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.assess-img-wrapper {
    width: 100%;
    height: 100%;
}
.assess-img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    line-height: 100%;
    font-size: 70px;
    font-weight: 200;
    color: #999;
    border: 1px black solid;
    padding-bottom: 10px;
    &:before {
        content: "+";
    }
}
</style>