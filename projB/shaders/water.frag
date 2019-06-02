#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform float timeFactor;


uniform sampler2D waterTex;
void main() {

	//vec4 color = texture2D(waterTex, vTextureCoord +vec2(timeFactor*.00114,timeFactor * 0.027));
	vec4 color1 = texture2D(waterTex, vTextureCoord);

	vec4 color2 = vec4(0,0,0,1);

	gl_FragColor = (color1 + color2)/2.0;

}
