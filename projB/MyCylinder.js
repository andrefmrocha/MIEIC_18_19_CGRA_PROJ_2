/**
* MyCylinder
* @constructor
*/
/* eslint-disable no-undef */
class MyCylinder extends CGFobject {
    constructor (scene, slices, radius, height) {
        super(scene);
        this.slices = slices;
        this.radius = radius;
        this.height = height;
        this.initBuffers();
    }
    initBuffers () {
        this.texCoords = [];

        this.vertices = [];
        this.indices = [];
        this.normals = [];

        let ang = 0;
        let alphaAng = 2 * Math.PI / this.slices;

        let sa = this.radius * Math.sin(ang);
        let ca = this.radius * Math.cos(ang);

        this.vertices.push(ca, 0, sa);
        this.vertices.push(ca, this.height, sa);

        this.normals.push(ca, 0, sa);
        this.normals.push(ca, 0, sa);

        ang += alphaAng;

        for (let i = 0; i < this.slices; i++) {
            sa = this.radius * Math.sin(ang);
            ca = this.radius * Math.cos(ang);

            this.vertices.push(ca, 0, sa);
            this.vertices.push(ca, this.height, sa);

            this.normals.push(ca, 0, sa);
            this.normals.push(ca, 0, sa);

            this.indices.push(2 * i + 1, 2 * i + 2, 2 * i);
            this.indices.push(2 * i + 2, 2 * i + 3, 2 * i + 1);

            this.texCoords.push(i / this.slices, 1, (i + 1) / this.slices, 1, (i + 1) / this.slices, 0, (i) / this.slices, 0);

            ang += alphaAng;
        }

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
