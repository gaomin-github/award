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
            newMesh: null
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
            this.camera = new Three.OrthographicCamera(
                window.innerWidth / -20,
                window.innerWidth / 20,
                window.innerHeight / 20,
                window.innerHeight / -20,
                1,
                1000
            );
            this.camera.position.set(300, 300, 300);
            this.camera.lookAt(new Three.Vector3(0, 0, 0));

            //   场景
            this.scene = new Three.Scene();

            let dirLight = new Three.DirectionalLight(0xffffff, 1);
            dirLight.position.set(8, 10, 6);
            this.scene.add(dirLight);
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
            //   import("./jkm_female1.obj").then(module => {
            //     console.log(`module`);
            //     console.log(module);
            //   });
            loader.load("jkm_female1.obj", module => {
                console.log(`obj`, 49);
                console.log(module);
                // this.scene.add(module.children[1]);
                this.geometry = module.children[1].geometry;
                // console.log(, 81);
                let positions = this.geometry.attributes.position;
                this.group = new Three.Group();
                this.scene.add(this.group);
                for (let i = 0; i < positions.length; i++) {
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
                }
                // point实现
                this.newMesh = new Three.Points(
                    this.geometry,
                    new Three.PointsMaterial({
                        size: 30,
                        color: 0x808008 * Math.random() + 0x808008
                    })
                );
                this.newMesh.position.x = 10;
                this.newMesh.position.y = 0;
                this.newMesh.position.z = 10;
                this.group.add(this.newMesh);
                this._renderAnimate();
            });
        },
        _renderAnimate() {
            if (this.fogNum > 0) {
                this.fogNum -= 0.0001;

                // this.scene.fog = new Three.FogExp2("#fff", this.fogNum);
            }
            // let positions = this.geometry.attributes.position;
            // for (let i = 0; i < this.particles.length; i++) {
            //     let particle = this.particles[i];

            //     if (particle.position.y < positions.getY(i)) {
            //         this.particles[i].position.y += 0.2;
            //     }
            // }
            let meshPositions = this.newMesh.geometry.attributes.position;
            let count = meshPositions.count;
            for (let i = 0; i < count; i++) {
                let px = meshPositions.getX(i);
                let py = meshPositions.getY(i);
                let pz = meshPositions.getZ(i);
                meshPositions.setY(py + 0.01);
                // meshPositions.setXYZ(
                //     i,
                //     px + 10 * Math.random(),
                //     px + 0.5 * Math.random(),
                //     px + 0.5 * Math.random()
                // );
            }

            this.renderer.render(this.scene, this.camera);
            requestAnimationFrame(this._renderAnimate);
        }
    }
};
</script>
<style lang="scss" scoped></style>
