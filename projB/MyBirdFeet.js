/* eslint-disable no-undef */
class MyBirdFeet extends CGFobject {
    constructor (scene) {
        super(scene);
        this.cylinder = MyCylinder(scene, 5, 0.1, 3);
    }
}
