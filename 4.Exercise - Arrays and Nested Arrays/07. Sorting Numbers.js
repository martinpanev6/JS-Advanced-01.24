function sortingNums(arr){

    let lowertoBiggest = arr.sort((a, b) => a - b);
    let result = [];

    while(lowertoBiggest.length > 0){
        result.push(lowertoBiggest.shift());
        result.push(lowertoBiggest.pop());
    }
    return result;
}

sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 3]);