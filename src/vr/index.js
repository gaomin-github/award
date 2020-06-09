const fileType = ["hall-of-frame", "pantry", "reception"];
const dirType = ["back", "bottom", "front", "left", "right", "top"];
export default {
  data() {
    return {
      gl: null,
    };
  },
  mounted() {
    this._initPage();
  },
  methods: {
    _initPage() {
      this._initRenderGl();
      this._initTexture();
    },
    _initRenderGl() {
      let { canvas } = this.$refs;
      this.gl = canvas.getContext("webgl");
    },
    _initTexture() {
      //   let module = require("./imgs/pantry/front.jpg");
      //   console.log(module);
      dirType.map((type) => {
        let imgObj = new Image();
        // let url = `./imgs/${fileType[1]}/${type}.jpg`;
        let url = "./imgs/pantry/front.jpg";
        console.log("url:", url);
        console.log(require(url));
        // imgObj.src = require(`../imgs/${fileType[0]}/${type}.jpg`);
        // imgObj.onload = () => {
        //   console.log(imgObj, 26);
        // };
      });
    },
  },
};
