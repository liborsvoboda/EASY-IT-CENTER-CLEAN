/*

Sum of Negative Integers

Create a function that takes a string containing integers as well as other characters and return the sum of the negative integers only.

Examples
negativeSum("-12 13%14&-11") ➞ -23
// -12 + -11 = -23

negativeSum("22 13%14&-11-22 13 12") ➞ -33
// -11 + -22 = -33

Notes
There is at least one negative integer.
*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const negativeSum = s => s.match(/-\d+/g).reduce((a, v) => a + +v, 0);



//#############################################################
//#  SOLUTION 2  
//#############################################################


function negativeSum(chars) {
    return (chars.match(/\-\d+/g) || []).reduce((acc, cur) => acc + +cur, 0)
}




//#############################################################
//#  SOLUTION 3
//#############################################################



function negativeSum(chars) {
    let numbers = chars.replace(/(\%|[a-z]|\&)/g, ' ').split(' ');
    let negatives = numbers.filter(s => s.startsWith('-'))
        .join('').split('-');
    return negatives.reduce((sum, d) => sum - d, 0);
}




//#############################################################
//#  SOLUTION 4
//#############################################################



function negativeSum(chars) {
    return (chars.match(/-\d+/g) || []).reduce((total, num) => total + +num, 0);
}




//#############################################################
//#  SOLUTION 5
//#############################################################


const negativeSum = c => [...c.match(/\-\d+/g)].map(Number).reduce((a, b) => a + b);




function negativeSum(chars) {
    return chars.match(/-\d+/g).reduce((acc, curr) => acc + parseInt(curr), 0)
}