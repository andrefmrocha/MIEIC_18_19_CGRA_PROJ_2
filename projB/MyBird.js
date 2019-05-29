/* eslint-disable no-undef */
class MyBird extends CGFobject {
    constructor (scene) {
        super(scene);
        this.circle = new MySphere(scene, 2);
        this.wing = new MyBirdWing(scene);
        this.feet = new MyBirdFeet(scene);
        this.eye = new MyBirdEye(scene);
        this.nose = new MyBirdNose(scene);
        this.branch = new MyTreeBranch(scene);
        this.angle = 0;
        this.speed = 0;
        this.ori = 0;
        this.z = 0;
        this.x = 0;
        this.birdHeight = 0;
        this.isCatching = false;
        this.isCarrying = false;
        this.upwards = false;
        this.y = 10;
    }

    display () {
        this.scene.pushMatrix();
        this.scene.translate(this.x, this.birdHeight + this.y, this.z);
        this.scene.scale(this.scene.scaleFactor, this.scene.scaleFactor, this.scene.scaleFactor);
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
        this.scene.pushMatrix();
        this.scene.translate(-2, 0, 0);
        this.wing.display(this.angle);
        this.scene.translate(4, 0, 0);
        this.scene.scale(-1, 1, 1);
        this.wing.display(this.angle);
        this.scene.popMatrix();
        this.feet.display();
        this.scene.translate(2, 0, 0);
        this.feet.display();
        if (this.isCarrying) {
            this.scene.translate(-0.4, -3, 0);
            this.branch.display({ x: 0, z: 0 });
        }
        this.eye.display();
        this.scene.translate(-1.5, 0, 0);
        this.eye.display();
        this.nose.display();
        this.scene.popMatrix();
    }
    update (time) {
        this.angle = Math.sin((2 * time - time / (this.speed + 1)) * 0.005 * this.scene.speedFactor * (this.speed + 1)) * 0.7 - 0.7;
        this.birdHeight = Math.sin(time / (Math.PI * 2) / 30) * 0.7;
        if (this.isCatching) {
            this.y -= this.speed + 0.1;
            console.log('Going down', this.speed);
            if (this.y <= 0) { // TODO: Value to change according to floor
                this.y = 0;
                this.scene.branches.forEach((element, index) => {
                    if (Math.sqrt(Math.pow(this.x - element.x, 2) + Math.pow(this.y - element.y, 2)) < 2) {
                        this.scene.branches.splice(index, 1);
                    }
                });
                this.isCatching = false;
                this.upwards = true;
            }
        } else if (this.upwards) {
            console.log('Going up', this.speed);
            this.y += this.speed + 0.1;
            if (this.y >= 10) {
                this.y = 10;
                this.upwards = false;
            }
        } else {
            this.x += this.speed * Math.sin(this.ori);
            this.z += this.speed * Math.cos(this.ori);
        }
    }
    increaseSpeed () {
        this.speed += 0.05 * this.scene.speedFactor;
    }
    decreaseSpeed () {
        if (this.speed - 0.05 >= 0) { this.speed -= 0.05 * this.scene.speedFactor; } else { this.speed = 0; }
    }
    rotateRight () {
        this.ori -= 0.1 * this.scene.speedFactor;
    }
    rotateLeft () {
        this.ori += 0.1 * this.scene.speedFactor;
    }
    reset () {
        this.x = 0;
        this.y = 10;
        this.z = 0;
        this.speed = 0;
        this.ori = 0;
    }
    catch () {
        this.isCatching = true;
    }
}
