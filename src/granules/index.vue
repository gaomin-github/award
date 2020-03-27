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
            meshes: []
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
            // this.camera.position.set(0, 0, 0);

            this.camera.lookAt(new Three.Vector3(0, 0, 0));

            //   场景
            this.scene = new Three.Scene();
            this.scene.add(new Three.AxisHelper(15));

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
                this.scene.add(module);
                this.geometry = module.children[1].geometry;
                // console.log(, 81);
                this.group = new Three.Group();
                this.scene.add(this.group);

                let positions = this.geometry.attributes.position;
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
                for (let i = 0; i < module.children.length; i++) {
                    let geometry = module.children[i].geometry;
                    let positions = geometry.attributes.position;
                    geometry.setAttribute("initPosition", positions.clone());
                    for (let j = 0; j < positions.count; j++) {
                        positions.setY(j, 0);
                    }
                    let mesh = new Three.Points(
                        geometry,
                        new Three.PointsMaterial({
                            size: 3,
                            color: 0xffffff
                        })
                    );
                    mesh.position.x = 0;
                    mesh.position.y = 10;
                    mesh.position.z = 0;
                    // this.group.add(mesh);
                    this.meshes.push(mesh);
                }
                // this.geometry.setAttribute(
                //     "initialPosition",
                //     positions.clone()
                // );
                // this.newMesh = new Three.Points(
                //     this.geometry,
                //     new Three.PointsMaterial({
                //         size: 5,
                //         color: 0x808008 * Math.random() + 0x808008
                //     })
                // );
                // let newMeshPositions = this.newMesh.geometry.attributes
                //     .position;
                // for (let i = 0; i < newMeshPositions.count; i++) {
                //     newMeshPositions.setY(i, -5);
                // }
                // this.newMesh.position.x = 0;
                // this.newMesh.position.y = -10;
                // this.newMesh.position.z = 0;
                // console.log(`this.new Mesh init`, 114);
                // this.group.add(this.newMesh);
                this._renderAnimate();
            });
        },
        _renderAnimate() {
            console.log(`renderAnimation`, 119);
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
            // this.newMesh.rotation.y += 0.01;
            for (let i = 0; i < this.meshes.length; i++) {
                let mesh = this.meshes[i];

                let meshPositions = mesh.geometry.attributes.position;
                let initMeshPositions = mesh.geometry.attributes.initPosition;
                for (let j = 0; j < meshPositions.count; j++) {
                    let px = meshPositions.getX(j);
                    let py = meshPositions.getY(j);
                    let pz = meshPositions.getZ(j);

                    // console.log(
                    //     `py:${py}:initial:${initMeshPositions.getY(i)}`
                    // );
                    if (py < initMeshPositions.getY(j)) {
                        meshPositions.setXYZ(j, px, py + 0.1, pz);
                    }
                    // let pz = meshPositions.getZ(i);
                    // meshPositions.setXYZ(
                    //     i,
                    //     px + 10 * Math.random(),
                    //     px + 0.5 * Math.random(),
                    //     px + 0.5 * Math.random()
                    // );
                }
                meshPositions.needsUpdate = true;
            }
            // let count = meshPositions.count;

            // this.newMesh.updateMorphTargets();
            console.log(`renderAnimation`, 155);

            this.renderer.render(this.scene, this.camera);
            // setTimeout(this._renderAnimate, 1000);
            requestAnimationFrame(this._renderAnimate);
        }
    }
};
</script>
<style lang="scss" scoped></style>
