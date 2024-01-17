function countEqualNeighborPairs(matrix) {
    let equalPairsCount = 0;

    // Iterate through rows
    for (let row = 0; row < matrix.length; row++) {
        // Iterate through columns
        for (let col = 0; col < matrix[row].length; col++) {
            // Check right neighbor
            if (col < matrix[row].length - 1 && matrix[row][col] === matrix[row][col + 1]) {
                equalPairsCount++;
            }

            // Check bottom neighbor
            if (row < matrix.length - 1 && matrix[row][col] === matrix[row + 1][col]) {
                equalPairsCount++;
            }
        }
    }

    console.log(equalPairsCount);
}
countEqualNeighborPairs([['2', '3', '4', '7', '0'],

['4', '0', '5', '3', '4'],

['2', '3', '5', '4', '2'],

['9', '8', '7', '5', '4']]);