attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform sampler2D terrainMap;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;
varying float black_color;


void main() {

  vec4 color = texture2D(terrainMap, aTextureCoord);

  black_color = (color.g + color.r + color.b)/3.0;

  float v =   15.0 * (black_color - 0.5);

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + vec3(0,0,v), 1.0);
	//gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);

  vTextureCoord = aTextureCoord;

}
