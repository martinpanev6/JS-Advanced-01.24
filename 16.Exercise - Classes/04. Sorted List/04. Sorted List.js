class List{
    constructor(){
        this.arr = [];
        this.size = 0;
    }

    add(element){
        this.arr.push(element);
        this.arr.sort((a, b) => a - b);
        this.size++;
        return this;
    }

    remove(idx){
        if(idx < 0 || idx >= this.arr.length){
            return;
        }
        this.arr.splice(idx, 1);
        this.size--;
        return this;
    }

    get(idx){
        if(idx < 0 || idx >= this.arr.length){
            return;
        }
        return this.arr[idx];
    }

}

let list = new List();

list.add(5);

list.add(6);

list.add(7);

console.log(list.get(1));
list.remove(1); 
console.log(list.get(1));