(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/threeDemo/demo1.vue?vue&type=template&id=6b4ad948&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{ref:"renderDom"},[_c('section',{staticClass:"handler"},[_c('section',{staticClass:"cube-btn",on:{"click":_vm.addCube}},[_vm._v("addCube btn")]),_vm._v(" "),_c('section',{staticClass:"cube-btn",on:{"click":_vm.startMove}},[_vm._v("move up")]),_vm._v(" "),_c('section',{staticClass:"cube-btn",on:{"click":_vm.animateMoveCube}},[_vm._v("animateMoveCube")])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/threeDemo/demo1.vue?vue&type=template&id=6b4ad948&scoped=true&

// EXTERNAL MODULE: ./node_modules/three/build/three.module.js
var three_module = __webpack_require__(49);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/threeDemo/demo1.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var demo1vue_type_script_lang_js_ = ({
  data() {
    return {
      renderer: null,
      scene: null,
      camera: null,
      cur_cube: null,
      group: null,
      cubes: [],
      // 跳动方块
      movCube: null,
      movCubeStateY: 0.8,
      cameraPos: {
        cur: {
          x: 0,
          y: 0,
          z: 0
        },
        next: {
          x: 0,
          y: 0,
          z: 0
        }
      },
      dir: null,
      // 当前方块实例
      curMeshPosition: {
        x: 0,
        y: 0,
        z: 0
      },
      xLight: null,
      yLight: null,
      zLIght: null,
      moveHandler: null
    };
  },

  mounted() {
    // 初始化画布
    this._initRenderDom(); // 改变相机视角
    // this._changeCamera();
    // 创建方块


    this.addCube();
    this.addCube(); // 创建移动物体

    this._createMoveCube();
  },

  methods: {
    addCube() {
      // 创建方块
      this._createCube();
    },

    _initRenderDom() {
      this.scene = new three_module["Scene"](); // 坐标轴辅助线

      let axisHelpre = new three_module["AxisHelper"](15);
      this.scene.add(axisHelpre); // 光

      let dirLight = new three_module["DirectionalLight"](0xffffff, 1);
      dirLight.position.set(8, 10, 6);
      this.scene.add(dirLight); // 相机

      this.camera = new three_module["OrthographicCamera"](window.innerWidth / -20, window.innerWidth / 20, window.innerHeight / 20, window.innerHeight / -20, 1, 1000);
      this.camera.position.set(100, 100, 100);
      this.camera.lookAt(new three_module["Vector3"](0, 0, 0)); // 渲染器

      this.renderer = new three_module["WebGLRenderer"]({
        antialias: true
      });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      let renDom = this.$refs.renderDom;
      renDom.appendChild(this.renderer.domElement);
    },

    _getOrientation() {
      let dirNum = Math.floor(Math.random() * 10);
      this.dir = dirNum % 3 === 0 ? "left" : "right";
    },

    _createCube() {
      // 确定当前方块方向
      if (this.cubes && this.cubes.length > 0) {
        this._getOrientation();
      } // 创建方块实体


      this.cur_cube = new three_module["BoxGeometry"](5, 2, 5);
      let material = new three_module["MeshPhongMaterial"]({
        color: 0xffff00
      });
      let mesh = new three_module["Mesh"](this.cur_cube, material); // 新创建的方块位置

      if (this.dir === "left") {
        this.curMeshPosition = {
          x: this.curMeshPosition.x - 10,
          y: this.curMeshPosition.y,
          z: this.curMeshPosition.z
        };
        this.cameraPos.next = this.curMeshPosition;
      } else if (this.dir === "right") {
        this.curMeshPosition = {
          x: this.curMeshPosition.x,
          y: this.curMeshPosition.y,
          z: this.curMeshPosition.z - 10
        };
        this.cameraPos.next = this.curMeshPosition;
      } // 确定方块位置


      mesh.position.set(this.curMeshPosition.x, this.curMeshPosition.y, this.curMeshPosition.z); // 初始化相机下一步挪动重点位置

      this.cubes.push(this.cur_cube);
      this.scene.add(mesh);
    },

    _changeCamera() {
      if (this.cameraPos.cur.z > this.cameraPos.next.z) {
        this.cameraPos.cur.z -= 0.2;
      } else if (this.cameraPos.cur.x > this.cameraPos.next.x) {
        this.cameraPos.cur.x -= 0.2;
      }

      this.camera.lookAt(new three_module["Vector3"](this.cameraPos.cur.x, this.cameraPos.cur.y, this.cameraPos.cur.z));
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this._changeCamera);
    },

    _createMoveCube() {
      let moveCubeGeometry = new three_module["BoxGeometry"](2, 4, 2);
      let moveCubeMaterial = new three_module["MeshPhongMaterial"](0xfff000);
      this.movCube = new three_module["Mesh"](moveCubeGeometry, moveCubeMaterial);
      this.movCube.position.set(0, 2, 0);
      moveCubeGeometry.translate(0, 1, 0);
      this.scene.add(this.movCube);
    },

    startMove() {
      if (this.movCube.position.y >= 2) {
        this.movCube.position.y += this.movCubeStateY;

        if (this.dir === "left" && this.movCube.position.x > this.cameraPos.next.x) {
          this.movCube.position.x -= 0.5;
        } else if (this.dir === "right" && this.movCube.position.z > this.cameraPos.next.z) {
          this.movCube.position.z -= 0.5;
        }

        this.movCubeStateY -= 0.04;
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.startMove);
      } else {
        this.movCube.position.y = 2;
        this.movCubeStateY = 0.8;
        this.addCube();

        this._checkPosition();
      }
    },

    animateMoveCube() {
      if (this.movCube.rotation[`z`] < Math.PI / 2) {
        this.movCube.rotation["z"] += 0.1;
      }

      requestAnimationFrame(this.animateMoveCube);
    },

    _checkPosition() {},

    moveDown() {}

  }
});
// CONCATENATED MODULE: ./src/threeDemo/demo1.vue?vue&type=script&lang=js&
 /* harmony default export */ var threeDemo_demo1vue_type_script_lang_js_ = (demo1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/threeDemo/demo1.vue?vue&type=style&index=0&id=6b4ad948&scoped=true&lang=css&
var demo1vue_type_style_index_0_id_6b4ad948_scoped_true_lang_css_ = __webpack_require__(68);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./src/threeDemo/demo1.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  threeDemo_demo1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "6b4ad948",
  null
  
)

/* harmony default export */ var demo1 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_demo1_vue_vue_type_style_index_0_id_6b4ad948_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_demo1_vue_vue_type_style_index_0_id_6b4ad948_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_demo1_vue_vue_type_style_index_0_id_6b4ad948_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_demo1_vue_vue_type_style_index_0_id_6b4ad948_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGhyZWVEZW1vL2RlbW8xLnZ1ZT9iNTNkIiwid2VicGFjazovLy9zcmMvdGhyZWVEZW1vL2RlbW8xLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdGhyZWVEZW1vL2RlbW8xLnZ1ZT9kMjE2Iiwid2VicGFjazovLy8uL3NyYy90aHJlZURlbW8vZGVtbzEudnVlIiwid2VicGFjazovLy8uL3NyYy90aHJlZURlbW8vZGVtbzEudnVlPzEyNjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RocmVlRGVtby9kZW1vMS52dWU/MmQ1NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwwQkFBMEIsYUFBYSwwQkFBMEIsd0JBQXdCLHFCQUFxQixnQkFBZ0IsZ0JBQWdCLHNCQUFzQixnQkFBZ0IsMkJBQTJCLHFCQUFxQixvREFBb0QsMkJBQTJCLHVCQUF1QixnREFBZ0QsMkJBQTJCLDZCQUE2QjtBQUNsYjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBLGlCQUZBO0FBR0Esa0JBSEE7QUFJQSxvQkFKQTtBQUtBLGlCQUxBO0FBTUEsZUFOQTtBQU9BO0FBQ0EsbUJBUkE7QUFTQSx3QkFUQTtBQVVBO0FBQ0E7QUFDQSxjQURBO0FBRUEsY0FGQTtBQUdBO0FBSEEsU0FEQTtBQU1BO0FBQ0EsY0FEQTtBQUVBLGNBRkE7QUFHQTtBQUhBO0FBTkEsT0FWQTtBQXNCQSxlQXRCQTtBQXVCQTtBQUNBO0FBQ0EsWUFEQTtBQUVBLFlBRkE7QUFHQTtBQUhBLE9BeEJBO0FBNkJBLGtCQTdCQTtBQThCQSxrQkE5QkE7QUErQkEsa0JBL0JBO0FBZ0NBO0FBaENBO0FBa0NBLEdBcENBOztBQXFDQTtBQUNBO0FBQ0EsMEJBRkEsQ0FHQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0EsbUJBUEEsQ0FRQTs7QUFDQTtBQUNBLEdBL0NBOztBQWdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSkE7O0FBS0E7QUFDQSwrQ0FEQSxDQUVBOztBQUNBO0FBQ0EsaUNBSkEsQ0FLQTs7QUFDQTtBQUNBO0FBQ0EsK0JBUkEsQ0FTQTs7QUFDQSwyREFDQSx1QkFEQSxFQUVBLHNCQUZBLEVBR0EsdUJBSEEsRUFJQSx3QkFKQSxFQUtBLENBTEEsRUFNQSxJQU5BO0FBUUE7QUFDQSwrREFuQkEsQ0FvQkE7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0E5QkE7O0FBK0JBO0FBQ0E7QUFDQTtBQUNBLEtBbENBOztBQW1DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkEsQ0FNQTs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQSxtRUFYQSxDQVlBOztBQUNBO0FBQ0E7QUFDQSx3Q0FEQTtBQUVBLG1DQUZBO0FBR0E7QUFIQTtBQUtBO0FBQ0EsT0FQQSxNQU9BO0FBQ0E7QUFDQSxtQ0FEQTtBQUVBLG1DQUZBO0FBR0E7QUFIQTtBQUtBO0FBQ0EsT0EzQkEsQ0E0QkE7OztBQUNBLHdCQUNBLHNCQURBLEVBRUEsc0JBRkEsRUFHQSxzQkFIQSxFQTdCQSxDQWtDQTs7QUFDQTtBQUNBO0FBQ0EsS0F4RUE7O0FBeUVBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7O0FBQ0EseUJBQ0EsNEJBQ0Esb0JBREEsRUFFQSxvQkFGQSxFQUdBLG9CQUhBLENBREE7QUFPQTtBQUNBO0FBQ0EsS0F4RkE7O0FBeUZBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FqR0E7O0FBa0dBO0FBQ0E7QUFDQTs7QUFDQSxZQUNBLHVCQUNBLCtDQUZBLEVBR0E7QUFDQTtBQUNBLFNBTEEsTUFLQSxJQUNBLHdCQUNBLCtDQUZBLEVBR0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BaEJBLE1BZ0JBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSxLQXpIQTs7QUEwSEE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxLQS9IQTs7QUFnSUEsdUJBaElBOztBQWlJQTs7QUFqSUE7QUFoREEsRzs7QUNYcUssQ0FBZ0IseUdBQUcsRUFBQyxDOzs7Ozs7OztBQ0F6RjtBQUN2QztBQUNMO0FBQ3FDOzs7QUFHekY7QUFDMEY7QUFDMUYsZ0JBQWdCLDhDQUFVO0FBQzFCLEVBQUUsdUNBQU07QUFDUixFQUFFLE1BQU07QUFDUixFQUFFLGVBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWUsNEY7Ozs7Ozs7QUNuQmYsdUM7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQTZaLENBQWdCLGlkQUFHLEVBQUMsQyIsImZpbGUiOiJhd2FyZF9kaXN0L2pzLzI0LmQ3NzkyMjFiMzAzMjFiNGNlOWQ1LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ3NlY3Rpb24nLHtyZWY6XCJyZW5kZXJEb21cIn0sW19jKCdzZWN0aW9uJyx7c3RhdGljQ2xhc3M6XCJoYW5kbGVyXCJ9LFtfYygnc2VjdGlvbicse3N0YXRpY0NsYXNzOlwiY3ViZS1idG5cIixvbjp7XCJjbGlja1wiOl92bS5hZGRDdWJlfX0sW192bS5fdihcImFkZEN1YmUgYnRuXCIpXSksX3ZtLl92KFwiIFwiKSxfYygnc2VjdGlvbicse3N0YXRpY0NsYXNzOlwiY3ViZS1idG5cIixvbjp7XCJjbGlja1wiOl92bS5zdGFydE1vdmV9fSxbX3ZtLl92KFwibW92ZSB1cFwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3NlY3Rpb24nLHtzdGF0aWNDbGFzczpcImN1YmUtYnRuXCIsb246e1wiY2xpY2tcIjpfdm0uYW5pbWF0ZU1vdmVDdWJlfX0sW192bS5fdihcImFuaW1hdGVNb3ZlQ3ViZVwiKV0pXSldKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiPHRlbXBsYXRlPlxyXG4gICAgPHNlY3Rpb24gcmVmPVwicmVuZGVyRG9tXCI+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJoYW5kbGVyXCI+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY3ViZS1idG5cIiBAY2xpY2s9XCJhZGRDdWJlXCI+YWRkQ3ViZSBidG48L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY3ViZS1idG5cIiBAY2xpY2s9XCJzdGFydE1vdmVcIj5tb3ZlIHVwPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImN1YmUtYnRuXCIgQGNsaWNrPVwiYW5pbWF0ZU1vdmVDdWJlXCI+YW5pbWF0ZU1vdmVDdWJlPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvc2VjdGlvbj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuaW1wb3J0ICogYXMgVGhyZWUgZnJvbSBcInRocmVlXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVuZGVyZXI6IG51bGwsXHJcbiAgICAgICAgICAgIHNjZW5lOiBudWxsLFxyXG4gICAgICAgICAgICBjYW1lcmE6IG51bGwsXHJcbiAgICAgICAgICAgIGN1cl9jdWJlOiBudWxsLFxyXG4gICAgICAgICAgICBncm91cDogbnVsbCxcclxuICAgICAgICAgICAgY3ViZXM6IFtdLFxyXG4gICAgICAgICAgICAvLyDot7PliqjmlrnlnZdcclxuICAgICAgICAgICAgbW92Q3ViZTogbnVsbCxcclxuICAgICAgICAgICAgbW92Q3ViZVN0YXRlWTogMC44LFxyXG4gICAgICAgICAgICBjYW1lcmFQb3M6IHtcclxuICAgICAgICAgICAgICAgIGN1cjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgICAgICAgICB6OiAwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbmV4dDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgICAgICAgICB6OiAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRpcjogbnVsbCxcclxuICAgICAgICAgICAgLy8g5b2T5YmN5pa55Z2X5a6e5L6LXHJcbiAgICAgICAgICAgIGN1ck1lc2hQb3NpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgICAgICB6OiAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHhMaWdodDogbnVsbCxcclxuICAgICAgICAgICAgeUxpZ2h0OiBudWxsLFxyXG4gICAgICAgICAgICB6TElnaHQ6IG51bGwsXHJcbiAgICAgICAgICAgIG1vdmVIYW5kbGVyOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIC8vIOWIneWni+WMlueUu+W4g1xyXG4gICAgICAgIHRoaXMuX2luaXRSZW5kZXJEb20oKTtcclxuICAgICAgICAvLyDmlLnlj5jnm7jmnLrop4bop5JcclxuICAgICAgICAvLyB0aGlzLl9jaGFuZ2VDYW1lcmEoKTtcclxuICAgICAgICAvLyDliJvlu7rmlrnlnZdcclxuICAgICAgICB0aGlzLmFkZEN1YmUoKTtcclxuICAgICAgICB0aGlzLmFkZEN1YmUoKTtcclxuICAgICAgICAvLyDliJvlu7rnp7vliqjniankvZNcclxuICAgICAgICB0aGlzLl9jcmVhdGVNb3ZlQ3ViZSgpO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBhZGRDdWJlKCkge1xyXG4gICAgICAgICAgICAvLyDliJvlu7rmlrnlnZdcclxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlQ3ViZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX2luaXRSZW5kZXJEb20oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUgPSBuZXcgVGhyZWUuU2NlbmUoKTtcclxuICAgICAgICAgICAgLy8g5Z2Q5qCH6L206L6F5Yqp57q/XHJcbiAgICAgICAgICAgIGxldCBheGlzSGVscHJlID0gbmV3IFRocmVlLkF4aXNIZWxwZXIoMTUpO1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLmFkZChheGlzSGVscHJlKTtcclxuICAgICAgICAgICAgLy8g5YWJXHJcbiAgICAgICAgICAgIGxldCBkaXJMaWdodCA9IG5ldyBUaHJlZS5EaXJlY3Rpb25hbExpZ2h0KDB4ZmZmZmZmLCAxKTtcclxuICAgICAgICAgICAgZGlyTGlnaHQucG9zaXRpb24uc2V0KDgsIDEwLCA2KTtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGQoZGlyTGlnaHQpO1xyXG4gICAgICAgICAgICAvLyDnm7jmnLpcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEgPSBuZXcgVGhyZWUuT3J0aG9ncmFwaGljQ2FtZXJhKFxyXG4gICAgICAgICAgICAgICAgd2luZG93LmlubmVyV2lkdGggLyAtMjAsXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCAvIDIwLFxyXG4gICAgICAgICAgICAgICAgd2luZG93LmlubmVySGVpZ2h0IC8gMjAsXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgLyAtMjAsXHJcbiAgICAgICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICAgICAgMTAwMFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi5zZXQoMTAwLCAxMDAsIDEwMCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLmxvb2tBdChuZXcgVGhyZWUuVmVjdG9yMygwLCAwLCAwKSk7XHJcbiAgICAgICAgICAgIC8vIOa4suafk+WZqFxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFRocmVlLldlYkdMUmVuZGVyZXIoeyBhbnRpYWxpYXM6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgICAgICAgICAgbGV0IHJlbkRvbSA9IHRoaXMuJHJlZnMucmVuZGVyRG9tO1xyXG4gICAgICAgICAgICByZW5Eb20uYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIF9nZXRPcmllbnRhdGlvbigpIHtcclxuICAgICAgICAgICAgbGV0IGRpck51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICAgICAgdGhpcy5kaXIgPSBkaXJOdW0gJSAzID09PSAwID8gXCJsZWZ0XCIgOiBcInJpZ2h0XCI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBfY3JlYXRlQ3ViZSgpIHtcclxuICAgICAgICAgICAgLy8g56Gu5a6a5b2T5YmN5pa55Z2X5pa55ZCRXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1YmVzICYmIHRoaXMuY3ViZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2V0T3JpZW50YXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8g5Yib5bu65pa55Z2X5a6e5L2TXHJcbiAgICAgICAgICAgIHRoaXMuY3VyX2N1YmUgPSBuZXcgVGhyZWUuQm94R2VvbWV0cnkoNSwgMiwgNSk7XHJcbiAgICAgICAgICAgIGxldCBtYXRlcmlhbCA9IG5ldyBUaHJlZS5NZXNoUGhvbmdNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogMHhmZmZmMDBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGxldCBtZXNoID0gbmV3IFRocmVlLk1lc2godGhpcy5jdXJfY3ViZSwgbWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICAvLyDmlrDliJvlu7rnmoTmlrnlnZfkvY3nva5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyID09PSBcImxlZnRcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJNZXNoUG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5jdXJNZXNoUG9zaXRpb24ueCAtIDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuY3VyTWVzaFBvc2l0aW9uLnksXHJcbiAgICAgICAgICAgICAgICAgICAgejogdGhpcy5jdXJNZXNoUG9zaXRpb24uelxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhUG9zLm5leHQgPSB0aGlzLmN1ck1lc2hQb3NpdGlvbjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRpciA9PT0gXCJyaWdodFwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1ck1lc2hQb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLmN1ck1lc2hQb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuY3VyTWVzaFBvc2l0aW9uLnksXHJcbiAgICAgICAgICAgICAgICAgICAgejogdGhpcy5jdXJNZXNoUG9zaXRpb24ueiAtIDEwXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmFQb3MubmV4dCA9IHRoaXMuY3VyTWVzaFBvc2l0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOehruWumuaWueWdl+S9jee9rlxyXG4gICAgICAgICAgICBtZXNoLnBvc2l0aW9uLnNldChcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VyTWVzaFBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1ck1lc2hQb3NpdGlvbi55LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJNZXNoUG9zaXRpb24uelxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAvLyDliJ3lp4vljJbnm7jmnLrkuIvkuIDmraXmjKrliqjph43ngrnkvY3nva5cclxuICAgICAgICAgICAgdGhpcy5jdWJlcy5wdXNoKHRoaXMuY3VyX2N1YmUpO1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLmFkZChtZXNoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIF9jaGFuZ2VDYW1lcmEoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNhbWVyYVBvcy5jdXIueiA+IHRoaXMuY2FtZXJhUG9zLm5leHQueikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmFQb3MuY3VyLnogLT0gMC4yO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2FtZXJhUG9zLmN1ci54ID4gdGhpcy5jYW1lcmFQb3MubmV4dC54KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYVBvcy5jdXIueCAtPSAwLjI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEubG9va0F0KFxyXG4gICAgICAgICAgICAgICAgbmV3IFRocmVlLlZlY3RvcjMoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW1lcmFQb3MuY3VyLngsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW1lcmFQb3MuY3VyLnksXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW1lcmFQb3MuY3VyLnpcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fY2hhbmdlQ2FtZXJhKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIF9jcmVhdGVNb3ZlQ3ViZSgpIHtcclxuICAgICAgICAgICAgbGV0IG1vdmVDdWJlR2VvbWV0cnkgPSBuZXcgVGhyZWUuQm94R2VvbWV0cnkoMiwgNCwgMik7XHJcblxyXG4gICAgICAgICAgICBsZXQgbW92ZUN1YmVNYXRlcmlhbCA9IG5ldyBUaHJlZS5NZXNoUGhvbmdNYXRlcmlhbCgweGZmZjAwMCk7XHJcbiAgICAgICAgICAgIHRoaXMubW92Q3ViZSA9IG5ldyBUaHJlZS5NZXNoKG1vdmVDdWJlR2VvbWV0cnksIG1vdmVDdWJlTWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICB0aGlzLm1vdkN1YmUucG9zaXRpb24uc2V0KDAsIDIsIDApO1xyXG4gICAgICAgICAgICBtb3ZlQ3ViZUdlb21ldHJ5LnRyYW5zbGF0ZSgwLCAxLCAwKTtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5tb3ZDdWJlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0YXJ0TW92ZSgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubW92Q3ViZS5wb3NpdGlvbi55ID49IDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92Q3ViZS5wb3NpdGlvbi55ICs9IHRoaXMubW92Q3ViZVN0YXRlWTtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpciA9PT0gXCJsZWZ0XCIgJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdkN1YmUucG9zaXRpb24ueCA+IHRoaXMuY2FtZXJhUG9zLm5leHQueFxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZDdWJlLnBvc2l0aW9uLnggLT0gMC41O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpciA9PT0gXCJyaWdodFwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZDdWJlLnBvc2l0aW9uLnogPiB0aGlzLmNhbWVyYVBvcy5uZXh0LnpcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92Q3ViZS5wb3NpdGlvbi56IC09IDAuNTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubW92Q3ViZVN0YXRlWSAtPSAwLjA0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuc3RhcnRNb3ZlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92Q3ViZS5wb3NpdGlvbi55ID0gMjtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92Q3ViZVN0YXRlWSA9IDAuODtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ3ViZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhbmltYXRlTW92ZUN1YmUoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1vdkN1YmUucm90YXRpb25bYHpgXSA8IE1hdGguUEkgLyAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdkN1YmUucm90YXRpb25bXCJ6XCJdICs9IDAuMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlTW92ZUN1YmUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX2NoZWNrUG9zaXRpb24oKSB7fSxcclxuICAgICAgICBtb3ZlRG93bigpIHt9XHJcbiAgICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgc2NvcGVkPlxyXG4uaGFuZGxlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5jdWJlLWJ0biB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgYm9yZGVyOiAxcHggcmdiKDI1NSwgMjU1LCAyNTUpIHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMHB4IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG48L3N0eWxlPlxyXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZGVtbzEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZGVtbzEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9kZW1vMS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmI0YWQ5NDgmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZGVtbzEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9kZW1vMS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vZGVtbzEudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmI0YWQ5NDgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjZiNGFkOTQ4XCIsXG4gIG51bGxcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tMy0wIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2RlbW8xLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZiNGFkOTQ4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS0zLTAhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZGVtbzEudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmI0YWQ5NDgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiXSwic291cmNlUm9vdCI6IiJ9