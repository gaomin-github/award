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
            pathObj: null,
            pathData: [],
            pointObj: null
        };
    },
    async mounted() {
        await this._initMapScript();
        await this._initMapUi();
        this._initPathData();
        // 创建path实例
        await this._initPathObj();
        // path数据化
        this._initHistoryPath();
        // 创建point实例
        await this._initPointObj();
        // point数据化
        this._initPointData();
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
                mapStyle: "amap://styles/light" //设置地图的显示样式
            });
        },
        async _initMapUi() {
            return new Promise((resolve, reject) => {
                // gd script ui引入
                let uiScriptEl = document.createElement("script");
                uiScriptEl.charset = "utf-8";
                uiScriptEl.src =
                    "https://webapi.amap.com/ui/1.0/main.js?v=1.0.11";
                document.head.appendChild(uiScriptEl);
                let that = this;
                uiScriptEl.onload = () => {
                    return resolve();
                };
            });
        },
        _initPathData() {
            this.pathData = testData[0].geometry.coordinates;
        },
        _initHistoryPath() {
            this.pathObj.setData([
                {
                    name: "路线0",
                    path: [...this.pathData]
                }
            ]);
            let newLoc = this.pathData[this.pathData.length - 1];
            let new_long = Number(newLoc[0]) + Math.random() * 0.0001;
            let new_lang = Number(newLoc[1]) + Math.random() * 0.0001;
            this.pathData.push([new_long, new_lang]);
            if (this.pathData.length > 10) {
                this.pathData = this.pathData.slice(
                    this.pathData.length - 10,
                    this.pathData.length
                );
            }
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
                                radius: 4,
                                fillStyle: "#dc3912",
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
                    that.pathObj = pathObj;
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
                AMapUI.load("ui/misc/PointSimplifier", "lib/$", function(
                    PointSimplifier,
                    $
                ) {
                    that.pointObj = new PointSimplifier({
                        zIndex: 185,
                        autoSetFitView: false,
                        map: that.mapObj,
                        getPosition: function(item) {
                            if (!item) {
                                return null;
                            }

                            var parts = item.split(",");

                            return [parseFloat(parts[0]), parseFloat(parts[1])];
                        },
                        getHoverTitle: function(dataItem, idx) {
                            return `序号${idx}`;
                        },
                        renderOptions: {
                            drawQuadTree: false,
                            drawPositionPoint: false,
                            drawShadowPoint: false,
                            //点
                            pointStyle: {
                                content: "circle",
                                width: 6,
                                height: 6,
                                fillStyle: "#1f77b4",
                                lineWidth: 1,
                                strokeStyle: "rgba(0,0,0,0)"
                            },
                            //TopN区域
                            topNAreaStyle: {
                                autoGlobalAlphaAlpha: true,
                                content: "rect",
                                fillStyle: "#e25c5d",
                                lineWidth: 1,
                                strokeStyle: "rgba(0,0,0,0)"
                            },
                            //点的硬核部分
                            pointHardcoreStyle: {
                                content: "none",
                                width: 5,
                                height: 5,
                                lineWidth: 1,
                                fillStyle: "rgba(0,0,0,0)",
                                strokeStyle: "rgba(0,0,0,0)"
                            },
                            //定位点
                            pointPositionStyle: {
                                content: "circle",
                                width: 2,
                                height: 2,
                                lineWidth: 1,
                                //offset: ['-50%', '-50%'],
                                strokeStyle: "rgba(0,0,0,0)",
                                fillStyle: "#cc0000"
                            },
                            //鼠标hover时的覆盖点
                            pointHoverStyle: {
                                width: 10,
                                height: 10,
                                content: "circle",
                                fillStyle: "rgba(0,0,0,0)",
                                lineWidth: 2,
                                strokeStyle: "#ffa500"
                            },
                            //空间被占用的点
                            shadowPointStyle: {
                                fillStyle: "rgba(0,0,0,0.2)",
                                content: "circle",
                                width: 6,
                                height: 6,
                                lineWidth: 1,
                                strokeStyle: "rgba(0,0,0,0)"
                            }
                        }
                        // renderConstructor:
                        //     PointSimplifier.Render.Canvas.GroupStyleRender,
                        // renderOptions: {
                        //     eventSupport: false,
                        //     // pointStyle: {
                        //     //     fillStyle: null,
                        //     //     width: 5,
                        //     //     height: 5
                        //     // },
                        //     pointStyle: {
                        //         content: "circle",
                        //         width: 16,
                        //         height: 16,
                        //         fillStyle: "#1f77b4",
                        //         lineWidth: 3,
                        //         strokeStyle: "rgba(0,0,0,0)"
                        //     },
                        //     topNAreaStyle: null,
                        //     getGroupId: function(item, idx) {
                        //         //随机返回一个组ID
                        //         return Math.ceil(10 * Math.random());
                        //     },
                        //     groupStyleOptions: function(gid) {
                        //         //随机设置大小
                        //         var radius = 2 + 100 * Math.random();

                        //         return {
                        //             pointStyle:
                        //                 radius > 0
                        //                     ? {
                        //                           content: function(
                        //                               ctx,
                        //                               x,
                        //                               y,
                        //                               width,
                        //                               height
                        //                           ) {
                        //                               var p = {
                        //                                   x: x + width / 2,
                        //                                   y: y + height / 2,
                        //                                   radius: radius
                        //                               };

                        //                               ctx.beginPath();
                        //                               var gradient = ctx.createRadialGradient(
                        //                                   p.x,
                        //                                   p.y,
                        //                                   0,
                        //                                   p.x,
                        //                                   p.y,
                        //                                   p.radius
                        //                               );
                        //                               gradient.addColorStop(
                        //                                   0,
                        //                                   "rgba(7,120,249,0.8)"
                        //                               );
                        //                               gradient.addColorStop(
                        //                                   1,
                        //                                   "rgba(7,120,249,0.1)"
                        //                               );
                        //                               ctx.fillStyle = gradient;
                        //                               ctx.arc(
                        //                                   p.x,
                        //                                   p.y,
                        //                                   p.radius,
                        //                                   Math.PI * 2,
                        //                                   false
                        //                               );
                        //                               ctx.fill();
                        //                           },

                        //                           //fillStyle: colors[gid % colors.length],
                        //                           width: radius * 2,
                        //                           height: radius * 2
                        //                       }
                        //                     : null,
                        //             pointHardcoreStyle: {
                        //                 width: radius * 2 + 3,
                        //                 height: radius * 2 + 3
                        //             }
                        //         };
                        //     }
                        // }
                    });
                    setInterval(() => {
                        that.pointObj.render();
                    }, 500);
                    that._initPointData();
                    return resolve();
                });
            });
        },
        _initPointData() {
            this.pointObj.setData([
                "106.471445, 29.563047",
                "106.471619, 29.563165",
                "106.478919, 29.566165",
                "106.481201, 29.565882",
                "112.985037,23.15046"
            ]);
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
}
.map-container {
    width: 100%;
    height: 500px;
}
</style>