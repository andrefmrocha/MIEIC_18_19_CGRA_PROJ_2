/**
* MyInterface
* @constructor
*/
/* eslint-disable no-undef */
class MyInterface extends CGFinterface {
    // eslint-disable-next-line no-useless-constructor
    constructor () {
        super();
    }

    init (application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();

        let obj = this;
        this.model = {};
        this.initKeys();
        return true;
    }
    initKeys () {
        this.scene.gui = this;
        this.processKeyboard = function () { };
        this.model.activeKeys = {};
    }

    processKeyDown (event) {
        this.model.activeKeys[event.code] = true;
    };

    processKeyUp (event) {
        this.model.activeKeys[event.code] = false;
    };

    isKeyPressed (keyCode) {
        return this.model.activeKeys[keyCode] || false;
    }
}
