/* eslint-disable no-tabs */
/**
 * MyQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
/* eslint-disable no-undef */
class MyQuad extends CGFobject {
    constructor (scene, coords , x , y) {
        super(scene);
        if(x == undefined)
          this.x = 1;
        else {
          this.x = x;
        }
        if(y == undefined)
          this.y = 1;
        else {
          this.y = y;
        }
        this.initBuffers();
        // eslint-disable-next-line eqeqeq
        if (coords != undefined) { this.updateTexCoords(coords); }
    }

    initBuffers () {
        this.vertices = [
            -0.5*this.x, -0.5*this.y, 0, // 0
            0.5*this.x, -0.5*this.y, 0, // 1
            -0.5*this.x, 0.5*this.y, 0, // 2
            0.5*this.x, 0.5*this.y, 0, // 3
            -0.5*this.x, -0.5*this.y, 0, // 0
            0.5*this.x, -0.5*this.y, 0, // 1
            -0.5*this.x, 0.5*this.y, 0, // 2
            0.5*this.x, 0.5*this.y, 0 // 3
        ];

        // Counter-clockwise reference of vertices
        this.indices = [
            0, 1, 2,
            1, 3, 2
        ];

        // Facing Z positive
        this.normals = [
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
        ];

        /*
		Texture coords (s,t)
		+----------> s
        |
        |
		|
		v
        t
        */

        this.texCoords = [
            0, 1,
            1, 1,
            0, 0,
            1, 0
        ];
        this.primitiveType = this.scene.gl.TRIANGLES;
        let tmp = this.indices.slice(0);
        tmp.reverse();
        this.indices = this.indices.concat(tmp);
        this.initGLBuffers();
    }

    /**
	 * @method updateTexCoords
	 * Updates the list of texture coordinates of the quad
	 * @param {Array} coords - Array of texture coordinates
	 */
    updateTexCoords (coords) {
        this.texCoords = [...coords];
        this.updateTexCoordsGLBuffers();
    }
}
