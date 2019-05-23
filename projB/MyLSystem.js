class MyLSystem extends CGFobject {
	constructor(scene) {
        super(scene);
    }

    // desenvolve o axioma ao longo de uma sequência de desenvolvimento com um determinado número de iterações
    iterate(){
      var i, j;
      for (i=0; i < this.iterations; ++i){
        var newString = "";

          // substitui cada um dos caracteres da cadeia de caracteres de acordo com as produções
          for (j=0; j<this.axiom.length; ++j){
            var axiomProductions=this.productions[this.axiom[j]];
            // aplicar producoes
            if (axiomProductions === undefined){
              newString += this.axiom[j];
            }else if (axiomProductions.length == 1) {
              // caso apenas exista uma producao, aplica-a
              newString += axiomProductions[0];
            } else {
              // sistema estocastico - varias producoes sao aplicaveis - seleciona aleatoriamente
              newString += axiomProductions[Math.floor(Math.random() * axiomProductions.length)];
            }
          }

          this.axiom = newString;
        }
        console.log("Final: "+this.axiom);
        console.log("(length: "+this.axiom.length+")");
      }

    display(){
      this.scene.pushMatrix();
      this.scene.scale(this.scale, this.scale, this.scale);

      var i;

      // percorre a cadeia de caracteres
      for (i=0; i<this.axiom.length; ++i){

          // verifica se sao caracteres especiais
          switch(this.axiom[i]){
              case "+":
                  // roda a esquerda
                  this.scene.rotate(this.angle, 0, 0, 1);
                  break;

              case "-":
                  // roda a direita
                  this.scene.rotate(-this.angle, 0, 0, 1);
                  break;


							case "^":
									// roda a direita
									this.scene.rotate(this.angle, 0, 1, 0);
									break;
							case "&":
			             // roda a direita
			             this.scene.rotate(-this.angle, 0, 1, 0);
			             break;
              case "\\":
                  this.scene.rotate(this.angle, 1, 0, 0);
                  break;

              case "/":
                  // roda a direita
                  this.scene.rotate(-this.angle, 1, 0, 0);
                  break;


              case "[":
                  // push
                  this.scene.pushMatrix();
                  break;

              case "]":
                  // pop
                  this.scene.popMatrix();
                  break;

              // processa primitiva definida na gramatica, se existir
              default:
                  var primitive=this.grammar[this.axiom[i]];

                  if ( primitive )
                  {
                      primitive.display();
                      this.scene.translate(0, 1, 0);
                  }
                  break;
          }
      }
      this.scene.popMatrix();
  }
}
