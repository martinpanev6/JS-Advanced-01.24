function diagonalAttack(arr){

    let matrix = [];
    let firstDiag = 0;
    let secondDiag = 0;

    for(let element of arr){
        let part = element.split(' ').map(Number);
        matrix.push(part);
    }
    
    for(let i = 0; i < matrix.length; i++){
        firstDiag += matrix[i][i];
        secondDiag += matrix[i][matrix.length - 1 - i];
    }
    if(firstDiag == secondDiag){
        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix[0].length; j++){
               if (i !== j && i !== matrix.length - 1 - j) {
                matrix[i][j] = firstDiag;
            }
            }
        }
    }
    
    for(let element of matrix){
        console.log(element.join(' '));
    }
}

diagonalAttack(['5 3 12 3 1',

'11 4 23 2 5',

'101 12 3 21 10',

'1 4 5 2 2',

'5 22 33 11 1']);