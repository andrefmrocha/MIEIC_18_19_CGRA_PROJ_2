/* eslint-disable no-undef */
class MyBirdWing extends CGFobject {
    constructor (scene) {
        super(scene);
        this.quad = new MyQuad(scene);
        this.triangle = new MyTriangle(scene);
    }

    display () {
        this.scene.pushMatrix();
        this.scene.scale(2, 2, 2);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.rotate(Math.PI / 6, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-0.5, -0.85, 0);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.rotate(-Math.PI / 2 - Math.PI / 6, 0, 1, 0);
        this.triangle.display();
        this.scene.popMatrix();
    }
}
