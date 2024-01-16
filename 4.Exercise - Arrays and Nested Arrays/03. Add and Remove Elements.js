function solve(array){

    let current = 1;
    let result = [];
    for(let el of array){
        if(el == 'add'){
            result.push(current);
        }else{
            result.pop();
        }
        current++;
    }

    if(result.length < 1){
        console.log('Empty');
    }else{
        for(let num of result){
            console.log(num);
        }
    }
}

solve(['add', 'add', 'remove', 'add', 'add']);