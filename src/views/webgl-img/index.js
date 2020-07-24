{/* <script id="ss">

</script> */}
export default {
  data() {
    return {
      imgUrl: '',
      gl: null,
      imgObj: null,
      texture: null,
      vertexShader: null,
      fragShader: null,
      program: null,
      positionALoc: null,
      coorLoc: null,
      positionBuffer: null,
      colorBuffer: null,
    }
  },
  async mounted() {

    let imgObj = await require('./page_bg.jpeg');
    this.imgUrl = imgObj;
    // console.log(imgObj, 13)
    let imgEl = new Image(200, 100);
    // imgEl.src = 'https://webglfundamentals.org/webgl/resources/leaves.jpg'
    imgEl.src = imgObj

    this.imgObj = imgEl
    // this._initImgRender()
    console.log(this.imgObj, 27)
    this._initCopy()
  },
  methods: {
    _initImgRender() {
      this._initShader();
      this._initTexture();
      this._renderImg()
    },
    _initShader() {

      let canvasEl = this.$refs.canva;
      let gl = this.gl = canvasEl.getContext('webgl');
      let shaders = {
        vertex: require('./vertex.glsl'),
        frag: require('./frag.glsl')
      }
      let vertexShader = this.vertexShader = gl.createShader(gl.VERTEX_SHADER);
      gl.shaderSource(vertexShader, shaders.vertex);
      gl.compileShader(vertexShader);

      let fragShader = this.fragShader = gl.createShader(gl.FRAGMENT_SHADER);
      gl.shaderSource(fragShader, shaders.frag);
      gl.compileShader(fragShader);

      let program = this.program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragShader);
      gl.linkProgram(program);
      let test = gl.getProgramParameter(program, gl.LINK_STATUS)
      console.log(test, 54)
      console.log(gl.getShaderInfoLog(vertexShader), 55)

      this.positionALoc = gl.getAttribLocation(program, 'a_position');
      this.coorLoc = gl.getAttribLocation(program, 'a_texCoord');
    },
    _initTexture() {
      let gl = this.gl;
      let positionBuffer = this.positionBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        0.0, 0.0,
        650.0, 0.0,
        650, 890,
        650, 890,
        0.0, 0.0,
        0.0, 890.0
      ]), gl.STATIC_DRAW)

      let colorBuffer = this.colorBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        0.0, 0.0,
        1.0, 0.0,
        1.1, 1.1,
        1.1, 1.1,
        0.0, 0.0,
        0.0, 1.0
      ]), gl.STATIC_DRAW)

      let texture = this.texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);


      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.imgObj)

      console.log('canvas init')
    },
    _renderImg() {

      let gl = this.gl;
      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
      console.log('gl.canvas.width', gl.canvas.width)
      console.log('gl.canvas.height', gl.canvas.height)
      console.log(this.coorLoc, 100)
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(this.program)

      gl.enableVertexAttribArray(this.positionALoc)
      gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
      gl.vertexAttribPointer(this.positionALoc, 2, gl.FLOAT, false, 0, 0);

      gl.enableVertexAttribArray(this.coorLoc)
      gl.bindBuffer(gl.ARRAY_BUFFER, this.colorBuffer);
      gl.vertexAttribPointer(this.coorLoc, 2, gl.FLOAT, false, 0, 0);

      let uniformLoc = gl.getUniformLocation(this.program, 'u_resolution');
      gl.uniform2f(uniformLoc, gl.canvas.width, gl.canvas.height);
      console.log(uniformLoc, 115)

      gl.bindTexture(gl.TEXTURE_2D, this.texture)
      gl.drawArrays(gl.TRIANGLES, 0, 6)

    },
    _initCopy() {
      var canvas = document.querySelector("#canvas");
      var gl = canvas.getContext("webgl");
      if (!gl) {
        return;
      }
      let shaders = {
        vertex: require('./vertex.glsl'),
        frag: require('./frag.glsl')
      }
      // console.log(shaders.vertex.default, 137)
      // console.log(shaders.vertex.default, 138)

      let vertexShader = this.vertexShader = gl.createShader(gl.VERTEX_SHADER);
      gl.shaderSource(vertexShader, shaders.vertex.default);
      gl.compileShader(vertexShader);
      let compiled = gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS);
      if (!compiled) {
        console.log(gl.getShaderInfoLog(vertexShader), 145)
      } else {
        console.log('compiled success')
      }

      let fragShader = this.fragShader = gl.createShader(gl.FRAGMENT_SHADER);
      gl.shaderSource(fragShader, shaders.frag.default);
      gl.compileShader(fragShader);
      let compiled_1 = gl.getShaderParameter(fragShader, gl.COMPILE_STATUS);
      if (!compiled_1) {
        console.log(gl.getShaderInfoLog(fragShader), 155)
      } else {
        console.log('compiled success 1')
      }

      let program = this.program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragShader);
      gl.linkProgram(program);
      let test = gl.getProgramParameter(program, gl.LINK_STATUS)
      if (!test) {

        console.log(gl.getProgramInfoLog(program), 167)
      }
      // console.log(test, 54)

      var positionLocation = gl.getAttribLocation(program, "a_position");
      var texcoordLocation = gl.getAttribLocation(program, "a_texCoord");

      let positionBuffer = this.positionBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
      console.log('this.imgObj.width', this.imgObj.width)
      console.log('this.imgObj.height', this.imgObj.height)

      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        0.0, 0.0,
        200, 0.0,
        200, 100,
        200, 100,
        0.0, 0.0,
        0.0, 100
      ]), gl.STATIC_DRAW)

      let colorBuffer = this.colorBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
        0.0, 0.0,
        1.0, 1.0
      ]), gl.STATIC_DRAW)

      let texture = this.texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.imgObj)

      var resolutionLocation = gl.getUniformLocation(program, "u_resolution");
      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

      gl.clearColor(10, 10, 10, 0.5);
      gl.clear(gl.COLOR_BUFFER_BIT)

      gl.useProgram(program);

      gl.enableVertexAttribArray(positionLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      gl.enableVertexAttribArray(texcoordLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
      gl.vertexAttribPointer(texcoordLocation, 2, gl.FLOAT, false, 0, 0);

      gl.uniform2f(resolutionLocation, gl.canvas.width, gl.canvas.height);

      // Draw the rectangle.
      var primitiveType = gl.TRIANGLES;
      var offset = 0;
      var count = 6;
      gl.drawArrays(primitiveType, offset, count);

    }
  }
}