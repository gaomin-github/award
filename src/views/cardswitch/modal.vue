<template>
    <div class="modal-wrapper">
        <transition name="mask">
            <div class="modal-mask" v-show="showModal">

            </div>
        </transition>
        <transition name="modalcon">
            <div class="modal-con" v-show="showModal">

            </div>
        </transition>
    </div>
</template>
<script>
    export default{
        props:{
            showModal:{
                type:Boolean,
                default:false
            }
        }
    }
</script>
<style lang="scss" scoped>
.modal-wrapper{
    position:fixed;
    width:100%;
    height:100%;
    z-index:-1;
}
.modal-mask{
    position:fixed;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.6);
    z-index:30;
}
.modal-con{
    position:absolute;
    z-index:50;
    min-width:200px;
    min-height: 200px;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    background:rgba(255,255,255,0.9)
}
</style>