<template>
  <section ref="renderDom">
    <!-- <section v-for="item in 10">this is {{ item }} item</section> -->
    <section class="cube-btn" @click="addCube">
      addCube btn
    </section>
  </section>
</template>
<script>
import * as Three from "three";
export default {
  data() {
    return {
      renderer: null,
      scene: null,
      camera: null,
      cur_cube: null,
      group: null,
      cubes: [],
      cameraPosition: {
        x: 10,
        y: 10,
        z: 25
      },
      curMeshPosition: {
        x: 0,
        y: 0,
        z: 0
      },
      xLight: null,
      yLight: null,
      zLIght: null
    };
  },
  mounted() {
    this._initRenderDom();
    this.addCube();
  },
  methods: {
    addCube() {
      this._createCube();
      this._changeLight();

      this._changeCamera();
      this._animate();
    },
    _initRenderDom() {
      this.scene = new Three.Scene();
      this.xLight = new Three.PointLight(0xffffff, 1, 320);
      this.yLight = new Three.PointLight(0xffffff, 1, 300);

      this.zLIght = new Three.PointLight(0xffffff, 1, 340);

      this.scene.add(this.xLight);
      this.scene.add(this.yLight);
      this.scene.add(this.zLIght);

      this.camera = new Three.PerspectiveCamera(75, 1, 0.1, 1000);
      this.camera.lookAt(new Three.Vector3(0, 0, 50));
      this.renderer = new Three.WebGLRenderer({ antialias: true });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      let renDom = this.$refs.renderDom;
      renDom.appendChild(this.renderer.domElement);
    },
    _createCube() {
      console.log(`new cube`);
      this.cur_cube = new Three.BoxGeometry(5, 5, 5);
      let material = new Three.MeshPhongMaterial({
        color: 0xffff00
      });
      let mesh = new Three.Mesh(this.cur_cube, material);
      mesh.position.set(
        this.curMeshPosition.x,
        this.curMeshPosition.y,
        this.curMeshPosition.z
      );
      this.curMeshPosition = {
        x: this.curMeshPosition.x + 5,
        y: this.curMeshPosition.y + 5,
        z: this.curMeshPosition.z
      };
      // this.curMeshPosition.x = +5;
      // this.curMeshPosition.y = +5;

      this.cubes.push(this.cur_cube);
      this.scene.add(mesh);
      console.log(this.cur_cube, 86);
    },
    _changeLight() {
      let xLight = new Three.PointLight(0xffffff, 1, 320);
      let yLight = new Three.PointLight(0xffffff, 1, 300);

      let zLIght = new Three.PointLight(0xffffff, 1, 340);

      this.xLight.position.set(70 + this.curMeshPosition.x, 0, 0);
      this.yLight.position.set(0, 50 + this.curMeshPosition.y, 0);
      this.zLIght.position.set(0, 0, 60 + this.curMeshPosition.z);
      // this.scene.add(xLight);
      // this.scene.add(yLight);
      // this.scene.add(zLIght);
    },
    _changeCamera() {
      this.camera.position.set(
        this.cameraPosition.x,
        this.cameraPosition.y,
        this.cameraPosition.z
      );
      // this.cameraPosition.x += 5;
      // this.cameraPosition.y -= 5;
      // this.cameraPosition.x += 10
    },
    _animate() {
      // this.mesh.rotation.x += 0.5;
      // this.mesh.rotation.y += 0.5;
      // this.mesh.rotation.z += 0.005;
      this.renderer.render(this.scene, this.camera);
      // requestAnimationFrame(this._animate);
    }
  }
};
</script>
<style scoped>
.cube-btn {
  position: absolute;
  top: 10px;
  color: rgb(255, 255, 255);
  border: 1px rgb(255, 255, 255) solid;
  border-radius: 5px;
  padding: 0px 5px;
}
</style>
