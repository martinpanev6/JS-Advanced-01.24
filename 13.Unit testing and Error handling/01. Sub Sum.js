function solve(arr, startIdx, endIdx){

    if(!Array.isArray(arr)){
        return NaN;
    }

    if(startIdx < 0){
        startIdx = 0;
    }

    if(endIdx > arr.length - 1){
        endIdx = arr.length - 1;
    }

    let sum = 0;

    for(let i = startIdx; i <= endIdx; i++){
        sum += arr[i]
    }

    return sum;
}