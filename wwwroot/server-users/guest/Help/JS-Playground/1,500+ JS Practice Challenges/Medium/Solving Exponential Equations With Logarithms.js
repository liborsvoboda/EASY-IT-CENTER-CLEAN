/*
Solving Exponential Equations With Logarithms

Create a function that takes a number a and finds the missing exponent x so that a when raised to the power of x is equal to b.

Examples
solveForExp(4, 1024) ➞ 5
solveForExp(2, 1024) ➞ 10
solveForExp(9, 3486784401) ➞ 10

Notes
a is raised to the power of what in order to equal b?

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################


/*  Solution 1   */

const solveForExp = (a, b) => Math.round(Math.log(b) / Math.log(a));

const solveForExp = (a, b) => Math.round(Math.log(b) / Math.log(a));

/*  Solution 2   */

const solveForExp = (a, b) => {
    let count = 0
    while (a ** count !== b) count++
        return count
}

/*  Solution 3   */

function solveForExp(a, b) {
    return (Math.floor(Math.log2(b) / Math.log2(a)));
}



/*  Solution 4   */

function solveForExp(a, b) {
    let x = 0
    let y
    for (let i = 0; i < 20; i++) {
        Math.pow(a, x) == b ? y = x : x++
    }
    return y
}