<template>
    <section></section>
</template>
<script>
export default {
    mounted() {
        this._initPropertyList();
    },
    methods: {
        _initPropertyList() {
            fetch("/xian/xianProperty", {
                method: "post"
            }).then(res => {
                console.log(res, 14);
            });
        }
    }
};
</script>
<style lang="scss" scoped>
</style>