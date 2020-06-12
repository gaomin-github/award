(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_style_index_0_id_1ebcbe25_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_style_index_0_id_1ebcbe25_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_style_index_0_id_1ebcbe25_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_style_index_0_id_1ebcbe25_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

let request = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  timeout: 1000 * 30,
  headers: {}
});
/* harmony default export */ __webpack_exports__["a"] = (request);

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/weekly/com/user.vue?vue&type=template&id=1ebcbe25&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"user-wrapper"},[_c('header'),_vm._v(" "),(_vm.users && _vm.users.length > 0)?_c('div',{staticClass:"user"},_vm._l((_vm.users),function(user){return _c('div',{key:user.userId,staticClass:"user-item",on:{"click":function($event){return _vm.selectUser(user)}}},[_vm._v(_vm._s(user.userName))])}),0):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/weekly/com/user.vue?vue&type=template&id=1ebcbe25&scoped=true&

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(3);

// EXTERNAL MODULE: ./utils/request.js
var request = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/weekly/com/user.vue?vue&type=script&lang=js&
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


/* harmony default export */ var uservue_type_script_lang_js_ = ({
  computed: {},

  data() {
    return {
      users: []
    };
  },

  computed: { ...Object(vuex_esm["d" /* mapState */])("weekly", ["pathArr"])
  },

  mounted() {
    this._initUsers();

    if (!(this.pathArr && this.pathArr.length > 0)) {
      this.pushPathArr("user");
    } // window.addEventListener("online", () => {
    //     console.log(window.location.href, 34);
    //     console.log("online", 35);
    // });
    // window.addEventListener("offline", () => {
    //     console.log(window.location.href, 38);
    //     console.log("offline", 40);
    // });

  },

  methods: { ...Object(vuex_esm["c" /* mapMutations */])("weekly", ["updateCurUser", "pushPathArr"]),

    _initUsers() {
      request["a" /* default */].get("/task/users").then(res => {
        if (res.status === 200 && res.data) {
          this.users = res.data;
        }
      });
    },

    selectUser(user) {
      this.updateCurUser(user);
      this.pushPathArr("task");
    }

  }
});
// CONCATENATED MODULE: ./src/weekly/com/user.vue?vue&type=script&lang=js&
 /* harmony default export */ var com_uservue_type_script_lang_js_ = (uservue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/weekly/com/user.vue?vue&type=style&index=0&id=1ebcbe25&lang=scss&scoped=true&
var uservue_type_style_index_0_id_1ebcbe25_lang_scss_scoped_true_ = __webpack_require__(102);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./src/weekly/com/user.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  com_uservue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "1ebcbe25",
  null
  
)

/* harmony default export */ var user = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvd2Vla2x5L2NvbS91c2VyLnZ1ZT8wOTllIiwid2VicGFjazovLy8uL3V0aWxzL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlZWtseS9jb20vdXNlci52dWU/MzVjNCIsIndlYnBhY2s6Ly8vc3JjL3dlZWtseS9jb20vdXNlci52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlZWtseS9jb20vdXNlci52dWU/ODZiZiIsIndlYnBhY2s6Ly8vLi9zcmMvd2Vla2x5L2NvbS91c2VyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvd2Vla2x5L2NvbS91c2VyLnZ1ZT9iMDYxIl0sIm5hbWVzIjpbInJlcXVlc3QiLCJheGlvcyIsImNyZWF0ZSIsInRpbWVvdXQiLCJoZWFkZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBK2EsQ0FBZ0IsaWRBQUcsRUFBQyxDOzs7Ozs7OztBQ0FuYztBQUFBO0FBQUE7QUFDQSxJQUFJQSxPQUFPLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sQ0FBYTtBQUN6QkMsU0FBTyxFQUFFLE9BQU8sRUFEUztBQUV6QkMsU0FBTyxFQUFFO0FBRmdCLENBQWIsQ0FBZDtBQUllSixnRUFBZixFOzs7Ozs7Ozs7OztBQ0xBLDBCQUEwQixhQUFhLDBCQUEwQix3QkFBd0IsaUJBQWlCLDJCQUEyQix5RUFBeUUsbUJBQW1CLG1DQUFtQyxpQkFBaUIsNENBQTRDLHlCQUF5Qiw4QkFBOEIsa0NBQWtDO0FBQzFaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYUE7QUFDQTtBQUVBO0FBQ0EsY0FEQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBLEdBTkE7O0FBT0EsY0FDQTtBQURBLEdBUEE7O0FBVUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0EsS0FKQSxDQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBQ0EsR0F4QkE7O0FBeUJBLGFBQ0EsdUZBREE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkE7QUFLQSxLQVJBOztBQVNBO0FBQ0E7QUFDQTtBQUNBOztBQVpBO0FBekJBLEc7O0FDakIwSyxDQUFnQixpR0FBRyxFQUFDLEM7Ozs7Ozs7O0FDQS9GO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUd6RjtBQUM2RjtBQUM3RixnQkFBZ0IsOENBQVU7QUFDMUIsRUFBRSxnQ0FBTTtBQUNSLEVBQUUsTUFBTTtBQUNSLEVBQUUsZUFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFZSwyRjs7Ozs7OztBQ25CZix1QyIsImZpbGUiOiJhd2FyZF9kaXN0L2pzLzE0LmQ3NzkyMjFiMzAzMjFiNGNlOWQ1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tMy0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VzZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWViY2JlMjUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS0zLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdXNlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xZWJjYmUyNSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmxldCByZXF1ZXN0ID0gYXhpb3MuY3JlYXRlKHtcclxuICB0aW1lb3V0OiAxMDAwICogMzAsXHJcbiAgaGVhZGVyczoge30sXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0O1xyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJ1c2VyLXdyYXBwZXJcIn0sW19jKCdoZWFkZXInKSxfdm0uX3YoXCIgXCIpLChfdm0udXNlcnMgJiYgX3ZtLnVzZXJzLmxlbmd0aCA+IDApP19jKCdkaXYnLHtzdGF0aWNDbGFzczpcInVzZXJcIn0sX3ZtLl9sKChfdm0udXNlcnMpLGZ1bmN0aW9uKHVzZXIpe3JldHVybiBfYygnZGl2Jyx7a2V5OnVzZXIudXNlcklkLHN0YXRpY0NsYXNzOlwidXNlci1pdGVtXCIsb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0uc2VsZWN0VXNlcih1c2VyKX19fSxbX3ZtLl92KF92bS5fcyh1c2VyLnVzZXJOYW1lKSldKX0pLDApOl92bS5fZSgpXSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJ1c2VyLXdyYXBwZXJcIj5cclxuICAgICAgICA8aGVhZGVyPjwvaGVhZGVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyXCIgdi1pZj1cInVzZXJzICYmIHVzZXJzLmxlbmd0aCA+IDBcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ1c2VyLWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgdi1mb3I9XCJ1c2VyIGluIHVzZXJzXCJcclxuICAgICAgICAgICAgICAgIDprZXk9XCJ1c2VyLnVzZXJJZFwiXHJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJzZWxlY3RVc2VyKHVzZXIpXCJcclxuICAgICAgICAgICAgPnt7IHVzZXIudXNlck5hbWUgfX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBtYXBTdGF0ZSwgbWFwR2V0dGVycywgbWFwTXV0YXRpb25zIH0gZnJvbSBcInZ1ZXhcIjtcclxuaW1wb3J0IHJlcXVlc3QgZnJvbSBcInJlcXVlc3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbXB1dGVkOiB7fSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdXNlcnM6IFtdXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIC4uLm1hcFN0YXRlKFwid2Vla2x5XCIsIFtcInBhdGhBcnJcIl0pXHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICB0aGlzLl9pbml0VXNlcnMoKTtcclxuICAgICAgICBpZiAoISh0aGlzLnBhdGhBcnIgJiYgdGhpcy5wYXRoQXJyLmxlbmd0aCA+IDApKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHVzaFBhdGhBcnIoXCJ1c2VyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9ubGluZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCAzNCk7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwib25saW5lXCIsIDM1KTtcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9mZmxpbmVcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh3aW5kb3cubG9jYXRpb24uaHJlZiwgMzgpO1xyXG5cclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJvZmZsaW5lXCIsIDQwKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgLi4ubWFwTXV0YXRpb25zKFwid2Vla2x5XCIsIFtcInVwZGF0ZUN1clVzZXJcIiwgXCJwdXNoUGF0aEFyclwiXSksXHJcbiAgICAgICAgX2luaXRVc2VycygpIHtcclxuICAgICAgICAgICAgcmVxdWVzdC5nZXQoXCIvdGFzay91c2Vyc1wiKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwICYmIHJlcy5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VycyA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlbGVjdFVzZXIodXNlcikge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUN1clVzZXIodXNlcik7XHJcbiAgICAgICAgICAgIHRoaXMucHVzaFBhdGhBcnIoXCJ0YXNrXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuLnVzZXItd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbn1cclxuLnVzZXIge1xyXG4gICAgJi1pdGVtIHtcclxuICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NiwgMjQ1LCAyMjAsIDEpO1xyXG4gICAgfVxyXG59XHJcbjwvc3R5bGU+IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VzZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdXNlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3VzZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFlYmNiZTI1JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VzZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91c2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi91c2VyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFlYmNiZTI1Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMWViY2JlMjVcIixcbiAgbnVsbFxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9