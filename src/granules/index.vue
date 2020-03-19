<template>
  <section ref="renderDom"></section>
</template>
<script>
import * as Three from "three";
export default {
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null
    };
  },
  mounted() {
    this._initScene();
    this._initCube();
    this._getObjData();
    this._renderAnimate();
  },
  methods: {
    _initScene() {
      //   相机
      this.camera = new Three.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        5,
        100
      );
      this.camera.position.set(10, -10, -40);

      //   场景
      this.scene = new Three.Scene();
      this.scene.fog = new Three.Fog(0x05050c, 10, 60);
      this.scene.add(new Three.GridHelper(2000, 1));

      // 灯光
      let ambientLight = new Three.AmbientLight(0x000000, 0.4);
      this.scene.add(ambientLight);
      let pointLight = new Three.PointLight(0xe42107);
      pointLight.castShadow = true;
      pointLight.position.set(-10, -5, -10);
      pointLight.distance = 20;
      this.scene.add(pointLight);

      //   渲染器
      this.renderer = new Three.WebGLRenderer({ antialias: true });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      let renDom = this.$refs.renderDom;
      renDom.appendChild(this.renderer.domElement);
    },
    _initCube() {
      let cube = new Three.BoxBufferGeometry(1, 1, 1);
      let materialCube = new Three.MeshBasicMaterial({ color: 0x00ff00 });
      let cubeMesh = new Three.Mesh(cube, materialCube);
      this.scene.add(cubeMesh);
    },
    _getObjData() {
      let loader = new Three.ObjectLoader();
      //   import("./jkm_female1.obj").then(module => {
      //     console.log(`module`);
      //     console.log(module);
      //   });
      loader.load("jkm_female1.obj", () => {
        console.log(`obj`, 49);
        console.log(obj);
      });
    },
    _renderAnimate() {
      this.renderer.render(this.scene, this.camera);
    }
  }
};
</script>
<style lang="scss" scoped></style>
