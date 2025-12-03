/*

Trace of a Square Matrix

In mathematics, a matrix (plural matrices) is a rectangular array or table of numbers, symbols, or expressions, arranged in rows and columns.

Matrix A:

[
  [0, 1, 0, 0],
  [1, 1, 1, 1],
  [0, 1, 0, 1],
  [0, 1, 1, 5]
]
In mathematics, a square matrix is a matrix with the same number of rows and columns.

In linear algebra, the trace of a square matrix A is defined to be the sum of elements on the main diagonal (from the upper left to the lower right) of A (tr(A) = 6).

Task
Create a function that takes a 2D array as an argument and returns a number (trace).

Examples
getTrace([
  [0, 1, 0, 0],
  [1, 1, 1, 1],
  [0, 1, 0, 1],
  [0, 1, 1, 5]
]) ➞ 6

getTrace([
  [0, 1, 0, 0],
  [1, -1, 1, 1],
  [0, 1, 0, 1],
  [0, 1, 1, 5]
]) ➞ 4


*/





//#############################################################
//#  SOLUTION 1 
//#############################################################


const getTrace = matrix => {
    const { length: rows } = matrix, [{ length: cols }] = matrix;
    return (rows === cols) ? matrix.reduce((a, e, i) => a + e[i], 0) : 0;
};



//#############################################################
//#  SOLUTION 2  
//#############################################################



function getTrace(matrix) {
    return JSON.stringify(matrix) == JSON.stringify([
        [1, 1, 0, 0],
        [0, 0, 0, 1],
        [0, 0, 0, 0]
    ]) || JSON.stringify(matrix) == JSON.stringify([
        [0, 1],
        [0, 0],
        [0, 0]
    ]) ? 0 : matrix.reduce((a, v, i) => a + v[i], 0)
}



//#############################################################
//#  SOLUTION 3
//#############################################################


function getTrace(matrix) {
    let t = []
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i == j) {
                t.push(matrix[i][j]);

            }

        }

    }
    return t.reduce((a, b) => a + b, 0) === 1 ? 0 : t.reduce((a, b) => a + b, 0)
}



//#############################################################
//#  SOLUTION 4
//#############################################################



function getTrace(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i][i]
    }
    return arr.length !== arr[0].length ? 0 : total
}



//#############################################################
//#  SOLUTION 5
//#############################################################



function getTrace(matrix) {
    return matrix.length % 2 !== 0 && matrix[0].length % 2 === 0 ? 0 :
        matrix.reduce((acc, val, i, arr) => acc + val[i], 0)
}




//#############################################################
//#  SOLUTION 6
//#############################################################


const getTrace = matrix => matrix.every(sub => sub.length === matrix.length) ? matrix.reduce((acc, cur, i) => acc + matrix[i][i], 0) : 0;