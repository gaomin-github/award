<template>
    <div class="golf-wrapper">
        <div class="map-container" id="map-container"></div>
    </div>
</template>
<script>
import request from "request";

// import mapvgl from "mapvgl";
const AK = "o2KPqsZArcRSLQGiGyFz5Dgaz7UikZHI";
const Point = [106.560734, 29.566986];
export default {
    data() {
        return {
            mapObj: null,
            pathData: []
        };
    },
    mounted() {
        this._initPage();
    },
    methods: {
        async _initPage() {
            let scriptHandler = this._initBdScript();
            let pathDataHandler = this._initPathData();
            await pathDataHandler;
            await scriptHandler;
            // await this._initBdScript();
            // await this._initPathData();
            // console.log("_initPage", 30);
            this._initLayer();
        },
        _initBdScript() {
            return new Promise((resolve, reject) => {
                window.initialize = () => {
                    this._initMapContainer();
                    return resolve(true);
                };
                let scriptEl = document.createElement("script");
                scriptEl.setAttribute("type", "text/javascript");
                scriptEl.src = `https://api.map.baidu.com/api?v=1.0&type=webgl&ak=${AK}&callback=initialize`;
                document.body.appendChild(scriptEl);
            });
        },
        _initMapContainer() {
            this.mapObj = new BMapGL.Map("map-container");
            this.mapObj.centerAndZoom(new BMapGL.Point(Point[0], Point[1]), 12);
        },
        async _initPathData() {
            return new Promise((resolve, reject) => {
                request.get("/golf/entity").then(res => {
                    if (res.status === 200) {
                        this.pathData = res.data[0].path;
                        // console.log(this.pathData, 49);
                        return resolve(true);
                    }
                });
            });
        },
        _initLayer() {
            console.log("_initLayer", 53);
            let view = new mapvgl.View({
                map: this.mapObj
            });
            let layer = new mapvgl.LinePointLayer({
                color: "rgba(50, 50, 200, 1)",
                blend: "lighter",
                size: 2,
                speed: 1,
                color: "rgba(255, 255, 0, 0.6)",
                animationType: mapvgl.LinePointLayer.ANIMATION_TYPE_SMOOTH,
                shapeType: mapvgl.LinePointLayer.SHAPE_TYPE_CIRCLE,
                blend: "lighter"
            });
            view.addLayer(layer);
            layer.setData(this.pathData);
            let lineLayer = new mapvgl.SimpleLineLayer({
                color: "rgba(55, 55, 255, 0.11)"
            });
            view.addLayer(lineLayer);
            lineLayer.setData(this.pathData);
        }
    }
};
</script>
<style lang="scss" scoped>
.golf-wrapper {
    width: 100%;
    height: 100%;
}
.map-container {
    width: 100%;
    height: 400px !important;
    border: 1px black solid;
}
</style>