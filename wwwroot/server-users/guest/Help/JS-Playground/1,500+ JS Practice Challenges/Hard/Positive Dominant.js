/*

Positive Dominant
An array is positive dominant if it contains strictly more unique positive values than unique negative values. Write a function that returns true if an array is positive dominant.

Examples
isPositiveDominant([1, 1, 1, 1, -3, -4]) ➞ false
// There is only 1 unique positive value (1).
// There are 2 unique negative values (-3, -4).

isPositiveDominant([5, 99, 832, -3, -4]) ➞ true

isPositiveDominant([5, 0]) ➞ true

isPositiveDominant([0, -4, -1]) ➞ false

Notes
0 counts as neither a positive nor a negative value.
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function isPositiveDominant(a) {
    return new Set(a.filter(x => x > 0)).size > new Set(a.filter(x => x < 0)).size
}




//#############################################################
//#  SOLUTION 2  
//#############################################################


const isPositiveDominant = a => [...new Set(a)].reduce((a, b) => a + Math.sign(b), 0) > 0;





//#############################################################
//#  SOLUTION 3
//#############################################################


let isPositiveDominant = (a) => new Set(a.filter(el => el > 0)).size > new Set(a.filter(el => el < 0)).size




//#############################################################
//#  SOLUTION 4
//#############################################################


function isPositiveDominant(a) {
    let pos = 0,
        neg = 0
    let uniqVals = [...new Set(a)]
    uniqVals.forEach(x => (x > 0 && pos++) || (x < 0 && neg++))
    return pos > neg
}