/* eslint-disable no-undef */
class MyTreeBranch extends CGFobject {
    constructor (scene) {
        super(scene);
        this.cylinder = new MyCylinder(scene, 5, 0.2, 3);
    }

    display (coords) {
        this.scene.pushMatrix();
        this.scene.translate(coords.x, 0, coords.z);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.cylinder.display();
        this.scene.popMatrix();
    }
}
