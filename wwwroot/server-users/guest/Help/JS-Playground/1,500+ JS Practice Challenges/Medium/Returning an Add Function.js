/*

Returning an "Add" Function

Given a number, n, return a function which adds n to the number passed to it.

Examples
add(10)(20) ➞ 30

add(0)(20) ➞ 20

add(-30)(80) ➞ 50

Notes
All numbers used in the tests will be integers (whole numbers).
Returning a function from a function is a key part of understanding higher order functions (functions which operate on and return functions).
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################

const add = num1 => num2 => num1 + num2;



//#############################################################
//#  SOLUTION 2  
//#############################################################


function add(x) { return function(y) { return x + y }; };