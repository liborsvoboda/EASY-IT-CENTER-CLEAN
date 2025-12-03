/*

Matrix Multiplication

The main condition of matrix multiplication is that the number of columns of the 1st matrix must equal to the number of rows of the 2nd one.
As a result of multiplication you will get a new matrix that has the same quantity of rows as the 1st one has and the same quantity of columns as the 2nd one.
For example if you multiply a matrix of "n" * "k" by "k" * "m" size you"ll get a new one of "n" * "m" dimensions.
Create a function that takes 2 x 2D array (matrix A, matrixB) as an argument and returns a 2D array (matrix C). C = A*B.

If the number of columns of the 1st matrix isn't equal to the number of rows of the 2nd: return "ERROR".
Or the number of rows of the 1st matrix isn't equal to the number of columns of the 2nd: return "ERROR".
Examples
mul([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
], [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]) ➞ [
  [30, 36, 42],
  [66, 81, 96],
  [102, 126, 150]
]

*/





//#############################################################
//#  SOLUTION 1 
//#############################################################



//mn23
function mul(A1, A2) {
    if (!(A1.length == A2[0].length) || !(A2.length == A1[0].length)) return "ERROR"
    let arr = Array.from(Array(A1.length), () => Array(A2[0].length).fill(0));
    let v, u;
    for (let i = 0; i < A1.length; i++) {
        for (let j = 0; j < A2[0].length; j++) {
            v = A1[i];
            u = A2.map(x => x[j])
            for (let k = 0; k < v.length; k++) {
                arr[i][j] += v[k] * u[k]
            }
        }
    }
    return arr;
}


//#############################################################
//#  SOLUTION 2  
//#############################################################



function mul(m1, m2) {
    if (m1.length != m2[0].length || m1[0].length != m2.length) { return 'ERROR'; }
    let m = new Array(m2[0].length);
    for (let i = 0; i < m.length; i++)
        m[i] = new Array(m2[0].length);

    for (let y = 0; y < m.length; y++) {
        for (let x = 0; x < m[y].length; x++) {
            m[y][x] = m1[y].reduce((a, b, i) => {
                return a = a + b * m2[i][x];
            }, 0)
        }
    }
    return m.map(arr => arr.filter(val => Boolean(val)));
}



//#############################################################
//#  SOLUTION 3
//#############################################################



function mul(A1, A2) {
    return A1.map((row, i) =>
        A2[0].map((_, j) =>
            row.reduce((acc, _, n) =>
                acc + A1[i][n] * A2[n][j], 0
            )
        )
    )
}
return 'ERROR';