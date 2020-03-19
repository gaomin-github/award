<template>
  <section ref="renderDom">
    <section class="handler">
      <section class="cube-btn" @click="addCube">addCube btn</section>
      <section class="cube-btn" @click="startMove">move up</section>
      <section class="cube-btn" @click="animateMoveCube">
        animateMoveCube
      </section>
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
    this._initRenderDom();
    // 改变相机视角
    this._changeCamera();
    // 创建方块
    this.addCube();
    this.addCube();
    // 创建移动物体
    this._createMoveCube();
  },
  methods: {
    addCube() {
      // 创建方块
      this._createCube();
    },
    _initRenderDom() {
      this.scene = new Three.Scene();
      // 坐标轴辅助线
      let axisHelpre = new Three.AxisHelper(35);
      this.scene.add(axisHelpre);
      // 光
      let dirLight = new Three.DirectionalLight(0xffffff, 1);
      dirLight.position.set(8, 10, 6);
      this.scene.add(dirLight);
      // 相机
      this.camera = new Three.OrthographicCamera(
        window.innerWidth / -20,
        window.innerWidth / 20,
        window.innerHeight / 20,
        window.innerHeight / -20,
        1,
        1000
      );
      this.camera.position.set(100, 100, 100);
      this.camera.lookAt(new Three.Vector3(0, 0, 0));
      // 渲染器
      this.renderer = new Three.WebGLRenderer({ antialias: true });
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
      }

      // 创建方块实体
      this.cur_cube = new Three.BoxGeometry(5, 2, 5);
      let material = new Three.MeshPhongMaterial({
        color: 0xffff00
      });
      let mesh = new Three.Mesh(this.cur_cube, material);
      // 新创建的方块位置
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
      }
      // 确定方块位置
      mesh.position.set(
        this.curMeshPosition.x,
        this.curMeshPosition.y,
        this.curMeshPosition.z
      );
      // 初始化相机下一步挪动重点位置
      this.cubes.push(this.cur_cube);
      this.scene.add(mesh);
    },
    _changeCamera() {
      if (this.cameraPos.cur.z > this.cameraPos.next.z) {
        this.cameraPos.cur.z -= 0.2;
      } else if (this.cameraPos.cur.x > this.cameraPos.next.x) {
        this.cameraPos.cur.x -= 0.2;
      }
      this.camera.lookAt(
        new Three.Vector3(
          this.cameraPos.cur.x,
          this.cameraPos.cur.y,
          this.cameraPos.cur.z
        )
      );
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this._changeCamera);
    },
    _createMoveCube() {
      let moveCubeGeometry = new Three.BoxGeometry(2, 4, 2);

      let moveCubeMaterial = new Three.MeshPhongMaterial(0xfff000);
      this.movCube = new Three.Mesh(moveCubeGeometry, moveCubeMaterial);
      this.movCube.position.set(0, 2, 0);
      moveCubeGeometry.translate(0, 1, 0);
      this.scene.add(this.movCube);
    },
    startMove() {
      if (this.movCube.position.y >= 2) {
        this.movCube.position.y += this.movCubeStateY;
        if (
          this.dir === "left" &&
          this.movCube.position.x > this.cameraPos.next.x
        ) {
          this.movCube.position.x -= 0.5;
        } else if (
          this.dir === "right" &&
          this.movCube.position.z > this.cameraPos.next.z
        ) {
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
};
</script>
<style scoped>
.handler {
  position: absolute;
  top: 10px;
  display: flex;
}
.cube-btn {
  margin-right: 15px;
  color: rgb(255, 255, 255);
  border: 1px rgb(255, 255, 255) solid;
  border-radius: 5px;
  padding: 0px 5px;
  cursor: pointer;
}
</style>
