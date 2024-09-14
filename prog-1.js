function addMatrices(matrix1, matrix2) {
    return matrix1.map((row, i) => row.map((val, j) => val + matrix2[i][j]));
}

// Function to subtract two matrices
function subtractMatrices(matrix1, matrix2) {
    return matrix1.map((row, i) => row.map((val, j) => val - matrix2[i][j]));
}

// Function to multiply two matrices
function multiplyMatrices(matrix1, matrix2) {
    const result = Array(matrix1.length).fill().map(() => Array(matrix2[0].length).fill(0));
    for (let i = 0; i < matrix1.length; i++) {
        for (let j = 0; j < matrix2[0].length; j++) {
            for (let k = 0; k < matrix1[0].length; k++) {
                result[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }
    return result;
}

// Function to calculate the trace of a matrix
function traceMatrix(matrix) {
    return matrix.reduce((sum, row, i) => sum + row[i], 0);
}

// Example usage
const matrix1 = [
    [1, 2],
    [3, 4]
];

const matrix2 = [
    [5, 6],
    [7, 8]
];

console.log('Matrix Addition:', addMatrices(matrix1, matrix2));
console.log('Matrix Subtraction:', subtractMatrices(matrix1, matrix2));
console.log('Matrix Multiplication:', multiplyMatrices(matrix1, matrix2));
console.log('Trace of Matrix1:', traceMatrix(matrix1));