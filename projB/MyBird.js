/* eslint-disable no-undef */
class MyBird extends CGFobject {
    constructor (scene) {
        super(scene);
        this.circle = new MySphere(scene, 2);
        this.wing = new MyBirdWing(scene);
        this.angle = 0;
    }

    display () {
        this.scene.pushMatrix();
        this.scene.scale(1, 1, 2);
        this.circle.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0, 1.8, 2.5);
        this.scene.scale(1, 1, 1.3);
        this.scene.rotate(30, 1, 0, 0);
        this.circle.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-2, 0, 0);
        this.wing.display(this.angle);
        this.scene.translate(4, 0, 0);
        this.scene.scale(-1, 1, 1);
        this.wing.display(this.angle);
        this.scene.popMatrix();
    }
    update (time) {
        this.angle = Math.sin(time * 0.005) * 0.7 - 0.7;
    }
}
