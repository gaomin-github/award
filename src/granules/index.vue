<template>
  <section ref="renderDom"></section>
</template>
<script>
import * as Three from "three";
import OBJLoader from "three-obj-loader";
export default {
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
    this._initScene();
    // this._initCube();
    this._getObjData();
    // this._renderAnimate();
  },
  methods: {
    _initScene() {
      //   相机
      this.camera = new Three.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        50000
      );
      this.camera.position.set(100, 100, 800);
      //   场景
      this.scene = new Three.Scene();
      this.scene.add(new Three.AxisHelper(55));

      //   let dirLight = new Three.DirectionalLight(0xffffff, 1);
      //   dirLight.position.set(8, 10, 6);
      //   this.scene.add(dirLight);
      // 计时器
      this.clock = new Three.Clock();
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
      OBJLoader(Three);
      let loader = new Three.OBJLoader();
      loader.load("male02.obj", module => {
        this.group = new Three.Group();
        this.scene.add(this.group);
        // this.geometry = module.children[1].geometry;

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
          geometry.attributes.position.setUsage(Three.DynamicDrawUsage);
          let positions = geometry.attributes.position;
          geometry.setAttribute("initPosition", positions.clone());
          for (let j = 0; j < positions.count; j++) {
            positions.setXYZ(j, 0, 0, 0);
          }
          mesh = new Three.Points(
            geometry,
            new Three.PointsMaterial({
              size: 3,
              color: 0xffffff
            })
          );
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
      this.scene.fog = new Three.FogExp2("#fff", this.fogNum);

      this.group.rotation.y -= 0.002;
      let verticalCount = 0;
      let allPointCount = 0;
      //   获取坐标点数量
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
              meshPositions.setXYZ(
                j,
                px + ((ix - px) / dx) * delta * Math.random(),
                py + ((iy - py) / dy) * delta * Math.random(),
                pz + ((iz - pz) / dz) * delta * Math.random()
              );
            } else {
              verticalCount++;
            }
            if (verticalCount === allPointCount) this.dir = -1;
          } else {
            //   向下
            if (py > 0.1) {
              let iy = initMeshPositions.getY(i);
              meshPositions.setXYZ(
                j,
                px + (0.5 - Math.random()) * delta,
                py + (0.25 - Math.random()) * delta,
                pz + (0.5 - Math.random()) * delta
              );
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
};
</script>
<style lang="scss" scoped></style>
