/* eslint-disable no-undef */

class MyCircle extends CGFobject {
    constructor (scene, n) {
        super(scene);
        this.intBuffers(n);
    }
    intBuffers (n) {
        this.indices = [];
        this.vertices = [];
        this.normals = [];
        this.texCoords = [];
        for (let i = 0; i < n; i++) {
            this.vertices.push(Math.cos(i * 2 * Math.PI / n), 0, Math.sin(i * 2 * Math.PI / n));
            this.indices.push((i + 1) % n, i, n);
            this.normals.push(Math.cos(i * 2 * Math.PI / n), 0, Math.sin(i * 2 * Math.PI / n));
            this.texCoords.push(Math.cos(i * 2 * Math.PI / n), 0, Math.sin(i * 2 * Math.PI / n));
        }
        this.normals.push(0, 0, 0);
        this.vertices.push(0, 0, 0);
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}
