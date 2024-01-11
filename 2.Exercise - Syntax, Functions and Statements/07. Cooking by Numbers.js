function cookingByNums(numAsStr, ...opAsArr){

    
    let operations = {
        chop: (num) => num / 2,
        dice: (num) => Math.sqrt(num),
        spice: (num) => num + 1,
        bake: (num) => num * 3,
        fillet: (num) => num * 0.8
    }

    let num = Number(numAsStr);

    opAsArr.forEach(el => {
        num = operations[el](num);
        console.log(num);
    })

    /*for(let operation of opAsArr){
        switch(operation){
            case 'chop':
                num /= 2;
                break;
            case 'dice':
                num = Math.sqrt(num);
                break;
            case 'spice':
                num += 1;
                break;
            case 'bake':
                num *= 3;
                break;
            case 'fillet':
                num *= 0.8
                break;
        }
        console.log(num);
    }*/
}

cookingByNums('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
//cookingByNums('32', 'chop', 'chop', 'chop', 'chop', 'chop');