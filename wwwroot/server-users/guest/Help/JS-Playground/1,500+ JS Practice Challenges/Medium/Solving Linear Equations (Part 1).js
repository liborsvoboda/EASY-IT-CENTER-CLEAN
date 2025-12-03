/*

Solving Linear Equations (Part 1)

Consider the equation ax+1=b+x where a and b are constants.

Create a function that takes numbers a and b as arguments, and returns the solution of the equation. If the equation does not have a solution, return "No solution". If any number satisfies the equation, return "Any number".

Examples
solve(4, 7) ➞ 2.0

solve(9, 5) ➞ 0.5

solve(12, -4) ➞ -0.455

Notes
Round your answer to three decimal places.
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function solve(a, b) {
    if (a == 1) return b == 1 ? "Any number" : "No solution";
    return Math.round(1000 * (b - 1) / (a - 1)) / 1000;
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


const solve = (a, b) =>
    (b - 1) == 0 && (a - 1) == 0 ?
    'Any number' :
    (a - 1) == 0 ?
    'No solution' :
    +((b - 1) / (a - 1)).toFixed(3);



//#############################################################
//#  SOLUTION 3
//#############################################################


function solve(a, b) {
    return a != 1 && b != 1 ? parseFloat(((b - 1) / (a - 1)).toFixed(3)) : b != 1 ? 'No solution' : 'Any number'
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function solve(a, b) {
    if (a === 1)
        return b === 1 ? "Any number" : "No solution";
    else
        return +((b - 1) / (a - 1)).toFixed(3);
}




//#############################################################
//#  SOLUTION 5
//#############################################################



const solve = (a, b) => a !== 1 ? Math.round(1000 * (b - 1) / (a - 1)) / 1000 : a == b == 1 ? 'Any number' : 'No solution'





const solve = (a, b) =>
    a !== 1 ? Math.round((b - 1) / (a - 1) * 1e3) / 1e3 :
    b !== 1 ? 'No solution' : 'Any number'


//#############################################################
//#  SOLUTION 6
//#############################################################


function solve(a, b) {
    return isNaN((b - 1) / (a - 1)) ? 'Any number' :
        (b - 1) / (a - 1) === Infinity ? 'No solution' : +((b - 1) / (a - 1)).toFixed(3);
}