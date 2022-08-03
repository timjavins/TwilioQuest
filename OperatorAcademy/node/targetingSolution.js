class TargetingSolution{
    constructor(target){
        this.x = target.x;
        this.y = target.y;
        this.z = target.z;
    }
    target(){
        let coords = "(" + this.x + ", " + this.y + ", " + this.z + ")";
        return coords;
    }
}

const asdf = new TargetingSolution({
    x: 1,
    y: 2,
    z: 3,
});

/*
console.log(asdf);
console.log(asdf.y);
*/