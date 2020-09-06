<template>
  <div class="gdGolf-wrapper">
    <div class="map-container" id="map-container"></div>
    <!-- <help-info ref="help-info"></help-info> -->
    <div class="bottom">
      <img src="./imgs/bg.png" />
    </div>
  </div>
</template>
<script>
import testData from "./testData.js";
// 高德地图
const Web_Ak = "17569efbd54a284b8bd0ce338ae71616",
  Front_Ak = "ed769065a3d834f8f814990328914744";
export default {
  components: {
    helpInfo: () => import("./coms/help.vue")
  },
  data() {
    return {
      gardens: [],
      driveRoutes: [],
      mapObj: null,
      entityObjs: [],
      pathData: [],
      pointObj: null,
      mapBound: [], //地图边界
      mapBoundObj: null,
      boundsList: [],
      mapInfoWin: null, //地图帮助窗口
      carIcon: require("./imgs/arrow_car.png"),
      devicePixelRatio: 1,
      marker: null
    };
  },
  async mounted() {
    this.devicePixelRatio = window.devicePixelRatio;
    //   地图引入
    await this._initMapScript();
    // 地图边界
    await this._initMapBounds();
    // 帮助弹窗
    // this._initInfoWin();
    // ui组件
    await this._initMapUi();
    // 区域边界(画出的自定义边界范围)
    // this._initAreaBounds();
    // 路径
    this._initPathData();
    // 创建path实例
    // await this._initPathObj();
    // path数据化
    // 创建point实例
    await this._initPointObj([113.4311468860794, 23.465010251374073]);
    // this._initHistoryPath();
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
    async _initMapBounds() {
      // 地图边界
      // this.mapBound=[[116.336985+0.3,40.034488-0.1],[116.333756-0.3,40.031116+0.1]]
      let top = [113.4059776512935, 23.45351783532674];
      let bottom = [113.4381468860794, 23.47010251374073];
      this.mapBound = [top, bottom];
      this.mapBoundObj = new AMap.Bounds(...this.mapBound);
      this.mapObj.setBounds(this.mapBoundObj);
    },
    _initInfoWin() {
      let that = this;
      import("./coms/help.vue").then(module => {
        //     console.log(module.innerHTML,72)
        that.mapInfoWin = new AMap.InfoWindow({
          position: new AMap.LngLat(116.333847, 40.033358),
          content: this.$refs["help-info"].$el
        });
        that.mapInfoWin.open(this.mapObj);
      });
    },
    async _initAreaBounds() {
      let layer = new AMap.LabelsLayer({
        rejectMapMask: true,
        collision: true,
        animation: true
      });
      let bounds1 = [
        [116.333847, 40.033358],
        [116.336459, 40.033367],
        [116.336872, 40.033342],
        [116.33684, 40.033034],
        [116.336792, 40.032993],
        [116.336792, 40.032993],
        [116.336754, 40.033001],
        [116.335966, 40.032948],
        [116.335199, 40.032931],
        [116.334705, 40.032911],
        [116.334394, 40.032919],
        [116.334249, 40.03287],
        [116.334212, 40.032808],
        [116.33419, 40.032541],
        [116.334158, 40.032529],
        [116.333954, 40.032533],
        [116.333766, 40.032516],
        [116.333799, 40.032788],
        [116.333815, 40.032829],
        [116.333831, 40.033055],
        [116.333847, 40.033358]
      ];
      this.boundsList.push(bounds1);
      this.boundsList.map(bound => {
        let polygonOptions = {
          map: this.mapObj,
          strokeColor: "rgba(200,0,0,0.5)",
          strokeWidth: 2,
          fillColor: "rgba(0,0,0,0)"
        };
        let polygon = new AMap.Polygon(polygonOptions);
        polygon.setPath(bound);
        let label_new = new AMap.LabelMarker({
          position: bounds1[5],
          zooms: [3, 20],
          name: "biaozhu1",
          text: {
            content: "标注1",
            zooms: [3, 20],
            style: {
              fontSize: 20,
              fillColor: "rgba(255,255,255,1)"
            }
          }
        });
        layer.add(label_new);
      });
      this.mapObj.add(layer);
      this.mapObj.setFitView();
    },
    _initMapContainer() {
      this.mapObj = new AMap.Map("map-container", {
        // layers: [new AMap.TileLayer.Satellite()],
        // mapStyle: "amap://styles/light",
        mapStyle: "amap://styles/cd222232a6e0ba54dd6c92974cacfce7",
        zooms: [14, 16],
        doubleClickZoom: false
        // zoom: 17,
        // pitch: 74, //俯视角度
        // viewMode: "3D",
        // center: [106.471445, 29.563047],
        // zoomEnable: false,
        // dragEnable: false,
        // mapStyle: "amap://styles/light" //设置地图的显示样式
      });
      // this.mapObj.setMapStyle("amap://styles/38671b90dc06f424aa16610ef0ca3bbc");
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
            path: [...o.trackData]
          }
        ]);
        let newLoc = o.trackData[o.trackData.length - 1];
        let new_long = Number(newLoc[0]) + 0.0001;
        let new_lang = Number(newLoc[1]) + 0.0001;
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

      // setTimeout(() => {
      //   this._initHistoryPath();
      // }, 1000);
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
          that.pathData.forEach((o, index) => {
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
                  lineWidth: 0
                },
                startPointStyle: {
                  radius: 0,
                  fillStyle: "#109618",
                  lineWidth: 1,
                  strokeStyle: "#eeeeee"
                },
                endPointStyle: {
                  radius: 0,
                  fillStyle: "#109618",
                  lineWidth: 1,
                  strokeStyle: "#eeeeee"
                },
                getPathStyle: () => {
                  return {
                    pathLineStyle: {
                      strokeStyle: "rgba(188,133,133,1)",
                      lineWidth: 2
                    }
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
                    dirArrowStyle: false
                  }
                }
                // renderAllPointsIfNumberBelow: 100
              }
            });

            that.entityObjs.push({
              path: pathObj,
              trackData: o
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
    _initPointObj(point_location, index) {
      let that = this;
      return new Promise((resolve, reject) => {
        AMapUI.loadUI(["overlay/SimpleMarker"], function(SimpleMarker) {
          let marker = (that.marker = new SimpleMarker({
            iconLabel: {
              innerHTML: "new car",
              style: {
                color: "white"
              }
            },
            //自定义图标地址
            iconStyle: that.carIcon,

            //设置基点偏移
            offset: new AMap.Pixel(-19, -60),

            map: that.mapObj,

            showPositionPoint: true,
            position: [
              parseFloat(point_location[0]),
              parseFloat(point_location[1])
            ],
            zIndex: 100
          }));
          marker.on("click", function() {
            console.log(`marker click:${new Date().getTime()}`);
            let newP = [
              113.4311468860794 + 0.001 * Math.random(),
              23.465010251374073 + 0.001 * Math.random()
            ];
            console.log(newP, 342);
            marker.setPosition(newP);
            marker.setAnimation("AMAP_ANIMATION_BOUNCE");
            setTimeout(() => {
              marker.setAnimation("AMAP_ANIMATION_NONE");
            }, 3000);
          });
        });

        // AMapUI.load(["ui/misc/PointSimplifier", "lib/$"], function(
        //   PointSimplifier,
        //   $
        // ) {
        //   that.pointObj = new PointSimplifier({
        //     zIndex: 115,
        //     autoSetFitView: false,
        //     map: that.mapObj,
        //     getPosition: function(item) {
        //       if (!item) {
        //         return null;
        //       }
        //       var parts = item.split(",");
        //       //返回经纬度
        //       return [parseFloat(parts[0]), parseFloat(parts[1])];
        //     },
        //     getHoverTitle: function(dataItem, idx) {
        //       return `${idx}:${dataItem}`;
        //     },
        //     renderConstructor: PointSimplifier.Render.Canvas.GroupStyleRender,
        //     renderOptions: {
        //       eventSupport: false, //禁止事件,对性能更友好
        //       pointStyle: {
        //         fillStyle: null,
        //         width: 15,
        //         height: 15
        //       },
        //       // pointStyle: {
        //       //   content: PointSimplifier.Render.Canvas.getImageContent(
        //       //     // that.carIcon,
        //       //     "./static/imgs/arrow_car.png",
        //       //     // "https://webapi.amap.com/theme/v1.3/markers/n/mark_b1.png",
        //       //     function onload() {
        //       //       that.pointObj.renderLater();
        //       //     },
        //       //     function onerror(e) {
        //       //       console.log("图片加载失败");
        //       //     }
        //       //   ),
        //       //   width: 15,
        //       //   height: 27,
        //       //   offset: ["-50%", "-100%"]
        //       // },
        //       topNAreaStyle: null,
        //       getGroupId: function(item, idx) {
        //         //随机返回一个组ID
        //         return Math.ceil(10 * Math.random());
        //       },
        //       groupStyleOptions: function(gid) {
        //         return {
        //           pointStyle: {
        //             content: function(ctx, x, y, width, height) {
        //               // console.log(x, y, width, height, 382);
        //               let radius = 0;
        //               let imgObj = new Image();
        //               imgObj.src = that.carIcon;
        //               ctx.drawImage(
        //                 imgObj,
        //                 x + 0,
        //                 y + 0,
        //                 // width + 15,
        //                 // height + 15
        //                 (25 + radius) * that.devicePixelRatio,
        //                 (30 + radius) * that.devicePixelRatio
        //               );
        //               ctx.font = `bold ${16 * that.devicePixelRatio}px Arial`;
        //               ctx.fillStyle = "white";
        //               ctx.fillText(Math.random(), x, y);
        //             },
        //             width: 10,
        //             height: 15,
        //             offset: ["-50%", "-100%"]
        //           }
        //         };
        //       },
        //       pointHardcoreStyle: {
        //         width: Math.random() * 50 + 3,
        //         height: Math.random() * 50 + 3
        //       }
        //       // endPointStyle: {
        //       //   width: 26,
        //       //   height: 26
        //       // },
        //       // hoverTitleStyle: {
        //       //   position: "top"
        //       // }
        //     }
        //   });
        //   that.pointObj.on("click", function() {
        //     console.log(`point click current:${new Date().getTime()}`);
        //   });
        //   // setInterval(function() {
        //   //   that.pointObj.render();
        //   // }, 500);
        //   that._initPointData();
        //   return resolve();
        // });
      });
    },
    _initPointData() {
      // console.log("_initPointObj", 421);
      this.pointObj.setData([
        `${113.4311468860794 + Math.random() * 0.0002},
        ${23.465010251374073 + Math.random() * 0.0002}`
      ]);
      //   this.pointObj.setData([
      //     "106.471445, 29.563047",
      //     "106.471619, 29.563165",
      //     "106.478919, 29.566165",
      //     "106.475919, 29.565165",
      //   ]);
      // let pointLocs = [];

      // this.entityObjs.map(o => {
      //   let locObj = o.trackData[o.trackData.length - 1];
      //   pointLocs.push(
      //     `${locObj[0] + Math.random() * 0.0004},${locObj[1] +
      //       Math.random() * 0.0004}`
      //   );
      // });
      // this.pointObj.setData(pointLocs);
      // setTimeout(this._initPointData, 3000);
    },
    _initPolineObj() {},
    _initLocation(locationStr) {
      console.log(locationStr, 154);
      return locationStr.split(",");
    }
  }
};
</script>
<style lang="scss" scoped>
.gdGolf-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.map-container {
  flex-shrink: 1;
  width: 100%;
  height: 500px;
}
.bottom {
  flex-shrink: 1;
  flex: 1;
  border: 1px red solid;
  // background: url("./imgs/bg.png") 0 0 no-repeat;
  background-size: 100% auto;
  overflow: hidden;
}
</style>
