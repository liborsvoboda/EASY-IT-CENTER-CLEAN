/*

Alternating between Numbers Two and Eight with a Catch

Create a function that takes a number n (integer greater than zero) as an argument, and returns 2 if n is odd and 8 if n is even.

You can only use the following arithmetic operators: addition of numbers +, subtraction of numbers -, multiplication of number *, division of number /, and exponentiation **.

You are not allowed to use any other methods in this challenge (i.e. no if statements, comparison operators, etc).

Examples
f(1) ➞ 2

f(2) ➞ 8

f(3) ➞ 2

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


function f(n) {
    return 5 + 3 * (-1) ** n;
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


const f = n => (n & 1) ? 2 : 8;


//#############################################################
//#  SOLUTION 3
//#############################################################


function f(n) {
    return (n / 2) >> 0 === (n / 2) ? 8 : 2
}


//#############################################################
//#  SOLUTION 4
//#############################################################


f = (n) => ['0', '2', '4', '6', '8'].includes(n.toString().split('')[n.toString().length - 1]) ? 8 : 2




//#############################################################
//#  SOLUTION 5
//#############################################################


function f(n) {
    return Math.floor(n / 2) * 2 === n ? 8 : 2
}