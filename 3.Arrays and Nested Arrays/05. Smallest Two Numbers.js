function smallestTwoNUms(arr){
    arr.sort((a, b) => a - b);
    console.log(`${arr[0]} ${arr[1]}`);
}

smallestTwoNUms([2, 9, 1, 8, -4]);