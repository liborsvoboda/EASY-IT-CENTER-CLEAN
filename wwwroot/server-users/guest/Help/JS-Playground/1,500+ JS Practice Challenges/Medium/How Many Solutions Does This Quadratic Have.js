/*

How Many Solutions Does This Quadratic Have?

A quadratic equation a x² + b x + c = 0 has either 0, 1, or 2 distinct solutions for real values of x. Given a, b and c, you should return the number of solutions to the equation.

Examples
solutions(1, 0, -1) ➞ 2
// x² - 1 = 0 has two solutions (x = 1 and x = -1).

solutions(1, 0, 0) ➞ 1
// x² = 0 has one solution (x = 0).

solutions(1, 0, 1) ➞ 0
// x² + 1 = 0 has no solutions.

Notes
You do not have to calculate the solutions, just return how many there are.
a will always be non-zero.
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


const solutions = (a, b, c) => [0, 1, 2][Math.sign(b * b - 4 * a * c) + 1];





//#############################################################
//#  SOLUTION 2  
//#############################################################


function solutions(a, b, c) {
    const disc = b * b - 4 * a * c;
    return disc > 0 ? 2 : disc == 0 ? 1 : 0;
}






//#############################################################
//#  SOLUTION 3
//#############################################################


function solutions(a, b, c) {
    let num = Math.pow(b, 2) - 4 * a * c;
    return num === 0 ? 1 : (num > 0 ? 2 : 0);
}





//#############################################################
//#  SOLUTION 4
//#############################################################


const solutions = (a, b, c) => {
    const numerator = Math.sqrt(Math.pow(b, 2) - 4 * a * c);
    const denominator = 2 * a;
    const solution1 = (-b + numerator) / denominator;
    const solution2 = (-b - numerator) / denominator;

    return Number.isNaN(solution1) ? 0 : new Set([solution1, solution2]).size;
};





//#############################################################
//#  SOLUTION 5
//#############################################################


function solutions(a, b, c) {
    return (b * b) - 4 * a * c < 0 ? 0 : (b * b) - 4 * a * c > 0 ? 2 : 1;
}