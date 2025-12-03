/*

Double Factorial
Create a function that takes a number num and returns its double factorial.

Examples
doubleFactorial(0) ➞ 1

doubleFactorial(2) ➞ 2

doubleFactorial(9) ➞ 945

doubleFactorial(14) ➞ 645120
Notes
Assume all input values are greater than or equal to -1.
Try to solve it with recursion.
Double factorial is not the same as factorial * 2.


*/



/*  Solution 1   */

function doubleFactorial(num) {
    return num <= 0 ? 1 : num * doubleFactorial(num - 2)
}

/*  Solution 2   */

function doubleFactorial(n) {
    if (n < 2) return 1
    if (n == 0 || n == 1) return 1;
    return n * doubleFactorial(n - 2);
}

/*  Solution 3   */

const doubleFactorial = n => n < 1 ? 1 : n * doubleFactorial(n - 2);

const doubleFactorial = n => n <= 0 ? 1 : n * doubleFactorial(n - 2);


/*  Solution 4   */

function doubleFactorial(num) {
    if (num === 0 || num === -1) {
        return 1
    }
    return num * doubleFactorial(num - 2)
}


/*  Solution 5   */

function doubleFactorial(num) {
    let count = num;

    if (num <= 0) return 1;

    if (num % 2 === 0) {
        for (let i = 1; i < num; i++) {
            if (i % 2 === 0) {
                count *= i;
            }
        }
    } else {
        for (let i = 1; i < num; i++) {
            if (i % 2 === 1) {
                count *= i;
            }
        }
    }

    return count;
}