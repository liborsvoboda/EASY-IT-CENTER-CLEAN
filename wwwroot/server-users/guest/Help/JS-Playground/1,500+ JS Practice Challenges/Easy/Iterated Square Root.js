/*  
Iterated Square Root

The iterated square root of a number is the number of times the square root function must be applied to bring the number strictly under 2.

Given an integer, return its iterated square root. Return "invalid" if it is negative.

Examples
iSqrt(1) ➞ 0

iSqrt(2) ➞ 1

iSqrt(7) ➞ 2

iSqrt(27) ➞ 3

iSqrt(256) ➞ 4

iSqrt(-1) ➞ "invalid"

Notes
Idea for iterated square root by Richard Spence.
*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#############################################################
//#    SOLUTION 1

const iSqrt = n => n < 0 ? 'invalid' : n < 2 ? 0 : 1 + iSqrt(n ** .5);


//#############################################################
//#    SOLUTION 2


const iSqrt = (n) => {
    let number = n;
    if (number === 1) return 0;
    if (number < 1) return "invalid";
    for (let i = 1; i < n; i++) {
        number = Math.sqrt(number);
        if (number < 2) {
            return i;
        }
    }
};


//#############################################################
//#    SOLUTION 3


const iSqrt = n => n < 0 ? "invalid" : Math.ceil(Math.log2(Math.log2(n + 1)));