class MyNest extends CGFobject{

  constructor(scene){
    super(scene);
    this.branch = new MyCylinder(scene,5,0.1,1.6);
  }

  display(){
    this.scene.materialWood.apply();
    this.scene.pushMatrix();
    for(var z = 0; z < 5 ; z++){
      this.scene.scale(1,1,1);
      this.scene.translate(0,0,0.12);
      this.scene.rotate(Math.sqrt(3),0,0,1);
      for(var ang = 0; ang < Math.PI * 2; ang+= Math.PI/(2+z*0.5)){
        this.scene.pushMatrix();
        this.scene.rotate(ang+Math.sqrt(3)*0.1,0,0,1);
        this.scene.translate(0.13*z,-0.8,0)
        this.branch.display();
        this.scene.popMatrix();
      }
    }
    this.scene.popMatrix();


  }

}