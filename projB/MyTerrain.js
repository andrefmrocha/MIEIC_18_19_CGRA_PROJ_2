/* eslint-disable no-undef */
class MyTerrain extends CGFobject {
    constructor (scene) {
        super(scene);
        this.plane = new Plane(scene, 32);
    }
    display () {
        this.scene.pushMatrix();
        this.scene.rotate(-0.5 * Math.PI, 1, 0, 0);
        this.scene.scale(60, 60, 1);
        this.plane.display();
        this.scene.popMatrix();
    }
}
