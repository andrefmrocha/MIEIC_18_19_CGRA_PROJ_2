/* eslint-disable no-undef */
class MyRubberDuck extends CGFobject {
    constructor (scene, txt) {
        super(scene);
        this.circle = new MySphere(scene, 2);

        this.feet = new MyBirdFeet(scene);
        this.eye = new MyBirdEye(scene);
        this.nose = new MyBirdNose(scene);
        if(txt == undefined)
          this.txt = this.scene.yellow;
        else
          this.txt = txt
        this.ori = 0;

    }

    display () {
        this.scene.pushMatrix();
        //this.scene.translate(this.x, this.birdHeight + this.y + this.animationY, this.z);

        this.txt.apply();
        this.scene.scale(0.3, 0.3, 0.3);
        //this.scene.scale(this.scene.scaleFactor, this.scene.scaleFactor, this.scene.scaleFactor);
        this.scene.rotate(this.ori, 0, 1, 0);
        this.scene.pushMatrix();
        this.scene.scale(1, 1, 2);
        this.circle.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0, 1.8, 2.5);
        this.scene.scale(1, 1, 1.3);
        this.scene.rotate(30, 1, 0, 0);
        this.circle.display();
        this.scene.popMatrix();

        this.scene.black.apply();
        this.scene.pushMatrix();
        this.feet.display();
        this.scene.translate(2, 0, 0);
        this.feet.display();
        this.eye.display();
        this.scene.translate(-1.5, 0, 0);
        this.eye.display();
        this.scene.orange.apply();
        this.nose.display();
        this.scene.popMatrix();

        this.scene.popMatrix();

    }
    update (time) {

    }
    turn (v) {
        //this.ori += v * this.scene.speedFactor;
    }
    accelerate (v) {
        /*let curr = (this.time * this.scene.speedFactor * (this.speed + 1) + this.alpha) % (2.0 * Math.PI);
        this.speed += v * this.scene.speedFactor;
        if (this.speed < 0) {
            this.speed = 0;
        }
        let next = (this.time * this.scene.speedFactor * (this.speed + 1)) % (2.0 * Math.PI);
        this.alpha = curr - next;*/
    }


}
