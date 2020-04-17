<template>
<<<<<<< HEAD
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
=======
    <section class="xianEstate-wrapper">
        <div class="header"></div>
        <!-- <div v-if="buildingList && buildingList.length > 0" class="building">
            <section v-for="building in buildingList" :key="building.href" class="building-item">
                <div class="building-item-title">
                    <div class="building-item-label" v-html="building.label"></div>
                    <div class="building-item-arrow">》</div>
                </div>
                <div class="building-item-time">备案时间：{{ building.time }}</div>
                <div class="building-item-route drive">
                    <div class="building-item-route-way">开车：</div>
                    <div class="building-item-route-distance">
                        距离
                        {{ Math.ceil(parseInt(building.drivingRoute.distance) / 100) / 10 }}
                        公里,历时
                        {{ Math.ceil(parseInt(building.drivingRoute.duration) / 60) }} 分钟
                    </div>
                </div>

                <div class="building-item-route bus">
                    <div class="building-item-route-way">乘公交：</div>
                    <div class="building-item-route-distance">
                        距离
                        {{ Math.ceil(parseInt(building.busRoute.distance) / 100) / 10 }}
                        公里，历时
                        {{ Math.ceil(parseInt(building.busRoute.duration) / 60) }}
                        分钟，需步行：{{ building.busRoute.walking_distance }}米
                    </div>
                </div>

                <div class="building-item-garden">周边{{ building.aroundGarden.length }}家公园</div>
            </section>
        </div>-->
    </section>
>>>>>>> 82f6c8f193ec5b90330ce9915d440408828bc580
</template>
<script>
import request from "request";
export default {
<<<<<<< HEAD
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
=======
    data() {
        return {
            buildingList: []
        };
    },
    mounted() {
        // console.log("xian-estate ", 12);
        document.title = "xian";
        this._initPropertyList();
    },
    methods: {
        _initPropertyList() {
            const xianAxios = axios.create();

            xianAxios({ method: "get", url: "/xian/xianProperty" }).then(
                res => {
                    console.log(res, 46);
                    if (res.status === 200) {
                        this.buildingList = res.data;
                    }
                },
                reject => {
                    console.log(reject, 60);
                }
            );
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
        }
    }
>>>>>>> 82f6c8f193ec5b90330ce9915d440408828bc580
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
<<<<<<< HEAD
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
=======
    width: 100%;
    height: 100%;
    background: rgb(255, 255, 255);
}
.building {
    overflow-y: scroll;
    height: 100%;
    padding: 0px 15px;
    &-item {
        margin: 20px 0px;
        padding: 5px 10px;
        border-radius: 12px;
        background: rgba(13, 54, 151, 0.9);
        // display: flex;
        &-title {
            display: flex;
            align-items: center;
        }
        &-label {
            flex: 1;
            line-height: 26px;
            font-size: 16px;
            font-weight: 600;
            color: rgba(255, 178, 12, 1);
            margin-right: 10px;
        }
        &-arrow {
            width: 30px;
            font-size: 20px;
            font-weight: 800;
            color: rgb(255, 255, 255);
        }
        &-time {
            line-height: 20px;
            font-size: 12px;
            color: rgba(210, 210, 210, 1);
        }
        &-route {
            display: flex;
            flex-direction: row;
            align-items: top;
            line-height: 20px;
            font-size: 14px;
            margin: 10px 0px;
        }

        .drive {
            color: rgba(235, 235, 235, 1);
            font-weight: 500;
        }
        .bus {
            color: rgba(215, 215, 215, 1);
            font-weight: 400;
        }
        &-route-way {
            width: 60px;
        }
        &-route-distance {
            flex: 1;
            flex-shrink: 1;
        }
        &-garden {
            line-height: 30px;
            font-size: 12px;
            color: rgba(255, 255, 255, 1);
        }
>>>>>>> 82f6c8f193ec5b90330ce9915d440408828bc580
    }
}
</style>
