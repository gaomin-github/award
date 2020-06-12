(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/cloud/index.vue?vue&type=template&id=536c26b4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"cloud-wrapper"},[_c('section',{staticClass:"content-pic"},[_c('canvas',{ref:"myCanvas",attrs:{"id":"myCanvas"}}),_vm._v(" "),_c('ul',{staticClass:"tags",attrs:{"id":"tags"}},_vm._l((_vm.memberList),function(item,key){return _c('li',{key:key,staticClass:"tags-item"},[_c('a',{attrs:{"href":"#","target":"_blank"}},[_vm._v("\n          "+_vm._s(item.name)+"\n        ")])])}),0)]),_vm._v(" "),_c('section',{staticClass:"console"},[_vm._l((_vm.btnTypes),function(btn){return _c('section',{key:btn.value,staticClass:"console-btn",class:_vm.curBtnType === btn.value ? 'console-btn-active' : '',on:{"click":function($event){return _vm.changeBtnType(btn.value)}}},[_vm._v("\n      "+_vm._s(btn.value)+"\n    ")])}),_vm._v(" "),_c('section',{staticClass:"console-switch",class:_vm.isRunning ? 'console-switch-on' : 'console-switch-off',on:{"click":_vm.handleAward}},[_vm._v("\n      "+_vm._s(_vm.isRunning ? "停" : "开始")+"\n    ")]),_vm._v(" "),_c('section',{staticClass:"console-showall",on:{"click":_vm.getAllResult}},[_vm._v("\n      获取完整名单\n    ")]),_vm._v(" "),_c('section',{staticClass:"console-clear",on:{"click":_vm.reset}},[_vm._v("重置")])],2),_vm._v(" "),_c('ui-modal',{model:{value:(_vm.showResult),callback:function ($$v) {_vm.showResult=$$v},expression:"showResult"}},[(_vm.showAllResult)?_c('section',_vm._l((_vm.btnTypes),function(award){return _c('section',{staticClass:"award"},[_c('section',{staticClass:"award-title"},[_vm._v("\n          "+_vm._s(award.label)+"："+_vm._s(award.value)+"名\n        ")]),_vm._v(" "),_c('section',{staticClass:"person"},_vm._l((_vm.curResultList),function(item){return _c('section',{key:item.phone + '_' + item.name + '_item.awardType'},[(item.awardType === award.value)?_c('section',{staticClass:"person-item"},[_c('section',{staticClass:"person-item-name"},[_vm._v(_vm._s(item.name))]),_vm._v(" "),_c('section',{staticClass:"person-item-phone"},[_vm._v(_vm._s(item.phone))])]):_vm._e()])}),0)])}),0):_c('section',{staticClass:"person"},_vm._l((_vm.curResultList),function(item){return _c('section',{key:item.phone + '_' + item.name,staticClass:"person-item"},[_c('section',{staticClass:"person-item-name"},[_vm._v(_vm._s(item.name))]),_vm._v(" "),_c('section',{staticClass:"person-item-phone"},[_vm._v(_vm._s(item.phone))])])}),0)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/cloud/index.vue?vue&type=template&id=536c26b4&scoped=true&

// EXTERNAL MODULE: ./common/lib/tagcanvas.js
var tagcanvas = __webpack_require__(61);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/cloud/index.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
// import "../../common/lib/tagcanvas.js";

/* harmony default export */ var cloudvue_type_script_lang_js_ = ({
  components: {
    "ui-modal": () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 119))
  },

  data() {
    return {
      memberList: [],
      btnTypes: [{
        label: "一等奖",
        value: 5
      }, {
        label: "二等奖",
        value: 10
      }, {
        label: "三等奖",
        value: 30
      }],
      curBtnType: 0,
      isRunning: false,
      showResult: false,
      showAllResult: false,
      curResultList: []
    };
  },

  watch: {
    showResult: function (val) {
      if (!val) {
        TagCanvas.SetSpeed("myCanvas", this._normalSpeed());
        this.showAllResult = false;
        this.curResultList = []; // TagCanvas.SetSpeed("myCanvas", [0, 0]);
      }
    }
  },

  mounted() {
    document.title = "云抽奖";
    this.curBtnType = this.btnTypes[0].value;

    this._initSize(); // console.log(`this.curBtnType${this.curBtnType}`);


    this._initData();

    window.addEventListener("resize", this._initSize);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this._initSize);
  },

  methods: {
    _initSize() {
      let screenWidth = document.documentElement.clientWidth || document.body.clientWidth;
      let screenHeight = document.documentElement.clientHeight || document.body.clientHeight;
      let minus = screenWidth > screenHeight ? screenHeight : screenWidth;
      let canvas = this.$refs.myCanvas; // console.log(canvas);
      // console.log(`minus:${minus * 0.8}`);

      canvas.width = minus * 0.85;
      canvas.height = minus * 0.85;
    },

    _initData() {
      __webpack_require__.e(/* import() */ 30).then(__webpack_require__.bind(null, 115)).then(res => {
        this.memberList = res.default;
        this.$nextTick(() => {
          this._initPic();
        });
      });
    },

    _initPic() {
      TagCanvas.Start("myCanvas", "tags", {
        textColour: "#fff",
        textHeight: 10,
        initial: this._normalSpeed(),
        reverse: true,
        shape: "sphere"
      });
    },

    _normalSpeed() {
      return [0.08 * Math.random() + 0.001, -(0.08 * Math.random() + 0.001)];
    },

    _getAward() {
      let result = this.memberList.filter((item, index) => {
        item.score = Math.random() * 100;
        return !this._getResult(item);
      });
      result = result.sort((a, b) => {
        return b.score - a.score;
      }).slice(0, this.curBtnType); // 结果存储storage

      this.curResultList = result;

      this._storeResult(result); // console.log(this.curResultList);

    },

    _storeResult(newResults) {
      let awardStorage = localStorage.getItem("award");
      let results = {};

      if (awardStorage) {
        results = JSON.parse(awardStorage);
      }

      newResults.map(item => {
        item.awardType = this.curBtnType;
        results[`${item.phone}_${item.name}`] = item;
      });
      localStorage.setItem(`award`, JSON.stringify(results));
    },

    _getResult(item) {
      let awardStorage = localStorage.getItem("award");

      if (awardStorage) {
        let results = JSON.parse(awardStorage);
        return results[`${item.phone}_${item.name}`];
      }

      return null;
    },

    getAllResult() {
      let awardStorage = localStorage.getItem("award");

      if (awardStorage) {
        let results = JSON.parse(awardStorage);
        this.curResultList = results;
        this.showAllResult = true;
        this.showResult = true;
      } // console.log(this.curResultList);

    },

    changeBtnType(btn) {
      if (this.isRunning || this.showResult) return;
      this.curBtnType = btn;
    },

    handleAward() {
      if (this.isRunning) {
        // 停止，查看抽奖结果
        let result = this._getAward();

        this.showResult = true;
        TagCanvas.SetSpeed("myCanvas", [0, 0]);
      } else {
        this.curResultList = []; // 开始抽奖

        TagCanvas.SetSpeed("myCanvas", [1, 5]);
      }

      this.isRunning = !this.isRunning;
    },

    reset() {
      localStorage.removeItem("award");
      localStorage.clear();
    },

    testPanel() {
      this.showResult = true;
    }

  }
});
// CONCATENATED MODULE: ./src/cloud/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_cloudvue_type_script_lang_js_ = (cloudvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/cloud/index.vue?vue&type=style&index=0&id=536c26b4&lang=scss&scoped=true&
var cloudvue_type_style_index_0_id_536c26b4_lang_scss_scoped_true_ = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./src/cloud/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_cloudvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "536c26b4",
  null
  
)

/* harmony default export */ var cloud = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

/**
 * Copyright (C) 2010-2015 Graham Breach
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * TagCanvas 2.7
 * For more information, please contact <graham@goat1000.com>
 */
(function () {
  "use strict";

  var i,
      j,
      abs = Math.abs,
      sin = Math.sin,
      cos = Math.cos,
      max = Math.max,
      min = Math.min,
      ceil = Math.ceil,
      sqrt = Math.sqrt,
      pow = Math.pow,
      hexlookup3 = {},
      hexlookup2 = {},
      hexlookup1 = {
    0: "0,",
    1: "17,",
    2: "34,",
    3: "51,",
    4: "68,",
    5: "85,",
    6: "102,",
    7: "119,",
    8: "136,",
    9: "153,",
    a: "170,",
    A: "170,",
    b: "187,",
    B: "187,",
    c: "204,",
    C: "204,",
    d: "221,",
    D: "221,",
    e: "238,",
    E: "238,",
    f: "255,",
    F: "255,"
  },
      Oproto,
      Tproto,
      TCproto,
      Mproto,
      Vproto,
      TSproto,
      TCVproto,
      doc = document,
      ocanvas,
      handlers = {};

  for (i = 0; i < 256; ++i) {
    j = i.toString(16);
    if (i < 16) j = "0" + j;
    hexlookup2[j] = hexlookup2[j.toUpperCase()] = i.toString() + ",";
  }

  function Defined(d) {
    return typeof d != "undefined";
  }

  function IsObject(o) {
    return typeof o == "object" && o != null;
  }

  function Clamp(v, mn, mx) {
    return isNaN(v) ? mx : min(mx, max(mn, v));
  }

  function Nop() {
    return false;
  }

  function TimeNow() {
    return new Date().valueOf();
  }

  function SortList(l, f) {
    var nl = [],
        tl = l.length,
        i;

    for (i = 0; i < tl; ++i) nl.push(l[i]);

    nl.sort(f);
    return nl;
  }

  function Shuffle(a) {
    var i = a.length - 1,
        t,
        p;

    while (i) {
      p = ~~(Math.random() * i);
      t = a[i];
      a[i] = a[p];
      a[p] = t;
      --i;
    }
  }

  function Vector(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  Vproto = Vector.prototype;

  Vproto.length = function () {
    return sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  };

  Vproto.dot = function (v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  };

  Vproto.cross = function (v) {
    var x = this.y * v.z - this.z * v.y,
        y = this.z * v.x - this.x * v.z,
        z = this.x * v.y - this.y * v.x;
    return new Vector(x, y, z);
  };

  Vproto.angle = function (v) {
    var dot = this.dot(v),
        ac;
    if (dot == 0) return Math.PI / 2.0;
    ac = dot / (this.length() * v.length());
    if (ac >= 1) return 0;
    if (ac <= -1) return Math.PI;
    return Math.acos(ac);
  };

  Vproto.unit = function () {
    var l = this.length();
    return new Vector(this.x / l, this.y / l, this.z / l);
  };

  function MakeVector(lg, lt) {
    lt = lt * Math.PI / 180;
    lg = lg * Math.PI / 180;
    var x = sin(lg) * cos(lt),
        y = -sin(lt),
        z = -cos(lg) * cos(lt);
    return new Vector(x, y, z);
  }

  function Matrix(a) {
    this[1] = {
      1: a[0],
      2: a[1],
      3: a[2]
    };
    this[2] = {
      1: a[3],
      2: a[4],
      3: a[5]
    };
    this[3] = {
      1: a[6],
      2: a[7],
      3: a[8]
    };
  }

  Mproto = Matrix.prototype;

  Matrix.Identity = function () {
    return new Matrix([1, 0, 0, 0, 1, 0, 0, 0, 1]);
  };

  Matrix.Rotation = function (angle, u) {
    var sina = sin(angle),
        cosa = cos(angle),
        mcos = 1 - cosa;
    return new Matrix([cosa + pow(u.x, 2) * mcos, u.x * u.y * mcos - u.z * sina, u.x * u.z * mcos + u.y * sina, u.y * u.x * mcos + u.z * sina, cosa + pow(u.y, 2) * mcos, u.y * u.z * mcos - u.x * sina, u.z * u.x * mcos - u.y * sina, u.z * u.y * mcos + u.x * sina, cosa + pow(u.z, 2) * mcos]);
  };

  Mproto.mul = function (m) {
    var a = [],
        i,
        j,
        mmatrix = m.xform ? 1 : 0;

    for (i = 1; i <= 3; ++i) for (j = 1; j <= 3; ++j) {
      if (mmatrix) a.push(this[i][1] * m[1][j] + this[i][2] * m[2][j] + this[i][3] * m[3][j]);else a.push(this[i][j] * m);
    }

    return new Matrix(a);
  };

  Mproto.xform = function (p) {
    var a = {},
        x = p.x,
        y = p.y,
        z = p.z;
    a.x = x * this[1][1] + y * this[2][1] + z * this[3][1];
    a.y = x * this[1][2] + y * this[2][2] + z * this[3][2];
    a.z = x * this[1][3] + y * this[2][3] + z * this[3][3];
    return a;
  };

  function PointsOnSphere(n, xr, yr, zr) {
    var i,
        y,
        r,
        phi,
        pts = [],
        inc = Math.PI * (3 - sqrt(5)),
        off = 2 / n;

    for (i = 0; i < n; ++i) {
      y = i * off - 1 + off / 2;
      r = sqrt(1 - y * y);
      phi = i * inc;
      pts.push([cos(phi) * r * xr, y * yr, sin(phi) * r * zr]);
    }

    return pts;
  }

  function Cylinder(n, o, xr, yr, zr) {
    var phi,
        pts = [],
        inc = Math.PI * (3 - sqrt(5)),
        off = 2 / n,
        i,
        j,
        k,
        l;

    for (i = 0; i < n; ++i) {
      j = i * off - 1 + off / 2;
      phi = i * inc;
      k = cos(phi);
      l = sin(phi);
      pts.push(o ? [j * xr, k * yr, l * zr] : [k * xr, j * yr, l * zr]);
    }

    return pts;
  }

  function Ring(o, n, xr, yr, zr, j) {
    var phi,
        pts = [],
        inc = Math.PI * 2 / n,
        i,
        k,
        l;

    for (i = 0; i < n; ++i) {
      phi = i * inc;
      k = cos(phi);
      l = sin(phi);
      pts.push(o ? [j * xr, k * yr, l * zr] : [k * xr, j * yr, l * zr]);
    }

    return pts;
  }

  function PointsOnCylinderV(n, xr, yr, zr) {
    return Cylinder(n, 0, xr, yr, zr);
  }

  function PointsOnCylinderH(n, xr, yr, zr) {
    return Cylinder(n, 1, xr, yr, zr);
  }

  function PointsOnRingV(n, xr, yr, zr, offset) {
    offset = isNaN(offset) ? 0 : offset * 1;
    return Ring(0, n, xr, yr, zr, offset);
  }

  function PointsOnRingH(n, xr, yr, zr, offset) {
    offset = isNaN(offset) ? 0 : offset * 1;
    return Ring(1, n, xr, yr, zr, offset);
  }

  function CentreImage(t) {
    var i = new Image();

    i.onload = function () {
      var dx = i.width / 2,
          dy = i.height / 2;

      t.centreFunc = function (c, w, h, cx, cy) {
        c.setTransform(1, 0, 0, 1, 0, 0);
        c.globalAlpha = 1;
        c.drawImage(i, cx - dx, cy - dy);
      };
    };

    i.src = t.centreImage;
  }

  function SetAlpha(c, a) {
    var d = c,
        p1,
        p2,
        ae = (a * 1).toPrecision(3) + ")";

    if (c[0] === "#") {
      if (!hexlookup3[c]) if (c.length === 4) hexlookup3[c] = "rgba(" + hexlookup1[c[1]] + hexlookup1[c[2]] + hexlookup1[c[3]];else hexlookup3[c] = "rgba(" + hexlookup2[c.substr(1, 2)] + hexlookup2[c.substr(3, 2)] + hexlookup2[c.substr(5, 2)];
      d = hexlookup3[c] + ae;
    } else if (c.substr(0, 4) === "rgb(" || c.substr(0, 4) === "hsl(") {
      d = c.replace("(", "a(").replace(")", "," + ae);
    } else if (c.substr(0, 5) === "rgba(" || c.substr(0, 5) === "hsla(") {
      p1 = c.lastIndexOf(",") + 1, p2 = c.indexOf(")");
      a *= parseFloat(c.substring(p1, p2));
      d = c.substr(0, p1) + a.toPrecision(3) + ")";
    }

    return d;
  }

  function NewCanvas(w, h) {
    // if using excanvas, give up now
    if (window.G_vmlCanvasManager) return null;
    var c = doc.createElement("canvas");
    c.width = w;
    c.height = h;
    return c;
  } // I think all browsers pass this test now...


  function ShadowAlphaBroken() {
    var cv = NewCanvas(3, 3),
        c,
        i;
    if (!cv) return false;
    c = cv.getContext("2d");
    c.strokeStyle = "#000";
    c.shadowColor = "#fff";
    c.shadowBlur = 3;
    c.globalAlpha = 0;
    c.strokeRect(2, 2, 2, 2);
    c.globalAlpha = 1;
    i = c.getImageData(2, 2, 1, 1);
    cv = null;
    return i.data[0] > 0;
  }

  function SetGradient(c, l, o, g) {
    var gd = c.createLinearGradient(0, 0, l, 0),
        i;

    for (i in g) gd.addColorStop(1 - i, g[i]);

    c.fillStyle = gd;
    c.fillRect(0, o, l, 1);
  }

  function FindGradientColour(tc, p, r) {
    var l = 1024,
        h = 1,
        gl = tc.weightGradient,
        cv,
        c,
        i,
        d;

    if (tc.gCanvas) {
      c = tc.gCanvas.getContext("2d");
      h = tc.gCanvas.height;
    } else {
      if (IsObject(gl[0])) h = gl.length;else gl = [gl];
      tc.gCanvas = cv = NewCanvas(l, h);
      if (!cv) return null;
      c = cv.getContext("2d");

      for (i = 0; i < h; ++i) SetGradient(c, l, i, gl[i]);
    }

    r = max(min(r || 0, h - 1), 0);
    d = c.getImageData(~~((l - 1) * p), r, 1, 1).data;
    return "rgba(" + d[0] + "," + d[1] + "," + d[2] + "," + d[3] / 255 + ")";
  }

  function TextSet(ctxt, font, colour, strings, padx, pady, shadowColour, shadowBlur, shadowOffsets, maxWidth, widths, align) {
    var xo = padx + (shadowBlur || 0) + (shadowOffsets.length && shadowOffsets[0] < 0 ? abs(shadowOffsets[0]) : 0),
        yo = pady + (shadowBlur || 0) + (shadowOffsets.length && shadowOffsets[1] < 0 ? abs(shadowOffsets[1]) : 0),
        i,
        xc;
    ctxt.font = font;
    ctxt.textBaseline = "top";
    ctxt.fillStyle = colour;
    shadowColour && (ctxt.shadowColor = shadowColour);
    shadowBlur && (ctxt.shadowBlur = shadowBlur);
    shadowOffsets.length && (ctxt.shadowOffsetX = shadowOffsets[0], ctxt.shadowOffsetY = shadowOffsets[1]);

    for (i = 0; i < strings.length; ++i) {
      xc = 0;

      if (widths) {
        if ("right" == align) {
          xc = maxWidth - widths[i];
        } else if ("centre" == align) {
          xc = (maxWidth - widths[i]) / 2;
        }
      }

      ctxt.fillText(strings[i], xo + xc, yo);
      yo += parseInt(font);
    }
  }

  function RRect(c, x, y, w, h, r, s) {
    if (r) {
      c.beginPath();
      c.moveTo(x, y + h - r);
      c.arcTo(x, y, x + r, y, r);
      c.arcTo(x + w, y, x + w, y + r, r);
      c.arcTo(x + w, y + h, x + w - r, y + h, r);
      c.arcTo(x, y + h, x, y + h - r, r);
      c.closePath();
      c[s ? "stroke" : "fill"]();
    } else {
      c[s ? "strokeRect" : "fillRect"](x, y, w, h);
    }
  }

  function TextCanvas(strings, font, w, h, maxWidth, stringWidths, align, valign, scale) {
    this.strings = strings;
    this.font = font;
    this.width = w;
    this.height = h;
    this.maxWidth = maxWidth;
    this.stringWidths = stringWidths;
    this.align = align;
    this.valign = valign;
    this.scale = scale;
  }

  TCVproto = TextCanvas.prototype;

  TCVproto.SetImage = function (image, w, h, position, padding, align, valign, scale) {
    this.image = image;
    this.iwidth = w * this.scale;
    this.iheight = h * this.scale;
    this.ipos = position;
    this.ipad = padding * this.scale;
    this.iscale = scale;
    this.ialign = align;
    this.ivalign = valign;
  };

  TCVproto.Align = function (size, space, a) {
    var pos = 0;
    if (a == "right" || a == "bottom") pos = space - size;else if (a != "left" && a != "top") pos = (space - size) / 2;
    return pos;
  };

  TCVproto.Create = function (colour, bgColour, bgOutline, bgOutlineThickness, shadowColour, shadowBlur, shadowOffsets, padding, radius) {
    var cv,
        cw,
        ch,
        c,
        x1,
        x2,
        y1,
        y2,
        offx,
        offy,
        ix,
        iy,
        iw,
        ih,
        sox = abs(shadowOffsets[0]),
        soy = abs(shadowOffsets[1]),
        shadowcv,
        shadowc;
    padding = max(padding, sox + shadowBlur, soy + shadowBlur);
    x1 = 2 * (padding + bgOutlineThickness);
    y1 = 2 * (padding + bgOutlineThickness);
    cw = this.width + x1;
    ch = this.height + y1;
    offx = offy = padding + bgOutlineThickness;

    if (this.image) {
      ix = iy = padding + bgOutlineThickness;
      iw = this.iwidth;
      ih = this.iheight;

      if (this.ipos == "top" || this.ipos == "bottom") {
        if (iw < this.width) ix += this.Align(iw, this.width, this.ialign);else offx += this.Align(this.width, iw, this.align);
        if (this.ipos == "top") offy += ih + this.ipad;else iy += this.height + this.ipad;
        cw = max(cw, iw + x1);
        ch += ih + this.ipad;
      } else {
        if (ih < this.height) iy += this.Align(ih, this.height, this.ivalign);else offy += this.Align(this.height, ih, this.valign);
        if (this.ipos == "right") ix += this.width + this.ipad;else offx += iw + this.ipad;
        cw += iw + this.ipad;
        ch = max(ch, ih + y1);
      }
    }

    cv = NewCanvas(cw, ch);
    if (!cv) return null;
    x1 = y1 = bgOutlineThickness / 2;
    x2 = cw - bgOutlineThickness;
    y2 = ch - bgOutlineThickness;
    c = cv.getContext("2d");

    if (bgColour) {
      c.fillStyle = bgColour;
      RRect(c, x1, y1, x2, y2, radius);
    }

    if (bgOutlineThickness) {
      c.strokeStyle = bgOutline;
      c.lineWidth = bgOutlineThickness;
      RRect(c, x1, y1, x2, y2, radius, true);
    }

    if (shadowBlur || sox || soy) {
      // use a transparent canvas to draw on
      shadowcv = NewCanvas(cw, ch);

      if (shadowcv) {
        shadowc = c;
        c = shadowcv.getContext("2d");
      }
    } // don't use TextSet shadow support because it adds space for shadow


    TextSet(c, this.font, colour, this.strings, offx, offy, 0, 0, [], this.maxWidth, this.stringWidths, this.align);
    if (this.image) c.drawImage(this.image, ix, iy, iw, ih);

    if (shadowc) {
      // draw the text and image with the added shadow
      c = shadowc;
      shadowColour && (c.shadowColor = shadowColour);
      shadowBlur && (c.shadowBlur = shadowBlur);
      c.shadowOffsetX = shadowOffsets[0];
      c.shadowOffsetY = shadowOffsets[1];
      c.drawImage(shadowcv, 0, 0);
    }

    return cv;
  };

  function ExpandImage(i, w, h) {
    var cv = NewCanvas(w, h),
        c;
    if (!cv) return null;
    c = cv.getContext("2d");
    c.drawImage(i, (w - i.width) / 2, (h - i.height) / 2);
    return cv;
  }

  function ScaleImage(i, w, h) {
    var cv = NewCanvas(w, h),
        c;
    if (!cv) return null;
    c = cv.getContext("2d");
    c.drawImage(i, 0, 0, w, h);
    return cv;
  }

  function AddBackgroundToImage(i, w, h, scale, colour, othickness, ocolour, padding, radius, ofill) {
    var cw = w + (2 * padding + othickness) * scale,
        ch = h + (2 * padding + othickness) * scale,
        cv = NewCanvas(cw, ch),
        c,
        x1,
        y1,
        x2,
        y2,
        ocanvas,
        cc;
    if (!cv) return null;
    othickness *= scale;
    radius *= scale;
    x1 = y1 = othickness / 2;
    x2 = cw - othickness;
    y2 = ch - othickness;
    padding = padding * scale + x1; // add space for outline

    c = cv.getContext("2d");

    if (colour) {
      c.fillStyle = colour;
      RRect(c, x1, y1, x2, y2, radius);
    }

    if (othickness) {
      c.strokeStyle = ocolour;
      c.lineWidth = othickness;
      RRect(c, x1, y1, x2, y2, radius, true);
    }

    if (ofill) {
      // use compositing to colour in the image and border
      ocanvas = NewCanvas(cw, ch);
      cc = ocanvas.getContext("2d");
      cc.drawImage(i, padding, padding, w, h);
      cc.globalCompositeOperation = "source-in";
      cc.fillStyle = ocolour;
      cc.fillRect(0, 0, cw, ch);
      cc.globalCompositeOperation = "destination-over";
      cc.drawImage(cv, 0, 0);
      cc.globalCompositeOperation = "source-over";
      c.drawImage(ocanvas, 0, 0);
    } else {
      c.drawImage(i, padding, padding, i.width, i.height);
    }

    return {
      image: cv,
      width: cw / scale,
      height: ch / scale
    };
  }
  /**
   * Creates a new canvas containing the image and its shadow
   * Returns an object containing the image and its dimensions at z=0
   */


  function AddShadowToImage(i, w, h, scale, sc, sb, so) {
    var sw = abs(so[0]),
        sh = abs(so[1]),
        cw = w + (sw > sb ? sw + sb : sb * 2) * scale,
        ch = h + (sh > sb ? sh + sb : sb * 2) * scale,
        xo = scale * ((sb || 0) + (so[0] < 0 ? sw : 0)),
        yo = scale * ((sb || 0) + (so[1] < 0 ? sh : 0)),
        cv,
        c;
    cv = NewCanvas(cw, ch);
    if (!cv) return null;
    c = cv.getContext("2d");
    sc && (c.shadowColor = sc);
    sb && (c.shadowBlur = sb * scale);
    so && (c.shadowOffsetX = so[0] * scale, c.shadowOffsetY = so[1] * scale);
    c.drawImage(i, xo, yo, w, h);
    return {
      image: cv,
      width: cw / scale,
      height: ch / scale
    };
  }

  function FindTextBoundingBox(s, f, ht) {
    var w = parseInt(s.toString().length * ht),
        h = parseInt(ht * 2 * s.length),
        cv = NewCanvas(w, h),
        c,
        idata,
        w1,
        h1,
        x,
        y,
        i,
        ex;
    if (!cv) return null;
    c = cv.getContext("2d");
    c.fillStyle = "#000";
    c.fillRect(0, 0, w, h);
    TextSet(c, ht + "px " + f, "#fff", s, 0, 0, 0, 0, [], "centre");
    idata = c.getImageData(0, 0, w, h);
    w1 = idata.width;
    h1 = idata.height;
    ex = {
      min: {
        x: w1,
        y: h1
      },
      max: {
        x: -1,
        y: -1
      }
    };

    for (y = 0; y < h1; ++y) {
      for (x = 0; x < w1; ++x) {
        i = (y * w1 + x) * 4;

        if (idata.data[i + 1] > 0) {
          if (x < ex.min.x) ex.min.x = x;
          if (x > ex.max.x) ex.max.x = x;
          if (y < ex.min.y) ex.min.y = y;
          if (y > ex.max.y) ex.max.y = y;
        }
      }
    } // device pixels might not be css pixels


    if (w1 != w) {
      ex.min.x *= w / w1;
      ex.max.x *= w / w1;
    }

    if (h1 != h) {
      ex.min.y *= w / h1;
      ex.max.y *= w / h1;
    }

    cv = null;
    return ex;
  }

  function FixFont(f) {
    return "'" + f.replace(/(\'|\")/g, "").replace(/\s*,\s*/g, "', '") + "'";
  }

  function AddHandler(h, f, e) {
    e = e || doc;
    if (e.addEventListener) e.addEventListener(h, f, false);else e.attachEvent("on" + h, f);
  }

  function RemoveHandler(h, f, e) {
    e = e || doc;
    if (e.removeEventListener) e.removeEventListener(h, f);else e.detachEvent("on" + h, f);
  }

  function AddImage(i, o, t, tc) {
    var s = tc.imageScale,
        mscale,
        ic,
        bc,
        oc,
        iw,
        ih; // image not loaded, wait for image onload

    if (!o.complete) return AddHandler("load", function () {
      AddImage(i, o, t, tc);
    }, o);
    if (!i.complete) return AddHandler("load", function () {
      AddImage(i, o, t, tc);
    }, i); // Yes, this does look like nonsense, but it makes sure that both the
    // width and height are actually set and not just calculated. This is
    // required to keep proportional sizes when the images are hidden, so
    // the images can be used again for another cloud.

    o.width = o.width;
    o.height = o.height;

    if (s) {
      i.width = o.width * s;
      i.height = o.height * s;
    } // the standard width of the image, with imageScale applied


    t.iw = i.width;
    t.ih = i.height;

    if (tc.txtOpt) {
      ic = i;
      mscale = tc.zoomMax * tc.txtScale;
      iw = t.iw * mscale;
      ih = t.ih * mscale;

      if (iw < o.naturalWidth || ih < o.naturalHeight) {
        ic = ScaleImage(i, iw, ih);
        if (ic) t.fimage = ic;
      } else {
        iw = t.iw;
        ih = t.ih;
        mscale = 1;
      }

      if (!t.HasText()) {
        if (tc.shadow) {
          ic = AddShadowToImage(t.image, iw, ih, mscale, tc.shadow, tc.shadowBlur, tc.shadowOffset);

          if (ic) {
            t.fimage = ic.image;
            t.w = ic.width;
            t.h = ic.height;
          }
        }

        if (tc.bgColour || tc.bgOutlineThickness) {
          bc = tc.bgColour == "tag" ? GetProperty(t.a, "background-color") : tc.bgColour;
          oc = tc.bgOutline == "tag" ? GetProperty(t.a, "color") : tc.bgOutline || tc.textColour;
          iw = t.fimage.width;
          ih = t.fimage.height;

          if (tc.outlineMethod == "colour") {
            // create the outline version first, using the current image state
            ic = AddBackgroundToImage(t.fimage, iw, ih, mscale, bc, tc.bgOutlineThickness, tc.outlineColour, tc.padding, tc.bgRadius, 1);
            if (ic) t.oimage = ic.image;
          }

          ic = AddBackgroundToImage(t.fimage, iw, ih, mscale, bc, tc.bgOutlineThickness, oc, tc.padding, tc.bgRadius);

          if (ic) {
            t.fimage = ic.image;
            t.w = ic.width;
            t.h = ic.height;
          }
        }

        if (tc.outlineMethod == "size") {
          if (tc.outlineIncrease > 0) {
            t.iw += 2 * tc.outlineIncrease;
            t.ih += 2 * tc.outlineIncrease;
            iw = mscale * t.iw;
            ih = mscale * t.ih;
            ic = ScaleImage(t.fimage, iw, ih);
            t.oimage = ic;
            t.fimage = ExpandImage(t.fimage, t.oimage.width, t.oimage.height);
          } else {
            iw = mscale * (t.iw + 2 * tc.outlineIncrease);
            ih = mscale * (t.ih + 2 * tc.outlineIncrease);
            ic = ScaleImage(t.fimage, iw, ih);
            t.oimage = ExpandImage(ic, t.fimage.width, t.fimage.height);
          }
        }
      }
    }

    t.Init();
  }

  function GetProperty(e, p) {
    var dv = doc.defaultView,
        pc = p.replace(/\-([a-z])/g, function (a) {
      return a.charAt(1).toUpperCase();
    });
    return dv && dv.getComputedStyle && dv.getComputedStyle(e, null).getPropertyValue(p) || e.currentStyle && e.currentStyle[pc];
  }

  function FindWeight(a, wFrom, tHeight) {
    var w = 1,
        p;

    if (wFrom) {
      w = 1 * (a.getAttribute(wFrom) || tHeight);
    } else if (p = GetProperty(a, "font-size")) {
      w = p.indexOf("px") > -1 && p.replace("px", "") * 1 || p.indexOf("pt") > -1 && p.replace("pt", "") * 1.25 || p * 3.3;
    }

    return w;
  }

  function EventToCanvasId(e) {
    return e.target && Defined(e.target.id) ? e.target.id : e.srcElement.parentNode.id;
  }

  function EventXY(e, c) {
    var xy,
        p,
        xmul = parseInt(GetProperty(c, "width")) / c.width,
        ymul = parseInt(GetProperty(c, "height")) / c.height;

    if (Defined(e.offsetX)) {
      xy = {
        x: e.offsetX,
        y: e.offsetY
      };
    } else {
      p = AbsPos(c.id);
      if (Defined(e.changedTouches)) e = e.changedTouches[0];
      if (e.pageX) xy = {
        x: e.pageX - p.x,
        y: e.pageY - p.y
      };
    }

    if (xy && xmul && ymul) {
      xy.x /= xmul;
      xy.y /= ymul;
    }

    return xy;
  }

  function MouseOut(e) {
    var cv = e.target || e.fromElement.parentNode,
        tc = TagCanvas.tc[cv.id];

    if (tc) {
      tc.mx = tc.my = -1;
      tc.UnFreeze();
      tc.EndDrag();
    }
  }

  function MouseMove(e) {
    return;
    var i,
        t = TagCanvas,
        tc,
        p,
        tg = EventToCanvasId(e);

    for (i in t.tc) {
      tc = t.tc[i];

      if (tc.tttimer) {
        clearTimeout(tc.tttimer);
        tc.tttimer = null;
      }
    }

    if (tg && t.tc[tg]) {
      tc = t.tc[tg];

      if (p = EventXY(e, tc.canvas)) {
        tc.mx = p.x;
        tc.my = p.y;
        tc.Drag(e, p);
      }

      tc.drawn = 0;
    }
  }

  function MouseDown(e) {
    var t = TagCanvas,
        cb = doc.addEventListener ? 0 : 1,
        tg = EventToCanvasId(e);

    if (tg && e.button == cb && t.tc[tg]) {
      t.tc[tg].BeginDrag(e);
    }
  }

  function MouseUp(e) {
    var t = TagCanvas,
        cb = doc.addEventListener ? 0 : 1,
        tg = EventToCanvasId(e),
        tc;

    if (tg && e.button == cb && t.tc[tg]) {
      tc = t.tc[tg];
      MouseMove(e);
      if (!tc.EndDrag() && !tc.touchState) tc.Clicked(e);
    }
  }

  function TouchDown(e) {
    var tg = EventToCanvasId(e),
        tc = tg && TagCanvas.tc[tg],
        p;

    if (tc && e.changedTouches) {
      if (e.touches.length == 1 && tc.touchState == 0) {
        tc.touchState = 1;
        tc.BeginDrag(e);

        if (p = EventXY(e, tc.canvas)) {
          tc.mx = p.x;
          tc.my = p.y;
          tc.drawn = 0;
        }
      } else if (e.targetTouches.length == 2 && tc.pinchZoom) {
        tc.touchState = 3;
        tc.EndDrag();
        tc.BeginPinch(e);
      } else {
        tc.EndDrag();
        tc.EndPinch();
        tc.touchState = 0;
      }
    }
  }

  function TouchUp(e) {
    var tg = EventToCanvasId(e),
        tc = tg && TagCanvas.tc[tg];

    if (tc && e.changedTouches) {
      switch (tc.touchState) {
        case 1:
          tc.Draw();
          tc.Clicked();
          break;

        case 2:
          tc.EndDrag();
          break;

        case 3:
          tc.EndPinch();
      }

      tc.touchState = 0;
    }
  }

  function TouchMove(e) {
    var i,
        t = TagCanvas,
        tc,
        p,
        tg = EventToCanvasId(e);

    for (i in t.tc) {
      tc = t.tc[i];

      if (tc.tttimer) {
        clearTimeout(tc.tttimer);
        tc.tttimer = null;
      }
    }

    tc = tg && t.tc[tg];

    if (tc && e.changedTouches && tc.touchState) {
      switch (tc.touchState) {
        case 1:
        case 2:
          if (p = EventXY(e, tc.canvas)) {
            tc.mx = p.x;
            tc.my = p.y;
            if (tc.Drag(e, p)) tc.touchState = 2;
          }

          break;

        case 3:
          tc.Pinch(e);
      }

      tc.drawn = 0;
    }
  }

  function MouseWheel(e) {
    var t = TagCanvas,
        tg = EventToCanvasId(e);

    if (tg && t.tc[tg]) {
      e.cancelBubble = true;
      e.returnValue = false;
      e.preventDefault && e.preventDefault();
      t.tc[tg].Wheel((e.wheelDelta || e.detail) > 0);
    }
  }

  function DrawCanvas() {
    DrawCanvasRAF(TimeNow());
  }

  function DrawCanvasRAF(t) {
    var tc = TagCanvas.tc,
        i;
    TagCanvas.NextFrame(TagCanvas.interval);
    t = t || TimeNow();

    for (i in tc) tc[i].Draw(t);
  }

  function AbsPos(id) {
    var e = doc.getElementById(id),
        r = e.getBoundingClientRect(),
        dd = doc.documentElement,
        b = doc.body,
        w = window,
        xs = w.pageXOffset || dd.scrollLeft,
        ys = w.pageYOffset || dd.scrollTop,
        xo = dd.clientLeft || b.clientLeft,
        yo = dd.clientTop || b.clientTop;
    return {
      x: r.left + xs - xo,
      y: r.top + ys - yo
    };
  }

  function Project(tc, p1, sx, sy) {
    var m = tc.radius * tc.z1 / (tc.z1 + tc.z2 + p1.z);
    return {
      x: p1.x * m * sx,
      y: p1.y * m * sy,
      z: p1.z,
      w: (tc.z1 - p1.z) / tc.z2
    };
  }
  /**
   * @constructor
   * for recursively splitting tag contents on <br> tags
   */


  function TextSplitter(e) {
    this.e = e;
    this.br = 0;
    this.line = [];
    this.text = [];
    this.original = e.innerText || e.textContent;
  }

  TSproto = TextSplitter.prototype;

  TSproto.Empty = function () {
    for (var i = 0; i < this.text.length; ++i) if (this.text[i].length) return false;

    return true;
  };

  TSproto.Lines = function (e) {
    var r = e ? 1 : 0,
        cn,
        cl,
        i;
    e = e || this.e;
    cn = e.childNodes;
    cl = cn.length;

    for (i = 0; i < cl; ++i) {
      if (cn[i].nodeName == "BR") {
        this.text.push(this.line.join(" "));
        this.br = 1;
      } else if (cn[i].nodeType == 3) {
        if (this.br) {
          this.line = [cn[i].nodeValue];
          this.br = 0;
        } else {
          this.line.push(cn[i].nodeValue);
        }
      } else {
        this.Lines(cn[i]);
      }
    }

    r || this.br || this.text.push(this.line.join(" "));
    return this.text;
  };

  TSproto.SplitWidth = function (w, c, f, h) {
    var i,
        j,
        words,
        text = [];
    c.font = h + "px " + f;

    for (i = 0; i < this.text.length; ++i) {
      words = this.text[i].split(/\s+/);
      this.line = [words[0]];

      for (j = 1; j < words.length; ++j) {
        if (c.measureText(this.line.join(" ") + " " + words[j]).width > w) {
          text.push(this.line.join(" "));
          this.line = [words[j]];
        } else {
          this.line.push(words[j]);
        }
      }

      text.push(this.line.join(" "));
    }

    return this.text = text;
  };
  /**
   * @constructor
   */


  function Outline(tc, t) {
    this.ts = TimeNow();
    this.tc = tc;
    this.tag = t;
    this.x = this.y = this.w = this.h = this.sc = 1;
    this.z = 0;
    this.Draw = tc.pulsateTo < 1 && tc.outlineMethod != "colour" ? this.DrawPulsate : this.DrawSimple;
    this.radius = tc.outlineRadius | 0;
    this.SetMethod(tc.outlineMethod);
  }

  Oproto = Outline.prototype;

  Oproto.SetMethod = function (om) {
    var methods = {
      block: ["PreDraw", "DrawBlock"],
      colour: ["PreDraw", "DrawColour"],
      outline: ["PostDraw", "DrawOutline"],
      classic: ["LastDraw", "DrawOutline"],
      size: ["PreDraw", "DrawColour"],
      none: ["LastDraw"]
    },
        funcs = methods[om] || methods.outline;

    if (om == "none") {
      this.Draw = function () {
        return 1;
      };
    } else {
      this.drawFunc = this[funcs[1]];
    }

    this[funcs[0]] = this.Draw;
  };

  Oproto.Update = function (x, y, w, h, sc, z, xo, yo) {
    var o = this.tc.outlineOffset,
        o2 = 2 * o;
    this.x = sc * x + xo - o;
    this.y = sc * y + yo - o;
    this.w = sc * w + o2;
    this.h = sc * h + o2;
    this.sc = sc; // used to determine frontmost

    this.z = z;
  };

  Oproto.DrawOutline = function (c, x, y, w, h, colour) {
    c.strokeStyle = colour;
    RRect(c, x, y, w, h, this.radius, true);
  };

  Oproto.DrawColour = function (c, x, y, w, h, colour, tag, x1, y1) {
    if (tag.oimage) {
      tag.alpha = 1;
      tag.Draw(c, x1, y1, tag.oimage);
      return 1;
    }

    return this[tag.image ? "DrawColourImage" : "DrawColourText"](c, x, y, w, h, colour, tag, x1, y1);
  };

  Oproto.DrawColourText = function (c, x, y, w, h, colour, tag, x1, y1) {
    var normal = tag.colour;
    tag.colour = colour;
    tag.alpha = 1;
    tag.Draw(c, x1, y1);
    tag.colour = normal;
    return 1;
  };

  Oproto.DrawColourImage = function (c, x, y, w, h, colour, tag, x1, y1) {
    var ccanvas = c.canvas,
        fx = ~~max(x, 0),
        fy = ~~max(y, 0),
        fw = min(ccanvas.width - fx, w) + 0.5 | 0,
        fh = min(ccanvas.height - fy, h) + 0.5 | 0,
        cc;
    if (ocanvas) ocanvas.width = fw, ocanvas.height = fh;else ocanvas = NewCanvas(fw, fh);
    if (!ocanvas) return this.SetMethod("outline"); // if using IE and images, give up!

    cc = ocanvas.getContext("2d");
    cc.drawImage(ccanvas, fx, fy, fw, fh, 0, 0, fw, fh);
    c.clearRect(fx, fy, fw, fh);
    tag.alpha = 1;
    tag.Draw(c, x1, y1);
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.save();
    c.beginPath();
    c.rect(fx, fy, fw, fh);
    c.clip();
    c.globalCompositeOperation = "source-in";
    c.fillStyle = colour;
    c.fillRect(fx, fy, fw, fh);
    c.restore();
    c.globalCompositeOperation = "destination-over";
    c.drawImage(ocanvas, 0, 0, fw, fh, fx, fy, fw, fh);
    c.globalCompositeOperation = "source-over";
    return 1;
  };

  Oproto.DrawBlock = function (c, x, y, w, h, colour) {
    c.fillStyle = colour;
    RRect(c, x, y, w, h, this.radius);
  };

  Oproto.DrawSimple = function (c, tag, x1, y1) {
    var t = this.tc;
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.strokeStyle = t.outlineColour;
    c.lineWidth = t.outlineThickness;
    c.shadowBlur = c.shadowOffsetX = c.shadowOffsetY = 0;
    c.globalAlpha = 1;
    return this.drawFunc(c, this.x, this.y, this.w, this.h, t.outlineColour, tag, x1, y1);
  };

  Oproto.DrawPulsate = function (c, tag, x1, y1) {
    var diff = TimeNow() - this.ts,
        t = this.tc;
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.strokeStyle = t.outlineColour;
    c.lineWidth = t.outlineThickness;
    c.shadowBlur = c.shadowOffsetX = c.shadowOffsetY = 0;
    c.globalAlpha = t.pulsateTo + (1 - t.pulsateTo) * (0.5 + cos(2 * Math.PI * diff / (1000 * t.pulsateTime)) / 2);
    return this.drawFunc(c, this.x, this.y, this.w, this.h, t.outlineColour, tag, x1, y1);
  };

  Oproto.Active = function (c, x, y) {
    return x >= this.x && y >= this.y && x <= this.x + this.w && y <= this.y + this.h;
  };

  Oproto.PreDraw = Oproto.PostDraw = Oproto.LastDraw = Nop;
  /**
   * @constructor
   */

  function Tag(tc, text, a, v, w, h, col, bcol, bradius, boutline, bothickness, font, padding, original) {
    this.tc = tc;
    this.image = null;
    this.text = text;
    this.text_original = original;
    this.line_widths = [];
    this.title = a.title || null;
    this.a = a;
    this.position = new Vector(v[0], v[1], v[2]);
    this.x = this.y = this.z = 0;
    this.w = w;
    this.h = h;
    this.colour = col || tc.textColour;
    this.bgColour = bcol || tc.bgColour;
    this.bgRadius = bradius | 0;
    this.bgOutline = boutline || this.colour;
    this.bgOutlineThickness = bothickness | 0;
    this.textFont = font || tc.textFont;
    this.padding = padding | 0;
    this.sc = this.alpha = 1;
    this.weighted = !tc.weight;
  }

  Tproto = Tag.prototype;

  Tproto.Init = function (e) {
    var tc = this.tc;
    this.outline = new Outline(tc, this);
    this.textHeight = tc.textHeight;

    if (this.HasText()) {
      this.Measure(tc.ctxt, tc);
    } else {
      this.w = this.iw;
      this.h = this.ih;
    }

    this.SetShadowColour = tc.shadowAlpha ? this.SetShadowColourAlpha : this.SetShadowColourFixed;
    this.SetDraw(tc);
  };

  Tproto.Draw = Nop;

  Tproto.HasText = function () {
    return this.text && this.text[0].length > 0;
  };

  Tproto.EqualTo = function (e) {
    var i = e.getElementsByTagName("img");
    if (this.a.href != e.href) return 0;
    if (i.length) return this.image.src == i[0].src;
    return (e.innerText || e.textContent) == this.text_original;
  };

  Tproto.SetImage = function (i) {
    this.image = this.fimage = i;
  };

  Tproto.SetDraw = function (t) {
    this.Draw = this.fimage ? t.ie > 7 ? this.DrawImageIE : this.DrawImage : this.DrawText;
    t.noSelect && (this.CheckActive = Nop);
  };

  Tproto.MeasureText = function (c) {
    var i,
        l = this.text.length,
        w = 0,
        wl;

    for (i = 0; i < l; ++i) {
      this.line_widths[i] = wl = c.measureText(this.text[i]).width;
      w = max(w, wl);
    }

    return w;
  };

  Tproto.Measure = function (c, t) {
    var extents = FindTextBoundingBox(this.text, this.textFont, this.textHeight),
        s,
        th,
        f,
        soff,
        cw,
        twidth,
        theight,
        img,
        tcv; // add the gap at the top to the height to make equal gap at bottom

    theight = extents ? extents.max.y + extents.min.y : this.textHeight;
    c.font = this.font = this.textHeight + "px " + this.textFont;
    twidth = this.MeasureText(c);

    if (t.txtOpt) {
      s = t.txtScale;
      th = s * this.textHeight;
      f = th + "px " + this.textFont;
      soff = [s * t.shadowOffset[0], s * t.shadowOffset[1]];
      c.font = f;
      cw = this.MeasureText(c);
      tcv = new TextCanvas(this.text, f, cw + s, s * theight + s, cw, this.line_widths, t.textAlign, t.textVAlign, s);
      if (this.image) tcv.SetImage(this.image, this.iw, this.ih, t.imagePosition, t.imagePadding, t.imageAlign, t.imageVAlign, t.imageScale);
      img = tcv.Create(this.colour, this.bgColour, this.bgOutline, s * this.bgOutlineThickness, t.shadow, s * t.shadowBlur, soff, s * this.padding, s * this.bgRadius); // add outline image using highlight colour

      if (t.outlineMethod == "colour") {
        this.oimage = tcv.Create(t.outlineColour, this.bgColour, t.outlineColour, s * this.bgOutlineThickness, t.shadow, s * t.shadowBlur, soff, s * this.padding, s * this.bgRadius);
      } else if (t.outlineMethod == "size") {
        extents = FindTextBoundingBox(this.text, this.textFont, this.textHeight + t.outlineIncrease);
        th = extents.max.y + extents.min.y;
        f = s * (this.textHeight + t.outlineIncrease) + "px " + this.textFont;
        c.font = f;
        cw = this.MeasureText(c);
        tcv = new TextCanvas(this.text, f, cw + s, s * th + s, cw, this.line_widths, t.textAlign, t.textVAlign, s);
        if (this.image) tcv.SetImage(this.image, this.iw + t.outlineIncrease, this.ih + t.outlineIncrease, t.imagePosition, t.imagePadding, t.imageAlign, t.imageVAlign, t.imageScale);
        this.oimage = tcv.Create(this.colour, this.bgColour, this.bgOutline, s * this.bgOutlineThickness, t.shadow, s * t.shadowBlur, soff, s * this.padding, s * this.bgRadius);
        if (t.outlineIncrease > 0) img = ExpandImage(img, this.oimage.width, this.oimage.height);else this.oimage = ExpandImage(this.oimage, img.width, img.height);
      }

      if (img) {
        this.fimage = img;
        twidth = this.fimage.width / s;
        theight = this.fimage.height / s;
      }

      this.SetDraw(t);
      t.txtOpt = !!this.fimage;
    }

    this.h = theight;
    this.w = twidth;
  };

  Tproto.SetFont = function (f, c, bc, boc) {
    this.textFont = f;
    this.colour = c;
    this.bgColour = bc;
    this.bgOutline = boc;
    this.Measure(this.tc.ctxt, this.tc);
  };

  Tproto.SetWeight = function (w) {
    var tc = this.tc,
        modes = tc.weightMode.split(/[, ]/),
        m,
        s,
        wl = w.length;
    if (!this.HasText()) return;
    this.weighted = true;

    for (s = 0; s < wl; ++s) {
      m = modes[s] || "size";

      if ("both" == m) {
        this.Weight(w[s], tc.ctxt, tc, "size", tc.min_weight[s], tc.max_weight[s], s);
        this.Weight(w[s], tc.ctxt, tc, "colour", tc.min_weight[s], tc.max_weight[s], s);
      } else {
        this.Weight(w[s], tc.ctxt, tc, m, tc.min_weight[s], tc.max_weight[s], s);
      }
    }

    this.Measure(tc.ctxt, tc);
  };

  Tproto.Weight = function (w, c, t, m, wmin, wmax, wnum) {
    w = isNaN(w) ? 1 : w;
    var nweight = (w - wmin) / (wmax - wmin);
    if ("colour" == m) this.colour = FindGradientColour(t, nweight, wnum);else if ("bgcolour" == m) this.bgColour = FindGradientColour(t, nweight, wnum);else if ("bgoutline" == m) this.bgOutline = FindGradientColour(t, nweight, wnum);else if ("size" == m) {
      if (t.weightSizeMin > 0 && t.weightSizeMax > t.weightSizeMin) {
        this.textHeight = t.weightSize * (t.weightSizeMin + (t.weightSizeMax - t.weightSizeMin) * nweight);
      } else {
        // min textHeight of 1
        this.textHeight = max(1, w * t.weightSize);
      }
    }
  };

  Tproto.SetShadowColourFixed = function (c, s, a) {
    c.shadowColor = s;
  };

  Tproto.SetShadowColourAlpha = function (c, s, a) {
    c.shadowColor = SetAlpha(s, a);
  };

  Tproto.DrawText = function (c, xoff, yoff) {
    var t = this.tc,
        x = this.x,
        y = this.y,
        s = this.sc,
        i,
        xl;
    c.globalAlpha = this.alpha;
    c.fillStyle = this.colour;
    t.shadow && this.SetShadowColour(c, t.shadow, this.alpha);
    c.font = this.font;
    x += xoff / s;
    y += yoff / s - this.h / 2;

    for (i = 0; i < this.text.length; ++i) {
      xl = x;

      if ("right" == t.textAlign) {
        xl += this.w / 2 - this.line_widths[i];
      } else if ("centre" == t.textAlign) {
        xl -= this.line_widths[i] / 2;
      } else {
        xl -= this.w / 2;
      }

      c.setTransform(s, 0, 0, s, s * xl, s * y);
      c.fillText(this.text[i], 0, 0);
      y += this.textHeight;
    }
  };

  Tproto.DrawImage = function (c, xoff, yoff, im) {
    var x = this.x,
        y = this.y,
        s = this.sc,
        i = im || this.fimage,
        w = this.w,
        h = this.h,
        a = this.alpha,
        shadow = this.shadow;
    c.globalAlpha = a;
    shadow && this.SetShadowColour(c, shadow, a);
    x += xoff / s - w / 2;
    y += yoff / s - h / 2;
    c.setTransform(s, 0, 0, s, s * x, s * y);
    c.drawImage(i, 0, 0, w, h);
  };

  Tproto.DrawImageIE = function (c, xoff, yoff) {
    var i = this.fimage,
        s = this.sc,
        w = i.width = this.w * s,
        h = i.height = this.h * s,
        x = this.x * s + xoff - w / 2,
        y = this.y * s + yoff - h / 2;
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.globalAlpha = this.alpha;
    c.drawImage(i, x, y);
  };

  Tproto.Calc = function (m, a) {
    var pp,
        t = this.tc,
        mnb = t.minBrightness,
        mxb = t.maxBrightness,
        r = t.max_radius;
    pp = m.xform(this.position);
    this.xformed = pp;
    pp = Project(t, pp, t.stretchX, t.stretchY);
    this.x = pp.x;
    this.y = pp.y;
    this.z = pp.z;
    this.sc = pp.w;
    this.alpha = a * Clamp(mnb + (mxb - mnb) * (r - this.z) / (2 * r), 0, 1);
  };

  Tproto.UpdateActive = function (c, xoff, yoff) {
    var o = this.outline,
        w = this.w,
        h = this.h,
        x = this.x - w / 2,
        y = this.y - h / 2;
    o.Update(x, y, w, h, this.sc, this.z, xoff, yoff);
    return o;
  };

  Tproto.CheckActive = function (c, xoff, yoff) {
    var t = this.tc,
        o = this.UpdateActive(c, xoff, yoff);
    return o.Active(c, t.mx, t.my) ? o : null;
  };

  Tproto.Clicked = function (e) {
    var a = this.a,
        t = a.target,
        h = a.href,
        evt;

    if (t != "" && t != "_self") {
      if (self.frames[t]) {
        self.frames[t].document.location = h;
      } else {
        try {
          if (top.frames[t]) {
            top.frames[t].document.location = h;
            return;
          }
        } catch (err) {// different domain/port/protocol?
        }

        window.open(h, t);
      }

      return;
    }

    if (doc.createEvent) {
      evt = doc.createEvent("MouseEvents");
      evt.initMouseEvent("click", 1, 1, window, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null);
      if (!a.dispatchEvent(evt)) return;
    } else if (a.fireEvent) {
      if (!a.fireEvent("onclick")) return;
    }

    doc.location = h;
  };
  /**
   * @constructor
   */


  function TagCanvas(cid, lctr, opt) {
    var i,
        p,
        c = doc.getElementById(cid),
        cp = ["id", "class", "innerHTML"],
        raf;
    if (!c) throw 0;

    if (Defined(window.G_vmlCanvasManager)) {
      c = window.G_vmlCanvasManager.initElement(c);
      this.ie = parseFloat(navigator.appVersion.split("MSIE")[1]);
    }

    if (c && (!c.getContext || !c.getContext("2d").fillText)) {
      p = doc.createElement("DIV");

      for (i = 0; i < cp.length; ++i) p[cp[i]] = c[cp[i]];

      c.parentNode.insertBefore(p, c);
      c.parentNode.removeChild(c);
      throw 0;
    }

    for (i in TagCanvas.options) this[i] = opt && Defined(opt[i]) ? opt[i] : Defined(TagCanvas[i]) ? TagCanvas[i] : TagCanvas.options[i];

    this.canvas = c;
    this.ctxt = c.getContext("2d");
    this.z1 = 250 / max(this.depth, 0.001);
    this.z2 = this.z1 / this.zoom;
    this.radius = min(c.height, c.width) * 0.0075; // fits radius of 100 in canvas

    this.max_radius = 100;
    this.max_weight = [];
    this.min_weight = [];
    this.textFont = this.textFont && FixFont(this.textFont);
    this.textHeight *= 1;
    this.pulsateTo = Clamp(this.pulsateTo, 0, 1);
    this.minBrightness = Clamp(this.minBrightness, 0, 1);
    this.maxBrightness = Clamp(this.maxBrightness, this.minBrightness, 1);
    this.ctxt.textBaseline = "top";
    this.lx = (this.lock + "").indexOf("x") + 1;
    this.ly = (this.lock + "").indexOf("y") + 1;
    this.frozen = this.dx = this.dy = this.fixedAnim = this.touchState = 0;
    this.fixedAlpha = 1;
    this.source = lctr || cid;
    this.repeatTags = min(64, ~~this.repeatTags);
    this.minTags = min(200, ~~this.minTags);
    if (this.minTags > 0 && this.repeatTags < 1 && (i = this.GetTags().length)) this.repeatTags = ceil(this.minTags / i) - 1;
    this.transform = Matrix.Identity();
    this.startTime = this.time = TimeNow();
    this.mx = this.my = -1;
    this.centreImage && CentreImage(this);
    this.Animate = this.dragControl ? this.AnimateDrag : this.AnimatePosition;
    this.animTiming = typeof TagCanvas[this.animTiming] == "function" ? TagCanvas[this.animTiming] : TagCanvas.Smooth;

    if (this.shadowBlur || this.shadowOffset[0] || this.shadowOffset[1]) {
      // let the browser translate "red" into "#ff0000"
      this.ctxt.shadowColor = this.shadow;
      this.shadow = this.ctxt.shadowColor;
      this.shadowAlpha = ShadowAlphaBroken();
    } else {
      delete this.shadow;
    }

    this.Load();

    if (lctr && this.hideTags) {
      (function (t) {
        if (TagCanvas.loaded) t.HideTags();else AddHandler("load", function () {
          t.HideTags();
        }, window);
      })(this);
    }

    this.yaw = this.initial ? this.initial[0] * this.maxSpeed : 0;
    this.pitch = this.initial ? this.initial[1] * this.maxSpeed : 0;

    if (this.tooltip) {
      this.ctitle = c.title;
      c.title = "";

      if (this.tooltip == "native") {
        this.Tooltip = this.TooltipNative;
      } else {
        this.Tooltip = this.TooltipDiv;

        if (!this.ttdiv) {
          this.ttdiv = doc.createElement("div");
          this.ttdiv.className = this.tooltipClass;
          this.ttdiv.style.position = "absolute";
          this.ttdiv.style.zIndex = c.style.zIndex + 1;
          AddHandler("mouseover", function (e) {
            e.target.style.display = "none";
          }, this.ttdiv);
          doc.body.appendChild(this.ttdiv);
        }
      }
    } else {
      this.Tooltip = this.TooltipNone;
    }

    if (!this.noMouse && !handlers[cid]) {
      handlers[cid] = [["mousemove", MouseMove], ["mouseout", MouseOut], ["mouseup", MouseUp], ["touchstart", TouchDown], ["touchend", TouchUp], ["touchcancel", TouchUp], ["touchmove", TouchMove]];

      if (this.dragControl) {
        handlers[cid].push(["mousedown", MouseDown]);
        handlers[cid].push(["selectstart", Nop]);
      }

      if (this.wheelZoom) {
        handlers[cid].push(["mousewheel", MouseWheel]);
        handlers[cid].push(["DOMMouseScroll", MouseWheel]);
      }

      for (i = 0; i < handlers[cid].length; ++i) AddHandler(handlers[cid][i][0], handlers[cid][i][1], c);
    }

    if (!TagCanvas.started) {
      raf = window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
      TagCanvas.NextFrame = raf ? TagCanvas.NextFrameRAF : TagCanvas.NextFrameTimeout;
      TagCanvas.interval = this.interval;
      TagCanvas.NextFrame(this.interval);
      TagCanvas.started = 1;
    }
  }

  TCproto = TagCanvas.prototype;

  TCproto.SourceElements = function () {
    if (doc.querySelectorAll) return doc.querySelectorAll("#" + this.source);
    return [doc.getElementById(this.source)];
  };

  TCproto.HideTags = function () {
    var el = this.SourceElements(),
        i;

    for (i = 0; i < el.length; ++i) el[i].style.display = "none";
  };

  TCproto.GetTags = function () {
    var el = this.SourceElements(),
        etl,
        tl = [],
        i,
        j,
        k;

    for (k = 0; k <= this.repeatTags; ++k) {
      for (i = 0; i < el.length; ++i) {
        etl = el[i].getElementsByTagName("a");

        for (j = 0; j < etl.length; ++j) {
          tl.push(etl[j]);
        }
      }
    }

    return tl;
  };

  TCproto.Message = function (text) {
    var tl = [],
        i,
        p,
        tc = text.split(""),
        a,
        t,
        x,
        z;

    for (i = 0; i < tc.length; ++i) {
      if (tc[i] != " ") {
        p = i - tc.length / 2;
        a = doc.createElement("A");
        a.href = "#";
        a.innerText = tc[i];
        x = 100 * sin(p / 9);
        z = -100 * cos(p / 9);
        t = new Tag(this, tc[i], a, [x, 0, z], 2, 18, "#000", "#fff", 0, 0, 0, "monospace", 2, tc[i]);
        t.Init();
        tl.push(t);
      }
    }

    return tl;
  };

  TCproto.CreateTag = function (e) {
    var im,
        i,
        t,
        txt,
        ts,
        font,
        bc,
        boc,
        p = [0, 0, 0];

    if ("text" != this.imageMode) {
      im = e.getElementsByTagName("img");

      if (im.length) {
        i = new Image();
        i.src = im[0].src;

        if (!this.imageMode) {
          t = new Tag(this, "", e, p, 0, 0);
          t.SetImage(i); //t.Init();

          AddImage(i, im[0], t, this);
          return t;
        }
      }
    }

    if ("image" != this.imageMode) {
      ts = new TextSplitter(e);
      txt = ts.Lines();

      if (!ts.Empty()) {
        font = this.textFont || FixFont(GetProperty(e, "font-family"));
        if (this.splitWidth) txt = ts.SplitWidth(this.splitWidth, this.ctxt, font, this.textHeight);
        bc = this.bgColour == "tag" ? GetProperty(e, "background-color") : this.bgColour;
        boc = this.bgOutline == "tag" ? GetProperty(e, "color") : this.bgOutline;
      } else {
        ts = null;
      }
    }

    if (ts || i) {
      t = new Tag(this, txt, e, p, 2, this.textHeight + 2, this.textColour || GetProperty(e, "color"), bc, this.bgRadius, boc, this.bgOutlineThickness, font, this.padding, ts && ts.original);

      if (i) {
        t.SetImage(i);
        AddImage(i, im[0], t, this);
      } else {
        t.Init();
      }

      return t;
    }
  };

  TCproto.UpdateTag = function (t, a) {
    var colour = this.textColour || GetProperty(a, "color"),
        font = this.textFont || FixFont(GetProperty(a, "font-family")),
        bc = this.bgColour == "tag" ? GetProperty(a, "background-color") : this.bgColour,
        boc = this.bgOutline == "tag" ? GetProperty(a, "color") : this.bgOutline;
    t.a = a;
    t.title = a.title;
    if (t.colour != colour || t.textFont != font || t.bgColour != bc || t.bgOutline != boc) t.SetFont(font, colour, bc, boc);
  };

  TCproto.Weight = function (tl) {
    var ll = tl.length,
        w,
        i,
        s,
        weights = [],
        valid,
        wfrom = this.weightFrom ? this.weightFrom.split(/[, ]/) : [null],
        wl = wfrom.length;

    for (i = 0; i < ll; ++i) {
      weights[i] = [];

      for (s = 0; s < wl; ++s) {
        w = FindWeight(tl[i].a, wfrom[s], this.textHeight);
        if (!this.max_weight[s] || w > this.max_weight[s]) this.max_weight[s] = w;
        if (!this.min_weight[s] || w < this.min_weight[s]) this.min_weight[s] = w;
        weights[i][s] = w;
      }
    }

    for (s = 0; s < wl; ++s) {
      if (this.max_weight[s] > this.min_weight[s]) valid = 1;
    }

    if (valid) {
      for (i = 0; i < ll; ++i) {
        tl[i].SetWeight(weights[i]);
      }
    }
  };

  TCproto.Load = function () {
    var tl = this.GetTags(),
        taglist = [],
        shape,
        t,
        shapeArgs,
        rx,
        ry,
        rz,
        vl,
        i,
        tagmap = [],
        pfuncs = {
      sphere: PointsOnSphere,
      vcylinder: PointsOnCylinderV,
      hcylinder: PointsOnCylinderH,
      vring: PointsOnRingV,
      hring: PointsOnRingH
    };

    if (tl.length) {
      tagmap.length = tl.length;

      for (i = 0; i < tl.length; ++i) tagmap[i] = i;

      this.shuffleTags && Shuffle(tagmap);
      rx = 100 * this.radiusX;
      ry = 100 * this.radiusY;
      rz = 100 * this.radiusZ;
      this.max_radius = max(rx, max(ry, rz));

      for (i = 0; i < tl.length; ++i) {
        t = this.CreateTag(tl[tagmap[i]]);
        if (t) taglist.push(t);
      }

      this.weight && this.Weight(taglist, true);

      if (this.shapeArgs) {
        this.shapeArgs[0] = taglist.length;
      } else {
        shapeArgs = this.shape.toString().split(/[(),]/);
        shape = shapeArgs.shift();
        if (typeof window[shape] === "function") this.shape = window[shape];else this.shape = pfuncs[shape] || pfuncs.sphere;
        this.shapeArgs = [taglist.length, rx, ry, rz].concat(shapeArgs);
      }

      vl = this.shape.apply(this, this.shapeArgs);
      this.listLength = taglist.length;

      for (i = 0; i < taglist.length; ++i) taglist[i].position = new Vector(vl[i][0], vl[i][1], vl[i][2]);
    }

    if (this.noTagsMessage && !taglist.length) taglist = this.Message("No tags");
    this.taglist = taglist;
  };

  TCproto.Update = function () {
    var tl = this.GetTags(),
        newlist = [],
        taglist = this.taglist,
        found,
        added = [],
        removed = [],
        vl,
        ol,
        nl,
        i,
        j;
    if (!this.shapeArgs) return this.Load();

    if (tl.length) {
      nl = this.listLength = tl.length;
      ol = taglist.length; // copy existing list, populate "removed"

      for (i = 0; i < ol; ++i) {
        newlist.push(taglist[i]);
        removed.push(i);
      } // find added and removed tags


      for (i = 0; i < nl; ++i) {
        for (j = 0, found = 0; j < ol; ++j) {
          if (taglist[j].EqualTo(tl[i])) {
            this.UpdateTag(newlist[j], tl[i]);
            found = removed[j] = -1;
          }
        }

        if (!found) added.push(i);
      } // clean out found tags from removed list


      for (i = 0, j = 0; i < ol; ++i) {
        if (removed[j] == -1) removed.splice(j, 1);else ++j;
      } // insert new tags in gaps where old tags removed


      if (removed.length) {
        Shuffle(removed);

        while (removed.length && added.length) {
          i = removed.shift();
          j = added.shift();
          newlist[i] = this.CreateTag(tl[j]);
        } // remove any more (in reverse order)


        removed.sort(function (a, b) {
          return a - b;
        });

        while (removed.length) {
          newlist.splice(removed.pop(), 1);
        }
      } // add any extra tags


      j = newlist.length / (added.length + 1);
      i = 0;

      while (added.length) {
        newlist.splice(ceil(++i * j), 0, this.CreateTag(tl[added.shift()]));
      } // assign correct positions to tags


      this.shapeArgs[0] = nl = newlist.length;
      vl = this.shape.apply(this, this.shapeArgs);

      for (i = 0; i < nl; ++i) newlist[i].position = new Vector(vl[i][0], vl[i][1], vl[i][2]); // reweight tags


      this.weight && this.Weight(newlist);
    }

    this.taglist = newlist;
  };

  TCproto.SetShadow = function (c) {
    c.shadowBlur = this.shadowBlur;
    c.shadowOffsetX = this.shadowOffset[0];
    c.shadowOffsetY = this.shadowOffset[1];
  };

  TCproto.Draw = function (t) {
    if (this.paused) return;
    var cv = this.canvas,
        cw = cv.width,
        ch = cv.height,
        max_sc = 0,
        tdelta = (t - this.time) * TagCanvas.interval / 1000,
        x = cw / 2 + this.offsetX,
        y = ch / 2 + this.offsetY,
        c = this.ctxt,
        active,
        a,
        i,
        aindex = -1,
        tl = this.taglist,
        l = tl.length,
        frontsel = this.frontSelect,
        centreDrawn = this.centreFunc == Nop,
        fixed;
    this.time = t;
    if (this.frozen && this.drawn) return this.Animate(cw, ch, tdelta);
    fixed = this.AnimateFixed();
    c.setTransform(1, 0, 0, 1, 0, 0);

    for (i = 0; i < l; ++i) tl[i].Calc(this.transform, this.fixedAlpha);

    tl = SortList(tl, function (a, b) {
      return b.z - a.z;
    });

    if (fixed && this.fixedAnim.active) {
      active = this.fixedAnim.tag.UpdateActive(c, x, y);
    } else {
      this.active = null;

      for (i = 0; i < l; ++i) {
        a = this.mx >= 0 && this.my >= 0 && this.taglist[i].CheckActive(c, x, y);

        if (a && a.sc > max_sc && (!frontsel || a.z <= 0)) {
          active = a;
          aindex = i;
          active.tag = this.taglist[i];
          max_sc = a.sc;
        }
      }

      this.active = active;
    }

    this.txtOpt || this.shadow && this.SetShadow(c);
    c.clearRect(0, 0, cw, ch);

    for (i = 0; i < l; ++i) {
      if (!centreDrawn && tl[i].z <= 0) {
        // run the centreFunc if the next tag is at the front
        try {
          this.centreFunc(c, cw, ch, x, y);
        } catch (e) {
          alert(e); // don't run it again

          this.centreFunc = Nop;
        }

        centreDrawn = true;
      }

      if (!(active && active.tag == tl[i] && active.PreDraw(c, tl[i], x, y))) tl[i].Draw(c, x, y);
      active && active.tag == tl[i] && active.PostDraw(c);
    }

    if (this.freezeActive && active) {
      this.Freeze();
    } else {
      this.UnFreeze();
      this.drawn = l == this.listLength;
    }

    if (this.fixedCallback) {
      this.fixedCallback(this, this.fixedCallbackTag);
      this.fixedCallback = null;
    }

    fixed || this.Animate(cw, ch, tdelta);
    active && active.LastDraw(c);
    cv.style.cursor = active ? this.activeCursor : "";
    this.Tooltip(active, this.taglist[aindex]);
  };

  TCproto.TooltipNone = function () {};

  TCproto.TooltipNative = function (active, tag) {
    if (active) this.canvas.title = tag && tag.title ? tag.title : "";else this.canvas.title = this.ctitle;
  };

  TCproto.SetTTDiv = function (title, tag) {
    var tc = this,
        s = tc.ttdiv.style;
    if (title != tc.ttdiv.innerHTML) s.display = "none";
    tc.ttdiv.innerHTML = title;
    tag && (tag.title = tc.ttdiv.innerHTML);

    if (s.display == "none" && !tc.tttimer) {
      tc.tttimer = setTimeout(function () {
        var p = AbsPos(tc.canvas.id);
        s.display = "block";
        s.left = p.x + tc.mx + "px";
        s.top = p.y + tc.my + 24 + "px";
        tc.tttimer = null;
      }, tc.tooltipDelay);
    }
  };

  TCproto.TooltipDiv = function (active, tag) {
    if (active && tag && tag.title) {
      this.SetTTDiv(tag.title, tag);
    } else if (!active && this.mx != -1 && this.my != -1 && this.ctitle.length) {
      this.SetTTDiv(this.ctitle);
    } else {
      this.ttdiv.style.display = "none";
    }
  };

  TCproto.Transform = function (tc, p, y) {
    if (p || y) {
      var sp = sin(p),
          cp = cos(p),
          sy = sin(y),
          cy = cos(y),
          ym = new Matrix([cy, 0, sy, 0, 1, 0, -sy, 0, cy]),
          pm = new Matrix([1, 0, 0, 0, cp, -sp, 0, sp, cp]);
      tc.transform = tc.transform.mul(ym.mul(pm));
    }
  };

  TCproto.AnimateFixed = function () {
    var fa, t1, angle, m, d;

    if (this.fadeIn) {
      t1 = TimeNow() - this.startTime;

      if (t1 >= this.fadeIn) {
        this.fadeIn = 0;
        this.fixedAlpha = 1;
      } else {
        this.fixedAlpha = t1 / this.fadeIn;
      }
    }

    if (this.fixedAnim) {
      if (!this.fixedAnim.transform) this.fixedAnim.transform = this.transform;
      fa = this.fixedAnim, t1 = TimeNow() - fa.t0, angle = fa.angle, m, d = this.animTiming(fa.t, t1);
      this.transform = fa.transform;

      if (t1 >= fa.t) {
        this.fixedCallbackTag = fa.tag;
        this.fixedCallback = fa.cb;
        this.fixedAnim = this.yaw = this.pitch = 0;
      } else {
        angle *= d;
      }

      m = Matrix.Rotation(angle, fa.axis);
      this.transform = this.transform.mul(m);
      return this.fixedAnim != 0;
    }

    return false;
  };

  TCproto.AnimatePosition = function (w, h, t) {
    var tc = this,
        x = tc.mx,
        y = tc.my,
        s,
        r;

    if (!tc.frozen && x >= 0 && y >= 0 && x < w && y < h) {
      s = tc.maxSpeed, r = tc.reverse ? -1 : 1;
      tc.lx || (tc.yaw = (x * 2 * s / w - s) * r * t);
      tc.ly || (tc.pitch = (y * 2 * s / h - s) * -r * t);
      tc.initial = null;
    } else if (!tc.initial) {
      if (tc.frozen && !tc.freezeDecel) tc.yaw = tc.pitch = 0;else tc.Decel(tc);
    }

    this.Transform(tc, tc.pitch, tc.yaw);
  };

  TCproto.AnimateDrag = function (w, h, t) {
    var tc = this,
        rs = 100 * t * tc.maxSpeed / tc.max_radius / tc.zoom;

    if (tc.dx || tc.dy) {
      tc.lx || (tc.yaw = tc.dx * rs / tc.stretchX);
      tc.ly || (tc.pitch = tc.dy * -rs / tc.stretchY);
      tc.dx = tc.dy = 0;
      tc.initial = null;
    } else if (!tc.initial) {
      tc.Decel(tc);
    }

    this.Transform(tc, tc.pitch, tc.yaw);
  };

  TCproto.Freeze = function () {
    if (!this.frozen) {
      this.preFreeze = [this.yaw, this.pitch];
      this.frozen = 1;
      this.drawn = 0;
    }
  };

  TCproto.UnFreeze = function () {
    if (this.frozen) {
      this.yaw = this.preFreeze[0];
      this.pitch = this.preFreeze[1];
      this.frozen = 0;
    }
  };

  TCproto.Decel = function (tc) {
    var s = tc.minSpeed,
        ay = abs(tc.yaw),
        ap = abs(tc.pitch);
    if (!tc.lx && ay > s) tc.yaw = ay > tc.z0 ? tc.yaw * tc.decel : 0;
    if (!tc.ly && ap > s) tc.pitch = ap > tc.z0 ? tc.pitch * tc.decel : 0;
  };

  TCproto.Zoom = function (r) {
    this.z2 = this.z1 * (1 / r);
    this.drawn = 0;
  };

  TCproto.Clicked = function (e) {
    var a = this.active;

    try {
      if (a && a.tag) if (this.clickToFront === false || this.clickToFront === null) a.tag.Clicked(e);else this.TagToFront(a.tag, this.clickToFront, function () {
        a.tag.Clicked(e);
      }, true);
    } catch (ex) {}
  };

  TCproto.Wheel = function (i) {
    var z = this.zoom + this.zoomStep * (i ? 1 : -1);
    this.zoom = min(this.zoomMax, max(this.zoomMin, z));
    this.Zoom(this.zoom);
  };

  TCproto.BeginDrag = function (e) {
    this.down = EventXY(e, this.canvas);
    e.cancelBubble = true;
    e.returnValue = false;
    e.preventDefault && e.preventDefault();
  };

  TCproto.Drag = function (e, p) {
    if (this.dragControl && this.down) {
      var t2 = this.dragThreshold * this.dragThreshold,
          dx = p.x - this.down.x,
          dy = p.y - this.down.y;

      if (this.dragging || dx * dx + dy * dy > t2) {
        this.dx = dx;
        this.dy = dy;
        this.dragging = 1;
        this.down = p;
      }
    }

    return this.dragging;
  };

  TCproto.EndDrag = function () {
    var res = this.dragging;
    this.dragging = this.down = null;
    return res;
  };

  function PinchDistance(e) {
    var t1 = e.targetTouches[0],
        t2 = e.targetTouches[1];
    return sqrt(pow(t2.pageX - t1.pageX, 2) + pow(t2.pageY - t1.pageY, 2));
  }

  TCproto.BeginPinch = function (e) {
    this.pinched = [PinchDistance(e), this.zoom];
    e.preventDefault && e.preventDefault();
  };

  TCproto.Pinch = function (e) {
    var z,
        d,
        p = this.pinched;
    if (!p) return;
    d = PinchDistance(e);
    z = p[1] * d / p[0];
    this.zoom = min(this.zoomMax, max(this.zoomMin, z));
    this.Zoom(this.zoom);
  };

  TCproto.EndPinch = function (e) {
    this.pinched = null;
  };

  TCproto.Pause = function () {
    this.paused = true;
  };

  TCproto.Resume = function () {
    this.paused = false;
  };

  TCproto.SetSpeed = function (i) {
    this.initial = i;
    this.yaw = i[0] * this.maxSpeed;
    this.pitch = i[1] * this.maxSpeed;
  };

  TCproto.FindTag = function (t) {
    if (!Defined(t)) return null;
    Defined(t.index) && (t = t.index);
    if (!IsObject(t)) return this.taglist[t];
    var srch, tgt, i;
    if (Defined(t.id)) srch = "id", tgt = t.id;else if (Defined(t.text)) srch = "innerText", tgt = t.text;

    for (i = 0; i < this.taglist.length; ++i) if (this.taglist[i].a[srch] == tgt) return this.taglist[i];
  };

  TCproto.RotateTag = function (tag, lt, lg, time, callback, active) {
    var t = tag.xformed,
        v1 = new Vector(t.x, t.y, t.z),
        v2 = MakeVector(lg, lt),
        angle = v1.angle(v2),
        u = v1.cross(v2).unit();

    if (angle == 0) {
      this.fixedCallbackTag = tag;
      this.fixedCallback = callback;
    } else {
      this.fixedAnim = {
        angle: -angle,
        axis: u,
        t: time,
        t0: TimeNow(),
        cb: callback,
        tag: tag,
        active: active
      };
    }
  };

  TCproto.TagToFront = function (tag, time, callback, active) {
    this.RotateTag(tag, 0, 0, time, callback, active);
  };

  TagCanvas.Start = function (id, l, o) {
    TagCanvas.Delete(id);
    TagCanvas.tc[id] = new TagCanvas(id, l, o);
  };

  function tccall(f, id) {
    TagCanvas.tc[id] && TagCanvas.tc[id][f]();
  }

  TagCanvas.Linear = function (t, t0) {
    return t0 / t;
  };

  TagCanvas.Smooth = function (t, t0) {
    return 0.5 - cos(t0 * Math.PI / t) / 2;
  };

  TagCanvas.Pause = function (id) {
    tccall("Pause", id);
  };

  TagCanvas.Resume = function (id) {
    tccall("Resume", id);
  };

  TagCanvas.Reload = function (id) {
    tccall("Load", id);
  };

  TagCanvas.Update = function (id) {
    tccall("Update", id);
  };

  TagCanvas.SetSpeed = function (id, speed) {
    if (IsObject(speed) && TagCanvas.tc[id] && !isNaN(speed[0]) && !isNaN(speed[1])) {
      TagCanvas.tc[id].SetSpeed(speed);
      return true;
    }

    return false;
  };

  TagCanvas.TagToFront = function (id, options) {
    if (!IsObject(options)) return false;
    options.lat = options.lng = 0;
    return TagCanvas.RotateTag(id, options);
  };

  TagCanvas.RotateTag = function (id, options) {
    if (IsObject(options) && TagCanvas.tc[id]) {
      if (isNaN(options.time)) options.time = 500;
      var tt = TagCanvas.tc[id].FindTag(options);

      if (tt) {
        TagCanvas.tc[id].RotateTag(tt, options.lat, options.lng, options.time, options.callback, options.active);
        return true;
      }
    }

    return false;
  };

  TagCanvas.Delete = function (id) {
    var i, c;

    if (handlers[id]) {
      c = doc.getElementById(id);

      if (c) {
        for (i = 0; i < handlers[id].length; ++i) RemoveHandler(handlers[id][i][0], handlers[id][i][1], c);
      }
    }

    delete handlers[id];
    delete TagCanvas.tc[id];
  };

  TagCanvas.NextFrameRAF = function () {
    requestAnimationFrame(DrawCanvasRAF);
  };

  TagCanvas.NextFrameTimeout = function (iv) {
    setTimeout(DrawCanvas, iv);
  };

  TagCanvas.tc = {};
  TagCanvas.options = {
    z1: 20000,
    z2: 20000,
    z0: 0.0002,
    freezeActive: false,
    freezeDecel: false,
    activeCursor: "pointer",
    pulsateTo: 1,
    pulsateTime: 3,
    reverse: false,
    depth: 0.5,
    maxSpeed: 0.05,
    minSpeed: 0,
    decel: 0.95,
    interval: 20,
    minBrightness: 0.1,
    maxBrightness: 1,
    outlineColour: "#ffff99",
    outlineThickness: 2,
    outlineOffset: 5,
    outlineMethod: "outline",
    outlineRadius: 0,
    textColour: "#ff99ff",
    textHeight: 15,
    textFont: "Helvetica, Arial, sans-serif",
    shadow: "#000",
    shadowBlur: 0,
    shadowOffset: [0, 0],
    initial: null,
    hideTags: true,
    zoom: 1,
    weight: false,
    weightMode: "size",
    weightFrom: null,
    weightSize: 1,
    weightSizeMin: null,
    weightSizeMax: null,
    weightGradient: {
      0: "#f00",
      0.33: "#ff0",
      0.66: "#0f0",
      1: "#00f"
    },
    txtOpt: true,
    txtScale: 2,
    frontSelect: false,
    wheelZoom: true,
    zoomMin: 0.3,
    zoomMax: 3,
    zoomStep: 0.05,
    shape: "sphere",
    lock: null,
    tooltip: null,
    tooltipDelay: 300,
    tooltipClass: "tctooltip",
    radiusX: 1,
    radiusY: 1,
    radiusZ: 1,
    stretchX: 1,
    stretchY: 1,
    offsetX: 0,
    offsetY: 0,
    shuffleTags: false,
    noSelect: false,
    noMouse: false,
    imageScale: 1,
    paused: false,
    dragControl: false,
    dragThreshold: 4,
    centreFunc: Nop,
    splitWidth: 0,
    animTiming: "Smooth",
    clickToFront: false,
    fadeIn: 0,
    padding: 0,
    bgColour: null,
    bgRadius: 0,
    bgOutline: null,
    bgOutlineThickness: 0,
    outlineIncrease: 4,
    textAlign: "centre",
    textVAlign: "middle",
    imageMode: null,
    imagePosition: null,
    imagePadding: 2,
    imageAlign: "centre",
    imageVAlign: "middle",
    noTagsMessage: true,
    centreImage: null,
    pinchZoom: false,
    repeatTags: 0,
    minTags: 0
  };

  for (i in TagCanvas.options) TagCanvas[i] = TagCanvas.options[i];

  window.TagCanvas = TagCanvas; // set a flag for when the window has loaded

  AddHandler("load", function () {
    TagCanvas.loaded = 1;
  }, window);
})();

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_536c26b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_536c26b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_536c26b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_3_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_536c26b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xvdWQvaW5kZXgudnVlP2JmN2IiLCJ3ZWJwYWNrOi8vL3NyYy9jbG91ZC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nsb3VkL2luZGV4LnZ1ZT83NGVmIiwid2VicGFjazovLy8uL3NyYy9jbG91ZC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nsb3VkL2luZGV4LnZ1ZT82ODBmIiwid2VicGFjazovLy8uL2NvbW1vbi9saWIvdGFnY2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy9jbG91ZC9pbmRleC52dWU/YjA0NSJdLCJuYW1lcyI6WyJpIiwiaiIsImFicyIsIk1hdGgiLCJzaW4iLCJjb3MiLCJtYXgiLCJtaW4iLCJjZWlsIiwic3FydCIsInBvdyIsImhleGxvb2t1cDMiLCJoZXhsb29rdXAyIiwiaGV4bG9va3VwMSIsImEiLCJBIiwiYiIsIkIiLCJjIiwiQyIsImQiLCJEIiwiZSIsIkUiLCJmIiwiRiIsIk9wcm90byIsIlRwcm90byIsIlRDcHJvdG8iLCJNcHJvdG8iLCJWcHJvdG8iLCJUU3Byb3RvIiwiVENWcHJvdG8iLCJkb2MiLCJkb2N1bWVudCIsIm9jYW52YXMiLCJoYW5kbGVycyIsInRvU3RyaW5nIiwidG9VcHBlckNhc2UiLCJEZWZpbmVkIiwiSXNPYmplY3QiLCJvIiwiQ2xhbXAiLCJ2IiwibW4iLCJteCIsImlzTmFOIiwiTm9wIiwiVGltZU5vdyIsIkRhdGUiLCJ2YWx1ZU9mIiwiU29ydExpc3QiLCJsIiwibmwiLCJ0bCIsImxlbmd0aCIsInB1c2giLCJzb3J0IiwiU2h1ZmZsZSIsInQiLCJwIiwicmFuZG9tIiwiVmVjdG9yIiwieCIsInkiLCJ6IiwicHJvdG90eXBlIiwiZG90IiwiY3Jvc3MiLCJhbmdsZSIsImFjIiwiUEkiLCJhY29zIiwidW5pdCIsIk1ha2VWZWN0b3IiLCJsZyIsImx0IiwiTWF0cml4IiwiSWRlbnRpdHkiLCJSb3RhdGlvbiIsInUiLCJzaW5hIiwiY29zYSIsIm1jb3MiLCJtdWwiLCJtIiwibW1hdHJpeCIsInhmb3JtIiwiUG9pbnRzT25TcGhlcmUiLCJuIiwieHIiLCJ5ciIsInpyIiwiciIsInBoaSIsInB0cyIsImluYyIsIm9mZiIsIkN5bGluZGVyIiwiayIsIlJpbmciLCJQb2ludHNPbkN5bGluZGVyViIsIlBvaW50c09uQ3lsaW5kZXJIIiwiUG9pbnRzT25SaW5nViIsIm9mZnNldCIsIlBvaW50c09uUmluZ0giLCJDZW50cmVJbWFnZSIsIkltYWdlIiwib25sb2FkIiwiZHgiLCJ3aWR0aCIsImR5IiwiaGVpZ2h0IiwiY2VudHJlRnVuYyIsInciLCJoIiwiY3giLCJjeSIsInNldFRyYW5zZm9ybSIsImdsb2JhbEFscGhhIiwiZHJhd0ltYWdlIiwic3JjIiwiY2VudHJlSW1hZ2UiLCJTZXRBbHBoYSIsInAxIiwicDIiLCJhZSIsInRvUHJlY2lzaW9uIiwic3Vic3RyIiwicmVwbGFjZSIsImxhc3RJbmRleE9mIiwiaW5kZXhPZiIsInBhcnNlRmxvYXQiLCJzdWJzdHJpbmciLCJOZXdDYW52YXMiLCJ3aW5kb3ciLCJHX3ZtbENhbnZhc01hbmFnZXIiLCJjcmVhdGVFbGVtZW50IiwiU2hhZG93QWxwaGFCcm9rZW4iLCJjdiIsImdldENvbnRleHQiLCJzdHJva2VTdHlsZSIsInNoYWRvd0NvbG9yIiwic2hhZG93Qmx1ciIsInN0cm9rZVJlY3QiLCJnZXRJbWFnZURhdGEiLCJkYXRhIiwiU2V0R3JhZGllbnQiLCJnIiwiZ2QiLCJjcmVhdGVMaW5lYXJHcmFkaWVudCIsImFkZENvbG9yU3RvcCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiRmluZEdyYWRpZW50Q29sb3VyIiwidGMiLCJnbCIsIndlaWdodEdyYWRpZW50IiwiZ0NhbnZhcyIsIlRleHRTZXQiLCJjdHh0IiwiZm9udCIsImNvbG91ciIsInN0cmluZ3MiLCJwYWR4IiwicGFkeSIsInNoYWRvd0NvbG91ciIsInNoYWRvd09mZnNldHMiLCJtYXhXaWR0aCIsIndpZHRocyIsImFsaWduIiwieG8iLCJ5byIsInhjIiwidGV4dEJhc2VsaW5lIiwic2hhZG93T2Zmc2V0WCIsInNoYWRvd09mZnNldFkiLCJmaWxsVGV4dCIsInBhcnNlSW50IiwiUlJlY3QiLCJzIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwiYXJjVG8iLCJjbG9zZVBhdGgiLCJUZXh0Q2FudmFzIiwic3RyaW5nV2lkdGhzIiwidmFsaWduIiwic2NhbGUiLCJTZXRJbWFnZSIsImltYWdlIiwicG9zaXRpb24iLCJwYWRkaW5nIiwiaXdpZHRoIiwiaWhlaWdodCIsImlwb3MiLCJpcGFkIiwiaXNjYWxlIiwiaWFsaWduIiwiaXZhbGlnbiIsIkFsaWduIiwic2l6ZSIsInNwYWNlIiwicG9zIiwiQ3JlYXRlIiwiYmdDb2xvdXIiLCJiZ091dGxpbmUiLCJiZ091dGxpbmVUaGlja25lc3MiLCJyYWRpdXMiLCJjdyIsImNoIiwieDEiLCJ4MiIsInkxIiwieTIiLCJvZmZ4Iiwib2ZmeSIsIml4IiwiaXkiLCJpdyIsImloIiwic294Iiwic295Iiwic2hhZG93Y3YiLCJzaGFkb3djIiwibGluZVdpZHRoIiwiRXhwYW5kSW1hZ2UiLCJTY2FsZUltYWdlIiwiQWRkQmFja2dyb3VuZFRvSW1hZ2UiLCJvdGhpY2tuZXNzIiwib2NvbG91ciIsIm9maWxsIiwiY2MiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJBZGRTaGFkb3dUb0ltYWdlIiwic2MiLCJzYiIsInNvIiwic3ciLCJzaCIsIkZpbmRUZXh0Qm91bmRpbmdCb3giLCJodCIsImlkYXRhIiwidzEiLCJoMSIsImV4IiwiRml4Rm9udCIsIkFkZEhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJSZW1vdmVIYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRldGFjaEV2ZW50IiwiQWRkSW1hZ2UiLCJpbWFnZVNjYWxlIiwibXNjYWxlIiwiaWMiLCJiYyIsIm9jIiwiY29tcGxldGUiLCJ0eHRPcHQiLCJ6b29tTWF4IiwidHh0U2NhbGUiLCJuYXR1cmFsV2lkdGgiLCJuYXR1cmFsSGVpZ2h0IiwiZmltYWdlIiwiSGFzVGV4dCIsInNoYWRvdyIsInNoYWRvd09mZnNldCIsIkdldFByb3BlcnR5IiwidGV4dENvbG91ciIsIm91dGxpbmVNZXRob2QiLCJvdXRsaW5lQ29sb3VyIiwiYmdSYWRpdXMiLCJvaW1hZ2UiLCJvdXRsaW5lSW5jcmVhc2UiLCJJbml0IiwiZHYiLCJkZWZhdWx0VmlldyIsInBjIiwiY2hhckF0IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJjdXJyZW50U3R5bGUiLCJGaW5kV2VpZ2h0Iiwid0Zyb20iLCJ0SGVpZ2h0IiwiZ2V0QXR0cmlidXRlIiwiRXZlbnRUb0NhbnZhc0lkIiwidGFyZ2V0IiwiaWQiLCJzcmNFbGVtZW50IiwicGFyZW50Tm9kZSIsIkV2ZW50WFkiLCJ4eSIsInhtdWwiLCJ5bXVsIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJBYnNQb3MiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJNb3VzZU91dCIsImZyb21FbGVtZW50IiwiVGFnQ2FudmFzIiwibXkiLCJVbkZyZWV6ZSIsIkVuZERyYWciLCJNb3VzZU1vdmUiLCJ0ZyIsInR0dGltZXIiLCJjbGVhclRpbWVvdXQiLCJjYW52YXMiLCJEcmFnIiwiZHJhd24iLCJNb3VzZURvd24iLCJjYiIsImJ1dHRvbiIsIkJlZ2luRHJhZyIsIk1vdXNlVXAiLCJ0b3VjaFN0YXRlIiwiQ2xpY2tlZCIsIlRvdWNoRG93biIsInRvdWNoZXMiLCJ0YXJnZXRUb3VjaGVzIiwicGluY2hab29tIiwiQmVnaW5QaW5jaCIsIkVuZFBpbmNoIiwiVG91Y2hVcCIsIkRyYXciLCJUb3VjaE1vdmUiLCJQaW5jaCIsIk1vdXNlV2hlZWwiLCJjYW5jZWxCdWJibGUiLCJyZXR1cm5WYWx1ZSIsInByZXZlbnREZWZhdWx0IiwiV2hlZWwiLCJ3aGVlbERlbHRhIiwiZGV0YWlsIiwiRHJhd0NhbnZhcyIsIkRyYXdDYW52YXNSQUYiLCJOZXh0RnJhbWUiLCJpbnRlcnZhbCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZGQiLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5IiwieHMiLCJwYWdlWE9mZnNldCIsInNjcm9sbExlZnQiLCJ5cyIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG9wIiwiY2xpZW50TGVmdCIsImNsaWVudFRvcCIsImxlZnQiLCJ0b3AiLCJQcm9qZWN0Iiwic3giLCJzeSIsInoxIiwiejIiLCJUZXh0U3BsaXR0ZXIiLCJiciIsImxpbmUiLCJ0ZXh0Iiwib3JpZ2luYWwiLCJpbm5lclRleHQiLCJ0ZXh0Q29udGVudCIsIkVtcHR5IiwiTGluZXMiLCJjbiIsImNsIiwiY2hpbGROb2RlcyIsIm5vZGVOYW1lIiwiam9pbiIsIm5vZGVUeXBlIiwibm9kZVZhbHVlIiwiU3BsaXRXaWR0aCIsIndvcmRzIiwic3BsaXQiLCJtZWFzdXJlVGV4dCIsIk91dGxpbmUiLCJ0cyIsInRhZyIsInB1bHNhdGVUbyIsIkRyYXdQdWxzYXRlIiwiRHJhd1NpbXBsZSIsIm91dGxpbmVSYWRpdXMiLCJTZXRNZXRob2QiLCJvbSIsIm1ldGhvZHMiLCJibG9jayIsIm91dGxpbmUiLCJjbGFzc2ljIiwibm9uZSIsImZ1bmNzIiwiZHJhd0Z1bmMiLCJVcGRhdGUiLCJvdXRsaW5lT2Zmc2V0IiwibzIiLCJEcmF3T3V0bGluZSIsIkRyYXdDb2xvdXIiLCJhbHBoYSIsIkRyYXdDb2xvdXJUZXh0Iiwibm9ybWFsIiwiRHJhd0NvbG91ckltYWdlIiwiY2NhbnZhcyIsImZ4IiwiZnkiLCJmdyIsImZoIiwiY2xlYXJSZWN0Iiwic2F2ZSIsInJlY3QiLCJjbGlwIiwicmVzdG9yZSIsIkRyYXdCbG9jayIsIm91dGxpbmVUaGlja25lc3MiLCJkaWZmIiwicHVsc2F0ZVRpbWUiLCJBY3RpdmUiLCJQcmVEcmF3IiwiUG9zdERyYXciLCJMYXN0RHJhdyIsIlRhZyIsImNvbCIsImJjb2wiLCJicmFkaXVzIiwiYm91dGxpbmUiLCJib3RoaWNrbmVzcyIsInRleHRfb3JpZ2luYWwiLCJsaW5lX3dpZHRocyIsInRpdGxlIiwidGV4dEZvbnQiLCJ3ZWlnaHRlZCIsIndlaWdodCIsInRleHRIZWlnaHQiLCJNZWFzdXJlIiwiU2V0U2hhZG93Q29sb3VyIiwic2hhZG93QWxwaGEiLCJTZXRTaGFkb3dDb2xvdXJBbHBoYSIsIlNldFNoYWRvd0NvbG91ckZpeGVkIiwiU2V0RHJhdyIsIkVxdWFsVG8iLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImhyZWYiLCJpZSIsIkRyYXdJbWFnZUlFIiwiRHJhd0ltYWdlIiwiRHJhd1RleHQiLCJub1NlbGVjdCIsIkNoZWNrQWN0aXZlIiwiTWVhc3VyZVRleHQiLCJ3bCIsImV4dGVudHMiLCJ0aCIsInNvZmYiLCJ0d2lkdGgiLCJ0aGVpZ2h0IiwiaW1nIiwidGN2IiwidGV4dEFsaWduIiwidGV4dFZBbGlnbiIsImltYWdlUG9zaXRpb24iLCJpbWFnZVBhZGRpbmciLCJpbWFnZUFsaWduIiwiaW1hZ2VWQWxpZ24iLCJTZXRGb250IiwiYm9jIiwiU2V0V2VpZ2h0IiwibW9kZXMiLCJ3ZWlnaHRNb2RlIiwiV2VpZ2h0IiwibWluX3dlaWdodCIsIm1heF93ZWlnaHQiLCJ3bWluIiwid21heCIsIndudW0iLCJud2VpZ2h0Iiwid2VpZ2h0U2l6ZU1pbiIsIndlaWdodFNpemVNYXgiLCJ3ZWlnaHRTaXplIiwieG9mZiIsInlvZmYiLCJ4bCIsImltIiwiQ2FsYyIsInBwIiwibW5iIiwibWluQnJpZ2h0bmVzcyIsIm14YiIsIm1heEJyaWdodG5lc3MiLCJtYXhfcmFkaXVzIiwieGZvcm1lZCIsInN0cmV0Y2hYIiwic3RyZXRjaFkiLCJVcGRhdGVBY3RpdmUiLCJldnQiLCJzZWxmIiwiZnJhbWVzIiwibG9jYXRpb24iLCJlcnIiLCJvcGVuIiwiY3JlYXRlRXZlbnQiLCJpbml0TW91c2VFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJmaXJlRXZlbnQiLCJjaWQiLCJsY3RyIiwib3B0IiwiY3AiLCJyYWYiLCJpbml0RWxlbWVudCIsIm5hdmlnYXRvciIsImFwcFZlcnNpb24iLCJpbnNlcnRCZWZvcmUiLCJyZW1vdmVDaGlsZCIsIm9wdGlvbnMiLCJkZXB0aCIsInpvb20iLCJseCIsImxvY2siLCJseSIsImZyb3plbiIsImZpeGVkQW5pbSIsImZpeGVkQWxwaGEiLCJzb3VyY2UiLCJyZXBlYXRUYWdzIiwibWluVGFncyIsIkdldFRhZ3MiLCJ0cmFuc2Zvcm0iLCJzdGFydFRpbWUiLCJ0aW1lIiwiQW5pbWF0ZSIsImRyYWdDb250cm9sIiwiQW5pbWF0ZURyYWciLCJBbmltYXRlUG9zaXRpb24iLCJhbmltVGltaW5nIiwiU21vb3RoIiwiTG9hZCIsImhpZGVUYWdzIiwibG9hZGVkIiwiSGlkZVRhZ3MiLCJ5YXciLCJpbml0aWFsIiwibWF4U3BlZWQiLCJwaXRjaCIsInRvb2x0aXAiLCJjdGl0bGUiLCJUb29sdGlwIiwiVG9vbHRpcE5hdGl2ZSIsIlRvb2x0aXBEaXYiLCJ0dGRpdiIsImNsYXNzTmFtZSIsInRvb2x0aXBDbGFzcyIsInN0eWxlIiwiekluZGV4IiwiZGlzcGxheSIsImFwcGVuZENoaWxkIiwiVG9vbHRpcE5vbmUiLCJub01vdXNlIiwid2hlZWxab29tIiwic3RhcnRlZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiTmV4dEZyYW1lUkFGIiwiTmV4dEZyYW1lVGltZW91dCIsIlNvdXJjZUVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImVsIiwiZXRsIiwiTWVzc2FnZSIsIkNyZWF0ZVRhZyIsInR4dCIsImltYWdlTW9kZSIsInNwbGl0V2lkdGgiLCJVcGRhdGVUYWciLCJsbCIsIndlaWdodHMiLCJ2YWxpZCIsIndmcm9tIiwid2VpZ2h0RnJvbSIsInRhZ2xpc3QiLCJzaGFwZSIsInNoYXBlQXJncyIsInJ4IiwicnkiLCJyeiIsInZsIiwidGFnbWFwIiwicGZ1bmNzIiwic3BoZXJlIiwidmN5bGluZGVyIiwiaGN5bGluZGVyIiwidnJpbmciLCJocmluZyIsInNodWZmbGVUYWdzIiwicmFkaXVzWCIsInJhZGl1c1kiLCJyYWRpdXNaIiwic2hpZnQiLCJjb25jYXQiLCJhcHBseSIsImxpc3RMZW5ndGgiLCJub1RhZ3NNZXNzYWdlIiwibmV3bGlzdCIsImZvdW5kIiwiYWRkZWQiLCJyZW1vdmVkIiwib2wiLCJzcGxpY2UiLCJwb3AiLCJTZXRTaGFkb3ciLCJwYXVzZWQiLCJtYXhfc2MiLCJ0ZGVsdGEiLCJhY3RpdmUiLCJhaW5kZXgiLCJmcm9udHNlbCIsImZyb250U2VsZWN0IiwiY2VudHJlRHJhd24iLCJmaXhlZCIsIkFuaW1hdGVGaXhlZCIsImFsZXJ0IiwiZnJlZXplQWN0aXZlIiwiRnJlZXplIiwiZml4ZWRDYWxsYmFjayIsImZpeGVkQ2FsbGJhY2tUYWciLCJjdXJzb3IiLCJhY3RpdmVDdXJzb3IiLCJTZXRUVERpdiIsImlubmVySFRNTCIsInNldFRpbWVvdXQiLCJ0b29sdGlwRGVsYXkiLCJUcmFuc2Zvcm0iLCJzcCIsInltIiwicG0iLCJmYSIsInQxIiwiZmFkZUluIiwidDAiLCJheGlzIiwicmV2ZXJzZSIsImZyZWV6ZURlY2VsIiwiRGVjZWwiLCJycyIsInByZUZyZWV6ZSIsIm1pblNwZWVkIiwiYXkiLCJhcCIsInowIiwiZGVjZWwiLCJab29tIiwiY2xpY2tUb0Zyb250IiwiVGFnVG9Gcm9udCIsInpvb21TdGVwIiwiem9vbU1pbiIsImRvd24iLCJ0MiIsImRyYWdUaHJlc2hvbGQiLCJkcmFnZ2luZyIsInJlcyIsIlBpbmNoRGlzdGFuY2UiLCJwaW5jaGVkIiwiUGF1c2UiLCJSZXN1bWUiLCJTZXRTcGVlZCIsIkZpbmRUYWciLCJpbmRleCIsInNyY2giLCJ0Z3QiLCJSb3RhdGVUYWciLCJjYWxsYmFjayIsInYxIiwidjIiLCJTdGFydCIsIkRlbGV0ZSIsInRjY2FsbCIsIkxpbmVhciIsIlJlbG9hZCIsInNwZWVkIiwibGF0IiwibG5nIiwidHQiLCJpdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMEJBQTBCLGFBQWEsMEJBQTBC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QVMsQ0FBQ2pULENBQUQsQ0FBVCxHQUFlaVQsU0FBUyxDQUFDdU4sT0FBVixDQUFrQnhnQixDQUFsQixDQUFmOztBQUM3QnVJLFFBQU0sQ0FBQzBLLFNBQVAsR0FBbUJBLFNBQW5CLENBbm5GVSxDQW9uRlY7O0FBQ0ExRCxZQUFVLENBQ1IsTUFEUSxFQUVSLFlBQVc7QUFDVDBELGFBQVMsQ0FBQytPLE1BQVYsR0FBbUIsQ0FBbkI7QUFDRCxHQUpPLEVBS1J6WixNQUxRLENBQVY7QUFPRCxDQTVuRkQsSTs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQThaLENBQWdCLGtkQUFHLEVBQUMsQyIsImZpbGUiOiJhd2FyZF9kaXN0L2pzLzEzLmQ3NzkyMjFiMzAzMjFiNGNlOWQ1LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ3NlY3Rpb24nLHtzdGF0aWNDbGFzczpcImNsb3VkLXdyYXBwZXJcIn0sW19jKCdzZWN0aW9uJyx7c3RhdGljQ2xhc3M6XCJjb250ZW50LXBpY1wifSxbX2MoJ2NhbnZhcycse3JlZjpcIm15Q2FudmFzXCIsYXR0cnM6e1wiaWRcIjpcIm15Q2FudmFzXCJ9fSksX3ZtLl92KFwiIFwiKSxfYygndWwnLHtzdGF0aWNDbGFzczpcInRhZ3NcIixhdHRyczp7XCJpZFwiOlwidGFnc1wifX0sX3ZtLl9sKChfdm0ubWVtYmVyTGlzdCksZnVuY3Rpb24oaXRlbSxrZXkpe3JldHVybiBfYygnbGknLHtrZXk6a2V5LHN0YXRpY0NsYXNzOlwidGFncy1pdGVtXCJ9LFtfYygnYScse2F0dHJzOntcImhyZWZcIjpcIiNcIixcInRhcmdldFwiOlwiX2JsYW5rXCJ9fSxbX3ZtLl92KFwiXFxuICAgICAgICAgIFwiK192bS5fcyhpdGVtLm5hbWUpK1wiXFxuICAgICAgICBcIildKV0pfSksMCldKSxfdm0uX3YoXCIgXCIpLF9jKCdzZWN0aW9uJyx7c3RhdGljQ2xhc3M6XCJjb25zb2xlXCJ9LFtfdm0uX2woKF92bS5idG5UeXBlcyksZnVuY3Rpb24oYnRuKXtyZXR1cm4gX2MoJ3NlY3Rpb24nLHtrZXk6YnRuLnZhbHVlLHN0YXRpY0NsYXNzOlwiY29uc29sZS1idG5cIixjbGFzczpfdm0uY3VyQnRuVHlwZSA9PT0gYnRuLnZhbHVlID8gJ2NvbnNvbGUtYnRuLWFjdGl2ZScgOiAnJyxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS5jaGFuZ2VCdG5UeXBlKGJ0bi52YWx1ZSl9fX0sW192bS5fdihcIlxcbiAgICAgIFwiK192bS5fcyhidG4udmFsdWUpK1wiXFxuICAgIFwiKV0pfSksX3ZtLl92KFwiIFwiKSxfYygnc2VjdGlvbicse3N0YXRpY0NsYXNzOlwiY29uc29sZS1zd2l0Y2hcIixjbGFzczpfdm0uaXNSdW5uaW5nID8gJ2NvbnNvbGUtc3dpdGNoLW9uJyA6ICdjb25zb2xlLXN3aXRjaC1vZmYnLG9uOntcImNsaWNrXCI6X3ZtLmhhbmRsZUF3YXJkfX0sW192bS5fdihcIlxcbiAgICAgIFwiK192bS5fcyhfdm0uaXNSdW5uaW5nID8gXCLlgZxcIiA6IFwi5byA5aeLXCIpK1wiXFxuICAgIFwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3NlY3Rpb24nLHtzdGF0aWNDbGFzczpcImNvbnNvbGUtc2hvd2FsbFwiLG9uOntcImNsaWNrXCI6X3ZtLmdldEFsbFJlc3VsdH19LFtfdm0uX3YoXCJcXG4gICAgICDojrflj5blrozmlbTlkI3ljZVcXG4gICAgXCIpXSksX3ZtLl92KFwiIFwiKSxfYygnc2VjdGlvbicse3N0YXRpY0NsYXNzOlwiY29uc29sZS1jbGVhclwiLG9uOntcImNsaWNrXCI6X3ZtLnJlc2V0fX0sW192bS5fdihcIumHjee9rlwiKV0pXSwyKSxfdm0uX3YoXCIgXCIpLF9jKCd1aS1tb2RhbCcse21vZGVsOnt2YWx1ZTooX3ZtLnNob3dSZXN1bHQpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uc2hvd1Jlc3VsdD0kJHZ9LGV4cHJlc3Npb246XCJzaG93UmVzdWx0XCJ9fSxbKF92bS5zaG93QWxsUmVzdWx0KT9fYygnc2VjdGlvbicsX3ZtLl9sKChfdm0uYnRuVHlwZXMpLGZ1bmN0aW9uKGF3YXJkKXtyZXR1cm4gX2MoJ3NlY3Rpb24nLHtzdGF0aWNDbGFzczpcImF3YXJkXCJ9LFtfYygnc2VjdGlvbicse3N0YXRpY0NsYXNzOlwiYXdhcmQtdGl0bGVcIn0sW192bS5fdihcIlxcbiAgICAgICAgICBcIitfdm0uX3MoYXdhcmQubGFiZWwpK1wi77yaXCIrX3ZtLl9zKGF3YXJkLnZhbHVlKStcIuWQjVxcbiAgICAgICAgXCIpXSksX3ZtLl92KFwiIFwiKSxfYygnc2VjdGlvbicse3N0YXRpY0NsYXNzOlwicGVyc29uXCJ9LF92bS5fbCgoX3ZtLmN1clJlc3VsdExpc3QpLGZ1bmN0aW9uKGl0ZW0pe3JldHVybiBfYygnc2VjdGlvbicse2tleTppdGVtLnBob25lICsgJ18nICsgaXRlbS5uYW1lICsgJ19pdGVtLmF3YXJkVHlwZSd9LFsoaXRlbS5hd2FyZFR5cGUgPT09IGF3YXJkLnZhbHVlKT9fYygnc2VjdGlvbicse3N0YXRpY0NsYXNzOlwicGVyc29uLWl0ZW1cIn0sW19jKCdzZWN0aW9uJyx7c3RhdGljQ2xhc3M6XCJwZXJzb24taXRlbS1uYW1lXCJ9LFtfdm0uX3YoX3ZtLl9zKGl0ZW0ubmFtZSkpXSksX3ZtLl92KFwiIFwiKSxfYygnc2VjdGlvbicse3N0YXRpY0NsYXNzOlwicGVyc29uLWl0ZW0tcGhvbmVcIn0sW192bS5fdihfdm0uX3MoaXRlbS5waG9uZSkpXSldKTpfdm0uX2UoKV0pfSksMCldKX0pLDApOl9jKCdzZWN0aW9uJyx7c3RhdGljQ2xhc3M6XCJwZXJzb25cIn0sX3ZtLl9sKChfdm0uY3VyUmVzdWx0TGlzdCksZnVuY3Rpb24oaXRlbSl7cmV0dXJuIF9jKCdzZWN0aW9uJyx7a2V5Oml0ZW0ucGhvbmUgKyAnXycgKyBpdGVtLm5hbWUsc3RhdGljQ2xhc3M6XCJwZXJzb24taXRlbVwifSxbX2MoJ3NlY3Rpb24nLHtzdGF0aWNDbGFzczpcInBlcnNvbi1pdGVtLW5hbWVcIn0sW192bS5fdihfdm0uX3MoaXRlbS5uYW1lKSldKSxfdm0uX3YoXCIgXCIpLF9jKCdzZWN0aW9uJyx7c3RhdGljQ2xhc3M6XCJwZXJzb24taXRlbS1waG9uZVwifSxbX3ZtLl92KF92bS5fcyhpdGVtLnBob25lKSldKV0pfSksMCldKV0sMSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIjx0ZW1wbGF0ZT5cclxuICA8c2VjdGlvbiBjbGFzcz1cImNsb3VkLXdyYXBwZXJcIj5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudC1waWNcIj5cclxuICAgICAgPGNhbnZhcyByZWY9XCJteUNhbnZhc1wiIGlkPVwibXlDYW52YXNcIj4gPC9jYW52YXM+XHJcbiAgICAgIDx1bCBjbGFzcz1cInRhZ3NcIiBpZD1cInRhZ3NcIj5cclxuICAgICAgICA8bGkgY2xhc3M9XCJ0YWdzLWl0ZW1cIiB2LWZvcj1cIihpdGVtLCBrZXkpIGluIG1lbWJlckxpc3RcIiA6a2V5PVwia2V5XCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICB7eyBpdGVtLm5hbWUgfX1cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb25zb2xlXCI+XHJcbiAgICAgIDxzZWN0aW9uXHJcbiAgICAgICAgY2xhc3M9XCJjb25zb2xlLWJ0blwiXHJcbiAgICAgICAgOmNsYXNzPVwiY3VyQnRuVHlwZSA9PT0gYnRuLnZhbHVlID8gJ2NvbnNvbGUtYnRuLWFjdGl2ZScgOiAnJ1wiXHJcbiAgICAgICAgdi1mb3I9XCJidG4gaW4gYnRuVHlwZXNcIlxyXG4gICAgICAgIDprZXk9XCJidG4udmFsdWVcIlxyXG4gICAgICAgIEBjbGljaz1cImNoYW5nZUJ0blR5cGUoYnRuLnZhbHVlKVwiXHJcbiAgICAgID5cclxuICAgICAgICB7eyBidG4udmFsdWUgfX1cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8c2VjdGlvblxyXG4gICAgICAgIEBjbGljaz1cImhhbmRsZUF3YXJkXCJcclxuICAgICAgICBjbGFzcz1cImNvbnNvbGUtc3dpdGNoXCJcclxuICAgICAgICA6Y2xhc3M9XCJpc1J1bm5pbmcgPyAnY29uc29sZS1zd2l0Y2gtb24nIDogJ2NvbnNvbGUtc3dpdGNoLW9mZidcIlxyXG4gICAgICA+XHJcbiAgICAgICAge3sgaXNSdW5uaW5nID8gXCLlgZxcIiA6IFwi5byA5aeLXCIgfX1cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnNvbGUtc2hvd2FsbFwiIEBjbGljaz1cImdldEFsbFJlc3VsdFwiPlxyXG4gICAgICAgIOiOt+WPluWujOaVtOWQjeWNlVxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29uc29sZS1jbGVhclwiIEBjbGljaz1cInJlc2V0XCI+6YeN572uPC9zZWN0aW9uPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPHVpLW1vZGFsIHYtbW9kZWw9XCJzaG93UmVzdWx0XCI+XHJcbiAgICAgIDxzZWN0aW9uIHYtaWY9XCJzaG93QWxsUmVzdWx0XCI+XHJcbiAgICAgICAgPHNlY3Rpb24gdi1mb3I9XCJhd2FyZCBpbiBidG5UeXBlc1wiIGNsYXNzPVwiYXdhcmRcIj5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiYXdhcmQtdGl0bGVcIj5cclxuICAgICAgICAgICAge3sgYXdhcmQubGFiZWwgfX3vvJp7eyBhd2FyZC52YWx1ZSB9feWQjVxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJwZXJzb25cIj5cclxuICAgICAgICAgICAgPHNlY3Rpb25cclxuICAgICAgICAgICAgICB2LWZvcj1cIml0ZW0gaW4gY3VyUmVzdWx0TGlzdFwiXHJcbiAgICAgICAgICAgICAgOmtleT1cIml0ZW0ucGhvbmUgKyAnXycgKyBpdGVtLm5hbWUgKyAnX2l0ZW0uYXdhcmRUeXBlJ1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c2VjdGlvblxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJwZXJzb24taXRlbVwiXHJcbiAgICAgICAgICAgICAgICB2LWlmPVwiaXRlbS5hd2FyZFR5cGUgPT09IGF3YXJkLnZhbHVlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInBlcnNvbi1pdGVtLW5hbWVcIj57eyBpdGVtLm5hbWUgfX08L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInBlcnNvbi1pdGVtLXBob25lXCI+e3sgaXRlbS5waG9uZSB9fTwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwicGVyc29uXCIgdi1lbHNlPlxyXG4gICAgICAgIDxzZWN0aW9uXHJcbiAgICAgICAgICBjbGFzcz1cInBlcnNvbi1pdGVtXCJcclxuICAgICAgICAgIHYtZm9yPVwiaXRlbSBpbiBjdXJSZXN1bHRMaXN0XCJcclxuICAgICAgICAgIDprZXk9XCJpdGVtLnBob25lICsgJ18nICsgaXRlbS5uYW1lXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInBlcnNvbi1pdGVtLW5hbWVcIj57eyBpdGVtLm5hbWUgfX08L3NlY3Rpb24+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInBlcnNvbi1pdGVtLXBob25lXCI+e3sgaXRlbS5waG9uZSB9fTwvc2VjdGlvbj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvdWktbW9kYWw+XHJcbiAgPC9zZWN0aW9uPlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG4vLyBpbXBvcnQgXCIuLi8uLi9jb21tb24vbGliL3RhZ2NhbnZhcy5qc1wiO1xyXG5pbXBvcnQgXCJUYWdDYW52YXNcIjtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIFwidWktbW9kYWxcIjogKCkgPT4gaW1wb3J0KFwiLi4vLi4vY29tbW9uL2NvbXBvbmVudHMvdWktbW9kYWwudnVlXCIpXHJcbiAgfSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbWVtYmVyTGlzdDogW10sXHJcbiAgICAgIGJ0blR5cGVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwi5LiA562J5aWWXCIsXHJcbiAgICAgICAgICB2YWx1ZTogNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwi5LqM562J5aWWXCIsXHJcbiAgICAgICAgICB2YWx1ZTogMTBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIuS4ieetieWlllwiLFxyXG4gICAgICAgICAgdmFsdWU6IDMwXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBjdXJCdG5UeXBlOiAwLFxyXG4gICAgICBpc1J1bm5pbmc6IGZhbHNlLFxyXG4gICAgICBzaG93UmVzdWx0OiBmYWxzZSxcclxuICAgICAgc2hvd0FsbFJlc3VsdDogZmFsc2UsXHJcbiAgICAgIGN1clJlc3VsdExpc3Q6IFtdXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIHNob3dSZXN1bHQ6IGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgICBpZiAoIXZhbCkge1xyXG4gICAgICAgIFRhZ0NhbnZhcy5TZXRTcGVlZChcIm15Q2FudmFzXCIsIHRoaXMuX25vcm1hbFNwZWVkKCkpO1xyXG4gICAgICAgIHRoaXMuc2hvd0FsbFJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY3VyUmVzdWx0TGlzdCA9IFtdO1xyXG4gICAgICAgIC8vIFRhZ0NhbnZhcy5TZXRTcGVlZChcIm15Q2FudmFzXCIsIFswLCAwXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICBkb2N1bWVudC50aXRsZSA9IFwi5LqR5oq95aWWXCI7XHJcbiAgICB0aGlzLmN1ckJ0blR5cGUgPSB0aGlzLmJ0blR5cGVzWzBdLnZhbHVlO1xyXG4gICAgdGhpcy5faW5pdFNpemUoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGB0aGlzLmN1ckJ0blR5cGUke3RoaXMuY3VyQnRuVHlwZX1gKTtcclxuICAgIHRoaXMuX2luaXREYXRhKCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLl9pbml0U2l6ZSk7XHJcbiAgfSxcclxuICBiZWZvcmVEZXN0cm95KCkge1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5faW5pdFNpemUpO1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgX2luaXRTaXplKCkge1xyXG4gICAgICBsZXQgc2NyZWVuV2lkdGggPVxyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xyXG4gICAgICBsZXQgc2NyZWVuSGVpZ2h0ID1cclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xyXG4gICAgICBsZXQgbWludXMgPSBzY3JlZW5XaWR0aCA+IHNjcmVlbkhlaWdodCA/IHNjcmVlbkhlaWdodCA6IHNjcmVlbldpZHRoO1xyXG4gICAgICBsZXQgY2FudmFzID0gdGhpcy4kcmVmcy5teUNhbnZhcztcclxuICAgICAgLy8gY29uc29sZS5sb2coY2FudmFzKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coYG1pbnVzOiR7bWludXMgKiAwLjh9YCk7XHJcbiAgICAgIGNhbnZhcy53aWR0aCA9IG1pbnVzICogMC44NTtcclxuICAgICAgY2FudmFzLmhlaWdodCA9IG1pbnVzICogMC44NTtcclxuICAgIH0sXHJcbiAgICBfaW5pdERhdGEoKSB7XHJcbiAgICAgIGltcG9ydChcIi4vbWVtYmVyLmpzXCIpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICB0aGlzLm1lbWJlckxpc3QgPSByZXMuZGVmYXVsdDtcclxuICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl9pbml0UGljKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIF9pbml0UGljKCkge1xyXG4gICAgICBUYWdDYW52YXMuU3RhcnQoXCJteUNhbnZhc1wiLCBcInRhZ3NcIiwge1xyXG4gICAgICAgIHRleHRDb2xvdXI6IFwiI2ZmZlwiLFxyXG4gICAgICAgIHRleHRIZWlnaHQ6IDEwLFxyXG4gICAgICAgIGluaXRpYWw6IHRoaXMuX25vcm1hbFNwZWVkKCksXHJcbiAgICAgICAgcmV2ZXJzZTogdHJ1ZSxcclxuICAgICAgICBzaGFwZTogXCJzcGhlcmVcIlxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBfbm9ybWFsU3BlZWQoKSB7XHJcbiAgICAgIHJldHVybiBbMC4wOCAqIE1hdGgucmFuZG9tKCkgKyAwLjAwMSwgLSgwLjA4ICogTWF0aC5yYW5kb20oKSArIDAuMDAxKV07XHJcbiAgICB9LFxyXG4gICAgX2dldEF3YXJkKCkge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gdGhpcy5tZW1iZXJMaXN0LmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICBpdGVtLnNjb3JlID0gTWF0aC5yYW5kb20oKSAqIDEwMDtcclxuICAgICAgICByZXR1cm4gIXRoaXMuX2dldFJlc3VsdChpdGVtKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJlc3VsdCA9IHJlc3VsdFxyXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gYi5zY29yZSAtIGEuc2NvcmU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2xpY2UoMCwgdGhpcy5jdXJCdG5UeXBlKTtcclxuXHJcbiAgICAgIC8vIOe7k+aenOWtmOWCqHN0b3JhZ2VcclxuICAgICAgdGhpcy5jdXJSZXN1bHRMaXN0ID0gcmVzdWx0O1xyXG4gICAgICB0aGlzLl9zdG9yZVJlc3VsdChyZXN1bHQpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmN1clJlc3VsdExpc3QpO1xyXG4gICAgfSxcclxuICAgIF9zdG9yZVJlc3VsdChuZXdSZXN1bHRzKSB7XHJcbiAgICAgIGxldCBhd2FyZFN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF3YXJkXCIpO1xyXG4gICAgICBsZXQgcmVzdWx0cyA9IHt9O1xyXG4gICAgICBpZiAoYXdhcmRTdG9yYWdlKSB7XHJcbiAgICAgICAgcmVzdWx0cyA9IEpTT04ucGFyc2UoYXdhcmRTdG9yYWdlKTtcclxuICAgICAgfVxyXG4gICAgICBuZXdSZXN1bHRzLm1hcChpdGVtID0+IHtcclxuICAgICAgICBpdGVtLmF3YXJkVHlwZSA9IHRoaXMuY3VyQnRuVHlwZTtcclxuICAgICAgICByZXN1bHRzW2Ake2l0ZW0ucGhvbmV9XyR7aXRlbS5uYW1lfWBdID0gaXRlbTtcclxuICAgICAgfSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBhd2FyZGAsIEpTT04uc3RyaW5naWZ5KHJlc3VsdHMpKTtcclxuICAgIH0sXHJcbiAgICBfZ2V0UmVzdWx0KGl0ZW0pIHtcclxuICAgICAgbGV0IGF3YXJkU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXdhcmRcIik7XHJcbiAgICAgIGlmIChhd2FyZFN0b3JhZ2UpIHtcclxuICAgICAgICBsZXQgcmVzdWx0cyA9IEpTT04ucGFyc2UoYXdhcmRTdG9yYWdlKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0c1tgJHtpdGVtLnBob25lfV8ke2l0ZW0ubmFtZX1gXTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0sXHJcbiAgICBnZXRBbGxSZXN1bHQoKSB7XHJcbiAgICAgIGxldCBhd2FyZFN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF3YXJkXCIpO1xyXG4gICAgICBpZiAoYXdhcmRTdG9yYWdlKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBKU09OLnBhcnNlKGF3YXJkU3RvcmFnZSk7XHJcbiAgICAgICAgdGhpcy5jdXJSZXN1bHRMaXN0ID0gcmVzdWx0cztcclxuICAgICAgICB0aGlzLnNob3dBbGxSZXN1bHQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2hvd1Jlc3VsdCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jdXJSZXN1bHRMaXN0KTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VCdG5UeXBlKGJ0bikge1xyXG4gICAgICBpZiAodGhpcy5pc1J1bm5pbmcgfHwgdGhpcy5zaG93UmVzdWx0KSByZXR1cm47XHJcbiAgICAgIHRoaXMuY3VyQnRuVHlwZSA9IGJ0bjtcclxuICAgIH0sXHJcbiAgICBoYW5kbGVBd2FyZCgpIHtcclxuICAgICAgaWYgKHRoaXMuaXNSdW5uaW5nKSB7XHJcbiAgICAgICAgLy8g5YGc5q2i77yM5p+l55yL5oq95aWW57uT5p6cXHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuX2dldEF3YXJkKCk7XHJcbiAgICAgICAgdGhpcy5zaG93UmVzdWx0ID0gdHJ1ZTtcclxuICAgICAgICBUYWdDYW52YXMuU2V0U3BlZWQoXCJteUNhbnZhc1wiLCBbMCwgMF0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY3VyUmVzdWx0TGlzdCA9IFtdO1xyXG4gICAgICAgIC8vIOW8gOWni+aKveWlllxyXG4gICAgICAgIFRhZ0NhbnZhcy5TZXRTcGVlZChcIm15Q2FudmFzXCIsIFsxLCA1XSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5pc1J1bm5pbmcgPSAhdGhpcy5pc1J1bm5pbmc7XHJcbiAgICB9LFxyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiYXdhcmRcIik7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgfSxcclxuICAgIHRlc3RQYW5lbCgpIHtcclxuICAgICAgdGhpcy5zaG93UmVzdWx0ID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbi5jbG91ZC13cmFwcGVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuL3RpbWcuanBlZ1wiKSAwIDAgbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLnRhZ3Mge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuLyog57uT5p6c5bGV56S66Z2i5p2/ICovXHJcbi5wZXJzb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgJi1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMiwgMCwgMCwgMSk7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAmLW5hbWUge1xyXG4gICAgICBjb2xvcjogcmdiKDE4NywgMTEzLCAzKTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgfVxyXG4gICAgJi1waG9uZSB7XHJcbiAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmNvbnNvbGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICYtYnRuLFxyXG4gICYtc3dpdGNoLFxyXG4gICYtc2hvd2FsbCxcclxuICAmLWNsZWFyIHtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzNSwgMTM1LCAxMzUsIDEpO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgJi1zd2l0Y2gge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gICYtc2hvd2FsbCxcclxuICAmLWNsZWFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIsIDAsIDAsIDEpO1xyXG4gIH1cclxuICAmLXNob3dhbGwtYWN0aXZlLFxyXG4gICYtY2xlYXItYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzUsIDc1LCA3NSwgMSk7XHJcbiAgfVxyXG5cclxuICAmLWJ0bi1hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNSwgMTA1LCAyMDUsIDAuOSk7XHJcbiAgfVxyXG4gICYtc3dpdGNoLW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIwLCAwLCAwLCAxKTtcclxuICB9XHJcbiAgJi1zd2l0Y2gtb2ZmIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIsIDAsIDAsIDEpO1xyXG4gIH1cclxufVxyXG48L3N0eWxlPlxyXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTM2YzI2YjQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTM2YzI2YjQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1MzZjMjZiNFwiLFxuICBudWxsXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qKlxyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxNSBHcmFoYW0gQnJlYWNoXHJcbiAqXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XHJcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxyXG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxyXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxyXG4gKlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcclxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcclxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxyXG4gKiBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXHJcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxyXG4gKi9cclxuLyoqXHJcbiAqIFRhZ0NhbnZhcyAyLjdcclxuICogRm9yIG1vcmUgaW5mb3JtYXRpb24sIHBsZWFzZSBjb250YWN0IDxncmFoYW1AZ29hdDEwMDAuY29tPlxyXG4gKi9cclxuKGZ1bmN0aW9uKCkge1xyXG4gIFwidXNlIHN0cmljdFwiO1xyXG4gIHZhciBpLFxyXG4gICAgaixcclxuICAgIGFicyA9IE1hdGguYWJzLFxyXG4gICAgc2luID0gTWF0aC5zaW4sXHJcbiAgICBjb3MgPSBNYXRoLmNvcyxcclxuICAgIG1heCA9IE1hdGgubWF4LFxyXG4gICAgbWluID0gTWF0aC5taW4sXHJcbiAgICBjZWlsID0gTWF0aC5jZWlsLFxyXG4gICAgc3FydCA9IE1hdGguc3FydCxcclxuICAgIHBvdyA9IE1hdGgucG93LFxyXG4gICAgaGV4bG9va3VwMyA9IHt9LFxyXG4gICAgaGV4bG9va3VwMiA9IHt9LFxyXG4gICAgaGV4bG9va3VwMSA9IHtcclxuICAgICAgMDogXCIwLFwiLFxyXG4gICAgICAxOiBcIjE3LFwiLFxyXG4gICAgICAyOiBcIjM0LFwiLFxyXG4gICAgICAzOiBcIjUxLFwiLFxyXG4gICAgICA0OiBcIjY4LFwiLFxyXG4gICAgICA1OiBcIjg1LFwiLFxyXG4gICAgICA2OiBcIjEwMixcIixcclxuICAgICAgNzogXCIxMTksXCIsXHJcbiAgICAgIDg6IFwiMTM2LFwiLFxyXG4gICAgICA5OiBcIjE1MyxcIixcclxuICAgICAgYTogXCIxNzAsXCIsXHJcbiAgICAgIEE6IFwiMTcwLFwiLFxyXG4gICAgICBiOiBcIjE4NyxcIixcclxuICAgICAgQjogXCIxODcsXCIsXHJcbiAgICAgIGM6IFwiMjA0LFwiLFxyXG4gICAgICBDOiBcIjIwNCxcIixcclxuICAgICAgZDogXCIyMjEsXCIsXHJcbiAgICAgIEQ6IFwiMjIxLFwiLFxyXG4gICAgICBlOiBcIjIzOCxcIixcclxuICAgICAgRTogXCIyMzgsXCIsXHJcbiAgICAgIGY6IFwiMjU1LFwiLFxyXG4gICAgICBGOiBcIjI1NSxcIlxyXG4gICAgfSxcclxuICAgIE9wcm90byxcclxuICAgIFRwcm90byxcclxuICAgIFRDcHJvdG8sXHJcbiAgICBNcHJvdG8sXHJcbiAgICBWcHJvdG8sXHJcbiAgICBUU3Byb3RvLFxyXG4gICAgVENWcHJvdG8sXHJcbiAgICBkb2MgPSBkb2N1bWVudCxcclxuICAgIG9jYW52YXMsXHJcbiAgICBoYW5kbGVycyA9IHt9O1xyXG4gIGZvciAoaSA9IDA7IGkgPCAyNTY7ICsraSkge1xyXG4gICAgaiA9IGkudG9TdHJpbmcoMTYpO1xyXG4gICAgaWYgKGkgPCAxNikgaiA9IFwiMFwiICsgajtcclxuICAgIGhleGxvb2t1cDJbal0gPSBoZXhsb29rdXAyW2oudG9VcHBlckNhc2UoKV0gPSBpLnRvU3RyaW5nKCkgKyBcIixcIjtcclxuICB9XHJcbiAgZnVuY3Rpb24gRGVmaW5lZChkKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIGQgIT0gXCJ1bmRlZmluZWRcIjtcclxuICB9XHJcbiAgZnVuY3Rpb24gSXNPYmplY3Qobykge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBvID09IFwib2JqZWN0XCIgJiYgbyAhPSBudWxsO1xyXG4gIH1cclxuICBmdW5jdGlvbiBDbGFtcCh2LCBtbiwgbXgpIHtcclxuICAgIHJldHVybiBpc05hTih2KSA/IG14IDogbWluKG14LCBtYXgobW4sIHYpKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gTm9wKCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBmdW5jdGlvbiBUaW1lTm93KCkge1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKCkudmFsdWVPZigpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBTb3J0TGlzdChsLCBmKSB7XHJcbiAgICB2YXIgbmwgPSBbXSxcclxuICAgICAgdGwgPSBsLmxlbmd0aCxcclxuICAgICAgaTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCB0bDsgKytpKSBubC5wdXNoKGxbaV0pO1xyXG4gICAgbmwuc29ydChmKTtcclxuICAgIHJldHVybiBubDtcclxuICB9XHJcbiAgZnVuY3Rpb24gU2h1ZmZsZShhKSB7XHJcbiAgICB2YXIgaSA9IGEubGVuZ3RoIC0gMSxcclxuICAgICAgdCxcclxuICAgICAgcDtcclxuICAgIHdoaWxlIChpKSB7XHJcbiAgICAgIHAgPSB+fihNYXRoLnJhbmRvbSgpICogaSk7XHJcbiAgICAgIHQgPSBhW2ldO1xyXG4gICAgICBhW2ldID0gYVtwXTtcclxuICAgICAgYVtwXSA9IHQ7XHJcbiAgICAgIC0taTtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gVmVjdG9yKHgsIHksIHopIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy56ID0gejtcclxuICB9XHJcbiAgVnByb3RvID0gVmVjdG9yLnByb3RvdHlwZTtcclxuICBWcHJvdG8ubGVuZ3RoID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkgKyB0aGlzLnogKiB0aGlzLnopO1xyXG4gIH07XHJcbiAgVnByb3RvLmRvdCA9IGZ1bmN0aW9uKHYpIHtcclxuICAgIHJldHVybiB0aGlzLnggKiB2LnggKyB0aGlzLnkgKiB2LnkgKyB0aGlzLnogKiB2Lno7XHJcbiAgfTtcclxuICBWcHJvdG8uY3Jvc3MgPSBmdW5jdGlvbih2KSB7XHJcbiAgICB2YXIgeCA9IHRoaXMueSAqIHYueiAtIHRoaXMueiAqIHYueSxcclxuICAgICAgeSA9IHRoaXMueiAqIHYueCAtIHRoaXMueCAqIHYueixcclxuICAgICAgeiA9IHRoaXMueCAqIHYueSAtIHRoaXMueSAqIHYueDtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yKHgsIHksIHopO1xyXG4gIH07XHJcbiAgVnByb3RvLmFuZ2xlID0gZnVuY3Rpb24odikge1xyXG4gICAgdmFyIGRvdCA9IHRoaXMuZG90KHYpLFxyXG4gICAgICBhYztcclxuICAgIGlmIChkb3QgPT0gMCkgcmV0dXJuIE1hdGguUEkgLyAyLjA7XHJcbiAgICBhYyA9IGRvdCAvICh0aGlzLmxlbmd0aCgpICogdi5sZW5ndGgoKSk7XHJcbiAgICBpZiAoYWMgPj0gMSkgcmV0dXJuIDA7XHJcbiAgICBpZiAoYWMgPD0gLTEpIHJldHVybiBNYXRoLlBJO1xyXG4gICAgcmV0dXJuIE1hdGguYWNvcyhhYyk7XHJcbiAgfTtcclxuICBWcHJvdG8udW5pdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGwgPSB0aGlzLmxlbmd0aCgpO1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy54IC8gbCwgdGhpcy55IC8gbCwgdGhpcy56IC8gbCk7XHJcbiAgfTtcclxuICBmdW5jdGlvbiBNYWtlVmVjdG9yKGxnLCBsdCkge1xyXG4gICAgbHQgPSAobHQgKiBNYXRoLlBJKSAvIDE4MDtcclxuICAgIGxnID0gKGxnICogTWF0aC5QSSkgLyAxODA7XHJcbiAgICB2YXIgeCA9IHNpbihsZykgKiBjb3MobHQpLFxyXG4gICAgICB5ID0gLXNpbihsdCksXHJcbiAgICAgIHogPSAtY29zKGxnKSAqIGNvcyhsdCk7XHJcbiAgICByZXR1cm4gbmV3IFZlY3Rvcih4LCB5LCB6KTtcclxuICB9XHJcbiAgZnVuY3Rpb24gTWF0cml4KGEpIHtcclxuICAgIHRoaXNbMV0gPSB7IDE6IGFbMF0sIDI6IGFbMV0sIDM6IGFbMl0gfTtcclxuICAgIHRoaXNbMl0gPSB7IDE6IGFbM10sIDI6IGFbNF0sIDM6IGFbNV0gfTtcclxuICAgIHRoaXNbM10gPSB7IDE6IGFbNl0sIDI6IGFbN10sIDM6IGFbOF0gfTtcclxuICB9XHJcbiAgTXByb3RvID0gTWF0cml4LnByb3RvdHlwZTtcclxuICBNYXRyaXguSWRlbnRpdHkgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBuZXcgTWF0cml4KFsxLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAxXSk7XHJcbiAgfTtcclxuICBNYXRyaXguUm90YXRpb24gPSBmdW5jdGlvbihhbmdsZSwgdSkge1xyXG4gICAgdmFyIHNpbmEgPSBzaW4oYW5nbGUpLFxyXG4gICAgICBjb3NhID0gY29zKGFuZ2xlKSxcclxuICAgICAgbWNvcyA9IDEgLSBjb3NhO1xyXG4gICAgcmV0dXJuIG5ldyBNYXRyaXgoW1xyXG4gICAgICBjb3NhICsgcG93KHUueCwgMikgKiBtY29zLFxyXG4gICAgICB1LnggKiB1LnkgKiBtY29zIC0gdS56ICogc2luYSxcclxuICAgICAgdS54ICogdS56ICogbWNvcyArIHUueSAqIHNpbmEsXHJcbiAgICAgIHUueSAqIHUueCAqIG1jb3MgKyB1LnogKiBzaW5hLFxyXG4gICAgICBjb3NhICsgcG93KHUueSwgMikgKiBtY29zLFxyXG4gICAgICB1LnkgKiB1LnogKiBtY29zIC0gdS54ICogc2luYSxcclxuICAgICAgdS56ICogdS54ICogbWNvcyAtIHUueSAqIHNpbmEsXHJcbiAgICAgIHUueiAqIHUueSAqIG1jb3MgKyB1LnggKiBzaW5hLFxyXG4gICAgICBjb3NhICsgcG93KHUueiwgMikgKiBtY29zXHJcbiAgICBdKTtcclxuICB9O1xyXG4gIE1wcm90by5tdWwgPSBmdW5jdGlvbihtKSB7XHJcbiAgICB2YXIgYSA9IFtdLFxyXG4gICAgICBpLFxyXG4gICAgICBqLFxyXG4gICAgICBtbWF0cml4ID0gbS54Zm9ybSA/IDEgOiAwO1xyXG4gICAgZm9yIChpID0gMTsgaSA8PSAzOyArK2kpXHJcbiAgICAgIGZvciAoaiA9IDE7IGogPD0gMzsgKytqKSB7XHJcbiAgICAgICAgaWYgKG1tYXRyaXgpXHJcbiAgICAgICAgICBhLnB1c2goXHJcbiAgICAgICAgICAgIHRoaXNbaV1bMV0gKiBtWzFdW2pdICsgdGhpc1tpXVsyXSAqIG1bMl1bal0gKyB0aGlzW2ldWzNdICogbVszXVtqXVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICBlbHNlIGEucHVzaCh0aGlzW2ldW2pdICogbSk7XHJcbiAgICAgIH1cclxuICAgIHJldHVybiBuZXcgTWF0cml4KGEpO1xyXG4gIH07XHJcbiAgTXByb3RvLnhmb3JtID0gZnVuY3Rpb24ocCkge1xyXG4gICAgdmFyIGEgPSB7fSxcclxuICAgICAgeCA9IHAueCxcclxuICAgICAgeSA9IHAueSxcclxuICAgICAgeiA9IHAuejtcclxuICAgIGEueCA9IHggKiB0aGlzWzFdWzFdICsgeSAqIHRoaXNbMl1bMV0gKyB6ICogdGhpc1szXVsxXTtcclxuICAgIGEueSA9IHggKiB0aGlzWzFdWzJdICsgeSAqIHRoaXNbMl1bMl0gKyB6ICogdGhpc1szXVsyXTtcclxuICAgIGEueiA9IHggKiB0aGlzWzFdWzNdICsgeSAqIHRoaXNbMl1bM10gKyB6ICogdGhpc1szXVszXTtcclxuICAgIHJldHVybiBhO1xyXG4gIH07XHJcbiAgZnVuY3Rpb24gUG9pbnRzT25TcGhlcmUobiwgeHIsIHlyLCB6cikge1xyXG4gICAgdmFyIGksXHJcbiAgICAgIHksXHJcbiAgICAgIHIsXHJcbiAgICAgIHBoaSxcclxuICAgICAgcHRzID0gW10sXHJcbiAgICAgIGluYyA9IE1hdGguUEkgKiAoMyAtIHNxcnQoNSkpLFxyXG4gICAgICBvZmYgPSAyIC8gbjtcclxuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcclxuICAgICAgeSA9IGkgKiBvZmYgLSAxICsgb2ZmIC8gMjtcclxuICAgICAgciA9IHNxcnQoMSAtIHkgKiB5KTtcclxuICAgICAgcGhpID0gaSAqIGluYztcclxuICAgICAgcHRzLnB1c2goW2NvcyhwaGkpICogciAqIHhyLCB5ICogeXIsIHNpbihwaGkpICogciAqIHpyXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHRzO1xyXG4gIH1cclxuICBmdW5jdGlvbiBDeWxpbmRlcihuLCBvLCB4ciwgeXIsIHpyKSB7XHJcbiAgICB2YXIgcGhpLFxyXG4gICAgICBwdHMgPSBbXSxcclxuICAgICAgaW5jID0gTWF0aC5QSSAqICgzIC0gc3FydCg1KSksXHJcbiAgICAgIG9mZiA9IDIgLyBuLFxyXG4gICAgICBpLFxyXG4gICAgICBqLFxyXG4gICAgICBrLFxyXG4gICAgICBsO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xyXG4gICAgICBqID0gaSAqIG9mZiAtIDEgKyBvZmYgLyAyO1xyXG4gICAgICBwaGkgPSBpICogaW5jO1xyXG4gICAgICBrID0gY29zKHBoaSk7XHJcbiAgICAgIGwgPSBzaW4ocGhpKTtcclxuICAgICAgcHRzLnB1c2gobyA/IFtqICogeHIsIGsgKiB5ciwgbCAqIHpyXSA6IFtrICogeHIsIGogKiB5ciwgbCAqIHpyXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHRzO1xyXG4gIH1cclxuICBmdW5jdGlvbiBSaW5nKG8sIG4sIHhyLCB5ciwgenIsIGopIHtcclxuICAgIHZhciBwaGksXHJcbiAgICAgIHB0cyA9IFtdLFxyXG4gICAgICBpbmMgPSAoTWF0aC5QSSAqIDIpIC8gbixcclxuICAgICAgaSxcclxuICAgICAgayxcclxuICAgICAgbDtcclxuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcclxuICAgICAgcGhpID0gaSAqIGluYztcclxuICAgICAgayA9IGNvcyhwaGkpO1xyXG4gICAgICBsID0gc2luKHBoaSk7XHJcbiAgICAgIHB0cy5wdXNoKG8gPyBbaiAqIHhyLCBrICogeXIsIGwgKiB6cl0gOiBbayAqIHhyLCBqICogeXIsIGwgKiB6cl0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHB0cztcclxuICB9XHJcbiAgZnVuY3Rpb24gUG9pbnRzT25DeWxpbmRlclYobiwgeHIsIHlyLCB6cikge1xyXG4gICAgcmV0dXJuIEN5bGluZGVyKG4sIDAsIHhyLCB5ciwgenIpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBQb2ludHNPbkN5bGluZGVySChuLCB4ciwgeXIsIHpyKSB7XHJcbiAgICByZXR1cm4gQ3lsaW5kZXIobiwgMSwgeHIsIHlyLCB6cik7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIFBvaW50c09uUmluZ1YobiwgeHIsIHlyLCB6ciwgb2Zmc2V0KSB7XHJcbiAgICBvZmZzZXQgPSBpc05hTihvZmZzZXQpID8gMCA6IG9mZnNldCAqIDE7XHJcbiAgICByZXR1cm4gUmluZygwLCBuLCB4ciwgeXIsIHpyLCBvZmZzZXQpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBQb2ludHNPblJpbmdIKG4sIHhyLCB5ciwgenIsIG9mZnNldCkge1xyXG4gICAgb2Zmc2V0ID0gaXNOYU4ob2Zmc2V0KSA/IDAgOiBvZmZzZXQgKiAxO1xyXG4gICAgcmV0dXJuIFJpbmcoMSwgbiwgeHIsIHlyLCB6ciwgb2Zmc2V0KTtcclxuICB9XHJcbiAgZnVuY3Rpb24gQ2VudHJlSW1hZ2UodCkge1xyXG4gICAgdmFyIGkgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGkub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBkeCA9IGkud2lkdGggLyAyLFxyXG4gICAgICAgIGR5ID0gaS5oZWlnaHQgLyAyO1xyXG4gICAgICB0LmNlbnRyZUZ1bmMgPSBmdW5jdGlvbihjLCB3LCBoLCBjeCwgY3kpIHtcclxuICAgICAgICBjLnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICBjLmdsb2JhbEFscGhhID0gMTtcclxuICAgICAgICBjLmRyYXdJbWFnZShpLCBjeCAtIGR4LCBjeSAtIGR5KTtcclxuICAgICAgfTtcclxuICAgIH07XHJcbiAgICBpLnNyYyA9IHQuY2VudHJlSW1hZ2U7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIFNldEFscGhhKGMsIGEpIHtcclxuICAgIHZhciBkID0gYyxcclxuICAgICAgcDEsXHJcbiAgICAgIHAyLFxyXG4gICAgICBhZSA9IChhICogMSkudG9QcmVjaXNpb24oMykgKyBcIilcIjtcclxuICAgIGlmIChjWzBdID09PSBcIiNcIikge1xyXG4gICAgICBpZiAoIWhleGxvb2t1cDNbY10pXHJcbiAgICAgICAgaWYgKGMubGVuZ3RoID09PSA0KVxyXG4gICAgICAgICAgaGV4bG9va3VwM1tjXSA9XHJcbiAgICAgICAgICAgIFwicmdiYShcIiArIGhleGxvb2t1cDFbY1sxXV0gKyBoZXhsb29rdXAxW2NbMl1dICsgaGV4bG9va3VwMVtjWzNdXTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICBoZXhsb29rdXAzW2NdID1cclxuICAgICAgICAgICAgXCJyZ2JhKFwiICtcclxuICAgICAgICAgICAgaGV4bG9va3VwMltjLnN1YnN0cigxLCAyKV0gK1xyXG4gICAgICAgICAgICBoZXhsb29rdXAyW2Muc3Vic3RyKDMsIDIpXSArXHJcbiAgICAgICAgICAgIGhleGxvb2t1cDJbYy5zdWJzdHIoNSwgMildO1xyXG4gICAgICBkID0gaGV4bG9va3VwM1tjXSArIGFlO1xyXG4gICAgfSBlbHNlIGlmIChjLnN1YnN0cigwLCA0KSA9PT0gXCJyZ2IoXCIgfHwgYy5zdWJzdHIoMCwgNCkgPT09IFwiaHNsKFwiKSB7XHJcbiAgICAgIGQgPSBjLnJlcGxhY2UoXCIoXCIsIFwiYShcIikucmVwbGFjZShcIilcIiwgXCIsXCIgKyBhZSk7XHJcbiAgICB9IGVsc2UgaWYgKGMuc3Vic3RyKDAsIDUpID09PSBcInJnYmEoXCIgfHwgYy5zdWJzdHIoMCwgNSkgPT09IFwiaHNsYShcIikge1xyXG4gICAgICAocDEgPSBjLmxhc3RJbmRleE9mKFwiLFwiKSArIDEpLCAocDIgPSBjLmluZGV4T2YoXCIpXCIpKTtcclxuICAgICAgYSAqPSBwYXJzZUZsb2F0KGMuc3Vic3RyaW5nKHAxLCBwMikpO1xyXG4gICAgICBkID0gYy5zdWJzdHIoMCwgcDEpICsgYS50b1ByZWNpc2lvbigzKSArIFwiKVwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGQ7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIE5ld0NhbnZhcyh3LCBoKSB7XHJcbiAgICAvLyBpZiB1c2luZyBleGNhbnZhcywgZ2l2ZSB1cCBub3dcclxuICAgIGlmICh3aW5kb3cuR192bWxDYW52YXNNYW5hZ2VyKSByZXR1cm4gbnVsbDtcclxuICAgIHZhciBjID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICBjLndpZHRoID0gdztcclxuICAgIGMuaGVpZ2h0ID0gaDtcclxuICAgIHJldHVybiBjO1xyXG4gIH1cclxuICAvLyBJIHRoaW5rIGFsbCBicm93c2VycyBwYXNzIHRoaXMgdGVzdCBub3cuLi5cclxuICBmdW5jdGlvbiBTaGFkb3dBbHBoYUJyb2tlbigpIHtcclxuICAgIHZhciBjdiA9IE5ld0NhbnZhcygzLCAzKSxcclxuICAgICAgYyxcclxuICAgICAgaTtcclxuICAgIGlmICghY3YpIHJldHVybiBmYWxzZTtcclxuICAgIGMgPSBjdi5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICBjLnN0cm9rZVN0eWxlID0gXCIjMDAwXCI7XHJcbiAgICBjLnNoYWRvd0NvbG9yID0gXCIjZmZmXCI7XHJcbiAgICBjLnNoYWRvd0JsdXIgPSAzO1xyXG4gICAgYy5nbG9iYWxBbHBoYSA9IDA7XHJcbiAgICBjLnN0cm9rZVJlY3QoMiwgMiwgMiwgMik7XHJcbiAgICBjLmdsb2JhbEFscGhhID0gMTtcclxuICAgIGkgPSBjLmdldEltYWdlRGF0YSgyLCAyLCAxLCAxKTtcclxuICAgIGN2ID0gbnVsbDtcclxuICAgIHJldHVybiBpLmRhdGFbMF0gPiAwO1xyXG4gIH1cclxuICBmdW5jdGlvbiBTZXRHcmFkaWVudChjLCBsLCBvLCBnKSB7XHJcbiAgICB2YXIgZ2QgPSBjLmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIGwsIDApLFxyXG4gICAgICBpO1xyXG4gICAgZm9yIChpIGluIGcpIGdkLmFkZENvbG9yU3RvcCgxIC0gaSwgZ1tpXSk7XHJcbiAgICBjLmZpbGxTdHlsZSA9IGdkO1xyXG4gICAgYy5maWxsUmVjdCgwLCBvLCBsLCAxKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gRmluZEdyYWRpZW50Q29sb3VyKHRjLCBwLCByKSB7XHJcbiAgICB2YXIgbCA9IDEwMjQsXHJcbiAgICAgIGggPSAxLFxyXG4gICAgICBnbCA9IHRjLndlaWdodEdyYWRpZW50LFxyXG4gICAgICBjdixcclxuICAgICAgYyxcclxuICAgICAgaSxcclxuICAgICAgZDtcclxuICAgIGlmICh0Yy5nQ2FudmFzKSB7XHJcbiAgICAgIGMgPSB0Yy5nQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgaCA9IHRjLmdDYW52YXMuaGVpZ2h0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKElzT2JqZWN0KGdsWzBdKSkgaCA9IGdsLmxlbmd0aDtcclxuICAgICAgZWxzZSBnbCA9IFtnbF07XHJcbiAgICAgIHRjLmdDYW52YXMgPSBjdiA9IE5ld0NhbnZhcyhsLCBoKTtcclxuICAgICAgaWYgKCFjdikgcmV0dXJuIG51bGw7XHJcbiAgICAgIGMgPSBjdi5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBoOyArK2kpIFNldEdyYWRpZW50KGMsIGwsIGksIGdsW2ldKTtcclxuICAgIH1cclxuICAgIHIgPSBtYXgobWluKHIgfHwgMCwgaCAtIDEpLCAwKTtcclxuICAgIGQgPSBjLmdldEltYWdlRGF0YSh+figobCAtIDEpICogcCksIHIsIDEsIDEpLmRhdGE7XHJcbiAgICByZXR1cm4gXCJyZ2JhKFwiICsgZFswXSArIFwiLFwiICsgZFsxXSArIFwiLFwiICsgZFsyXSArIFwiLFwiICsgZFszXSAvIDI1NSArIFwiKVwiO1xyXG4gIH1cclxuICBmdW5jdGlvbiBUZXh0U2V0KFxyXG4gICAgY3R4dCxcclxuICAgIGZvbnQsXHJcbiAgICBjb2xvdXIsXHJcbiAgICBzdHJpbmdzLFxyXG4gICAgcGFkeCxcclxuICAgIHBhZHksXHJcbiAgICBzaGFkb3dDb2xvdXIsXHJcbiAgICBzaGFkb3dCbHVyLFxyXG4gICAgc2hhZG93T2Zmc2V0cyxcclxuICAgIG1heFdpZHRoLFxyXG4gICAgd2lkdGhzLFxyXG4gICAgYWxpZ25cclxuICApIHtcclxuICAgIHZhciB4byA9XHJcbiAgICAgICAgcGFkeCArXHJcbiAgICAgICAgKHNoYWRvd0JsdXIgfHwgMCkgK1xyXG4gICAgICAgIChzaGFkb3dPZmZzZXRzLmxlbmd0aCAmJiBzaGFkb3dPZmZzZXRzWzBdIDwgMFxyXG4gICAgICAgICAgPyBhYnMoc2hhZG93T2Zmc2V0c1swXSlcclxuICAgICAgICAgIDogMCksXHJcbiAgICAgIHlvID1cclxuICAgICAgICBwYWR5ICtcclxuICAgICAgICAoc2hhZG93Qmx1ciB8fCAwKSArXHJcbiAgICAgICAgKHNoYWRvd09mZnNldHMubGVuZ3RoICYmIHNoYWRvd09mZnNldHNbMV0gPCAwXHJcbiAgICAgICAgICA/IGFicyhzaGFkb3dPZmZzZXRzWzFdKVxyXG4gICAgICAgICAgOiAwKSxcclxuICAgICAgaSxcclxuICAgICAgeGM7XHJcbiAgICBjdHh0LmZvbnQgPSBmb250O1xyXG4gICAgY3R4dC50ZXh0QmFzZWxpbmUgPSBcInRvcFwiO1xyXG4gICAgY3R4dC5maWxsU3R5bGUgPSBjb2xvdXI7XHJcbiAgICBzaGFkb3dDb2xvdXIgJiYgKGN0eHQuc2hhZG93Q29sb3IgPSBzaGFkb3dDb2xvdXIpO1xyXG4gICAgc2hhZG93Qmx1ciAmJiAoY3R4dC5zaGFkb3dCbHVyID0gc2hhZG93Qmx1cik7XHJcbiAgICBzaGFkb3dPZmZzZXRzLmxlbmd0aCAmJlxyXG4gICAgICAoKGN0eHQuc2hhZG93T2Zmc2V0WCA9IHNoYWRvd09mZnNldHNbMF0pLFxyXG4gICAgICAoY3R4dC5zaGFkb3dPZmZzZXRZID0gc2hhZG93T2Zmc2V0c1sxXSkpO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IHN0cmluZ3MubGVuZ3RoOyArK2kpIHtcclxuICAgICAgeGMgPSAwO1xyXG4gICAgICBpZiAod2lkdGhzKSB7XHJcbiAgICAgICAgaWYgKFwicmlnaHRcIiA9PSBhbGlnbikge1xyXG4gICAgICAgICAgeGMgPSBtYXhXaWR0aCAtIHdpZHRoc1tpXTtcclxuICAgICAgICB9IGVsc2UgaWYgKFwiY2VudHJlXCIgPT0gYWxpZ24pIHtcclxuICAgICAgICAgIHhjID0gKG1heFdpZHRoIC0gd2lkdGhzW2ldKSAvIDI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGN0eHQuZmlsbFRleHQoc3RyaW5nc1tpXSwgeG8gKyB4YywgeW8pO1xyXG4gICAgICB5byArPSBwYXJzZUludChmb250KTtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gUlJlY3QoYywgeCwgeSwgdywgaCwgciwgcykge1xyXG4gICAgaWYgKHIpIHtcclxuICAgICAgYy5iZWdpblBhdGgoKTtcclxuICAgICAgYy5tb3ZlVG8oeCwgeSArIGggLSByKTtcclxuICAgICAgYy5hcmNUbyh4LCB5LCB4ICsgciwgeSwgcik7XHJcbiAgICAgIGMuYXJjVG8oeCArIHcsIHksIHggKyB3LCB5ICsgciwgcik7XHJcbiAgICAgIGMuYXJjVG8oeCArIHcsIHkgKyBoLCB4ICsgdyAtIHIsIHkgKyBoLCByKTtcclxuICAgICAgYy5hcmNUbyh4LCB5ICsgaCwgeCwgeSArIGggLSByLCByKTtcclxuICAgICAgYy5jbG9zZVBhdGgoKTtcclxuICAgICAgY1tzID8gXCJzdHJva2VcIiA6IFwiZmlsbFwiXSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY1tzID8gXCJzdHJva2VSZWN0XCIgOiBcImZpbGxSZWN0XCJdKHgsIHksIHcsIGgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBUZXh0Q2FudmFzKFxyXG4gICAgc3RyaW5ncyxcclxuICAgIGZvbnQsXHJcbiAgICB3LFxyXG4gICAgaCxcclxuICAgIG1heFdpZHRoLFxyXG4gICAgc3RyaW5nV2lkdGhzLFxyXG4gICAgYWxpZ24sXHJcbiAgICB2YWxpZ24sXHJcbiAgICBzY2FsZVxyXG4gICkge1xyXG4gICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcclxuICAgIHRoaXMuZm9udCA9IGZvbnQ7XHJcbiAgICB0aGlzLndpZHRoID0gdztcclxuICAgIHRoaXMuaGVpZ2h0ID0gaDtcclxuICAgIHRoaXMubWF4V2lkdGggPSBtYXhXaWR0aDtcclxuICAgIHRoaXMuc3RyaW5nV2lkdGhzID0gc3RyaW5nV2lkdGhzO1xyXG4gICAgdGhpcy5hbGlnbiA9IGFsaWduO1xyXG4gICAgdGhpcy52YWxpZ24gPSB2YWxpZ247XHJcbiAgICB0aGlzLnNjYWxlID0gc2NhbGU7XHJcbiAgfVxyXG4gIFRDVnByb3RvID0gVGV4dENhbnZhcy5wcm90b3R5cGU7XHJcbiAgVENWcHJvdG8uU2V0SW1hZ2UgPSBmdW5jdGlvbihcclxuICAgIGltYWdlLFxyXG4gICAgdyxcclxuICAgIGgsXHJcbiAgICBwb3NpdGlvbixcclxuICAgIHBhZGRpbmcsXHJcbiAgICBhbGlnbixcclxuICAgIHZhbGlnbixcclxuICAgIHNjYWxlXHJcbiAgKSB7XHJcbiAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcbiAgICB0aGlzLml3aWR0aCA9IHcgKiB0aGlzLnNjYWxlO1xyXG4gICAgdGhpcy5paGVpZ2h0ID0gaCAqIHRoaXMuc2NhbGU7XHJcbiAgICB0aGlzLmlwb3MgPSBwb3NpdGlvbjtcclxuICAgIHRoaXMuaXBhZCA9IHBhZGRpbmcgKiB0aGlzLnNjYWxlO1xyXG4gICAgdGhpcy5pc2NhbGUgPSBzY2FsZTtcclxuICAgIHRoaXMuaWFsaWduID0gYWxpZ247XHJcbiAgICB0aGlzLml2YWxpZ24gPSB2YWxpZ247XHJcbiAgfTtcclxuICBUQ1Zwcm90by5BbGlnbiA9IGZ1bmN0aW9uKHNpemUsIHNwYWNlLCBhKSB7XHJcbiAgICB2YXIgcG9zID0gMDtcclxuICAgIGlmIChhID09IFwicmlnaHRcIiB8fCBhID09IFwiYm90dG9tXCIpIHBvcyA9IHNwYWNlIC0gc2l6ZTtcclxuICAgIGVsc2UgaWYgKGEgIT0gXCJsZWZ0XCIgJiYgYSAhPSBcInRvcFwiKSBwb3MgPSAoc3BhY2UgLSBzaXplKSAvIDI7XHJcbiAgICByZXR1cm4gcG9zO1xyXG4gIH07XHJcbiAgVENWcHJvdG8uQ3JlYXRlID0gZnVuY3Rpb24oXHJcbiAgICBjb2xvdXIsXHJcbiAgICBiZ0NvbG91cixcclxuICAgIGJnT3V0bGluZSxcclxuICAgIGJnT3V0bGluZVRoaWNrbmVzcyxcclxuICAgIHNoYWRvd0NvbG91cixcclxuICAgIHNoYWRvd0JsdXIsXHJcbiAgICBzaGFkb3dPZmZzZXRzLFxyXG4gICAgcGFkZGluZyxcclxuICAgIHJhZGl1c1xyXG4gICkge1xyXG4gICAgdmFyIGN2LFxyXG4gICAgICBjdyxcclxuICAgICAgY2gsXHJcbiAgICAgIGMsXHJcbiAgICAgIHgxLFxyXG4gICAgICB4MixcclxuICAgICAgeTEsXHJcbiAgICAgIHkyLFxyXG4gICAgICBvZmZ4LFxyXG4gICAgICBvZmZ5LFxyXG4gICAgICBpeCxcclxuICAgICAgaXksXHJcbiAgICAgIGl3LFxyXG4gICAgICBpaCxcclxuICAgICAgc294ID0gYWJzKHNoYWRvd09mZnNldHNbMF0pLFxyXG4gICAgICBzb3kgPSBhYnMoc2hhZG93T2Zmc2V0c1sxXSksXHJcbiAgICAgIHNoYWRvd2N2LFxyXG4gICAgICBzaGFkb3djO1xyXG4gICAgcGFkZGluZyA9IG1heChwYWRkaW5nLCBzb3ggKyBzaGFkb3dCbHVyLCBzb3kgKyBzaGFkb3dCbHVyKTtcclxuICAgIHgxID0gMiAqIChwYWRkaW5nICsgYmdPdXRsaW5lVGhpY2tuZXNzKTtcclxuICAgIHkxID0gMiAqIChwYWRkaW5nICsgYmdPdXRsaW5lVGhpY2tuZXNzKTtcclxuICAgIGN3ID0gdGhpcy53aWR0aCArIHgxO1xyXG4gICAgY2ggPSB0aGlzLmhlaWdodCArIHkxO1xyXG4gICAgb2ZmeCA9IG9mZnkgPSBwYWRkaW5nICsgYmdPdXRsaW5lVGhpY2tuZXNzO1xyXG5cclxuICAgIGlmICh0aGlzLmltYWdlKSB7XHJcbiAgICAgIGl4ID0gaXkgPSBwYWRkaW5nICsgYmdPdXRsaW5lVGhpY2tuZXNzO1xyXG4gICAgICBpdyA9IHRoaXMuaXdpZHRoO1xyXG4gICAgICBpaCA9IHRoaXMuaWhlaWdodDtcclxuICAgICAgaWYgKHRoaXMuaXBvcyA9PSBcInRvcFwiIHx8IHRoaXMuaXBvcyA9PSBcImJvdHRvbVwiKSB7XHJcbiAgICAgICAgaWYgKGl3IDwgdGhpcy53aWR0aCkgaXggKz0gdGhpcy5BbGlnbihpdywgdGhpcy53aWR0aCwgdGhpcy5pYWxpZ24pO1xyXG4gICAgICAgIGVsc2Ugb2ZmeCArPSB0aGlzLkFsaWduKHRoaXMud2lkdGgsIGl3LCB0aGlzLmFsaWduKTtcclxuICAgICAgICBpZiAodGhpcy5pcG9zID09IFwidG9wXCIpIG9mZnkgKz0gaWggKyB0aGlzLmlwYWQ7XHJcbiAgICAgICAgZWxzZSBpeSArPSB0aGlzLmhlaWdodCArIHRoaXMuaXBhZDtcclxuICAgICAgICBjdyA9IG1heChjdywgaXcgKyB4MSk7XHJcbiAgICAgICAgY2ggKz0gaWggKyB0aGlzLmlwYWQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGloIDwgdGhpcy5oZWlnaHQpIGl5ICs9IHRoaXMuQWxpZ24oaWgsIHRoaXMuaGVpZ2h0LCB0aGlzLml2YWxpZ24pO1xyXG4gICAgICAgIGVsc2Ugb2ZmeSArPSB0aGlzLkFsaWduKHRoaXMuaGVpZ2h0LCBpaCwgdGhpcy52YWxpZ24pO1xyXG4gICAgICAgIGlmICh0aGlzLmlwb3MgPT0gXCJyaWdodFwiKSBpeCArPSB0aGlzLndpZHRoICsgdGhpcy5pcGFkO1xyXG4gICAgICAgIGVsc2Ugb2ZmeCArPSBpdyArIHRoaXMuaXBhZDtcclxuICAgICAgICBjdyArPSBpdyArIHRoaXMuaXBhZDtcclxuICAgICAgICBjaCA9IG1heChjaCwgaWggKyB5MSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjdiA9IE5ld0NhbnZhcyhjdywgY2gpO1xyXG4gICAgaWYgKCFjdikgcmV0dXJuIG51bGw7XHJcbiAgICB4MSA9IHkxID0gYmdPdXRsaW5lVGhpY2tuZXNzIC8gMjtcclxuICAgIHgyID0gY3cgLSBiZ091dGxpbmVUaGlja25lc3M7XHJcbiAgICB5MiA9IGNoIC0gYmdPdXRsaW5lVGhpY2tuZXNzO1xyXG4gICAgYyA9IGN2LmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIGlmIChiZ0NvbG91cikge1xyXG4gICAgICBjLmZpbGxTdHlsZSA9IGJnQ29sb3VyO1xyXG4gICAgICBSUmVjdChjLCB4MSwgeTEsIHgyLCB5MiwgcmFkaXVzKTtcclxuICAgIH1cclxuICAgIGlmIChiZ091dGxpbmVUaGlja25lc3MpIHtcclxuICAgICAgYy5zdHJva2VTdHlsZSA9IGJnT3V0bGluZTtcclxuICAgICAgYy5saW5lV2lkdGggPSBiZ091dGxpbmVUaGlja25lc3M7XHJcbiAgICAgIFJSZWN0KGMsIHgxLCB5MSwgeDIsIHkyLCByYWRpdXMsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNoYWRvd0JsdXIgfHwgc294IHx8IHNveSkge1xyXG4gICAgICAvLyB1c2UgYSB0cmFuc3BhcmVudCBjYW52YXMgdG8gZHJhdyBvblxyXG4gICAgICBzaGFkb3djdiA9IE5ld0NhbnZhcyhjdywgY2gpO1xyXG4gICAgICBpZiAoc2hhZG93Y3YpIHtcclxuICAgICAgICBzaGFkb3djID0gYztcclxuICAgICAgICBjID0gc2hhZG93Y3YuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZG9uJ3QgdXNlIFRleHRTZXQgc2hhZG93IHN1cHBvcnQgYmVjYXVzZSBpdCBhZGRzIHNwYWNlIGZvciBzaGFkb3dcclxuICAgIFRleHRTZXQoXHJcbiAgICAgIGMsXHJcbiAgICAgIHRoaXMuZm9udCxcclxuICAgICAgY29sb3VyLFxyXG4gICAgICB0aGlzLnN0cmluZ3MsXHJcbiAgICAgIG9mZngsXHJcbiAgICAgIG9mZnksXHJcbiAgICAgIDAsXHJcbiAgICAgIDAsXHJcbiAgICAgIFtdLFxyXG4gICAgICB0aGlzLm1heFdpZHRoLFxyXG4gICAgICB0aGlzLnN0cmluZ1dpZHRocyxcclxuICAgICAgdGhpcy5hbGlnblxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAodGhpcy5pbWFnZSkgYy5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgaXgsIGl5LCBpdywgaWgpO1xyXG5cclxuICAgIGlmIChzaGFkb3djKSB7XHJcbiAgICAgIC8vIGRyYXcgdGhlIHRleHQgYW5kIGltYWdlIHdpdGggdGhlIGFkZGVkIHNoYWRvd1xyXG4gICAgICBjID0gc2hhZG93YztcclxuICAgICAgc2hhZG93Q29sb3VyICYmIChjLnNoYWRvd0NvbG9yID0gc2hhZG93Q29sb3VyKTtcclxuICAgICAgc2hhZG93Qmx1ciAmJiAoYy5zaGFkb3dCbHVyID0gc2hhZG93Qmx1cik7XHJcbiAgICAgIGMuc2hhZG93T2Zmc2V0WCA9IHNoYWRvd09mZnNldHNbMF07XHJcbiAgICAgIGMuc2hhZG93T2Zmc2V0WSA9IHNoYWRvd09mZnNldHNbMV07XHJcbiAgICAgIGMuZHJhd0ltYWdlKHNoYWRvd2N2LCAwLCAwKTtcclxuICAgIH1cclxuICAgIHJldHVybiBjdjtcclxuICB9O1xyXG4gIGZ1bmN0aW9uIEV4cGFuZEltYWdlKGksIHcsIGgpIHtcclxuICAgIHZhciBjdiA9IE5ld0NhbnZhcyh3LCBoKSxcclxuICAgICAgYztcclxuICAgIGlmICghY3YpIHJldHVybiBudWxsO1xyXG4gICAgYyA9IGN2LmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIGMuZHJhd0ltYWdlKGksICh3IC0gaS53aWR0aCkgLyAyLCAoaCAtIGkuaGVpZ2h0KSAvIDIpO1xyXG4gICAgcmV0dXJuIGN2O1xyXG4gIH1cclxuICBmdW5jdGlvbiBTY2FsZUltYWdlKGksIHcsIGgpIHtcclxuICAgIHZhciBjdiA9IE5ld0NhbnZhcyh3LCBoKSxcclxuICAgICAgYztcclxuICAgIGlmICghY3YpIHJldHVybiBudWxsO1xyXG4gICAgYyA9IGN2LmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIGMuZHJhd0ltYWdlKGksIDAsIDAsIHcsIGgpO1xyXG4gICAgcmV0dXJuIGN2O1xyXG4gIH1cclxuICBmdW5jdGlvbiBBZGRCYWNrZ3JvdW5kVG9JbWFnZShcclxuICAgIGksXHJcbiAgICB3LFxyXG4gICAgaCxcclxuICAgIHNjYWxlLFxyXG4gICAgY29sb3VyLFxyXG4gICAgb3RoaWNrbmVzcyxcclxuICAgIG9jb2xvdXIsXHJcbiAgICBwYWRkaW5nLFxyXG4gICAgcmFkaXVzLFxyXG4gICAgb2ZpbGxcclxuICApIHtcclxuICAgIHZhciBjdyA9IHcgKyAoMiAqIHBhZGRpbmcgKyBvdGhpY2tuZXNzKSAqIHNjYWxlLFxyXG4gICAgICBjaCA9IGggKyAoMiAqIHBhZGRpbmcgKyBvdGhpY2tuZXNzKSAqIHNjYWxlLFxyXG4gICAgICBjdiA9IE5ld0NhbnZhcyhjdywgY2gpLFxyXG4gICAgICBjLFxyXG4gICAgICB4MSxcclxuICAgICAgeTEsXHJcbiAgICAgIHgyLFxyXG4gICAgICB5MixcclxuICAgICAgb2NhbnZhcyxcclxuICAgICAgY2M7XHJcbiAgICBpZiAoIWN2KSByZXR1cm4gbnVsbDtcclxuICAgIG90aGlja25lc3MgKj0gc2NhbGU7XHJcbiAgICByYWRpdXMgKj0gc2NhbGU7XHJcbiAgICB4MSA9IHkxID0gb3RoaWNrbmVzcyAvIDI7XHJcbiAgICB4MiA9IGN3IC0gb3RoaWNrbmVzcztcclxuICAgIHkyID0gY2ggLSBvdGhpY2tuZXNzO1xyXG4gICAgcGFkZGluZyA9IHBhZGRpbmcgKiBzY2FsZSArIHgxOyAvLyBhZGQgc3BhY2UgZm9yIG91dGxpbmVcclxuICAgIGMgPSBjdi5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICBpZiAoY29sb3VyKSB7XHJcbiAgICAgIGMuZmlsbFN0eWxlID0gY29sb3VyO1xyXG4gICAgICBSUmVjdChjLCB4MSwgeTEsIHgyLCB5MiwgcmFkaXVzKTtcclxuICAgIH1cclxuICAgIGlmIChvdGhpY2tuZXNzKSB7XHJcbiAgICAgIGMuc3Ryb2tlU3R5bGUgPSBvY29sb3VyO1xyXG4gICAgICBjLmxpbmVXaWR0aCA9IG90aGlja25lc3M7XHJcbiAgICAgIFJSZWN0KGMsIHgxLCB5MSwgeDIsIHkyLCByYWRpdXMsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvZmlsbCkge1xyXG4gICAgICAvLyB1c2UgY29tcG9zaXRpbmcgdG8gY29sb3VyIGluIHRoZSBpbWFnZSBhbmQgYm9yZGVyXHJcbiAgICAgIG9jYW52YXMgPSBOZXdDYW52YXMoY3csIGNoKTtcclxuICAgICAgY2MgPSBvY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgY2MuZHJhd0ltYWdlKGksIHBhZGRpbmcsIHBhZGRpbmcsIHcsIGgpO1xyXG4gICAgICBjYy5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcInNvdXJjZS1pblwiO1xyXG4gICAgICBjYy5maWxsU3R5bGUgPSBvY29sb3VyO1xyXG4gICAgICBjYy5maWxsUmVjdCgwLCAwLCBjdywgY2gpO1xyXG4gICAgICBjYy5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcImRlc3RpbmF0aW9uLW92ZXJcIjtcclxuICAgICAgY2MuZHJhd0ltYWdlKGN2LCAwLCAwKTtcclxuICAgICAgY2MuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJzb3VyY2Utb3ZlclwiO1xyXG4gICAgICBjLmRyYXdJbWFnZShvY2FudmFzLCAwLCAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGMuZHJhd0ltYWdlKGksIHBhZGRpbmcsIHBhZGRpbmcsIGkud2lkdGgsIGkuaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IGltYWdlOiBjdiwgd2lkdGg6IGN3IC8gc2NhbGUsIGhlaWdodDogY2ggLyBzY2FsZSB9O1xyXG4gIH1cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbmV3IGNhbnZhcyBjb250YWluaW5nIHRoZSBpbWFnZSBhbmQgaXRzIHNoYWRvd1xyXG4gICAqIFJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGltYWdlIGFuZCBpdHMgZGltZW5zaW9ucyBhdCB6PTBcclxuICAgKi9cclxuICBmdW5jdGlvbiBBZGRTaGFkb3dUb0ltYWdlKGksIHcsIGgsIHNjYWxlLCBzYywgc2IsIHNvKSB7XHJcbiAgICB2YXIgc3cgPSBhYnMoc29bMF0pLFxyXG4gICAgICBzaCA9IGFicyhzb1sxXSksXHJcbiAgICAgIGN3ID0gdyArIChzdyA+IHNiID8gc3cgKyBzYiA6IHNiICogMikgKiBzY2FsZSxcclxuICAgICAgY2ggPSBoICsgKHNoID4gc2IgPyBzaCArIHNiIDogc2IgKiAyKSAqIHNjYWxlLFxyXG4gICAgICB4byA9IHNjYWxlICogKChzYiB8fCAwKSArIChzb1swXSA8IDAgPyBzdyA6IDApKSxcclxuICAgICAgeW8gPSBzY2FsZSAqICgoc2IgfHwgMCkgKyAoc29bMV0gPCAwID8gc2ggOiAwKSksXHJcbiAgICAgIGN2LFxyXG4gICAgICBjO1xyXG4gICAgY3YgPSBOZXdDYW52YXMoY3csIGNoKTtcclxuICAgIGlmICghY3YpIHJldHVybiBudWxsO1xyXG4gICAgYyA9IGN2LmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIHNjICYmIChjLnNoYWRvd0NvbG9yID0gc2MpO1xyXG4gICAgc2IgJiYgKGMuc2hhZG93Qmx1ciA9IHNiICogc2NhbGUpO1xyXG4gICAgc28gJiZcclxuICAgICAgKChjLnNoYWRvd09mZnNldFggPSBzb1swXSAqIHNjYWxlKSwgKGMuc2hhZG93T2Zmc2V0WSA9IHNvWzFdICogc2NhbGUpKTtcclxuICAgIGMuZHJhd0ltYWdlKGksIHhvLCB5bywgdywgaCk7XHJcbiAgICByZXR1cm4geyBpbWFnZTogY3YsIHdpZHRoOiBjdyAvIHNjYWxlLCBoZWlnaHQ6IGNoIC8gc2NhbGUgfTtcclxuICB9XHJcbiAgZnVuY3Rpb24gRmluZFRleHRCb3VuZGluZ0JveChzLCBmLCBodCkge1xyXG4gICAgdmFyIHcgPSBwYXJzZUludChzLnRvU3RyaW5nKCkubGVuZ3RoICogaHQpLFxyXG4gICAgICBoID0gcGFyc2VJbnQoaHQgKiAyICogcy5sZW5ndGgpLFxyXG4gICAgICBjdiA9IE5ld0NhbnZhcyh3LCBoKSxcclxuICAgICAgYyxcclxuICAgICAgaWRhdGEsXHJcbiAgICAgIHcxLFxyXG4gICAgICBoMSxcclxuICAgICAgeCxcclxuICAgICAgeSxcclxuICAgICAgaSxcclxuICAgICAgZXg7XHJcbiAgICBpZiAoIWN2KSByZXR1cm4gbnVsbDtcclxuICAgIGMgPSBjdi5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICBjLmZpbGxTdHlsZSA9IFwiIzAwMFwiO1xyXG4gICAgYy5maWxsUmVjdCgwLCAwLCB3LCBoKTtcclxuICAgIFRleHRTZXQoYywgaHQgKyBcInB4IFwiICsgZiwgXCIjZmZmXCIsIHMsIDAsIDAsIDAsIDAsIFtdLCBcImNlbnRyZVwiKTtcclxuXHJcbiAgICBpZGF0YSA9IGMuZ2V0SW1hZ2VEYXRhKDAsIDAsIHcsIGgpO1xyXG4gICAgdzEgPSBpZGF0YS53aWR0aDtcclxuICAgIGgxID0gaWRhdGEuaGVpZ2h0O1xyXG4gICAgZXggPSB7XHJcbiAgICAgIG1pbjogeyB4OiB3MSwgeTogaDEgfSxcclxuICAgICAgbWF4OiB7IHg6IC0xLCB5OiAtMSB9XHJcbiAgICB9O1xyXG4gICAgZm9yICh5ID0gMDsgeSA8IGgxOyArK3kpIHtcclxuICAgICAgZm9yICh4ID0gMDsgeCA8IHcxOyArK3gpIHtcclxuICAgICAgICBpID0gKHkgKiB3MSArIHgpICogNDtcclxuICAgICAgICBpZiAoaWRhdGEuZGF0YVtpICsgMV0gPiAwKSB7XHJcbiAgICAgICAgICBpZiAoeCA8IGV4Lm1pbi54KSBleC5taW4ueCA9IHg7XHJcbiAgICAgICAgICBpZiAoeCA+IGV4Lm1heC54KSBleC5tYXgueCA9IHg7XHJcbiAgICAgICAgICBpZiAoeSA8IGV4Lm1pbi55KSBleC5taW4ueSA9IHk7XHJcbiAgICAgICAgICBpZiAoeSA+IGV4Lm1heC55KSBleC5tYXgueSA9IHk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBkZXZpY2UgcGl4ZWxzIG1pZ2h0IG5vdCBiZSBjc3MgcGl4ZWxzXHJcbiAgICBpZiAodzEgIT0gdykge1xyXG4gICAgICBleC5taW4ueCAqPSB3IC8gdzE7XHJcbiAgICAgIGV4Lm1heC54ICo9IHcgLyB3MTtcclxuICAgIH1cclxuICAgIGlmIChoMSAhPSBoKSB7XHJcbiAgICAgIGV4Lm1pbi55ICo9IHcgLyBoMTtcclxuICAgICAgZXgubWF4LnkgKj0gdyAvIGgxO1xyXG4gICAgfVxyXG5cclxuICAgIGN2ID0gbnVsbDtcclxuICAgIHJldHVybiBleDtcclxuICB9XHJcbiAgZnVuY3Rpb24gRml4Rm9udChmKSB7XHJcbiAgICByZXR1cm4gXCInXCIgKyBmLnJlcGxhY2UoLyhcXCd8XFxcIikvZywgXCJcIikucmVwbGFjZSgvXFxzKixcXHMqL2csIFwiJywgJ1wiKSArIFwiJ1wiO1xyXG4gIH1cclxuICBmdW5jdGlvbiBBZGRIYW5kbGVyKGgsIGYsIGUpIHtcclxuICAgIGUgPSBlIHx8IGRvYztcclxuICAgIGlmIChlLmFkZEV2ZW50TGlzdGVuZXIpIGUuYWRkRXZlbnRMaXN0ZW5lcihoLCBmLCBmYWxzZSk7XHJcbiAgICBlbHNlIGUuYXR0YWNoRXZlbnQoXCJvblwiICsgaCwgZik7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIFJlbW92ZUhhbmRsZXIoaCwgZiwgZSkge1xyXG4gICAgZSA9IGUgfHwgZG9jO1xyXG4gICAgaWYgKGUucmVtb3ZlRXZlbnRMaXN0ZW5lcikgZS5yZW1vdmVFdmVudExpc3RlbmVyKGgsIGYpO1xyXG4gICAgZWxzZSBlLmRldGFjaEV2ZW50KFwib25cIiArIGgsIGYpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBBZGRJbWFnZShpLCBvLCB0LCB0Yykge1xyXG4gICAgdmFyIHMgPSB0Yy5pbWFnZVNjYWxlLFxyXG4gICAgICBtc2NhbGUsXHJcbiAgICAgIGljLFxyXG4gICAgICBiYyxcclxuICAgICAgb2MsXHJcbiAgICAgIGl3LFxyXG4gICAgICBpaDtcclxuICAgIC8vIGltYWdlIG5vdCBsb2FkZWQsIHdhaXQgZm9yIGltYWdlIG9ubG9hZFxyXG4gICAgaWYgKCFvLmNvbXBsZXRlKVxyXG4gICAgICByZXR1cm4gQWRkSGFuZGxlcihcclxuICAgICAgICBcImxvYWRcIixcclxuICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIEFkZEltYWdlKGksIG8sIHQsIHRjKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9cclxuICAgICAgKTtcclxuICAgIGlmICghaS5jb21wbGV0ZSlcclxuICAgICAgcmV0dXJuIEFkZEhhbmRsZXIoXHJcbiAgICAgICAgXCJsb2FkXCIsXHJcbiAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBBZGRJbWFnZShpLCBvLCB0LCB0Yyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBpXHJcbiAgICAgICk7XHJcblxyXG4gICAgLy8gWWVzLCB0aGlzIGRvZXMgbG9vayBsaWtlIG5vbnNlbnNlLCBidXQgaXQgbWFrZXMgc3VyZSB0aGF0IGJvdGggdGhlXHJcbiAgICAvLyB3aWR0aCBhbmQgaGVpZ2h0IGFyZSBhY3R1YWxseSBzZXQgYW5kIG5vdCBqdXN0IGNhbGN1bGF0ZWQuIFRoaXMgaXNcclxuICAgIC8vIHJlcXVpcmVkIHRvIGtlZXAgcHJvcG9ydGlvbmFsIHNpemVzIHdoZW4gdGhlIGltYWdlcyBhcmUgaGlkZGVuLCBzb1xyXG4gICAgLy8gdGhlIGltYWdlcyBjYW4gYmUgdXNlZCBhZ2FpbiBmb3IgYW5vdGhlciBjbG91ZC5cclxuICAgIG8ud2lkdGggPSBvLndpZHRoO1xyXG4gICAgby5oZWlnaHQgPSBvLmhlaWdodDtcclxuXHJcbiAgICBpZiAocykge1xyXG4gICAgICBpLndpZHRoID0gby53aWR0aCAqIHM7XHJcbiAgICAgIGkuaGVpZ2h0ID0gby5oZWlnaHQgKiBzO1xyXG4gICAgfVxyXG4gICAgLy8gdGhlIHN0YW5kYXJkIHdpZHRoIG9mIHRoZSBpbWFnZSwgd2l0aCBpbWFnZVNjYWxlIGFwcGxpZWRcclxuICAgIHQuaXcgPSBpLndpZHRoO1xyXG4gICAgdC5paCA9IGkuaGVpZ2h0O1xyXG4gICAgaWYgKHRjLnR4dE9wdCkge1xyXG4gICAgICBpYyA9IGk7XHJcbiAgICAgIG1zY2FsZSA9IHRjLnpvb21NYXggKiB0Yy50eHRTY2FsZTtcclxuICAgICAgaXcgPSB0Lml3ICogbXNjYWxlO1xyXG4gICAgICBpaCA9IHQuaWggKiBtc2NhbGU7XHJcbiAgICAgIGlmIChpdyA8IG8ubmF0dXJhbFdpZHRoIHx8IGloIDwgby5uYXR1cmFsSGVpZ2h0KSB7XHJcbiAgICAgICAgaWMgPSBTY2FsZUltYWdlKGksIGl3LCBpaCk7XHJcbiAgICAgICAgaWYgKGljKSB0LmZpbWFnZSA9IGljO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGl3ID0gdC5pdztcclxuICAgICAgICBpaCA9IHQuaWg7XHJcbiAgICAgICAgbXNjYWxlID0gMTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXQuSGFzVGV4dCgpKSB7XHJcbiAgICAgICAgaWYgKHRjLnNoYWRvdykge1xyXG4gICAgICAgICAgaWMgPSBBZGRTaGFkb3dUb0ltYWdlKFxyXG4gICAgICAgICAgICB0LmltYWdlLFxyXG4gICAgICAgICAgICBpdyxcclxuICAgICAgICAgICAgaWgsXHJcbiAgICAgICAgICAgIG1zY2FsZSxcclxuICAgICAgICAgICAgdGMuc2hhZG93LFxyXG4gICAgICAgICAgICB0Yy5zaGFkb3dCbHVyLFxyXG4gICAgICAgICAgICB0Yy5zaGFkb3dPZmZzZXRcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpZiAoaWMpIHtcclxuICAgICAgICAgICAgdC5maW1hZ2UgPSBpYy5pbWFnZTtcclxuICAgICAgICAgICAgdC53ID0gaWMud2lkdGg7XHJcbiAgICAgICAgICAgIHQuaCA9IGljLmhlaWdodDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRjLmJnQ29sb3VyIHx8IHRjLmJnT3V0bGluZVRoaWNrbmVzcykge1xyXG4gICAgICAgICAgYmMgPVxyXG4gICAgICAgICAgICB0Yy5iZ0NvbG91ciA9PSBcInRhZ1wiXHJcbiAgICAgICAgICAgICAgPyBHZXRQcm9wZXJ0eSh0LmEsIFwiYmFja2dyb3VuZC1jb2xvclwiKVxyXG4gICAgICAgICAgICAgIDogdGMuYmdDb2xvdXI7XHJcbiAgICAgICAgICBvYyA9XHJcbiAgICAgICAgICAgIHRjLmJnT3V0bGluZSA9PSBcInRhZ1wiXHJcbiAgICAgICAgICAgICAgPyBHZXRQcm9wZXJ0eSh0LmEsIFwiY29sb3JcIilcclxuICAgICAgICAgICAgICA6IHRjLmJnT3V0bGluZSB8fCB0Yy50ZXh0Q29sb3VyO1xyXG4gICAgICAgICAgaXcgPSB0LmZpbWFnZS53aWR0aDtcclxuICAgICAgICAgIGloID0gdC5maW1hZ2UuaGVpZ2h0O1xyXG4gICAgICAgICAgaWYgKHRjLm91dGxpbmVNZXRob2QgPT0gXCJjb2xvdXJcIikge1xyXG4gICAgICAgICAgICAvLyBjcmVhdGUgdGhlIG91dGxpbmUgdmVyc2lvbiBmaXJzdCwgdXNpbmcgdGhlIGN1cnJlbnQgaW1hZ2Ugc3RhdGVcclxuICAgICAgICAgICAgaWMgPSBBZGRCYWNrZ3JvdW5kVG9JbWFnZShcclxuICAgICAgICAgICAgICB0LmZpbWFnZSxcclxuICAgICAgICAgICAgICBpdyxcclxuICAgICAgICAgICAgICBpaCxcclxuICAgICAgICAgICAgICBtc2NhbGUsXHJcbiAgICAgICAgICAgICAgYmMsXHJcbiAgICAgICAgICAgICAgdGMuYmdPdXRsaW5lVGhpY2tuZXNzLFxyXG4gICAgICAgICAgICAgIHRjLm91dGxpbmVDb2xvdXIsXHJcbiAgICAgICAgICAgICAgdGMucGFkZGluZyxcclxuICAgICAgICAgICAgICB0Yy5iZ1JhZGl1cyxcclxuICAgICAgICAgICAgICAxXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmIChpYykgdC5vaW1hZ2UgPSBpYy5pbWFnZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGljID0gQWRkQmFja2dyb3VuZFRvSW1hZ2UoXHJcbiAgICAgICAgICAgIHQuZmltYWdlLFxyXG4gICAgICAgICAgICBpdyxcclxuICAgICAgICAgICAgaWgsXHJcbiAgICAgICAgICAgIG1zY2FsZSxcclxuICAgICAgICAgICAgYmMsXHJcbiAgICAgICAgICAgIHRjLmJnT3V0bGluZVRoaWNrbmVzcyxcclxuICAgICAgICAgICAgb2MsXHJcbiAgICAgICAgICAgIHRjLnBhZGRpbmcsXHJcbiAgICAgICAgICAgIHRjLmJnUmFkaXVzXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaWYgKGljKSB7XHJcbiAgICAgICAgICAgIHQuZmltYWdlID0gaWMuaW1hZ2U7XHJcbiAgICAgICAgICAgIHQudyA9IGljLndpZHRoO1xyXG4gICAgICAgICAgICB0LmggPSBpYy5oZWlnaHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0Yy5vdXRsaW5lTWV0aG9kID09IFwic2l6ZVwiKSB7XHJcbiAgICAgICAgICBpZiAodGMub3V0bGluZUluY3JlYXNlID4gMCkge1xyXG4gICAgICAgICAgICB0Lml3ICs9IDIgKiB0Yy5vdXRsaW5lSW5jcmVhc2U7XHJcbiAgICAgICAgICAgIHQuaWggKz0gMiAqIHRjLm91dGxpbmVJbmNyZWFzZTtcclxuICAgICAgICAgICAgaXcgPSBtc2NhbGUgKiB0Lml3O1xyXG4gICAgICAgICAgICBpaCA9IG1zY2FsZSAqIHQuaWg7XHJcbiAgICAgICAgICAgIGljID0gU2NhbGVJbWFnZSh0LmZpbWFnZSwgaXcsIGloKTtcclxuICAgICAgICAgICAgdC5vaW1hZ2UgPSBpYztcclxuICAgICAgICAgICAgdC5maW1hZ2UgPSBFeHBhbmRJbWFnZSh0LmZpbWFnZSwgdC5vaW1hZ2Uud2lkdGgsIHQub2ltYWdlLmhlaWdodCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpdyA9IG1zY2FsZSAqICh0Lml3ICsgMiAqIHRjLm91dGxpbmVJbmNyZWFzZSk7XHJcbiAgICAgICAgICAgIGloID0gbXNjYWxlICogKHQuaWggKyAyICogdGMub3V0bGluZUluY3JlYXNlKTtcclxuICAgICAgICAgICAgaWMgPSBTY2FsZUltYWdlKHQuZmltYWdlLCBpdywgaWgpO1xyXG4gICAgICAgICAgICB0Lm9pbWFnZSA9IEV4cGFuZEltYWdlKGljLCB0LmZpbWFnZS53aWR0aCwgdC5maW1hZ2UuaGVpZ2h0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHQuSW5pdCgpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBHZXRQcm9wZXJ0eShlLCBwKSB7XHJcbiAgICB2YXIgZHYgPSBkb2MuZGVmYXVsdFZpZXcsXHJcbiAgICAgIHBjID0gcC5yZXBsYWNlKC9cXC0oW2Etel0pL2csIGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gYS5jaGFyQXQoMSkudG9VcHBlckNhc2UoKTtcclxuICAgICAgfSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAoZHYgJiZcclxuICAgICAgICBkdi5nZXRDb21wdXRlZFN0eWxlICYmXHJcbiAgICAgICAgZHYuZ2V0Q29tcHV0ZWRTdHlsZShlLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKHApKSB8fFxyXG4gICAgICAoZS5jdXJyZW50U3R5bGUgJiYgZS5jdXJyZW50U3R5bGVbcGNdKVxyXG4gICAgKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gRmluZFdlaWdodChhLCB3RnJvbSwgdEhlaWdodCkge1xyXG4gICAgdmFyIHcgPSAxLFxyXG4gICAgICBwO1xyXG4gICAgaWYgKHdGcm9tKSB7XHJcbiAgICAgIHcgPSAxICogKGEuZ2V0QXR0cmlidXRlKHdGcm9tKSB8fCB0SGVpZ2h0KTtcclxuICAgIH0gZWxzZSBpZiAoKHAgPSBHZXRQcm9wZXJ0eShhLCBcImZvbnQtc2l6ZVwiKSkpIHtcclxuICAgICAgdyA9XHJcbiAgICAgICAgKHAuaW5kZXhPZihcInB4XCIpID4gLTEgJiYgcC5yZXBsYWNlKFwicHhcIiwgXCJcIikgKiAxKSB8fFxyXG4gICAgICAgIChwLmluZGV4T2YoXCJwdFwiKSA+IC0xICYmIHAucmVwbGFjZShcInB0XCIsIFwiXCIpICogMS4yNSkgfHxcclxuICAgICAgICBwICogMy4zO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHc7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIEV2ZW50VG9DYW52YXNJZChlKSB7XHJcbiAgICByZXR1cm4gZS50YXJnZXQgJiYgRGVmaW5lZChlLnRhcmdldC5pZClcclxuICAgICAgPyBlLnRhcmdldC5pZFxyXG4gICAgICA6IGUuc3JjRWxlbWVudC5wYXJlbnROb2RlLmlkO1xyXG4gIH1cclxuICBmdW5jdGlvbiBFdmVudFhZKGUsIGMpIHtcclxuICAgIHZhciB4eSxcclxuICAgICAgcCxcclxuICAgICAgeG11bCA9IHBhcnNlSW50KEdldFByb3BlcnR5KGMsIFwid2lkdGhcIikpIC8gYy53aWR0aCxcclxuICAgICAgeW11bCA9IHBhcnNlSW50KEdldFByb3BlcnR5KGMsIFwiaGVpZ2h0XCIpKSAvIGMuaGVpZ2h0O1xyXG4gICAgaWYgKERlZmluZWQoZS5vZmZzZXRYKSkge1xyXG4gICAgICB4eSA9IHsgeDogZS5vZmZzZXRYLCB5OiBlLm9mZnNldFkgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHAgPSBBYnNQb3MoYy5pZCk7XHJcbiAgICAgIGlmIChEZWZpbmVkKGUuY2hhbmdlZFRvdWNoZXMpKSBlID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcclxuICAgICAgaWYgKGUucGFnZVgpIHh5ID0geyB4OiBlLnBhZ2VYIC0gcC54LCB5OiBlLnBhZ2VZIC0gcC55IH07XHJcbiAgICB9XHJcbiAgICBpZiAoeHkgJiYgeG11bCAmJiB5bXVsKSB7XHJcbiAgICAgIHh5LnggLz0geG11bDtcclxuICAgICAgeHkueSAvPSB5bXVsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHh5O1xyXG4gIH1cclxuICBmdW5jdGlvbiBNb3VzZU91dChlKSB7XHJcbiAgICB2YXIgY3YgPSBlLnRhcmdldCB8fCBlLmZyb21FbGVtZW50LnBhcmVudE5vZGUsXHJcbiAgICAgIHRjID0gVGFnQ2FudmFzLnRjW2N2LmlkXTtcclxuICAgIGlmICh0Yykge1xyXG4gICAgICB0Yy5teCA9IHRjLm15ID0gLTE7XHJcbiAgICAgIHRjLlVuRnJlZXplKCk7XHJcbiAgICAgIHRjLkVuZERyYWcoKTtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gTW91c2VNb3ZlKGUpIHtcclxuICAgIHJldHVybjtcclxuICAgIHZhciBpLFxyXG4gICAgICB0ID0gVGFnQ2FudmFzLFxyXG4gICAgICB0YyxcclxuICAgICAgcCxcclxuICAgICAgdGcgPSBFdmVudFRvQ2FudmFzSWQoZSk7XHJcbiAgICBmb3IgKGkgaW4gdC50Yykge1xyXG4gICAgICB0YyA9IHQudGNbaV07XHJcbiAgICAgIGlmICh0Yy50dHRpbWVyKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRjLnR0dGltZXIpO1xyXG4gICAgICAgIHRjLnR0dGltZXIgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGcgJiYgdC50Y1t0Z10pIHtcclxuICAgICAgdGMgPSB0LnRjW3RnXTtcclxuICAgICAgaWYgKChwID0gRXZlbnRYWShlLCB0Yy5jYW52YXMpKSkge1xyXG4gICAgICAgIHRjLm14ID0gcC54O1xyXG4gICAgICAgIHRjLm15ID0gcC55O1xyXG4gICAgICAgIHRjLkRyYWcoZSwgcCk7XHJcbiAgICAgIH1cclxuICAgICAgdGMuZHJhd24gPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBNb3VzZURvd24oZSkge1xyXG4gICAgdmFyIHQgPSBUYWdDYW52YXMsXHJcbiAgICAgIGNiID0gZG9jLmFkZEV2ZW50TGlzdGVuZXIgPyAwIDogMSxcclxuICAgICAgdGcgPSBFdmVudFRvQ2FudmFzSWQoZSk7XHJcbiAgICBpZiAodGcgJiYgZS5idXR0b24gPT0gY2IgJiYgdC50Y1t0Z10pIHtcclxuICAgICAgdC50Y1t0Z10uQmVnaW5EcmFnKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBNb3VzZVVwKGUpIHtcclxuICAgIHZhciB0ID0gVGFnQ2FudmFzLFxyXG4gICAgICBjYiA9IGRvYy5hZGRFdmVudExpc3RlbmVyID8gMCA6IDEsXHJcbiAgICAgIHRnID0gRXZlbnRUb0NhbnZhc0lkKGUpLFxyXG4gICAgICB0YztcclxuICAgIGlmICh0ZyAmJiBlLmJ1dHRvbiA9PSBjYiAmJiB0LnRjW3RnXSkge1xyXG4gICAgICB0YyA9IHQudGNbdGddO1xyXG4gICAgICBNb3VzZU1vdmUoZSk7XHJcbiAgICAgIGlmICghdGMuRW5kRHJhZygpICYmICF0Yy50b3VjaFN0YXRlKSB0Yy5DbGlja2VkKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBUb3VjaERvd24oZSkge1xyXG4gICAgdmFyIHRnID0gRXZlbnRUb0NhbnZhc0lkKGUpLFxyXG4gICAgICB0YyA9IHRnICYmIFRhZ0NhbnZhcy50Y1t0Z10sXHJcbiAgICAgIHA7XHJcbiAgICBpZiAodGMgJiYgZS5jaGFuZ2VkVG91Y2hlcykge1xyXG4gICAgICBpZiAoZS50b3VjaGVzLmxlbmd0aCA9PSAxICYmIHRjLnRvdWNoU3RhdGUgPT0gMCkge1xyXG4gICAgICAgIHRjLnRvdWNoU3RhdGUgPSAxO1xyXG4gICAgICAgIHRjLkJlZ2luRHJhZyhlKTtcclxuICAgICAgICBpZiAoKHAgPSBFdmVudFhZKGUsIHRjLmNhbnZhcykpKSB7XHJcbiAgICAgICAgICB0Yy5teCA9IHAueDtcclxuICAgICAgICAgIHRjLm15ID0gcC55O1xyXG4gICAgICAgICAgdGMuZHJhd24gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChlLnRhcmdldFRvdWNoZXMubGVuZ3RoID09IDIgJiYgdGMucGluY2hab29tKSB7XHJcbiAgICAgICAgdGMudG91Y2hTdGF0ZSA9IDM7XHJcbiAgICAgICAgdGMuRW5kRHJhZygpO1xyXG4gICAgICAgIHRjLkJlZ2luUGluY2goZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGMuRW5kRHJhZygpO1xyXG4gICAgICAgIHRjLkVuZFBpbmNoKCk7XHJcbiAgICAgICAgdGMudG91Y2hTdGF0ZSA9IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gVG91Y2hVcChlKSB7XHJcbiAgICB2YXIgdGcgPSBFdmVudFRvQ2FudmFzSWQoZSksXHJcbiAgICAgIHRjID0gdGcgJiYgVGFnQ2FudmFzLnRjW3RnXTtcclxuICAgIGlmICh0YyAmJiBlLmNoYW5nZWRUb3VjaGVzKSB7XHJcbiAgICAgIHN3aXRjaCAodGMudG91Y2hTdGF0ZSkge1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgIHRjLkRyYXcoKTtcclxuICAgICAgICAgIHRjLkNsaWNrZWQoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgIHRjLkVuZERyYWcoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgIHRjLkVuZFBpbmNoKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGMudG91Y2hTdGF0ZSA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIFRvdWNoTW92ZShlKSB7XHJcbiAgICB2YXIgaSxcclxuICAgICAgdCA9IFRhZ0NhbnZhcyxcclxuICAgICAgdGMsXHJcbiAgICAgIHAsXHJcbiAgICAgIHRnID0gRXZlbnRUb0NhbnZhc0lkKGUpO1xyXG4gICAgZm9yIChpIGluIHQudGMpIHtcclxuICAgICAgdGMgPSB0LnRjW2ldO1xyXG4gICAgICBpZiAodGMudHR0aW1lcikge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0Yy50dHRpbWVyKTtcclxuICAgICAgICB0Yy50dHRpbWVyID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGMgPSB0ZyAmJiB0LnRjW3RnXTtcclxuICAgIGlmICh0YyAmJiBlLmNoYW5nZWRUb3VjaGVzICYmIHRjLnRvdWNoU3RhdGUpIHtcclxuICAgICAgc3dpdGNoICh0Yy50b3VjaFN0YXRlKSB7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgIGlmICgocCA9IEV2ZW50WFkoZSwgdGMuY2FudmFzKSkpIHtcclxuICAgICAgICAgICAgdGMubXggPSBwLng7XHJcbiAgICAgICAgICAgIHRjLm15ID0gcC55O1xyXG4gICAgICAgICAgICBpZiAodGMuRHJhZyhlLCBwKSkgdGMudG91Y2hTdGF0ZSA9IDI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICB0Yy5QaW5jaChlKTtcclxuICAgICAgfVxyXG4gICAgICB0Yy5kcmF3biA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIE1vdXNlV2hlZWwoZSkge1xyXG4gICAgdmFyIHQgPSBUYWdDYW52YXMsXHJcbiAgICAgIHRnID0gRXZlbnRUb0NhbnZhc0lkKGUpO1xyXG4gICAgaWYgKHRnICYmIHQudGNbdGddKSB7XHJcbiAgICAgIGUuY2FuY2VsQnViYmxlID0gdHJ1ZTtcclxuICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0ICYmIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdC50Y1t0Z10uV2hlZWwoKGUud2hlZWxEZWx0YSB8fCBlLmRldGFpbCkgPiAwKTtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gRHJhd0NhbnZhcygpIHtcclxuICAgIERyYXdDYW52YXNSQUYoVGltZU5vdygpKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gRHJhd0NhbnZhc1JBRih0KSB7XHJcbiAgICB2YXIgdGMgPSBUYWdDYW52YXMudGMsXHJcbiAgICAgIGk7XHJcbiAgICBUYWdDYW52YXMuTmV4dEZyYW1lKFRhZ0NhbnZhcy5pbnRlcnZhbCk7XHJcbiAgICB0ID0gdCB8fCBUaW1lTm93KCk7XHJcbiAgICBmb3IgKGkgaW4gdGMpIHRjW2ldLkRyYXcodCk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIEFic1BvcyhpZCkge1xyXG4gICAgdmFyIGUgPSBkb2MuZ2V0RWxlbWVudEJ5SWQoaWQpLFxyXG4gICAgICByID0gZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuICAgICAgZGQgPSBkb2MuZG9jdW1lbnRFbGVtZW50LFxyXG4gICAgICBiID0gZG9jLmJvZHksXHJcbiAgICAgIHcgPSB3aW5kb3csXHJcbiAgICAgIHhzID0gdy5wYWdlWE9mZnNldCB8fCBkZC5zY3JvbGxMZWZ0LFxyXG4gICAgICB5cyA9IHcucGFnZVlPZmZzZXQgfHwgZGQuc2Nyb2xsVG9wLFxyXG4gICAgICB4byA9IGRkLmNsaWVudExlZnQgfHwgYi5jbGllbnRMZWZ0LFxyXG4gICAgICB5byA9IGRkLmNsaWVudFRvcCB8fCBiLmNsaWVudFRvcDtcclxuICAgIHJldHVybiB7IHg6IHIubGVmdCArIHhzIC0geG8sIHk6IHIudG9wICsgeXMgLSB5byB9O1xyXG4gIH1cclxuICBmdW5jdGlvbiBQcm9qZWN0KHRjLCBwMSwgc3gsIHN5KSB7XHJcbiAgICB2YXIgbSA9ICh0Yy5yYWRpdXMgKiB0Yy56MSkgLyAodGMuejEgKyB0Yy56MiArIHAxLnopO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgeDogcDEueCAqIG0gKiBzeCxcclxuICAgICAgeTogcDEueSAqIG0gKiBzeSxcclxuICAgICAgejogcDEueixcclxuICAgICAgdzogKHRjLnoxIC0gcDEueikgLyB0Yy56MlxyXG4gICAgfTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICogZm9yIHJlY3Vyc2l2ZWx5IHNwbGl0dGluZyB0YWcgY29udGVudHMgb24gPGJyPiB0YWdzXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gVGV4dFNwbGl0dGVyKGUpIHtcclxuICAgIHRoaXMuZSA9IGU7XHJcbiAgICB0aGlzLmJyID0gMDtcclxuICAgIHRoaXMubGluZSA9IFtdO1xyXG4gICAgdGhpcy50ZXh0ID0gW107XHJcbiAgICB0aGlzLm9yaWdpbmFsID0gZS5pbm5lclRleHQgfHwgZS50ZXh0Q29udGVudDtcclxuICB9XHJcbiAgVFNwcm90byA9IFRleHRTcGxpdHRlci5wcm90b3R5cGU7XHJcbiAgVFNwcm90by5FbXB0eSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRleHQubGVuZ3RoOyArK2kpXHJcbiAgICAgIGlmICh0aGlzLnRleHRbaV0ubGVuZ3RoKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9O1xyXG4gIFRTcHJvdG8uTGluZXMgPSBmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgciA9IGUgPyAxIDogMCxcclxuICAgICAgY24sXHJcbiAgICAgIGNsLFxyXG4gICAgICBpO1xyXG4gICAgZSA9IGUgfHwgdGhpcy5lO1xyXG4gICAgY24gPSBlLmNoaWxkTm9kZXM7XHJcbiAgICBjbCA9IGNuLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgY2w7ICsraSkge1xyXG4gICAgICBpZiAoY25baV0ubm9kZU5hbWUgPT0gXCJCUlwiKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0LnB1c2godGhpcy5saW5lLmpvaW4oXCIgXCIpKTtcclxuICAgICAgICB0aGlzLmJyID0gMTtcclxuICAgICAgfSBlbHNlIGlmIChjbltpXS5ub2RlVHlwZSA9PSAzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYnIpIHtcclxuICAgICAgICAgIHRoaXMubGluZSA9IFtjbltpXS5ub2RlVmFsdWVdO1xyXG4gICAgICAgICAgdGhpcy5iciA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMubGluZS5wdXNoKGNuW2ldLm5vZGVWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuTGluZXMoY25baV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByIHx8IHRoaXMuYnIgfHwgdGhpcy50ZXh0LnB1c2godGhpcy5saW5lLmpvaW4oXCIgXCIpKTtcclxuICAgIHJldHVybiB0aGlzLnRleHQ7XHJcbiAgfTtcclxuICBUU3Byb3RvLlNwbGl0V2lkdGggPSBmdW5jdGlvbih3LCBjLCBmLCBoKSB7XHJcbiAgICB2YXIgaSxcclxuICAgICAgaixcclxuICAgICAgd29yZHMsXHJcbiAgICAgIHRleHQgPSBbXTtcclxuICAgIGMuZm9udCA9IGggKyBcInB4IFwiICsgZjtcclxuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnRleHQubGVuZ3RoOyArK2kpIHtcclxuICAgICAgd29yZHMgPSB0aGlzLnRleHRbaV0uc3BsaXQoL1xccysvKTtcclxuICAgICAgdGhpcy5saW5lID0gW3dvcmRzWzBdXTtcclxuICAgICAgZm9yIChqID0gMTsgaiA8IHdvcmRzLmxlbmd0aDsgKytqKSB7XHJcbiAgICAgICAgaWYgKGMubWVhc3VyZVRleHQodGhpcy5saW5lLmpvaW4oXCIgXCIpICsgXCIgXCIgKyB3b3Jkc1tqXSkud2lkdGggPiB3KSB7XHJcbiAgICAgICAgICB0ZXh0LnB1c2godGhpcy5saW5lLmpvaW4oXCIgXCIpKTtcclxuICAgICAgICAgIHRoaXMubGluZSA9IFt3b3Jkc1tqXV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMubGluZS5wdXNoKHdvcmRzW2pdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGV4dC5wdXNoKHRoaXMubGluZS5qb2luKFwiIFwiKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKHRoaXMudGV4dCA9IHRleHQpO1xyXG4gIH07XHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gT3V0bGluZSh0YywgdCkge1xyXG4gICAgdGhpcy50cyA9IFRpbWVOb3coKTtcclxuICAgIHRoaXMudGMgPSB0YztcclxuICAgIHRoaXMudGFnID0gdDtcclxuICAgIHRoaXMueCA9IHRoaXMueSA9IHRoaXMudyA9IHRoaXMuaCA9IHRoaXMuc2MgPSAxO1xyXG4gICAgdGhpcy56ID0gMDtcclxuICAgIHRoaXMuRHJhdyA9XHJcbiAgICAgIHRjLnB1bHNhdGVUbyA8IDEgJiYgdGMub3V0bGluZU1ldGhvZCAhPSBcImNvbG91clwiXHJcbiAgICAgICAgPyB0aGlzLkRyYXdQdWxzYXRlXHJcbiAgICAgICAgOiB0aGlzLkRyYXdTaW1wbGU7XHJcbiAgICB0aGlzLnJhZGl1cyA9IHRjLm91dGxpbmVSYWRpdXMgfCAwO1xyXG4gICAgdGhpcy5TZXRNZXRob2QodGMub3V0bGluZU1ldGhvZCk7XHJcbiAgfVxyXG4gIE9wcm90byA9IE91dGxpbmUucHJvdG90eXBlO1xyXG4gIE9wcm90by5TZXRNZXRob2QgPSBmdW5jdGlvbihvbSkge1xyXG4gICAgdmFyIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgYmxvY2s6IFtcIlByZURyYXdcIiwgXCJEcmF3QmxvY2tcIl0sXHJcbiAgICAgICAgY29sb3VyOiBbXCJQcmVEcmF3XCIsIFwiRHJhd0NvbG91clwiXSxcclxuICAgICAgICBvdXRsaW5lOiBbXCJQb3N0RHJhd1wiLCBcIkRyYXdPdXRsaW5lXCJdLFxyXG4gICAgICAgIGNsYXNzaWM6IFtcIkxhc3REcmF3XCIsIFwiRHJhd091dGxpbmVcIl0sXHJcbiAgICAgICAgc2l6ZTogW1wiUHJlRHJhd1wiLCBcIkRyYXdDb2xvdXJcIl0sXHJcbiAgICAgICAgbm9uZTogW1wiTGFzdERyYXdcIl1cclxuICAgICAgfSxcclxuICAgICAgZnVuY3MgPSBtZXRob2RzW29tXSB8fCBtZXRob2RzLm91dGxpbmU7XHJcbiAgICBpZiAob20gPT0gXCJub25lXCIpIHtcclxuICAgICAgdGhpcy5EcmF3ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRyYXdGdW5jID0gdGhpc1tmdW5jc1sxXV07XHJcbiAgICB9XHJcbiAgICB0aGlzW2Z1bmNzWzBdXSA9IHRoaXMuRHJhdztcclxuICB9O1xyXG4gIE9wcm90by5VcGRhdGUgPSBmdW5jdGlvbih4LCB5LCB3LCBoLCBzYywgeiwgeG8sIHlvKSB7XHJcbiAgICB2YXIgbyA9IHRoaXMudGMub3V0bGluZU9mZnNldCxcclxuICAgICAgbzIgPSAyICogbztcclxuICAgIHRoaXMueCA9IHNjICogeCArIHhvIC0gbztcclxuICAgIHRoaXMueSA9IHNjICogeSArIHlvIC0gbztcclxuICAgIHRoaXMudyA9IHNjICogdyArIG8yO1xyXG4gICAgdGhpcy5oID0gc2MgKiBoICsgbzI7XHJcbiAgICB0aGlzLnNjID0gc2M7IC8vIHVzZWQgdG8gZGV0ZXJtaW5lIGZyb250bW9zdFxyXG4gICAgdGhpcy56ID0gejtcclxuICB9O1xyXG4gIE9wcm90by5EcmF3T3V0bGluZSA9IGZ1bmN0aW9uKGMsIHgsIHksIHcsIGgsIGNvbG91cikge1xyXG4gICAgYy5zdHJva2VTdHlsZSA9IGNvbG91cjtcclxuICAgIFJSZWN0KGMsIHgsIHksIHcsIGgsIHRoaXMucmFkaXVzLCB0cnVlKTtcclxuICB9O1xyXG4gIE9wcm90by5EcmF3Q29sb3VyID0gZnVuY3Rpb24oYywgeCwgeSwgdywgaCwgY29sb3VyLCB0YWcsIHgxLCB5MSkge1xyXG4gICAgaWYgKHRhZy5vaW1hZ2UpIHtcclxuICAgICAgdGFnLmFscGhhID0gMTtcclxuICAgICAgdGFnLkRyYXcoYywgeDEsIHkxLCB0YWcub2ltYWdlKTtcclxuICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpc1t0YWcuaW1hZ2UgPyBcIkRyYXdDb2xvdXJJbWFnZVwiIDogXCJEcmF3Q29sb3VyVGV4dFwiXShcclxuICAgICAgYyxcclxuICAgICAgeCxcclxuICAgICAgeSxcclxuICAgICAgdyxcclxuICAgICAgaCxcclxuICAgICAgY29sb3VyLFxyXG4gICAgICB0YWcsXHJcbiAgICAgIHgxLFxyXG4gICAgICB5MVxyXG4gICAgKTtcclxuICB9O1xyXG4gIE9wcm90by5EcmF3Q29sb3VyVGV4dCA9IGZ1bmN0aW9uKGMsIHgsIHksIHcsIGgsIGNvbG91ciwgdGFnLCB4MSwgeTEpIHtcclxuICAgIHZhciBub3JtYWwgPSB0YWcuY29sb3VyO1xyXG4gICAgdGFnLmNvbG91ciA9IGNvbG91cjtcclxuICAgIHRhZy5hbHBoYSA9IDE7XHJcbiAgICB0YWcuRHJhdyhjLCB4MSwgeTEpO1xyXG4gICAgdGFnLmNvbG91ciA9IG5vcm1hbDtcclxuICAgIHJldHVybiAxO1xyXG4gIH07XHJcbiAgT3Byb3RvLkRyYXdDb2xvdXJJbWFnZSA9IGZ1bmN0aW9uKGMsIHgsIHksIHcsIGgsIGNvbG91ciwgdGFnLCB4MSwgeTEpIHtcclxuICAgIHZhciBjY2FudmFzID0gYy5jYW52YXMsXHJcbiAgICAgIGZ4ID0gfn5tYXgoeCwgMCksXHJcbiAgICAgIGZ5ID0gfn5tYXgoeSwgMCksXHJcbiAgICAgIGZ3ID0gKG1pbihjY2FudmFzLndpZHRoIC0gZngsIHcpICsgMC41KSB8IDAsXHJcbiAgICAgIGZoID0gKG1pbihjY2FudmFzLmhlaWdodCAtIGZ5LCBoKSArIDAuNSkgfCAwLFxyXG4gICAgICBjYztcclxuICAgIGlmIChvY2FudmFzKSAob2NhbnZhcy53aWR0aCA9IGZ3KSwgKG9jYW52YXMuaGVpZ2h0ID0gZmgpO1xyXG4gICAgZWxzZSBvY2FudmFzID0gTmV3Q2FudmFzKGZ3LCBmaCk7XHJcbiAgICBpZiAoIW9jYW52YXMpIHJldHVybiB0aGlzLlNldE1ldGhvZChcIm91dGxpbmVcIik7IC8vIGlmIHVzaW5nIElFIGFuZCBpbWFnZXMsIGdpdmUgdXAhXHJcbiAgICBjYyA9IG9jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgIGNjLmRyYXdJbWFnZShjY2FudmFzLCBmeCwgZnksIGZ3LCBmaCwgMCwgMCwgZncsIGZoKTtcclxuICAgIGMuY2xlYXJSZWN0KGZ4LCBmeSwgZncsIGZoKTtcclxuICAgIHRhZy5hbHBoYSA9IDE7XHJcbiAgICB0YWcuRHJhdyhjLCB4MSwgeTEpO1xyXG4gICAgYy5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICBjLnNhdmUoKTtcclxuICAgIGMuYmVnaW5QYXRoKCk7XHJcbiAgICBjLnJlY3QoZngsIGZ5LCBmdywgZmgpO1xyXG4gICAgYy5jbGlwKCk7XHJcbiAgICBjLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwic291cmNlLWluXCI7XHJcbiAgICBjLmZpbGxTdHlsZSA9IGNvbG91cjtcclxuICAgIGMuZmlsbFJlY3QoZngsIGZ5LCBmdywgZmgpO1xyXG4gICAgYy5yZXN0b3JlKCk7XHJcbiAgICBjLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwiZGVzdGluYXRpb24tb3ZlclwiO1xyXG4gICAgYy5kcmF3SW1hZ2Uob2NhbnZhcywgMCwgMCwgZncsIGZoLCBmeCwgZnksIGZ3LCBmaCk7XHJcbiAgICBjLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwic291cmNlLW92ZXJcIjtcclxuICAgIHJldHVybiAxO1xyXG4gIH07XHJcbiAgT3Byb3RvLkRyYXdCbG9jayA9IGZ1bmN0aW9uKGMsIHgsIHksIHcsIGgsIGNvbG91cikge1xyXG4gICAgYy5maWxsU3R5bGUgPSBjb2xvdXI7XHJcbiAgICBSUmVjdChjLCB4LCB5LCB3LCBoLCB0aGlzLnJhZGl1cyk7XHJcbiAgfTtcclxuICBPcHJvdG8uRHJhd1NpbXBsZSA9IGZ1bmN0aW9uKGMsIHRhZywgeDEsIHkxKSB7XHJcbiAgICB2YXIgdCA9IHRoaXMudGM7XHJcbiAgICBjLnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgIGMuc3Ryb2tlU3R5bGUgPSB0Lm91dGxpbmVDb2xvdXI7XHJcbiAgICBjLmxpbmVXaWR0aCA9IHQub3V0bGluZVRoaWNrbmVzcztcclxuICAgIGMuc2hhZG93Qmx1ciA9IGMuc2hhZG93T2Zmc2V0WCA9IGMuc2hhZG93T2Zmc2V0WSA9IDA7XHJcbiAgICBjLmdsb2JhbEFscGhhID0gMTtcclxuICAgIHJldHVybiB0aGlzLmRyYXdGdW5jKFxyXG4gICAgICBjLFxyXG4gICAgICB0aGlzLngsXHJcbiAgICAgIHRoaXMueSxcclxuICAgICAgdGhpcy53LFxyXG4gICAgICB0aGlzLmgsXHJcbiAgICAgIHQub3V0bGluZUNvbG91cixcclxuICAgICAgdGFnLFxyXG4gICAgICB4MSxcclxuICAgICAgeTFcclxuICAgICk7XHJcbiAgfTtcclxuICBPcHJvdG8uRHJhd1B1bHNhdGUgPSBmdW5jdGlvbihjLCB0YWcsIHgxLCB5MSkge1xyXG4gICAgdmFyIGRpZmYgPSBUaW1lTm93KCkgLSB0aGlzLnRzLFxyXG4gICAgICB0ID0gdGhpcy50YztcclxuICAgIGMuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgYy5zdHJva2VTdHlsZSA9IHQub3V0bGluZUNvbG91cjtcclxuICAgIGMubGluZVdpZHRoID0gdC5vdXRsaW5lVGhpY2tuZXNzO1xyXG4gICAgYy5zaGFkb3dCbHVyID0gYy5zaGFkb3dPZmZzZXRYID0gYy5zaGFkb3dPZmZzZXRZID0gMDtcclxuICAgIGMuZ2xvYmFsQWxwaGEgPVxyXG4gICAgICB0LnB1bHNhdGVUbyArXHJcbiAgICAgICgxIC0gdC5wdWxzYXRlVG8pICpcclxuICAgICAgICAoMC41ICsgY29zKCgyICogTWF0aC5QSSAqIGRpZmYpIC8gKDEwMDAgKiB0LnB1bHNhdGVUaW1lKSkgLyAyKTtcclxuICAgIHJldHVybiB0aGlzLmRyYXdGdW5jKFxyXG4gICAgICBjLFxyXG4gICAgICB0aGlzLngsXHJcbiAgICAgIHRoaXMueSxcclxuICAgICAgdGhpcy53LFxyXG4gICAgICB0aGlzLmgsXHJcbiAgICAgIHQub3V0bGluZUNvbG91cixcclxuICAgICAgdGFnLFxyXG4gICAgICB4MSxcclxuICAgICAgeTFcclxuICAgICk7XHJcbiAgfTtcclxuICBPcHJvdG8uQWN0aXZlID0gZnVuY3Rpb24oYywgeCwgeSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgeCA+PSB0aGlzLnggJiYgeSA+PSB0aGlzLnkgJiYgeCA8PSB0aGlzLnggKyB0aGlzLncgJiYgeSA8PSB0aGlzLnkgKyB0aGlzLmhcclxuICAgICk7XHJcbiAgfTtcclxuICBPcHJvdG8uUHJlRHJhdyA9IE9wcm90by5Qb3N0RHJhdyA9IE9wcm90by5MYXN0RHJhdyA9IE5vcDtcclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBmdW5jdGlvbiBUYWcoXHJcbiAgICB0YyxcclxuICAgIHRleHQsXHJcbiAgICBhLFxyXG4gICAgdixcclxuICAgIHcsXHJcbiAgICBoLFxyXG4gICAgY29sLFxyXG4gICAgYmNvbCxcclxuICAgIGJyYWRpdXMsXHJcbiAgICBib3V0bGluZSxcclxuICAgIGJvdGhpY2tuZXNzLFxyXG4gICAgZm9udCxcclxuICAgIHBhZGRpbmcsXHJcbiAgICBvcmlnaW5hbFxyXG4gICkge1xyXG4gICAgdGhpcy50YyA9IHRjO1xyXG4gICAgdGhpcy5pbWFnZSA9IG51bGw7XHJcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgdGhpcy50ZXh0X29yaWdpbmFsID0gb3JpZ2luYWw7XHJcbiAgICB0aGlzLmxpbmVfd2lkdGhzID0gW107XHJcbiAgICB0aGlzLnRpdGxlID0gYS50aXRsZSB8fCBudWxsO1xyXG4gICAgdGhpcy5hID0gYTtcclxuICAgIHRoaXMucG9zaXRpb24gPSBuZXcgVmVjdG9yKHZbMF0sIHZbMV0sIHZbMl0pO1xyXG4gICAgdGhpcy54ID0gdGhpcy55ID0gdGhpcy56ID0gMDtcclxuICAgIHRoaXMudyA9IHc7XHJcbiAgICB0aGlzLmggPSBoO1xyXG4gICAgdGhpcy5jb2xvdXIgPSBjb2wgfHwgdGMudGV4dENvbG91cjtcclxuICAgIHRoaXMuYmdDb2xvdXIgPSBiY29sIHx8IHRjLmJnQ29sb3VyO1xyXG4gICAgdGhpcy5iZ1JhZGl1cyA9IGJyYWRpdXMgfCAwO1xyXG4gICAgdGhpcy5iZ091dGxpbmUgPSBib3V0bGluZSB8fCB0aGlzLmNvbG91cjtcclxuICAgIHRoaXMuYmdPdXRsaW5lVGhpY2tuZXNzID0gYm90aGlja25lc3MgfCAwO1xyXG4gICAgdGhpcy50ZXh0Rm9udCA9IGZvbnQgfHwgdGMudGV4dEZvbnQ7XHJcbiAgICB0aGlzLnBhZGRpbmcgPSBwYWRkaW5nIHwgMDtcclxuICAgIHRoaXMuc2MgPSB0aGlzLmFscGhhID0gMTtcclxuICAgIHRoaXMud2VpZ2h0ZWQgPSAhdGMud2VpZ2h0O1xyXG4gIH1cclxuICBUcHJvdG8gPSBUYWcucHJvdG90eXBlO1xyXG4gIFRwcm90by5Jbml0ID0gZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyIHRjID0gdGhpcy50YztcclxuICAgIHRoaXMub3V0bGluZSA9IG5ldyBPdXRsaW5lKHRjLCB0aGlzKTtcclxuICAgIHRoaXMudGV4dEhlaWdodCA9IHRjLnRleHRIZWlnaHQ7XHJcbiAgICBpZiAodGhpcy5IYXNUZXh0KCkpIHtcclxuICAgICAgdGhpcy5NZWFzdXJlKHRjLmN0eHQsIHRjKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudyA9IHRoaXMuaXc7XHJcbiAgICAgIHRoaXMuaCA9IHRoaXMuaWg7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5TZXRTaGFkb3dDb2xvdXIgPSB0Yy5zaGFkb3dBbHBoYVxyXG4gICAgICA/IHRoaXMuU2V0U2hhZG93Q29sb3VyQWxwaGFcclxuICAgICAgOiB0aGlzLlNldFNoYWRvd0NvbG91ckZpeGVkO1xyXG4gICAgdGhpcy5TZXREcmF3KHRjKTtcclxuICB9O1xyXG4gIFRwcm90by5EcmF3ID0gTm9wO1xyXG4gIFRwcm90by5IYXNUZXh0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy50ZXh0ICYmIHRoaXMudGV4dFswXS5sZW5ndGggPiAwO1xyXG4gIH07XHJcbiAgVHByb3RvLkVxdWFsVG8gPSBmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgaSA9IGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbWdcIik7XHJcbiAgICBpZiAodGhpcy5hLmhyZWYgIT0gZS5ocmVmKSByZXR1cm4gMDtcclxuICAgIGlmIChpLmxlbmd0aCkgcmV0dXJuIHRoaXMuaW1hZ2Uuc3JjID09IGlbMF0uc3JjO1xyXG4gICAgcmV0dXJuIChlLmlubmVyVGV4dCB8fCBlLnRleHRDb250ZW50KSA9PSB0aGlzLnRleHRfb3JpZ2luYWw7XHJcbiAgfTtcclxuICBUcHJvdG8uU2V0SW1hZ2UgPSBmdW5jdGlvbihpKSB7XHJcbiAgICB0aGlzLmltYWdlID0gdGhpcy5maW1hZ2UgPSBpO1xyXG4gIH07XHJcbiAgVHByb3RvLlNldERyYXcgPSBmdW5jdGlvbih0KSB7XHJcbiAgICB0aGlzLkRyYXcgPSB0aGlzLmZpbWFnZVxyXG4gICAgICA/IHQuaWUgPiA3XHJcbiAgICAgICAgPyB0aGlzLkRyYXdJbWFnZUlFXHJcbiAgICAgICAgOiB0aGlzLkRyYXdJbWFnZVxyXG4gICAgICA6IHRoaXMuRHJhd1RleHQ7XHJcbiAgICB0Lm5vU2VsZWN0ICYmICh0aGlzLkNoZWNrQWN0aXZlID0gTm9wKTtcclxuICB9O1xyXG4gIFRwcm90by5NZWFzdXJlVGV4dCA9IGZ1bmN0aW9uKGMpIHtcclxuICAgIHZhciBpLFxyXG4gICAgICBsID0gdGhpcy50ZXh0Lmxlbmd0aCxcclxuICAgICAgdyA9IDAsXHJcbiAgICAgIHdsO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IGw7ICsraSkge1xyXG4gICAgICB0aGlzLmxpbmVfd2lkdGhzW2ldID0gd2wgPSBjLm1lYXN1cmVUZXh0KHRoaXMudGV4dFtpXSkud2lkdGg7XHJcbiAgICAgIHcgPSBtYXgodywgd2wpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHc7XHJcbiAgfTtcclxuICBUcHJvdG8uTWVhc3VyZSA9IGZ1bmN0aW9uKGMsIHQpIHtcclxuICAgIHZhciBleHRlbnRzID0gRmluZFRleHRCb3VuZGluZ0JveChcclxuICAgICAgICB0aGlzLnRleHQsXHJcbiAgICAgICAgdGhpcy50ZXh0Rm9udCxcclxuICAgICAgICB0aGlzLnRleHRIZWlnaHRcclxuICAgICAgKSxcclxuICAgICAgcyxcclxuICAgICAgdGgsXHJcbiAgICAgIGYsXHJcbiAgICAgIHNvZmYsXHJcbiAgICAgIGN3LFxyXG4gICAgICB0d2lkdGgsXHJcbiAgICAgIHRoZWlnaHQsXHJcbiAgICAgIGltZyxcclxuICAgICAgdGN2O1xyXG4gICAgLy8gYWRkIHRoZSBnYXAgYXQgdGhlIHRvcCB0byB0aGUgaGVpZ2h0IHRvIG1ha2UgZXF1YWwgZ2FwIGF0IGJvdHRvbVxyXG4gICAgdGhlaWdodCA9IGV4dGVudHMgPyBleHRlbnRzLm1heC55ICsgZXh0ZW50cy5taW4ueSA6IHRoaXMudGV4dEhlaWdodDtcclxuICAgIGMuZm9udCA9IHRoaXMuZm9udCA9IHRoaXMudGV4dEhlaWdodCArIFwicHggXCIgKyB0aGlzLnRleHRGb250O1xyXG4gICAgdHdpZHRoID0gdGhpcy5NZWFzdXJlVGV4dChjKTtcclxuICAgIGlmICh0LnR4dE9wdCkge1xyXG4gICAgICBzID0gdC50eHRTY2FsZTtcclxuICAgICAgdGggPSBzICogdGhpcy50ZXh0SGVpZ2h0O1xyXG4gICAgICBmID0gdGggKyBcInB4IFwiICsgdGhpcy50ZXh0Rm9udDtcclxuICAgICAgc29mZiA9IFtzICogdC5zaGFkb3dPZmZzZXRbMF0sIHMgKiB0LnNoYWRvd09mZnNldFsxXV07XHJcbiAgICAgIGMuZm9udCA9IGY7XHJcbiAgICAgIGN3ID0gdGhpcy5NZWFzdXJlVGV4dChjKTtcclxuICAgICAgdGN2ID0gbmV3IFRleHRDYW52YXMoXHJcbiAgICAgICAgdGhpcy50ZXh0LFxyXG4gICAgICAgIGYsXHJcbiAgICAgICAgY3cgKyBzLFxyXG4gICAgICAgIHMgKiB0aGVpZ2h0ICsgcyxcclxuICAgICAgICBjdyxcclxuICAgICAgICB0aGlzLmxpbmVfd2lkdGhzLFxyXG4gICAgICAgIHQudGV4dEFsaWduLFxyXG4gICAgICAgIHQudGV4dFZBbGlnbixcclxuICAgICAgICBzXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAodGhpcy5pbWFnZSlcclxuICAgICAgICB0Y3YuU2V0SW1hZ2UoXHJcbiAgICAgICAgICB0aGlzLmltYWdlLFxyXG4gICAgICAgICAgdGhpcy5pdyxcclxuICAgICAgICAgIHRoaXMuaWgsXHJcbiAgICAgICAgICB0LmltYWdlUG9zaXRpb24sXHJcbiAgICAgICAgICB0LmltYWdlUGFkZGluZyxcclxuICAgICAgICAgIHQuaW1hZ2VBbGlnbixcclxuICAgICAgICAgIHQuaW1hZ2VWQWxpZ24sXHJcbiAgICAgICAgICB0LmltYWdlU2NhbGVcclxuICAgICAgICApO1xyXG5cclxuICAgICAgaW1nID0gdGN2LkNyZWF0ZShcclxuICAgICAgICB0aGlzLmNvbG91cixcclxuICAgICAgICB0aGlzLmJnQ29sb3VyLFxyXG4gICAgICAgIHRoaXMuYmdPdXRsaW5lLFxyXG4gICAgICAgIHMgKiB0aGlzLmJnT3V0bGluZVRoaWNrbmVzcyxcclxuICAgICAgICB0LnNoYWRvdyxcclxuICAgICAgICBzICogdC5zaGFkb3dCbHVyLFxyXG4gICAgICAgIHNvZmYsXHJcbiAgICAgICAgcyAqIHRoaXMucGFkZGluZyxcclxuICAgICAgICBzICogdGhpcy5iZ1JhZGl1c1xyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gYWRkIG91dGxpbmUgaW1hZ2UgdXNpbmcgaGlnaGxpZ2h0IGNvbG91clxyXG4gICAgICBpZiAodC5vdXRsaW5lTWV0aG9kID09IFwiY29sb3VyXCIpIHtcclxuICAgICAgICB0aGlzLm9pbWFnZSA9IHRjdi5DcmVhdGUoXHJcbiAgICAgICAgICB0Lm91dGxpbmVDb2xvdXIsXHJcbiAgICAgICAgICB0aGlzLmJnQ29sb3VyLFxyXG4gICAgICAgICAgdC5vdXRsaW5lQ29sb3VyLFxyXG4gICAgICAgICAgcyAqIHRoaXMuYmdPdXRsaW5lVGhpY2tuZXNzLFxyXG4gICAgICAgICAgdC5zaGFkb3csXHJcbiAgICAgICAgICBzICogdC5zaGFkb3dCbHVyLFxyXG4gICAgICAgICAgc29mZixcclxuICAgICAgICAgIHMgKiB0aGlzLnBhZGRpbmcsXHJcbiAgICAgICAgICBzICogdGhpcy5iZ1JhZGl1c1xyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSBpZiAodC5vdXRsaW5lTWV0aG9kID09IFwic2l6ZVwiKSB7XHJcbiAgICAgICAgZXh0ZW50cyA9IEZpbmRUZXh0Qm91bmRpbmdCb3goXHJcbiAgICAgICAgICB0aGlzLnRleHQsXHJcbiAgICAgICAgICB0aGlzLnRleHRGb250LFxyXG4gICAgICAgICAgdGhpcy50ZXh0SGVpZ2h0ICsgdC5vdXRsaW5lSW5jcmVhc2VcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoID0gZXh0ZW50cy5tYXgueSArIGV4dGVudHMubWluLnk7XHJcbiAgICAgICAgZiA9IHMgKiAodGhpcy50ZXh0SGVpZ2h0ICsgdC5vdXRsaW5lSW5jcmVhc2UpICsgXCJweCBcIiArIHRoaXMudGV4dEZvbnQ7XHJcbiAgICAgICAgYy5mb250ID0gZjtcclxuICAgICAgICBjdyA9IHRoaXMuTWVhc3VyZVRleHQoYyk7XHJcblxyXG4gICAgICAgIHRjdiA9IG5ldyBUZXh0Q2FudmFzKFxyXG4gICAgICAgICAgdGhpcy50ZXh0LFxyXG4gICAgICAgICAgZixcclxuICAgICAgICAgIGN3ICsgcyxcclxuICAgICAgICAgIHMgKiB0aCArIHMsXHJcbiAgICAgICAgICBjdyxcclxuICAgICAgICAgIHRoaXMubGluZV93aWR0aHMsXHJcbiAgICAgICAgICB0LnRleHRBbGlnbixcclxuICAgICAgICAgIHQudGV4dFZBbGlnbixcclxuICAgICAgICAgIHNcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmICh0aGlzLmltYWdlKVxyXG4gICAgICAgICAgdGN2LlNldEltYWdlKFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlLFxyXG4gICAgICAgICAgICB0aGlzLml3ICsgdC5vdXRsaW5lSW5jcmVhc2UsXHJcbiAgICAgICAgICAgIHRoaXMuaWggKyB0Lm91dGxpbmVJbmNyZWFzZSxcclxuICAgICAgICAgICAgdC5pbWFnZVBvc2l0aW9uLFxyXG4gICAgICAgICAgICB0LmltYWdlUGFkZGluZyxcclxuICAgICAgICAgICAgdC5pbWFnZUFsaWduLFxyXG4gICAgICAgICAgICB0LmltYWdlVkFsaWduLFxyXG4gICAgICAgICAgICB0LmltYWdlU2NhbGVcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMub2ltYWdlID0gdGN2LkNyZWF0ZShcclxuICAgICAgICAgIHRoaXMuY29sb3VyLFxyXG4gICAgICAgICAgdGhpcy5iZ0NvbG91cixcclxuICAgICAgICAgIHRoaXMuYmdPdXRsaW5lLFxyXG4gICAgICAgICAgcyAqIHRoaXMuYmdPdXRsaW5lVGhpY2tuZXNzLFxyXG4gICAgICAgICAgdC5zaGFkb3csXHJcbiAgICAgICAgICBzICogdC5zaGFkb3dCbHVyLFxyXG4gICAgICAgICAgc29mZixcclxuICAgICAgICAgIHMgKiB0aGlzLnBhZGRpbmcsXHJcbiAgICAgICAgICBzICogdGhpcy5iZ1JhZGl1c1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmICh0Lm91dGxpbmVJbmNyZWFzZSA+IDApXHJcbiAgICAgICAgICBpbWcgPSBFeHBhbmRJbWFnZShpbWcsIHRoaXMub2ltYWdlLndpZHRoLCB0aGlzLm9pbWFnZS5oZWlnaHQpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5vaW1hZ2UgPSBFeHBhbmRJbWFnZSh0aGlzLm9pbWFnZSwgaW1nLndpZHRoLCBpbWcuaGVpZ2h0KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaW1nKSB7XHJcbiAgICAgICAgdGhpcy5maW1hZ2UgPSBpbWc7XHJcbiAgICAgICAgdHdpZHRoID0gdGhpcy5maW1hZ2Uud2lkdGggLyBzO1xyXG4gICAgICAgIHRoZWlnaHQgPSB0aGlzLmZpbWFnZS5oZWlnaHQgLyBzO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuU2V0RHJhdyh0KTtcclxuICAgICAgdC50eHRPcHQgPSAhIXRoaXMuZmltYWdlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5oID0gdGhlaWdodDtcclxuICAgIHRoaXMudyA9IHR3aWR0aDtcclxuICB9O1xyXG4gIFRwcm90by5TZXRGb250ID0gZnVuY3Rpb24oZiwgYywgYmMsIGJvYykge1xyXG4gICAgdGhpcy50ZXh0Rm9udCA9IGY7XHJcbiAgICB0aGlzLmNvbG91ciA9IGM7XHJcbiAgICB0aGlzLmJnQ29sb3VyID0gYmM7XHJcbiAgICB0aGlzLmJnT3V0bGluZSA9IGJvYztcclxuICAgIHRoaXMuTWVhc3VyZSh0aGlzLnRjLmN0eHQsIHRoaXMudGMpO1xyXG4gIH07XHJcbiAgVHByb3RvLlNldFdlaWdodCA9IGZ1bmN0aW9uKHcpIHtcclxuICAgIHZhciB0YyA9IHRoaXMudGMsXHJcbiAgICAgIG1vZGVzID0gdGMud2VpZ2h0TW9kZS5zcGxpdCgvWywgXS8pLFxyXG4gICAgICBtLFxyXG4gICAgICBzLFxyXG4gICAgICB3bCA9IHcubGVuZ3RoO1xyXG4gICAgaWYgKCF0aGlzLkhhc1RleHQoKSkgcmV0dXJuO1xyXG4gICAgdGhpcy53ZWlnaHRlZCA9IHRydWU7XHJcbiAgICBmb3IgKHMgPSAwOyBzIDwgd2w7ICsrcykge1xyXG4gICAgICBtID0gbW9kZXNbc10gfHwgXCJzaXplXCI7XHJcbiAgICAgIGlmIChcImJvdGhcIiA9PSBtKSB7XHJcbiAgICAgICAgdGhpcy5XZWlnaHQoXHJcbiAgICAgICAgICB3W3NdLFxyXG4gICAgICAgICAgdGMuY3R4dCxcclxuICAgICAgICAgIHRjLFxyXG4gICAgICAgICAgXCJzaXplXCIsXHJcbiAgICAgICAgICB0Yy5taW5fd2VpZ2h0W3NdLFxyXG4gICAgICAgICAgdGMubWF4X3dlaWdodFtzXSxcclxuICAgICAgICAgIHNcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuV2VpZ2h0KFxyXG4gICAgICAgICAgd1tzXSxcclxuICAgICAgICAgIHRjLmN0eHQsXHJcbiAgICAgICAgICB0YyxcclxuICAgICAgICAgIFwiY29sb3VyXCIsXHJcbiAgICAgICAgICB0Yy5taW5fd2VpZ2h0W3NdLFxyXG4gICAgICAgICAgdGMubWF4X3dlaWdodFtzXSxcclxuICAgICAgICAgIHNcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuV2VpZ2h0KFxyXG4gICAgICAgICAgd1tzXSxcclxuICAgICAgICAgIHRjLmN0eHQsXHJcbiAgICAgICAgICB0YyxcclxuICAgICAgICAgIG0sXHJcbiAgICAgICAgICB0Yy5taW5fd2VpZ2h0W3NdLFxyXG4gICAgICAgICAgdGMubWF4X3dlaWdodFtzXSxcclxuICAgICAgICAgIHNcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLk1lYXN1cmUodGMuY3R4dCwgdGMpO1xyXG4gIH07XHJcbiAgVHByb3RvLldlaWdodCA9IGZ1bmN0aW9uKHcsIGMsIHQsIG0sIHdtaW4sIHdtYXgsIHdudW0pIHtcclxuICAgIHcgPSBpc05hTih3KSA/IDEgOiB3O1xyXG4gICAgdmFyIG53ZWlnaHQgPSAodyAtIHdtaW4pIC8gKHdtYXggLSB3bWluKTtcclxuICAgIGlmIChcImNvbG91clwiID09IG0pIHRoaXMuY29sb3VyID0gRmluZEdyYWRpZW50Q29sb3VyKHQsIG53ZWlnaHQsIHdudW0pO1xyXG4gICAgZWxzZSBpZiAoXCJiZ2NvbG91clwiID09IG0pXHJcbiAgICAgIHRoaXMuYmdDb2xvdXIgPSBGaW5kR3JhZGllbnRDb2xvdXIodCwgbndlaWdodCwgd251bSk7XHJcbiAgICBlbHNlIGlmIChcImJnb3V0bGluZVwiID09IG0pXHJcbiAgICAgIHRoaXMuYmdPdXRsaW5lID0gRmluZEdyYWRpZW50Q29sb3VyKHQsIG53ZWlnaHQsIHdudW0pO1xyXG4gICAgZWxzZSBpZiAoXCJzaXplXCIgPT0gbSkge1xyXG4gICAgICBpZiAodC53ZWlnaHRTaXplTWluID4gMCAmJiB0LndlaWdodFNpemVNYXggPiB0LndlaWdodFNpemVNaW4pIHtcclxuICAgICAgICB0aGlzLnRleHRIZWlnaHQgPVxyXG4gICAgICAgICAgdC53ZWlnaHRTaXplICpcclxuICAgICAgICAgICh0LndlaWdodFNpemVNaW4gKyAodC53ZWlnaHRTaXplTWF4IC0gdC53ZWlnaHRTaXplTWluKSAqIG53ZWlnaHQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIG1pbiB0ZXh0SGVpZ2h0IG9mIDFcclxuICAgICAgICB0aGlzLnRleHRIZWlnaHQgPSBtYXgoMSwgdyAqIHQud2VpZ2h0U2l6ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIFRwcm90by5TZXRTaGFkb3dDb2xvdXJGaXhlZCA9IGZ1bmN0aW9uKGMsIHMsIGEpIHtcclxuICAgIGMuc2hhZG93Q29sb3IgPSBzO1xyXG4gIH07XHJcbiAgVHByb3RvLlNldFNoYWRvd0NvbG91ckFscGhhID0gZnVuY3Rpb24oYywgcywgYSkge1xyXG4gICAgYy5zaGFkb3dDb2xvciA9IFNldEFscGhhKHMsIGEpO1xyXG4gIH07XHJcbiAgVHByb3RvLkRyYXdUZXh0ID0gZnVuY3Rpb24oYywgeG9mZiwgeW9mZikge1xyXG4gICAgdmFyIHQgPSB0aGlzLnRjLFxyXG4gICAgICB4ID0gdGhpcy54LFxyXG4gICAgICB5ID0gdGhpcy55LFxyXG4gICAgICBzID0gdGhpcy5zYyxcclxuICAgICAgaSxcclxuICAgICAgeGw7XHJcbiAgICBjLmdsb2JhbEFscGhhID0gdGhpcy5hbHBoYTtcclxuICAgIGMuZmlsbFN0eWxlID0gdGhpcy5jb2xvdXI7XHJcbiAgICB0LnNoYWRvdyAmJiB0aGlzLlNldFNoYWRvd0NvbG91cihjLCB0LnNoYWRvdywgdGhpcy5hbHBoYSk7XHJcbiAgICBjLmZvbnQgPSB0aGlzLmZvbnQ7XHJcbiAgICB4ICs9IHhvZmYgLyBzO1xyXG4gICAgeSArPSB5b2ZmIC8gcyAtIHRoaXMuaCAvIDI7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy50ZXh0Lmxlbmd0aDsgKytpKSB7XHJcbiAgICAgIHhsID0geDtcclxuICAgICAgaWYgKFwicmlnaHRcIiA9PSB0LnRleHRBbGlnbikge1xyXG4gICAgICAgIHhsICs9IHRoaXMudyAvIDIgLSB0aGlzLmxpbmVfd2lkdGhzW2ldO1xyXG4gICAgICB9IGVsc2UgaWYgKFwiY2VudHJlXCIgPT0gdC50ZXh0QWxpZ24pIHtcclxuICAgICAgICB4bCAtPSB0aGlzLmxpbmVfd2lkdGhzW2ldIC8gMjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB4bCAtPSB0aGlzLncgLyAyO1xyXG4gICAgICB9XHJcbiAgICAgIGMuc2V0VHJhbnNmb3JtKHMsIDAsIDAsIHMsIHMgKiB4bCwgcyAqIHkpO1xyXG4gICAgICBjLmZpbGxUZXh0KHRoaXMudGV4dFtpXSwgMCwgMCk7XHJcbiAgICAgIHkgKz0gdGhpcy50ZXh0SGVpZ2h0O1xyXG4gICAgfVxyXG4gIH07XHJcbiAgVHByb3RvLkRyYXdJbWFnZSA9IGZ1bmN0aW9uKGMsIHhvZmYsIHlvZmYsIGltKSB7XHJcbiAgICB2YXIgeCA9IHRoaXMueCxcclxuICAgICAgeSA9IHRoaXMueSxcclxuICAgICAgcyA9IHRoaXMuc2MsXHJcbiAgICAgIGkgPSBpbSB8fCB0aGlzLmZpbWFnZSxcclxuICAgICAgdyA9IHRoaXMudyxcclxuICAgICAgaCA9IHRoaXMuaCxcclxuICAgICAgYSA9IHRoaXMuYWxwaGEsXHJcbiAgICAgIHNoYWRvdyA9IHRoaXMuc2hhZG93O1xyXG4gICAgYy5nbG9iYWxBbHBoYSA9IGE7XHJcbiAgICBzaGFkb3cgJiYgdGhpcy5TZXRTaGFkb3dDb2xvdXIoYywgc2hhZG93LCBhKTtcclxuICAgIHggKz0geG9mZiAvIHMgLSB3IC8gMjtcclxuICAgIHkgKz0geW9mZiAvIHMgLSBoIC8gMjtcclxuICAgIGMuc2V0VHJhbnNmb3JtKHMsIDAsIDAsIHMsIHMgKiB4LCBzICogeSk7XHJcbiAgICBjLmRyYXdJbWFnZShpLCAwLCAwLCB3LCBoKTtcclxuICB9O1xyXG4gIFRwcm90by5EcmF3SW1hZ2VJRSA9IGZ1bmN0aW9uKGMsIHhvZmYsIHlvZmYpIHtcclxuICAgIHZhciBpID0gdGhpcy5maW1hZ2UsXHJcbiAgICAgIHMgPSB0aGlzLnNjLFxyXG4gICAgICB3ID0gKGkud2lkdGggPSB0aGlzLncgKiBzKSxcclxuICAgICAgaCA9IChpLmhlaWdodCA9IHRoaXMuaCAqIHMpLFxyXG4gICAgICB4ID0gdGhpcy54ICogcyArIHhvZmYgLSB3IC8gMixcclxuICAgICAgeSA9IHRoaXMueSAqIHMgKyB5b2ZmIC0gaCAvIDI7XHJcbiAgICBjLnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgIGMuZ2xvYmFsQWxwaGEgPSB0aGlzLmFscGhhO1xyXG4gICAgYy5kcmF3SW1hZ2UoaSwgeCwgeSk7XHJcbiAgfTtcclxuICBUcHJvdG8uQ2FsYyA9IGZ1bmN0aW9uKG0sIGEpIHtcclxuICAgIHZhciBwcCxcclxuICAgICAgdCA9IHRoaXMudGMsXHJcbiAgICAgIG1uYiA9IHQubWluQnJpZ2h0bmVzcyxcclxuICAgICAgbXhiID0gdC5tYXhCcmlnaHRuZXNzLFxyXG4gICAgICByID0gdC5tYXhfcmFkaXVzO1xyXG4gICAgcHAgPSBtLnhmb3JtKHRoaXMucG9zaXRpb24pO1xyXG4gICAgdGhpcy54Zm9ybWVkID0gcHA7XHJcbiAgICBwcCA9IFByb2plY3QodCwgcHAsIHQuc3RyZXRjaFgsIHQuc3RyZXRjaFkpO1xyXG4gICAgdGhpcy54ID0gcHAueDtcclxuICAgIHRoaXMueSA9IHBwLnk7XHJcbiAgICB0aGlzLnogPSBwcC56O1xyXG4gICAgdGhpcy5zYyA9IHBwLnc7XHJcbiAgICB0aGlzLmFscGhhID0gYSAqIENsYW1wKG1uYiArICgobXhiIC0gbW5iKSAqIChyIC0gdGhpcy56KSkgLyAoMiAqIHIpLCAwLCAxKTtcclxuICB9O1xyXG4gIFRwcm90by5VcGRhdGVBY3RpdmUgPSBmdW5jdGlvbihjLCB4b2ZmLCB5b2ZmKSB7XHJcbiAgICB2YXIgbyA9IHRoaXMub3V0bGluZSxcclxuICAgICAgdyA9IHRoaXMudyxcclxuICAgICAgaCA9IHRoaXMuaCxcclxuICAgICAgeCA9IHRoaXMueCAtIHcgLyAyLFxyXG4gICAgICB5ID0gdGhpcy55IC0gaCAvIDI7XHJcbiAgICBvLlVwZGF0ZSh4LCB5LCB3LCBoLCB0aGlzLnNjLCB0aGlzLnosIHhvZmYsIHlvZmYpO1xyXG4gICAgcmV0dXJuIG87XHJcbiAgfTtcclxuICBUcHJvdG8uQ2hlY2tBY3RpdmUgPSBmdW5jdGlvbihjLCB4b2ZmLCB5b2ZmKSB7XHJcbiAgICB2YXIgdCA9IHRoaXMudGMsXHJcbiAgICAgIG8gPSB0aGlzLlVwZGF0ZUFjdGl2ZShjLCB4b2ZmLCB5b2ZmKTtcclxuICAgIHJldHVybiBvLkFjdGl2ZShjLCB0Lm14LCB0Lm15KSA/IG8gOiBudWxsO1xyXG4gIH07XHJcbiAgVHByb3RvLkNsaWNrZWQgPSBmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgYSA9IHRoaXMuYSxcclxuICAgICAgdCA9IGEudGFyZ2V0LFxyXG4gICAgICBoID0gYS5ocmVmLFxyXG4gICAgICBldnQ7XHJcbiAgICBpZiAodCAhPSBcIlwiICYmIHQgIT0gXCJfc2VsZlwiKSB7XHJcbiAgICAgIGlmIChzZWxmLmZyYW1lc1t0XSkge1xyXG4gICAgICAgIHNlbGYuZnJhbWVzW3RdLmRvY3VtZW50LmxvY2F0aW9uID0gaDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgaWYgKHRvcC5mcmFtZXNbdF0pIHtcclxuICAgICAgICAgICAgdG9wLmZyYW1lc1t0XS5kb2N1bWVudC5sb2NhdGlvbiA9IGg7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIC8vIGRpZmZlcmVudCBkb21haW4vcG9ydC9wcm90b2NvbD9cclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93Lm9wZW4oaCwgdCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGRvYy5jcmVhdGVFdmVudCkge1xyXG4gICAgICBldnQgPSBkb2MuY3JlYXRlRXZlbnQoXCJNb3VzZUV2ZW50c1wiKTtcclxuICAgICAgZXZ0LmluaXRNb3VzZUV2ZW50KFxyXG4gICAgICAgIFwiY2xpY2tcIixcclxuICAgICAgICAxLFxyXG4gICAgICAgIDEsXHJcbiAgICAgICAgd2luZG93LFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgMCxcclxuICAgICAgICAwLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgMCxcclxuICAgICAgICAwLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgMCxcclxuICAgICAgICAwLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgbnVsbFxyXG4gICAgICApO1xyXG4gICAgICBpZiAoIWEuZGlzcGF0Y2hFdmVudChldnQpKSByZXR1cm47XHJcbiAgICB9IGVsc2UgaWYgKGEuZmlyZUV2ZW50KSB7XHJcbiAgICAgIGlmICghYS5maXJlRXZlbnQoXCJvbmNsaWNrXCIpKSByZXR1cm47XHJcbiAgICB9XHJcbiAgICBkb2MubG9jYXRpb24gPSBoO1xyXG4gIH07XHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gVGFnQ2FudmFzKGNpZCwgbGN0ciwgb3B0KSB7XHJcbiAgICB2YXIgaSxcclxuICAgICAgcCxcclxuICAgICAgYyA9IGRvYy5nZXRFbGVtZW50QnlJZChjaWQpLFxyXG4gICAgICBjcCA9IFtcImlkXCIsIFwiY2xhc3NcIiwgXCJpbm5lckhUTUxcIl0sXHJcbiAgICAgIHJhZjtcclxuICAgIGlmICghYykgdGhyb3cgMDtcclxuICAgIGlmIChEZWZpbmVkKHdpbmRvdy5HX3ZtbENhbnZhc01hbmFnZXIpKSB7XHJcbiAgICAgIGMgPSB3aW5kb3cuR192bWxDYW52YXNNYW5hZ2VyLmluaXRFbGVtZW50KGMpO1xyXG4gICAgICB0aGlzLmllID0gcGFyc2VGbG9hdChuYXZpZ2F0b3IuYXBwVmVyc2lvbi5zcGxpdChcIk1TSUVcIilbMV0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGMgJiYgKCFjLmdldENvbnRleHQgfHwgIWMuZ2V0Q29udGV4dChcIjJkXCIpLmZpbGxUZXh0KSkge1xyXG4gICAgICBwID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XHJcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBjcC5sZW5ndGg7ICsraSkgcFtjcFtpXV0gPSBjW2NwW2ldXTtcclxuICAgICAgYy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShwLCBjKTtcclxuICAgICAgYy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGMpO1xyXG4gICAgICB0aHJvdyAwO1xyXG4gICAgfVxyXG4gICAgZm9yIChpIGluIFRhZ0NhbnZhcy5vcHRpb25zKVxyXG4gICAgICB0aGlzW2ldID1cclxuICAgICAgICBvcHQgJiYgRGVmaW5lZChvcHRbaV0pXHJcbiAgICAgICAgICA/IG9wdFtpXVxyXG4gICAgICAgICAgOiBEZWZpbmVkKFRhZ0NhbnZhc1tpXSlcclxuICAgICAgICAgID8gVGFnQ2FudmFzW2ldXHJcbiAgICAgICAgICA6IFRhZ0NhbnZhcy5vcHRpb25zW2ldO1xyXG5cclxuICAgIHRoaXMuY2FudmFzID0gYztcclxuICAgIHRoaXMuY3R4dCA9IGMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgdGhpcy56MSA9IDI1MCAvIG1heCh0aGlzLmRlcHRoLCAwLjAwMSk7XHJcbiAgICB0aGlzLnoyID0gdGhpcy56MSAvIHRoaXMuem9vbTtcclxuICAgIHRoaXMucmFkaXVzID0gbWluKGMuaGVpZ2h0LCBjLndpZHRoKSAqIDAuMDA3NTsgLy8gZml0cyByYWRpdXMgb2YgMTAwIGluIGNhbnZhc1xyXG4gICAgdGhpcy5tYXhfcmFkaXVzID0gMTAwO1xyXG4gICAgdGhpcy5tYXhfd2VpZ2h0ID0gW107XHJcbiAgICB0aGlzLm1pbl93ZWlnaHQgPSBbXTtcclxuICAgIHRoaXMudGV4dEZvbnQgPSB0aGlzLnRleHRGb250ICYmIEZpeEZvbnQodGhpcy50ZXh0Rm9udCk7XHJcbiAgICB0aGlzLnRleHRIZWlnaHQgKj0gMTtcclxuICAgIHRoaXMucHVsc2F0ZVRvID0gQ2xhbXAodGhpcy5wdWxzYXRlVG8sIDAsIDEpO1xyXG4gICAgdGhpcy5taW5CcmlnaHRuZXNzID0gQ2xhbXAodGhpcy5taW5CcmlnaHRuZXNzLCAwLCAxKTtcclxuICAgIHRoaXMubWF4QnJpZ2h0bmVzcyA9IENsYW1wKHRoaXMubWF4QnJpZ2h0bmVzcywgdGhpcy5taW5CcmlnaHRuZXNzLCAxKTtcclxuICAgIHRoaXMuY3R4dC50ZXh0QmFzZWxpbmUgPSBcInRvcFwiO1xyXG4gICAgdGhpcy5seCA9ICh0aGlzLmxvY2sgKyBcIlwiKS5pbmRleE9mKFwieFwiKSArIDE7XHJcbiAgICB0aGlzLmx5ID0gKHRoaXMubG9jayArIFwiXCIpLmluZGV4T2YoXCJ5XCIpICsgMTtcclxuICAgIHRoaXMuZnJvemVuID0gdGhpcy5keCA9IHRoaXMuZHkgPSB0aGlzLmZpeGVkQW5pbSA9IHRoaXMudG91Y2hTdGF0ZSA9IDA7XHJcbiAgICB0aGlzLmZpeGVkQWxwaGEgPSAxO1xyXG4gICAgdGhpcy5zb3VyY2UgPSBsY3RyIHx8IGNpZDtcclxuICAgIHRoaXMucmVwZWF0VGFncyA9IG1pbig2NCwgfn50aGlzLnJlcGVhdFRhZ3MpO1xyXG4gICAgdGhpcy5taW5UYWdzID0gbWluKDIwMCwgfn50aGlzLm1pblRhZ3MpO1xyXG4gICAgaWYgKHRoaXMubWluVGFncyA+IDAgJiYgdGhpcy5yZXBlYXRUYWdzIDwgMSAmJiAoaSA9IHRoaXMuR2V0VGFncygpLmxlbmd0aCkpXHJcbiAgICAgIHRoaXMucmVwZWF0VGFncyA9IGNlaWwodGhpcy5taW5UYWdzIC8gaSkgLSAxO1xyXG4gICAgdGhpcy50cmFuc2Zvcm0gPSBNYXRyaXguSWRlbnRpdHkoKTtcclxuICAgIHRoaXMuc3RhcnRUaW1lID0gdGhpcy50aW1lID0gVGltZU5vdygpO1xyXG4gICAgdGhpcy5teCA9IHRoaXMubXkgPSAtMTtcclxuICAgIHRoaXMuY2VudHJlSW1hZ2UgJiYgQ2VudHJlSW1hZ2UodGhpcyk7XHJcbiAgICB0aGlzLkFuaW1hdGUgPSB0aGlzLmRyYWdDb250cm9sID8gdGhpcy5BbmltYXRlRHJhZyA6IHRoaXMuQW5pbWF0ZVBvc2l0aW9uO1xyXG4gICAgdGhpcy5hbmltVGltaW5nID1cclxuICAgICAgdHlwZW9mIFRhZ0NhbnZhc1t0aGlzLmFuaW1UaW1pbmddID09IFwiZnVuY3Rpb25cIlxyXG4gICAgICAgID8gVGFnQ2FudmFzW3RoaXMuYW5pbVRpbWluZ11cclxuICAgICAgICA6IFRhZ0NhbnZhcy5TbW9vdGg7XHJcbiAgICBpZiAodGhpcy5zaGFkb3dCbHVyIHx8IHRoaXMuc2hhZG93T2Zmc2V0WzBdIHx8IHRoaXMuc2hhZG93T2Zmc2V0WzFdKSB7XHJcbiAgICAgIC8vIGxldCB0aGUgYnJvd3NlciB0cmFuc2xhdGUgXCJyZWRcIiBpbnRvIFwiI2ZmMDAwMFwiXHJcbiAgICAgIHRoaXMuY3R4dC5zaGFkb3dDb2xvciA9IHRoaXMuc2hhZG93O1xyXG4gICAgICB0aGlzLnNoYWRvdyA9IHRoaXMuY3R4dC5zaGFkb3dDb2xvcjtcclxuICAgICAgdGhpcy5zaGFkb3dBbHBoYSA9IFNoYWRvd0FscGhhQnJva2VuKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZWxldGUgdGhpcy5zaGFkb3c7XHJcbiAgICB9XHJcbiAgICB0aGlzLkxvYWQoKTtcclxuICAgIGlmIChsY3RyICYmIHRoaXMuaGlkZVRhZ3MpIHtcclxuICAgICAgKGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBpZiAoVGFnQ2FudmFzLmxvYWRlZCkgdC5IaWRlVGFncygpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIEFkZEhhbmRsZXIoXHJcbiAgICAgICAgICAgIFwibG9hZFwiLFxyXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICB0LkhpZGVUYWdzKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHdpbmRvd1xyXG4gICAgICAgICAgKTtcclxuICAgICAgfSkodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy55YXcgPSB0aGlzLmluaXRpYWwgPyB0aGlzLmluaXRpYWxbMF0gKiB0aGlzLm1heFNwZWVkIDogMDtcclxuICAgIHRoaXMucGl0Y2ggPSB0aGlzLmluaXRpYWwgPyB0aGlzLmluaXRpYWxbMV0gKiB0aGlzLm1heFNwZWVkIDogMDtcclxuICAgIGlmICh0aGlzLnRvb2x0aXApIHtcclxuICAgICAgdGhpcy5jdGl0bGUgPSBjLnRpdGxlO1xyXG4gICAgICBjLnRpdGxlID0gXCJcIjtcclxuICAgICAgaWYgKHRoaXMudG9vbHRpcCA9PSBcIm5hdGl2ZVwiKSB7XHJcbiAgICAgICAgdGhpcy5Ub29sdGlwID0gdGhpcy5Ub29sdGlwTmF0aXZlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuVG9vbHRpcCA9IHRoaXMuVG9vbHRpcERpdjtcclxuICAgICAgICBpZiAoIXRoaXMudHRkaXYpIHtcclxuICAgICAgICAgIHRoaXMudHRkaXYgPSBkb2MuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgIHRoaXMudHRkaXYuY2xhc3NOYW1lID0gdGhpcy50b29sdGlwQ2xhc3M7XHJcbiAgICAgICAgICB0aGlzLnR0ZGl2LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgICAgdGhpcy50dGRpdi5zdHlsZS56SW5kZXggPSBjLnN0eWxlLnpJbmRleCArIDE7XHJcbiAgICAgICAgICBBZGRIYW5kbGVyKFxyXG4gICAgICAgICAgICBcIm1vdXNlb3ZlclwiLFxyXG4gICAgICAgICAgICBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aGlzLnR0ZGl2XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgZG9jLmJvZHkuYXBwZW5kQ2hpbGQodGhpcy50dGRpdik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLlRvb2x0aXAgPSB0aGlzLlRvb2x0aXBOb25lO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLm5vTW91c2UgJiYgIWhhbmRsZXJzW2NpZF0pIHtcclxuICAgICAgaGFuZGxlcnNbY2lkXSA9IFtcclxuICAgICAgICBbXCJtb3VzZW1vdmVcIiwgTW91c2VNb3ZlXSxcclxuICAgICAgICBbXCJtb3VzZW91dFwiLCBNb3VzZU91dF0sXHJcbiAgICAgICAgW1wibW91c2V1cFwiLCBNb3VzZVVwXSxcclxuICAgICAgICBbXCJ0b3VjaHN0YXJ0XCIsIFRvdWNoRG93bl0sXHJcbiAgICAgICAgW1widG91Y2hlbmRcIiwgVG91Y2hVcF0sXHJcbiAgICAgICAgW1widG91Y2hjYW5jZWxcIiwgVG91Y2hVcF0sXHJcbiAgICAgICAgW1widG91Y2htb3ZlXCIsIFRvdWNoTW92ZV1cclxuICAgICAgXTtcclxuICAgICAgaWYgKHRoaXMuZHJhZ0NvbnRyb2wpIHtcclxuICAgICAgICBoYW5kbGVyc1tjaWRdLnB1c2goW1wibW91c2Vkb3duXCIsIE1vdXNlRG93bl0pO1xyXG4gICAgICAgIGhhbmRsZXJzW2NpZF0ucHVzaChbXCJzZWxlY3RzdGFydFwiLCBOb3BdKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy53aGVlbFpvb20pIHtcclxuICAgICAgICBoYW5kbGVyc1tjaWRdLnB1c2goW1wibW91c2V3aGVlbFwiLCBNb3VzZVdoZWVsXSk7XHJcbiAgICAgICAgaGFuZGxlcnNbY2lkXS5wdXNoKFtcIkRPTU1vdXNlU2Nyb2xsXCIsIE1vdXNlV2hlZWxdKTtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgaGFuZGxlcnNbY2lkXS5sZW5ndGg7ICsraSlcclxuICAgICAgICBBZGRIYW5kbGVyKGhhbmRsZXJzW2NpZF1baV1bMF0sIGhhbmRsZXJzW2NpZF1baV1bMV0sIGMpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFUYWdDYW52YXMuc3RhcnRlZCkge1xyXG4gICAgICByYWYgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID1cclxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XHJcbiAgICAgIFRhZ0NhbnZhcy5OZXh0RnJhbWUgPSByYWZcclxuICAgICAgICA/IFRhZ0NhbnZhcy5OZXh0RnJhbWVSQUZcclxuICAgICAgICA6IFRhZ0NhbnZhcy5OZXh0RnJhbWVUaW1lb3V0O1xyXG4gICAgICBUYWdDYW52YXMuaW50ZXJ2YWwgPSB0aGlzLmludGVydmFsO1xyXG4gICAgICBUYWdDYW52YXMuTmV4dEZyYW1lKHRoaXMuaW50ZXJ2YWwpO1xyXG4gICAgICBUYWdDYW52YXMuc3RhcnRlZCA9IDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFRDcHJvdG8gPSBUYWdDYW52YXMucHJvdG90eXBlO1xyXG4gIFRDcHJvdG8uU291cmNlRWxlbWVudHMgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmIChkb2MucXVlcnlTZWxlY3RvckFsbCkgcmV0dXJuIGRvYy5xdWVyeVNlbGVjdG9yQWxsKFwiI1wiICsgdGhpcy5zb3VyY2UpO1xyXG4gICAgcmV0dXJuIFtkb2MuZ2V0RWxlbWVudEJ5SWQodGhpcy5zb3VyY2UpXTtcclxuICB9O1xyXG4gIFRDcHJvdG8uSGlkZVRhZ3MgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBlbCA9IHRoaXMuU291cmNlRWxlbWVudHMoKSxcclxuICAgICAgaTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCBlbC5sZW5ndGg7ICsraSkgZWxbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH07XHJcbiAgVENwcm90by5HZXRUYWdzID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgZWwgPSB0aGlzLlNvdXJjZUVsZW1lbnRzKCksXHJcbiAgICAgIGV0bCxcclxuICAgICAgdGwgPSBbXSxcclxuICAgICAgaSxcclxuICAgICAgaixcclxuICAgICAgaztcclxuICAgIGZvciAoayA9IDA7IGsgPD0gdGhpcy5yZXBlYXRUYWdzOyArK2spIHtcclxuICAgICAgZm9yIChpID0gMDsgaSA8IGVsLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgZXRsID0gZWxbaV0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhXCIpO1xyXG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBldGwubGVuZ3RoOyArK2opIHtcclxuICAgICAgICAgIHRsLnB1c2goZXRsW2pdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0bDtcclxuICB9O1xyXG4gIFRDcHJvdG8uTWVzc2FnZSA9IGZ1bmN0aW9uKHRleHQpIHtcclxuICAgIHZhciB0bCA9IFtdLFxyXG4gICAgICBpLFxyXG4gICAgICBwLFxyXG4gICAgICB0YyA9IHRleHQuc3BsaXQoXCJcIiksXHJcbiAgICAgIGEsXHJcbiAgICAgIHQsXHJcbiAgICAgIHgsXHJcbiAgICAgIHo7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgaWYgKHRjW2ldICE9IFwiIFwiKSB7XHJcbiAgICAgICAgcCA9IGkgLSB0Yy5sZW5ndGggLyAyO1xyXG4gICAgICAgIGEgPSBkb2MuY3JlYXRlRWxlbWVudChcIkFcIik7XHJcbiAgICAgICAgYS5ocmVmID0gXCIjXCI7XHJcbiAgICAgICAgYS5pbm5lclRleHQgPSB0Y1tpXTtcclxuICAgICAgICB4ID0gMTAwICogc2luKHAgLyA5KTtcclxuICAgICAgICB6ID0gLTEwMCAqIGNvcyhwIC8gOSk7XHJcbiAgICAgICAgdCA9IG5ldyBUYWcoXHJcbiAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgdGNbaV0sXHJcbiAgICAgICAgICBhLFxyXG4gICAgICAgICAgW3gsIDAsIHpdLFxyXG4gICAgICAgICAgMixcclxuICAgICAgICAgIDE4LFxyXG4gICAgICAgICAgXCIjMDAwXCIsXHJcbiAgICAgICAgICBcIiNmZmZcIixcclxuICAgICAgICAgIDAsXHJcbiAgICAgICAgICAwLFxyXG4gICAgICAgICAgMCxcclxuICAgICAgICAgIFwibW9ub3NwYWNlXCIsXHJcbiAgICAgICAgICAyLFxyXG4gICAgICAgICAgdGNbaV1cclxuICAgICAgICApO1xyXG4gICAgICAgIHQuSW5pdCgpO1xyXG4gICAgICAgIHRsLnB1c2godCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0bDtcclxuICB9O1xyXG4gIFRDcHJvdG8uQ3JlYXRlVGFnID0gZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyIGltLFxyXG4gICAgICBpLFxyXG4gICAgICB0LFxyXG4gICAgICB0eHQsXHJcbiAgICAgIHRzLFxyXG4gICAgICBmb250LFxyXG4gICAgICBiYyxcclxuICAgICAgYm9jLFxyXG4gICAgICBwID0gWzAsIDAsIDBdO1xyXG4gICAgaWYgKFwidGV4dFwiICE9IHRoaXMuaW1hZ2VNb2RlKSB7XHJcbiAgICAgIGltID0gZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImltZ1wiKTtcclxuICAgICAgaWYgKGltLmxlbmd0aCkge1xyXG4gICAgICAgIGkgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBpLnNyYyA9IGltWzBdLnNyYztcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmltYWdlTW9kZSkge1xyXG4gICAgICAgICAgdCA9IG5ldyBUYWcodGhpcywgXCJcIiwgZSwgcCwgMCwgMCk7XHJcbiAgICAgICAgICB0LlNldEltYWdlKGkpO1xyXG4gICAgICAgICAgLy90LkluaXQoKTtcclxuICAgICAgICAgIEFkZEltYWdlKGksIGltWzBdLCB0LCB0aGlzKTtcclxuICAgICAgICAgIHJldHVybiB0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKFwiaW1hZ2VcIiAhPSB0aGlzLmltYWdlTW9kZSkge1xyXG4gICAgICB0cyA9IG5ldyBUZXh0U3BsaXR0ZXIoZSk7XHJcbiAgICAgIHR4dCA9IHRzLkxpbmVzKCk7XHJcbiAgICAgIGlmICghdHMuRW1wdHkoKSkge1xyXG4gICAgICAgIGZvbnQgPSB0aGlzLnRleHRGb250IHx8IEZpeEZvbnQoR2V0UHJvcGVydHkoZSwgXCJmb250LWZhbWlseVwiKSk7XHJcbiAgICAgICAgaWYgKHRoaXMuc3BsaXRXaWR0aClcclxuICAgICAgICAgIHR4dCA9IHRzLlNwbGl0V2lkdGgoXHJcbiAgICAgICAgICAgIHRoaXMuc3BsaXRXaWR0aCxcclxuICAgICAgICAgICAgdGhpcy5jdHh0LFxyXG4gICAgICAgICAgICBmb250LFxyXG4gICAgICAgICAgICB0aGlzLnRleHRIZWlnaHRcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgIGJjID1cclxuICAgICAgICAgIHRoaXMuYmdDb2xvdXIgPT0gXCJ0YWdcIlxyXG4gICAgICAgICAgICA/IEdldFByb3BlcnR5KGUsIFwiYmFja2dyb3VuZC1jb2xvclwiKVxyXG4gICAgICAgICAgICA6IHRoaXMuYmdDb2xvdXI7XHJcbiAgICAgICAgYm9jID1cclxuICAgICAgICAgIHRoaXMuYmdPdXRsaW5lID09IFwidGFnXCIgPyBHZXRQcm9wZXJ0eShlLCBcImNvbG9yXCIpIDogdGhpcy5iZ091dGxpbmU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdHMgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodHMgfHwgaSkge1xyXG4gICAgICB0ID0gbmV3IFRhZyhcclxuICAgICAgICB0aGlzLFxyXG4gICAgICAgIHR4dCxcclxuICAgICAgICBlLFxyXG4gICAgICAgIHAsXHJcbiAgICAgICAgMixcclxuICAgICAgICB0aGlzLnRleHRIZWlnaHQgKyAyLFxyXG4gICAgICAgIHRoaXMudGV4dENvbG91ciB8fCBHZXRQcm9wZXJ0eShlLCBcImNvbG9yXCIpLFxyXG4gICAgICAgIGJjLFxyXG4gICAgICAgIHRoaXMuYmdSYWRpdXMsXHJcbiAgICAgICAgYm9jLFxyXG4gICAgICAgIHRoaXMuYmdPdXRsaW5lVGhpY2tuZXNzLFxyXG4gICAgICAgIGZvbnQsXHJcbiAgICAgICAgdGhpcy5wYWRkaW5nLFxyXG4gICAgICAgIHRzICYmIHRzLm9yaWdpbmFsXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChpKSB7XHJcbiAgICAgICAgdC5TZXRJbWFnZShpKTtcclxuICAgICAgICBBZGRJbWFnZShpLCBpbVswXSwgdCwgdGhpcyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdC5Jbml0KCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgfTtcclxuICBUQ3Byb3RvLlVwZGF0ZVRhZyA9IGZ1bmN0aW9uKHQsIGEpIHtcclxuICAgIHZhciBjb2xvdXIgPSB0aGlzLnRleHRDb2xvdXIgfHwgR2V0UHJvcGVydHkoYSwgXCJjb2xvclwiKSxcclxuICAgICAgZm9udCA9IHRoaXMudGV4dEZvbnQgfHwgRml4Rm9udChHZXRQcm9wZXJ0eShhLCBcImZvbnQtZmFtaWx5XCIpKSxcclxuICAgICAgYmMgPVxyXG4gICAgICAgIHRoaXMuYmdDb2xvdXIgPT0gXCJ0YWdcIlxyXG4gICAgICAgICAgPyBHZXRQcm9wZXJ0eShhLCBcImJhY2tncm91bmQtY29sb3JcIilcclxuICAgICAgICAgIDogdGhpcy5iZ0NvbG91cixcclxuICAgICAgYm9jID0gdGhpcy5iZ091dGxpbmUgPT0gXCJ0YWdcIiA/IEdldFByb3BlcnR5KGEsIFwiY29sb3JcIikgOiB0aGlzLmJnT3V0bGluZTtcclxuICAgIHQuYSA9IGE7XHJcbiAgICB0LnRpdGxlID0gYS50aXRsZTtcclxuICAgIGlmIChcclxuICAgICAgdC5jb2xvdXIgIT0gY29sb3VyIHx8XHJcbiAgICAgIHQudGV4dEZvbnQgIT0gZm9udCB8fFxyXG4gICAgICB0LmJnQ29sb3VyICE9IGJjIHx8XHJcbiAgICAgIHQuYmdPdXRsaW5lICE9IGJvY1xyXG4gICAgKVxyXG4gICAgICB0LlNldEZvbnQoZm9udCwgY29sb3VyLCBiYywgYm9jKTtcclxuICB9O1xyXG4gIFRDcHJvdG8uV2VpZ2h0ID0gZnVuY3Rpb24odGwpIHtcclxuICAgIHZhciBsbCA9IHRsLmxlbmd0aCxcclxuICAgICAgdyxcclxuICAgICAgaSxcclxuICAgICAgcyxcclxuICAgICAgd2VpZ2h0cyA9IFtdLFxyXG4gICAgICB2YWxpZCxcclxuICAgICAgd2Zyb20gPSB0aGlzLndlaWdodEZyb20gPyB0aGlzLndlaWdodEZyb20uc3BsaXQoL1ssIF0vKSA6IFtudWxsXSxcclxuICAgICAgd2wgPSB3ZnJvbS5sZW5ndGg7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGw7ICsraSkge1xyXG4gICAgICB3ZWlnaHRzW2ldID0gW107XHJcbiAgICAgIGZvciAocyA9IDA7IHMgPCB3bDsgKytzKSB7XHJcbiAgICAgICAgdyA9IEZpbmRXZWlnaHQodGxbaV0uYSwgd2Zyb21bc10sIHRoaXMudGV4dEhlaWdodCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1heF93ZWlnaHRbc10gfHwgdyA+IHRoaXMubWF4X3dlaWdodFtzXSlcclxuICAgICAgICAgIHRoaXMubWF4X3dlaWdodFtzXSA9IHc7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1pbl93ZWlnaHRbc10gfHwgdyA8IHRoaXMubWluX3dlaWdodFtzXSlcclxuICAgICAgICAgIHRoaXMubWluX3dlaWdodFtzXSA9IHc7XHJcbiAgICAgICAgd2VpZ2h0c1tpXVtzXSA9IHc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAocyA9IDA7IHMgPCB3bDsgKytzKSB7XHJcbiAgICAgIGlmICh0aGlzLm1heF93ZWlnaHRbc10gPiB0aGlzLm1pbl93ZWlnaHRbc10pIHZhbGlkID0gMTtcclxuICAgIH1cclxuICAgIGlmICh2YWxpZCkge1xyXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGw7ICsraSkge1xyXG4gICAgICAgIHRsW2ldLlNldFdlaWdodCh3ZWlnaHRzW2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgVENwcm90by5Mb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgdGwgPSB0aGlzLkdldFRhZ3MoKSxcclxuICAgICAgdGFnbGlzdCA9IFtdLFxyXG4gICAgICBzaGFwZSxcclxuICAgICAgdCxcclxuICAgICAgc2hhcGVBcmdzLFxyXG4gICAgICByeCxcclxuICAgICAgcnksXHJcbiAgICAgIHJ6LFxyXG4gICAgICB2bCxcclxuICAgICAgaSxcclxuICAgICAgdGFnbWFwID0gW10sXHJcbiAgICAgIHBmdW5jcyA9IHtcclxuICAgICAgICBzcGhlcmU6IFBvaW50c09uU3BoZXJlLFxyXG4gICAgICAgIHZjeWxpbmRlcjogUG9pbnRzT25DeWxpbmRlclYsXHJcbiAgICAgICAgaGN5bGluZGVyOiBQb2ludHNPbkN5bGluZGVySCxcclxuICAgICAgICB2cmluZzogUG9pbnRzT25SaW5nVixcclxuICAgICAgICBocmluZzogUG9pbnRzT25SaW5nSFxyXG4gICAgICB9O1xyXG5cclxuICAgIGlmICh0bC5sZW5ndGgpIHtcclxuICAgICAgdGFnbWFwLmxlbmd0aCA9IHRsLmxlbmd0aDtcclxuICAgICAgZm9yIChpID0gMDsgaSA8IHRsLmxlbmd0aDsgKytpKSB0YWdtYXBbaV0gPSBpO1xyXG4gICAgICB0aGlzLnNodWZmbGVUYWdzICYmIFNodWZmbGUodGFnbWFwKTtcclxuICAgICAgcnggPSAxMDAgKiB0aGlzLnJhZGl1c1g7XHJcbiAgICAgIHJ5ID0gMTAwICogdGhpcy5yYWRpdXNZO1xyXG4gICAgICByeiA9IDEwMCAqIHRoaXMucmFkaXVzWjtcclxuICAgICAgdGhpcy5tYXhfcmFkaXVzID0gbWF4KHJ4LCBtYXgocnksIHJ6KSk7XHJcblxyXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdGwubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICB0ID0gdGhpcy5DcmVhdGVUYWcodGxbdGFnbWFwW2ldXSk7XHJcbiAgICAgICAgaWYgKHQpIHRhZ2xpc3QucHVzaCh0KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLndlaWdodCAmJiB0aGlzLldlaWdodCh0YWdsaXN0LCB0cnVlKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnNoYXBlQXJncykge1xyXG4gICAgICAgIHRoaXMuc2hhcGVBcmdzWzBdID0gdGFnbGlzdC5sZW5ndGg7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hhcGVBcmdzID0gdGhpcy5zaGFwZS50b1N0cmluZygpLnNwbGl0KC9bKCksXS8pO1xyXG4gICAgICAgIHNoYXBlID0gc2hhcGVBcmdzLnNoaWZ0KCk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3dbc2hhcGVdID09PSBcImZ1bmN0aW9uXCIpIHRoaXMuc2hhcGUgPSB3aW5kb3dbc2hhcGVdO1xyXG4gICAgICAgIGVsc2UgdGhpcy5zaGFwZSA9IHBmdW5jc1tzaGFwZV0gfHwgcGZ1bmNzLnNwaGVyZTtcclxuICAgICAgICB0aGlzLnNoYXBlQXJncyA9IFt0YWdsaXN0Lmxlbmd0aCwgcngsIHJ5LCByel0uY29uY2F0KHNoYXBlQXJncyk7XHJcbiAgICAgIH1cclxuICAgICAgdmwgPSB0aGlzLnNoYXBlLmFwcGx5KHRoaXMsIHRoaXMuc2hhcGVBcmdzKTtcclxuICAgICAgdGhpcy5saXN0TGVuZ3RoID0gdGFnbGlzdC5sZW5ndGg7XHJcbiAgICAgIGZvciAoaSA9IDA7IGkgPCB0YWdsaXN0Lmxlbmd0aDsgKytpKVxyXG4gICAgICAgIHRhZ2xpc3RbaV0ucG9zaXRpb24gPSBuZXcgVmVjdG9yKHZsW2ldWzBdLCB2bFtpXVsxXSwgdmxbaV1bMl0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubm9UYWdzTWVzc2FnZSAmJiAhdGFnbGlzdC5sZW5ndGgpXHJcbiAgICAgIHRhZ2xpc3QgPSB0aGlzLk1lc3NhZ2UoXCJObyB0YWdzXCIpO1xyXG4gICAgdGhpcy50YWdsaXN0ID0gdGFnbGlzdDtcclxuICB9O1xyXG4gIFRDcHJvdG8uVXBkYXRlID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgdGwgPSB0aGlzLkdldFRhZ3MoKSxcclxuICAgICAgbmV3bGlzdCA9IFtdLFxyXG4gICAgICB0YWdsaXN0ID0gdGhpcy50YWdsaXN0LFxyXG4gICAgICBmb3VuZCxcclxuICAgICAgYWRkZWQgPSBbXSxcclxuICAgICAgcmVtb3ZlZCA9IFtdLFxyXG4gICAgICB2bCxcclxuICAgICAgb2wsXHJcbiAgICAgIG5sLFxyXG4gICAgICBpLFxyXG4gICAgICBqO1xyXG5cclxuICAgIGlmICghdGhpcy5zaGFwZUFyZ3MpIHJldHVybiB0aGlzLkxvYWQoKTtcclxuXHJcbiAgICBpZiAodGwubGVuZ3RoKSB7XHJcbiAgICAgIG5sID0gdGhpcy5saXN0TGVuZ3RoID0gdGwubGVuZ3RoO1xyXG4gICAgICBvbCA9IHRhZ2xpc3QubGVuZ3RoO1xyXG5cclxuICAgICAgLy8gY29weSBleGlzdGluZyBsaXN0LCBwb3B1bGF0ZSBcInJlbW92ZWRcIlxyXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgb2w7ICsraSkge1xyXG4gICAgICAgIG5ld2xpc3QucHVzaCh0YWdsaXN0W2ldKTtcclxuICAgICAgICByZW1vdmVkLnB1c2goaSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGZpbmQgYWRkZWQgYW5kIHJlbW92ZWQgdGFnc1xyXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbmw7ICsraSkge1xyXG4gICAgICAgIGZvciAoaiA9IDAsIGZvdW5kID0gMDsgaiA8IG9sOyArK2opIHtcclxuICAgICAgICAgIGlmICh0YWdsaXN0W2pdLkVxdWFsVG8odGxbaV0pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuVXBkYXRlVGFnKG5ld2xpc3Rbal0sIHRsW2ldKTtcclxuICAgICAgICAgICAgZm91bmQgPSByZW1vdmVkW2pdID0gLTE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZm91bmQpIGFkZGVkLnB1c2goaSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGNsZWFuIG91dCBmb3VuZCB0YWdzIGZyb20gcmVtb3ZlZCBsaXN0XHJcbiAgICAgIGZvciAoaSA9IDAsIGogPSAwOyBpIDwgb2w7ICsraSkge1xyXG4gICAgICAgIGlmIChyZW1vdmVkW2pdID09IC0xKSByZW1vdmVkLnNwbGljZShqLCAxKTtcclxuICAgICAgICBlbHNlICsrajtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gaW5zZXJ0IG5ldyB0YWdzIGluIGdhcHMgd2hlcmUgb2xkIHRhZ3MgcmVtb3ZlZFxyXG4gICAgICBpZiAocmVtb3ZlZC5sZW5ndGgpIHtcclxuICAgICAgICBTaHVmZmxlKHJlbW92ZWQpO1xyXG4gICAgICAgIHdoaWxlIChyZW1vdmVkLmxlbmd0aCAmJiBhZGRlZC5sZW5ndGgpIHtcclxuICAgICAgICAgIGkgPSByZW1vdmVkLnNoaWZ0KCk7XHJcbiAgICAgICAgICBqID0gYWRkZWQuc2hpZnQoKTtcclxuICAgICAgICAgIG5ld2xpc3RbaV0gPSB0aGlzLkNyZWF0ZVRhZyh0bFtqXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyByZW1vdmUgYW55IG1vcmUgKGluIHJldmVyc2Ugb3JkZXIpXHJcbiAgICAgICAgcmVtb3ZlZC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICAgIHJldHVybiBhIC0gYjtcclxuICAgICAgICB9KTtcclxuICAgICAgICB3aGlsZSAocmVtb3ZlZC5sZW5ndGgpIHtcclxuICAgICAgICAgIG5ld2xpc3Quc3BsaWNlKHJlbW92ZWQucG9wKCksIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gYWRkIGFueSBleHRyYSB0YWdzXHJcbiAgICAgIGogPSBuZXdsaXN0Lmxlbmd0aCAvIChhZGRlZC5sZW5ndGggKyAxKTtcclxuICAgICAgaSA9IDA7XHJcbiAgICAgIHdoaWxlIChhZGRlZC5sZW5ndGgpIHtcclxuICAgICAgICBuZXdsaXN0LnNwbGljZShjZWlsKCsraSAqIGopLCAwLCB0aGlzLkNyZWF0ZVRhZyh0bFthZGRlZC5zaGlmdCgpXSkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBhc3NpZ24gY29ycmVjdCBwb3NpdGlvbnMgdG8gdGFnc1xyXG4gICAgICB0aGlzLnNoYXBlQXJnc1swXSA9IG5sID0gbmV3bGlzdC5sZW5ndGg7XHJcbiAgICAgIHZsID0gdGhpcy5zaGFwZS5hcHBseSh0aGlzLCB0aGlzLnNoYXBlQXJncyk7XHJcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBubDsgKytpKVxyXG4gICAgICAgIG5ld2xpc3RbaV0ucG9zaXRpb24gPSBuZXcgVmVjdG9yKHZsW2ldWzBdLCB2bFtpXVsxXSwgdmxbaV1bMl0pO1xyXG5cclxuICAgICAgLy8gcmV3ZWlnaHQgdGFnc1xyXG4gICAgICB0aGlzLndlaWdodCAmJiB0aGlzLldlaWdodChuZXdsaXN0KTtcclxuICAgIH1cclxuICAgIHRoaXMudGFnbGlzdCA9IG5ld2xpc3Q7XHJcbiAgfTtcclxuICBUQ3Byb3RvLlNldFNoYWRvdyA9IGZ1bmN0aW9uKGMpIHtcclxuICAgIGMuc2hhZG93Qmx1ciA9IHRoaXMuc2hhZG93Qmx1cjtcclxuICAgIGMuc2hhZG93T2Zmc2V0WCA9IHRoaXMuc2hhZG93T2Zmc2V0WzBdO1xyXG4gICAgYy5zaGFkb3dPZmZzZXRZID0gdGhpcy5zaGFkb3dPZmZzZXRbMV07XHJcbiAgfTtcclxuICBUQ3Byb3RvLkRyYXcgPSBmdW5jdGlvbih0KSB7XHJcbiAgICBpZiAodGhpcy5wYXVzZWQpIHJldHVybjtcclxuICAgIHZhciBjdiA9IHRoaXMuY2FudmFzLFxyXG4gICAgICBjdyA9IGN2LndpZHRoLFxyXG4gICAgICBjaCA9IGN2LmhlaWdodCxcclxuICAgICAgbWF4X3NjID0gMCxcclxuICAgICAgdGRlbHRhID0gKCh0IC0gdGhpcy50aW1lKSAqIFRhZ0NhbnZhcy5pbnRlcnZhbCkgLyAxMDAwLFxyXG4gICAgICB4ID0gY3cgLyAyICsgdGhpcy5vZmZzZXRYLFxyXG4gICAgICB5ID0gY2ggLyAyICsgdGhpcy5vZmZzZXRZLFxyXG4gICAgICBjID0gdGhpcy5jdHh0LFxyXG4gICAgICBhY3RpdmUsXHJcbiAgICAgIGEsXHJcbiAgICAgIGksXHJcbiAgICAgIGFpbmRleCA9IC0xLFxyXG4gICAgICB0bCA9IHRoaXMudGFnbGlzdCxcclxuICAgICAgbCA9IHRsLmxlbmd0aCxcclxuICAgICAgZnJvbnRzZWwgPSB0aGlzLmZyb250U2VsZWN0LFxyXG4gICAgICBjZW50cmVEcmF3biA9IHRoaXMuY2VudHJlRnVuYyA9PSBOb3AsXHJcbiAgICAgIGZpeGVkO1xyXG4gICAgdGhpcy50aW1lID0gdDtcclxuICAgIGlmICh0aGlzLmZyb3plbiAmJiB0aGlzLmRyYXduKSByZXR1cm4gdGhpcy5BbmltYXRlKGN3LCBjaCwgdGRlbHRhKTtcclxuICAgIGZpeGVkID0gdGhpcy5BbmltYXRlRml4ZWQoKTtcclxuICAgIGMuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IGw7ICsraSkgdGxbaV0uQ2FsYyh0aGlzLnRyYW5zZm9ybSwgdGhpcy5maXhlZEFscGhhKTtcclxuICAgIHRsID0gU29ydExpc3QodGwsIGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgcmV0dXJuIGIueiAtIGEuejtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChmaXhlZCAmJiB0aGlzLmZpeGVkQW5pbS5hY3RpdmUpIHtcclxuICAgICAgYWN0aXZlID0gdGhpcy5maXhlZEFuaW0udGFnLlVwZGF0ZUFjdGl2ZShjLCB4LCB5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlID0gbnVsbDtcclxuICAgICAgZm9yIChpID0gMDsgaSA8IGw7ICsraSkge1xyXG4gICAgICAgIGEgPVxyXG4gICAgICAgICAgdGhpcy5teCA+PSAwICYmIHRoaXMubXkgPj0gMCAmJiB0aGlzLnRhZ2xpc3RbaV0uQ2hlY2tBY3RpdmUoYywgeCwgeSk7XHJcbiAgICAgICAgaWYgKGEgJiYgYS5zYyA+IG1heF9zYyAmJiAoIWZyb250c2VsIHx8IGEueiA8PSAwKSkge1xyXG4gICAgICAgICAgYWN0aXZlID0gYTtcclxuICAgICAgICAgIGFpbmRleCA9IGk7XHJcbiAgICAgICAgICBhY3RpdmUudGFnID0gdGhpcy50YWdsaXN0W2ldO1xyXG4gICAgICAgICAgbWF4X3NjID0gYS5zYztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5hY3RpdmUgPSBhY3RpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50eHRPcHQgfHwgKHRoaXMuc2hhZG93ICYmIHRoaXMuU2V0U2hhZG93KGMpKTtcclxuICAgIGMuY2xlYXJSZWN0KDAsIDAsIGN3LCBjaCk7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgbDsgKytpKSB7XHJcbiAgICAgIGlmICghY2VudHJlRHJhd24gJiYgdGxbaV0ueiA8PSAwKSB7XHJcbiAgICAgICAgLy8gcnVuIHRoZSBjZW50cmVGdW5jIGlmIHRoZSBuZXh0IHRhZyBpcyBhdCB0aGUgZnJvbnRcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgdGhpcy5jZW50cmVGdW5jKGMsIGN3LCBjaCwgeCwgeSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgYWxlcnQoZSk7XHJcbiAgICAgICAgICAvLyBkb24ndCBydW4gaXQgYWdhaW5cclxuICAgICAgICAgIHRoaXMuY2VudHJlRnVuYyA9IE5vcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2VudHJlRHJhd24gPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIShhY3RpdmUgJiYgYWN0aXZlLnRhZyA9PSB0bFtpXSAmJiBhY3RpdmUuUHJlRHJhdyhjLCB0bFtpXSwgeCwgeSkpKVxyXG4gICAgICAgIHRsW2ldLkRyYXcoYywgeCwgeSk7XHJcbiAgICAgIGFjdGl2ZSAmJiBhY3RpdmUudGFnID09IHRsW2ldICYmIGFjdGl2ZS5Qb3N0RHJhdyhjKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZyZWV6ZUFjdGl2ZSAmJiBhY3RpdmUpIHtcclxuICAgICAgdGhpcy5GcmVlemUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuVW5GcmVlemUoKTtcclxuICAgICAgdGhpcy5kcmF3biA9IGwgPT0gdGhpcy5saXN0TGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZml4ZWRDYWxsYmFjaykge1xyXG4gICAgICB0aGlzLmZpeGVkQ2FsbGJhY2sodGhpcywgdGhpcy5maXhlZENhbGxiYWNrVGFnKTtcclxuICAgICAgdGhpcy5maXhlZENhbGxiYWNrID0gbnVsbDtcclxuICAgIH1cclxuICAgIGZpeGVkIHx8IHRoaXMuQW5pbWF0ZShjdywgY2gsIHRkZWx0YSk7XHJcbiAgICBhY3RpdmUgJiYgYWN0aXZlLkxhc3REcmF3KGMpO1xyXG4gICAgY3Yuc3R5bGUuY3Vyc29yID0gYWN0aXZlID8gdGhpcy5hY3RpdmVDdXJzb3IgOiBcIlwiO1xyXG4gICAgdGhpcy5Ub29sdGlwKGFjdGl2ZSwgdGhpcy50YWdsaXN0W2FpbmRleF0pO1xyXG4gIH07XHJcbiAgVENwcm90by5Ub29sdGlwTm9uZSA9IGZ1bmN0aW9uKCkge307XHJcbiAgVENwcm90by5Ub29sdGlwTmF0aXZlID0gZnVuY3Rpb24oYWN0aXZlLCB0YWcpIHtcclxuICAgIGlmIChhY3RpdmUpIHRoaXMuY2FudmFzLnRpdGxlID0gdGFnICYmIHRhZy50aXRsZSA/IHRhZy50aXRsZSA6IFwiXCI7XHJcbiAgICBlbHNlIHRoaXMuY2FudmFzLnRpdGxlID0gdGhpcy5jdGl0bGU7XHJcbiAgfTtcclxuICBUQ3Byb3RvLlNldFRURGl2ID0gZnVuY3Rpb24odGl0bGUsIHRhZykge1xyXG4gICAgdmFyIHRjID0gdGhpcyxcclxuICAgICAgcyA9IHRjLnR0ZGl2LnN0eWxlO1xyXG4gICAgaWYgKHRpdGxlICE9IHRjLnR0ZGl2LmlubmVySFRNTCkgcy5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB0Yy50dGRpdi5pbm5lckhUTUwgPSB0aXRsZTtcclxuICAgIHRhZyAmJiAodGFnLnRpdGxlID0gdGMudHRkaXYuaW5uZXJIVE1MKTtcclxuICAgIGlmIChzLmRpc3BsYXkgPT0gXCJub25lXCIgJiYgIXRjLnR0dGltZXIpIHtcclxuICAgICAgdGMudHR0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHAgPSBBYnNQb3ModGMuY2FudmFzLmlkKTtcclxuICAgICAgICBzLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgcy5sZWZ0ID0gcC54ICsgdGMubXggKyBcInB4XCI7XHJcbiAgICAgICAgcy50b3AgPSBwLnkgKyB0Yy5teSArIDI0ICsgXCJweFwiO1xyXG4gICAgICAgIHRjLnR0dGltZXIgPSBudWxsO1xyXG4gICAgICB9LCB0Yy50b29sdGlwRGVsYXkpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgVENwcm90by5Ub29sdGlwRGl2ID0gZnVuY3Rpb24oYWN0aXZlLCB0YWcpIHtcclxuICAgIGlmIChhY3RpdmUgJiYgdGFnICYmIHRhZy50aXRsZSkge1xyXG4gICAgICB0aGlzLlNldFRURGl2KHRhZy50aXRsZSwgdGFnKTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICFhY3RpdmUgJiZcclxuICAgICAgdGhpcy5teCAhPSAtMSAmJlxyXG4gICAgICB0aGlzLm15ICE9IC0xICYmXHJcbiAgICAgIHRoaXMuY3RpdGxlLmxlbmd0aFxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuU2V0VFREaXYodGhpcy5jdGl0bGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50dGRpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcbiAgfTtcclxuICBUQ3Byb3RvLlRyYW5zZm9ybSA9IGZ1bmN0aW9uKHRjLCBwLCB5KSB7XHJcbiAgICBpZiAocCB8fCB5KSB7XHJcbiAgICAgIHZhciBzcCA9IHNpbihwKSxcclxuICAgICAgICBjcCA9IGNvcyhwKSxcclxuICAgICAgICBzeSA9IHNpbih5KSxcclxuICAgICAgICBjeSA9IGNvcyh5KSxcclxuICAgICAgICB5bSA9IG5ldyBNYXRyaXgoW2N5LCAwLCBzeSwgMCwgMSwgMCwgLXN5LCAwLCBjeV0pLFxyXG4gICAgICAgIHBtID0gbmV3IE1hdHJpeChbMSwgMCwgMCwgMCwgY3AsIC1zcCwgMCwgc3AsIGNwXSk7XHJcbiAgICAgIHRjLnRyYW5zZm9ybSA9IHRjLnRyYW5zZm9ybS5tdWwoeW0ubXVsKHBtKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBUQ3Byb3RvLkFuaW1hdGVGaXhlZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGZhLCB0MSwgYW5nbGUsIG0sIGQ7XHJcbiAgICBpZiAodGhpcy5mYWRlSW4pIHtcclxuICAgICAgdDEgPSBUaW1lTm93KCkgLSB0aGlzLnN0YXJ0VGltZTtcclxuICAgICAgaWYgKHQxID49IHRoaXMuZmFkZUluKSB7XHJcbiAgICAgICAgdGhpcy5mYWRlSW4gPSAwO1xyXG4gICAgICAgIHRoaXMuZml4ZWRBbHBoYSA9IDE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5maXhlZEFscGhhID0gdDEgLyB0aGlzLmZhZGVJbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZml4ZWRBbmltKSB7XHJcbiAgICAgIGlmICghdGhpcy5maXhlZEFuaW0udHJhbnNmb3JtKSB0aGlzLmZpeGVkQW5pbS50cmFuc2Zvcm0gPSB0aGlzLnRyYW5zZm9ybTtcclxuICAgICAgKGZhID0gdGhpcy5maXhlZEFuaW0pLFxyXG4gICAgICAgICh0MSA9IFRpbWVOb3coKSAtIGZhLnQwKSxcclxuICAgICAgICAoYW5nbGUgPSBmYS5hbmdsZSksXHJcbiAgICAgICAgbSxcclxuICAgICAgICAoZCA9IHRoaXMuYW5pbVRpbWluZyhmYS50LCB0MSkpO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybSA9IGZhLnRyYW5zZm9ybTtcclxuICAgICAgaWYgKHQxID49IGZhLnQpIHtcclxuICAgICAgICB0aGlzLmZpeGVkQ2FsbGJhY2tUYWcgPSBmYS50YWc7XHJcbiAgICAgICAgdGhpcy5maXhlZENhbGxiYWNrID0gZmEuY2I7XHJcbiAgICAgICAgdGhpcy5maXhlZEFuaW0gPSB0aGlzLnlhdyA9IHRoaXMucGl0Y2ggPSAwO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFuZ2xlICo9IGQ7XHJcbiAgICAgIH1cclxuICAgICAgbSA9IE1hdHJpeC5Sb3RhdGlvbihhbmdsZSwgZmEuYXhpcyk7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtID0gdGhpcy50cmFuc2Zvcm0ubXVsKG0pO1xyXG4gICAgICByZXR1cm4gdGhpcy5maXhlZEFuaW0gIT0gMDtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9O1xyXG4gIFRDcHJvdG8uQW5pbWF0ZVBvc2l0aW9uID0gZnVuY3Rpb24odywgaCwgdCkge1xyXG4gICAgdmFyIHRjID0gdGhpcyxcclxuICAgICAgeCA9IHRjLm14LFxyXG4gICAgICB5ID0gdGMubXksXHJcbiAgICAgIHMsXHJcbiAgICAgIHI7XHJcbiAgICBpZiAoIXRjLmZyb3plbiAmJiB4ID49IDAgJiYgeSA+PSAwICYmIHggPCB3ICYmIHkgPCBoKSB7XHJcbiAgICAgIChzID0gdGMubWF4U3BlZWQpLCAociA9IHRjLnJldmVyc2UgPyAtMSA6IDEpO1xyXG4gICAgICB0Yy5seCB8fCAodGMueWF3ID0gKCh4ICogMiAqIHMpIC8gdyAtIHMpICogciAqIHQpO1xyXG4gICAgICB0Yy5seSB8fCAodGMucGl0Y2ggPSAoKHkgKiAyICogcykgLyBoIC0gcykgKiAtciAqIHQpO1xyXG4gICAgICB0Yy5pbml0aWFsID0gbnVsbDtcclxuICAgIH0gZWxzZSBpZiAoIXRjLmluaXRpYWwpIHtcclxuICAgICAgaWYgKHRjLmZyb3plbiAmJiAhdGMuZnJlZXplRGVjZWwpIHRjLnlhdyA9IHRjLnBpdGNoID0gMDtcclxuICAgICAgZWxzZSB0Yy5EZWNlbCh0Yyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLlRyYW5zZm9ybSh0YywgdGMucGl0Y2gsIHRjLnlhdyk7XHJcbiAgfTtcclxuICBUQ3Byb3RvLkFuaW1hdGVEcmFnID0gZnVuY3Rpb24odywgaCwgdCkge1xyXG4gICAgdmFyIHRjID0gdGhpcyxcclxuICAgICAgcnMgPSAoMTAwICogdCAqIHRjLm1heFNwZWVkKSAvIHRjLm1heF9yYWRpdXMgLyB0Yy56b29tO1xyXG4gICAgaWYgKHRjLmR4IHx8IHRjLmR5KSB7XHJcbiAgICAgIHRjLmx4IHx8ICh0Yy55YXcgPSAodGMuZHggKiBycykgLyB0Yy5zdHJldGNoWCk7XHJcbiAgICAgIHRjLmx5IHx8ICh0Yy5waXRjaCA9ICh0Yy5keSAqIC1ycykgLyB0Yy5zdHJldGNoWSk7XHJcbiAgICAgIHRjLmR4ID0gdGMuZHkgPSAwO1xyXG4gICAgICB0Yy5pbml0aWFsID0gbnVsbDtcclxuICAgIH0gZWxzZSBpZiAoIXRjLmluaXRpYWwpIHtcclxuICAgICAgdGMuRGVjZWwodGMpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5UcmFuc2Zvcm0odGMsIHRjLnBpdGNoLCB0Yy55YXcpO1xyXG4gIH07XHJcbiAgVENwcm90by5GcmVlemUgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmICghdGhpcy5mcm96ZW4pIHtcclxuICAgICAgdGhpcy5wcmVGcmVlemUgPSBbdGhpcy55YXcsIHRoaXMucGl0Y2hdO1xyXG4gICAgICB0aGlzLmZyb3plbiA9IDE7XHJcbiAgICAgIHRoaXMuZHJhd24gPSAwO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgVENwcm90by5VbkZyZWV6ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMuZnJvemVuKSB7XHJcbiAgICAgIHRoaXMueWF3ID0gdGhpcy5wcmVGcmVlemVbMF07XHJcbiAgICAgIHRoaXMucGl0Y2ggPSB0aGlzLnByZUZyZWV6ZVsxXTtcclxuICAgICAgdGhpcy5mcm96ZW4gPSAwO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgVENwcm90by5EZWNlbCA9IGZ1bmN0aW9uKHRjKSB7XHJcbiAgICB2YXIgcyA9IHRjLm1pblNwZWVkLFxyXG4gICAgICBheSA9IGFicyh0Yy55YXcpLFxyXG4gICAgICBhcCA9IGFicyh0Yy5waXRjaCk7XHJcbiAgICBpZiAoIXRjLmx4ICYmIGF5ID4gcykgdGMueWF3ID0gYXkgPiB0Yy56MCA/IHRjLnlhdyAqIHRjLmRlY2VsIDogMDtcclxuICAgIGlmICghdGMubHkgJiYgYXAgPiBzKSB0Yy5waXRjaCA9IGFwID4gdGMuejAgPyB0Yy5waXRjaCAqIHRjLmRlY2VsIDogMDtcclxuICB9O1xyXG4gIFRDcHJvdG8uWm9vbSA9IGZ1bmN0aW9uKHIpIHtcclxuICAgIHRoaXMuejIgPSB0aGlzLnoxICogKDEgLyByKTtcclxuICAgIHRoaXMuZHJhd24gPSAwO1xyXG4gIH07XHJcbiAgVENwcm90by5DbGlja2VkID0gZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyIGEgPSB0aGlzLmFjdGl2ZTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmIChhICYmIGEudGFnKVxyXG4gICAgICAgIGlmICh0aGlzLmNsaWNrVG9Gcm9udCA9PT0gZmFsc2UgfHwgdGhpcy5jbGlja1RvRnJvbnQgPT09IG51bGwpXHJcbiAgICAgICAgICBhLnRhZy5DbGlja2VkKGUpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIHRoaXMuVGFnVG9Gcm9udChcclxuICAgICAgICAgICAgYS50YWcsXHJcbiAgICAgICAgICAgIHRoaXMuY2xpY2tUb0Zyb250LFxyXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICBhLnRhZy5DbGlja2VkKGUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICApO1xyXG4gICAgfSBjYXRjaCAoZXgpIHt9XHJcbiAgfTtcclxuICBUQ3Byb3RvLldoZWVsID0gZnVuY3Rpb24oaSkge1xyXG4gICAgdmFyIHogPSB0aGlzLnpvb20gKyB0aGlzLnpvb21TdGVwICogKGkgPyAxIDogLTEpO1xyXG4gICAgdGhpcy56b29tID0gbWluKHRoaXMuem9vbU1heCwgbWF4KHRoaXMuem9vbU1pbiwgeikpO1xyXG4gICAgdGhpcy5ab29tKHRoaXMuem9vbSk7XHJcbiAgfTtcclxuICBUQ3Byb3RvLkJlZ2luRHJhZyA9IGZ1bmN0aW9uKGUpIHtcclxuICAgIHRoaXMuZG93biA9IEV2ZW50WFkoZSwgdGhpcy5jYW52YXMpO1xyXG4gICAgZS5jYW5jZWxCdWJibGUgPSB0cnVlO1xyXG4gICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCAmJiBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfTtcclxuICBUQ3Byb3RvLkRyYWcgPSBmdW5jdGlvbihlLCBwKSB7XHJcbiAgICBpZiAodGhpcy5kcmFnQ29udHJvbCAmJiB0aGlzLmRvd24pIHtcclxuICAgICAgdmFyIHQyID0gdGhpcy5kcmFnVGhyZXNob2xkICogdGhpcy5kcmFnVGhyZXNob2xkLFxyXG4gICAgICAgIGR4ID0gcC54IC0gdGhpcy5kb3duLngsXHJcbiAgICAgICAgZHkgPSBwLnkgLSB0aGlzLmRvd24ueTtcclxuICAgICAgaWYgKHRoaXMuZHJhZ2dpbmcgfHwgZHggKiBkeCArIGR5ICogZHkgPiB0Mikge1xyXG4gICAgICAgIHRoaXMuZHggPSBkeDtcclxuICAgICAgICB0aGlzLmR5ID0gZHk7XHJcbiAgICAgICAgdGhpcy5kcmFnZ2luZyA9IDE7XHJcbiAgICAgICAgdGhpcy5kb3duID0gcDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dpbmc7XHJcbiAgfTtcclxuICBUQ3Byb3RvLkVuZERyYWcgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciByZXMgPSB0aGlzLmRyYWdnaW5nO1xyXG4gICAgdGhpcy5kcmFnZ2luZyA9IHRoaXMuZG93biA9IG51bGw7XHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH07XHJcbiAgZnVuY3Rpb24gUGluY2hEaXN0YW5jZShlKSB7XHJcbiAgICB2YXIgdDEgPSBlLnRhcmdldFRvdWNoZXNbMF0sXHJcbiAgICAgIHQyID0gZS50YXJnZXRUb3VjaGVzWzFdO1xyXG4gICAgcmV0dXJuIHNxcnQocG93KHQyLnBhZ2VYIC0gdDEucGFnZVgsIDIpICsgcG93KHQyLnBhZ2VZIC0gdDEucGFnZVksIDIpKTtcclxuICB9XHJcbiAgVENwcm90by5CZWdpblBpbmNoID0gZnVuY3Rpb24oZSkge1xyXG4gICAgdGhpcy5waW5jaGVkID0gW1BpbmNoRGlzdGFuY2UoZSksIHRoaXMuem9vbV07XHJcbiAgICBlLnByZXZlbnREZWZhdWx0ICYmIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9O1xyXG4gIFRDcHJvdG8uUGluY2ggPSBmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgeixcclxuICAgICAgZCxcclxuICAgICAgcCA9IHRoaXMucGluY2hlZDtcclxuICAgIGlmICghcCkgcmV0dXJuO1xyXG4gICAgZCA9IFBpbmNoRGlzdGFuY2UoZSk7XHJcbiAgICB6ID0gKHBbMV0gKiBkKSAvIHBbMF07XHJcbiAgICB0aGlzLnpvb20gPSBtaW4odGhpcy56b29tTWF4LCBtYXgodGhpcy56b29tTWluLCB6KSk7XHJcbiAgICB0aGlzLlpvb20odGhpcy56b29tKTtcclxuICB9O1xyXG4gIFRDcHJvdG8uRW5kUGluY2ggPSBmdW5jdGlvbihlKSB7XHJcbiAgICB0aGlzLnBpbmNoZWQgPSBudWxsO1xyXG4gIH07XHJcbiAgVENwcm90by5QYXVzZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xyXG4gIH07XHJcbiAgVENwcm90by5SZXN1bWUgPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XHJcbiAgfTtcclxuICBUQ3Byb3RvLlNldFNwZWVkID0gZnVuY3Rpb24oaSkge1xyXG4gICAgdGhpcy5pbml0aWFsID0gaTtcclxuICAgIHRoaXMueWF3ID0gaVswXSAqIHRoaXMubWF4U3BlZWQ7XHJcbiAgICB0aGlzLnBpdGNoID0gaVsxXSAqIHRoaXMubWF4U3BlZWQ7XHJcbiAgfTtcclxuICBUQ3Byb3RvLkZpbmRUYWcgPSBmdW5jdGlvbih0KSB7XHJcbiAgICBpZiAoIURlZmluZWQodCkpIHJldHVybiBudWxsO1xyXG4gICAgRGVmaW5lZCh0LmluZGV4KSAmJiAodCA9IHQuaW5kZXgpO1xyXG4gICAgaWYgKCFJc09iamVjdCh0KSkgcmV0dXJuIHRoaXMudGFnbGlzdFt0XTtcclxuICAgIHZhciBzcmNoLCB0Z3QsIGk7XHJcbiAgICBpZiAoRGVmaW5lZCh0LmlkKSkgKHNyY2ggPSBcImlkXCIpLCAodGd0ID0gdC5pZCk7XHJcbiAgICBlbHNlIGlmIChEZWZpbmVkKHQudGV4dCkpIChzcmNoID0gXCJpbm5lclRleHRcIiksICh0Z3QgPSB0LnRleHQpO1xyXG5cclxuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnRhZ2xpc3QubGVuZ3RoOyArK2kpXHJcbiAgICAgIGlmICh0aGlzLnRhZ2xpc3RbaV0uYVtzcmNoXSA9PSB0Z3QpIHJldHVybiB0aGlzLnRhZ2xpc3RbaV07XHJcbiAgfTtcclxuICBUQ3Byb3RvLlJvdGF0ZVRhZyA9IGZ1bmN0aW9uKHRhZywgbHQsIGxnLCB0aW1lLCBjYWxsYmFjaywgYWN0aXZlKSB7XHJcbiAgICB2YXIgdCA9IHRhZy54Zm9ybWVkLFxyXG4gICAgICB2MSA9IG5ldyBWZWN0b3IodC54LCB0LnksIHQueiksXHJcbiAgICAgIHYyID0gTWFrZVZlY3RvcihsZywgbHQpLFxyXG4gICAgICBhbmdsZSA9IHYxLmFuZ2xlKHYyKSxcclxuICAgICAgdSA9IHYxLmNyb3NzKHYyKS51bml0KCk7XHJcbiAgICBpZiAoYW5nbGUgPT0gMCkge1xyXG4gICAgICB0aGlzLmZpeGVkQ2FsbGJhY2tUYWcgPSB0YWc7XHJcbiAgICAgIHRoaXMuZml4ZWRDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5maXhlZEFuaW0gPSB7XHJcbiAgICAgICAgYW5nbGU6IC1hbmdsZSxcclxuICAgICAgICBheGlzOiB1LFxyXG4gICAgICAgIHQ6IHRpbWUsXHJcbiAgICAgICAgdDA6IFRpbWVOb3coKSxcclxuICAgICAgICBjYjogY2FsbGJhY2ssXHJcbiAgICAgICAgdGFnOiB0YWcsXHJcbiAgICAgICAgYWN0aXZlOiBhY3RpdmVcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9O1xyXG4gIFRDcHJvdG8uVGFnVG9Gcm9udCA9IGZ1bmN0aW9uKHRhZywgdGltZSwgY2FsbGJhY2ssIGFjdGl2ZSkge1xyXG4gICAgdGhpcy5Sb3RhdGVUYWcodGFnLCAwLCAwLCB0aW1lLCBjYWxsYmFjaywgYWN0aXZlKTtcclxuICB9O1xyXG4gIFRhZ0NhbnZhcy5TdGFydCA9IGZ1bmN0aW9uKGlkLCBsLCBvKSB7XHJcbiAgICBUYWdDYW52YXMuRGVsZXRlKGlkKTtcclxuICAgIFRhZ0NhbnZhcy50Y1tpZF0gPSBuZXcgVGFnQ2FudmFzKGlkLCBsLCBvKTtcclxuICB9O1xyXG4gIGZ1bmN0aW9uIHRjY2FsbChmLCBpZCkge1xyXG4gICAgVGFnQ2FudmFzLnRjW2lkXSAmJiBUYWdDYW52YXMudGNbaWRdW2ZdKCk7XHJcbiAgfVxyXG4gIFRhZ0NhbnZhcy5MaW5lYXIgPSBmdW5jdGlvbih0LCB0MCkge1xyXG4gICAgcmV0dXJuIHQwIC8gdDtcclxuICB9O1xyXG4gIFRhZ0NhbnZhcy5TbW9vdGggPSBmdW5jdGlvbih0LCB0MCkge1xyXG4gICAgcmV0dXJuIDAuNSAtIGNvcygodDAgKiBNYXRoLlBJKSAvIHQpIC8gMjtcclxuICB9O1xyXG4gIFRhZ0NhbnZhcy5QYXVzZSA9IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICB0Y2NhbGwoXCJQYXVzZVwiLCBpZCk7XHJcbiAgfTtcclxuICBUYWdDYW52YXMuUmVzdW1lID0gZnVuY3Rpb24oaWQpIHtcclxuICAgIHRjY2FsbChcIlJlc3VtZVwiLCBpZCk7XHJcbiAgfTtcclxuICBUYWdDYW52YXMuUmVsb2FkID0gZnVuY3Rpb24oaWQpIHtcclxuICAgIHRjY2FsbChcIkxvYWRcIiwgaWQpO1xyXG4gIH07XHJcbiAgVGFnQ2FudmFzLlVwZGF0ZSA9IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICB0Y2NhbGwoXCJVcGRhdGVcIiwgaWQpO1xyXG4gIH07XHJcbiAgVGFnQ2FudmFzLlNldFNwZWVkID0gZnVuY3Rpb24oaWQsIHNwZWVkKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIElzT2JqZWN0KHNwZWVkKSAmJlxyXG4gICAgICBUYWdDYW52YXMudGNbaWRdICYmXHJcbiAgICAgICFpc05hTihzcGVlZFswXSkgJiZcclxuICAgICAgIWlzTmFOKHNwZWVkWzFdKVxyXG4gICAgKSB7XHJcbiAgICAgIFRhZ0NhbnZhcy50Y1tpZF0uU2V0U3BlZWQoc3BlZWQpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9O1xyXG4gIFRhZ0NhbnZhcy5UYWdUb0Zyb250ID0gZnVuY3Rpb24oaWQsIG9wdGlvbnMpIHtcclxuICAgIGlmICghSXNPYmplY3Qob3B0aW9ucykpIHJldHVybiBmYWxzZTtcclxuICAgIG9wdGlvbnMubGF0ID0gb3B0aW9ucy5sbmcgPSAwO1xyXG4gICAgcmV0dXJuIFRhZ0NhbnZhcy5Sb3RhdGVUYWcoaWQsIG9wdGlvbnMpO1xyXG4gIH07XHJcbiAgVGFnQ2FudmFzLlJvdGF0ZVRhZyA9IGZ1bmN0aW9uKGlkLCBvcHRpb25zKSB7XHJcbiAgICBpZiAoSXNPYmplY3Qob3B0aW9ucykgJiYgVGFnQ2FudmFzLnRjW2lkXSkge1xyXG4gICAgICBpZiAoaXNOYU4ob3B0aW9ucy50aW1lKSkgb3B0aW9ucy50aW1lID0gNTAwO1xyXG4gICAgICB2YXIgdHQgPSBUYWdDYW52YXMudGNbaWRdLkZpbmRUYWcob3B0aW9ucyk7XHJcbiAgICAgIGlmICh0dCkge1xyXG4gICAgICAgIFRhZ0NhbnZhcy50Y1tpZF0uUm90YXRlVGFnKFxyXG4gICAgICAgICAgdHQsXHJcbiAgICAgICAgICBvcHRpb25zLmxhdCxcclxuICAgICAgICAgIG9wdGlvbnMubG5nLFxyXG4gICAgICAgICAgb3B0aW9ucy50aW1lLFxyXG4gICAgICAgICAgb3B0aW9ucy5jYWxsYmFjayxcclxuICAgICAgICAgIG9wdGlvbnMuYWN0aXZlXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcbiAgVGFnQ2FudmFzLkRlbGV0ZSA9IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICB2YXIgaSwgYztcclxuICAgIGlmIChoYW5kbGVyc1tpZF0pIHtcclxuICAgICAgYyA9IGRvYy5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICAgIGlmIChjKSB7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGhhbmRsZXJzW2lkXS5sZW5ndGg7ICsraSlcclxuICAgICAgICAgIFJlbW92ZUhhbmRsZXIoaGFuZGxlcnNbaWRdW2ldWzBdLCBoYW5kbGVyc1tpZF1baV1bMV0sIGMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBkZWxldGUgaGFuZGxlcnNbaWRdO1xyXG4gICAgZGVsZXRlIFRhZ0NhbnZhcy50Y1tpZF07XHJcbiAgfTtcclxuICBUYWdDYW52YXMuTmV4dEZyYW1lUkFGID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoRHJhd0NhbnZhc1JBRik7XHJcbiAgfTtcclxuICBUYWdDYW52YXMuTmV4dEZyYW1lVGltZW91dCA9IGZ1bmN0aW9uKGl2KSB7XHJcbiAgICBzZXRUaW1lb3V0KERyYXdDYW52YXMsIGl2KTtcclxuICB9O1xyXG4gIFRhZ0NhbnZhcy50YyA9IHt9O1xyXG4gIFRhZ0NhbnZhcy5vcHRpb25zID0ge1xyXG4gICAgejE6IDIwMDAwLFxyXG4gICAgejI6IDIwMDAwLFxyXG4gICAgejA6IDAuMDAwMixcclxuICAgIGZyZWV6ZUFjdGl2ZTogZmFsc2UsXHJcbiAgICBmcmVlemVEZWNlbDogZmFsc2UsXHJcbiAgICBhY3RpdmVDdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgcHVsc2F0ZVRvOiAxLFxyXG4gICAgcHVsc2F0ZVRpbWU6IDMsXHJcbiAgICByZXZlcnNlOiBmYWxzZSxcclxuICAgIGRlcHRoOiAwLjUsXHJcbiAgICBtYXhTcGVlZDogMC4wNSxcclxuICAgIG1pblNwZWVkOiAwLFxyXG4gICAgZGVjZWw6IDAuOTUsXHJcbiAgICBpbnRlcnZhbDogMjAsXHJcbiAgICBtaW5CcmlnaHRuZXNzOiAwLjEsXHJcbiAgICBtYXhCcmlnaHRuZXNzOiAxLFxyXG4gICAgb3V0bGluZUNvbG91cjogXCIjZmZmZjk5XCIsXHJcbiAgICBvdXRsaW5lVGhpY2tuZXNzOiAyLFxyXG4gICAgb3V0bGluZU9mZnNldDogNSxcclxuICAgIG91dGxpbmVNZXRob2Q6IFwib3V0bGluZVwiLFxyXG4gICAgb3V0bGluZVJhZGl1czogMCxcclxuICAgIHRleHRDb2xvdXI6IFwiI2ZmOTlmZlwiLFxyXG4gICAgdGV4dEhlaWdodDogMTUsXHJcbiAgICB0ZXh0Rm9udDogXCJIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmXCIsXHJcbiAgICBzaGFkb3c6IFwiIzAwMFwiLFxyXG4gICAgc2hhZG93Qmx1cjogMCxcclxuICAgIHNoYWRvd09mZnNldDogWzAsIDBdLFxyXG4gICAgaW5pdGlhbDogbnVsbCxcclxuICAgIGhpZGVUYWdzOiB0cnVlLFxyXG4gICAgem9vbTogMSxcclxuICAgIHdlaWdodDogZmFsc2UsXHJcbiAgICB3ZWlnaHRNb2RlOiBcInNpemVcIixcclxuICAgIHdlaWdodEZyb206IG51bGwsXHJcbiAgICB3ZWlnaHRTaXplOiAxLFxyXG4gICAgd2VpZ2h0U2l6ZU1pbjogbnVsbCxcclxuICAgIHdlaWdodFNpemVNYXg6IG51bGwsXHJcbiAgICB3ZWlnaHRHcmFkaWVudDogeyAwOiBcIiNmMDBcIiwgMC4zMzogXCIjZmYwXCIsIDAuNjY6IFwiIzBmMFwiLCAxOiBcIiMwMGZcIiB9LFxyXG4gICAgdHh0T3B0OiB0cnVlLFxyXG4gICAgdHh0U2NhbGU6IDIsXHJcbiAgICBmcm9udFNlbGVjdDogZmFsc2UsXHJcbiAgICB3aGVlbFpvb206IHRydWUsXHJcbiAgICB6b29tTWluOiAwLjMsXHJcbiAgICB6b29tTWF4OiAzLFxyXG4gICAgem9vbVN0ZXA6IDAuMDUsXHJcbiAgICBzaGFwZTogXCJzcGhlcmVcIixcclxuICAgIGxvY2s6IG51bGwsXHJcbiAgICB0b29sdGlwOiBudWxsLFxyXG4gICAgdG9vbHRpcERlbGF5OiAzMDAsXHJcbiAgICB0b29sdGlwQ2xhc3M6IFwidGN0b29sdGlwXCIsXHJcbiAgICByYWRpdXNYOiAxLFxyXG4gICAgcmFkaXVzWTogMSxcclxuICAgIHJhZGl1c1o6IDEsXHJcbiAgICBzdHJldGNoWDogMSxcclxuICAgIHN0cmV0Y2hZOiAxLFxyXG4gICAgb2Zmc2V0WDogMCxcclxuICAgIG9mZnNldFk6IDAsXHJcbiAgICBzaHVmZmxlVGFnczogZmFsc2UsXHJcbiAgICBub1NlbGVjdDogZmFsc2UsXHJcbiAgICBub01vdXNlOiBmYWxzZSxcclxuICAgIGltYWdlU2NhbGU6IDEsXHJcbiAgICBwYXVzZWQ6IGZhbHNlLFxyXG4gICAgZHJhZ0NvbnRyb2w6IGZhbHNlLFxyXG4gICAgZHJhZ1RocmVzaG9sZDogNCxcclxuICAgIGNlbnRyZUZ1bmM6IE5vcCxcclxuICAgIHNwbGl0V2lkdGg6IDAsXHJcbiAgICBhbmltVGltaW5nOiBcIlNtb290aFwiLFxyXG4gICAgY2xpY2tUb0Zyb250OiBmYWxzZSxcclxuICAgIGZhZGVJbjogMCxcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBiZ0NvbG91cjogbnVsbCxcclxuICAgIGJnUmFkaXVzOiAwLFxyXG4gICAgYmdPdXRsaW5lOiBudWxsLFxyXG4gICAgYmdPdXRsaW5lVGhpY2tuZXNzOiAwLFxyXG4gICAgb3V0bGluZUluY3JlYXNlOiA0LFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRyZVwiLFxyXG4gICAgdGV4dFZBbGlnbjogXCJtaWRkbGVcIixcclxuICAgIGltYWdlTW9kZTogbnVsbCxcclxuICAgIGltYWdlUG9zaXRpb246IG51bGwsXHJcbiAgICBpbWFnZVBhZGRpbmc6IDIsXHJcbiAgICBpbWFnZUFsaWduOiBcImNlbnRyZVwiLFxyXG4gICAgaW1hZ2VWQWxpZ246IFwibWlkZGxlXCIsXHJcbiAgICBub1RhZ3NNZXNzYWdlOiB0cnVlLFxyXG4gICAgY2VudHJlSW1hZ2U6IG51bGwsXHJcbiAgICBwaW5jaFpvb206IGZhbHNlLFxyXG4gICAgcmVwZWF0VGFnczogMCxcclxuICAgIG1pblRhZ3M6IDBcclxuICB9O1xyXG4gIGZvciAoaSBpbiBUYWdDYW52YXMub3B0aW9ucykgVGFnQ2FudmFzW2ldID0gVGFnQ2FudmFzLm9wdGlvbnNbaV07XHJcbiAgd2luZG93LlRhZ0NhbnZhcyA9IFRhZ0NhbnZhcztcclxuICAvLyBzZXQgYSBmbGFnIGZvciB3aGVuIHRoZSB3aW5kb3cgaGFzIGxvYWRlZFxyXG4gIEFkZEhhbmRsZXIoXHJcbiAgICBcImxvYWRcIixcclxuICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICBUYWdDYW52YXMubG9hZGVkID0gMTtcclxuICAgIH0sXHJcbiAgICB3aW5kb3dcclxuICApO1xyXG59KSgpO1xyXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS0zLTAhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTM2YzI2YjQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS0zLTAhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTM2YzI2YjQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==