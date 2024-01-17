function createSpiralMatrix(rows, cols) {
    const matrix = Array.from({ length: rows }, () => Array(cols).fill(0));

    let top = 0;
    let bottom = rows - 1;
    let left = 0;
    let right = cols - 1;

    let value = 1;

    while (top <= bottom && left <= right) {
        // Traverse top row
        for (let i = left; i <= right; i++) {
            matrix[top][i] = value++;
        }
        top++;

        // Traverse right column
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = value++;
        }
        right--;

        // Traverse bottom row
        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = value++;
        }
        bottom--;

        // Traverse left column
        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = value++;
        }
        left++;
    }

     for(let part of matrix){
        console.log(part.join(' '));
     }
}

createSpiralMatrix(5, 5)