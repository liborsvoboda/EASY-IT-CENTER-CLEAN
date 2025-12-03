/*

Preventing the Collapse of the Universe

Dividing by 0 is a huge mistake and should be avoided at all costs.

Create a function that when given a math expression as a string, return True if at any point, the expression involves dividing by 0.

Examples
catchZeroDivision("2 / 0") ➞ true

catchZeroDivision("4 / (2 + 3 - 5)") ➞ true

catchZeroDivision("2 * 5 - 10") ➞ false

Notes
Multiplication signs will be given as an asterisk *.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const catchZeroDivision = e => !isFinite(eval(e));


const catchZeroDivision = exp => Number.isNaN(eval(exp)) || eval(exp) == Infinity;


const catchZeroDivision = e => eval(e) == Infinity || isNaN(eval(e));






//#############################################################
//#  SOLUTION 2  
//#############################################################


function catchZeroDivision(expr) {
    return eval(expr) == Infinity ? true : isNaN(eval(expr)) ? true : false;
}






//#############################################################
//#  SOLUTION 3
//#############################################################


function catchZeroDivision(expr) {
    if (!expr.includes('/')) return false;
    const divisor = expr.split('/')[1]
    return !Number(`${divisor}`)
}






//#############################################################
//#  SOLUTION 4
//#############################################################


const catchZeroDivision = expr => !Number.isFinite(eval(expr));