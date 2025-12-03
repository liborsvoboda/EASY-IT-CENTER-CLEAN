/*

Matrix Padder

Create a function that takes a matrix of size (m, n) and returns a matrix of size (m+2, n+2) with a pad of 0s around the perimeter.

Examples
padMatrix([[]]) ➞ [[0, 0], [0, 0], [0, 0]]

padMatrix([[9]]) ➞ [
  [0, 0, 0],
  [0, 9, 0],
  [0, 0, 0]
]

padMatrix([["hi", True]]) ➞ [
  [0, 0, 0, 0],
  [0, "hi", True, 0],
  [0, 0, 0, 0]
]

padMatrix([
  [1, 2, 5],
  [8, 6, 7],
  [3, 4, 9]
]) ➞ [
  [0, 0, 0, 0, 0],
  [0, 1, 2, 5, 0],
  [0, 8, 6, 7, 0],
  [0, 3, 4, 9, 0],
  [0, 0, 0, 0, 0]
]

Notes
All inputs will be arrays of arrays.
Refer to the first example to handle an empty input.

*/






//#############################################################
//#  SOLUTION 1 
//#############################################################


const padMatrix = (arr, z = Array(arr[0].length + 2).fill(0)) => [z, ...arr.map(r => [0, ...r, 0]), z];



//#############################################################
//#  SOLUTION 2  
//#############################################################


function padMatrix(arr) {
    let tb = Array(arr[0].length + 2).fill(0)
    let mid = arr.map(row => {
        row.push(0)
        row.unshift(0)
        return row
    })
    return [tb, ...mid, tb]
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function padMatrix(arr) {
    let b = Array.from({ length: arr[0].length + 2 }, v => 0)
    let a = arr.map(x => {
        x.push(0);
        x.unshift(0);
        return x;
    })
    a.push(b);
    a.unshift(b);
    return a;
}



//#############################################################
//#  SOLUTION 4
//#############################################################


const padMatrix = arr => [a = Array.from({ length: arr[0].length + 2 }, _ => 0), ...arr.map(v => [0, ...v, 0]), a];