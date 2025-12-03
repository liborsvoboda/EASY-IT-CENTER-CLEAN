/*  
Less Than 100 Array Remix
Given an array of numbers, return true if the sum of the array is less than 100; otherwise return false.

Examples
arrayLessThan100([5, 57]) ➞ true

arrayLessThan100([77, 30]) ➞ false

arrayLessThan100([0]) ➞ true

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



// Solution 1

function arrayLessThan100(arr) {
    return arr.reduce((total, cur) => total + cur) < 100;
}


const arrayLessThan100 = arr => arr.reduce((s, c) => s + c) < 100;



function arrayLessThan100(arr) {
    return arr.reduce((a, b) => a + b) < 100
}


// Solution 2

function arrayLessThan100(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum < 100;
}


// Solution 3

function arrayLessThan100(arr) {
    return arr.reduce((acc, num) => acc + num) < 100 ? true : false;
}


// Solution 4


function arrayLessThan100(arr) {
    result = false;
    if ((arr.reduce((a, c) => a + c)) < 100) {
        result = true;
    }
    return result;
}


// Solution 5

function arrayLessThan100(arr) {
    const total = arr.reduce((acc, total) => {
        return acc + total
    }, 0)
    return (total < 100) ? true : false
}