/*

Peeling off the Outer Layers
Given an array of arrays, return a new array of arrays containing every element, except for the outer elements.

Examples
peelLayerOff([
  ["a", "b", "c", "d"],
  ["e", "f", "g", "h"],
  ["i", "j", "k", "l"],
  ["m", "n", "o", "p"]
]) ➞ [
  ["f", "g"],
  ["j", "k"]
]

peelLayerOff([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
  [26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35]
]) ➞ [
  [7, 8, 9],
  [12, 13, 14],
  [17, 18, 19],
  [22, 23, 24],
  [27, 28, 29]
]

peelLayerOff([
  [true, false, true],
  [false, false, true],
  [true, true, true]
]) ➞ [[false]]

peelLayerOff([
  ["hello", "world"],
  ["hello", "world"]
]) ➞ []
Notes
The 2D grid is always a rectangular/square shape.
Always return some form of nested array, unless there are no elements. In that case, return an empty array.

*/



//#############################################################
/*  Solution 1   */

const peelLayerOff = r => r.slice(1, -1).map(c => c.slice(1, -1))

const peelLayerOff = o => Array.isArray(o) ? o.slice(1, o.length - 1).map(peelLayerOff) : o;

const peelLayerOff = arr => arr.filter((_, i) => i > 0 && i < arr.length - 1).map(v => v.slice(1, -1));



//#############################################################
/*  Solution 2   */

function peelLayerOff(arr) {
    arr.shift();
    arr.pop();
    for (i = 0; i < arr.length; i++) {
        arr[i].shift();
        arr[i].pop();
    }
    return arr;
}


//#############################################################
/*  Solution 3   */

function peelLayerOff(arr) {
    arr = arr.splice(1, arr.length - 2)
    for (let layer in arr) {
        arr[layer].splice(0, 1)
        arr[layer].splice(-1)
    }
    return arr
}

//#############################################################
/*  Solution 4   */


function peelLayerOff(arr) {
    return arr.slice(1, -1)
        .map(x => x.slice(1, -1));
}


//#############################################################
/*  Solution 5   */


function peelLayerOff(arr) {
    let newArr = arr.slice(1, arr.length - 1);
    return newArr.map(x => x.slice(1, x.length - 1));
}