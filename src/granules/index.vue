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
            fogNum: 0.01
        };
    },
    mounted() {
        document.title = "obj loader";
        this._initScene();
        this._initCube();
        this._getObjData();
        this._renderAnimate();
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
            this.camera.position.set(100, 100, 100);
            this.camera.lookAt(new Three.Vector3(0, 0, 0));

            //   场景
            this.scene = new Three.Scene();
            // this.scene.fog = new Three.Fog(0x05050c, 10, 60);
            // this.scene.add(new Three.AxisHelper(15));

            // 灯光
            // let ambientLight = new Three.AmbientLight(0x000000, 0.4);
            // this.scene.add(ambientLight);
            // let pointLight = new Three.PointLight(0xe42107);
            // pointLight.castShadow = true;
            // pointLight.position.set(-10, -5, -10);
            // pointLight.distance = 20;
            // this.scene.add(pointLight);

            let dirLight = new Three.DirectionalLight(0xffffff, 1);
            dirLight.position.set(8, 10, 6);
            this.scene.add(dirLight);

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
                // this.scene.add(module);
                // this._renderAnimate();

                // let color = new Three.color(`#ffffff`);
                // let material = new Three.PointsMaterial({
                //     size: 0.2,
                //     depthTest: false,
                //     transparent: true
                // });
                // let particleSystem = new Three.Group();
                // let allCount = 0;
                for (let i = 0; i < module.children.length; i++) {
                    let geometry = module.children[i].geometry;
                    let material = module.children[i].material;
                    let particles = new Three.Points(geometry, material);
                    this.scene.add(particles);
                    // let name = module.children[i].name;
                    // let _attributes = module.children[i].geometry.attributes;
                    // let count = _attributes.position.count;
                    // _attributes.positionEnd = _attributes.position.clone();
                    // _attributes.position1 = _attributes.position.clone();
                    // for (let i = 0; i < count * 3; i++) {
                    //     _attributes.position1.array[i] =
                    //         Math.random() * 100 - 50;
                    // }
                    // let particles = new Three.Points(
                    //     module.children[i].geometry,
                    //     material
                    // );
                    // particleSystem.add(particles);
                    // allCount += count;
                }
                this._renderAnimate();
                // particleSystem.applyMatrix(
                //     new Three.Matrix4().makeTranslation(-5, -5, -10)
                // );
            });
        },
        _renderAnimate() {
            if (this.fogNum > 0) {
                this.fogNum -= 0.0001;

                // this.scene.fog = new Three.FogExp2("#fff", this.fogNum);
            }
            this.renderer.render(this.scene, this.camera);
            // requestAnimationFrame(this._renderAnimate);
        }
    }
};
</script>
<style lang="scss" scoped></style>
