precision mediump float;

// our texture
uniform sampler2D u_image;

// the texCoords passed in from the vertex shader.
varying vec2 v_texCoord;

void main() {
   //gl_FragColor='rgba(20,120,220,0.5)';
    gl_FragColor = texture2D(u_image, v_texCoord).bgra;
}