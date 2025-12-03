/*

Is It a Probability Matrix?

In probability theory, a probability matrix is a matrix such that:

The matrix is a square matrix (same number of rows as columns).
All entries are probabilities, i.e. numbers between 0 and 1.
All rows add up to 1.
The following is an example of a probability matrix:

[
  [0.5, 0.5, 0.0],
  [0.2, 0.5, 0.3],
  [0.1, 0.2, 0.7]
]
Note that though all rows add up to 1, there is no restriction on the columns, which may or may not add up to 1.

Write a function that determines if a matrix is a probability matrix or not.

Examples
isProbMatrix([
  [0.5, 0.5, 0.0],
  [0.2, 0.5, 0.3],
  [0.1, 0.2, 0.7]
]) ➞ true

isProbMatrix([
  [0.5, 0.5, 0.0],
  [0.2, 0.5, 0.3]
]) ➞ false

// Not a square matrix.

isProbMatrix([
  [2, -1],
  [-1, 2]
]) ➞ false

// Entries not between 0 and 1.

isProbMatrix([
  [0, 1],
  [1, 0]
]) ➞ true

isProbMatrix([
  [0.5, 0.4],
  [0.5, 0.6]
]) ➞ false

// Rows do not add to 1.

Notes
Fun fact: for most probability matrices M (for example, if M has no zero entries), the matrix powers M^n converge (as n increases) to a matrix where all rows are identical.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


function isProbMatrix(arr) {
    return arr.every(row => {
        return (
            row.every(num => num >= 0 && num <= 1) &&
            row.every(num => row.length === arr.length) &&
            row.reduce((a, v) => a + v, 0) === 1
        )
    })
}




//#############################################################
//#  SOLUTION 2  
//#############################################################


const isProbMatrix = arr => {
    if (arr.length !== arr[0].length) return false;

    for (const row of arr) {
        let sum = 0;

        for (const n of row) {
            if ((n < 0) || (n > 1)) return false;
            sum += n;
        }

        if (sum !== 1) return false;
    }

    return true;
};



//#############################################################
//#  SOLUTION 3
//#############################################################


const isProbMatrix = (arr) =>
    arr.every(e => e.length == arr.length &&
        e.reduce((a, b) => a + b, 0) >= 1 &&
        e[0] <= 1 && e.indexOf(1) == e.lastIndexOf(1));




//#############################################################
//#  SOLUTION 4
//#############################################################


function isProbMatrix(arr) {
    return arr.every(row => row.length === arr.length) && arr.every(row => row.reduce((a, b) => a + b, 0) === 1 && row.every(p => p >= 0));
}



//#############################################################
//#  SOLUTION 5
//#############################################################


function isProbMatrix(arr) {
    return arr.length == arr[0].length && arr.every(x => x.reduce((a, v) => a + v, 0) <= 1 && x.every(a => a >= 0))
}