/*

Face Interval

In mathematics, interval is the difference between the largest number and the smallest number in an array.

To illustrate:

A = (3, 5, 7, 23, 11, 42, 80)

Interval of A = 80 - 3 = 77
Create a function that takes an array and returns ":)" if the interval of the array is equal to any other element; otherwise return ":(".

Examples
faceInterval([1, 2, 5, 8, 3, 9]) ➞ ":)"
// Array interval is equal to one of the other elements.

faceInterval([5, 2, 8, 3, 11]) ➞ ":("
// Array interval is not among the other elements.

faceInterval("bruh") ➞ ":/"
// "bruh" is not an array. It's string.


Notes
Arrays won't contain any duplicate numbers.
If you're not given an array, return ":/"
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


const faceInterval = (num) => {
    if (typeof num !== "object") return ":/";
    let diff = num[num.length - 1] - num[0];
    return num.includes(diff) ? ":)" : ":(";
};



//#############################################################
//#  SOLUTION 2  
//#############################################################


function faceInterval(num) {
    if (!Array.isArray(num)) return ":/";
    return num.includes(Math.max(...num) - Math.min(...num)) ? ":)" : ":(";
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function faceInterval(num) {
    let n = Math.max(...num) - Math.min(...num)
    return num.includes(n) ? ':)' : typeof('1') == typeof(num) ? ':/' : ':('
}



//#############################################################
//#  SOLUTION 4
//#############################################################



function faceInterval(num) {
    return Array.isArray(num) ? (num.some(x => x == num.sort((a, b) => a - b).slice(-1)[0] - num.sort((a, b) => a - b)[0]) ? ":)" : ":(") : ":/"
}



//#############################################################
//#  SOLUTION 5
//#############################################################



const faceInterval = nums => typeof nums === 'object' ?
    nums.includes(Math.max(...nums) - Math.min(...nums)) ?
    ':)' : ':(' : ':/'