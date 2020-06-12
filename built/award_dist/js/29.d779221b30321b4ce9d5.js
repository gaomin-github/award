(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/granules/index.vue?vue&type=template&id=02c81d94&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{ref:"renderDom"})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/granules/index.vue?vue&type=template&id=02c81d94&scoped=true&

// EXTERNAL MODULE: ./node_modules/three/build/three.module.js
var three_module = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/three-obj-loader/dist/index.js
var dist = __webpack_require__(69);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/granules/index.vue?vue&type=script&lang=js&
//
//
//


/* harmony default export */ var granulesvue_type_script_lang_js_ = ({
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      fogNum: 0.01,
      geometry: null,
      particle: null,
      particles: [],
      group: null,
      clock: null,
      newMesh: null,
      meshes: [],
      dir: 1 //向上

    };
  },

  mounted() {
    document.title = "obj loader";

    this._initScene(); // this._initCube();


    this._getObjData(); // this._renderAnimate();

  },

  methods: {
    _initScene() {
      //   相机
      this.camera = new three_module["PerspectiveCamera"](45, window.innerWidth / window.innerHeight, 1, 50000);
      this.camera.position.set(100, 100, 800); //   场景

      this.scene = new three_module["Scene"]();
      this.scene.add(new three_module["AxisHelper"](55)); //   let dirLight = new Three.DirectionalLight(0xffffff, 1);
      //   dirLight.position.set(8, 10, 6);
      //   this.scene.add(dirLight);
      // 计时器

      this.clock = new three_module["Clock"](); //   渲染器

      this.renderer = new three_module["WebGLRenderer"]({
        antialias: true
      });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      let renDom = this.$refs.renderDom;
      renDom.appendChild(this.renderer.domElement);
    },

    _initCube() {
      let cube = new three_module["BoxBufferGeometry"](1, 1, 1);
      let materialCube = new three_module["MeshBasicMaterial"]({
        color: 0x00ff00
      });
      let cubeMesh = new three_module["Mesh"](cube, materialCube);
      this.scene.add(cubeMesh);
    },

    _getObjData() {
      dist_default()(three_module);
      let loader = new three_module["OBJLoader"]();
      loader.load("male02.obj", module => {
        this.group = new three_module["Group"]();
        this.scene.add(this.group); // this.geometry = module.children[1].geometry;
        // let positions = this.geometry.attributes.position;
        // for (let i = 0; i < positions.length; i++) {
        // sprite实现
        // let material = new Three.SpriteMaterial({
        //     color: 0x080808 * Math.random() + 0x080808,
        //     size: 2
        // });
        // let particle = new Three.Sprite(material);
        // particle.position.x = positions.getX(i);
        // particle.position.y = -10;
        // particle.position.z = positions.getZ(i);
        // this.group.add(particle);
        // this.particles.push(particle);
        // }
        // point实现

        let mesh = null;

        for (let i = 0; i < module.children.length; i++) {
          let geometry = module.children[i].geometry;
          geometry.attributes.position.setUsage(three_module["DynamicDrawUsage"]);
          let positions = geometry.attributes.position;
          geometry.setAttribute("initPosition", positions.clone());

          for (let j = 0; j < positions.count; j++) {
            positions.setXYZ(j, 0, 0, 0);
          }

          mesh = new three_module["Points"](geometry, new three_module["PointsMaterial"]({
            size: 3,
            color: 0xffffff
          }));
          mesh.position.x = 30;
          mesh.position.y = 0;
          mesh.position.z = 30;
          this.group.add(mesh);
          this.meshes.push(mesh);
        }

        this._renderAnimate();
      });
    },

    _renderAnimate() {
      if (this.fogNum > 0) {
        this.fogNum -= 0.0001;
      } else if (this.fogNum < 0.5) {
        this.fogNum += 0.0001;
      }

      this.scene.fog = new three_module["FogExp2"]("#fff", this.fogNum);
      this.group.rotation.y -= 0.002;
      let verticalCount = 0;
      let allPointCount = 0; //   获取坐标点数量

      for (let i = 0; i < this.meshes.length; i++) {
        let mesh = this.meshes[i];
        let meshPositions = mesh.geometry.attributes.position;
        allPointCount += meshPositions.count;
      }

      let delta = this.clock.getDelta() * 100;

      for (let i = 0; i < this.meshes.length; i++) {
        let mesh = this.meshes[i];
        let meshPositions = mesh.geometry.attributes.position;
        let initMeshPositions = mesh.geometry.attributes.initPosition;

        for (let j = 0; j < meshPositions.count; j++) {
          let px = meshPositions.getX(j);
          let py = meshPositions.getY(j);
          let pz = meshPositions.getZ(j);

          if (this.dir > 0) {
            //   向上
            let ix = initMeshPositions.getX(j);
            let iy = initMeshPositions.getY(j);
            let iz = initMeshPositions.getZ(j);
            let dx = Math.abs(px - ix);
            let dy = Math.abs(py - iy);
            let dz = Math.abs(pz - iz);

            if (dx + dy + dz > 1) {
              meshPositions.setXYZ(j, px + (ix - px) / dx * delta * Math.random(), py + (iy - py) / dy * delta * Math.random(), pz + (iz - pz) / dz * delta * Math.random());
            } else {
              verticalCount++;
            }

            if (verticalCount === allPointCount) this.dir = -1;
          } else {
            //   向下
            if (py > 0.1) {
              let iy = initMeshPositions.getY(i);
              meshPositions.setXYZ(j, px + (0.5 - Math.random()) * delta, py + (0.25 - Math.random()) * delta, pz + (0.5 - Math.random()) * delta);
            } else {
              verticalCount++;
            }

            if (verticalCount === allPointCount) this.dir = 1;
          }
        }

        meshPositions.needsUpdate = true;
      }

      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this._renderAnimate);
    }

  }
});
// CONCATENATED MODULE: ./src/granules/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_granulesvue_type_script_lang_js_ = (granulesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./src/granules/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_granulesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "02c81d94",
  null
  
)

/* harmony default export */ var granules = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function defaultOnError(err) {
  throw new Error(err);
}

module.exports = function (THREE) {

  /**
   * @author mrdoob / http://mrdoob.com/
   */

  THREE.OBJLoader = function (manager) {

    this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;

    this.materials = null;

    this.regexp = {
      // v float float float
      vertex_pattern: /^v\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,
      // vn float float float
      normal_pattern: /^vn\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,
      // vt float float
      uv_pattern: /^vt\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,
      // f vertex vertex vertex
      face_vertex: /^f\s+(-?\d+)\s+(-?\d+)\s+(-?\d+)(?:\s+(-?\d+))?/,
      // f vertex/uv vertex/uv vertex/uv
      face_vertex_uv: /^f\s+(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+))?/,
      // f vertex/uv/normal vertex/uv/normal vertex/uv/normal
      face_vertex_uv_normal: /^f\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+)\/(-?\d+))?/,
      // f vertex//normal vertex//normal vertex//normal
      face_vertex_normal: /^f\s+(-?\d+)\/\/(-?\d+)\s+(-?\d+)\/\/(-?\d+)\s+(-?\d+)\/\/(-?\d+)(?:\s+(-?\d+)\/\/(-?\d+))?/,
      // o object_name | g group_name
      object_pattern: /^[og]\s*(.+)?/,
      // s boolean
      smoothing_pattern: /^s\s+(\d+|on|off)/,
      // mtllib file_reference
      material_library_pattern: /^mtllib /,
      // usemtl material_name
      material_use_pattern: /^usemtl /
    };
  };

  THREE.OBJLoader.prototype = {

    constructor: THREE.OBJLoader,

    load: function load(url, onLoad, onProgress, onError) {

      var scope = this;
      this.onError = onError || defaultOnError;

      var loader = new THREE.FileLoader(scope.manager);
      loader.setPath(this.path);
      loader.load(url, function (text) {

        onLoad(scope.parse(text));
      }, onProgress, onError);
    },

    setPath: function setPath(value) {

      this.path = value;
    },

    setMaterials: function setMaterials(materials) {

      this.materials = materials;
    },

    _createParserState: function _createParserState() {

      var state = {
        objects: [],
        object: {},

        vertices: [],
        normals: [],
        uvs: [],

        materialLibraries: [],

        startObject: function startObject(name, fromDeclaration) {

          // If the current object (initial from reset) is not from a g/o declaration in the parsed
          // file. We need to use it for the first parsed g/o to keep things in sync.
          if (this.object && this.object.fromDeclaration === false) {

            this.object.name = name;
            this.object.fromDeclaration = fromDeclaration !== false;
            return;
          }

          var previousMaterial = this.object && typeof this.object.currentMaterial === 'function' ? this.object.currentMaterial() : undefined;

          if (this.object && typeof this.object._finalize === 'function') {

            this.object._finalize(true);
          }

          this.object = {
            name: name || '',
            fromDeclaration: fromDeclaration !== false,

            geometry: {
              vertices: [],
              normals: [],
              uvs: []
            },
            materials: [],
            smooth: true,

            startMaterial: function startMaterial(name, libraries) {

              var previous = this._finalize(false);

              // New usemtl declaration overwrites an inherited material, except if faces were declared
              // after the material, then it must be preserved for proper MultiMaterial continuation.
              if (previous && (previous.inherited || previous.groupCount <= 0)) {

                this.materials.splice(previous.index, 1);
              }

              var material = {
                index: this.materials.length,
                name: name || '',
                mtllib: Array.isArray(libraries) && libraries.length > 0 ? libraries[libraries.length - 1] : '',
                smooth: previous !== undefined ? previous.smooth : this.smooth,
                groupStart: previous !== undefined ? previous.groupEnd : 0,
                groupEnd: -1,
                groupCount: -1,
                inherited: false,

                clone: function clone(index) {
                  var cloned = {
                    index: typeof index === 'number' ? index : this.index,
                    name: this.name,
                    mtllib: this.mtllib,
                    smooth: this.smooth,
                    groupStart: 0,
                    groupEnd: -1,
                    groupCount: -1,
                    inherited: false
                  };
                  cloned.clone = this.clone.bind(cloned);
                  return cloned;
                }
              };

              this.materials.push(material);

              return material;
            },

            currentMaterial: function currentMaterial() {

              if (this.materials.length > 0) {
                return this.materials[this.materials.length - 1];
              }

              return undefined;
            },

            _finalize: function _finalize(end) {

              var lastMultiMaterial = this.currentMaterial();
              if (lastMultiMaterial && lastMultiMaterial.groupEnd === -1) {

                lastMultiMaterial.groupEnd = this.geometry.vertices.length / 3;
                lastMultiMaterial.groupCount = lastMultiMaterial.groupEnd - lastMultiMaterial.groupStart;
                lastMultiMaterial.inherited = false;
              }

              // Ignore objects tail materials if no face declarations followed them before a new o/g started.
              if (end && this.materials.length > 1) {

                for (var mi = this.materials.length - 1; mi >= 0; mi--) {
                  if (this.materials[mi].groupCount <= 0) {
                    this.materials.splice(mi, 1);
                  }
                }
              }

              // Guarantee at least one empty material, this makes the creation later more straight forward.
              if (end && this.materials.length === 0) {

                this.materials.push({
                  name: '',
                  smooth: this.smooth
                });
              }

              return lastMultiMaterial;
            }
          };

          // Inherit previous objects material.
          // Spec tells us that a declared material must be set to all objects until a new material is declared.
          // If a usemtl declaration is encountered while this new object is being parsed, it will
          // overwrite the inherited material. Exception being that there was already face declarations
          // to the inherited material, then it will be preserved for proper MultiMaterial continuation.

          if (previousMaterial && previousMaterial.name && typeof previousMaterial.clone === "function") {

            var declared = previousMaterial.clone(0);
            declared.inherited = true;
            this.object.materials.push(declared);
          }

          this.objects.push(this.object);
        },

        finalize: function finalize() {

          if (this.object && typeof this.object._finalize === 'function') {

            this.object._finalize(true);
          }
        },

        parseVertexIndex: function parseVertexIndex(value, len) {

          var index = parseInt(value, 10);
          return (index >= 0 ? index - 1 : index + len / 3) * 3;
        },

        parseNormalIndex: function parseNormalIndex(value, len) {

          var index = parseInt(value, 10);
          return (index >= 0 ? index - 1 : index + len / 3) * 3;
        },

        parseUVIndex: function parseUVIndex(value, len) {

          var index = parseInt(value, 10);
          return (index >= 0 ? index - 1 : index + len / 2) * 2;
        },

        addVertex: function addVertex(a, b, c) {

          var src = this.vertices;
          var dst = this.object.geometry.vertices;

          dst.push(src[a + 0]);
          dst.push(src[a + 1]);
          dst.push(src[a + 2]);
          dst.push(src[b + 0]);
          dst.push(src[b + 1]);
          dst.push(src[b + 2]);
          dst.push(src[c + 0]);
          dst.push(src[c + 1]);
          dst.push(src[c + 2]);
        },

        addVertexLine: function addVertexLine(a) {

          var src = this.vertices;
          var dst = this.object.geometry.vertices;

          dst.push(src[a + 0]);
          dst.push(src[a + 1]);
          dst.push(src[a + 2]);
        },

        addNormal: function addNormal(a, b, c) {

          var src = this.normals;
          var dst = this.object.geometry.normals;

          dst.push(src[a + 0]);
          dst.push(src[a + 1]);
          dst.push(src[a + 2]);
          dst.push(src[b + 0]);
          dst.push(src[b + 1]);
          dst.push(src[b + 2]);
          dst.push(src[c + 0]);
          dst.push(src[c + 1]);
          dst.push(src[c + 2]);
        },

        addUV: function addUV(a, b, c) {

          var src = this.uvs;
          var dst = this.object.geometry.uvs;

          dst.push(src[a + 0]);
          dst.push(src[a + 1]);
          dst.push(src[b + 0]);
          dst.push(src[b + 1]);
          dst.push(src[c + 0]);
          dst.push(src[c + 1]);
        },

        addUVLine: function addUVLine(a) {

          var src = this.uvs;
          var dst = this.object.geometry.uvs;

          dst.push(src[a + 0]);
          dst.push(src[a + 1]);
        },

        addFace: function addFace(a, b, c, d, ua, ub, uc, ud, na, nb, nc, nd) {

          var vLen = this.vertices.length;

          var ia = this.parseVertexIndex(a, vLen);
          var ib = this.parseVertexIndex(b, vLen);
          var ic = this.parseVertexIndex(c, vLen);
          var id;

          if (d === undefined) {

            this.addVertex(ia, ib, ic);
          } else {

            id = this.parseVertexIndex(d, vLen);

            this.addVertex(ia, ib, id);
            this.addVertex(ib, ic, id);
          }

          if (ua !== undefined) {

            var uvLen = this.uvs.length;

            ia = this.parseUVIndex(ua, uvLen);
            ib = this.parseUVIndex(ub, uvLen);
            ic = this.parseUVIndex(uc, uvLen);

            if (d === undefined) {

              this.addUV(ia, ib, ic);
            } else {

              id = this.parseUVIndex(ud, uvLen);

              this.addUV(ia, ib, id);
              this.addUV(ib, ic, id);
            }
          }

          if (na !== undefined) {

            // Normals are many times the same. If so, skip function call and parseInt.
            var nLen = this.normals.length;
            ia = this.parseNormalIndex(na, nLen);

            ib = na === nb ? ia : this.parseNormalIndex(nb, nLen);
            ic = na === nc ? ia : this.parseNormalIndex(nc, nLen);

            if (d === undefined) {

              this.addNormal(ia, ib, ic);
            } else {

              id = this.parseNormalIndex(nd, nLen);

              this.addNormal(ia, ib, id);
              this.addNormal(ib, ic, id);
            }
          }
        },

        addLineGeometry: function addLineGeometry(vertices, uvs) {

          this.object.geometry.type = 'Line';

          var vLen = this.vertices.length;
          var uvLen = this.uvs.length;

          for (var vi = 0, l = vertices.length; vi < l; vi++) {

            this.addVertexLine(this.parseVertexIndex(vertices[vi], vLen));
          }

          for (var uvi = 0, l = uvs.length; uvi < l; uvi++) {

            this.addUVLine(this.parseUVIndex(uvs[uvi], uvLen));
          }
        }

      };

      state.startObject('', false);

      return state;
    },

    parse: function parse(text, debug) {
      if (typeof debug === 'undefined') {
        debug = true;
      }

      if (debug) {
        console.time('OBJLoader');
      }

      var state = this._createParserState();

      if (text.indexOf('\r\n') !== -1) {

        // This is faster than String.split with regex that splits on both
        text = text.replace(/\r\n/g, '\n');
      }

      if (text.indexOf('\\\n') !== -1) {

        // join lines separated by a line continuation character (\)
        text = text.replace(/\\\n/g, '');
      }

      var lines = text.split('\n');
      var line = '',
          lineFirstChar = '',
          lineSecondChar = '';
      var lineLength = 0;
      var result = [];

      // Faster to just trim left side of the line. Use if available.
      var trimLeft = typeof ''.trimLeft === 'function';

      for (var i = 0, l = lines.length; i < l; i++) {

        line = lines[i];

        line = trimLeft ? line.trimLeft() : line.trim();

        lineLength = line.length;

        if (lineLength === 0) continue;

        lineFirstChar = line.charAt(0);

        // @todo invoke passed in handler if any
        if (lineFirstChar === '#') continue;

        if (lineFirstChar === 'v') {

          lineSecondChar = line.charAt(1);

          if (lineSecondChar === ' ' && (result = this.regexp.vertex_pattern.exec(line)) !== null) {

            // 0                  1      2      3
            // ["v 1.0 2.0 3.0", "1.0", "2.0", "3.0"]

            state.vertices.push(parseFloat(result[1]), parseFloat(result[2]), parseFloat(result[3]));
          } else if (lineSecondChar === 'n' && (result = this.regexp.normal_pattern.exec(line)) !== null) {

            // 0                   1      2      3
            // ["vn 1.0 2.0 3.0", "1.0", "2.0", "3.0"]

            state.normals.push(parseFloat(result[1]), parseFloat(result[2]), parseFloat(result[3]));
          } else if (lineSecondChar === 't' && (result = this.regexp.uv_pattern.exec(line)) !== null) {

            // 0               1      2
            // ["vt 0.1 0.2", "0.1", "0.2"]

            state.uvs.push(parseFloat(result[1]), parseFloat(result[2]));
          } else {

            this.onError("Unexpected vertex/normal/uv line: '" + line + "'");
          }
        } else if (lineFirstChar === "f") {

          if ((result = this.regexp.face_vertex_uv_normal.exec(line)) !== null) {

            // f vertex/uv/normal vertex/uv/normal vertex/uv/normal
            // 0                        1    2    3    4    5    6    7    8    9   10         11         12
            // ["f 1/1/1 2/2/2 3/3/3", "1", "1", "1", "2", "2", "2", "3", "3", "3", undefined, undefined, undefined]

            state.addFace(result[1], result[4], result[7], result[10], result[2], result[5], result[8], result[11], result[3], result[6], result[9], result[12]);
          } else if ((result = this.regexp.face_vertex_uv.exec(line)) !== null) {

            // f vertex/uv vertex/uv vertex/uv
            // 0                  1    2    3    4    5    6   7          8
            // ["f 1/1 2/2 3/3", "1", "1", "2", "2", "3", "3", undefined, undefined]

            state.addFace(result[1], result[3], result[5], result[7], result[2], result[4], result[6], result[8]);
          } else if ((result = this.regexp.face_vertex_normal.exec(line)) !== null) {

            // f vertex//normal vertex//normal vertex//normal
            // 0                     1    2    3    4    5    6   7          8
            // ["f 1//1 2//2 3//3", "1", "1", "2", "2", "3", "3", undefined, undefined]

            state.addFace(result[1], result[3], result[5], result[7], undefined, undefined, undefined, undefined, result[2], result[4], result[6], result[8]);
          } else if ((result = this.regexp.face_vertex.exec(line)) !== null) {

            // f vertex vertex vertex
            // 0            1    2    3   4
            // ["f 1 2 3", "1", "2", "3", undefined]

            state.addFace(result[1], result[2], result[3], result[4]);
          } else {

            this.onError("Unexpected face line: '" + line + "'");
          }
        } else if (lineFirstChar === "l") {

          var lineParts = line.substring(1).trim().split(" ");
          var lineVertices = [],
              lineUVs = [];

          if (line.indexOf("/") === -1) {

            lineVertices = lineParts;
          } else {

            for (var li = 0, llen = lineParts.length; li < llen; li++) {

              var parts = lineParts[li].split("/");

              if (parts[0] !== "") lineVertices.push(parts[0]);
              if (parts[1] !== "") lineUVs.push(parts[1]);
            }
          }
          state.addLineGeometry(lineVertices, lineUVs);
        } else if ((result = this.regexp.object_pattern.exec(line)) !== null) {

          // o object_name
          // or
          // g group_name

          // WORKAROUND: https://bugs.chromium.org/p/v8/issues/detail?id=2869
          // var name = result[ 0 ].substr( 1 ).trim();
          var name = (" " + result[0].substr(1).trim()).substr(1);

          state.startObject(name);
        } else if (this.regexp.material_use_pattern.test(line)) {

          // material

          state.object.startMaterial(line.substring(7).trim(), state.materialLibraries);
        } else if (this.regexp.material_library_pattern.test(line)) {

          // mtl file

          state.materialLibraries.push(line.substring(7).trim());
        } else if ((result = this.regexp.smoothing_pattern.exec(line)) !== null) {

          // smooth shading

          // @todo Handle files that have varying smooth values for a set of faces inside one geometry,
          // but does not define a usemtl for each face set.
          // This should be detected and a dummy material created (later MultiMaterial and geometry groups).
          // This requires some care to not create extra material on each smooth value for "normal" obj files.
          // where explicit usemtl defines geometry groups.
          // Example asset: examples/models/obj/cerberus/Cerberus.obj

          var value = result[1].trim().toLowerCase();
          state.object.smooth = value === '1' || value === 'on';

          var material = state.object.currentMaterial();
          if (material) {

            material.smooth = state.object.smooth;
          }
        } else {

          // Handle null terminated files without exception
          if (line === '\0') continue;

          this.onError("Unexpected line: '" + line + "'");
        }
      }

      state.finalize();

      var container = new THREE.Group();
      container.materialLibraries = [].concat(state.materialLibraries);

      for (var i = 0, l = state.objects.length; i < l; i++) {

        var object = state.objects[i];
        var geometry = object.geometry;
        var materials = object.materials;
        var isLine = geometry.type === 'Line';

        // Skip o/g line declarations that did not follow with any faces
        if (geometry.vertices.length === 0) continue;

        var buffergeometry = new THREE.BufferGeometry();

        buffergeometry.addAttribute('position', new THREE.BufferAttribute(new Float32Array(geometry.vertices), 3));

        if (geometry.normals.length > 0) {

          buffergeometry.addAttribute('normal', new THREE.BufferAttribute(new Float32Array(geometry.normals), 3));
        } else {

          buffergeometry.computeVertexNormals();
        }

        if (geometry.uvs.length > 0) {

          buffergeometry.addAttribute('uv', new THREE.BufferAttribute(new Float32Array(geometry.uvs), 2));
        }

        // Create materials

        var createdMaterials = [];

        for (var mi = 0, miLen = materials.length; mi < miLen; mi++) {

          var sourceMaterial = materials[mi];
          var material = undefined;

          if (this.materials !== null) {

            material = this.materials.create(sourceMaterial.name);

            // mtl etc. loaders probably can't create line materials correctly, copy properties to a line material.
            if (isLine && material && !(material instanceof THREE.LineBasicMaterial)) {

              var materialLine = new THREE.LineBasicMaterial();
              materialLine.copy(material);
              material = materialLine;
            }
          }

          if (!material) {

            material = !isLine ? new THREE.MeshPhongMaterial() : new THREE.LineBasicMaterial();
            material.name = sourceMaterial.name;
          }

          material.shading = sourceMaterial.smooth ? THREE.SmoothShading : THREE.FlatShading;

          createdMaterials.push(material);
        }

        // Create mesh

        var mesh;

        if (createdMaterials.length > 1) {

          for (var mi = 0, miLen = materials.length; mi < miLen; mi++) {

            var sourceMaterial = materials[mi];
            buffergeometry.addGroup(sourceMaterial.groupStart, sourceMaterial.groupCount, mi);
          }

          var multiMaterial = new THREE.MultiMaterial(createdMaterials);
          mesh = !isLine ? new THREE.Mesh(buffergeometry, multiMaterial) : new THREE.LineSegments(buffergeometry, multiMaterial);
        } else {

          mesh = !isLine ? new THREE.Mesh(buffergeometry, createdMaterials[0]) : new THREE.LineSegments(buffergeometry, createdMaterials[0]);
        }

        mesh.name = object.name;

        container.add(mesh);
      }

      if (debug) {
        console.timeEnd('OBJLoader');
      }

      return container;
    }

  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ3JhbnVsZXMvaW5kZXgudnVlP2FlNTAiLCJ3ZWJwYWNrOi8vL3NyYy9ncmFudWxlcy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYW51bGVzL2luZGV4LnZ1ZT8wMmIyIiwid2VicGFjazovLy8uL3NyYy9ncmFudWxlcy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RocmVlLW9iai1sb2FkZXIvZGlzdC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwwQkFBMEIsYUFBYSwwQkFBMEIsd0JBQXdCLHFCQUFxQixnQkFBZ0I7QUFDOUg7Ozs7Ozs7Ozs7Ozs7Ozs7QUNHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBREE7QUFFQSxrQkFGQTtBQUdBLG9CQUhBO0FBSUEsa0JBSkE7QUFLQSxvQkFMQTtBQU1BLG9CQU5BO0FBT0EsbUJBUEE7QUFRQSxpQkFSQTtBQVNBLGlCQVRBO0FBVUEsbUJBVkE7QUFXQSxnQkFYQTtBQVlBLFlBWkEsQ0FZQTs7QUFaQTtBQWNBLEdBaEJBOztBQWlCQTtBQUNBOztBQUNBLHNCQUZBLENBR0E7OztBQUNBLHVCQUpBLENBS0E7O0FBQ0EsR0F2QkE7O0FBd0JBO0FBQ0E7QUFDQTtBQUNBLDBEQUNBLEVBREEsRUFFQSxzQ0FGQSxFQUdBLENBSEEsRUFJQSxLQUpBO0FBTUEsOENBUkEsQ0FTQTs7QUFDQTtBQUNBLHlEQVhBLENBYUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsK0NBakJBLENBa0JBOztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBeEJBOztBQXlCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLEtBOUJBOztBQStCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBRkEsQ0FHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQSw0Q0FDQSxRQURBLEVBRUE7QUFDQSxtQkFEQTtBQUVBO0FBRkEsWUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLE9BNUNBO0FBNkNBLEtBL0VBOztBQWdGQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBOztBQUNBO0FBRUE7QUFDQTtBQUNBLDRCQVZBLENBV0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EsbUNBQ0EsQ0FEQSxFQUVBLDJDQUZBLEVBR0EsMkNBSEEsRUFJQSwyQ0FKQTtBQU1BLGFBUEEsTUFPQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxXQW5CQSxNQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUNBLENBREEsRUFFQSxrQ0FGQSxFQUdBLG1DQUhBLEVBSUEsa0NBSkE7QUFNQSxhQVJBLE1BUUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFuSkE7QUF4QkEsRzs7QUNOcUssQ0FBZ0IseUdBQUcsRUFBQyxDOzs7OztBQ0F6RjtBQUN2QztBQUNMOzs7QUFHcEQ7QUFDMEY7QUFDMUYsZ0JBQWdCLDhDQUFVO0FBQzFCLEVBQUUsb0NBQU07QUFDUixFQUFFLE1BQU07QUFDUixFQUFFLGVBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWUsK0Y7Ozs7Ozs7O0FDbEJGOztBQUViO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsYUFBYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhOztBQUViOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3REFBd0QsU0FBUztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFdBQVc7O0FBRVg7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxhQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLCtDQUErQyxRQUFROztBQUV2RDtBQUNBOztBQUVBLDJDQUEyQyxTQUFTOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHVDQUF1QyxPQUFPOztBQUU5Qzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXOztBQUVYO0FBQ0E7O0FBRUE7QUFDQSxXQUFXOztBQUVYO0FBQ0E7O0FBRUE7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsV0FBVzs7QUFFWCxxREFBcUQsV0FBVzs7QUFFaEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsK0NBQStDLE9BQU87O0FBRXREO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxrREFBa0QsWUFBWTs7QUFFOUQ7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsb0RBQW9ELFlBQVk7O0FBRWhFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxFIiwiZmlsZSI6ImF3YXJkX2Rpc3QvanMvMjkuZDc3OTIyMWIzMDMyMWI0Y2U5ZDUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnc2VjdGlvbicse3JlZjpcInJlbmRlckRvbVwifSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIjx0ZW1wbGF0ZT5cclxuICA8c2VjdGlvbiByZWY9XCJyZW5kZXJEb21cIj48L3NlY3Rpb24+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbmltcG9ydCAqIGFzIFRocmVlIGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgT0JKTG9hZGVyIGZyb20gXCJ0aHJlZS1vYmotbG9hZGVyXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc2NlbmU6IG51bGwsXHJcbiAgICAgIGNhbWVyYTogbnVsbCxcclxuICAgICAgcmVuZGVyZXI6IG51bGwsXHJcbiAgICAgIGZvZ051bTogMC4wMSxcclxuICAgICAgZ2VvbWV0cnk6IG51bGwsXHJcbiAgICAgIHBhcnRpY2xlOiBudWxsLFxyXG4gICAgICBwYXJ0aWNsZXM6IFtdLFxyXG4gICAgICBncm91cDogbnVsbCxcclxuICAgICAgY2xvY2s6IG51bGwsXHJcbiAgICAgIG5ld01lc2g6IG51bGwsXHJcbiAgICAgIG1lc2hlczogW10sXHJcbiAgICAgIGRpcjogMSAvL+WQkeS4ilxyXG4gICAgfTtcclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICBkb2N1bWVudC50aXRsZSA9IFwib2JqIGxvYWRlclwiO1xyXG4gICAgdGhpcy5faW5pdFNjZW5lKCk7XHJcbiAgICAvLyB0aGlzLl9pbml0Q3ViZSgpO1xyXG4gICAgdGhpcy5fZ2V0T2JqRGF0YSgpO1xyXG4gICAgLy8gdGhpcy5fcmVuZGVyQW5pbWF0ZSgpO1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgX2luaXRTY2VuZSgpIHtcclxuICAgICAgLy8gICDnm7jmnLpcclxuICAgICAgdGhpcy5jYW1lcmEgPSBuZXcgVGhyZWUuUGVyc3BlY3RpdmVDYW1lcmEoXHJcbiAgICAgICAgNDUsXHJcbiAgICAgICAgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgICAgMSxcclxuICAgICAgICA1MDAwMFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi5zZXQoMTAwLCAxMDAsIDgwMCk7XHJcbiAgICAgIC8vICAg5Zy65pmvXHJcbiAgICAgIHRoaXMuc2NlbmUgPSBuZXcgVGhyZWUuU2NlbmUoKTtcclxuICAgICAgdGhpcy5zY2VuZS5hZGQobmV3IFRocmVlLkF4aXNIZWxwZXIoNTUpKTtcclxuXHJcbiAgICAgIC8vICAgbGV0IGRpckxpZ2h0ID0gbmV3IFRocmVlLkRpcmVjdGlvbmFsTGlnaHQoMHhmZmZmZmYsIDEpO1xyXG4gICAgICAvLyAgIGRpckxpZ2h0LnBvc2l0aW9uLnNldCg4LCAxMCwgNik7XHJcbiAgICAgIC8vICAgdGhpcy5zY2VuZS5hZGQoZGlyTGlnaHQpO1xyXG4gICAgICAvLyDorqHml7blmahcclxuICAgICAgdGhpcy5jbG9jayA9IG5ldyBUaHJlZS5DbG9jaygpO1xyXG4gICAgICAvLyAgIOa4suafk+WZqFxyXG4gICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFRocmVlLldlYkdMUmVuZGVyZXIoeyBhbnRpYWxpYXM6IHRydWUgfSk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgICAgbGV0IHJlbkRvbSA9IHRoaXMuJHJlZnMucmVuZGVyRG9tO1xyXG4gICAgICByZW5Eb20uYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KTtcclxuICAgIH0sXHJcbiAgICBfaW5pdEN1YmUoKSB7XHJcbiAgICAgIGxldCBjdWJlID0gbmV3IFRocmVlLkJveEJ1ZmZlckdlb21ldHJ5KDEsIDEsIDEpO1xyXG4gICAgICBsZXQgbWF0ZXJpYWxDdWJlID0gbmV3IFRocmVlLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6IDB4MDBmZjAwIH0pO1xyXG4gICAgICBsZXQgY3ViZU1lc2ggPSBuZXcgVGhyZWUuTWVzaChjdWJlLCBtYXRlcmlhbEN1YmUpO1xyXG4gICAgICB0aGlzLnNjZW5lLmFkZChjdWJlTWVzaCk7XHJcbiAgICB9LFxyXG4gICAgX2dldE9iakRhdGEoKSB7XHJcbiAgICAgIE9CSkxvYWRlcihUaHJlZSk7XHJcbiAgICAgIGxldCBsb2FkZXIgPSBuZXcgVGhyZWUuT0JKTG9hZGVyKCk7XHJcbiAgICAgIGxvYWRlci5sb2FkKFwibWFsZTAyLm9ialwiLCBtb2R1bGUgPT4ge1xyXG4gICAgICAgIHRoaXMuZ3JvdXAgPSBuZXcgVGhyZWUuR3JvdXAoKTtcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmdyb3VwKTtcclxuICAgICAgICAvLyB0aGlzLmdlb21ldHJ5ID0gbW9kdWxlLmNoaWxkcmVuWzFdLmdlb21ldHJ5O1xyXG5cclxuICAgICAgICAvLyBsZXQgcG9zaXRpb25zID0gdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gc3ByaXRl5a6e546wXHJcbiAgICAgICAgLy8gbGV0IG1hdGVyaWFsID0gbmV3IFRocmVlLlNwcml0ZU1hdGVyaWFsKHtcclxuICAgICAgICAvLyAgICAgY29sb3I6IDB4MDgwODA4ICogTWF0aC5yYW5kb20oKSArIDB4MDgwODA4LFxyXG4gICAgICAgIC8vICAgICBzaXplOiAyXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gbGV0IHBhcnRpY2xlID0gbmV3IFRocmVlLlNwcml0ZShtYXRlcmlhbCk7XHJcbiAgICAgICAgLy8gcGFydGljbGUucG9zaXRpb24ueCA9IHBvc2l0aW9ucy5nZXRYKGkpO1xyXG4gICAgICAgIC8vIHBhcnRpY2xlLnBvc2l0aW9uLnkgPSAtMTA7XHJcbiAgICAgICAgLy8gcGFydGljbGUucG9zaXRpb24ueiA9IHBvc2l0aW9ucy5nZXRaKGkpO1xyXG4gICAgICAgIC8vIHRoaXMuZ3JvdXAuYWRkKHBhcnRpY2xlKTtcclxuICAgICAgICAvLyB0aGlzLnBhcnRpY2xlcy5wdXNoKHBhcnRpY2xlKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gcG9pbnTlrp7njrBcclxuICAgICAgICBsZXQgbWVzaCA9IG51bGw7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGxldCBnZW9tZXRyeSA9IG1vZHVsZS5jaGlsZHJlbltpXS5nZW9tZXRyeTtcclxuICAgICAgICAgIGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uc2V0VXNhZ2UoVGhyZWUuRHluYW1pY0RyYXdVc2FnZSk7XHJcbiAgICAgICAgICBsZXQgcG9zaXRpb25zID0gZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbjtcclxuICAgICAgICAgIGdlb21ldHJ5LnNldEF0dHJpYnV0ZShcImluaXRQb3NpdGlvblwiLCBwb3NpdGlvbnMuY2xvbmUoKSk7XHJcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBvc2l0aW9ucy5jb3VudDsgaisrKSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9ucy5zZXRYWVooaiwgMCwgMCwgMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBtZXNoID0gbmV3IFRocmVlLlBvaW50cyhcclxuICAgICAgICAgICAgZ2VvbWV0cnksXHJcbiAgICAgICAgICAgIG5ldyBUaHJlZS5Qb2ludHNNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgICAgc2l6ZTogMyxcclxuICAgICAgICAgICAgICBjb2xvcjogMHhmZmZmZmZcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBtZXNoLnBvc2l0aW9uLnggPSAzMDtcclxuICAgICAgICAgIG1lc2gucG9zaXRpb24ueSA9IDA7XHJcbiAgICAgICAgICBtZXNoLnBvc2l0aW9uLnogPSAzMDtcclxuXHJcbiAgICAgICAgICB0aGlzLmdyb3VwLmFkZChtZXNoKTtcclxuICAgICAgICAgIHRoaXMubWVzaGVzLnB1c2gobWVzaCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3JlbmRlckFuaW1hdGUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgX3JlbmRlckFuaW1hdGUoKSB7XHJcbiAgICAgIGlmICh0aGlzLmZvZ051bSA+IDApIHtcclxuICAgICAgICB0aGlzLmZvZ051bSAtPSAwLjAwMDE7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5mb2dOdW0gPCAwLjUpIHtcclxuICAgICAgICB0aGlzLmZvZ051bSArPSAwLjAwMDE7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zY2VuZS5mb2cgPSBuZXcgVGhyZWUuRm9nRXhwMihcIiNmZmZcIiwgdGhpcy5mb2dOdW0pO1xyXG5cclxuICAgICAgdGhpcy5ncm91cC5yb3RhdGlvbi55IC09IDAuMDAyO1xyXG4gICAgICBsZXQgdmVydGljYWxDb3VudCA9IDA7XHJcbiAgICAgIGxldCBhbGxQb2ludENvdW50ID0gMDtcclxuICAgICAgLy8gICDojrflj5blnZDmoIfngrnmlbDph49cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1lc2hlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBtZXNoID0gdGhpcy5tZXNoZXNbaV07XHJcbiAgICAgICAgbGV0IG1lc2hQb3NpdGlvbnMgPSBtZXNoLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb247XHJcbiAgICAgICAgYWxsUG9pbnRDb3VudCArPSBtZXNoUG9zaXRpb25zLmNvdW50O1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBkZWx0YSA9IHRoaXMuY2xvY2suZ2V0RGVsdGEoKSAqIDEwMDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1lc2hlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBtZXNoID0gdGhpcy5tZXNoZXNbaV07XHJcblxyXG4gICAgICAgIGxldCBtZXNoUG9zaXRpb25zID0gbWVzaC5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uO1xyXG4gICAgICAgIGxldCBpbml0TWVzaFBvc2l0aW9ucyA9IG1lc2guZ2VvbWV0cnkuYXR0cmlidXRlcy5pbml0UG9zaXRpb247XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtZXNoUG9zaXRpb25zLmNvdW50OyBqKyspIHtcclxuICAgICAgICAgIGxldCBweCA9IG1lc2hQb3NpdGlvbnMuZ2V0WChqKTtcclxuICAgICAgICAgIGxldCBweSA9IG1lc2hQb3NpdGlvbnMuZ2V0WShqKTtcclxuICAgICAgICAgIGxldCBweiA9IG1lc2hQb3NpdGlvbnMuZ2V0WihqKTtcclxuICAgICAgICAgIGlmICh0aGlzLmRpciA+IDApIHtcclxuICAgICAgICAgICAgLy8gICDlkJHkuIpcclxuICAgICAgICAgICAgbGV0IGl4ID0gaW5pdE1lc2hQb3NpdGlvbnMuZ2V0WChqKTtcclxuICAgICAgICAgICAgbGV0IGl5ID0gaW5pdE1lc2hQb3NpdGlvbnMuZ2V0WShqKTtcclxuICAgICAgICAgICAgbGV0IGl6ID0gaW5pdE1lc2hQb3NpdGlvbnMuZ2V0WihqKTtcclxuICAgICAgICAgICAgbGV0IGR4ID0gTWF0aC5hYnMocHggLSBpeCk7XHJcbiAgICAgICAgICAgIGxldCBkeSA9IE1hdGguYWJzKHB5IC0gaXkpO1xyXG4gICAgICAgICAgICBsZXQgZHogPSBNYXRoLmFicyhweiAtIGl6KTtcclxuICAgICAgICAgICAgaWYgKGR4ICsgZHkgKyBkeiA+IDEpIHtcclxuICAgICAgICAgICAgICBtZXNoUG9zaXRpb25zLnNldFhZWihcclxuICAgICAgICAgICAgICAgIGosXHJcbiAgICAgICAgICAgICAgICBweCArICgoaXggLSBweCkgLyBkeCkgKiBkZWx0YSAqIE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBweSArICgoaXkgLSBweSkgLyBkeSkgKiBkZWx0YSAqIE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBweiArICgoaXogLSBweikgLyBkeikgKiBkZWx0YSAqIE1hdGgucmFuZG9tKClcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHZlcnRpY2FsQ291bnQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodmVydGljYWxDb3VudCA9PT0gYWxsUG9pbnRDb3VudCkgdGhpcy5kaXIgPSAtMTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vICAg5ZCR5LiLXHJcbiAgICAgICAgICAgIGlmIChweSA+IDAuMSkge1xyXG4gICAgICAgICAgICAgIGxldCBpeSA9IGluaXRNZXNoUG9zaXRpb25zLmdldFkoaSk7XHJcbiAgICAgICAgICAgICAgbWVzaFBvc2l0aW9ucy5zZXRYWVooXHJcbiAgICAgICAgICAgICAgICBqLFxyXG4gICAgICAgICAgICAgICAgcHggKyAoMC41IC0gTWF0aC5yYW5kb20oKSkgKiBkZWx0YSxcclxuICAgICAgICAgICAgICAgIHB5ICsgKDAuMjUgLSBNYXRoLnJhbmRvbSgpKSAqIGRlbHRhLFxyXG4gICAgICAgICAgICAgICAgcHogKyAoMC41IC0gTWF0aC5yYW5kb20oKSkgKiBkZWx0YVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdmVydGljYWxDb3VudCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh2ZXJ0aWNhbENvdW50ID09PSBhbGxQb2ludENvdW50KSB0aGlzLmRpciA9IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1lc2hQb3NpdGlvbnMubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSk7XHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLl9yZW5kZXJBbmltYXRlKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+PC9zdHlsZT5cclxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAyYzgxZDk0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwMmM4MWQ5NFwiLFxuICBudWxsXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZGVmYXVsdE9uRXJyb3IoZXJyKSB7XG4gIHRocm93IG5ldyBFcnJvcihlcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUSFJFRSkge1xuXG4gIC8qKlxuICAgKiBAYXV0aG9yIG1yZG9vYiAvIGh0dHA6Ly9tcmRvb2IuY29tL1xuICAgKi9cblxuICBUSFJFRS5PQkpMb2FkZXIgPSBmdW5jdGlvbiAobWFuYWdlcikge1xuXG4gICAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlciAhPT0gdW5kZWZpbmVkID8gbWFuYWdlciA6IFRIUkVFLkRlZmF1bHRMb2FkaW5nTWFuYWdlcjtcblxuICAgIHRoaXMubWF0ZXJpYWxzID0gbnVsbDtcblxuICAgIHRoaXMucmVnZXhwID0ge1xuICAgICAgLy8gdiBmbG9hdCBmbG9hdCBmbG9hdFxuICAgICAgdmVydGV4X3BhdHRlcm46IC9edlxccysoW1xcZHxcXC58XFwrfFxcLXxlfEVdKylcXHMrKFtcXGR8XFwufFxcK3xcXC18ZXxFXSspXFxzKyhbXFxkfFxcLnxcXCt8XFwtfGV8RV0rKS8sXG4gICAgICAvLyB2biBmbG9hdCBmbG9hdCBmbG9hdFxuICAgICAgbm9ybWFsX3BhdHRlcm46IC9edm5cXHMrKFtcXGR8XFwufFxcK3xcXC18ZXxFXSspXFxzKyhbXFxkfFxcLnxcXCt8XFwtfGV8RV0rKVxccysoW1xcZHxcXC58XFwrfFxcLXxlfEVdKykvLFxuICAgICAgLy8gdnQgZmxvYXQgZmxvYXRcbiAgICAgIHV2X3BhdHRlcm46IC9ednRcXHMrKFtcXGR8XFwufFxcK3xcXC18ZXxFXSspXFxzKyhbXFxkfFxcLnxcXCt8XFwtfGV8RV0rKS8sXG4gICAgICAvLyBmIHZlcnRleCB2ZXJ0ZXggdmVydGV4XG4gICAgICBmYWNlX3ZlcnRleDogL15mXFxzKygtP1xcZCspXFxzKygtP1xcZCspXFxzKygtP1xcZCspKD86XFxzKygtP1xcZCspKT8vLFxuICAgICAgLy8gZiB2ZXJ0ZXgvdXYgdmVydGV4L3V2IHZlcnRleC91dlxuICAgICAgZmFjZV92ZXJ0ZXhfdXY6IC9eZlxccysoLT9cXGQrKVxcLygtP1xcZCspXFxzKygtP1xcZCspXFwvKC0/XFxkKylcXHMrKC0/XFxkKylcXC8oLT9cXGQrKSg/OlxccysoLT9cXGQrKVxcLygtP1xcZCspKT8vLFxuICAgICAgLy8gZiB2ZXJ0ZXgvdXYvbm9ybWFsIHZlcnRleC91di9ub3JtYWwgdmVydGV4L3V2L25vcm1hbFxuICAgICAgZmFjZV92ZXJ0ZXhfdXZfbm9ybWFsOiAvXmZcXHMrKC0/XFxkKylcXC8oLT9cXGQrKVxcLygtP1xcZCspXFxzKygtP1xcZCspXFwvKC0/XFxkKylcXC8oLT9cXGQrKVxccysoLT9cXGQrKVxcLygtP1xcZCspXFwvKC0/XFxkKykoPzpcXHMrKC0/XFxkKylcXC8oLT9cXGQrKVxcLygtP1xcZCspKT8vLFxuICAgICAgLy8gZiB2ZXJ0ZXgvL25vcm1hbCB2ZXJ0ZXgvL25vcm1hbCB2ZXJ0ZXgvL25vcm1hbFxuICAgICAgZmFjZV92ZXJ0ZXhfbm9ybWFsOiAvXmZcXHMrKC0/XFxkKylcXC9cXC8oLT9cXGQrKVxccysoLT9cXGQrKVxcL1xcLygtP1xcZCspXFxzKygtP1xcZCspXFwvXFwvKC0/XFxkKykoPzpcXHMrKC0/XFxkKylcXC9cXC8oLT9cXGQrKSk/LyxcbiAgICAgIC8vIG8gb2JqZWN0X25hbWUgfCBnIGdyb3VwX25hbWVcbiAgICAgIG9iamVjdF9wYXR0ZXJuOiAvXltvZ11cXHMqKC4rKT8vLFxuICAgICAgLy8gcyBib29sZWFuXG4gICAgICBzbW9vdGhpbmdfcGF0dGVybjogL15zXFxzKyhcXGQrfG9ufG9mZikvLFxuICAgICAgLy8gbXRsbGliIGZpbGVfcmVmZXJlbmNlXG4gICAgICBtYXRlcmlhbF9saWJyYXJ5X3BhdHRlcm46IC9ebXRsbGliIC8sXG4gICAgICAvLyB1c2VtdGwgbWF0ZXJpYWxfbmFtZVxuICAgICAgbWF0ZXJpYWxfdXNlX3BhdHRlcm46IC9edXNlbXRsIC9cbiAgICB9O1xuICB9O1xuXG4gIFRIUkVFLk9CSkxvYWRlci5wcm90b3R5cGUgPSB7XG5cbiAgICBjb25zdHJ1Y3RvcjogVEhSRUUuT0JKTG9hZGVyLFxuXG4gICAgbG9hZDogZnVuY3Rpb24gbG9hZCh1cmwsIG9uTG9hZCwgb25Qcm9ncmVzcywgb25FcnJvcikge1xuXG4gICAgICB2YXIgc2NvcGUgPSB0aGlzO1xuICAgICAgdGhpcy5vbkVycm9yID0gb25FcnJvciB8fCBkZWZhdWx0T25FcnJvcjtcblxuICAgICAgdmFyIGxvYWRlciA9IG5ldyBUSFJFRS5GaWxlTG9hZGVyKHNjb3BlLm1hbmFnZXIpO1xuICAgICAgbG9hZGVyLnNldFBhdGgodGhpcy5wYXRoKTtcbiAgICAgIGxvYWRlci5sb2FkKHVybCwgZnVuY3Rpb24gKHRleHQpIHtcblxuICAgICAgICBvbkxvYWQoc2NvcGUucGFyc2UodGV4dCkpO1xuICAgICAgfSwgb25Qcm9ncmVzcywgb25FcnJvcik7XG4gICAgfSxcblxuICAgIHNldFBhdGg6IGZ1bmN0aW9uIHNldFBhdGgodmFsdWUpIHtcblxuICAgICAgdGhpcy5wYXRoID0gdmFsdWU7XG4gICAgfSxcblxuICAgIHNldE1hdGVyaWFsczogZnVuY3Rpb24gc2V0TWF0ZXJpYWxzKG1hdGVyaWFscykge1xuXG4gICAgICB0aGlzLm1hdGVyaWFscyA9IG1hdGVyaWFscztcbiAgICB9LFxuXG4gICAgX2NyZWF0ZVBhcnNlclN0YXRlOiBmdW5jdGlvbiBfY3JlYXRlUGFyc2VyU3RhdGUoKSB7XG5cbiAgICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgICAgb2JqZWN0czogW10sXG4gICAgICAgIG9iamVjdDoge30sXG5cbiAgICAgICAgdmVydGljZXM6IFtdLFxuICAgICAgICBub3JtYWxzOiBbXSxcbiAgICAgICAgdXZzOiBbXSxcblxuICAgICAgICBtYXRlcmlhbExpYnJhcmllczogW10sXG5cbiAgICAgICAgc3RhcnRPYmplY3Q6IGZ1bmN0aW9uIHN0YXJ0T2JqZWN0KG5hbWUsIGZyb21EZWNsYXJhdGlvbikge1xuXG4gICAgICAgICAgLy8gSWYgdGhlIGN1cnJlbnQgb2JqZWN0IChpbml0aWFsIGZyb20gcmVzZXQpIGlzIG5vdCBmcm9tIGEgZy9vIGRlY2xhcmF0aW9uIGluIHRoZSBwYXJzZWRcbiAgICAgICAgICAvLyBmaWxlLiBXZSBuZWVkIHRvIHVzZSBpdCBmb3IgdGhlIGZpcnN0IHBhcnNlZCBnL28gdG8ga2VlcCB0aGluZ3MgaW4gc3luYy5cbiAgICAgICAgICBpZiAodGhpcy5vYmplY3QgJiYgdGhpcy5vYmplY3QuZnJvbURlY2xhcmF0aW9uID09PSBmYWxzZSkge1xuXG4gICAgICAgICAgICB0aGlzLm9iamVjdC5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0LmZyb21EZWNsYXJhdGlvbiA9IGZyb21EZWNsYXJhdGlvbiAhPT0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHByZXZpb3VzTWF0ZXJpYWwgPSB0aGlzLm9iamVjdCAmJiB0eXBlb2YgdGhpcy5vYmplY3QuY3VycmVudE1hdGVyaWFsID09PSAnZnVuY3Rpb24nID8gdGhpcy5vYmplY3QuY3VycmVudE1hdGVyaWFsKCkgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgICBpZiAodGhpcy5vYmplY3QgJiYgdHlwZW9mIHRoaXMub2JqZWN0Ll9maW5hbGl6ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXG4gICAgICAgICAgICB0aGlzLm9iamVjdC5fZmluYWxpemUodHJ1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5vYmplY3QgPSB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lIHx8ICcnLFxuICAgICAgICAgICAgZnJvbURlY2xhcmF0aW9uOiBmcm9tRGVjbGFyYXRpb24gIT09IGZhbHNlLFxuXG4gICAgICAgICAgICBnZW9tZXRyeToge1xuICAgICAgICAgICAgICB2ZXJ0aWNlczogW10sXG4gICAgICAgICAgICAgIG5vcm1hbHM6IFtdLFxuICAgICAgICAgICAgICB1dnM6IFtdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWF0ZXJpYWxzOiBbXSxcbiAgICAgICAgICAgIHNtb290aDogdHJ1ZSxcblxuICAgICAgICAgICAgc3RhcnRNYXRlcmlhbDogZnVuY3Rpb24gc3RhcnRNYXRlcmlhbChuYW1lLCBsaWJyYXJpZXMpIHtcblxuICAgICAgICAgICAgICB2YXIgcHJldmlvdXMgPSB0aGlzLl9maW5hbGl6ZShmYWxzZSk7XG5cbiAgICAgICAgICAgICAgLy8gTmV3IHVzZW10bCBkZWNsYXJhdGlvbiBvdmVyd3JpdGVzIGFuIGluaGVyaXRlZCBtYXRlcmlhbCwgZXhjZXB0IGlmIGZhY2VzIHdlcmUgZGVjbGFyZWRcbiAgICAgICAgICAgICAgLy8gYWZ0ZXIgdGhlIG1hdGVyaWFsLCB0aGVuIGl0IG11c3QgYmUgcHJlc2VydmVkIGZvciBwcm9wZXIgTXVsdGlNYXRlcmlhbCBjb250aW51YXRpb24uXG4gICAgICAgICAgICAgIGlmIChwcmV2aW91cyAmJiAocHJldmlvdXMuaW5oZXJpdGVkIHx8IHByZXZpb3VzLmdyb3VwQ291bnQgPD0gMCkpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMubWF0ZXJpYWxzLnNwbGljZShwcmV2aW91cy5pbmRleCwgMSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB2YXIgbWF0ZXJpYWwgPSB7XG4gICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMubWF0ZXJpYWxzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8ICcnLFxuICAgICAgICAgICAgICAgIG10bGxpYjogQXJyYXkuaXNBcnJheShsaWJyYXJpZXMpICYmIGxpYnJhcmllcy5sZW5ndGggPiAwID8gbGlicmFyaWVzW2xpYnJhcmllcy5sZW5ndGggLSAxXSA6ICcnLFxuICAgICAgICAgICAgICAgIHNtb290aDogcHJldmlvdXMgIT09IHVuZGVmaW5lZCA/IHByZXZpb3VzLnNtb290aCA6IHRoaXMuc21vb3RoLFxuICAgICAgICAgICAgICAgIGdyb3VwU3RhcnQ6IHByZXZpb3VzICE9PSB1bmRlZmluZWQgPyBwcmV2aW91cy5ncm91cEVuZCA6IDAsXG4gICAgICAgICAgICAgICAgZ3JvdXBFbmQ6IC0xLFxuICAgICAgICAgICAgICAgIGdyb3VwQ291bnQ6IC0xLFxuICAgICAgICAgICAgICAgIGluaGVyaXRlZDogZmFsc2UsXG5cbiAgICAgICAgICAgICAgICBjbG9uZTogZnVuY3Rpb24gY2xvbmUoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBjbG9uZWQgPSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiB0eXBlb2YgaW5kZXggPT09ICdudW1iZXInID8gaW5kZXggOiB0aGlzLmluZGV4LFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIG10bGxpYjogdGhpcy5tdGxsaWIsXG4gICAgICAgICAgICAgICAgICAgIHNtb290aDogdGhpcy5zbW9vdGgsXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwU3RhcnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwRW5kOiAtMSxcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBDb3VudDogLTEsXG4gICAgICAgICAgICAgICAgICAgIGluaGVyaXRlZDogZmFsc2VcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICBjbG9uZWQuY2xvbmUgPSB0aGlzLmNsb25lLmJpbmQoY2xvbmVkKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBjbG9uZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHRoaXMubWF0ZXJpYWxzLnB1c2gobWF0ZXJpYWwpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBtYXRlcmlhbDtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGN1cnJlbnRNYXRlcmlhbDogZnVuY3Rpb24gY3VycmVudE1hdGVyaWFsKCkge1xuXG4gICAgICAgICAgICAgIGlmICh0aGlzLm1hdGVyaWFscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWF0ZXJpYWxzW3RoaXMubWF0ZXJpYWxzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIF9maW5hbGl6ZTogZnVuY3Rpb24gX2ZpbmFsaXplKGVuZCkge1xuXG4gICAgICAgICAgICAgIHZhciBsYXN0TXVsdGlNYXRlcmlhbCA9IHRoaXMuY3VycmVudE1hdGVyaWFsKCk7XG4gICAgICAgICAgICAgIGlmIChsYXN0TXVsdGlNYXRlcmlhbCAmJiBsYXN0TXVsdGlNYXRlcmlhbC5ncm91cEVuZCA9PT0gLTEpIHtcblxuICAgICAgICAgICAgICAgIGxhc3RNdWx0aU1hdGVyaWFsLmdyb3VwRW5kID0gdGhpcy5nZW9tZXRyeS52ZXJ0aWNlcy5sZW5ndGggLyAzO1xuICAgICAgICAgICAgICAgIGxhc3RNdWx0aU1hdGVyaWFsLmdyb3VwQ291bnQgPSBsYXN0TXVsdGlNYXRlcmlhbC5ncm91cEVuZCAtIGxhc3RNdWx0aU1hdGVyaWFsLmdyb3VwU3RhcnQ7XG4gICAgICAgICAgICAgICAgbGFzdE11bHRpTWF0ZXJpYWwuaW5oZXJpdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyBJZ25vcmUgb2JqZWN0cyB0YWlsIG1hdGVyaWFscyBpZiBubyBmYWNlIGRlY2xhcmF0aW9ucyBmb2xsb3dlZCB0aGVtIGJlZm9yZSBhIG5ldyBvL2cgc3RhcnRlZC5cbiAgICAgICAgICAgICAgaWYgKGVuZCAmJiB0aGlzLm1hdGVyaWFscy5sZW5ndGggPiAxKSB7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBtaSA9IHRoaXMubWF0ZXJpYWxzLmxlbmd0aCAtIDE7IG1pID49IDA7IG1pLS0pIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hdGVyaWFsc1ttaV0uZ3JvdXBDb3VudCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF0ZXJpYWxzLnNwbGljZShtaSwgMSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gR3VhcmFudGVlIGF0IGxlYXN0IG9uZSBlbXB0eSBtYXRlcmlhbCwgdGhpcyBtYWtlcyB0aGUgY3JlYXRpb24gbGF0ZXIgbW9yZSBzdHJhaWdodCBmb3J3YXJkLlxuICAgICAgICAgICAgICBpZiAoZW5kICYmIHRoaXMubWF0ZXJpYWxzLmxlbmd0aCA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5tYXRlcmlhbHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgIHNtb290aDogdGhpcy5zbW9vdGhcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBsYXN0TXVsdGlNYXRlcmlhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gSW5oZXJpdCBwcmV2aW91cyBvYmplY3RzIG1hdGVyaWFsLlxuICAgICAgICAgIC8vIFNwZWMgdGVsbHMgdXMgdGhhdCBhIGRlY2xhcmVkIG1hdGVyaWFsIG11c3QgYmUgc2V0IHRvIGFsbCBvYmplY3RzIHVudGlsIGEgbmV3IG1hdGVyaWFsIGlzIGRlY2xhcmVkLlxuICAgICAgICAgIC8vIElmIGEgdXNlbXRsIGRlY2xhcmF0aW9uIGlzIGVuY291bnRlcmVkIHdoaWxlIHRoaXMgbmV3IG9iamVjdCBpcyBiZWluZyBwYXJzZWQsIGl0IHdpbGxcbiAgICAgICAgICAvLyBvdmVyd3JpdGUgdGhlIGluaGVyaXRlZCBtYXRlcmlhbC4gRXhjZXB0aW9uIGJlaW5nIHRoYXQgdGhlcmUgd2FzIGFscmVhZHkgZmFjZSBkZWNsYXJhdGlvbnNcbiAgICAgICAgICAvLyB0byB0aGUgaW5oZXJpdGVkIG1hdGVyaWFsLCB0aGVuIGl0IHdpbGwgYmUgcHJlc2VydmVkIGZvciBwcm9wZXIgTXVsdGlNYXRlcmlhbCBjb250aW51YXRpb24uXG5cbiAgICAgICAgICBpZiAocHJldmlvdXNNYXRlcmlhbCAmJiBwcmV2aW91c01hdGVyaWFsLm5hbWUgJiYgdHlwZW9mIHByZXZpb3VzTWF0ZXJpYWwuY2xvbmUgPT09IFwiZnVuY3Rpb25cIikge1xuXG4gICAgICAgICAgICB2YXIgZGVjbGFyZWQgPSBwcmV2aW91c01hdGVyaWFsLmNsb25lKDApO1xuICAgICAgICAgICAgZGVjbGFyZWQuaW5oZXJpdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0Lm1hdGVyaWFscy5wdXNoKGRlY2xhcmVkKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLm9iamVjdHMucHVzaCh0aGlzLm9iamVjdCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZmluYWxpemU6IGZ1bmN0aW9uIGZpbmFsaXplKCkge1xuXG4gICAgICAgICAgaWYgKHRoaXMub2JqZWN0ICYmIHR5cGVvZiB0aGlzLm9iamVjdC5fZmluYWxpemUgPT09ICdmdW5jdGlvbicpIHtcblxuICAgICAgICAgICAgdGhpcy5vYmplY3QuX2ZpbmFsaXplKHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBwYXJzZVZlcnRleEluZGV4OiBmdW5jdGlvbiBwYXJzZVZlcnRleEluZGV4KHZhbHVlLCBsZW4pIHtcblxuICAgICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgICAgICAgcmV0dXJuIChpbmRleCA+PSAwID8gaW5kZXggLSAxIDogaW5kZXggKyBsZW4gLyAzKSAqIDM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGFyc2VOb3JtYWxJbmRleDogZnVuY3Rpb24gcGFyc2VOb3JtYWxJbmRleCh2YWx1ZSwgbGVuKSB7XG5cbiAgICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgICAgICAgIHJldHVybiAoaW5kZXggPj0gMCA/IGluZGV4IC0gMSA6IGluZGV4ICsgbGVuIC8gMykgKiAzO1xuICAgICAgICB9LFxuXG4gICAgICAgIHBhcnNlVVZJbmRleDogZnVuY3Rpb24gcGFyc2VVVkluZGV4KHZhbHVlLCBsZW4pIHtcblxuICAgICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgICAgICAgcmV0dXJuIChpbmRleCA+PSAwID8gaW5kZXggLSAxIDogaW5kZXggKyBsZW4gLyAyKSAqIDI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkVmVydGV4OiBmdW5jdGlvbiBhZGRWZXJ0ZXgoYSwgYiwgYykge1xuXG4gICAgICAgICAgdmFyIHNyYyA9IHRoaXMudmVydGljZXM7XG4gICAgICAgICAgdmFyIGRzdCA9IHRoaXMub2JqZWN0Lmdlb21ldHJ5LnZlcnRpY2VzO1xuXG4gICAgICAgICAgZHN0LnB1c2goc3JjW2EgKyAwXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2EgKyAxXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2EgKyAyXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2IgKyAwXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2IgKyAxXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2IgKyAyXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2MgKyAwXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2MgKyAxXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2MgKyAyXSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkVmVydGV4TGluZTogZnVuY3Rpb24gYWRkVmVydGV4TGluZShhKSB7XG5cbiAgICAgICAgICB2YXIgc3JjID0gdGhpcy52ZXJ0aWNlcztcbiAgICAgICAgICB2YXIgZHN0ID0gdGhpcy5vYmplY3QuZ2VvbWV0cnkudmVydGljZXM7XG5cbiAgICAgICAgICBkc3QucHVzaChzcmNbYSArIDBdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYSArIDFdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYSArIDJdKTtcbiAgICAgICAgfSxcblxuICAgICAgICBhZGROb3JtYWw6IGZ1bmN0aW9uIGFkZE5vcm1hbChhLCBiLCBjKSB7XG5cbiAgICAgICAgICB2YXIgc3JjID0gdGhpcy5ub3JtYWxzO1xuICAgICAgICAgIHZhciBkc3QgPSB0aGlzLm9iamVjdC5nZW9tZXRyeS5ub3JtYWxzO1xuXG4gICAgICAgICAgZHN0LnB1c2goc3JjW2EgKyAwXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2EgKyAxXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2EgKyAyXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2IgKyAwXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2IgKyAxXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2IgKyAyXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2MgKyAwXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2MgKyAxXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2MgKyAyXSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkVVY6IGZ1bmN0aW9uIGFkZFVWKGEsIGIsIGMpIHtcblxuICAgICAgICAgIHZhciBzcmMgPSB0aGlzLnV2cztcbiAgICAgICAgICB2YXIgZHN0ID0gdGhpcy5vYmplY3QuZ2VvbWV0cnkudXZzO1xuXG4gICAgICAgICAgZHN0LnB1c2goc3JjW2EgKyAwXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2EgKyAxXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2IgKyAwXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2IgKyAxXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2MgKyAwXSk7XG4gICAgICAgICAgZHN0LnB1c2goc3JjW2MgKyAxXSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkVVZMaW5lOiBmdW5jdGlvbiBhZGRVVkxpbmUoYSkge1xuXG4gICAgICAgICAgdmFyIHNyYyA9IHRoaXMudXZzO1xuICAgICAgICAgIHZhciBkc3QgPSB0aGlzLm9iamVjdC5nZW9tZXRyeS51dnM7XG5cbiAgICAgICAgICBkc3QucHVzaChzcmNbYSArIDBdKTtcbiAgICAgICAgICBkc3QucHVzaChzcmNbYSArIDFdKTtcbiAgICAgICAgfSxcblxuICAgICAgICBhZGRGYWNlOiBmdW5jdGlvbiBhZGRGYWNlKGEsIGIsIGMsIGQsIHVhLCB1YiwgdWMsIHVkLCBuYSwgbmIsIG5jLCBuZCkge1xuXG4gICAgICAgICAgdmFyIHZMZW4gPSB0aGlzLnZlcnRpY2VzLmxlbmd0aDtcblxuICAgICAgICAgIHZhciBpYSA9IHRoaXMucGFyc2VWZXJ0ZXhJbmRleChhLCB2TGVuKTtcbiAgICAgICAgICB2YXIgaWIgPSB0aGlzLnBhcnNlVmVydGV4SW5kZXgoYiwgdkxlbik7XG4gICAgICAgICAgdmFyIGljID0gdGhpcy5wYXJzZVZlcnRleEluZGV4KGMsIHZMZW4pO1xuICAgICAgICAgIHZhciBpZDtcblxuICAgICAgICAgIGlmIChkID09PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgdGhpcy5hZGRWZXJ0ZXgoaWEsIGliLCBpYyk7XG4gICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWQgPSB0aGlzLnBhcnNlVmVydGV4SW5kZXgoZCwgdkxlbik7XG5cbiAgICAgICAgICAgIHRoaXMuYWRkVmVydGV4KGlhLCBpYiwgaWQpO1xuICAgICAgICAgICAgdGhpcy5hZGRWZXJ0ZXgoaWIsIGljLCBpZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHVhICE9PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgdmFyIHV2TGVuID0gdGhpcy51dnMubGVuZ3RoO1xuXG4gICAgICAgICAgICBpYSA9IHRoaXMucGFyc2VVVkluZGV4KHVhLCB1dkxlbik7XG4gICAgICAgICAgICBpYiA9IHRoaXMucGFyc2VVVkluZGV4KHViLCB1dkxlbik7XG4gICAgICAgICAgICBpYyA9IHRoaXMucGFyc2VVVkluZGV4KHVjLCB1dkxlbik7XG5cbiAgICAgICAgICAgIGlmIChkID09PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICB0aGlzLmFkZFVWKGlhLCBpYiwgaWMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICBpZCA9IHRoaXMucGFyc2VVVkluZGV4KHVkLCB1dkxlbik7XG5cbiAgICAgICAgICAgICAgdGhpcy5hZGRVVihpYSwgaWIsIGlkKTtcbiAgICAgICAgICAgICAgdGhpcy5hZGRVVihpYiwgaWMsIGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobmEgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAvLyBOb3JtYWxzIGFyZSBtYW55IHRpbWVzIHRoZSBzYW1lLiBJZiBzbywgc2tpcCBmdW5jdGlvbiBjYWxsIGFuZCBwYXJzZUludC5cbiAgICAgICAgICAgIHZhciBuTGVuID0gdGhpcy5ub3JtYWxzLmxlbmd0aDtcbiAgICAgICAgICAgIGlhID0gdGhpcy5wYXJzZU5vcm1hbEluZGV4KG5hLCBuTGVuKTtcblxuICAgICAgICAgICAgaWIgPSBuYSA9PT0gbmIgPyBpYSA6IHRoaXMucGFyc2VOb3JtYWxJbmRleChuYiwgbkxlbik7XG4gICAgICAgICAgICBpYyA9IG5hID09PSBuYyA/IGlhIDogdGhpcy5wYXJzZU5vcm1hbEluZGV4KG5jLCBuTGVuKTtcblxuICAgICAgICAgICAgaWYgKGQgPT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgIHRoaXMuYWRkTm9ybWFsKGlhLCBpYiwgaWMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICBpZCA9IHRoaXMucGFyc2VOb3JtYWxJbmRleChuZCwgbkxlbik7XG5cbiAgICAgICAgICAgICAgdGhpcy5hZGROb3JtYWwoaWEsIGliLCBpZCk7XG4gICAgICAgICAgICAgIHRoaXMuYWRkTm9ybWFsKGliLCBpYywgaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBhZGRMaW5lR2VvbWV0cnk6IGZ1bmN0aW9uIGFkZExpbmVHZW9tZXRyeSh2ZXJ0aWNlcywgdXZzKSB7XG5cbiAgICAgICAgICB0aGlzLm9iamVjdC5nZW9tZXRyeS50eXBlID0gJ0xpbmUnO1xuXG4gICAgICAgICAgdmFyIHZMZW4gPSB0aGlzLnZlcnRpY2VzLmxlbmd0aDtcbiAgICAgICAgICB2YXIgdXZMZW4gPSB0aGlzLnV2cy5sZW5ndGg7XG5cbiAgICAgICAgICBmb3IgKHZhciB2aSA9IDAsIGwgPSB2ZXJ0aWNlcy5sZW5ndGg7IHZpIDwgbDsgdmkrKykge1xuXG4gICAgICAgICAgICB0aGlzLmFkZFZlcnRleExpbmUodGhpcy5wYXJzZVZlcnRleEluZGV4KHZlcnRpY2VzW3ZpXSwgdkxlbikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvciAodmFyIHV2aSA9IDAsIGwgPSB1dnMubGVuZ3RoOyB1dmkgPCBsOyB1dmkrKykge1xuXG4gICAgICAgICAgICB0aGlzLmFkZFVWTGluZSh0aGlzLnBhcnNlVVZJbmRleCh1dnNbdXZpXSwgdXZMZW4pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgfTtcblxuICAgICAgc3RhdGUuc3RhcnRPYmplY3QoJycsIGZhbHNlKTtcblxuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH0sXG5cbiAgICBwYXJzZTogZnVuY3Rpb24gcGFyc2UodGV4dCwgZGVidWcpIHtcbiAgICAgIGlmICh0eXBlb2YgZGVidWcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGRlYnVnID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgIGNvbnNvbGUudGltZSgnT0JKTG9hZGVyJyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdGF0ZSA9IHRoaXMuX2NyZWF0ZVBhcnNlclN0YXRlKCk7XG5cbiAgICAgIGlmICh0ZXh0LmluZGV4T2YoJ1xcclxcbicpICE9PSAtMSkge1xuXG4gICAgICAgIC8vIFRoaXMgaXMgZmFzdGVyIHRoYW4gU3RyaW5nLnNwbGl0IHdpdGggcmVnZXggdGhhdCBzcGxpdHMgb24gYm90aFxuICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXHJcXG4vZywgJ1xcbicpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGV4dC5pbmRleE9mKCdcXFxcXFxuJykgIT09IC0xKSB7XG5cbiAgICAgICAgLy8gam9pbiBsaW5lcyBzZXBhcmF0ZWQgYnkgYSBsaW5lIGNvbnRpbnVhdGlvbiBjaGFyYWN0ZXIgKFxcKVxuICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXFxcXFxuL2csICcnKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGxpbmVzID0gdGV4dC5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgbGluZSA9ICcnLFxuICAgICAgICAgIGxpbmVGaXJzdENoYXIgPSAnJyxcbiAgICAgICAgICBsaW5lU2Vjb25kQ2hhciA9ICcnO1xuICAgICAgdmFyIGxpbmVMZW5ndGggPSAwO1xuICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgICAvLyBGYXN0ZXIgdG8ganVzdCB0cmltIGxlZnQgc2lkZSBvZiB0aGUgbGluZS4gVXNlIGlmIGF2YWlsYWJsZS5cbiAgICAgIHZhciB0cmltTGVmdCA9IHR5cGVvZiAnJy50cmltTGVmdCA9PT0gJ2Z1bmN0aW9uJztcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBsaW5lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblxuICAgICAgICBsaW5lID0gbGluZXNbaV07XG5cbiAgICAgICAgbGluZSA9IHRyaW1MZWZ0ID8gbGluZS50cmltTGVmdCgpIDogbGluZS50cmltKCk7XG5cbiAgICAgICAgbGluZUxlbmd0aCA9IGxpbmUubGVuZ3RoO1xuXG4gICAgICAgIGlmIChsaW5lTGVuZ3RoID09PSAwKSBjb250aW51ZTtcblxuICAgICAgICBsaW5lRmlyc3RDaGFyID0gbGluZS5jaGFyQXQoMCk7XG5cbiAgICAgICAgLy8gQHRvZG8gaW52b2tlIHBhc3NlZCBpbiBoYW5kbGVyIGlmIGFueVxuICAgICAgICBpZiAobGluZUZpcnN0Q2hhciA9PT0gJyMnKSBjb250aW51ZTtcblxuICAgICAgICBpZiAobGluZUZpcnN0Q2hhciA9PT0gJ3YnKSB7XG5cbiAgICAgICAgICBsaW5lU2Vjb25kQ2hhciA9IGxpbmUuY2hhckF0KDEpO1xuXG4gICAgICAgICAgaWYgKGxpbmVTZWNvbmRDaGFyID09PSAnICcgJiYgKHJlc3VsdCA9IHRoaXMucmVnZXhwLnZlcnRleF9wYXR0ZXJuLmV4ZWMobGluZSkpICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIC8vIDAgICAgICAgICAgICAgICAgICAxICAgICAgMiAgICAgIDNcbiAgICAgICAgICAgIC8vIFtcInYgMS4wIDIuMCAzLjBcIiwgXCIxLjBcIiwgXCIyLjBcIiwgXCIzLjBcIl1cblxuICAgICAgICAgICAgc3RhdGUudmVydGljZXMucHVzaChwYXJzZUZsb2F0KHJlc3VsdFsxXSksIHBhcnNlRmxvYXQocmVzdWx0WzJdKSwgcGFyc2VGbG9hdChyZXN1bHRbM10pKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGxpbmVTZWNvbmRDaGFyID09PSAnbicgJiYgKHJlc3VsdCA9IHRoaXMucmVnZXhwLm5vcm1hbF9wYXR0ZXJuLmV4ZWMobGluZSkpICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIC8vIDAgICAgICAgICAgICAgICAgICAgMSAgICAgIDIgICAgICAzXG4gICAgICAgICAgICAvLyBbXCJ2biAxLjAgMi4wIDMuMFwiLCBcIjEuMFwiLCBcIjIuMFwiLCBcIjMuMFwiXVxuXG4gICAgICAgICAgICBzdGF0ZS5ub3JtYWxzLnB1c2gocGFyc2VGbG9hdChyZXN1bHRbMV0pLCBwYXJzZUZsb2F0KHJlc3VsdFsyXSksIHBhcnNlRmxvYXQocmVzdWx0WzNdKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChsaW5lU2Vjb25kQ2hhciA9PT0gJ3QnICYmIChyZXN1bHQgPSB0aGlzLnJlZ2V4cC51dl9wYXR0ZXJuLmV4ZWMobGluZSkpICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIC8vIDAgICAgICAgICAgICAgICAxICAgICAgMlxuICAgICAgICAgICAgLy8gW1widnQgMC4xIDAuMlwiLCBcIjAuMVwiLCBcIjAuMlwiXVxuXG4gICAgICAgICAgICBzdGF0ZS51dnMucHVzaChwYXJzZUZsb2F0KHJlc3VsdFsxXSksIHBhcnNlRmxvYXQocmVzdWx0WzJdKSk7XG4gICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdGhpcy5vbkVycm9yKFwiVW5leHBlY3RlZCB2ZXJ0ZXgvbm9ybWFsL3V2IGxpbmU6ICdcIiArIGxpbmUgKyBcIidcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGxpbmVGaXJzdENoYXIgPT09IFwiZlwiKSB7XG5cbiAgICAgICAgICBpZiAoKHJlc3VsdCA9IHRoaXMucmVnZXhwLmZhY2VfdmVydGV4X3V2X25vcm1hbC5leGVjKGxpbmUpKSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAvLyBmIHZlcnRleC91di9ub3JtYWwgdmVydGV4L3V2L25vcm1hbCB2ZXJ0ZXgvdXYvbm9ybWFsXG4gICAgICAgICAgICAvLyAwICAgICAgICAgICAgICAgICAgICAgICAgMSAgICAyICAgIDMgICAgNCAgICA1ICAgIDYgICAgNyAgICA4ICAgIDkgICAxMCAgICAgICAgIDExICAgICAgICAgMTJcbiAgICAgICAgICAgIC8vIFtcImYgMS8xLzEgMi8yLzIgMy8zLzNcIiwgXCIxXCIsIFwiMVwiLCBcIjFcIiwgXCIyXCIsIFwiMlwiLCBcIjJcIiwgXCIzXCIsIFwiM1wiLCBcIjNcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZF1cblxuICAgICAgICAgICAgc3RhdGUuYWRkRmFjZShyZXN1bHRbMV0sIHJlc3VsdFs0XSwgcmVzdWx0WzddLCByZXN1bHRbMTBdLCByZXN1bHRbMl0sIHJlc3VsdFs1XSwgcmVzdWx0WzhdLCByZXN1bHRbMTFdLCByZXN1bHRbM10sIHJlc3VsdFs2XSwgcmVzdWx0WzldLCByZXN1bHRbMTJdKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKChyZXN1bHQgPSB0aGlzLnJlZ2V4cC5mYWNlX3ZlcnRleF91di5leGVjKGxpbmUpKSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAvLyBmIHZlcnRleC91diB2ZXJ0ZXgvdXYgdmVydGV4L3V2XG4gICAgICAgICAgICAvLyAwICAgICAgICAgICAgICAgICAgMSAgICAyICAgIDMgICAgNCAgICA1ICAgIDYgICA3ICAgICAgICAgIDhcbiAgICAgICAgICAgIC8vIFtcImYgMS8xIDIvMiAzLzNcIiwgXCIxXCIsIFwiMVwiLCBcIjJcIiwgXCIyXCIsIFwiM1wiLCBcIjNcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWRdXG5cbiAgICAgICAgICAgIHN0YXRlLmFkZEZhY2UocmVzdWx0WzFdLCByZXN1bHRbM10sIHJlc3VsdFs1XSwgcmVzdWx0WzddLCByZXN1bHRbMl0sIHJlc3VsdFs0XSwgcmVzdWx0WzZdLCByZXN1bHRbOF0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoKHJlc3VsdCA9IHRoaXMucmVnZXhwLmZhY2VfdmVydGV4X25vcm1hbC5leGVjKGxpbmUpKSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAvLyBmIHZlcnRleC8vbm9ybWFsIHZlcnRleC8vbm9ybWFsIHZlcnRleC8vbm9ybWFsXG4gICAgICAgICAgICAvLyAwICAgICAgICAgICAgICAgICAgICAgMSAgICAyICAgIDMgICAgNCAgICA1ICAgIDYgICA3ICAgICAgICAgIDhcbiAgICAgICAgICAgIC8vIFtcImYgMS8vMSAyLy8yIDMvLzNcIiwgXCIxXCIsIFwiMVwiLCBcIjJcIiwgXCIyXCIsIFwiM1wiLCBcIjNcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWRdXG5cbiAgICAgICAgICAgIHN0YXRlLmFkZEZhY2UocmVzdWx0WzFdLCByZXN1bHRbM10sIHJlc3VsdFs1XSwgcmVzdWx0WzddLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHJlc3VsdFsyXSwgcmVzdWx0WzRdLCByZXN1bHRbNl0sIHJlc3VsdFs4XSk7XG4gICAgICAgICAgfSBlbHNlIGlmICgocmVzdWx0ID0gdGhpcy5yZWdleHAuZmFjZV92ZXJ0ZXguZXhlYyhsaW5lKSkgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgLy8gZiB2ZXJ0ZXggdmVydGV4IHZlcnRleFxuICAgICAgICAgICAgLy8gMCAgICAgICAgICAgIDEgICAgMiAgICAzICAgNFxuICAgICAgICAgICAgLy8gW1wiZiAxIDIgM1wiLCBcIjFcIiwgXCIyXCIsIFwiM1wiLCB1bmRlZmluZWRdXG5cbiAgICAgICAgICAgIHN0YXRlLmFkZEZhY2UocmVzdWx0WzFdLCByZXN1bHRbMl0sIHJlc3VsdFszXSwgcmVzdWx0WzRdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLm9uRXJyb3IoXCJVbmV4cGVjdGVkIGZhY2UgbGluZTogJ1wiICsgbGluZSArIFwiJ1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobGluZUZpcnN0Q2hhciA9PT0gXCJsXCIpIHtcblxuICAgICAgICAgIHZhciBsaW5lUGFydHMgPSBsaW5lLnN1YnN0cmluZygxKS50cmltKCkuc3BsaXQoXCIgXCIpO1xuICAgICAgICAgIHZhciBsaW5lVmVydGljZXMgPSBbXSxcbiAgICAgICAgICAgICAgbGluZVVWcyA9IFtdO1xuXG4gICAgICAgICAgaWYgKGxpbmUuaW5kZXhPZihcIi9cIikgPT09IC0xKSB7XG5cbiAgICAgICAgICAgIGxpbmVWZXJ0aWNlcyA9IGxpbmVQYXJ0cztcbiAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBmb3IgKHZhciBsaSA9IDAsIGxsZW4gPSBsaW5lUGFydHMubGVuZ3RoOyBsaSA8IGxsZW47IGxpKyspIHtcblxuICAgICAgICAgICAgICB2YXIgcGFydHMgPSBsaW5lUGFydHNbbGldLnNwbGl0KFwiL1wiKTtcblxuICAgICAgICAgICAgICBpZiAocGFydHNbMF0gIT09IFwiXCIpIGxpbmVWZXJ0aWNlcy5wdXNoKHBhcnRzWzBdKTtcbiAgICAgICAgICAgICAgaWYgKHBhcnRzWzFdICE9PSBcIlwiKSBsaW5lVVZzLnB1c2gocGFydHNbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzdGF0ZS5hZGRMaW5lR2VvbWV0cnkobGluZVZlcnRpY2VzLCBsaW5lVVZzKTtcbiAgICAgICAgfSBlbHNlIGlmICgocmVzdWx0ID0gdGhpcy5yZWdleHAub2JqZWN0X3BhdHRlcm4uZXhlYyhsaW5lKSkgIT09IG51bGwpIHtcblxuICAgICAgICAgIC8vIG8gb2JqZWN0X25hbWVcbiAgICAgICAgICAvLyBvclxuICAgICAgICAgIC8vIGcgZ3JvdXBfbmFtZVxuXG4gICAgICAgICAgLy8gV09SS0FST1VORDogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Mjg2OVxuICAgICAgICAgIC8vIHZhciBuYW1lID0gcmVzdWx0WyAwIF0uc3Vic3RyKCAxICkudHJpbSgpO1xuICAgICAgICAgIHZhciBuYW1lID0gKFwiIFwiICsgcmVzdWx0WzBdLnN1YnN0cigxKS50cmltKCkpLnN1YnN0cigxKTtcblxuICAgICAgICAgIHN0YXRlLnN0YXJ0T2JqZWN0KG5hbWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVnZXhwLm1hdGVyaWFsX3VzZV9wYXR0ZXJuLnRlc3QobGluZSkpIHtcblxuICAgICAgICAgIC8vIG1hdGVyaWFsXG5cbiAgICAgICAgICBzdGF0ZS5vYmplY3Quc3RhcnRNYXRlcmlhbChsaW5lLnN1YnN0cmluZyg3KS50cmltKCksIHN0YXRlLm1hdGVyaWFsTGlicmFyaWVzKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlZ2V4cC5tYXRlcmlhbF9saWJyYXJ5X3BhdHRlcm4udGVzdChsaW5lKSkge1xuXG4gICAgICAgICAgLy8gbXRsIGZpbGVcblxuICAgICAgICAgIHN0YXRlLm1hdGVyaWFsTGlicmFyaWVzLnB1c2gobGluZS5zdWJzdHJpbmcoNykudHJpbSgpKTtcbiAgICAgICAgfSBlbHNlIGlmICgocmVzdWx0ID0gdGhpcy5yZWdleHAuc21vb3RoaW5nX3BhdHRlcm4uZXhlYyhsaW5lKSkgIT09IG51bGwpIHtcblxuICAgICAgICAgIC8vIHNtb290aCBzaGFkaW5nXG5cbiAgICAgICAgICAvLyBAdG9kbyBIYW5kbGUgZmlsZXMgdGhhdCBoYXZlIHZhcnlpbmcgc21vb3RoIHZhbHVlcyBmb3IgYSBzZXQgb2YgZmFjZXMgaW5zaWRlIG9uZSBnZW9tZXRyeSxcbiAgICAgICAgICAvLyBidXQgZG9lcyBub3QgZGVmaW5lIGEgdXNlbXRsIGZvciBlYWNoIGZhY2Ugc2V0LlxuICAgICAgICAgIC8vIFRoaXMgc2hvdWxkIGJlIGRldGVjdGVkIGFuZCBhIGR1bW15IG1hdGVyaWFsIGNyZWF0ZWQgKGxhdGVyIE11bHRpTWF0ZXJpYWwgYW5kIGdlb21ldHJ5IGdyb3VwcykuXG4gICAgICAgICAgLy8gVGhpcyByZXF1aXJlcyBzb21lIGNhcmUgdG8gbm90IGNyZWF0ZSBleHRyYSBtYXRlcmlhbCBvbiBlYWNoIHNtb290aCB2YWx1ZSBmb3IgXCJub3JtYWxcIiBvYmogZmlsZXMuXG4gICAgICAgICAgLy8gd2hlcmUgZXhwbGljaXQgdXNlbXRsIGRlZmluZXMgZ2VvbWV0cnkgZ3JvdXBzLlxuICAgICAgICAgIC8vIEV4YW1wbGUgYXNzZXQ6IGV4YW1wbGVzL21vZGVscy9vYmovY2VyYmVydXMvQ2VyYmVydXMub2JqXG5cbiAgICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHRbMV0udHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgc3RhdGUub2JqZWN0LnNtb290aCA9IHZhbHVlID09PSAnMScgfHwgdmFsdWUgPT09ICdvbic7XG5cbiAgICAgICAgICB2YXIgbWF0ZXJpYWwgPSBzdGF0ZS5vYmplY3QuY3VycmVudE1hdGVyaWFsKCk7XG4gICAgICAgICAgaWYgKG1hdGVyaWFsKSB7XG5cbiAgICAgICAgICAgIG1hdGVyaWFsLnNtb290aCA9IHN0YXRlLm9iamVjdC5zbW9vdGg7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgLy8gSGFuZGxlIG51bGwgdGVybWluYXRlZCBmaWxlcyB3aXRob3V0IGV4Y2VwdGlvblxuICAgICAgICAgIGlmIChsaW5lID09PSAnXFwwJykgY29udGludWU7XG5cbiAgICAgICAgICB0aGlzLm9uRXJyb3IoXCJVbmV4cGVjdGVkIGxpbmU6ICdcIiArIGxpbmUgKyBcIidcIik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3RhdGUuZmluYWxpemUoKTtcblxuICAgICAgdmFyIGNvbnRhaW5lciA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICAgICAgY29udGFpbmVyLm1hdGVyaWFsTGlicmFyaWVzID0gW10uY29uY2F0KHN0YXRlLm1hdGVyaWFsTGlicmFyaWVzKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBzdGF0ZS5vYmplY3RzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXG4gICAgICAgIHZhciBvYmplY3QgPSBzdGF0ZS5vYmplY3RzW2ldO1xuICAgICAgICB2YXIgZ2VvbWV0cnkgPSBvYmplY3QuZ2VvbWV0cnk7XG4gICAgICAgIHZhciBtYXRlcmlhbHMgPSBvYmplY3QubWF0ZXJpYWxzO1xuICAgICAgICB2YXIgaXNMaW5lID0gZ2VvbWV0cnkudHlwZSA9PT0gJ0xpbmUnO1xuXG4gICAgICAgIC8vIFNraXAgby9nIGxpbmUgZGVjbGFyYXRpb25zIHRoYXQgZGlkIG5vdCBmb2xsb3cgd2l0aCBhbnkgZmFjZXNcbiAgICAgICAgaWYgKGdlb21ldHJ5LnZlcnRpY2VzLmxlbmd0aCA9PT0gMCkgY29udGludWU7XG5cbiAgICAgICAgdmFyIGJ1ZmZlcmdlb21ldHJ5ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG5cbiAgICAgICAgYnVmZmVyZ2VvbWV0cnkuYWRkQXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShnZW9tZXRyeS52ZXJ0aWNlcyksIDMpKTtcblxuICAgICAgICBpZiAoZ2VvbWV0cnkubm9ybWFscy5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICBidWZmZXJnZW9tZXRyeS5hZGRBdHRyaWJ1dGUoJ25vcm1hbCcsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShnZW9tZXRyeS5ub3JtYWxzKSwgMykpO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgYnVmZmVyZ2VvbWV0cnkuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChnZW9tZXRyeS51dnMubGVuZ3RoID4gMCkge1xuXG4gICAgICAgICAgYnVmZmVyZ2VvbWV0cnkuYWRkQXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShnZW9tZXRyeS51dnMpLCAyKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGUgbWF0ZXJpYWxzXG5cbiAgICAgICAgdmFyIGNyZWF0ZWRNYXRlcmlhbHMgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBtaSA9IDAsIG1pTGVuID0gbWF0ZXJpYWxzLmxlbmd0aDsgbWkgPCBtaUxlbjsgbWkrKykge1xuXG4gICAgICAgICAgdmFyIHNvdXJjZU1hdGVyaWFsID0gbWF0ZXJpYWxzW21pXTtcbiAgICAgICAgICB2YXIgbWF0ZXJpYWwgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICBpZiAodGhpcy5tYXRlcmlhbHMgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgbWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFscy5jcmVhdGUoc291cmNlTWF0ZXJpYWwubmFtZSk7XG5cbiAgICAgICAgICAgIC8vIG10bCBldGMuIGxvYWRlcnMgcHJvYmFibHkgY2FuJ3QgY3JlYXRlIGxpbmUgbWF0ZXJpYWxzIGNvcnJlY3RseSwgY29weSBwcm9wZXJ0aWVzIHRvIGEgbGluZSBtYXRlcmlhbC5cbiAgICAgICAgICAgIGlmIChpc0xpbmUgJiYgbWF0ZXJpYWwgJiYgIShtYXRlcmlhbCBpbnN0YW5jZW9mIFRIUkVFLkxpbmVCYXNpY01hdGVyaWFsKSkge1xuXG4gICAgICAgICAgICAgIHZhciBtYXRlcmlhbExpbmUgPSBuZXcgVEhSRUUuTGluZUJhc2ljTWF0ZXJpYWwoKTtcbiAgICAgICAgICAgICAgbWF0ZXJpYWxMaW5lLmNvcHkobWF0ZXJpYWwpO1xuICAgICAgICAgICAgICBtYXRlcmlhbCA9IG1hdGVyaWFsTGluZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIW1hdGVyaWFsKSB7XG5cbiAgICAgICAgICAgIG1hdGVyaWFsID0gIWlzTGluZSA/IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCgpIDogbmV3IFRIUkVFLkxpbmVCYXNpY01hdGVyaWFsKCk7XG4gICAgICAgICAgICBtYXRlcmlhbC5uYW1lID0gc291cmNlTWF0ZXJpYWwubmFtZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtYXRlcmlhbC5zaGFkaW5nID0gc291cmNlTWF0ZXJpYWwuc21vb3RoID8gVEhSRUUuU21vb3RoU2hhZGluZyA6IFRIUkVFLkZsYXRTaGFkaW5nO1xuXG4gICAgICAgICAgY3JlYXRlZE1hdGVyaWFscy5wdXNoKG1hdGVyaWFsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSBtZXNoXG5cbiAgICAgICAgdmFyIG1lc2g7XG5cbiAgICAgICAgaWYgKGNyZWF0ZWRNYXRlcmlhbHMubGVuZ3RoID4gMSkge1xuXG4gICAgICAgICAgZm9yICh2YXIgbWkgPSAwLCBtaUxlbiA9IG1hdGVyaWFscy5sZW5ndGg7IG1pIDwgbWlMZW47IG1pKyspIHtcblxuICAgICAgICAgICAgdmFyIHNvdXJjZU1hdGVyaWFsID0gbWF0ZXJpYWxzW21pXTtcbiAgICAgICAgICAgIGJ1ZmZlcmdlb21ldHJ5LmFkZEdyb3VwKHNvdXJjZU1hdGVyaWFsLmdyb3VwU3RhcnQsIHNvdXJjZU1hdGVyaWFsLmdyb3VwQ291bnQsIG1pKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgbXVsdGlNYXRlcmlhbCA9IG5ldyBUSFJFRS5NdWx0aU1hdGVyaWFsKGNyZWF0ZWRNYXRlcmlhbHMpO1xuICAgICAgICAgIG1lc2ggPSAhaXNMaW5lID8gbmV3IFRIUkVFLk1lc2goYnVmZmVyZ2VvbWV0cnksIG11bHRpTWF0ZXJpYWwpIDogbmV3IFRIUkVFLkxpbmVTZWdtZW50cyhidWZmZXJnZW9tZXRyeSwgbXVsdGlNYXRlcmlhbCk7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICBtZXNoID0gIWlzTGluZSA/IG5ldyBUSFJFRS5NZXNoKGJ1ZmZlcmdlb21ldHJ5LCBjcmVhdGVkTWF0ZXJpYWxzWzBdKSA6IG5ldyBUSFJFRS5MaW5lU2VnbWVudHMoYnVmZmVyZ2VvbWV0cnksIGNyZWF0ZWRNYXRlcmlhbHNbMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVzaC5uYW1lID0gb2JqZWN0Lm5hbWU7XG5cbiAgICAgICAgY29udGFpbmVyLmFkZChtZXNoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgIGNvbnNvbGUudGltZUVuZCgnT0JKTG9hZGVyJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gIH07XG59OyJdLCJzb3VyY2VSb290IjoiIn0=