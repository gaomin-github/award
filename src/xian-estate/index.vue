<template>
  <div class="xianEstate-wrapper">
    <div v-if="buildingList && buildingList.length > 0" class="building">
      <section
        v-for="building in buildingList"
        :key="building.href"
        class="building-item"
      >
        <div class="building-item-label" v-html="building.label"></div>
        <div class="building-item-time">备案时间：{{ building.time }}</div>
        <div class="building-item-drive">
          开车：距离
          {{ Math.ceil(parseInt(building.drivingRoute.distance) / 100) / 10 }}
          公里,需要
          {{ Math.ceil(parseInt(building.drivingRoute.duration) / 60) }} 分钟
        </div>
        <div class="building-item-bus">
          乘公交：距离
          {{ Math.ceil(parseInt(building.busRoute.distance) / 100) / 10 }}
          公里，需要
          {{ Math.ceil(parseInt(building.busRoute.duration) / 60) }}
          分钟，需要步行：{{ building.busRoute.walking_distance }}米
        </div>
        <div class="building-item-garden">
          周边{{ building.aroundGarden.length }}家公园
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      buildingList: [],
    };
  },
  mounted() {
    console.log("xian-estate ", 12);
    this._initPropertyList();
  },
  methods: {
    _initPropertyList() {
      axios.get("/xian/xianProperty").then((res) => {
        console.log(res, 46);
        if (res.status === 200) {
          this.buildingList = res.data;
        }
      });
      // fetch("/xian/xianProperty", {
      //   method: "get",
      // })
      //   .then((res) => {
      //     console.log(res, 48);
      //     return res.json();
      //   })
      //   .then((data) => {
      //     // this.buildingList = data;
      //     console.log(data, 53);
      //   });
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
.xianEstate-wrapper {
  width: 100%;
  height: 100%;
  background: rgb(215, 215, 215);
}
.building {
  overflow-y: scroll;
  height: 100%;
  padding: 10px;
  &-item {
    margin: 10px 0px;
    &-label {
      line-height: 30px;
      font-size: 16px;
      font-weight: 600;
    }
    &-time {
      line-height: 20px;
      font-size: 12px;
      color: #333;
    }
    &-drive,
    &-bus,
    &-garden {
      line-height: 24px;
      font-size: 14px;
      color: #333;
    }
  }
}
</style>
