/*

Complete the Square (Matrix)

Sadly, the mathematical world is biased in favor of square matrices. As such, this challenge will help rectangular matrices by making them square.

For example, for the matrix:

[
  [1, 2],
  [3, 4],
  [5, 6]
]
This can be done by padding it with a column of zeroes on the right to get:

[
  [1, 2, 0],
  [3, 4, 0],
  [5, 6, 0]
]
While for the matrix:

[
  [1, 2, 3, 4],
  [5, 6, 7, 8]
]
One can pad it with two rows of zeros at the bottom to get:

[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]
Write a function that pads a rectangular matrix with zeros on the right or at the bottom to make it square.

Examples
completeSquare([
  [2, 5]
]) ➞ [
  [2, 5],
  [0, 0]
]

completeSquare([
  [2, 5],
  [1, 7]
]) ➞ [
  [2, 5],
  [1, 7]
]

completeSquare([
  [1, 2],
  [3, 4],
  [5, 6]
 ]) ➞ [
  [1, 2, 0],
  [3, 4, 0],
  [5, 6, 0]
]


Notes
Matrices should be padded on the right or at the bottom, but not both simultaneously (i.e. the size of the biggest direction shouldn't change).
If the input is already a square matrix, just return that matrix.
*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


function completeSquare(arr) {
    const m = arr.length;
    const n = arr[0].length;

    if (m == n) return arr;

    if (m > n) {
        const diff = m - n;
        return arr.map(row => row.concat(new Array(diff).fill(0)));
    }

    if (n > m) {
        const diff = n - m;
        const bottomOfMatrix = new Array(diff)
            .fill(null)
            .map(row => new Array(n).fill(0));
        return arr.concat(bottomOfMatrix);
    }
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


const completeSquare = arr => {
    const { length: a } = arr, [{ length: b }] = arr;
    while (arr.length < b) arr.push(Array(b).fill(0));
    if (b < a)
        for (const row of arr)
            while (row.length < a) row.push(0);
    return arr;
};



//#############################################################
//#  SOLUTION 3
//#############################################################


function completeSquare(arr) {
    let cLen = arr[0].length
    let rLen = arr.length
    let diff = Math.abs(cLen - rLen)
    for (let i = 0; i < diff; i++) {
        if (cLen > rLen) arr.push(Array(cLen).fill(0))
        else arr = arr.map(r => [...r, 0])
    }
    return arr
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function completeSquare(a) {
    m = Math.max(a.length, a[0].length)
    return [...Array(m)].map((_, i) => [...Array(m)].map((_, j) => a[i] && a[i][j] ? a[i][j] : 0))
}



//#############################################################
//#  SOLUTION 5
//#############################################################


function completeSquare(arr) {
    const xAxis = arr[0].length;
    const yAxis = arr.length;

    const diff = xAxis - yAxis;

    // need to fill in columns with the diff
    if (diff < 0) {

        arr.forEach((x) => {
            for (let i = 0; i < Math.abs(diff); i++) {
                x.push(0);
            }

        });

        // need to fill in rows with the diff
    } else if (diff > 0) {
        let newArr = new Array(xAxis);
        newArr.fill(0, 0, xAxis);

        for (let i = 0; i < Math.abs(diff); i++) {
            arr.push(newArr);
        }
    }

    return arr;
}




//#############################################################
//#  SOLUTION 6
//#############################################################


function completeSquare(arr) {
    const r = arr.length;
    const c = arr[0].length;
    const m = Math.max(r, c);
    return [...Array(m).keys()].map(i => [...Array(m).keys()].map(j => i < r && j < c ? arr[i][j] : 0));
}




//#############################################################
//#  SOLUTION 7
//#############################################################


const completeSquare = (arr) =>
    Array.from({ length: Math.max(arr.length, ...arr.map(e => e.length)) },
        (_, i) => Array.from({ length: Math.max(arr.length, ...arr.map(e => e.length)) },
            () => 0)).map((e, i) => e.map((a, n) => arr[i] == undefined || !arr[i][n] ? 0 : arr[i][n]));





//#############################################################
//#  SOLUTION 8
//#############################################################


const completeSquare = arr =>
    arr.length < arr[0].length ? append(arr) :
    arr.length > arr[0].length ? fill(arr) :
    arr;

function append(arr) {
    const zeros = Array(arr[0].length).fill(0);
    while (arr.length < arr[0].length) {
        arr.push(zeros);
    }
    return arr;
}

function fill(arr) {
    const zeros = Array(arr.length - arr[0].length).fill(0);
    return arr.map(row => row.concat(zeros));
}