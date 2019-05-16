/* eslint-disable no-undef */
class MyFloor extends CGFobject {
    constructor (scene, base, height) {
        super(scene);
        this.base = base;
        this.height = height;
        this.quad = new MyQuad(scene);
    }

    display () {
        this.scene.floorTile.apply();
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        for (let i = 0; i < this.base; i++) {
            for (let j = 0; j < this.height; j++) {
                this.quad.display();
                this.scene.translate(1, 0, 0);
            }
            this.scene.translate(-this.base, 1, 0);
        }
        this.scene.popMatrix();
    }
}
