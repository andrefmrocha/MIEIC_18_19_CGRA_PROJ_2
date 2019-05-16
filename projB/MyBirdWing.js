/* eslint-disable no-undef */
class MyBirdWing extends CGFobject {
    constructor (scene) {
        super(scene);
        this.quad = new MyQuad(scene);
    }

    display () {
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.rotate(Math.PI / 6, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();
    }
}
