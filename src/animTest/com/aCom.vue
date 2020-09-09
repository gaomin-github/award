<template>
  <div class="a-wrapper" ref="acon">
    <!-- <div class="item" v-for="(item,key) in 30" :key="key">
          this is page a ,pageIndex {{item}}
      </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log("aCom", 16);
  },
};
</script>
<style lang="scss" scoped>
.a-wrapper {
  width: 100%;
  height: 100%;

  background: url("./timg.jpeg") 0 0 no-repeat;
  background-size: 100% auto;
  overflow-y: scroll;
}
.item {
  line-height: 42px;
  font-size: 20px;
}
</style>
