function solve(arr){
    let result = [];
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){

        if(arr[i] >= max){
            result.push(arr[i]);
            max = arr[i];
        }
    }

    return result;

}

solve([20, 3, 8, 4, 10, 12, 3, 2, 24]);