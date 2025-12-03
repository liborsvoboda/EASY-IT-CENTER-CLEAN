/*

Find the Largest Even Number

Write a function that finds the largest number in an array nums that is also even. If there is no even number, return -1.

Examples
largestEven([3, 7, 2, 1, 7, 9, 10, 13]) ➞ 10

largestEven([1, 3, 5, 7]) ➞ -1

largestEven([0, 19, 18973623]) ➞ 0


Notes
Consider using the modulo % operator.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################



const largestEven = arr => Math.max(...arr.filter(num => num % 2 === 0), -1);



//#############################################################
//#  SOLUTION 2  
//#############################################################


function largestEven(nums) {
    return nums.reduce((t, c) => c > t && !(c % 2) ? c : t, 0) || -1
}



//#############################################################
//#  SOLUTION 3
//#############################################################


const largestEven = nums => nums.filter(el => el % 2 === 0).length === 0 ?
    -1 : Math.max(...nums.filter(el => el % 2 === 0));



//#############################################################
//#  SOLUTION 4
//#############################################################



function largestEven(nums) {
    const sortedEvens = nums.filter((x) => x % 2 === 0).sort((a, b) => b - a);
    return sortedEvens.length > 0 ? sortedEvens[0] : -1;
}



//#############################################################
//#  SOLUTION 5
//#############################################################


function largestEven(nums) {
    let evenNum = nums.filter(e => e % 2 === 0);
    return evenNum.length ? Math.max(...evenNum) : -1;
}




//#############################################################
//#  SOLUTION 6
//#############################################################


function largestEven(nums) {
    let evens = nums.filter(e => e % 2 === 0)
    return evens.length > 0 ? Math.max(...evens) : -1
}