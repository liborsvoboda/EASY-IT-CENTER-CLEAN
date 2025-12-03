/*

Sum of Decimals

Captain Obvious is asked to implement a simple function that given two decimal numbers A and B returns their sum.

"Easy one!" he thinks, but soon he discovers that his function fails over the fifty percent of given test cases! He suspects the test cases are wrong, but his calculator is saying they're correct! What's happening?

Can you help Captain Obvious to debug his function and solve the exercise?

Examples
floatSum(0.3, 0.7) ➞ 1

floatSum(0.35, 0.75) ➞ 1.1

floatSum(1.234, 5.6789) ➞ 6.9129


Notes
Given numbers can be either integer or float with 1 up to 6 decimals.
Don't round results!
Bonus: Can you resolve it using a simple math expression instead of a built-in method?

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################



function floatSum(A, B) {
    return ((A * 1000000000) + (B * 1000000000)) / 1000000000;
}


//#############################################################
//#  SOLUTION 2  
//#############################################################


const floatSum = (A, B) => Number((A + B).toFixed(Math.max(A.toString().length, B.toString().length)))


//#############################################################
//#  SOLUTION 3
//#############################################################



const floatSum = (a, b) => +(a + b).toFixed(6);