function getFibonator(){

    let firstNum = 0;
    let secondNum = 1;
    return function(){
        let res = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = res;
        return firstNum;
    }
}