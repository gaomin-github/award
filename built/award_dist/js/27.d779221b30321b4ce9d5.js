(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/xian-estate/area-map.vue?vue&type=template&id=875214a8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"map-wrapper"},[(_vm.gardens && _vm.gardens.length > 0)?_c('section',{staticClass:"garden"},_vm._l((_vm.gardens),function(garden,key){return _c('section',{key:key,staticClass:"garden-item"},[_c('section',{staticClass:"garden-item-icon"},[_vm._v(_vm._s(key + 1))]),_vm._v(" "),_c('section',{staticClass:"garden-item-label"},[_vm._v("\n        "+_vm._s(garden.name)+",距离"+_vm._s(garden.distance)+"米\n      ")])])}),0):_vm._e(),_vm._v(" "),_c('section',{staticClass:"map-container",attrs:{"id":"map-container"}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/xian-estate/area-map.vue?vue&type=template&id=875214a8&scoped=true&

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(3);

// EXTERNAL MODULE: ./utils/request.js
var request = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/xian-estate/area-map.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//


const GDKEY = "17569efbd54a284b8bd0ce338ae71616";
const gx_location = "108.8371912900,34.2032353700"; //高新软件园经纬度

const displayStrictCode = [610103, 610104, 610113 //   610116,
// 610124
]; //碑林区，莲湖区，雁塔区，长安区，周至县

/* harmony default export */ var area_mapvue_type_script_lang_js_ = ({
  data() {
    return {
      gardens: [],
      driveRoutes: [],
      mapObj: null,
      pathObj: null
    };
  },

  computed: { ...Object(vuex_esm["b" /* mapGetters */])("estate", ["getCurArea"])
  },

  async mounted() {
    await this._initMapScript();
    await this._initMapUi(); // this._initDistrict();

    await this._initGardens(); // this._initPathLns();

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
        center: [(Number(gx_location_num[0]) + Number(des_location_num[0])) / 2, (Number(gx_location_num[1]) + Number(des_location_num[1])) / 2],
        mapStyle: "amap://styles/light" //设置地图的显示样式

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
          AMapUI.loadUI(["overlay/SimpleMarker"], function (SimpleMarker) {
            new SimpleMarker({
              iconTheme: "default",
              iconStyle: "orange",
              map: that.mapObj,
              position: that._initLocation(gx_location),
              label: {
                content: "高新软件园",
                offset: new AMap.Pixel(-10, -20)
              }
            });
            new SimpleMarker({
              iconTheme: "default",
              iconStyle: "orange",
              map: that.mapObj,
              position: that._initLocation(that.getCurArea.location),
              label: {
                content: that.getCurArea.label,
                offset: new AMap.Pixel(-10, -20)
              }
            });
            return resolve();
          }); // 路径标注
          //   this._initPathLns();
        };
      });
    },

    // 展示周边公园
    _initGardens() {
      request["a" /* default */].get(`/xian/aroundGarden?originLocation=${this.getCurArea.location}`).then(res => {
        if (res.status === 200) {
          this.gardens = res.data;

          if (this.gardens && this.gardens.length > 0) {
            let that = this;
            AMapUI.loadUI(["overlay/SvgMarker"], function (SvgMarker) {
              that.gardens.map((garden, index) => {
                var shape = new SvgMarker.Shape["Circle"]({
                  height: 16,
                  strokeWidth: 1,
                  strokeColor: "#fff",
                  fillColor: "#177261"
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
                      fontSize: "12px"
                    }
                  } // showPositionPoint: true,//是否显示marker上的红点

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
        // console.log("AMapUI false", 175);
        return;
      }

      AMapUI.load(["ui/misc/PathSimplifier", "lib/$"], function (PathSimplifier, $) {
        let pathObj = new PathSimplifier({
          zIndex: 100,
          map: that.mapObj,
          getPath: (pathData, pathIndex) => {
            return pathData.path;
          },
          renderOptions: {
            renderAllPointsIfNumberBelow: 100
          }
        });
        pathObj.setData([{
          name: "路线0",
          path: [...that.driveRoutes]
        }]);
        let navg1 = pathObj.createPathNavigator(0, {
          loop: true,
          //循环播放
          speed: 5000 //巡航速度，单位千米/小时

        });
        navg1.start();
      });
    },

    // 展示区域
    _initDistrict() {
      let that = this;
      AMapUI.load(["ui/geo/DistrictExplorer", "lib/$"], function (DistrictExplorer) {
        let districtExplorer = new DistrictExplorer({
          map: that.mapObj //关联的地图实例

        });
        var colors = ["#3366cc", "#dc3912", "#ff9900", "#aa9900", "#ff1901", "#aa0101", "red", "green"];
        displayStrictCode.map((code, index) => {
          districtExplorer.loadAreaNode(code, function (error, areaNode) {
            districtExplorer.renderSubFeatures(areaNode, function (feature, i) {
              return {
                cursor: "default",
                bubble: true,
                strokeColor: "blue",
                //线颜色
                strokeOpacity: 1,
                //线透明度
                strokeWeight: 1,
                //线宽
                fillColor: "red",
                //填充色
                fillOpacity: 0.35 //填充透明度

              };
            });
            districtExplorer.renderParentFeature(areaNode, {
              cursor: "default",
              bubble: true,
              strokeColor: null,
              //线颜色
              strokeOpacity: 1,
              //线透明度
              strokeWeight: 1,
              //线宽
              fillColor: colors[index],
              //填充色
              fillOpacity: 0.35 //填充透明度

            });
          });
        });
      });
    },

    // 初始化驾车路线数据
    _initDriveRoute() {
      request["a" /* default */].get(`/xian/drivingRoute?originLocation=${this.getCurArea.location}&destination=${gx_location}`).then(res => {
        if (res.status === 200) {
          if (res.data.steps && res.data.steps.length > 0) {
            res.data.steps.forEach(step => {
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
      let locationArr = locationStr.map(location => {
        let locationItem = this._initLocation(location);

        return [Number(locationItem[0]), Number(locationItem[1])];
      });
      return locationArr;
    }

  }
});
// CONCATENATED MODULE: ./src/xian-estate/area-map.vue?vue&type=script&lang=js&
 /* harmony default export */ var xian_estate_area_mapvue_type_script_lang_js_ = (area_mapvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/xian-estate/area-map.vue?vue&type=style&index=0&id=875214a8&lang=scss&scoped=true&
var area_mapvue_type_style_index_0_id_875214a8_lang_scss_scoped_true_ = __webpack_require__(98);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./src/xian-estate/area-map.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  xian_estate_area_mapvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "875214a8",
  null
  
)

/* harmony default export */ var area_map = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_area_map_vue_vue_type_style_index_0_id_875214a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_area_map_vue_vue_type_style_index_0_id_875214a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_area_map_vue_vue_type_style_index_0_id_875214a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_area_map_vue_vue_type_style_index_0_id_875214a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMveGlhbi1lc3RhdGUvYXJlYS1tYXAudnVlPzNhMmUiLCJ3ZWJwYWNrOi8vL3NyYy94aWFuLWVzdGF0ZS9hcmVhLW1hcC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3hpYW4tZXN0YXRlL2FyZWEtbWFwLnZ1ZT9mNTFkIiwid2VicGFjazovLy8uL3NyYy94aWFuLWVzdGF0ZS9hcmVhLW1hcC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3hpYW4tZXN0YXRlL2FyZWEtbWFwLnZ1ZT8zZmFlIiwid2VicGFjazovLy8uL3NyYy94aWFuLWVzdGF0ZS9hcmVhLW1hcC52dWU/YWVhNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwwQkFBMEIsYUFBYSwwQkFBMEIsd0JBQXdCLGlCQUFpQiwwQkFBMEIsd0RBQXdELHFCQUFxQiwyQ0FBMkMscUJBQXFCLGtDQUFrQyxnQkFBZ0IsK0JBQStCLHNEQUFzRCxnQ0FBZ0MseUZBQXlGLHdDQUF3QyxtQ0FBbUMsc0JBQXNCO0FBQ2xuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2FBO0FBQ0E7QUFDQTtBQUNBLG1ELENBQUE7O0FBQ0EsMkJBQ0EsTUFEQSxFQUVBLE1BRkEsRUFHQSxNQUhBLENBSUE7QUFDQTtBQUxBLEUsQ0FNQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBLHFCQUZBO0FBR0Esa0JBSEE7QUFJQTtBQUpBO0FBTUEsR0FSQTs7QUFTQSxjQUNBO0FBREEsR0FUQTs7QUFZQTtBQUNBO0FBQ0EsNEJBRkEsQ0FJQTs7QUFFQSw4QkFOQSxDQU9BOztBQUVBOztBQUNBO0FBQ0EsR0F2QkE7O0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxTQUhBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FUQTtBQVVBLEtBWkE7O0FBYUE7QUFDQTs7QUFDQTs7QUFDQTtBQUNBLGdCQURBO0FBRUEsaUJBQ0EsOERBREEsRUFFQSw4REFGQSxDQUZB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Ny5kNzc5MjIxYjMwMzIxYjRjZTlkNS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcIm1hcC13cmFwcGVyXCJ9LFsoX3ZtLmdhcmRlbnMgJiYgX3ZtLmdhcmRlbnMubGVuZ3RoID4gMCk/X2MoJ3NlY3Rpb24nLHtzdGF0aWNDbGFzczpcImdhcmRlblwifSxfdm0uX2woKF92bS5nYXJkZW5zKSxmdW5jdGlvbihnYXJkZW4sa2V5KXtyZXR1cm4gX2MoJ3NlY3Rpb24nLHtrZXk6a2V5LHN0YXRpY0NsYXNzOlwiZ2FyZGVuLWl0ZW1cIn0sW19jKCdzZWN0aW9uJyx7c3RhdGljQ2xhc3M6XCJnYXJkZW4taXRlbS1pY29uXCJ9LFtfdm0uX3YoX3ZtLl9zKGtleSArIDEpKV0pLF92bS5fdihcIiBcIiksX2MoJ3NlY3Rpb24nLHtzdGF0aWNDbGFzczpcImdhcmRlbi1pdGVtLWxhYmVsXCJ9LFtfdm0uX3YoXCJcXG4gICAgICAgIFwiK192bS5fcyhnYXJkZW4ubmFtZSkrXCIs6Led56a7XCIrX3ZtLl9zKGdhcmRlbi5kaXN0YW5jZSkrXCLnsbNcXG4gICAgICBcIildKV0pfSksMCk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSxfYygnc2VjdGlvbicse3N0YXRpY0NsYXNzOlwibWFwLWNvbnRhaW5lclwiLGF0dHJzOntcImlkXCI6XCJtYXAtY29udGFpbmVyXCJ9fSldKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJtYXAtd3JhcHBlclwiPlxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJnYXJkZW5cIiB2LWlmPVwiZ2FyZGVucyAmJiBnYXJkZW5zLmxlbmd0aCA+IDBcIj5cclxuICAgICAgPHNlY3Rpb24gdi1mb3I9XCIoZ2FyZGVuLCBrZXkpIGluIGdhcmRlbnNcIiA6a2V5PVwia2V5XCIgY2xhc3M9XCJnYXJkZW4taXRlbVwiPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiZ2FyZGVuLWl0ZW0taWNvblwiPnt7IGtleSArIDEgfX08L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJnYXJkZW4taXRlbS1sYWJlbFwiPlxyXG4gICAgICAgICAge3sgZ2FyZGVuLm5hbWUgfX0s6Led56a7e3sgZ2FyZGVuLmRpc3RhbmNlIH1957GzXHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cIm1hcC1jb250YWluZXJcIiBpZD1cIm1hcC1jb250YWluZXJcIj48L3NlY3Rpb24+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tIFwidnVleFwiO1xyXG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwicmVxdWVzdFwiO1xyXG5jb25zdCBHREtFWSA9IFwiMTc1NjllZmJkNTRhMjg0YjhiZDBjZTMzOGFlNzE2MTZcIjtcclxuY29uc3QgZ3hfbG9jYXRpb24gPSBcIjEwOC44MzcxOTEyOTAwLDM0LjIwMzIzNTM3MDBcIjsgLy/pq5jmlrDova/ku7blm63nu4/nuqzluqZcclxuY29uc3QgZGlzcGxheVN0cmljdENvZGUgPSBbXHJcbiAgNjEwMTAzLFxyXG4gIDYxMDEwNCxcclxuICA2MTAxMTMsXHJcbiAgLy8gICA2MTAxMTYsXHJcbiAgLy8gNjEwMTI0XHJcbl07IC8v56KR5p6X5Yy677yM6I6y5rmW5Yy677yM6ZuB5aGU5Yy677yM6ZW/5a6J5Yy677yM5ZGo6Iez5Y6/XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGdhcmRlbnM6IFtdLFxyXG4gICAgICBkcml2ZVJvdXRlczogW10sXHJcbiAgICAgIG1hcE9iajogbnVsbCxcclxuICAgICAgcGF0aE9iajogbnVsbCxcclxuICAgIH07XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgLi4ubWFwR2V0dGVycyhcImVzdGF0ZVwiLCBbXCJnZXRDdXJBcmVhXCJdKSxcclxuICB9LFxyXG4gIGFzeW5jIG1vdW50ZWQoKSB7XHJcbiAgICBhd2FpdCB0aGlzLl9pbml0TWFwU2NyaXB0KCk7XHJcbiAgICBhd2FpdCB0aGlzLl9pbml0TWFwVWkoKTtcclxuXHJcbiAgICAvLyB0aGlzLl9pbml0RGlzdHJpY3QoKTtcclxuXHJcbiAgICBhd2FpdCB0aGlzLl9pbml0R2FyZGVucygpO1xyXG4gICAgLy8gdGhpcy5faW5pdFBhdGhMbnMoKTtcclxuXHJcbiAgICB0aGlzLl9pbml0RHJpdmVSb3V0ZSgpO1xyXG4gICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7fSwgMTAwMCk7XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBhc3luYyBfaW5pdE1hcFNjcmlwdCgpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB3aW5kb3cub25Mb2FkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5faW5pdE1hcENvbnRhaW5lcigpO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCBtYXBTY3JpcHRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcbiAgICAgICAgbWFwU2NyaXB0RWwuY2hhcnNldCA9IFwidXRmLThcIjtcclxuICAgICAgICBtYXBTY3JpcHRFbC5zcmMgPSBgaHR0cHM6Ly93ZWJhcGkuYW1hcC5jb20vbWFwcz92PTEuNC4xNSZrZXk9JHtHREtFWX0mY2FsbGJhY2s9b25Mb2FkYDtcclxuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1hcFNjcmlwdEVsKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgX2luaXRNYXBDb250YWluZXIoKSB7XHJcbiAgICAgIGxldCBneF9sb2NhdGlvbl9udW0gPSB0aGlzLl9pbml0TG9jYXRpb24oZ3hfbG9jYXRpb24pO1xyXG4gICAgICBsZXQgZGVzX2xvY2F0aW9uX251bSA9IHRoaXMuX2luaXRMb2NhdGlvbih0aGlzLmdldEN1ckFyZWEubG9jYXRpb24pO1xyXG4gICAgICB0aGlzLm1hcE9iaiA9IG5ldyBBTWFwLk1hcChcIm1hcC1jb250YWluZXJcIiwge1xyXG4gICAgICAgIHpvb206IDExLFxyXG4gICAgICAgIGNlbnRlcjogW1xyXG4gICAgICAgICAgKE51bWJlcihneF9sb2NhdGlvbl9udW1bMF0pICsgTnVtYmVyKGRlc19sb2NhdGlvbl9udW1bMF0pKSAvIDIsXHJcbiAgICAgICAgICAoTnVtYmVyKGd4X2xvY2F0aW9uX251bVsxXSkgKyBOdW1iZXIoZGVzX2xvY2F0aW9uX251bVsxXSkpIC8gMixcclxuICAgICAgICBdLFxyXG4gICAgICAgIG1hcFN0eWxlOiBcImFtYXA6Ly9zdHlsZXMvbGlnaHRcIiwgLy/orr7nva7lnLDlm77nmoTmmL7npLrmoLflvI9cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGFzeW5jIF9pbml0TWFwVWkoKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgLy8gZ2Qgc2NyaXB0IHVp5byV5YWlXHJcbiAgICAgICAgbGV0IHVpU2NyaXB0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgICAgIHVpU2NyaXB0RWwuY2hhcnNldCA9IFwidXRmLThcIjtcclxuICAgICAgICB1aVNjcmlwdEVsLnNyYyA9IFwiaHR0cHM6Ly93ZWJhcGkuYW1hcC5jb20vdWkvMS4wL21haW4uanM/dj0xLjAuMTFcIjtcclxuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHVpU2NyaXB0RWwpO1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICB1aVNjcmlwdEVsLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgIC8vIOi1t+eCueWSjOe7iOeCueagh+azqFxyXG4gICAgICAgICAgQU1hcFVJLmxvYWRVSShbXCJvdmVybGF5L1NpbXBsZU1hcmtlclwiXSwgZnVuY3Rpb24oU2ltcGxlTWFya2VyKSB7XHJcbiAgICAgICAgICAgIG5ldyBTaW1wbGVNYXJrZXIoe1xyXG4gICAgICAgICAgICAgIGljb25UaGVtZTogXCJkZWZhdWx0XCIsXHJcbiAgICAgICAgICAgICAgaWNvblN0eWxlOiBcIm9yYW5nZVwiLFxyXG4gICAgICAgICAgICAgIG1hcDogdGhhdC5tYXBPYmosXHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHRoYXQuX2luaXRMb2NhdGlvbihneF9sb2NhdGlvbiksXHJcbiAgICAgICAgICAgICAgbGFiZWw6IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwi6auY5paw6L2v5Lu25ZutXCIsXHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IG5ldyBBTWFwLlBpeGVsKC0xMCwgLTIwKSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIG5ldyBTaW1wbGVNYXJrZXIoe1xyXG4gICAgICAgICAgICAgIGljb25UaGVtZTogXCJkZWZhdWx0XCIsXHJcbiAgICAgICAgICAgICAgaWNvblN0eWxlOiBcIm9yYW5nZVwiLFxyXG4gICAgICAgICAgICAgIG1hcDogdGhhdC5tYXBPYmosXHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHRoYXQuX2luaXRMb2NhdGlvbih0aGF0LmdldEN1ckFyZWEubG9jYXRpb24pLFxyXG4gICAgICAgICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiB0aGF0LmdldEN1ckFyZWEubGFiZWwsXHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IG5ldyBBTWFwLlBpeGVsKC0xMCwgLTIwKSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgLy8g6Lev5b6E5qCH5rOoXHJcbiAgICAgICAgICAvLyAgIHRoaXMuX2luaXRQYXRoTG5zKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgLy8g5bGV56S65ZGo6L655YWs5ZutXHJcbiAgICBfaW5pdEdhcmRlbnMoKSB7XHJcbiAgICAgIHJlcXVlc3RcclxuICAgICAgICAuZ2V0KGAveGlhbi9hcm91bmRHYXJkZW4/b3JpZ2luTG9jYXRpb249JHt0aGlzLmdldEN1ckFyZWEubG9jYXRpb259YClcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FyZGVucyA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nYXJkZW5zICYmIHRoaXMuZ2FyZGVucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICAgIEFNYXBVSS5sb2FkVUkoW1wib3ZlcmxheS9TdmdNYXJrZXJcIl0sIGZ1bmN0aW9uKFN2Z01hcmtlcikge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5nYXJkZW5zLm1hcCgoZ2FyZGVuLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB2YXIgc2hhcGUgPSBuZXcgU3ZnTWFya2VyLlNoYXBlW1wiQ2lyY2xlXCJdKHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2LFxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I6IFwiIzE3NzI2MVwiLFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgbGV0IGxhYmVsQ2VudGVyID0gc2hhcGUuZ2V0Q2VudGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgIG5ldyBTdmdNYXJrZXIoc2hhcGUsIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXA6IHRoYXQubWFwT2JqLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB0aGF0Ll9pbml0TG9jYXRpb24oZ2FyZGVuLmxvY2F0aW9uKSxcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJDbGFzc05hbWVzOiBcInNoYXBlLUNpcmNsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb25MYWJlbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBpbmRleCArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEycHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBzaG93UG9zaXRpb25Qb2ludDogdHJ1ZSwvL+aYr+WQpuaYvuekum1hcmtlcuS4iueahOe6oueCuVxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgLy8g5byA6L2m6Lev57q/5Zu+5qC35byPXHJcbiAgICBfaW5pdFBhdGhMbnMoKSB7XHJcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgaWYgKCFBTWFwVUkpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkFNYXBVSSBmYWxzZVwiLCAxNzUpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBBTWFwVUkubG9hZChbXCJ1aS9taXNjL1BhdGhTaW1wbGlmaWVyXCIsIFwibGliLyRcIl0sIGZ1bmN0aW9uKFxyXG4gICAgICAgIFBhdGhTaW1wbGlmaWVyLFxyXG4gICAgICAgICRcclxuICAgICAgKSB7XHJcbiAgICAgICAgbGV0IHBhdGhPYmogPSBuZXcgUGF0aFNpbXBsaWZpZXIoe1xyXG4gICAgICAgICAgekluZGV4OiAxMDAsXHJcbiAgICAgICAgICBtYXA6IHRoYXQubWFwT2JqLFxyXG5cclxuICAgICAgICAgIGdldFBhdGg6IChwYXRoRGF0YSwgcGF0aEluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXRoRGF0YS5wYXRoO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHJlbmRlck9wdGlvbnM6IHtcclxuICAgICAgICAgICAgcmVuZGVyQWxsUG9pbnRzSWZOdW1iZXJCZWxvdzogMTAwLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBwYXRoT2JqLnNldERhdGEoW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIui3r+e6vzBcIixcclxuICAgICAgICAgICAgcGF0aDogWy4uLnRoYXQuZHJpdmVSb3V0ZXNdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdKTtcclxuICAgICAgICBsZXQgbmF2ZzEgPSBwYXRoT2JqLmNyZWF0ZVBhdGhOYXZpZ2F0b3IoMCwge1xyXG4gICAgICAgICAgbG9vcDogdHJ1ZSwgLy/lvqrnjq/mkq3mlL5cclxuICAgICAgICAgIHNwZWVkOiA1MDAwLCAvL+W3oeiIqumAn+W6pu+8jOWNleS9jeWNg+exsy/lsI/ml7ZcclxuICAgICAgICB9KTtcclxuICAgICAgICBuYXZnMS5zdGFydCgpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICAvLyDlsZXnpLrljLrln59cclxuICAgIF9pbml0RGlzdHJpY3QoKSB7XHJcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgQU1hcFVJLmxvYWQoW1widWkvZ2VvL0Rpc3RyaWN0RXhwbG9yZXJcIiwgXCJsaWIvJFwiXSwgZnVuY3Rpb24oXHJcbiAgICAgICAgRGlzdHJpY3RFeHBsb3JlclxyXG4gICAgICApIHtcclxuICAgICAgICBsZXQgZGlzdHJpY3RFeHBsb3JlciA9IG5ldyBEaXN0cmljdEV4cGxvcmVyKHtcclxuICAgICAgICAgIG1hcDogdGhhdC5tYXBPYmosIC8v5YWz6IGU55qE5Zyw5Zu+5a6e5L6LXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIGNvbG9ycyA9IFtcclxuICAgICAgICAgIFwiIzMzNjZjY1wiLFxyXG4gICAgICAgICAgXCIjZGMzOTEyXCIsXHJcbiAgICAgICAgICBcIiNmZjk5MDBcIixcclxuICAgICAgICAgIFwiI2FhOTkwMFwiLFxyXG4gICAgICAgICAgXCIjZmYxOTAxXCIsXHJcbiAgICAgICAgICBcIiNhYTAxMDFcIixcclxuICAgICAgICAgIFwicmVkXCIsXHJcbiAgICAgICAgICBcImdyZWVuXCIsXHJcbiAgICAgICAgXTtcclxuICAgICAgICBkaXNwbGF5U3RyaWN0Q29kZS5tYXAoKGNvZGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBkaXN0cmljdEV4cGxvcmVyLmxvYWRBcmVhTm9kZShjb2RlLCBmdW5jdGlvbihlcnJvciwgYXJlYU5vZGUpIHtcclxuICAgICAgICAgICAgZGlzdHJpY3RFeHBsb3Jlci5yZW5kZXJTdWJGZWF0dXJlcyhhcmVhTm9kZSwgZnVuY3Rpb24oZmVhdHVyZSwgaSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IFwiZGVmYXVsdFwiLFxyXG4gICAgICAgICAgICAgICAgYnViYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IFwiYmx1ZVwiLCAvL+e6v+minOiJslxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlT3BhY2l0eTogMSwgLy/nur/pgI/mmI7luqZcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdlaWdodDogMSwgLy/nur/lrr1cclxuICAgICAgICAgICAgICAgIGZpbGxDb2xvcjogXCJyZWRcIiwgLy/loavlhYXoibJcclxuICAgICAgICAgICAgICAgIGZpbGxPcGFjaXR5OiAwLjM1LCAvL+Whq+WFhemAj+aYjuW6plxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkaXN0cmljdEV4cGxvcmVyLnJlbmRlclBhcmVudEZlYXR1cmUoYXJlYU5vZGUsIHtcclxuICAgICAgICAgICAgICBjdXJzb3I6IFwiZGVmYXVsdFwiLFxyXG4gICAgICAgICAgICAgIGJ1YmJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBzdHJva2VDb2xvcjogbnVsbCwgLy/nur/popzoibJcclxuICAgICAgICAgICAgICBzdHJva2VPcGFjaXR5OiAxLCAvL+e6v+mAj+aYjuW6plxyXG4gICAgICAgICAgICAgIHN0cm9rZVdlaWdodDogMSwgLy/nur/lrr1cclxuICAgICAgICAgICAgICBmaWxsQ29sb3I6IGNvbG9yc1tpbmRleF0sIC8v5aGr5YWF6ImyXHJcbiAgICAgICAgICAgICAgZmlsbE9wYWNpdHk6IDAuMzUsIC8v5aGr5YWF6YCP5piO5bqmXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyDliJ3lp4vljJbpqb7ovabot6/nur/mlbDmja5cclxuICAgIF9pbml0RHJpdmVSb3V0ZSgpIHtcclxuICAgICAgcmVxdWVzdFxyXG4gICAgICAgIC5nZXQoXHJcbiAgICAgICAgICBgL3hpYW4vZHJpdmluZ1JvdXRlP29yaWdpbkxvY2F0aW9uPSR7dGhpcy5nZXRDdXJBcmVhLmxvY2F0aW9ufSZkZXN0aW5hdGlvbj0ke2d4X2xvY2F0aW9ufWBcclxuICAgICAgICApXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3RlcHMgJiYgcmVzLmRhdGEuc3RlcHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgIHJlcy5kYXRhLnN0ZXBzLmZvckVhY2goKHN0ZXApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGVwLnBvbHlsaW5lKSB7XHJcbiAgICAgICAgICAgICAgICAgIGxldCBhcnJMb2NhdGlvbiA9IHRoaXMuX2Zvcm1hdFBvbHlsaW5lKHN0ZXAucG9seWxpbmUpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmRyaXZlUm91dGVzLnB1c2goLi4udGhpcy5fZm9ybWF0UG9seWxpbmUoc3RlcC5wb2x5bGluZSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIHRoaXMuX2luaXRQYXRoTG5zKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8g6L6F5Yqp5Ye95pWwXHJcbiAgICBfaW5pdExvY2F0aW9uKGxvY2F0aW9uU3RyKSB7XHJcbiAgICAgIHJldHVybiBsb2NhdGlvblN0ci5zcGxpdChcIixcIik7XHJcbiAgICB9LFxyXG4gICAgX2Zvcm1hdFBvbHlsaW5lKHBvbHlsaW5lKSB7XHJcbiAgICAgIGxldCBsb2NhdGlvblN0ciA9IHBvbHlsaW5lLnNwbGl0KFwiO1wiKTtcclxuICAgICAgbGV0IGxvY2F0aW9uQXJyID0gbG9jYXRpb25TdHIubWFwKChsb2NhdGlvbikgPT4ge1xyXG4gICAgICAgIGxldCBsb2NhdGlvbkl0ZW0gPSB0aGlzLl9pbml0TG9jYXRpb24obG9jYXRpb24pO1xyXG4gICAgICAgIHJldHVybiBbTnVtYmVyKGxvY2F0aW9uSXRlbVswXSksIE51bWJlcihsb2NhdGlvbkl0ZW1bMV0pXTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBsb2NhdGlvbkFycjtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuLm1hcC1jb24ge1xyXG4gIHBhZGRpbmc6IDBweCA1cHggNXB4O1xyXG4gIGZsZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5nYXJkZW4ge1xyXG4gIGZsZXgtc2hyaW5rOiAxO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDE2MHB4O1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgJi1pdGVtIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgJi1pdGVtLWljb24ge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTc3MjYxO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbjogM3B4IDEwcHg7XHJcbiAgfVxyXG4gICYtaXRlbS1sYWJlbCB7XHJcbiAgfVxyXG59XHJcbi5tYXAtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbGV4OiAxO1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5hbWFwLW1hcmtlcnMge1xyXG4gIC8qIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkICFpbXBvcnRhbnQ7ICovXHJcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxufVxyXG48L3N0eWxlPlxyXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYXJlYS1tYXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYXJlYS1tYXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9hcmVhLW1hcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODc1MjE0YTgmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYXJlYS1tYXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9hcmVhLW1hcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vYXJlYS1tYXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODc1MjE0YTgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI4NzUyMTRhOFwiLFxuICBudWxsXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTMtMCEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hcmVhLW1hcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04NzUyMTRhOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTMtMCEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hcmVhLW1hcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04NzUyMTRhOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9