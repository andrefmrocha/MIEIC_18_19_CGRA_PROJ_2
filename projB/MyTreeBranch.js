/* eslint-disable no-undef */
class MyTreeBranch extends CGFobject {
    constructor (scene) {
        super(scene);
        this.cylinder = new MyCylinder(scene, 5, 0.1, 1.6);
    }

    display (coords) {
        this.scene.pushMatrix();
        this.scene.materialWood.apply();
        this.scene.translate(coords.x, 0.5, coords.z);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.cylinder.display();
        this.scene.popMatrix();
    }
}
