<script id="ss">

</script>
export default {
  data() {
    return {
      gl: null
    }
  },
  mounted() {
    this._initCanvas()
  },
  methods: {
    _initCanvas() {
      let canvasEl = this.$refs.canva;
      let gl = this.gl = canvasEl.getContext('webgl');

      let imgBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, imgBuffer)
      console.log('canvas init')
    }
  }
}