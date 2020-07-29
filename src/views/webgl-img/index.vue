<template>
  <div class="webgl-wrapper">
    <div class="bars">
      <div class="bars-item" @click="updateState">id:{{this.id}}</div>

      <div v-for="item in type_keys" :key="item">{{item}}数量：{{getTypeNum(item)}}</div>
    </div>
    <!-- <img :src="imgUrl" style="width:200px;height:100px" /> -->
    <canvas id="canvas" ref="myCanva" width="320" height="200"></canvas>
  </div>
</template>
<script src="./index.js">
// // //
// //
//
</script>
<style lang="scss" scoped>
.webgl-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.bars {
  height: 100px;
  flex-shrink: 1;
  &-item {
    font-size: 16px;
    color: black;
  }
}
</style>