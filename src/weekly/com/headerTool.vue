<template>
    <div class="header-tool-wrapper">
        <header class="back" @click="handleBack">
            <i :class="['fa',`fa-chevron-left`]"></i>
        </header>
    </div>
</template>
<script>
export default {
    methods: {
        handleBack() {}
    }
};
</script>
<style lang="scss" scoped>
header {
    line-height: 36px;
    color: rgba(255, 255, 255, 1);
    width: 30px;
    height: 36px;
    padding-left: 5px;
    background: rgba(66, 144, 55, 1);
}
</style>