/*

Scalable Mountain?

Given an array of numbers, representing the height of a mountain in certain intervals, return whether this mountain is scalable.

A mountain can be considered scalable if each number is within 5 units of the next number in either direction.

Examples
isScalable([1, 2, 4, 6, 7, 8]) ➞ true

isScalable([40, 45, 50, 45, 47, 52]) ➞ true

isScalable([2, 9, 11, 10, 18, 21]) ➞ false


Notes
The array may start at any number and can be any length.
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


const isScalable = arr => !arr.map((a, i) => Math.abs(arr[i + 1] - a)).some(x => x > 5)






//#############################################################
//#  SOLUTION 2  
//#############################################################


function isScalable(arr) {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        arr[i + 1] - arr[i] > 5 ? result += 1 : result += 0
    }
    return result == 0 ? true : false
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function isScalable(arr) {
    return arr.map((x, i) => Math.abs(x - arr[i - 1]) > 5 ? false : true).filter(x => x == false).length == 0;
}


//#############################################################
//#  SOLUTION 4
//#############################################################


function isScalable(arr) {
    return arr.filter((x, i) => Math.abs(x - arr[i + 1]) > 5).length === 0;
}



//#############################################################
//#  SOLUTION 5
//#############################################################


function isScalable(arr) {
    return arr.map((x, y) => Math.abs(arr[y + 1] - x || +0))
        .map(num => num <= 5)
        .includes(false) === false
}