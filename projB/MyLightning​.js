class MyLightning​ extends MyLSystem {
	constructor(scene) {
        super(scene);
				this.axiom = "X";
				this.productions = {
						"F" : "FF",
						"X": [
						 "F[-X][X]F[-X]+FX]"],
				}
				this.angle = 25  * Math.PI / 180.0;
        this.iterations = 3;
        this.scale = Math.pow(0.5, this.iterations-1)
				this.grammar = {
					F : new MyRectangle(this.scene),
					X : new MyRectangle(this.scene)
				};
				this.iterate()
    }

}
