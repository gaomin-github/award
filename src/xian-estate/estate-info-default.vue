<template>
    <div class="estateInfo-wrapper">
        <div class="nestate">
            <div class="nestate-head">
                <!-- <div class="nestate-title"></div>
                <div class="nestate-subtitle"></div> -->
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

    }
</script>
<style lang="scss" scoped>
    @keyframes loading {
    0%{
        opacity:0.3;
    }
    50%{
        opacity:0.75;
    }
    100%{
        opacity: 0.3;
    }
}

.nestate{
    padding:10px;
    animation: loading 1.6s infinite;
    &-head{
        background: rgb(90, 128, 216);
        min-height:54px;
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
        min-height: 48px;
    }
}
</style>