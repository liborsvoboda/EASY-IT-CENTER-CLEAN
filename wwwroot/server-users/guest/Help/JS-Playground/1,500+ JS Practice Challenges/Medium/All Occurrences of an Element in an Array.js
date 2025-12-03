/*

All Occurrences of an Element in an Array

Create a function that returns the indices of all occurrences of an item in the array.

Examples
getIndices(["a", "a", "b", "a", "b", "a"], "a") ➞ [0, 1, 3, 5]

getIndices([1, 5, 5, 2, 7], 7) ➞ [4]

getIndices([1, 5, 5, 2, 7], 5) ➞ [1, 2]

getIndices([1, 5, 5, 2, 7], 8) ➞ []


Notes
If an element does not exist in an array, return [].
Arrays are zero-indexed.
Values in the array will be value-types (don't need to worry about nested arrays).

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const getIndices = (arr, el) =>
    arr.reduce(
        (indices, item, i) => (item === el ? indices.concat(i) : indices), []
    );


//#############################################################
//#  SOLUTION 2  
//#############################################################


function getIndices(arr, el) {
    return arr.map((ele, idx) => ele == el ? idx : null).filter(ele => ele !== null)
}


//#############################################################
//#  SOLUTION 3
//#############################################################


const getIndices = (arr, el) => arr.map((n, i) => n === el ? i : -1).filter(n => n >= 0);



//#############################################################
//#  SOLUTION 4
//#############################################################


function getIndices(arr, el) {
    return arr.map((x, i) => x == el ? i : '').filter(x => typeof x == 'number')
}


//#############################################################
//#  SOLUTION 5
//#############################################################


const getIndices = (arr, el) =>
    arr.map((crt, i) => crt === el ? i : 'x').filter(crt => crt !== 'x');