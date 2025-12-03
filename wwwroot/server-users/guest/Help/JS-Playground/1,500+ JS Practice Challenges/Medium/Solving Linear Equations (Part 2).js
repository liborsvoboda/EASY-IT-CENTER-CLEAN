/*

Solving Linear Equations (Part 2)

Consider the equation ax-b=bx-3a+4 where a and b are constants. Create a function that takes numbers a and b as arguments, and return the solution of the equation.

If the equation does not have a solution, return "No solution".
If any number satisfies the equation, return "Any number".
Examples
solve(1, 2) ➞ -3.0

solve(-4, -6) ➞ 5.0

solve(4, 1) ➞ -2.333


Notes
Round your answer to three decimal places.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function solve(a, b) {
    return a != b ? parseFloat(((-3 * a + 4 + b) / (a - b)).toFixed(3)) : (-3 * a + 4 + b) == 0 ? 'Any number' : 'No solution'
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function solve(a, b) {
    if (a === b)
        return a === 2 ? "Any number" : "No solution";
    else
        return +((-3 * a + b + 4) / (a - b)).toFixed(3);
}




//#############################################################
//#  SOLUTION 3
//#############################################################


const solve = (a, b) =>
    (a - b) == 0 && (-3 * a + 4 + b) == 0 ?
    'Any number' :
    (a - b) == 0 ?
    'No solution' :
    +((-3 * a + 4 + b) / (a - b)).toFixed(3);



//#############################################################
//#  SOLUTION 4
//#############################################################


function solve(a, b) {
    if (a === b)
        return b === 3 * a - 4 ? 'Any number' : 'No solution'
    else
        return Math.round((b - 3 * a + 4) / (a - b) * 1e3) / 1e3
}