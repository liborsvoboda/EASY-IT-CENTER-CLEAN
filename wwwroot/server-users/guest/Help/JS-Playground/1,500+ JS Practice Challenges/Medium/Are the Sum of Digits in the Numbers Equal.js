/*
Are the Sum of Digits in the Numbers Equal?

Write a function that takes an array of two numbers and determines if the sum of the digits in each number are equal to each other.

Examples
isEqual([105, 42]) ➞ true
# 1 + 0 + 5 = 6
# 4 + 2 = 6

isEqual([21, 35]) ➞ false

isEqual([0, 0]) ➞ true
*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const isEqual = ([a, b]) => a % 9 === b % 9;



//#############################################################
//#  SOLUTION 2  
//#############################################################



const isEqual = ([x, y]) => {
    [x, y] = [
        [...x + ''].reduce((a, b) => a + +b, 0), [...y + ''].reduce((a, b) => a + +b, 0)
    ]
    return x == y
}



//#############################################################
//#  SOLUTION 3
//#############################################################


function isEqual(arr) {
    return sum(arr[0]) === sum(arr[1]);
}
const sum = (n) => {
    n = n.toString();
    return [...n].reduce((a, b) => a + +b, 0);
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function isEqual(arr) {
    const digsum = n => [...('' + n)].reduce((a, v) => a + +v, 0);
    return digsum(arr[0]) === digsum(arr[1]);
}




//#############################################################
//#  SOLUTION 5
//#############################################################


function isEqual(arr) {
    return (
        arr[0]
        .toString()
        .split("")
        .reduce((acc, curr) => (acc += Number(curr)), 0) ===
        arr[1]
        .toString()
        .split("")
        .reduce((acc, curr) => (acc += Number(curr)), 0)
    );
}