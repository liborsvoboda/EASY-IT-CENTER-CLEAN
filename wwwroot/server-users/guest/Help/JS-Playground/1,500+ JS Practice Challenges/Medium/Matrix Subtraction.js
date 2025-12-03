/*

Matrix Subtraction
Two matrices must have an equal number of rows and columns to be subtracted. In which case, the subtracted of two matrices A and B will be a matrix which has the same number of rows and columns as A and B.

The result of the subtraction of A and B, denoted A - B is computed by subtracting corresponding elements of A and B.

Create a function that takes 2 x 2D array (matrix A, matrixB) as an argument and returns a 2D array (matrix C). C = A-B.

Examples
sub([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
], [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]) ➞ [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]

*/






//#############################################################
//#  SOLUTION 1 
//#############################################################


const sub = (a, b) => a.map((row, r) => row.map((n, c) => n - b[r][c]));


const sub = (A1, A2) => A1.map((a, i) => a.map((b, j) => b - A2[i][j]))


const sub = (a, b) =>
    a.map((row, index) => row.map((x, i) => x - b[index][i]))

//#############################################################
//#  SOLUTION 2  
//#############################################################


function sub(A1, A2) {

    let C = [],
        row = [];

    for (let i = 0; i < A1.length; i++) {
        row = [];
        for (let j = 0; j < A1[i].length; j++) {
            row.push(A1[i][j] - A2[i][j])
        }
        C.push(row)
    }

    return C
}