<template>
    <div class="scroll-container">
        <div class="back" @click="handleBack">返回</div>
        <div class="content">
            this is pageIndex {{this.pageIndex}} test!
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            pageIndex:0
        }
    },
    mounted(){  
        // this.pageIndex=
        this.pageIndex=this.$route.query.pageIndex;
    },
    methods:{
        handleBack(){
            this.$router.go(-1);            
        }
    }
}
</script>
<style lang="scss" scoped>
    .back{
        font-size: 16px;
    }
    .content{
        font-size: 42px;
    }
</style>