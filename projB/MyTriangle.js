// eslint-disable-next-line no-undef
class MyTriangle extends CGFobject {
    constructor (scene, coords) {
        super(scene);
        this.initBuffers();
    }
    initBuffers () {
        this.texCoords = [0, 0, 0, 1, 1, 1];

        this.vertices = [1, 0, 0, 0, 1, 0, 0, 0, 0];

        this.indices = [2, 1, 0];

        this.normals = [];
        for (let i = 0; i < 3; i++) {
            this.normals.push(0, 0, -1);
        }
        for (let i = 0; i < 3; i++) {
            this.normals.push(0, 0, 1);
        }

        let tmp = this.indices.slice(0);
        tmp.reverse();
        this.indices = this.indices.concat(tmp);

        this.primiteType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }
    updateTexCoords (coords) {
        this.texCoords = [...coords];
        this.updateTexCoordsGLBuffers();
    }
}
