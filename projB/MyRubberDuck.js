/* eslint-disable no-undef */
class MyRubberDuck extends CGFobject{
    constructor (scene, txt) {
        super(scene);
        this.circle = new MySphere(scene, 2);

        this.feet = new MyBirdFeet(scene);
        this.eye = new MyBirdEye(scene);
        this.nose = new MyBirdNose(scene);
        if(txt == undefined)
          this.txt = this.scene.yellow;
        else
          this.txt = txt
        this.ori = 0;

        this.axiom = 'F----F----F----F';
        this.productions = {
            'F': ['F----F++++F++++FF----F----F++++F']
        };
        this.angle = 22.5 * Math.PI / 180.0;
        this.iterations = 1;
        this.iterate();

        this.f = 0;
        this.time = 0;
        this.scale = 1;
        this.x = 0;
        this.y = 0;
    }

    display (time) {
        if (this.time == 0) { this.time = time; }
        this.aux_display(time);
        //this.display_duck();
    }

    aux_display (time) {

        let i;

        this.x = 0;
        this.y = 0;
        this.ori = 0;

        this.f = (((time - this.time) / 1000) * this.axiom.length) % this.axiom.length;

        //console.log(this.f);

        // percorre a cadeia de caracteres
        for (i = 0; i < this.f; ++i) {
            // verifica se sao caracteres especiais
            switch (this.axiom[i]) {
            case '+':
                // roda a esquerda
                //this.scene.rotate(this.angle, 0, 0, 1);
                this.ori+=this.angle;
                break;

            case '-':
                // roda a direita
                //this.scene.rotate(-this.angle, 0, 0, 1);
                this.ori-=this.angle;
                break;

                // processa primitiva definida na gramatica, se existir
            default:
                  //console.log("d");
                    //this.scene.translate(1, 0, 0);
                    this.x+=Math.cos(this.ori);
                    this.y+=Math.sin(this.ori);
                break;
            }
        }

        this.scene.pushMatrix();
        this.scene.scale(this.scale, this.scale, this.scale);
        this.scene.translate(this.x ,0,this.y);
        console.log(this.x,this.y);


        this.scene.pushMatrix();
        //this.scene.translate(this.x, this.birdHeight + this.y + this.animationY, this.z);

        this.txt.apply();
        this.scene.scale(0.3, 0.3, 0.3);
        //this.scene.scale(this.scene.scaleFactor, this.scene.scaleFactor, this.scene.scaleFactor);
        this.scene.rotate(this.ori, 0, 1, 0);
        this.scene.pushMatrix();
        this.scene.scale(1, 1, 2);
        this.circle.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0, 1.8, 2.5);
        this.scene.scale(1, 1, 1.3);
        this.scene.rotate(30, 1, 0, 0);
        this.circle.display();
        this.scene.popMatrix();

        this.scene.black.apply();
        this.scene.pushMatrix();
        this.feet.display();
        this.scene.translate(2, 0, 0);
        this.feet.display();
        this.eye.display();
        this.scene.translate(-1.5, 0, 0);
        this.eye.display();
        this.scene.orange.apply();
        this.nose.display();
        this.scene.popMatrix();

        this.scene.popMatrix();



        this.scene.popMatrix();

    }

    iterate(){
      var i, j;
      for (i=0; i < this.iterations; ++i){
        var newString = "";
          console.log("Iteration " , i);
          // substitui cada um dos caracteres da cadeia de caracteres de acordo com as produções
          for (j=0; j<this.axiom.length; ++j){
            var axiomProductions=this.productions[this.axiom[j]];            // aplicar producoes
            if (axiomProductions === undefined){
              newString += this.axiom[j];
            }else if (axiomProductions.length == 1) {
              console.log(axiomProductions.length);

              // caso apenas exista uma producao, aplica-a
              newString += axiomProductions[0];
            } else {
              console.log(axiomProductions.length);

              // sistema estocastico - varias producoes sao aplicaveis - seleciona aleatoriamente
              newString += axiomProductions[Math.floor(Math.random() * axiomProductions.length)];
            }
          }

          this.axiom = newString;
        }
        console.log("Rubber Duck Final: "+this.axiom);
        console.log("(length: "+this.axiom.length+")");
      }

    display_duck () {
        //console.log("a");
        this.scene.pushMatrix();
        //this.scene.translate(this.x, this.birdHeight + this.y + this.animationY, this.z);

        this.txt.apply();
        this.scene.scale(0.3, 0.3, 0.3);
        //this.scene.scale(this.scene.scaleFactor, this.scene.scaleFactor, this.scene.scaleFactor);
        this.scene.rotate(this.ori, 0, 1, 0);
        this.scene.pushMatrix();
        this.scene.scale(1, 1, 2);
        this.circle.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0, 1.8, 2.5);
        this.scene.scale(1, 1, 1.3);
        this.scene.rotate(30, 1, 0, 0);
        this.circle.display();
        this.scene.popMatrix();

        this.scene.black.apply();
        this.scene.pushMatrix();
        this.feet.display();
        this.scene.translate(2, 0, 0);
        this.feet.display();
        this.eye.display();
        this.scene.translate(-1.5, 0, 0);
        this.eye.display();
        this.scene.orange.apply();
        this.nose.display();
        this.scene.popMatrix();

        this.scene.popMatrix();

    }



}
