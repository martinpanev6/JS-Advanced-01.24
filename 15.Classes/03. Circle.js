class Circle{

    r;

    constructor(r){
        this.radius = r;
    }

    get area(){
        return Math.PI * (this.radius ** 2);
    }

    get diameter(){
        return this.radius * 2;
    }

    set diameter(value){
        this.radius = value / 2;
    }
}