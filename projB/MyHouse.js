/* eslint-disable no-undef */
class MyHouse extends CGFobject {
    constructor (scene, brickTexture, doorTexture, tilesTexture) {
        super(scene);
        this.brickTexture = brickTexture;
        this.doorTexture = doorTexture;
        this.tilesTexture = tilesTexture;
        this.cylinder = new MyCylinder(scene, 6, 0.3, 2);
        this.cube = new MyUnitCubeQuad(scene);
        this.roof = new MyPyramid(scene, 4, 0);
        this.doorOpening = false;
        this.garageY = 0;
        this.garageZ = 0;
        this.angle = 0;
        this.doorClosing = false;
    }

    display () {
        this.scene.pushMatrix();
        this.scene.scale(0.5, 0.5, 0.5);
        this.scene.pushMatrix();
        // (0,3,0) is the offset to make it back to the actual position
        // (0,3,0) is the offset to make it to the top of the garage (from the base of the garage with the offset)
        // this.scene.translate(0, 1.4, 2.5);
        // this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.scene.translate(0, this.garageY, this.garageZ);
        this.scene.rotate(this.angle, 1, 0, 0);
        this.scene.translate(5.9, -2.1, 2.47);
        this.scene.scale(5, 4.3, 1);
        this.scene.garage.apply();
        this.cube.display();
        this.scene.popMatrix();

        this.brickTexture.apply();
        this.scene.pushMatrix();
        this.scene.scale(2, 1.5, 2);

        // Left colummn
        this.scene.pushMatrix();
        this.scene.translate(2, 0, 5.5);
        this.scene.scale(0.7, 1.4, 0.7);
        this.cylinder.display();
        this.scene.popMatrix();

        // Right column
        this.scene.pushMatrix();
        this.scene.translate(4, 0, 5.5);
        this.scene.scale(0.7, 1.4, 0.7);
        this.cylinder.display();
        this.scene.popMatrix();

        // Chimney
        this.scene.pushMatrix();
        this.scene.translate(1.7, 5.95, 0);
        this.scene.scale(0.7, 0.5, 0.7);
        this.cylinder.display();
        this.scene.popMatrix();

        // Garage
        this.scene.pushMatrix();
        this.scene.scale(1.5, 1.5, 1.5);
        this.scene.scale(2, 2, 2);
        this.scene.pushMatrix();
        this.scene.scale(0.1, 0.97, 1);
        this.scene.translate(5, -0.5, 0);
        this.cube.display();
        this.scene.translate(9.5, 0, 0);
        this.cube.display();
        this.scene.translate(0, 0, -0.5);
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.scale(1, 1, 0.1);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.translate(4.5, -0.5, 1);
        this.cube.display();
        this.brickTexture.apply();
        this.scene.popMatrix();

        // Small front rectangle
        this.scene.pushMatrix();
        this.scene.pushMatrix();
        this.scene.translate(1, 0, 0.7);
        this.scene.translate(0, 0.85, 0);
        this.scene.scale(1, 0.1, 2.4);
        this.cube.display();
        this.scene.popMatrix();
        this.scene.popMatrix();

        // Big left Rectangle
        this.scene.scale(1, 2, 1);
        this.scene.translate(0, -0.5, 0);
        this.cube.display();
        this.scene.popMatrix();

        // Roof
        this.scene.pushMatrix();
        this.scene.translate(0, 5.5, 0);
        this.scene.rotate(Math.PI / 4, 0, 1, 0);
        this.scene.scale(3, 3, 3);
        this.tilesTexture.apply();
        this.roof.display();
        this.scene.popMatrix();
        this.scene.popMatrix();

        // Door
        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.scale(2, 3, 1);
        this.scene.translate(0, -0.3, 2.6);
        this.doorTexture.apply();
        this.cube.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
    }
    openDoor () {
        if (this.doorClosing === false) { this.doorOpening = true; }
    }

    closeDoor () {
        if (this.doorOpening === false) { this.doorClosing = true; }
    }

    update (delta) {
        let movement = delta * 0.001;
        if (this.doorOpening) {
            console.log('Door is opening!');
            if ((this.garageY + movement) > 1.4) { this.garageY = 1.4; } else if (this.angle <= -Math.PI / 4) { this.garageY += 2 * movement; } else { this.garageY -= 1.2 * movement; }
            if ((this.garageZ + movement) > 2.5) { this.garageZ = 2.5; } else { this.garageZ += movement; }
            if ((this.angle - movement) < -Math.PI / 2) { this.angle = -Math.PI / 2; } else { this.angle -= 0.6 * movement; }
            if (this.garageY === 1.4 && this.angle === -Math.PI / 2) { this.doorOpening = false; }
        } else if (this.doorClosing) {
            console.log('Door is closing!');
            if ((this.garageY - movement) < 0 && this.angle >= -Math.PI / 4) {
                if (this.garageY + movement > 0) { this.garageY = 0; } else { this.garageY += movement; }
            } else { this.garageY -= 2.3 * movement; }

            if ((this.garageZ - 2 * movement) < 0) { this.garageZ = 0; } else { this.garageZ -= 2 * movement; }

            if ((this.angle + movement) > 0) { this.angle = 0; } else if (this.garageY >= 0.7) { this.angle += 0.05 * movement; } else { this.angle += movement; }

            if (this.garageY === 0 && this.garageZ === 0 && this.angle === 0) { this.doorClosing = false; }
        }
    }
}
