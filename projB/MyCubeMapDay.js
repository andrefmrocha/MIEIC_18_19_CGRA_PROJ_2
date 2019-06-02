/* eslint-disable no-undef */
class MyCubeMapDay extends CGFobject {
    constructor (scene, scale) {
        super(scene);
        this.quad = new MyQuad(scene);
        this.scale = scale;
    }
    display () {
        this.scene.pushMatrix();
        this.scene.scale(this.scale, this.scale, this.scale);
        this.scene.rotate(Math.PI, 1, 0, 0);
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.scene.translate(0, 0, 0);
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.5);
        this.scene.materialHillsRf.apply();
        this.quad.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.materialHillsBk.apply();
        this.quad.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(-Math.PI / 2, 0, 1, 0);
        this.scene.materialHillsFt.apply();
        this.quad.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.materialHillsLf.apply();
        this.quad.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.materialHillsDn.apply();
        this.quad.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.materialHillsUp.apply();
        this.quad.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
    }
}
