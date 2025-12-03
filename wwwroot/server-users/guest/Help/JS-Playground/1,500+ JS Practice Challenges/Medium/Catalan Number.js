/*

Catalan Number

Create a function that returns the nth catalan number.In combinatorial mathematics, the Catalan numbers form a sequence of natural numbers that occur in various counting problems, often involving recursively-defined objects. They are named after the Belgian mathematician Eugène Charles Catalan (1814–1894). For more info, check out the resource tab.

Examples
getCatalanNumber(0) ➞ 1

getCatalanNumber(6) ➞ 132

getCatalanNumber(8) ➞ 1430

Notes
Inputs are zero and positive integers.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


f = x => x > 1 ? x * f(x - 1) : x;
getCatalanNumber = y => y ? 1 / (y + 1) * (f(2 * y) / f(y) ** 2) : 1;




//#############################################################
//#  SOLUTION 2  
//#############################################################



const fact = n => !n || n * fact(--n);
const choose = (n, k) => fact(n) / (fact(k) * fact(n - k));
const getCatalanNumber = n => choose(2 * n, n) / ++n;




//#############################################################
//#  SOLUTION 3
//#############################################################


function getCatalanNumber(n) {
    let a = Array.from({ length: 2 * n }, (_, i) => i + 1).reduce((acc, cur) => acc * cur, 1);
    let b = Array.from({ length: n }, (_, i) => i + 1).reduce((acc, cur) => acc * cur, 1);
    return Math.round(1 / (n + 1) * a / (b ** 2))
}





//#############################################################
//#  SOLUTION 4
//#############################################################


function getCatalanNumber(n) {
    if (n < 2) { return 1 }
    var a = range(n + 2, n * 2).reduce((a, b) => a * b)
    var b = range(1, n).reduce((a, b) => a * b)
    return a / b
}

let range = (a, b) => {
    var arr = []
    for (let i = a; i <= b; i++) { arr.push(i) }
    return arr
}




//#############################################################
//#  SOLUTION 5
//#############################################################


const getCatalanNumber = n => {
    return Math.round(factorial(n * 2) / (factorial(n + 1) * factorial(n))) || 1
}

const factorial = n => {
    for (let i = n - 1; i > 1; i--) {
        n *= i
    }
    return n
}