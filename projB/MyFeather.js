class MyFeather extends CGFobject{
  constructor(scene){
    super(scene);
    this.step = 0.05;
    this.feather = new MyLeaf(scene);
  }
  display(){
    this.scene.pushMatrix();
    this.scene.scale(10,10,10);
    this.scene.scale(2,1,1);
    this.feather.display();
    this.scene.popMatrix();
  }
}
