function magicMatrices(matrix){

    let isMagical = true;
    for(let i = 0; i < matrix.length - 1; i++){
       let rowOne = matrix.reduce((acc, value, index) => {
        acc += value[i];
        return acc;
       }, 0);
       let rowTwo = matrix.reduce((acc, value, index) => {
        acc += value[i + 1];
        return acc;
       }, 0);
       let colOne = matrix[i].reduce((acc, value) => acc += value);
       let colTwo = matrix[i + 1].reduce((acc, value) => acc += value);
       if(rowOne != rowTwo || colOne != colTwo){
        return false;
       }else{
        return true;
       }
    }
}

magicMatrices([[4, 5, 6],
               [6, 5, 4],
               [5, 5, 5]]);