/* eslint-disable no-undef */
class MyBirdWing extends CGFobject {
    constructor (scene) {
        super(scene);
        this.quad = new MyQuad(scene);
        this.triangle = new MyTriangle(scene);
        this.feather = new MyFeather(scene);
    }

    display (angle) {
        this.scene.red.apply();
        this.scene.pushMatrix();
        this.scene.rotate(angle, 0, 0, 1);
        this.scene.pushMatrix();
        this.scene.scale(2, 2, 2);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.rotate(Math.PI / 6, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-1.2, -1.55, 0);
        this.scene.rotate(Math.PI / 2, 1, 1, 0);
        this.scene.scale(1.4, 1.4, 1.4);
        // this.scene.rotate(-Math.PI / 2 - Math.PI / 6, 0, 1, 0);
        this.triangle.display();
        this.scene.popMatrix();
        this.scene.scale(0.4,0.4,0.4);
        this.scene.translate(-1.2,-0.5,0);
        this.scene.rotate(Math.PI/2 , 1,0,0);
        this.scene.rotate(-Math.PI/2 , 0,1,0);
        this.scene.rotate(-Math.PI / 6, 0, 1 , 0);
        this.scene.rotate(0.1 , 0, 1,0);
        this.feather.display();
        this.scene.rotate(-0.4,0,0,1);
        this.feather.display();
        this.scene.rotate(0.2,0,0,1);
        this.feather.display();
        this.scene.rotate(0.2,0,0,1);
        this.feather.display();
        this.scene.rotate(0.2,0,0,1);
        this.feather.display();
        this.scene.rotate(0.2,0,0,1);
        this.feather.display();
        this.scene.popMatrix();
    }
}
