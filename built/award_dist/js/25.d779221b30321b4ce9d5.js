(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/turn-table/index.vue?vue&type=template&id=7affcefa&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"turn-table-wrapper"},[_c('section',{staticClass:"content"},[_c('section',{staticClass:"table"},[_c('section',{staticClass:"table-row-container",on:{"click":_vm.startPlay}},[_vm._v("\n        点击抽奖\n        "),_c('section',{ref:"row",staticClass:"table-row"})])]),_vm._v(" "),_c('section',{staticClass:"pic"}),_vm._v(" "),_c('ui-modal',{model:{value:(_vm.showResult),callback:function ($$v) {_vm.showResult=$$v},expression:"showResult"}},[(_vm.resultItem.value)?_c('section',{staticClass:"tip"},[_vm._v("\n        恭喜抽中"+_vm._s(_vm.resultItem.name)+"\n      ")]):_c('section',{staticClass:"tip"},[_vm._v("\n        谢谢惠顾\n      ")])])],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/turn-table/index.vue?vue&type=template&id=7affcefa&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/turn-table/index.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//
/* harmony default export */ var turn_tablevue_type_script_lang_js_ = ({
  components: {
    "ui-modal": () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 119))
  },

  data() {
    return {
      awards: [],
      showResult: false,
      resultItem: {},
      timerTask: null
    };
  },

  watch: {
    showResult: function (parma) {
      if (!parma) {
        this.resultItem = {};
        clearTimeout(this.timerTask);
        this.timerTask = null;
        let row = this.$refs.row;
        row.style.transition = "none";
        row.style.transform = `none`;
      }
    }
  },

  mounted() {
    document.title = "转盘抽奖";

    this._initData(); // this._initMove();

  },

  beforeDestroy() {
    clearTimeout(this.timerTask);
    this.timerTask = null;
  },

  methods: {
    _initMobile() {
      let oMeta = document.createElement("meta");
      oMeta.content = `width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=device-dpi, viewport-fit=cover`;
      oMeta.name = "viewport";
      document.getElementsByTagName("head")[0].appendChild(oMeta);
    },

    _initData() {
      __webpack_require__.e(/* import() */ 31).then(__webpack_require__.bind(null, 116)).then(res => {
        this.awards = res.default;
      });
    },

    startPlay() {
      let row = this.$refs.row;
      row.style.transition = `all 3s ease-in-out`;
      let rotateNum = Math.floor(Math.random() * 3000);
      row.style.transform = ` rotate(${rotateNum}deg)`;
      this.timerTask = setTimeout(() => {
        this._getResult(rotateNum);
      }, 3000);
    },

    _getResult(rotateNum) {
      let pos = rotateNum % 360;
      let result = this.awards.filter((award, key) => {
        if (award.angles[0] > award.angles[1]) {
          return pos > award.angles[0] || pos <= award.angles[1];
        } else {
          return pos > award.angles[0] && pos <= award.angles[1];
        }
      });
      this.resultItem = result[0];
      this.showResult = true;
    }

  }
});
// CONCATENATED MODULE: ./src/turn-table/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_turn_tablevue_type_script_lang_js_ = (turn_tablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/turn-table/index.vue?vue&type=style&index=0&id=7affcefa&lang=scss&scoped=true&
var turn_tablevue_type_style_index_0_id_7affcefa_lang_scss_scoped_true_ = __webpack_require__(63);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./src/turn-table/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_turn_tablevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "7affcefa",
  null
  
)

/* harmony default export */ var turn_table = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7affcefa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7affcefa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7affcefa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7affcefa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdHVybi10YWJsZS9pbmRleC52dWU/NWM1MyIsIndlYnBhY2s6Ly8vc3JjL3R1cm4tdGFibGUvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy90dXJuLXRhYmxlL2luZGV4LnZ1ZT82OTE4Iiwid2VicGFjazovLy8uL3NyYy90dXJuLXRhYmxlL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdHVybi10YWJsZS9pbmRleC52dWU/M2ExYiIsIndlYnBhY2s6Ly8vLi9zcmMvdHVybi10YWJsZS9pbmRleC52dWU/ZmExYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwwQkFBMEIsYUFBYSwwQkFBMEIsd0JBQXdCLHFCQUFxQixpQ0FBaUMsZ0JBQWdCLHNCQUFzQixnQkFBZ0Isb0JBQW9CLGdCQUFnQixzQ0FBc0MsdUJBQXVCLG1EQUFtRCxrQ0FBa0MsZ0NBQWdDLGtCQUFrQiw2QkFBNkIsT0FBTyxnREFBZ0QsbUJBQW1CLDBCQUEwQix1Q0FBdUMsa0JBQWtCLGtGQUFrRixrQkFBa0I7QUFDM3NCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNxQkE7QUFDQTtBQUNBO0FBREEsR0FEQTs7QUFJQTtBQUNBO0FBQ0EsZ0JBREE7QUFFQSx1QkFGQTtBQUdBLG9CQUhBO0FBSUE7QUFKQTtBQU1BLEdBWEE7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBLEdBWkE7O0FBeUJBO0FBQ0E7O0FBQ0EscUJBRkEsQ0FHQTs7QUFDQSxHQTdCQTs7QUE4QkE7QUFDQTtBQUNBO0FBQ0EsR0FqQ0E7O0FBa0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBTkE7O0FBT0E7QUFDQSxNQUFNLGtGQUFOO0FBQ0E7QUFDQSxPQUZBO0FBR0EsS0FYQTs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsRUFFQSxJQUZBO0FBR0EsS0FwQkE7O0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsT0FOQTtBQU9BO0FBQ0E7QUFDQTs7QUFoQ0E7QUFsQ0EsRzs7QUN0QnFLLENBQWdCLDZHQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBekY7QUFDdkM7QUFDTDtBQUNzQzs7O0FBRzFGO0FBQzBGO0FBQzFGLGdCQUFnQiw4Q0FBVTtBQUMxQixFQUFFLHNDQUFNO0FBQ1IsRUFBRSxNQUFNO0FBQ1IsRUFBRSxlQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVlLGlHOzs7Ozs7O0FDbkJmLHVDOzs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUE4WixDQUFnQixrZEFBRyxFQUFDLEMiLCJmaWxlIjoiYXdhcmRfZGlzdC9qcy8yNS5kNzc5MjIxYjMwMzIxYjRjZTlkNS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdzZWN0aW9uJyx7c3RhdGljQ2xhc3M6XCJ0dXJuLXRhYmxlLXdyYXBwZXJcIn0sW19jKCdzZWN0aW9uJyx7c3RhdGljQ2xhc3M6XCJjb250ZW50XCJ9LFtfYygnc2VjdGlvbicse3N0YXRpY0NsYXNzOlwidGFibGVcIn0sW19jKCdzZWN0aW9uJyx7c3RhdGljQ2xhc3M6XCJ0YWJsZS1yb3ctY29udGFpbmVyXCIsb246e1wiY2xpY2tcIjpfdm0uc3RhcnRQbGF5fX0sW192bS5fdihcIlxcbiAgICAgICAg54K55Ye75oq95aWWXFxuICAgICAgICBcIiksX2MoJ3NlY3Rpb24nLHtyZWY6XCJyb3dcIixzdGF0aWNDbGFzczpcInRhYmxlLXJvd1wifSldKV0pLF92bS5fdihcIiBcIiksX2MoJ3NlY3Rpb24nLHtzdGF0aWNDbGFzczpcInBpY1wifSksX3ZtLl92KFwiIFwiKSxfYygndWktbW9kYWwnLHttb2RlbDp7dmFsdWU6KF92bS5zaG93UmVzdWx0KSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLnNob3dSZXN1bHQ9JCR2fSxleHByZXNzaW9uOlwic2hvd1Jlc3VsdFwifX0sWyhfdm0ucmVzdWx0SXRlbS52YWx1ZSk/X2MoJ3NlY3Rpb24nLHtzdGF0aWNDbGFzczpcInRpcFwifSxbX3ZtLl92KFwiXFxuICAgICAgICDmga3llpzmir3kuK1cIitfdm0uX3MoX3ZtLnJlc3VsdEl0ZW0ubmFtZSkrXCJcXG4gICAgICBcIildKTpfYygnc2VjdGlvbicse3N0YXRpY0NsYXNzOlwidGlwXCJ9LFtfdm0uX3YoXCJcXG4gICAgICAgIOiwouiwouaDoOmhvlxcbiAgICAgIFwiKV0pXSldLDEpXSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIjx0ZW1wbGF0ZT5cclxuICA8c2VjdGlvbiBjbGFzcz1cInR1cm4tdGFibGUtd3JhcHBlclwiPlxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwidGFibGVcIj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInRhYmxlLXJvdy1jb250YWluZXJcIiBAY2xpY2s9XCJzdGFydFBsYXlcIj5cclxuICAgICAgICAgIOeCueWHu+aKveWlllxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJ0YWJsZS1yb3dcIiByZWY9XCJyb3dcIj48L3NlY3Rpb24+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwicGljXCI+PC9zZWN0aW9uPlxyXG4gICAgICA8dWktbW9kYWwgdi1tb2RlbD1cInNob3dSZXN1bHRcIj5cclxuICAgICAgICA8c2VjdGlvbiB2LWlmPVwicmVzdWx0SXRlbS52YWx1ZVwiIGNsYXNzPVwidGlwXCI+XHJcbiAgICAgICAgICDmga3llpzmir3kuK17eyByZXN1bHRJdGVtLm5hbWUgfX1cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJ0aXBcIiB2LWVsc2U+XHJcbiAgICAgICAgICDosKLosKLmg6Dpob5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvdWktbW9kYWw+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgPC9zZWN0aW9uPlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgXCJ1aS1tb2RhbFwiOiAoKSA9PiBpbXBvcnQoXCIuLi8uLi9jb21tb24vY29tcG9uZW50cy91aS1tb2RhbC52dWVcIilcclxuICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBhd2FyZHM6IFtdLFxyXG4gICAgICBzaG93UmVzdWx0OiBmYWxzZSxcclxuICAgICAgcmVzdWx0SXRlbToge30sXHJcbiAgICAgIHRpbWVyVGFzazogbnVsbFxyXG4gICAgfTtcclxuICB9LFxyXG4gIHdhdGNoOiB7XHJcbiAgICBzaG93UmVzdWx0OiBmdW5jdGlvbihwYXJtYSkge1xyXG4gICAgICBpZiAoIXBhcm1hKSB7XHJcbiAgICAgICAgdGhpcy5yZXN1bHRJdGVtID0ge307XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXJUYXNrKTtcclxuICAgICAgICB0aGlzLnRpbWVyVGFzayA9IG51bGw7XHJcblxyXG4gICAgICAgIGxldCByb3cgPSB0aGlzLiRyZWZzLnJvdztcclxuICAgICAgICByb3cuc3R5bGUudHJhbnNpdGlvbiA9IFwibm9uZVwiO1xyXG4gICAgICAgIHJvdy5zdHlsZS50cmFuc2Zvcm0gPSBgbm9uZWA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICBkb2N1bWVudC50aXRsZSA9IFwi6L2s55uY5oq95aWWXCI7XHJcbiAgICB0aGlzLl9pbml0RGF0YSgpO1xyXG4gICAgLy8gdGhpcy5faW5pdE1vdmUoKTtcclxuICB9LFxyXG4gIGJlZm9yZURlc3Ryb3koKSB7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lclRhc2spO1xyXG4gICAgdGhpcy50aW1lclRhc2sgPSBudWxsO1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgX2luaXRNb2JpbGUoKSB7XHJcbiAgICAgIGxldCBvTWV0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIpO1xyXG4gICAgICBvTWV0YS5jb250ZW50ID0gYHdpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIG1heGltdW0tc2NhbGU9MS4wLCBtaW5pbXVtLXNjYWxlPTEuMCwgdXNlci1zY2FsYWJsZT1ubywgdGFyZ2V0LWRlbnNpdHlkcGk9ZGV2aWNlLWRwaSwgdmlld3BvcnQtZml0PWNvdmVyYDtcclxuICAgICAgb01ldGEubmFtZSA9IFwidmlld3BvcnRcIjtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKG9NZXRhKTtcclxuICAgIH0sXHJcbiAgICBfaW5pdERhdGEoKSB7XHJcbiAgICAgIGltcG9ydChcIi4vYXdhcmQuanNcIikudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIHRoaXMuYXdhcmRzID0gcmVzLmRlZmF1bHQ7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHN0YXJ0UGxheSgpIHtcclxuICAgICAgbGV0IHJvdyA9IHRoaXMuJHJlZnMucm93O1xyXG4gICAgICByb3cuc3R5bGUudHJhbnNpdGlvbiA9IGBhbGwgM3MgZWFzZS1pbi1vdXRgO1xyXG4gICAgICBsZXQgcm90YXRlTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzAwMCk7XHJcbiAgICAgIHJvdy5zdHlsZS50cmFuc2Zvcm0gPSBgIHJvdGF0ZSgke3JvdGF0ZU51bX1kZWcpYDtcclxuICAgICAgdGhpcy50aW1lclRhc2sgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLl9nZXRSZXN1bHQocm90YXRlTnVtKTtcclxuICAgICAgfSwgMzAwMCk7XHJcbiAgICB9LFxyXG4gICAgX2dldFJlc3VsdChyb3RhdGVOdW0pIHtcclxuICAgICAgbGV0IHBvcyA9IHJvdGF0ZU51bSAlIDM2MDtcclxuICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuYXdhcmRzLmZpbHRlcigoYXdhcmQsIGtleSkgPT4ge1xyXG4gICAgICAgIGlmIChhd2FyZC5hbmdsZXNbMF0gPiBhd2FyZC5hbmdsZXNbMV0pIHtcclxuICAgICAgICAgIHJldHVybiBwb3MgPiBhd2FyZC5hbmdsZXNbMF0gfHwgcG9zIDw9IGF3YXJkLmFuZ2xlc1sxXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIHBvcyA+IGF3YXJkLmFuZ2xlc1swXSAmJiBwb3MgPD0gYXdhcmQuYW5nbGVzWzFdO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMucmVzdWx0SXRlbSA9IHJlc3VsdFswXTtcclxuICAgICAgdGhpcy5zaG93UmVzdWx0ID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbi50dXJuLXRhYmxlLXdyYXBwZXIge1xyXG4gIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxuICAvKiBwYWRkaW5nLXRvcDogMjAwcHg7ICovXHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuLmNvbnRlbnQge1xyXG4gIHdpZHRoOiAzNzVweDtcclxuICBoZWlnaHQ6IDc2MHB4O1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4vcGFnZV9iZy5wbmdcIikgMCAwIG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcclxufVxyXG4udGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzY1cHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi9iZy5wbmdcIikgMiUgNSUgbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAmLXJvdy1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggcmVkIHNvbGlkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjAsIDIwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogOHB4IHJnYigyMTAsIDIxMCwgNSkgc29saWQ7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICB9XHJcbiAgJi1yb3cge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgICB6LWluZGV4OiAyMDtcclxuICAgIHRvcDogLTEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuL2Fycm93LnBuZ1wiKSAwIDAgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDNzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xyXG4gICAgLyogdHJhbnNmb3JtOiByb3RhdGUoNTBkZWcpOyAqL1xyXG4gIH1cclxufVxyXG48L3N0eWxlPlxyXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2FmZmNlZmEmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2FmZmNlZmEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3YWZmY2VmYVwiLFxuICBudWxsXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTMtMCEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YWZmY2VmYSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTMtMCEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YWZmY2VmYSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9