/* eslint-disable no-undef */
class MyBranch extends CGFobject {
    constructor (scene) {
        super(scene);
        this.branch = new MyCylinder(scene, 5, -1, 1.2);
    }
    display () {
        this.scene.materialWood.apply();
        this.branch.display();
    }
}
