/* eslint-disable no-undef */
class MyBirdNose extends CGFobject {
    constructor (scene) {
        super(scene);
        this.cone = new MyCone(scene, 4, 1, 3);
    }

    display () {
        this.scene.pushMatrix();
        this.scene.translate(-0.5, 2.2, 4.6);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.scale(0.3, 0.3, 0.3);
        this.cone.display();
        this.scene.popMatrix();
    }
}
