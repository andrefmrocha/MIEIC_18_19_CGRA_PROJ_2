

class MyForest extends CGFobject {
    constructor (scene , n_x , n_y) {
        super(scene);
        this.n_x = n_x;
        this.n_y = n_y;
        this.trees = [];
        this.rand = []
        for(var i = 0; i < n_x * n_y ; i++){
          this.trees.push(new MyTree(scene));
        }
        for(var i = 0; i < n_x * n_y *2 ; i++){
          this.rand.push(Math.random() * 2 -1);
        }
        this.delta = 3;
    }

    display(){
      this.scene.pushMatrix();
      for(var y = 0 ; y < this.n_y ; y++ ){
        for(var x = 0; x < this.n_x ; x++){
          this.scene.pushMatrix();
          this.scene.translate(this.rand[(x + y * this.n_x)*2] , 0 , this.rand[(x + y * this.n_x)*2 +1]);
          this.trees[x + y * this.n_x].display();
          this.scene.popMatrix();
          this.scene.translate(this.delta,0,0);
        }
        this.scene.translate(-this.n_x*this.delta, 0 , this.delta);
      }
      this.scene.popMatrix();
    }
}
