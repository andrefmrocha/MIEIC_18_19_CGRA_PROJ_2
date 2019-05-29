/**
* MyScene
* @constructor
*/
/* eslint-disable no-undef */

class MyScene extends CGFscene {
    // eslint-disable-next-line no-useless-constructor
    constructor () {
        super();
        this.scaleFactor = 1;
        this.speedFactor = 1;
        this.branches = [];
    }
    init (application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        this.time = 0;

        // Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);

        // Initialize scene objects
        this.axis = new CGFaxis(this);
        this.plane = new Plane(this, 32);

        this.brick = new CGFappearance(this);
        this.brick.setAmbient(0.9, 0.9, 0.9, 1);
        this.brick.setDiffuse(0.9, 0.9, 0.9, 1);
        this.brick.setSpecular(0.4, 0.4, 0.4, 1);
        this.brick.setShininess(120.0);
        this.brick.loadTexture('images/brick.jpg');
        this.brick.setTextureWrap('REPEAT', 'REPEAT');

        this.garage = new CGFappearance(this);
        this.garage.setAmbient(0.9, 0.9, 0.9, 1);
        this.garage.setDiffuse(0.3, 0.3, 0.3, 1);
        this.garage.setSpecular(0.9, 0.9, 0.9, 1);
        this.garage.setShininess(10.0);
        this.garage.loadTexture('images/garage.jpg');

        this.door = new CGFappearance(this);
        this.door.setAmbient(0.9, 0.9, 0.9, 1);
        this.door.setDiffuse(0.9, 0.9, 0.9, 1);
        this.door.setSpecular(0.1, 0.1, 0.1, 1);
        this.door.setShininess(10.0);
        this.door.loadTexture('images/door.jpg');

        this.materialLeaf = new CGFappearance(this);
        this.materialLeaf.setAmbient(0.9, 0.9, 0.9, 1);
        this.materialLeaf.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialLeaf.setSpecular(0.9, 0.9, 0.9, 1);
        this.materialLeaf.setShininess(10.0);
        this.materialLeaf.loadTexture('images/treetop.jpg');

        this.materialWood = new CGFappearance(this);
        this.materialWood.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialWood.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialWood.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialWood.setShininess(10.0);
        this.materialWood.loadTexture('images/wood.jpg');

        this.appearance = new CGFappearance(this);
        this.appearance.setAmbient(0.3, 0.3, 0.3, 1);
        this.appearance.setDiffuse(0.7, 0.7, 0.7, 1);
        this.appearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.appearance.setShininess(120);

        this.white_lightning = new CGFappearance(this);
        this.white_lightning.setAmbient(0.8, 0.8, 0.8, 0.8);
        this.white_lightning.setDiffuse(1, 1, 1, 1);
        this.white_lightning.setSpecular(1, 1, 1, 1);
        this.white_lightning.setShininess(100.0);

        this.terrainTex = new CGFtexture(this, 'images/terrain2.jpg');
        this.terrainMap = new CGFtexture(this, 'images/heightmap2.jpg');
        this.terrainAlt = new CGFtexture(this, 'images/altimetry.png');

        this.texture = this.terrainTex;

        this.appearance.setTexture(this.terrainTex);
        this.appearance.setTextureWrap('REPEAT', 'REPEAT');

        this.terrainShader = new CGFshader(this.gl, 'shaders/terrain.vert', 'shaders/terrain.frag');

        this.terrainShader.setUniformsValues({ terrainTex: 0, terrainMap: 1, terrainAlt: 2 });

        // Objects connected to MyInterface
        this.tiles = new CGFappearance(this);
        this.tiles.setAmbient(0.9, 0.9, 0.9, 1);
        this.tiles.setDiffuse(0.9, 0.9, 0.9, 1);
        this.tiles.setSpecular(0.9, 0.9, 0.9, 1);
        this.tiles.setShininess(120.0);
        this.tiles.loadTexture('images/tiles.jpg');

        // Objects connected to MyInterface
        //
        //
        this.bird = new MyBird(this);
        this.forest = new MyForest(this, 5, 3);
        this.nest = new MyNest(this);
        this.house = new MyHouse(this, this.brick, this.door, this.tiles);
        this.branch = new MyTreeBranch(this);

        this.lightnings = [];

        this.setUpdatePeriod(1000 / 30);

        for (let i = 0; i < 6; i++) {
            this.branches.push({
                x: Math.floor(Math.random() * Math.floor(60)) - 30,
                z: Math.floor(Math.random() * Math.floor(60)) - 30
            });
        }
        console.log(this.bird);
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
    update (currTime) {
        this.time = currTime;
        this.bird.update(this.time);
        if (this.gui.isKeyPressed('KeyW')) {
            this.bird.increaseSpeed();
        } else if (this.gui.isKeyPressed('KeyS')) {
            this.bird.decreaseSpeed();
        } else if (this.gui.isKeyPressed('KeyD')) {
            this.bird.rotateRight();
        } else if (this.gui.isKeyPressed('KeyA')) {
            this.bird.rotateLeft();
        } else if (this.gui.isKeyPressed('KeyR')) {
            this.bird.reset();
        } else if (this.gui.isKeyPressed('KeyL')) {
            if (this.lightnings.length / 4.0 < 1) {
                this.lightnings.push(new MyLightning(this));
                this.lightnings.push(Math.random() * Math.PI);
                this.lightnings.push(Math.random() * 40 - 20, Math.random() * 40 - 20);
            }
        } else if (this.gui.isKeyPressed('KeyP')) {
            if (!this.bird.isCatching) {
                this.bird.catch();
            }
        }
    }

    displayLightnings () {
        for (let i = 0; i < this.lightnings.length / 4.0; i = i + 4) {
            this.pushMatrix();
            this.rotate(this.lightnings[i + 1], 0, 1, 0);
            this.rotate(Math.PI, 1, 0, 0);
            this.translate(this.lightnings[i + 2], -17, this.lightnings[i + 3]);
            this.lightnings[i].display();
            this.popMatrix();
            if (this.lightnings[i].f > this.lightnings[i].axiom.length + 100) {
                this.lightnings.splice(i, 4);
                i = i - 4;
            }
        }
    }

    cenario () {
        this.pushMatrix();
        this.scale(0.2, 0.2, 0.2);
        this.bird.display();
        this.popMatrix();

        this.branches.forEach(value => {
            this.branch.display(value);
        });
        this.setActiveShader(this.terrainShader);

        this.terrainTex.bind(0);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.REPEAT);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.REPEAT);
        this.terrainMap.bind(1);
        this.terrainAlt.bind(2);

        // ---- BEGIN Primitive drawing section
        this.pushMatrix();
        this.rotate(-0.5 * Math.PI, 1, 0, 0);
        this.scale(60, 60, 1);
        this.plane.display();
        this.popMatrix();
        this.setDefaultAppearance();

        this.setActiveShader(this.defaultShader);

        this.pushMatrix();
        this.scale(0.8, 0.8, 0.8);
        this.translate(18, 0, -4);
        this.rotate(Math.PI / 2 + 0.3, 0, 1, 0);
        this.forest.display();
        this.popMatrix();

        this.pushMatrix();
        this.scale(0.7, 0.7, 0.7);
        this.translate(25, 0, 0);
        this.rotate(-Math.PI / 2, 0, 1, 0);
        this.house.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-9, -3, 11);
        this.scale(1.2, 1.2, 1.2);
        this.rotate(-Math.PI / 2, 1, 0, 0);
        this.nest.display();
        this.popMatrix();
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

        // Update all lights used
        this.lights[0].update();

        // Apply default appearance
        this.setDefaultAppearance();

        // this.appearance.apply();
        this.setActiveShader(this.terrainShader);

        this.terrainTex.bind(0);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.REPEAT);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.REPEAT);
        this.terrainMap.bind(1);
        this.terrainAlt.bind(2);

        // this.appearance.apply();

        // this.terrainMap.apply();

        // Apply default appearance

        // ---- BEGIN Primitive drawing section
        this.pushMatrix();
        this.rotate(-0.5 * Math.PI, 1, 0, 0);
        this.scale(60, 60, 1);
        this.plane.display();
        this.popMatrix();
        this.setDefaultAppearance();
        this.setActiveShader(this.defaultShader);
        this.cenario(); // desenha cenario

        this.displayLightnings();
        // this.house.display();
        // ---- END Primitive drawing section
    }
}
