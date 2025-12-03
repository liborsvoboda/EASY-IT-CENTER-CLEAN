/*

Array Multiplier

Create a function that takes an array as an argument and returns a new nested array for each element in the original array. The nested array must be filled with the corresponding element (string or number) in the original array and each nested array has the same amount of elements as the original array.

Examples
multiply([4, 5]) ➞ [[4, 4], [5, 5]]

multiply(["*", "%", "$"]) ➞ [["*", "*", "*"], ["%", "%", "%"], ["$", "$", "$"]]

multiply(["A", "B", "C", "D", "E"]) ➞ [["A", "A", "A", "A", "A"], ["B", "B", "B", "B", "B"], ["C", "C", "C", "C", "C"], ["D", "D", "D", "D", "D"], ["E", "E", "E", "E", "E"]]

Notes
The given array contains numbers or strings.

*/






//#############################################################
//#  SOLUTION 1 
//#############################################################


function multiply(arr) {
    return arr.map(item => new Array(arr.length).fill(item));
}



//#############################################################
//#  SOLUTION 2  
//#############################################################



function multiply(arr) {
    return arr.map(x => Array.from({ length: arr.length }, v => x))
}



//#############################################################
//#  SOLUTION 3
//#############################################################


const multiply = arr =>
    Array.from({ length: arr.length }, (_, i) =>
        Array.from({ length: arr.length }).fill(arr[i]),
    );



//#############################################################
//#  SOLUTION 4
//#############################################################


function multiply(arr) {
    return arr.map(a => Number.isInteger(a) ? String(a).repeat(arr.length).split('').map(a => Number(a)) : String(a).repeat(arr.length).split(''))
}

/*
multiply([4, 5]) ➞ [[4, 4], [5, 5]]

multiply(["*", "%", "$"]) ➞ [["*", "*", "*"], ["%", "%", "%"], ["$", "$", "$"]]

multiply(["A", "B", "C", "D", "E"]) ➞ [["A", "A", "A", "A", "A"], ["B", "B", "B", "B", "B"], ["C", "C", "C", "C", "C"], ["D", "D", "D", "D", "D"], ["E", "E", "E", "E", "E"]]
Notes
The given array contains numbers or strings.
*/




//#############################################################
//#  SOLUTION 5
//#############################################################



function multiply(arr) {
    let nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    return arr.map(item => `${item}`.repeat(arr.length).split("")).
    map(item => item.map(item => nums.includes(item) ? nums.indexOf(item) : item));
}