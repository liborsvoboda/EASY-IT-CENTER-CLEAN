/*

Quadratic Equation

Create a function to find only the root value of x in any quadratic equation ax^2 + bx + c. The function will take three arguments:

a as the coefficient of x^2
b as the coefficient of x
c as the constant term
Examples
quadraticEquation(1, 2, -3) ➞ 1

quadraticEquation(2, -7, 3) ➞ 3

quadraticEquation(1, -12, -28) ➞ 14


Notes

Quadratic equation is always guaranteed to have a root.
Check the Resources tab for more information on quadratic equations.
Calculate only the root that sums the square root of the discriminant, not the one that subtracts it.
Round the value / return only integer value.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function quadraticEquation(a, b, c) {
    return (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function quadraticEquation(a, b, c) {
    var sol1 = (b * -1 + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    var sol2 = (b * -1 - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    if (sol1 > 0) {
        return sol1;
    }
    if (sol2 > 0) {
        return sol2;
    }
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function quadraticEquation(a, b, c) {
    let delta = b * b - 4 * a * c
    return a > 0 ? (-b + Math.sqrt(delta)) / (2 * a) : (-b - Math.sqrt(delta)) / (2 * a)
}



//#############################################################
//#  SOLUTION 4
//#############################################################


const quadraticEquation = (a, b, c) => (Math.sqrt(b * b - 4 * a * c) - b) / (2 * a);




//#############################################################
//#  SOLUTION 5
//#############################################################



function quadraticEquation(a, b, c) {
    var d = (b * b) - 4 * a * c;
    var sqrtD = Math.sqrt(d);
    var x1 = (-b + sqrtD) / (2 * a);
    var x2 = (-b - sqrtD) / (2 * a);
    return (x1 > 0) ? x1 : x2;
}




//#############################################################
//#  SOLUTION 6
//#############################################################



const quadraticEquation = (a, b, c) => {
    const plusB = ((b * (-1)) + Math.sqrt((Math.pow(b, 2) - (4 * a * c)))) / (2 * a)
    const minusB = ((b * (-1)) - Math.sqrt((Math.pow(b, 2) - (4 * a * c)))) / (2 * a)
    return [plusB, minusB].filter(x => x > 0)[0];
}