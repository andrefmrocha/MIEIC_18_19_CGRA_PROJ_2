class MyLeaf extends CGFobject{
  constructor(scene){
    super(scene);
    this.leaf = new MyParallelogram(scene);
  }
  display(){
    this.scene.pushMatrix();
    this.scene.scale(0.9,0.9,0.9);
    this.scene.materialLeaf.apply();
    this.leaf.display();
    this.scene.popMatrix()
  }
}
