(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/lottieDemo/index.vue?vue&type=template&id=4ed37d9d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"animate-wrapper"},[_vm._v("\n    this is lottie img test 12345\n    "),_vm._l((_vm.jsUrlList),function(item,key){return _c('section',{key:key},[_c('lottie-component',{staticClass:"img-item",attrs:{"jsUrl":item}})],1)})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/lottieDemo/index.vue?vue&type=template&id=4ed37d9d&scoped=true&

// EXTERNAL MODULE: ./src/lottieDemo/lottieComponent.vue + 4 modules
var lottieComponent = __webpack_require__(48);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/lottieDemo/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var lottieDemovue_type_script_lang_js_ = ({
  components: {
    lottieComponent: lottieComponent["default"]
  },

  mounted() {
    document.title = "lottie Demo";
  },

  data() {
    return {
      jsUrlList: ["./q8-bg-3.json" // "./q4-bg.json",
      // "./q9-mi-new-bg1.json",
      // "./q9-mi-new-bg2.json",
      // "./q9-mi-old-bg1.json",
      // "./q9-mi-old-bg2.json",
      // "./q9-oneplus-bg1.json"
      // "http://192.168.31.252:9080/jsDemoA.js",
      // "http://192.168.31.252:9080/jsDemoB.js",
      // "http://192.168.31.252:9080/jsDemoC.js"
      ]
    };
  }

});
// CONCATENATED MODULE: ./src/lottieDemo/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_lottieDemovue_type_script_lang_js_ = (lottieDemovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/lottieDemo/index.vue?vue&type=style&index=0&id=4ed37d9d&lang=scss&scoped=true&
var lottieDemovue_type_style_index_0_id_4ed37d9d_lang_scss_scoped_true_ = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./src/lottieDemo/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_lottieDemovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "4ed37d9d",
  null
  
)

/* harmony default export */ var lottieDemo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/lottieDemo/lottieComponent.vue?vue&type=template&id=ac43d0c6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{ref:"lottieCon",staticClass:"lottie-wrapper",style:(_vm.style)})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/lottieDemo/lottieComponent.vue?vue&type=template&id=ac43d0c6&scoped=true&

// EXTERNAL MODULE: ./node_modules/lottie-web/build/player/lottie.js
var lottie = __webpack_require__(64);
var lottie_default = /*#__PURE__*/__webpack_require__.n(lottie);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/lottieDemo/lottieComponent.vue?vue&type=script&lang=js&
//
//
//

/* harmony default export */ var lottieComponentvue_type_script_lang_js_ = ({
  props: {
    jsUrl: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      remoteJsonUrl: "http://192.168.31.252:9080/lottie.json",
      remoteJsUrl: "http://192.168.31.252:9080/jsDemoA.js",
      jsonImgUrl: "./q4-bg.json",
      style: {
        // width: "370px"
        height: "" // minHeight: "300px"
        // overflow: "hidden",
        // margin: "0 auto"

      }
    };
  },

  mounted() {
    // this._loadRemoteJson();
    // this._loadRemoteJs();
    this._loadJsonImg();
  },

  methods: {
    _loadJsonImg() {
      let that = this;
      let el = this.$refs.lottieCon; // console.log(el.offsetWidth, 35);
      // console.log(el.offsetHeight, 36);
      // console.log(el, 34);

      __webpack_require__(65)("" + this.jsUrl).then(module => {
        this.style = {
          height: `${module.h / 2}px`
        };
        requestAnimationFrame(() => {
          console.log(this.style, 44);
          lottie_default.a.loadAnimation({
            container: that.$refs.lottieCon,
            renderer: "canvas",
            loop: false,
            autoplay: true,
            animationData: module,
            className: "canvas-default",
            rendererSettings: {// preserveAspectRatio: "slice"
            }
          });
        });
      });
    },

    _loadRemoteJs() {
      let scriptEl = document.createElement("script");
      scriptEl.src = this.jsUrl;

      window.executeJson = data => {
        console.log(`executeJson`, data, 26);
      };

      document.getElementsByTagName("head")[0].append(scriptEl);
    },

    _loadRemoteJson() {//   fetch(this.remoteJsonUrl)
      //     .then(res => {
      //       return res.json();
      //     })
      // import("./demo.json").then(res => {
      //     let animObj = lottie.loadAnimation({
      //         container: this.$refs.lottieCon,
      //         renderer: "svg",
      //         loop: true,
      //         autoplay: true,
      //         animationData: res,
      //         rendererSettings: {}
      //     });
      //     this.$emit("animCreated", this.animObj);
      // });
    },

    _loadLocalJson() {// import(/*webpackChunkName:'[request]'*/ "./demo.json").then(res => {
      //   console.log(res, 29);
      // });
    }

  }
});
// CONCATENATED MODULE: ./src/lottieDemo/lottieComponent.vue?vue&type=script&lang=js&
 /* harmony default export */ var lottieDemo_lottieComponentvue_type_script_lang_js_ = (lottieComponentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/lottieDemo/lottieComponent.vue?vue&type=style&index=0&id=ac43d0c6&lang=scss&scoped=true&
var lottieComponentvue_type_style_index_0_id_ac43d0c6_lang_scss_scoped_true_ = __webpack_require__(66);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./src/lottieDemo/lottieComponent.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  lottieDemo_lottieComponentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "ac43d0c6",
  null
  
)

/* harmony default export */ var lottieComponent = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": [
		17,
		9
	],
	"./": [
		17,
		9
	],
	"./index": [
		17,
		9
	],
	"./index.vue": [
		17,
		9
	],
	"./jsDemo": [
		58,
		7,
		3
	],
	"./jsDemo.js": [
		58,
		7,
		3
	],
	"./lottieComponent": [
		48,
		9
	],
	"./lottieComponent.vue": [
		48,
		9
	],
	"./q4-bg": [
		59,
		3,
		5
	],
	"./q4-bg.json": [
		59,
		3,
		5
	],
	"./q8-bg-3": [
		60,
		3,
		6
	],
	"./q8-bg-3.json": [
		60,
		3,
		6
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(2).map(__webpack_require__.e)).then(function() {
		return __webpack_require__.t(id, ids[1])
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 65;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_lottieComponent_vue_vue_type_style_index_0_id_ac43d0c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_lottieComponent_vue_vue_type_style_index_0_id_ac43d0c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_lottieComponent_vue_vue_type_style_index_0_id_ac43d0c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_lottieComponent_vue_vue_type_style_index_0_id_ac43d0c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4ed37d9d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4ed37d9d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4ed37d9d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4ed37d9d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbG90dGllRGVtby9pbmRleC52dWU/YmY1MCIsIndlYnBhY2s6Ly8vc3JjL2xvdHRpZURlbW8vaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy9sb3R0aWVEZW1vL2luZGV4LnZ1ZT83YTdhIiwid2VicGFjazovLy8uL3NyYy9sb3R0aWVEZW1vL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvbG90dGllRGVtby9sb3R0aWVDb21wb25lbnQudnVlPzJkNDgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvdHRpZURlbW8vaW5kZXgudnVlP2I4ODYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvdHRpZURlbW8vbG90dGllQ29tcG9uZW50LnZ1ZT8yMWU0Iiwid2VicGFjazovLy9zcmMvbG90dGllRGVtby9sb3R0aWVDb21wb25lbnQudnVlIiwid2VicGFjazovLy8uL3NyYy9sb3R0aWVEZW1vL2xvdHRpZUNvbXBvbmVudC52dWU/NzcxMyIsIndlYnBhY2s6Ly8vLi9zcmMvbG90dGllRGVtby9sb3R0aWVDb21wb25lbnQudnVlIiwid2VicGFjazovLy8uL3NyYy9sb3R0aWVEZW1vIGxhenkgXi4qJCBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9sb3R0aWVEZW1vL2xvdHRpZUNvbXBvbmVudC52dWU/YTU2OSIsIndlYnBhY2s6Ly8vLi9zcmMvbG90dGllRGVtby9pbmRleC52dWU/ZmU5NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwwQkFBMEIsYUFBYSwwQkFBMEIsd0JBQXdCLHFCQUFxQiw4QkFBOEIsZ0dBQWdHLHFCQUFxQixRQUFRLHlCQUF5Qiw4QkFBOEIsY0FBYyxNQUFNO0FBQ3BWOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1FBO0FBQ0E7QUFDQTtBQUNBO0FBREEsR0FEQTs7QUFJQTtBQUNBO0FBQ0EsR0FOQTs7QUFPQTtBQUNBO0FBQ0Esa0JBQ0EsZ0JBREEsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQURBO0FBY0E7O0FBdEJBLEc7O0FDVnFLLENBQWdCLDZHQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBekY7QUFDdkM7QUFDTDtBQUNzQzs7O0FBRzFGO0FBQzBGO0FBQzFGLGdCQUFnQiw4Q0FBVTtBQUMxQixFQUFFLHNDQUFNO0FBQ1IsRUFBRSxNQUFNO0FBQ1IsRUFBRSxlQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVlLGlHOzs7Ozs7O0FDbkJmLHVDOzs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsMEJBQTBCLGFBQWEsMEJBQTBCLHdCQUF3QixxQkFBcUIsK0RBQStEO0FBQzdLOzs7Ozs7Ozs7Ozs7O0FDR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkE7QUFEQSxHQURBOztBQU9BO0FBQ0E7QUFDQSw2REFEQTtBQUVBLDBEQUZBO0FBR0EsZ0NBSEE7QUFJQTtBQUNBO0FBQ0Esa0JBRkEsQ0FHQTtBQUNBO0FBQ0E7O0FBTEE7QUFKQTtBQVlBLEdBcEJBOztBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBekJBOztBQTBCQTtBQUNBO0FBQ0E7QUFDQSxvQ0FGQSxDQUdBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLHdCQUFOO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBREE7QUFFQSw4QkFGQTtBQUdBLHVCQUhBO0FBSUEsMEJBSkE7QUFLQSxpQ0FMQTtBQU1BLHVDQU5BO0FBT0EsK0JBQ0E7QUFEQTtBQVBBO0FBV0EsU0FiQTtBQWNBLE9BaEJBO0FBaUJBLEtBekJBOztBQTBCQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLE9BRkE7O0FBR0E7QUFDQSxLQWpDQTs7QUFrQ0EsdUJBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FsREE7O0FBbURBLHNCQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXZEQTtBQTFCQSxHOztBQ0wrSyxDQUFnQiw4SEFBRyxFQUFDLEM7Ozs7Ozs7O0FDQXpGO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUdwRztBQUMwRjtBQUMxRixnQkFBZ0IsOENBQVU7QUFDMUIsRUFBRSxrREFBTTtBQUNSLEVBQUUsTUFBTTtBQUNSLEVBQUUsZUFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFZSxzRzs7Ozs7OztBQ25CZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUM7Ozs7Ozs7O0FDMUVBO0FBQUE7QUFBQTtBQUF3YSxDQUFnQiw0ZEFBRyxFQUFDLEM7Ozs7Ozs7O0FDQTViO0FBQUE7QUFBQTtBQUE4WixDQUFnQixrZEFBRyxFQUFDLEMiLCJmaWxlIjoiYXdhcmRfZGlzdC9qcy8xMS5kNzc5MjIxYjMwMzIxYjRjZTlkNS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdzZWN0aW9uJyx7c3RhdGljQ2xhc3M6XCJhbmltYXRlLXdyYXBwZXJcIn0sW192bS5fdihcIlxcbiAgICB0aGlzIGlzIGxvdHRpZSBpbWcgdGVzdCAxMjM0NVxcbiAgICBcIiksX3ZtLl9sKChfdm0uanNVcmxMaXN0KSxmdW5jdGlvbihpdGVtLGtleSl7cmV0dXJuIF9jKCdzZWN0aW9uJyx7a2V5OmtleX0sW19jKCdsb3R0aWUtY29tcG9uZW50Jyx7c3RhdGljQ2xhc3M6XCJpbWctaXRlbVwiLGF0dHJzOntcImpzVXJsXCI6aXRlbX19KV0sMSl9KV0sMil9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIjx0ZW1wbGF0ZT5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiYW5pbWF0ZS13cmFwcGVyXCI+XHJcbiAgICAgICAgdGhpcyBpcyBsb3R0aWUgaW1nIHRlc3QgMTIzNDVcclxuICAgICAgICA8c2VjdGlvbiB2LWZvcj1cIihpdGVtLCBrZXkpIGluIGpzVXJsTGlzdFwiIDprZXk9XCJrZXlcIj5cclxuICAgICAgICAgICAgPGxvdHRpZS1jb21wb25lbnQgOmpzVXJsPVwiaXRlbVwiIGNsYXNzPVwiaW1nLWl0ZW1cIj48L2xvdHRpZS1jb21wb25lbnQ+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9zZWN0aW9uPlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5pbXBvcnQgbG90dGllQ29tcG9uZW50IGZyb20gXCIuL2xvdHRpZUNvbXBvbmVudC52dWVcIjtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIGxvdHRpZUNvbXBvbmVudFxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcImxvdHRpZSBEZW1vXCI7XHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBqc1VybExpc3Q6IFtcclxuICAgICAgICAgICAgICAgIFwiLi9xOC1iZy0zLmpzb25cIlxyXG4gICAgICAgICAgICAgICAgLy8gXCIuL3E0LWJnLmpzb25cIixcclxuICAgICAgICAgICAgICAgIC8vIFwiLi9xOS1taS1uZXctYmcxLmpzb25cIixcclxuICAgICAgICAgICAgICAgIC8vIFwiLi9xOS1taS1uZXctYmcyLmpzb25cIixcclxuICAgICAgICAgICAgICAgIC8vIFwiLi9xOS1taS1vbGQtYmcxLmpzb25cIixcclxuICAgICAgICAgICAgICAgIC8vIFwiLi9xOS1taS1vbGQtYmcyLmpzb25cIixcclxuICAgICAgICAgICAgICAgIC8vIFwiLi9xOS1vbmVwbHVzLWJnMS5qc29uXCJcclxuICAgICAgICAgICAgICAgIC8vIFwiaHR0cDovLzE5Mi4xNjguMzEuMjUyOjkwODAvanNEZW1vQS5qc1wiLFxyXG4gICAgICAgICAgICAgICAgLy8gXCJodHRwOi8vMTkyLjE2OC4zMS4yNTI6OTA4MC9qc0RlbW9CLmpzXCIsXHJcbiAgICAgICAgICAgICAgICAvLyBcImh0dHA6Ly8xOTIuMTY4LjMxLjI1Mjo5MDgwL2pzRGVtb0MuanNcIlxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5hbmltYXRlLXdyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcbi5pbWctaXRlbSB7XHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICBib3JkZXI6IDFweCByZWQgc29saWQ7XHJcbiAgICAvLyBtYXJnaW46IDIwcHggMHB4O1xyXG4gICAgLy8gcGFkZGluZzogMTBweDtcclxuICAgIC8vIGhlaWdodDogMTAwJTtcclxuICAgIC8vIGhlaWdodDogMzAwcHg7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRlZDM3ZDlkJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRlZDM3ZDlkJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNGVkMzdkOWRcIixcbiAgbnVsbFxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnc2VjdGlvbicse3JlZjpcImxvdHRpZUNvblwiLHN0YXRpY0NsYXNzOlwibG90dGllLXdyYXBwZXJcIixzdHlsZTooX3ZtLnN0eWxlKX0pfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCI8dGVtcGxhdGU+XHJcbiAgPHNlY3Rpb24gcmVmPVwibG90dGllQ29uXCIgY2xhc3M9XCJsb3R0aWUtd3JhcHBlclwiIDpzdHlsZT1cInN0eWxlXCI+PC9zZWN0aW9uPlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5pbXBvcnQgbG90dGllIGZyb20gXCJsb3R0aWUtd2ViXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczoge1xyXG4gICAganNVcmw6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0OiBcIlwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZW1vdGVKc29uVXJsOiBcImh0dHA6Ly8xOTIuMTY4LjMxLjI1Mjo5MDgwL2xvdHRpZS5qc29uXCIsXHJcbiAgICAgIHJlbW90ZUpzVXJsOiBcImh0dHA6Ly8xOTIuMTY4LjMxLjI1Mjo5MDgwL2pzRGVtb0EuanNcIixcclxuICAgICAganNvbkltZ1VybDogXCIuL3E0LWJnLmpzb25cIixcclxuICAgICAgc3R5bGU6IHtcclxuICAgICAgICAvLyB3aWR0aDogXCIzNzBweFwiXHJcbiAgICAgICAgaGVpZ2h0OiBcIlwiLFxyXG4gICAgICAgIC8vIG1pbkhlaWdodDogXCIzMDBweFwiXHJcbiAgICAgICAgLy8gb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgLy8gbWFyZ2luOiBcIjAgYXV0b1wiXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIC8vIHRoaXMuX2xvYWRSZW1vdGVKc29uKCk7XHJcbiAgICAvLyB0aGlzLl9sb2FkUmVtb3RlSnMoKTtcclxuICAgIHRoaXMuX2xvYWRKc29uSW1nKCk7XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBfbG9hZEpzb25JbWcoKSB7XHJcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgbGV0IGVsID0gdGhpcy4kcmVmcy5sb3R0aWVDb247XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVsLm9mZnNldFdpZHRoLCAzNSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVsLm9mZnNldEhlaWdodCwgMzYpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlbCwgMzQpO1xyXG5cclxuICAgICAgaW1wb3J0KFwiXCIgKyB0aGlzLmpzVXJsKS50aGVuKChtb2R1bGUpID0+IHtcclxuICAgICAgICB0aGlzLnN0eWxlID0geyBoZWlnaHQ6IGAke21vZHVsZS5oIC8gMn1weGAgfTtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdHlsZSwgNDQpO1xyXG4gICAgICAgICAgbG90dGllLmxvYWRBbmltYXRpb24oe1xyXG4gICAgICAgICAgICBjb250YWluZXI6IHRoYXQuJHJlZnMubG90dGllQ29uLFxyXG4gICAgICAgICAgICByZW5kZXJlcjogXCJjYW52YXNcIixcclxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICBhbmltYXRpb25EYXRhOiBtb2R1bGUsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJjYW52YXMtZGVmYXVsdFwiLFxyXG4gICAgICAgICAgICByZW5kZXJlclNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgLy8gcHJlc2VydmVBc3BlY3RSYXRpbzogXCJzbGljZVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgX2xvYWRSZW1vdGVKcygpIHtcclxuICAgICAgbGV0IHNjcmlwdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuICAgICAgc2NyaXB0RWwuc3JjID0gdGhpcy5qc1VybDtcclxuICAgICAgd2luZG93LmV4ZWN1dGVKc29uID0gKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgZXhlY3V0ZUpzb25gLCBkYXRhLCAyNik7XHJcbiAgICAgIH07XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmQoc2NyaXB0RWwpO1xyXG4gICAgfSxcclxuICAgIF9sb2FkUmVtb3RlSnNvbigpIHtcclxuICAgICAgLy8gICBmZXRjaCh0aGlzLnJlbW90ZUpzb25VcmwpXHJcbiAgICAgIC8vICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAvLyAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgLy8gICAgIH0pXHJcbiAgICAgIC8vIGltcG9ydChcIi4vZGVtby5qc29uXCIpLnRoZW4ocmVzID0+IHtcclxuICAgICAgLy8gICAgIGxldCBhbmltT2JqID0gbG90dGllLmxvYWRBbmltYXRpb24oe1xyXG4gICAgICAvLyAgICAgICAgIGNvbnRhaW5lcjogdGhpcy4kcmVmcy5sb3R0aWVDb24sXHJcbiAgICAgIC8vICAgICAgICAgcmVuZGVyZXI6IFwic3ZnXCIsXHJcbiAgICAgIC8vICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgLy8gICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgLy8gICAgICAgICBhbmltYXRpb25EYXRhOiByZXMsXHJcbiAgICAgIC8vICAgICAgICAgcmVuZGVyZXJTZXR0aW5nczoge31cclxuICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAvLyAgICAgdGhpcy4kZW1pdChcImFuaW1DcmVhdGVkXCIsIHRoaXMuYW5pbU9iaik7XHJcbiAgICAgIC8vIH0pO1xyXG4gICAgfSxcclxuICAgIF9sb2FkTG9jYWxKc29uKCkge1xyXG4gICAgICAvLyBpbXBvcnQoLyp3ZWJwYWNrQ2h1bmtOYW1lOidbcmVxdWVzdF0nKi8gXCIuL2RlbW8uanNvblwiKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIC8vICAgY29uc29sZS5sb2cocmVzLCAyOSk7XHJcbiAgICAgIC8vIH0pO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4ubG90dGllLXdyYXBwZXIge1xyXG4gIC8vIHdpZHRoOiAxMDAlO1xyXG4gIC8vIHdpZHRoOiAxMDBweDtcclxuICAvLyBoZWlnaHQ6IDMwMHB4O1xyXG4gIC8vIGhlaWdodDogMTAwJTtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG59XHJcbi5jYW52YXMtZGVmYXVsdCB7XHJcbiAgLy8gbWluLWhlaWdodDogMzAwcHg7XHJcbn1cclxuPC9zdHlsZT5cclxuPCEtLSA8c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+PC9zdHlsZT4gLS0+XHJcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sb3R0aWVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbG90dGllQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbG90dGllQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hYzQzZDBjNiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9sb3R0aWVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9sb3R0aWVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2xvdHRpZUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hYzQzZDBjNiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImFjNDNkMGM2XCIsXG4gIG51bGxcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwidmFyIG1hcCA9IHtcblx0XCIuXCI6IFtcblx0XHQxNyxcblx0XHQ5XG5cdF0sXG5cdFwiLi9cIjogW1xuXHRcdDE3LFxuXHRcdDlcblx0XSxcblx0XCIuL2luZGV4XCI6IFtcblx0XHQxNyxcblx0XHQ5XG5cdF0sXG5cdFwiLi9pbmRleC52dWVcIjogW1xuXHRcdDE3LFxuXHRcdDlcblx0XSxcblx0XCIuL2pzRGVtb1wiOiBbXG5cdFx0NTgsXG5cdFx0Nyxcblx0XHQzXG5cdF0sXG5cdFwiLi9qc0RlbW8uanNcIjogW1xuXHRcdDU4LFxuXHRcdDcsXG5cdFx0M1xuXHRdLFxuXHRcIi4vbG90dGllQ29tcG9uZW50XCI6IFtcblx0XHQ0OCxcblx0XHQ5XG5cdF0sXG5cdFwiLi9sb3R0aWVDb21wb25lbnQudnVlXCI6IFtcblx0XHQ0OCxcblx0XHQ5XG5cdF0sXG5cdFwiLi9xNC1iZ1wiOiBbXG5cdFx0NTksXG5cdFx0Myxcblx0XHQ1XG5cdF0sXG5cdFwiLi9xNC1iZy5qc29uXCI6IFtcblx0XHQ1OSxcblx0XHQzLFxuXHRcdDVcblx0XSxcblx0XCIuL3E4LWJnLTNcIjogW1xuXHRcdDYwLFxuXHRcdDMsXG5cdFx0NlxuXHRdLFxuXHRcIi4vcTgtYmctMy5qc29uXCI6IFtcblx0XHQ2MCxcblx0XHQzLFxuXHRcdDZcblx0XVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHQocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0pO1xuXHR9XG5cblx0dmFyIGlkcyA9IG1hcFtyZXFdLCBpZCA9IGlkc1swXTtcblx0cmV0dXJuIFByb21pc2UuYWxsKGlkcy5zbGljZSgyKS5tYXAoX193ZWJwYWNrX3JlcXVpcmVfXy5lKSkudGhlbihmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KGlkLCBpZHNbMV0pXG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSA2NTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS0zLTAhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbG90dGllQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWFjNDNkMGM2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tMy0wIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xvdHRpZUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hYzQzZDBjNiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS0zLTAhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGVkMzdkOWQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS0zLTAhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGVkMzdkOWQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==