class MyLeaf extends CGFobject{
  constructor(scene){
    super(scene);
    this.step = 0.05;
    this.initBuffers();
  }
  initBuffers(){

      this.vertices = [];
      this.indices = [];
      this.normals = [];
      this.texCoords = [];
      this.vertices.push(0,0,0);
      this.normals.push(0,0,1);
      this.texCoords.push(0,0);
      for(var x = this.step,i = 1; x < 1 + this.step ; x+=this.step,i++){
        this.vertices.push(x,1.35*(Math.cos(Math.pow(x,x)) - 0.54) , 0);
        this.normals.push(0,0,1);
        this.indices.push(0,i-1,i);
        this.texCoords.push(x,(Math.cos(Math.pow(x,x)) - 0.54));
      }
      for(var x = this.step,i = this.normals.length/3; x < 1 + this.step ; x+=this.step,i++){
        this.vertices.push(x,-1.35*(Math.cos(Math.pow(x,x)) - 0.54) , 0);
        this.normals.push(0,0,1);
        this.indices.push(0,i-1,i);
        this.texCoords.push(x,(Math.cos(Math.pow(x,x)) - 0.54));
      }

      let tmp = this.indices.slice(0);
      tmp.reverse();
      this.indices = this.indices.concat(tmp);

      this.primiteType = this.scene.gl.TRIANGLES;

      this.initGLBuffers();
  }

  display(){
    this.scene.materialLeaf.apply();
    this.scene.pushMatrix();
    this.scene.scale(2,2,2);
    super.display();
    this.scene.popMatrix();
  }

}
