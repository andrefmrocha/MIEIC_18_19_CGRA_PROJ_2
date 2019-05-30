/* eslint-disable no-undef */
class MyTreeBranch extends CGFobject {
    constructor (scene) {
        super(scene);
        this.cylinder = new MyCylinder(scene, 3, 0.1, 1);
    }

    display (coords) {
        this.scene.pushMatrix();
        this.scene.materialWood.apply();
        this.scene.translate(coords.x, 4, coords.z);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.cylinder.display();
        this.scene.popMatrix();
    }
}
