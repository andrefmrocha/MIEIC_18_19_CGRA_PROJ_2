class MyBranch extends CGFobject{
  constructor(scene){
    super(scene);
    this.branch = new MyCylinder(scene,5,0.4,1.2);
  }
  display(){
    this.scene.materialWood.apply();
    this.branch.display();
  }
}
