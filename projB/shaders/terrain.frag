#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
varying float black_color;

uniform sampler2D terrainTex;
uniform sampler2D terrainMap;
uniform sampler2D terrainAlt;

void main() {

	vec4 color1 = texture2D(terrainTex, vTextureCoord);

	vec4 color2 = texture2D(terrainAlt, vec2(0.5,1.0-black_color));

	gl_FragColor = (color1 + color2)/2.0;
}
