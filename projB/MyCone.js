/**
* MyCone
* @constructor
*/
/* eslint-disable no-undef */
class MyCone extends CGFobject {
    constructor (scene, slices, radius, height) {
        super(scene);
        this.slices = slices;
        this.radius = radius;
        this.height = height;
        this.initBuffers();
    }
    initBuffers () {
        this.vertices = [];
        this.indices = [];
        this.normals = [];

        this.texCoords = [];

        let ang = 0;
        let alphaAng = 2 * Math.PI / this.slices;

        for (let i = 0; i < this.slices; i++) {
            this.vertices.push(this.radius * Math.cos(ang), 0, this.radius * -Math.sin(ang));
            this.indices.push(i, (i + 1) % this.slices, this.slices);
            this.normals.push(Math.cos(ang), Math.cos(Math.PI / 4.0), -Math.sin(ang));
            ang += alphaAng;
            // this.texCoords.push(i/this.slices , 1 , ((i+1))/this.slices , 1 , ((i+1))/this.slices , i/this.slices , (i)/this.slices , i/this.slices );
            // this.texCoords.push(i/this.slices , 0 , (i+1)/this.slides , 0, (i+0.5)/this.slides , 1);
            // this.texCoords.push(1/this.slices,0,2/this.slices,1,0.5,0);
            this.texCoords.push(i / this.slices, 1);
        }
        // this.texCoords.push(1/this.slices,0,2/this.slices,1,0.5,0);
        // this.texCoords.push(1/this.slices,0,2/this.slices,1,0.5,0);
        // this.texCoords.push(0.5,0,0,1,1,1);
        this.texCoords.push(0.5, 0);
        this.vertices.push(0, this.height, 0);
        this.normals.push(0, this.height, 0);

        let tmp = this.indices.slice(0);
        tmp.reverse();
        this.indices = this.indices.concat(tmp);

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

    updateBuffers (complexity) {
        this.slices = 3 + Math.round(9 * complexity); // complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}
