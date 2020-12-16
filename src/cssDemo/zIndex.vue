<template>
    <div class="flex-wrapper">
        <div class="item item1">item1</div>
        <div class="item item2">item2</div>
       

    </div>
</template>
<script>
// css层分析
// 1）z-index为负，会在auto下面；background border在-index下面
// 2）z-index：0和auto区别？
// auto时，不处于层叠上下文；z-index有值，div处于层叠上下文中；
// 0比auto更靠前；
// 3）z-index越大，越靠前展示吗？
// Div是否更靠前，不仅和z-index数值有关，还和父元素z-index有关；
// 相邻元素，z-index越大，越靠前；

export default{

}
</script>
<style lang="scss" scoped>
.flex-wrapper{
    /* display: flex;
    flex-wrap: wrap; */
    /* justify-content: space-around; */
}
.item{
    flex-shrink: 0;
    width:120px;
    height:150px;
}
.item1{
    background:rgba(50,100,100,1);
}
.item2{
    background:rgba(255,100,100,1);
    position: absolute;
    z-index:0;
    top:20px;
    left:50px;
}

</style>