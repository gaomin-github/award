<template>
  <div class="map-wrapper">
    <section class="garden" v-if="gardens && gardens.length > 0">
      <section v-for="(garden, key) in gardens" :key="key" class="garden-item">
        <section class="garden-item-icon">{{ key + 1 }}</section>
        <section class="garden-item-label">
          {{ garden.name }},距离{{ garden.distance }}米
        </section>
      </section>
    </section>
    <section class="map-container" id="map-container"></section>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import request from "request";
const GDKEY = "17569efbd54a284b8bd0ce338ae71616";
const gx_location = "108.8371912900,34.2032353700"; //高新软件园经纬度
const displayStrictCode = [
  610103,
  610104,
  610113,
  //   610116,
  // 610124
]; //碑林区，莲湖区，雁塔区，长安区，周至县

export default {
  data() {
    return {
      gardens: [],
      driveRoutes: [],
      mapObj: null,
      pathObj: null,
    };
  },
  computed: {
    ...mapGetters("estate", ["getCurArea"]),
  },
  async mounted() {
    await this._initMapScript();
    await this._initMapUi();

    // this._initDistrict();

    await this._initGardens();
    // this._initPathLns();

    this._initDriveRoute();
    setTimeout(async () => {}, 1000);
  },
  methods: {
    async _initMapScript() {
      return new Promise((resolve, reject) => {
        window.onLoad = async () => {
          this._initMapContainer();
          return resolve();
        };
        let mapScriptEl = document.createElement("script");
        mapScriptEl.charset = "utf-8";
        mapScriptEl.src = `https://webapi.amap.com/maps?v=1.4.15&key=${GDKEY}&callback=onLoad`;
        document.head.appendChild(mapScriptEl);
      });
    },
    _initMapContainer() {
      let gx_location_num = this._initLocation(gx_location);
      let des_location_num = this._initLocation(this.getCurArea.location);
      this.mapObj = new AMap.Map("map-container", {
        zoom: 11,
        center: [
          (Number(gx_location_num[0]) + Number(des_location_num[0])) / 2,
          (Number(gx_location_num[1]) + Number(des_location_num[1])) / 2,
        ],
        mapStyle: "amap://styles/light", //设置地图的显示样式
      });
    },

    async _initMapUi() {
      return new Promise((resolve, reject) => {
        // gd script ui引入
        let uiScriptEl = document.createElement("script");
        uiScriptEl.charset = "utf-8";
        uiScriptEl.src = "https://webapi.amap.com/ui/1.0/main.js?v=1.0.11";
        document.head.appendChild(uiScriptEl);
        let that = this;
        uiScriptEl.onload = () => {
          // 起点和终点标注
          AMapUI.loadUI(["overlay/SimpleMarker"], function(SimpleMarker) {
            new SimpleMarker({
              iconTheme: "default",
              iconStyle: "orange",
              map: that.mapObj,
              position: that._initLocation(gx_location),
              label: {
                content: "高新软件园",
                offset: new AMap.Pixel(-10, -20),
              },
            });

            new SimpleMarker({
              iconTheme: "default",
              iconStyle: "orange",
              map: that.mapObj,
              position: that._initLocation(that.getCurArea.location),
              label: {
                content: that.getCurArea.label,
                offset: new AMap.Pixel(-10, -20),
              },
            });
            return resolve();
          });
          // 路径标注
          //   this._initPathLns();
        };
      });
    },
    // 展示周边公园
    _initGardens() {
      request
        .get(`/xian/aroundGarden?originLocation=${this.getCurArea.location}`)
        .then((res) => {
          if (res.status === 200) {
            this.gardens = res.data;
            if (this.gardens && this.gardens.length > 0) {
              let that = this;
              AMapUI.loadUI(["overlay/SvgMarker"], function(SvgMarker) {
                that.gardens.map((garden, index) => {
                  var shape = new SvgMarker.Shape["Circle"]({
                    height: 16,
                    strokeWidth: 1,
                    strokeColor: "#fff",
                    fillColor: "#177261",
                  });
                  let labelCenter = shape.getCenter();
                  new SvgMarker(shape, {
                    map: that.mapObj,
                    position: that._initLocation(garden.location),
                    containerClassNames: "shape-Circle",
                    iconLabel: {
                      innerHTML: index + 1,
                      style: {
                        color: "#fff",
                        fontSize: "12px",
                      },
                    },
                    // showPositionPoint: true,//是否显示marker上的红点
                  });
                });
              });
            }
          }
        });
    },
    // 开车路线图样式
    _initPathLns() {
      let that = this;
      if (!AMapUI) {
        console.log("AMapUI false", 175);
      }
      AMapUI.load(["ui/misc/PathSimplifier", "lib/$"], function(
        PathSimplifier,
        $
      ) {
        let pathObj = new PathSimplifier({
          zIndex: 100,
          map: that.mapObj,

          getPath: (pathData, pathIndex) => {
            console.log(pathData.path, 163);

            return pathData.path;
          },
          renderOptions: {
            renderAllPointsIfNumberBelow: 100,
          },
        });
        pathObj.setData([
          {
            name: "路线0",
            path: [...that.driveRoutes],
          },
        ]);
        let navg1 = pathObj.createPathNavigator(0, {
          loop: true, //循环播放
          speed: 5000, //巡航速度，单位千米/小时
        });
        navg1.start();
      });
    },
    // 展示区域
    _initDistrict() {
      let that = this;
      AMapUI.load(["ui/geo/DistrictExplorer", "lib/$"], function(
        DistrictExplorer
      ) {
        let districtExplorer = new DistrictExplorer({
          map: that.mapObj, //关联的地图实例
        });
        var colors = [
          "#3366cc",
          "#dc3912",
          "#ff9900",
          "#aa9900",
          "#ff1901",
          "#aa0101",
          "red",
          "green",
        ];
        displayStrictCode.map((code, index) => {
          districtExplorer.loadAreaNode(code, function(error, areaNode) {
            districtExplorer.renderSubFeatures(areaNode, function(feature, i) {
              return {
                cursor: "default",
                bubble: true,
                strokeColor: "blue", //线颜色
                strokeOpacity: 1, //线透明度
                strokeWeight: 1, //线宽
                fillColor: "red", //填充色
                fillOpacity: 0.35, //填充透明度
              };
            });
            districtExplorer.renderParentFeature(areaNode, {
              cursor: "default",
              bubble: true,
              strokeColor: null, //线颜色
              strokeOpacity: 1, //线透明度
              strokeWeight: 1, //线宽
              fillColor: colors[index], //填充色
              fillOpacity: 0.35, //填充透明度
            });
          });
        });
      });
    },

    // 初始化驾车路线数据
    _initDriveRoute() {
      request
        .get(
          `/xian/drivingRoute?originLocation=${this.getCurArea.location}&destination=${gx_location}`
        )
        .then((res) => {
          if (res.status === 200) {
            if (res.data.steps && res.data.steps.length > 0) {
              res.data.steps.forEach((step) => {
                if (step.polyline) {
                  let arrLocation = this._formatPolyline(step.polyline);
                  this.driveRoutes.push(...this._formatPolyline(step.polyline));
                }
              });
              this._initPathLns();
            }
          }
        });
    },

    // 辅助函数
    _initLocation(locationStr) {
      return locationStr.split(",");
    },
    _formatPolyline(polyline) {
      let locationStr = polyline.split(";");
      let locationArr = locationStr.map((location) => {
        let locationItem = this._initLocation(location);
        return [Number(locationItem[0]), Number(locationItem[1])];
      });
      return locationArr;
    },
  },
};
</script>
<style lang="scss" scoped>
.map-con {
  padding: 0px 5px 5px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.garden {
  flex-shrink: 1;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
  padding-bottom: 10px;
  max-height: 160px;
  overflow: scroll;
  &-item {
    line-height: 26px;
    display: flex;
  }
  &-item-icon {
    width: 20px;
    background: #177261;
    color: rgba(255, 255, 255, 1);
    border-radius: 50%;
    text-align: center;
    height: 20px;
    line-height: 20px;
    margin: 3px 10px;
  }
  &-item-label {
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
