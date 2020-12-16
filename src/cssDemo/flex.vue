<template>
    <div class="flex-wrapper">
        <div class="item">item1</div>
        <div class="item">item2</div>
        <div class="item">item3</div>
        <div class="item">item4</div>
        <div class="item">item5</div>

    </div>
</template>
<script>
export default{

}
</script>
<style lang="scss" scoped>
.flex-wrapper{
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-around; */
}
.item{
    flex-shrink: 0;
    width:120px;
    height:150px;
    border:1px black solid;
}
</style>