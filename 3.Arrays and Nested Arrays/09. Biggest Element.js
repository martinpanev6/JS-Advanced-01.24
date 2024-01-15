function biggestEl(matrix){

    let max = matrix[0][0];

    for(let el of matrix){
        for(let num of el){
            if(num > max){
                max = num;
            }
        }
    }
    console.log(max);
}

biggestEl();