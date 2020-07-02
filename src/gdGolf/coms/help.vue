<template>
    <div class="help-wrapper">

        <div class="help-btn" @click="helpHandler">
            help test
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        helpHandler(){
            console.log('helpHandler',13)
        }
    }
}
</script>
<style lang="scss" scoped>

</style>