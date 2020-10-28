<template>
  <section class="test2-wrapper">
    thsi is test index 3 component
  </section>
</template>
<script>
  // import{printInfo} from './module_test.js'

export default {
  mounted() {
    // printInfo()
  },
  methods: {
   
  }
};
</script>
<style lang="scss" scoped>
.test2-wrapper {
  user-select: none;
  padding-top: 100px;
}
.btn-list-item {
  line-height: 42px;
}
.poster_bg {
  display: block;
  // width: 360px;
  // height: 400px;
  border: 1px black solid;
  // height: 500px;
}
.debuglog {
  position: absolute;
  top: 0px;
  line-height: 30px;
  font-size: 20px;
  color: red;
}
.onlinelog {
  position: absolute;
  top: 40px;
  line-height: 30px;
  font-size: 20px;
  color: green;
}
canvas {
  border: 1px red solid;
}
</style>
