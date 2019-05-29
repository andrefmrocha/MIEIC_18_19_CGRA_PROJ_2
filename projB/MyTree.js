class MyTree extends MyLSystem {
	constructor(scene) {
        super(scene);
				this.axiom = "FFX";
				this.productions = {
						"F" : "FF",
						"X": [
						 "[/X]F[-X]+F[+X]-X",
						 "[-X]&F[X][+F]+X",
						 "[+/X]&[&X]F[\X]&X",
						 "[^X]F&[/X]^F-[^X]X",
						 "[&-X]/F[&X]+X",
						 "[^\X]F[X]^F[++X]^X"
					 ],
				}
				this.angle = 30.0  * Math.PI / 180.0;
        this.iterations = 3;
        this.scale = Math.pow(0.8, this.iterations-1)
				this.grammar = {
					F : new MyBranch(this.scene),
					X : new MyLeaf(this.scene)
				};
				this.iterate()
    }

}
