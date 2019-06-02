/* eslint-disable no-undef */
class MyPool extends CGFobject {
    constructor (scene, base, height) {
        super(scene);
        this.base = base;
        this.height = height;
        this.quad = new MyQuad(scene);
        this.cube = new MyUnitCubeQuad(scene);
        this.offset = 0.1;
        this.baseOffset = 0.7;
    }

    display () {
        this.scene.pushMatrix();
        this.scene.scale(this.base, 1, this.height);
        //this.scene.water.apply();
        //this.scene.setActiveShader(this.waterShader);
        //this.scene.red.apply()
        this.scene.translate(0, 0, 0);
        this.scene.setActiveShader(this.scene.waterShader);
        this.scene.waterTex.bind(1);
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_WRAP_S, this.scene.gl.REPEAT);
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_WRAP_T, this.scene.gl.REPEAT);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.quad.display();
        this.scene.setActiveShader(this.scene.defaultShader);
        this.scene.popMatrix();
        this.scene.brick.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, -1.7, 0);
        this.scene.pushMatrix();
        this.scene.translate(this.base / 2 + this.offset, 0, 0);
        this.scene.scale(0.5, 1.3, this.height);
        this.cube.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-this.base / 2 - this.offset, 0, 0);
        this.scene.scale(0.5, 1.3, this.height);
        this.cube.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0, 0, this.height / 2 + this.offset);
        this.scene.scale(this.base + this.baseOffset, 1.3, 0.5);
        this.cube.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -this.height / 2 - this.offset);
        this.scene.scale(this.base + this.baseOffset, 1.3, 0.5);
        this.cube.display();
        this.scene.popMatrix();
        this.scene.scale(this.base, 1, this.height);
        this.scene.translate(0, -0.1, 0);
        this.cube.display();
        this.scene.popMatrix();
        //this.scene.popMatrix();
    }
}
