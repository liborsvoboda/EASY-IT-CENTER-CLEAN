/*

Maneuvering in a Cave

Create a function that returns the count of all possible paths from top left to bottom right of an m * n matrix with the constraints that from each cell you can either move to the right or down.

Examples
calc(2, 2) ➞ 2

calc(3, 3) ➞ 6

calc(4, 4) ➞ 20


Note:
m may not be equal to n.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function calc(m, n) {
    if (m == 1 || n == 1)
        return 1;
    return calc(m - 1, n) + calc(m, n - 1)
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function calc(m, n) {
    return (m === 1 || n === 1) ? 1 : calc(m - 1, n) + calc(m, n - 1)
}



//#############################################################
//#  SOLUTION 3
//#############################################################


function calc(m, n) {
    let el = m - 1 + n - 1;
    let k = n - 1;
    return factorial(el) / (factorial(k) * factorial(el - k));
}

const factorial = n => {
    if (n <= 1) return 1;
    else return n * factorial(n - 1);
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function calc(m, n) {
    const fact = n => {
            if (n == 0 || n == 1) return 1
            return n * fact(n - 1)
        }
        [m, n] = [m - 2 + n, n - 1]
    return (fact(m) / (fact(n) * fact(m - n)))
}