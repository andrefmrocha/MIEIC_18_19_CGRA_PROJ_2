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
        this.terrain = new MyTerrain(this);

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

        this.redFeather = new CGFappearance(this);
        this.redFeather.setAmbient(0.9, 0.8, 0.8, 1);
        this.redFeather.setDiffuse(0.9, 0.9, 0.9, 1);
        this.redFeather.setSpecular(0.1, 0.1, 0.1, 1);
        this.redFeather.setShininess(10.0);
        this.redFeather.loadTexture('images/red_feathers.jpg');

        this.red = new CGFappearance(this);
        this.red.setAmbient(0.9, 0.1, 0.1, 1);
        this.red.setDiffuse(0.9, 0.1, 0.1, 1);
        this.red.setSpecular(0.0, 0.0, 0.0, 1);
        this.red.setShininess(120);

        this.orange = new CGFappearance(this);
        this.orange.setAmbient(0.9, 0.5, 0.1, 1);
        this.orange.setDiffuse(0.9, 0.5, 0.1, 1);
        this.orange.setSpecular(0.0, 0.0, 0.0, 1);
        this.orange.setShininess(120);

        this.yellow = new CGFappearance(this);
        this.yellow.setAmbient(0.9, 0.9, 0.1, 1);
        this.yellow.setDiffuse(0.9, 0.9, 0.1, 1);
        this.yellow.setSpecular(0.0, 0.0, 0.0, 1);
        this.yellow.setShininess(120);

        this.black = new CGFappearance(this);
        this.black.setAmbient(0, 0, 0, 1);
        this.black.setDiffuse(0, 0, 0, 1);
        this.black.setSpecular(0.0, 0.0, 0.0, 1);
        this.black.setShininess(120);

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

        this.materialHillsBk = new CGFappearance(this);
        this.materialHillsBk.setAmbient(0.9, 0.9, 0.9, 1);
        this.materialHillsBk.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialHillsBk.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialHillsBk.setShininess(10.0);
        this.materialHillsBk.loadTexture('images/skybox/hills_bk.jpg');

        this.materialHillsFt = new CGFappearance(this);
        this.materialHillsFt.setAmbient(0.9, 0.9, 0.9, 1);
        this.materialHillsFt.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialHillsFt.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialHillsFt.setShininess(10.0);
        this.materialHillsFt.loadTexture('images/skybox/hills_ft.jpg');

        this.materialHillsLf = new CGFappearance(this);
        this.materialHillsLf.setAmbient(0.9, 0.9, 0.9, 1);
        this.materialHillsLf.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialHillsLf.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialHillsLf.setShininess(10.0);
        this.materialHillsLf.loadTexture('images/skybox/hills_lf.jpg');

        this.materialHillsRf = new CGFappearance(this);
        this.materialHillsRf.setAmbient(0.9, 0.9, 0.9, 1);
        this.materialHillsRf.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialHillsRf.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialHillsRf.setShininess(10.0);
        this.materialHillsRf.loadTexture('images/skybox/hills_rt.jpg');

        this.materialHillsUp = new CGFappearance(this);
        this.materialHillsUp.setAmbient(0.9, 0.9, 0.9, 1);
        this.materialHillsUp.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialHillsUp.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialHillsUp.setShininess(10.0);
        this.materialHillsUp.loadTexture('images/skybox/hills_up.jpg');

        this.materialHillsDn = new CGFappearance(this);
        this.materialHillsDn.setAmbient(0.9, 0.9, 0.9, 1);
        this.materialHillsDn.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialHillsDn.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialHillsDn.setShininess(10.0);
        this.materialHillsDn.loadTexture('images/skybox/hills_dn.jpg');

        this.terrainTex = new CGFtexture(this, 'images/terrain2.jpg');
        this.terrainMap = new CGFtexture(this, 'images/heightmap2.jpg');
        this.terrainAlt = new CGFtexture(this, 'images/altimetry.png');

        this.waterTex = new CGFtexture(this, 'images/water.jpg');

        this.texture = this.terrainTex;

        this.appearance.setTexture(this.terrainTex);
        this.appearance.setTextureWrap('REPEAT', 'REPEAT');

        this.terrainShader = new CGFshader(this.gl, 'shaders/terrain.vert', 'shaders/terrain.frag');
        this.waterShader = new CGFshader(this.gl, 'shaders/water.vert', 'shaders/water.frag');

        this.terrainShader.setUniformsValues({ terrainTex: 0, terrainMap: 1, terrainAlt: 2 });
        this.waterShader.setUniformsValues({ timeFactor: 0, waterTex: 1 });

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
        this.pool = new MyPool(this, 3, 6);
        this.duck = new MyRubberDuck(this);
        this.skybox = new MyCubeMapDay(this, 156);
        // this.branch = new MyTreeBranch(this);2

        this.small_ducks = [];
        for (let i = 0; i < 1; i++) {
            this.small_ducks.push(new MyRubberDuck(this, this.white_lightning));
        }

        this.feather = new MyFeather(this);

        this.lightnings = [];

        this.setUpdatePeriod(1000 / 30);

        for (let i = 0; i < 6; i++) {
            this.branches.push(new MyTreeBranch(this, {
                x: Math.floor(Math.random() * Math.floor(14) + 7),
                z: Math.floor(Math.random() * Math.floor(20) - 10),
                height: 1
            }));
        }

        this.nestCoords = {
            x: -8,
            z: 11
        };
    }
    initLights () {
        this.lights[0].setPosition(15, 50, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].setAmbient(0.7, 0.7, 0.7, 1);
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
        let delta = currTime - this.time;
        this.time = currTime;
        this.bird.update(this.time);
        if (this.gui.isKeyPressed('KeyW')) {
            this.bird.accelerate(0.05);
        } else if (this.gui.isKeyPressed('KeyS')) {
            this.bird.accelerate(-0.05);
        } else if (this.gui.isKeyPressed('KeyD')) {
            this.bird.turn(-0.1);
        } else if (this.gui.isKeyPressed('KeyA')) {
            this.bird.turn(0.1);
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
        } else if (this.gui.isKeyPressed('KeyO')) {
            this.openGarage(delta);
        } else if (this.gui.isKeyPressed('KeyC')) {
            this.closeGarage(delta);
        }

        if (this.house.doorOpening === true) {
            this.house.update(delta);
        } else if (this.house.doorClosing === true) {
            this.house.update(delta);
        }

        this.waterShader.setUniformsValues({ timeFactor: currTime / 100 % 1000 });

        this.pushMatrix();
        this.scale(0.3,0.3,0.3);
        for (let i = 0; i < this.small_ducks.length; i++) {
          this.small_ducks[i].display(this.time);
        }
        this.popMatrix();

    }

    openGarage (delta) {
        console.log('Open the door!', delta);
        if (this.house.doorOpening === false) {
            // this.house.garageY = -1;
            this.house.openDoor();
        }
    }

    closeGarage (delta) {
        console.log('Close the door!', delta);
        if (this.house.doorClosing === false) { this.house.closeDoor(); }
    }

    displayLightnings (time) {
        for (let i = 0; i < this.lightnings.length / 4.0; i = i + 4) {
            this.pushMatrix();
            this.rotate(this.lightnings[i + 1], 0, 1, 0);
            this.rotate(Math.PI, 1, 0, 0);
            this.translate(this.lightnings[i + 2], -17, this.lightnings[i + 3]);
            this.lightnings[i].display(time);
            this.popMatrix();
            if (this.lightnings[i].f > this.lightnings[i].axiom.length + 100) {
                this.lightnings.splice(i, 4);
                i = i - 4;
            }
        }
    }

    cenario () {
        this.pushMatrix();
        this.bird.display();
        this.popMatrix();

        this.branches.forEach(value => {
            value.display();
        });
        this.setActiveShader(this.terrainShader);

        this.terrainTex.bind(0);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.REPEAT);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.REPEAT);
        this.terrainMap.bind(1);
        this.terrainAlt.bind(2);

        // ---- BEGIN Primitive drawing section
        this.terrain.display();
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
        this.translate(-9, -1.5, 11);
        this.scale(1.2, 1.2, 1.2);
        this.rotate(-Math.PI / 2, 1, 0, 0);
        this.nest.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(12, 0.5, 8);
        this.pool.display();
        this.scale(0.4, 0.4, 0.4);
        this.duck.display();
        this.popMatrix();


        this.pushMatrix();
        this.scale(-1, 1, 1);
        this.skybox.display();
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
        this.cenario(); // desenha cenario

        this.displayLightnings(this.time);
        // this.house.display();
        // ---- END Primitive drawing section
    }
}
