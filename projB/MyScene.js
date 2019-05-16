/**
* MyScene
* @constructor
*/
/* eslint-disable no-undef */

class MyScene extends CGFscene {
    // eslint-disable-next-line no-useless-constructor
    constructor () {
        super();
    }
    init (application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        // Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);
        this.setUpdatePeriod(50);

        // Initialize scene objects
        this.axis = new CGFaxis(this);
        this.plane = new Plane(this, 32);
        this.brick = new CGFappearance(this);
        this.brick.setAmbient(0.1, 0.1, 0.1, 1);
        this.brick.setDiffuse(0.9, 0.9, 0.9, 1);
        this.brick.setSpecular(0.1, 0.1, 0.1, 1);
        this.brick.setShininess(10.0);
        this.brick.loadTexture('images/brick.jpg');
        this.brick.setTextureWrap('REPEAT', 'REPEAT');

        this.garage = new CGFappearance(this);
        this.garage.setAmbient(0.1, 0.1, 0.1, 1);
        this.garage.setDiffuse(0.3, 0.3, 0.3, 1);
        this.garage.setSpecular(0.9, 0.9, 0.9, 1);
        this.garage.setShininess(10.0);
        this.garage.loadTexture('images/garage.jpg');

        this.door = new CGFappearance(this);
        this.door.setAmbient(0.1, 0.1, 0.1, 1);
        this.door.setDiffuse(0.9, 0.9, 0.9, 1);
        this.door.setSpecular(0.1, 0.1, 0.1, 1);
        this.door.setShininess(10.0);
        this.door.loadTexture('images/door.jpg');

        this.tiles = new CGFappearance(this);
        this.tiles.setAmbient(0.1, 0.1, 0.1, 1);
        this.tiles.setDiffuse(0.9, 0.9, 0.9, 1);
        this.tiles.setSpecular(0.1, 0.1, 0.1, 1);
        this.tiles.setShininess(10.0);
        this.tiles.loadTexture('images/tiles.jpg');

        // Objects connected to MyInterface
        this.bird = new MyBird(this);
        this.house = new MyHouse(this, this.brick, this.door, this.tiles);
    }
    initLights () {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras () {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(45, 45, 45), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance () {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    update (t) {

    }

    display () {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        // Draw axis
        this.axis.display();

        // Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section
        this.pushMatrix();
        this.rotate(-0.5 * Math.PI, 1, 0, 0);
        this.scale(60, 60, 1);
        // this.plane.display();
        this.popMatrix();

        this.bird.display();
        // this.house.display();
        // ---- END Primitive drawing section
    }
}
