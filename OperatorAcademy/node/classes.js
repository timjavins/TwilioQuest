class Materializer{
    constructor(target){
        this.target = target;
        this.activated = false;
    }
    activate(){
        return this.activated = true;
    }
    materialize(){
        if (this.activated === true) {
            return this.target;
        }
        return;
    }
}

let activated = false;

/*
let m = new Materializer("Your MOM!");
console.log(m);
console.log(m.activated);
m.activate();
console.log(m.activated);
console.log(m.materialize());
*/