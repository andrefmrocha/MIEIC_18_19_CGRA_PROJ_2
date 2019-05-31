/* eslint-disable no-undef */
class MyNest extends CGFobject {
    constructor (scene) {
        super(scene);
        this.branch = new MyCylinder(scene, 5, 0.1, 1.6);
        this.branchs = 0;
    }

    display () {
        this.scene.materialWood.apply();
        this.scene.pushMatrix();
        let z = 0;
        let ang = 0;
        for (z = 0; z < 5; z++) {
            this.scene.translate(0, 0, 0.12);
            this.scene.rotate(Math.sqrt(3), 0, 0, 1);
            for (ang = 0; ang < Math.PI * 2; ang += Math.PI / (2 + z * 0.5)) {
                this.scene.pushMatrix();
                this.scene.rotate(ang + Math.sqrt(3) * 0.1, 0, 0, 1);
                this.scene.translate(0.13 * z, -0.8, 0);
                this.branch.display();
                this.scene.popMatrix();
            }
        }
        this.scene.translate(0, 0, 0.12);
        this.scene.rotate(Math.sqrt(3), 0, 0, 1);
        for (ang = 0; ang < Math.PI / (2 + z * 0.5) * this.branchs; ang += Math.PI / (2 + z * 0.5)) {
            this.scene.pushMatrix();
            this.scene.rotate(ang + Math.sqrt(3) * 0.1, 0, 0, 1);
            this.scene.translate(0.13 * z, -0.8, 0);
            this.branch.display();
            this.scene.popMatrix();
        }
        this.scene.popMatrix();
    }

    addBranch () {
        this.branchs++;
        console.log(`Number of branches ${ this.branchs }`);
    }
}
