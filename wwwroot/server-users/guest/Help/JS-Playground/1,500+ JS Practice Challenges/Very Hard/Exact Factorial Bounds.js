/*  

Exact Factorial Bounds

Create a function that tests if a number is the exact upper bound of the factorial of n. If so, return an array of the exact factorial bound and n, or otherwise, the string "Not exact!".

Examples
isExact(6) ➞ [6, 3]

isExact(24) ➞ [24, 4]

isExact(125) ➞ "Not exact!"

isExact(720) ➞ [720, 6]

isExact(1024) ➞ "Not exact!"

isExact(40320) ➞ [40320, 8]

Notes
There will be no exceptions to handle, all inputs are positive integers.
A recursive version of this challenge can be found via this link.

*/




//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################



const isExact = n => {
    let [p, i] = [1, 1]
    while (p < n) { p *= i++ }
    return p == n ? [n, i - 1] : 'Not exact!'
}




//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


function isExact(n) {
    const number = n;
    let check = 0;
    for (let i = 2; n > 1; i++) {
        check = n;
        n /= i;
    }
    return n === 1 ? [number, check] : "Not exact!";
}



//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################



const factorial = num => (num < 2 ? 1 : num * factorial(num - 1));

const isExact = num => {
    let isExactFactorial = false;
    let i = 1;
    let result;

    do {
        result = factorial(i++);
        if (result === num) isExactFactorial = true;
    } while (result < num);

    return isExactFactorial ? [num, i - 1] : 'Not exact!';
};