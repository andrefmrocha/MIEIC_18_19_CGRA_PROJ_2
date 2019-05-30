class MyLeaf extends CGFobject{
  constructor(scene){
    super(scene);
    this.step = 0.05;
    this.leaf = new MyPointingShape(scene);
  }
  display(){
    this.scene.pushMatrix();
    this.scene.materialLeaf.apply();
    this.scene.scale(2,2,2);
    this.leaf.display();
    this.scene.popMatrix();
  }

}
