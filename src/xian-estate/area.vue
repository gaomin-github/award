<template>
  <section class="area-wrapper"></section>
</template>
<script>
import request from "request";
export default {
  data() {
    return {
      areaInfo: {},
    };
  },
  mounted() {
    this._initPrevPage();
    this._getBuildingInfo();
  },
  methods: {
    _initPrevPage() {
      let areaInfo = this.$route.query.areaInfo;
      this.areaInfo = JSON.parse(areaInfo);
      // console.log(JSON.parse(areaInfo), 15);
    },
    _getBuildingInfo() {
      let areaId = "8a901c28707bb13f0170e10d428d0913";
      request.get(`./xian/estateBuildings?areaId=${areaId}`).then((res) => {
        console.log(res, 21);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
div,
section {
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
</style>
