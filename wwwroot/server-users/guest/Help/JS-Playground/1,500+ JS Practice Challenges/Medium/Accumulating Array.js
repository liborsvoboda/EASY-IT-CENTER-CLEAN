/*

Accumulating Array

Create a function that takes in an array and returns an array of the accumulating sum.

Examples
accumulatingArray([1, 2, 3, 4]) ➞ [1, 3, 6, 10]
// [1, 3, 6, 10] can be written as  [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4]

accumulatingArray([1, 5, 7]) ➞ [1, 6, 13]

accumulatingArray([1, 0, 1, 0, 1]) ➞ [1, 1, 2, 2, 3]

accumulatingArray([]) ➞ []

Notes
An empty array input should return an empty array [].

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


const accumulatingArray = arr => arr.map((x, i) => arr.slice(0, i + 1).reduce((acc, val) => acc + val, 0));



//#############################################################
//#  SOLUTION 2  
//#############################################################


const accumulatingArray = (arr) => arr.map((num, ind) => {
    return arr.slice(0, ind + 1).reduce((s, v) => s + v, 0);
});




//#############################################################
//#  SOLUTION 3
//#############################################################



function accumulatingArray(arr) {
    return arr.map((x, i) => arr.slice(0, i + 1).reduce((x, y) => x + y, 0));
}