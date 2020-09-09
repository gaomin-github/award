<template>
  <div class="b-wrapper">
    <!-- <div class="item" v-for="(item,key) in 30" :key="key">
          this is page a ,pageIndex {{item}}
      </div> -->
  </div>
</template>
<script>
export default {
  mounted() {
    console.log("bCom", 16);
  },
};
</script>
<style lang="scss" scoped>
.b-wrapper {
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  background: green;
}
.item {
  line-height: 42px;
  font-size: 20px;
}
</style>
