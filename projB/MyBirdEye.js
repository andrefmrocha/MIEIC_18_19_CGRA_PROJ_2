/* eslint-disable no-undef */
class MyBirdEye extends CGFobject {
    constructor (scene) {
        super(scene);
        this.sphere = new MySphere(scene, 2);
    }

    display () {
        this.scene.pushMatrix();
        this.scene.translate(-1.3, 2.5, 4);
        this.scene.scale(0.3, 0.3, 0.3);
        this.sphere.display();
        this.scene.popMatrix();
    }
}
