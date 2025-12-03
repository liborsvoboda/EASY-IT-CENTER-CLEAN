/*

Recreating Multiplication

Create a function that takes two numbers n1 n2 and multiplies them without using *.

Examples
multiply(3, 2) ➞ 6

multiply(4, 10) ➞ 40

multiply(-2, 4) ➞ -8


Notes
Do not use * for this challenge.
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


const multiply = (n1, n2) =>
    Array.from({ length: Math.abs(n1) }, () => n1 / Math.abs(n1) * n2)
    .reduce((a, b) => a + b, 0);



//#############################################################
//#  SOLUTION 2  
//#############################################################


const multiply = (n1, n2) => {
    let sum = 0;
    for (let i = 0; i < Math.abs(n2); i++) {
        sum += Math.abs(n1);
    }
    if (n1 < 0 && n2 > 0 || n1 > 0 && n2 < 0) return -sum;
    return sum;
}



//#############################################################
//#  SOLUTION 3
//#############################################################


function multiply(w, z) {
    const [x, y] = [w, z].map(Math.abs);
    let result = [...Array(x)].fill(y).reduce((a, b) => a + b);
    return w < 0 && z > 0 || w > 0 && z < 0 ?
        -1 * result : result;
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function multiply(n1, n2) {
    const negative = (n1 < 0 || n2 < 0) && !(n1 < 0 && n2 < 0)
    let sum = 0
    for (let i = 0; i < Math.abs(n2); i++) {
        sum += Math.abs(n1)
    }
    return negative ? Number(`-${sum}`) : sum
}



//#############################################################
//#  SOLUTION 5
//#############################################################


function multiply(n1, n2) {
    return (n1 < 0 && n2 < 0) || (n1 > 0 && n2 > 0) ? Array(Math.abs(n1)).fill(Math.abs(n2)).reduce((a, v) => a + v, 0) : -Array(Math.abs(n1)).fill(Math.abs(n2)).reduce((a, v) => a + v, 0)
}