/* eslint-disable no-undef */
class MyBirdFeet extends CGFobject {
    constructor (scene) {
        super(scene);
        this.cylinder = new MyCylinder(scene, 5, 0.1, 1);
        this.cone = new MyCone(scene, 5, 0.1, 0.3);
    }
    display () {
        this.scene.pushMatrix();
        this.scene.translate(-1, -2.5, 0);
        this.scene.pushMatrix();
        this.cylinder.display();
        this.scene.translate(0, 0.1, 0);
        this.scene.rotate(-(Math.PI * 2) / 6, 1, 1, 1);
        this.scene.scale(-1, -0.5, -1);
        this.cylinder.display();
        this.scene.translate(0, 1, 0);
        this.cone.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0, 0.1, 0);
        this.scene.rotate(-(Math.PI * 4) / 6, 1, 0, 1);
        this.scene.scale(1, 0.5, 1);
        this.cylinder.display();
        this.scene.translate(0, 1, 0);
        this.cone.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0, 0.1, 0);
        this.scene.rotate(-(Math.PI * 5) / 6, 1, 0.5, 1);
        this.scene.rotate(-(Math.PI) / 6, 1, 0, 1);
        this.scene.scale(1, 0.5, 1);
        this.cylinder.display();
        this.scene.translate(0, 1, 0);
        this.cone.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
    }
}
