/**
* MyPrism
* @constructor
*/
/* eslint-disable no-undef */
class MyPrism extends CGFobject {
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

        let ang = 0;
        let alphaAng = 2 * Math.PI / this.slices;

        for (let i = 0; i < this.slices; i++) {
            let sa = this.radius * Math.sin(ang);
            let saa = this.radius * Math.sin(ang + alphaAng);
            let ca = this.radius * Math.cos(ang);
            let caa = this.radius * Math.cos(ang + alphaAng);

            this.vertices.push(ca, 0, sa);
            this.vertices.push(caa, 0, saa);
            this.vertices.push(ca, this.height, sa);
            this.vertices.push(caa, this.height, saa);

            sa = Math.sin(ang + alphaAng / 2);
            ca = Math.cos(ang + alphaAng / 2);

            this.normals.push(ca, 0, sa);
            this.normals.push(ca, 0, sa);
            this.normals.push(ca, 0, sa);
            this.normals.push(ca, 0, sa);

            this.indices.push(4 * i + 2, 4 * i + 1, 4 * i);
            this.indices.push(4 * i + 2, 4 * i + 3, 4 * i + 1);

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
