/* eslint-disable no-undef */
class MyTreeBranch extends CGFobject {
    constructor (scene, coords) {
        super(scene);
        if (coords == null) {
            coords = {
                x: 0,
                z: 0,
                height: 1.6
            };
        }
        this.cylinder = new MyCylinder(scene, 5, 0.1, coords.height);
        this.coords = coords;
    }

    display () {
        this.scene.pushMatrix();
        this.scene.materialWood.apply();
        this.scene.translate(this.coords.x, 0.5, this.coords.z);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.cylinder.display();
        this.scene.popMatrix();
    }

    setNullCoords () {
        this.coords = {
            x: 0,
            z: 0
        };
    }
}
