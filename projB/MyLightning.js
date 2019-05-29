class MyLightning extends MyLSystem {
    constructor (scene) {
        super(scene);
        this.axiom = 'X';
        this.productions = {
            'F': 'FFFF',
            'X': ['FFFF[-&X]FF[+X]+FFX', 'FFFF[X]FF[-^X]-FFX', 'FFF[-X]F[+X]']
        };
        this.angle = 25 * Math.PI / 180.0;
        this.iterations = 4;
        this.scale = Math.pow(0.8, this.iterations - 1);
        this.grammar = {
            F: new MyCylinder(this.scene, 5, 0.06, 2),
            X: new MyCylinder(this.scene, 5, 0.06, 2)
        };
        this.iterate();
        this.it = this.generator();
        this.f = 0;
    }

    display () {
        this.scene.white_lightning.apply();
        this.aux_display();
    }

    * generator () {
        let index = 0;
    	while (true) {
            index = index + 4;
            yield index;
        }
    }

    aux_display () {
        this.scene.pushMatrix();
        this.scene.scale(this.scale, this.scale, this.scale);

        let i;

        this.f = this.it.next().value;

        // percorre a cadeia de caracteres
        for (i = 0; i < this.axiom.length && i < this.f; ++i) {
            // verifica se sao caracteres especiais
            switch (this.axiom[i]) {
            case '+':
                // roda a esquerda
                this.scene.rotate(this.angle, 0, 0, 1);
                break;

            case '-':
                // roda a direita
                this.scene.rotate(-this.angle, 0, 0, 1);
                break;

            case '^':
                // roda a direita
                this.scene.rotate(this.angle, 0, 1, 0);
                break;
            case '&':
                // roda a direita
                this.scene.rotate(-this.angle, 0, 1, 0);
                break;
            case '\\':
                this.scene.rotate(this.angle, 1, 0, 0);
                break;

            case '/':
                // roda a direita
                this.scene.rotate(-this.angle, 1, 0, 0);
                break;

            case '[':
                // push
                this.scene.pushMatrix();
                break;

            case ']':
                // pop
                this.scene.popMatrix();
                break;

                // processa primitiva definida na gramatica, se existir
            default:
                var primitive = this.grammar[this.axiom[i]];

                if (primitive) {
                    primitive.display();
                    this.scene.translate(0, 1, 0);
                }
                break;
            }
        }
        this.scene.popMatrix();
    }
}
