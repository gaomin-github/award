<template>
  <div class="xianEstate-wrapper">
    <section class="header">
      this is header test
    </section>
    <div v-if="areaList && areaList.length > 0" class="building">
      <section
        v-for="building in areaList"
        :key="building.href"
        class="building-item"
        @click="stepTo(building)"
      >
        <div class="building-item-label" v-html="building.label"></div>
        <div class="building-item-time">备案时间：{{ building.time }}</div>
        <div class="building-item-drive">
          <section class="label">开车：</section>
          <section class="content">
            距离
            {{ Math.ceil(parseInt(building.drivingRoute.distance) / 100) / 10 }}
            公里,需要
            {{ Math.ceil(parseInt(building.drivingRoute.duration) / 60) }} 分钟
          </section>
        </div>
        <div class="building-item-bus">
          <section class="label">乘公交：</section>
          <section class="content">
            距离{{ Math.ceil(parseInt(building.busRoute.distance) / 100) / 10 }}
            公里，需要
            {{ Math.ceil(parseInt(building.busRoute.duration) / 60) }}
            分钟，需要步行{{ building.busRoute.walking_distance }}米
          </section>
        </div>
        <div class="building-item-garden">
          周边<span>&nbsp;{{ building.garden.num }}&nbsp;</span>家公园
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import request from "request";
export default {
  data() {
    return {
      areaList: [],
    };
  },
  mounted() {
    console.log("xian-estate ", 12);
    this._initPropertyList();
  },
  methods: {
    _initPropertyList() {
      // console.log(request, 54);
      request.get("/xian/estateArea").then((res) => {
        console.log(res, 46);
        if (res.status === 200) {
          this.areaList = res.data;
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
    stepTo(area) {
      let areaStr = JSON.stringify(area);
      console.log(areaStr, 74);
      // this.$router.push({
      //   name: "xianBuilding",
      //   params: {
      //     areaInfo: area,
      //   },
      // });
      this.$router.push({
        name: "xianBuilding",
        query: {
          areaInfo: areaStr,
        },
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
.xianEstate-wrapper {
  width: 100%;
  height: 100%;
  background: rgb(9, 41, 114);
  display: flex;
  flex-direction: column;
}
.header {
  height: 80px;
  flex-shrink: 1;
}
.building {
  overflow-y: scroll;
  flex-shrink: 1;

  flex: 1;
  border-radius: 15px;
  background: rgb(255, 255, 255);
  &-item {
    margin: 15px 10px;
    padding: 8px 10px;
    background: rgb(20, 53, 129);
    border-radius: 10px;

    &-label {
      line-height: 24px;
      font-size: 16px;
      font-weight: 600;
      color: rgb(255, 178, 11);
    }
    &-time {
      line-height: 20px;
      font-size: 12px;
      color: rgba(255, 255, 255, 0.5);
    }

    &-drive {
      color: rgba(255, 255, 255, 0.9);
      margin: 3px 0px;
      line-height: 26px;
      font-size: 15px;
    }
    &-bus,
    &-garden {
      line-height: 24px;
      font-size: 13px;

      color: rgba(255, 255, 255, 0.75);
    }
    &-garden {
      span {
        line-height: 24px;
        color: rgba(205, 28, 113, 1);
      }
    }

    &-bus,
    &-garden,
    &-drive {
      display: flex;
      .label {
        width: 60px;
        flex-shrink: 1;
        text-align: justify;
        text-align-last: justify;
      }
      .content {
        flex: 1;
        flex-shrink: 1;
        justify-content: start;
      }
    }
  }
}
</style>
