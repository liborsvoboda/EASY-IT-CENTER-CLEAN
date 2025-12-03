/*

Evaluating Factorials

Create a function that takes an array of factorial expressions and returns their sum.

Examples
evalFactorial(["2!", "3!"]) ➞ 8

evalFactorial(["5!", "4!", "2!"]) ➞ 146

evalFactorial(["0!", "1!"]) ➞ 2

Notes
0! and 1! both equal 1.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const fac = n => n < 2 ? 1 : n * fac(n - 1);
const evalFactorial = arr => arr.reduce((a, v) => a + fac(parseInt(v)), 0);



//#############################################################
//#  SOLUTION 2  
//#############################################################


function evalFactorial(arr) {
    function fac(n) {
        return n <= 1 ? 1 : n * fac(n - 1);
    }

    return arr.map(e => +e.match(/\d+/g).join('')).reduce((r, el) => r += fac(el), 0);
}



//#############################################################
//#  SOLUTION 3
//#############################################################


function evalFactorial(lst) {
    return lst.map(x => +x.slice(0, -1)).reduce((sum, x) => {
        if (x <= 1) { return sum + 1 }
        let f = 1;
        while (x > 0) {
            f *= x;
            x -= 1;
        }
        return sum + f;
    }, 0);
}




//#############################################################
//#  SOLUTION 4
//#############################################################


const fac = n => (n < 2) ? 1 : fac(n - 1) * n;

const evalFactorial = arr =>
    arr.reduce((tot, cur) => tot + fac(+cur.slice(0, -1)), 0);





//#############################################################
//#  SOLUTION 5
//#############################################################


function evalFactorial(arr) {
    function fact(n) {
        if (n < 2) return 1;
        return n * fact(n - 1);
    }
    return arr.map(e => parseInt(e)).map(e => fact(e)).reduce((a, b) => a + b, 0);
}





//#############################################################
//#  SOLUTION 6
//#############################################################



const evalFactorial = arr =>
    arr.map(x => factorial(parseInt(x))).reduce((a, c) => a + c, 0)

const factorial = num =>
    num === 0 || num === 1 ? 1 : num * factorial(num - 1)




//#############################################################
//#  SOLUTION 7
//#############################################################


const evalFactorial = arr =>
    arr.reduce((t, a) => t + Array
        .from({ length: parseInt(a) }, (_, i) => i + 1)
        .reduce((t, a) => t * a, 1), 0);





//#############################################################
//#  SOLUTION 8
//#############################################################


function evalFactorial(arr) {
    const getFact = x => {
        x = +x.slice(0, -1);
        if (x === 0 || x === 1) return 1;
        for (let i = x - 1; i >= 2; i--) x *= i;
        return x;
    }
    return arr.map(getFact).reduce((a, b) => a + b, 0);
}




//#############################################################
//#  SOLUTION 9
//#############################################################


function evalFactorial(arr) {
    const f = n => n == 0 ? 1 : n * f(n - 1);
    return arr
        .map(e => parseInt(e, 10))
        .map(e => f(e))
        .reduce((a, e) => a + e, 0)
}