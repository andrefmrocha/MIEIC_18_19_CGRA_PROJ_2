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
        this.feather = new MyFeather(scene);

        this.angle = 0;

        this.speed = 0;
        this.alpha = 0;

        this.time = 0;

        this.ori = 0;
        this.z = 0;
        this.x = 0;
        this.birdHeight = 0;
        this.isCatching = false;
        this.isCarrying = false;
        this.upwards = false;
        this.animationTime = 0;
        this.animationY = 0;
        this.y = 3;
    }

    display () {
        this.scene.red.apply();
        this.scene.pushMatrix();
        this.scene.translate(this.x, this.birdHeight + this.y + this.animationY, this.z);
        this.scene.scale(0.3, 0.3, 0.3);
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
        this.scene.black.apply();
        this.scene.pushMatrix();
        this.feet.display();
        this.scene.translate(2, 0, 0);
        this.feet.display();
        if (this.isCarrying) {
            this.scene.pushMatrix();
            this.scene.translate(-0.7, -3.2, 0);
            this.scene.scale(2.5, 1, 0);
            this.branch.display({ x: 0, z: 0 });
            this.scene.popMatrix();
        }
        this.eye.display();
        this.scene.translate(-1.5, 0, 0);
        this.eye.display();
        this.nose.display();
        this.scene.popMatrix();
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.rotate(0.15, 0, 0, 1);
        this.feather.display();
        this.scene.rotate(-0.15, 0, 0, 1);
        this.feather.display();
        this.scene.rotate(-0.15, 0, 0, 1);
        this.feather.display();
        this.scene.rotate(0.25, 0, 0, 1);
        this.scene.rotate(-0.1, 0, 1, 0);
        this.feather.display();
        this.scene.rotate(-0.16, 0, 0, 1);
        this.feather.display();
        this.scene.popMatrix();
    }
    update (time) {
        this.currentTime = time;
        this.time = 0;
        this.angle = Math.sin(2 * time * 0.005 * this.scene.speedFactor * (this.speed + 1) + this.alpha) * 0.7 - 0.7;
        if (this.isCatching) {
            let x = this.currentTime - this.animationTime;
            this.animationY = -Math.sin(x / (Math.PI * 120)) * 3;
            if (this.animationY <= -2.7) { // TODO: Value to change according to floor
                console.log(`Birdx: ${ this.x }, BirdY: ${ this.z }`);
                let birdCoords = { x: this.x, z: this.z };
                if (!this.isCarrying) {
                    this.scene.branches.forEach((element, index) => {
                        // console.log('Searching at element', element.x, '  ', element.z);
                        if (this.euclideanDistance(birdCoords, element) < 5) {
                            console.log('Found a branch!');
                            this.scene.branches.splice(index, 1);
                            this.isCarrying = true;
                        }
                    });
                } else {
                    if (this.euclideanDistance(birdCoords, this.scene.nestCoords) < 3) {
                        this.scene.nest.addBranch();
                        this.isCarrying = false;
                    }
                }
            }

            if (this.animationY >= 0) {
                this.animationY = 0;
                this.isCatching = false;
            }
        } else {
            this.birdHeight = Math.sin(time / (Math.PI * 2) / 30) * 0.4;
        }
        this.x += this.speed * Math.sin(this.ori);
        this.z += this.speed * Math.cos(this.ori);
    }
    turn (v) {
        this.ori += v * this.scene.speedFactor;
    }
    accelerate (v) {
        let curr = (this.time * this.scene.speedFactor * (this.speed + 1) + this.alpha) % (2.0 * Math.PI);
        this.speed += v * this.scene.speedFactor;
        if (this.speed < 0) {
            this.speed = 0;
        }
        let next = (this.time * this.scene.speedFactor * (this.speed + 1)) % (2.0 * Math.PI);
        this.alpha = curr - next;
    }
    reset () {
        this.x = 0;
        this.y = 10;
        this.z = 0;
        this.speed = 0;
        this.ori = 0;
    }
    catch () {
        this.animationTime = this.currentTime;
        this.isCatching = true;
    }
    euclideanDistance (el1, el2) {
        return Math.sqrt(Math.pow(el1.x - el2.x, 2) + Math.pow(el1.z - el2.z, 2));
    }
}
