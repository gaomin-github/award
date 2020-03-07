<template>
  <section ref="renderDom"></section>
</template>
<script>
import * as Three from "three";
export default {
  data() {
    return {
      renderer: null,
      scene: null,
      camera: null,
      cube: null
    };
  },
  mounted() {
    console.log("start c", 8);
    this._createRenderDom();
  },
  methods: {
    _createRenderDom() {
      this.scene = new Three.Scene();
      this.camera = new Three.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      this.renderer = new Three.WebGLRenderer();
      this.renderer.setSize(200, 200);
      let renDom = this.$refs.renderDom;
      renDom.appendChild(this.renderer.domElement);

      let geometry = new Three.BoxGeometry();
      let material = new Three.MeshBasicMaterial({ color: 0x22cc00 });
      this.cube = new Three.Mesh(geometry, material);
      this.scene.add(this.cube);
      this.camera.position.z = 2;
      this._animate();
    },
    _animate() {
      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this._animate);
    }
  }
};
</script>
