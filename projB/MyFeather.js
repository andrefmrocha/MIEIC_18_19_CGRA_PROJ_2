class MyFeather extends CGFobject{
  constructor(scene){
    super(scene);
    this.step = 0.05;
    this.feather = new MyPointingShape(scene);
  }
  display(){
    this.scene.pushMatrix();
    this.scene.scale(3,3,3);
    this.scene.scale(2,1,1);
    this.scene.redFeather.apply();
    this.feather.display();
    this.scene.popMatrix();
  }
}
