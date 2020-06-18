<template>
  <div class="gdGolf-wrapper">
    <div class="map-container" id="map-container"></div>
  </div>
</template>
<script>
import testData from "./testData.js";
// 高德地图
const Web_Ak = "17569efbd54a284b8bd0ce338ae71616",
  Front_Ak = "ed769065a3d834f8f814990328914744";
export default {
  data() {
    return {
      gardens: [],
      driveRoutes: [],
      mapObj: null,
      entityObjs: [],
      pathData: [],
      pointObj: null,
    };
  },
  async mounted() {
    await this._initMapScript();
    await this._initMapUi();
    this._initPathData();
    // 创建path实例
    await this._initPathObj();
    // path数据化
    // 创建point实例
    await this._initPointObj();
    this._initHistoryPath();
    // point数据化
    // this._initPointData();
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
        mapScriptEl.src = `https://webapi.amap.com/maps?v=1.4.15&key=${Front_Ak}&callback=onLoad`;
        document.head.appendChild(mapScriptEl);
      });
    },
    _initMapContainer() {
      this.mapObj = new AMap.Map("map-container", {
        zoom: 17,
        // pitch: 74, //俯视角度
        // viewMode: "3D",
        center: [106.471445, 29.563047],
        zoomEnable: false,
        dragEnable: false,
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
          return resolve();
        };
      });
    },
    _initPathData() {
      testData.forEach((o, index) => {
        // console.log(index, 74);
        // console.log(o.geometry.coordinates, 75);
        this.pathData.push(o.geometry.coordinates);
        // this.pathData = testData[0].geometry.coordinates;
      });
    },
    _initHistoryPath() {
      this.entityObjs = this.entityObjs.map((o, index) => {
        o.path.setData([
          {
            name: `路线${index}`,
            path: [...o.trackData],
          },
        ]);
        let newLoc = o.trackData[o.trackData.length - 1];
        let new_long = Number(newLoc[0]) + Math.random() * 0.0001;
        let new_lang = Number(newLoc[1]) + Math.random() * 0.0001;
        o.trackData.push([new_long, new_lang]);
        if (o.trackData.length > 10) {
          o.trackData = o.trackData.slice(
            o.trackData.length - 10,
            o.trackData.length
          );
        }
        return o;
      });
      this._initPointData();
      //   this.pathObj.setData([
      //     {
      //       name: "路线0",
      //       path: [...this.pathData],
      //     },
      //   ]);

      setTimeout(() => {
        this._initHistoryPath();
      }, 1000);
    },
    _initCurMarker() {},
    _initPathObj() {
      return new Promise((resolve, reject) => {
        let that = this;
        if (!AMapUI) {
          // console.log("AMapUI false", 175);
          return;
        }
        AMapUI.load(["ui/misc/PathSimplifier", "lib/$"], function(
          PathSimplifier,
          $
        ) {
          that.pathData.forEach((o) => {
            let pathObj = new PathSimplifier({
              zIndex: 100,
              map: that.mapObj,
              autoSetFitView: false, //设置pathdata时，地图会自动被缩放和拖动。设置后可禁用该表现
              pathTolerance: 1,
              keyPointTolerance: 1,
              getPath: (pathData, pathIndex) => {
                return pathData.path;
              },
              renderOptions: {
                keyPointStyle: {
                  radius: 0,
                  fillStyle: "rgba(0,0,0,0)",
                  strokeStyle: "rgba(0,0,0,0)",
                  lineWidth: 0,
                },
                startPointStyle: {
                  radius: 0,
                  fillStyle: "#109618",
                  lineWidth: 1,
                  strokeStyle: "#eeeeee",
                },
                endPointStyle: {
                  radius: 0,
                  fillStyle: "#109618",
                  lineWidth: 1,
                  strokeStyle: "#eeeeee",
                },
                getPathStyle: () => {
                  return {
                    pathLineStyle: {
                      strokeStyle: "rgba(188,133,133,1)",
                      lineWidth: 2,
                    },
                  };
                },
                pathNavigatorStyle: {
                  // initRotateDegree: 37,
                  width: 1,
                  height: 40,
                  // autoRotate: true,
                  // lineJoin: "round",
                  content: "circle",
                  fillStyle: "#087EC4",
                  strokeStyle: "#116394",
                  lineWidth: 0.1,
                  pathLinePassedStyle: {
                    lineWidth: 1,
                    strokeStyle: "rgba(8, 126, 196, 1)",
                    borderWidth: 1,
                    borderStyle: "#eeeeee",
                    dirArrowStyle: false,
                  },
                },
                // renderAllPointsIfNumberBelow: 100
              },
            });

            that.entityObjs.push({
              path: pathObj,
              trackData: o,
            });
          });
          // cosnole.log()
          // pathObj.setData([
          //     {
          //         name: "路线0",
          //         path: [...testData[0].geometry.coordinates]
          //     }
          // ]);
          // let navg1 = pathObj.createPathNavigator(0, {
          //     loop: true, //循环播放
          //     speed: 10 //巡航速度，单位千米/小时
          // });
          // navg1.start();
          return resolve();
        });
      });
    },
    _initPointObj(point_location) {
      let that = this;
      return new Promise((resolve, reject) => {
        AMapUI.load(["ui/misc/PointSimplifier", "lib/$"], function(
          PointSimplifier,
          $
        ) {
          that.pointObj = new PointSimplifier({
            zIndex: 115,
            autoSetFitView: false,
            map: that.mapObj,
            getPosition: function(item) {
              if (!item) {
                return null;
              }

              var parts = item.split(",");

              //返回经纬度
              return [parseFloat(parts[0]), parseFloat(parts[1])];
            },
            getHoverTitle: function(dataItem, idx) {
              return `${idx}:${dataItem}`;
            },
            renderConstructor: PointSimplifier.Render.Canvas.GroupStyleRender,

            renderOptions: {
              eventSupport: false, //禁止事件,对性能更友好
              pointStyle: {
                fillStyle: null,
                width: 15,
                height: 15,
              },
              topNAreaStyle: null,
              getGroupId: function(item, idx) {
                //随机返回一个组ID
                return Math.ceil(10 * Math.random());
              },
              groupStyleOptions: function(gid) {
                var radius = 2 + 25 * Math.random();
                return {
                  pointStyle:
                    radius > 0
                      ? {
                          content: function(ctx, x, y, width, height) {
                            var p = {
                              x: x + width / 2,
                              y: y + height / 2,
                              radius: radius,
                            };

                            ctx.beginPath();
                            var gradient = ctx.createRadialGradient(
                              p.x,
                              p.y,
                              0,
                              p.x,
                              p.y,
                              p.radius
                            );
                            gradient.addColorStop(0, "rgba(217,120,0,1)");
                            gradient.addColorStop(1, "rgba(217,120,0,0.2)");
                            ctx.fillStyle = gradient;
                            ctx.arc(p.x, p.y, p.radius, Math.PI * 2, false);
                            ctx.fill();
                          },

                          //fillStyle: colors[gid % colors.length],
                          width: radius * 2,
                          height: radius * 2,
                        }
                      : null,
                  pointHardcoreStyle: {
                    width: radius * 2 + 3,
                    height: radius * 2 + 3,
                  },
                };
              },
              endPointStyle: {
                width: 26,
                height: 26,
              },
              hoverTitleStyle: {
                position: "top",
              },
            },
          });
          setInterval(function() {
            that.pointObj.render();
          }, 500);
          that._initPointData();
          return resolve();
        });
      });
    },
    _initPointData() {
      //   this.pointObj.setData([
      //     "106.471445, 29.563047",
      //     "106.471619, 29.563165",
      //     "106.478919, 29.566165",
      //     "106.475919, 29.565165",
      //   ]);
      let pointLocs = [];
      this.entityObjs.map((o) => {
        let locObj = o.trackData[o.trackData.length - 1];
        pointLocs.push(`${locObj[0]},${locObj[1]}`);
      });
      this.pointObj.setData(pointLocs);
    },
    _initPolineObj() {},
    _initLocation(locationStr) {
      console.log(locationStr, 154);
      return locationStr.split(",");
    },
  },
};
</script>
<style lang="scss" scoped>
.gdGolf-wrapper {
  width: 100%;
  height: 100%;
}
.map-container {
  width: 100%;
  height: 500px;
}
</style>
