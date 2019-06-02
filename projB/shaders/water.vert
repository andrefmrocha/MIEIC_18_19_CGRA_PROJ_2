attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

//uniform sampler2D waterMap;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

uniform float timeFactor;

varying vec2 vTextureCoord;


void main() {

  /*float t = timeFactor;

  vec4 color = texture2D(waterMap, aTextureCoord + vec2(timeFactor*.00114,timeFactor * 0.027) );

  float v = 0.07 * ((color.g + color.r + color.b)/3.0 - 0.5);

  float z = 0.02 * sin( 2.0*( 0.01*t + aTextureCoord[0] + aTextureCoord[1]) );

  vec3 offset = vec3(0 , 0 , v + z);

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset, 1.0);*/

  float t = timeFactor;

  float z = 0.05 * sin( 2.0*( 0.1*t + aTextureCoord[0] + aTextureCoord[1]) );

  vec3 offset = vec3(0 , 0 , z);

  gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset,1);

	vTextureCoord = aTextureCoord;

}
