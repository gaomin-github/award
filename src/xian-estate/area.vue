<template>
  <section class="area-wrapper">
    <!-- <section class="header">
      {{ getAreaLabel() }}
        </section>-->
    <section class="content">
      <!-- <section class="tabs" v-if="tabs && tabs.length > 0">
        <section
          class="tabs-item"
          :class="tab.key"
          v-for="tab in tabs"
          :key="tab.key"
          @click="changeTab(tab)"
        >
          {{ tab.label }}
        </section>
            </section>-->

      <!-- <section
        class="horz building-title"
        v-if="buildings && buildings.length > 0 && curTabKey === 'list'"
      >
        <section class="name">房间号</section>
        <section class="space">面积</section>
        <section class="unit-price">单价(元)</section>
        <section class="total-price">总价(万元)</section>
            </section>-->

      <!-- <section
                class="building-list"
                v-if="buildings && buildings.length > 0 && curTabKey === 'list'"
            >
                <section
                    class="building-list-item horz"
                    v-for="(building,key) in buildings"
                    :key="key"
                >
                    <section class="name">{{ building.buildingId }}</section>
                    <section class="space">{{ building.space }}</section>
                    <section class="unit-price">{{ building.unitPrice }}</section>
                    <section
                        class="total-price"
                    >{{ Math.ceil(parseInt(building.totalPrice) / 10000) }}</section>
                </section>
            </section>-->

      <section class="map" v-if="curTabKey === 'map'">
        <!-- <section class="garden" v-if="gardens && gardens.length > 0">
                    <section
                        v-for="(garden,key) in gardens"
                        :key="key"
                        class="garden-item"
                    >{{ garden.name }},距离{{ garden.distance }}米</section>
                </section>-->
        <section class="map-container" id="map-container"></section>
      </section>
    </section>
  </section>
</template>
<script>
import request from "request";
const GDKEY = "17569efbd54a284b8bd0ce338ae71616";
const gx_location = "108.8371912900,34.2032353700"; //高新软件园经纬度

export default {
  data() {
    return {
      areaInfo: {},
      buildings: [],
      gardens: [],
      tabs: [
        {
          key: "list",
          label: "所有房间",
        },
        {
          key: "map",
          label: "地图查看",
        },
      ],
      curTabKey: "map",
      mapObj: null,
    };
  },
  async mounted() {
    document.title = "高德";

    this._initPrevPage();
    this._getBuildingInfo();
    await this._initMapScript();
    this._initGardens();
  },
  methods: {
    _initPrevPage() {
      let areaInfo = this.$route.query.areaInfo;
      this.areaInfo = JSON.parse(areaInfo);
      console.log(this.areaInfo, 15);
    },
    _getBuildingInfo() {
      let areaId = "8a901c28707bb13f0170e10d428d0913";
      request.get(`/xian/estateBuildings?areaId=${areaId}`).then((res) => {
        if (res.status === 200) {
          this.buildings = res.data;
        }
      });
    },
    async _initMapScript() {
      return new Promise((resolve, reject) => {
        window.onLoad = async () => {
          //   初始化map对象
          this._initMapContainer();
          // 引入map ui 插件
          await this._initMapUi();
          return resolve();
        };

        // gd script引入
        let url = `https://webapi.amap.com/maps?v=1.4.15&key=${GDKEY}&callback=onLoad`;
        let mapScriptEl = document.createElement("script");
        mapScriptEl.charset = "utf-8";
        mapScriptEl.src = url;
        document.head.appendChild(mapScriptEl);
      });
    },
    _initMapContainer() {
      this.mapObj = new AMap.Map("map-container", {
        zoom: 11,
        center: this._initLocation(gx_location),
        // mapStyle: "amap://styles/whitesmoke", //设置地图的显示样式
      });
    },
    async _initMapUi() {
      return new Promise((resolve, reject) => {
        // gd script ui引入
        let url_ui = `https://webapi.amap.com/ui/1.0/main.js?v=1.0.11`;
        let uiScriptEl = document.createElement("script");
        uiScriptEl.charset = "utf-8";
        uiScriptEl.src = url_ui;
        document.head.appendChild(uiScriptEl);
        let that = this;
        uiScriptEl.onload = () => {
          // this._initDistrict();
          // 起点和终点标注
          AMapUI.loadUI(["overlay/SimpleMarker"], function(SimpleMarker) {
            new SimpleMarker({
              iconTheme: "default",
              iconStyle: "blue",
              map: that.mapObj,
              position: that._initLocation(gx_location),
              label: {
                content: "高新软件园",
                offset: new AMap.Pixel(-10, -20),
              },
            });

            new SimpleMarker({
              iconTheme: "default",
              iconStyle: "blue",
              map: that.mapObj,
              position: that._initLocation(that.areaInfo.location),
              label: {
                content: that.areaInfo.label,
                offset: new AMap.Pixel(-10, -20),
              },
            });
            return resolve();
          });
          // 路径标注
          this._initPathLns();
        };
      });
    },
    _testMarker() {},
    _initPathLns() {
      // 开车路线
      let that = this;
      AMapUI.load(["ui/misc/PathSimplifier", "lib/$"], function(
        PathSimplifier,
        $
      ) {
        let lnsObj = new PathSimplifier({
          zIndex: 100,
          map: that.mapObj,

          getPath: (pathData, pathIndex) => {
            return pathData.path;
          },
          renderOptions: {
            renderAllPointsIfNumberBelow: 100,
          },
        });
        lnsObj.setData([
          {
            name: "路线0",
            path: [
              that._initLocation(gx_location),
              that._initLocation(that.areaInfo.location),
            ],
          },
        ]);
        var navg1 = lnsObj.createPathNavigator(0, {
          loop: true, //循环播放
          speed: 5000, //巡航速度，单位千米/小时
        });

        navg1.start();
      });
    },
    // 展示区域
    _initDistrict() {
      let that = this;
      AMapUI.loadUI(["geo/DistrictExplorer"], function(DistrictExplorer) {
        let districtExplorer = new DistrictExplorer({
          map: that.mapObj, //关联的地图实例
        });
        districtExplorer.loadAreaNode("", function(error, areaNode) {
          if (error) {
            console.log(error, 205);
            return;
          }
          var colors = ["#3366cc", "#dc3912", "#ff9900"];
          districtExplorer.renderSubFeatures(areaNode, function(feature, i) {
            var fillColor = colors[i % colors.length];
            var strokeColor = colors[colors.length - 1 - (i % colors.length)];

            return {
              cursor: "default",
              bubble: true,
              strokeColor: strokeColor, //线颜色
              strokeOpacity: 1, //线透明度
              strokeWeight: 1, //线宽
              fillColor: fillColor, //填充色
              fillOpacity: 0.35, //填充透明度
            };
          });
          districtExplorer.renderParentFeature(areaNode, {
            cursor: "default",
            bubble: true,
            strokeColor: "black", //线颜色
            fillColor: null,
            strokeWeight: 3, //线宽
          });
          that.mapObj.setFitView(districtExplorer.getAllFeaturePolygons());
        });
      });
    },
    _initCurrentLabel() {
      let placeSearch = new AMap.placeSearch({
        city: "西安",
      });
      placeSearch.search("高新软件园", function(res) {});
    },
    _initGardens() {
      request
        .get(`/xian/aroundGarden?originLocation=${this.areaInfo.location}`)
        .then((res) => {
          if (res.status === 200) {
            this.gardens = res.data;
            let that = this;
            if (this.gardens && this.gardens.length > 0) {
              AMapUI.loadUI(["overlay/SimpleMarker"], function(SimpleMarker) {
                that.gardens.map((garden) => {
                  console.log(garden, 254);
                  new SimpleMarker({
                    iconTheme: "default",
                    iconStyle: "blue",
                    map: that.mapObj,
                    position: that._initLocation(garden.location),
                    label: {
                      content: "高新软件园",
                      offset: new AMap.Pixel(-10, -20),
                    },
                  });
                });
              });
            }
          }
        });
    },
    _initLocation(locationStr) {
      return locationStr.split(",");
    },
    getAreaLabel() {
      if (this.areaInfo.label) {
        let label = this.areaInfo.label.replace(
          /(&middot;|&ldquo;|&rdquo;)/g,
          ""
        );
        return label;
      } else {
        return this.areaInfo.label;
      }
    },
    changeTab() {},
    _testMap() {
      window.onLoad = function() {
        var plugin_url = `https://webapi.amap.com/ui/1.0/main.js?v=1.0.11`;
        var jsPLugin = document.createElement("script");
        jsPLugin.charset = "utf-8";
        jsPLugin.src = plugin_url;
        document.head.appendChild(jsPLugin);
        jsPLugin.onload = () => {
          AMapUI.loadUI(["overlay/SimpleMarker"], function(SimpleMarker) {
            let map = new AMap.Map("map-container", {
              center: [108.83719129, 34.20323537],
              zoom: 12,
            });
            var iconTheme = "default";

            let marker = new SimpleMarker({
              iconTheme: iconTheme,
              //使用内置的iconStyle
              iconStyle: "blue",

              //图标文字
              iconLabel: {
                //A,B,C.....
                innerHTML: "111",
                style: {
                  //颜色, #333, red等等，这里仅作示例，取iconStyle中首尾相对的颜色
                  color: "red",
                },
              },

              //显示定位点
              //showPositionPoint:true,

              map: map,
              position: [108.83719129, 34.20323537],

              //Marker的label(见https://lbs.amap.com/api/javascript-api/reference/overlay/#Marker)
              label: {
                content: "111",
                offset: new AMap.Pixel(27, 25),
              },
            });
            // map.addOverlay(marker);
          });
        };
      };
      var url = `https://webapi.amap.com/maps?v=1.4.15&key=${GDKEY}&callback=onLoad`;
      var jsapi = document.createElement("script");
      jsapi.charset = "utf-8";
      jsapi.src = url;
      document.head.appendChild(jsapi);
    },
  },
};
</script>
<style lang="scss" scoped>
section {
  display: block;
  // overflow: hidden;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.area-wrapper {
  width: 100%;
  height: 100%;
  background: rgb(9, 41, 114);
  display: flex;
  flex-direction: column;
}
.header {
  /* height: 60px; */
  flex-shrink: 1;
  line-height: 45px;
  padding: 0px 10px;
  font-size: 18px;
  color: rgba(255, 178, 11, 1);
}
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0px 3px 10px;
  /* padding: 5px 0px; */
  border-radius: 15px 15px 3px 3px;

  background: rgba(255, 255, 255, 0.98);
}
.tabs {
  flex-shrink: 1;
  display: flex;
  justify-content: space-around;
  padding: 5px 10px;
  color: rgba(255, 255, 255, 0.8);
  &-item {
    padding: 0px 10px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    flex: 1;
  }
  .list {
    background-color: rgba(43, 116, 215, 1);

    border-radius: 20px 0px 0px 20px;
    color: rgba(255, 255, 255, 0.85);
  }
  .map {
    border-radius: 0px 20px 20px 0px;

    background: rgba(254, 148, 73, 1);
  }
}

.horz {
  display: flex;
  justify-content: space-between;
  .name,
  .space,
  .unit-price,
  .total-price {
    flex: 1;
    text-align: center;
  }
}
.building-title {
  padding: 0px 10px;
  line-height: 30px;
  border-top: 1px rgba(63, 116, 185, 1) solid;
  border-bottom: 1px rgba(63, 116, 185, 1) solid;
  background-color: rgba(43, 116, 215, 1);
  color: rgba(255, 255, 255, 0.9);

  .name,
  .space,
  .unit-price {
    border-right: 1px rgba(63, 116, 185, 0.8) solid;
  }
}
.building-list {
  flex: 1;
  overflow-y: scroll;
  padding-bottom: 10px;
  background: rgba(255, 255, 255, 0.9);
  .building-list-item {
    padding: 0px 10px;
    .name,
    .space,
    .unit-price {
      border-right: 1px rgba(43, 116, 215, 0.4) solid;
    }
    line-height: 34px;
    border-bottom: 1px rgba(43, 116, 215, 0.4) solid;
  }
}

.map {
  padding: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.garden {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
  max-height: 70px;
  &-item {
    line-height: 24px;
  }
}
.map-container {
  width: 100%;
  flex: 1;
  overflow: scroll;
  position: relative;
}
.amap-markers {
  /* border: 1px black solid !important; */
  overflow: visible !important;
}
</style>
