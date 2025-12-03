/*
Stand in Line

Write a function that takes an array and a number as arguments. Add the number to the end of the array, then remove the first element of the array. The function should then return the updated array.

Examples
nextInLine([5, 6, 7, 8, 9], 1) ➞ [6, 7, 8, 9, 1]

nextInLine([7, 6, 3, 23, 17], 10) ➞ [6, 3, 23, 17, 10]

nextInLine([1, 10, 20, 42 ], 6) ➞ [10, 20, 42, 6]

nextInLine([], 6) ➞ "No array has been selected"

Notes
For an empty array input, return: "No array has been selected"
*/

//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 

const nextInLine = (arr, num) => Array.isArray(arr) ? arr.slice(1).concat(num) : "No array has been selected";


//#  SOLUTION 2  

function nextInLine(arr, num) {
    if (Number.isNaN(arr)) return "No array has been selected";
    arr.push(num);
    arr.shift();
    return arr;
}


//#  SOLUTION 3

function nextInLine(arr, num) {
    return !arr.length ? 'No array has been selected' : [...arr].concat(num).slice(1);
}


//#  SOLUTION 4

function nextInLine(arr, num) {
    return (arr || []).length === 0 ? "No array has been selected" :
        arr.slice(1).concat(num);
}