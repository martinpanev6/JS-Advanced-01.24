function sameNums(wholeNum){

    let equalNums = true;
    let numAsStr = (wholeNum.toString());
    let sum = Number(numAsStr[0]);

    for(let i = 1; i < numAsStr.length; i++){

        if(numAsStr[i] != numAsStr[i - 1]){
            equalNums = false;
        }
        sum += Number(numAsStr[i]);
    }
    console.log(equalNums);
    console.log(sum);
}

sameNums(1234);