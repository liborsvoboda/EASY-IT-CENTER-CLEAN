/*


Sastry Numbers
In this challenge, you have to establish if a given integer n is a Sastry number. If the number resulting from the concatenation of an integer n with its successor is a perfect square, then n is a Sastry Number.

Given a positive integer n, implement a function that returns true if n is a Sastry number, or false if it's not.

Examples
isSastry(183) ➞ true
// Concatenation of n and its successor = 183184
// 183184 is a perfect square (428 ^ 2)

isSastry(184) ➞ false
// Concatenation of n and its successor = 184185
// 184185 is not a perfect square

isSastry(106755) ➞ true
// Concatenation of n and its successor = 106755106756
// 106755106756 is a perfect square (326734 ^ 2)
Notes
A perfect square is a number with a square root equals to a whole integer.
You can expect only valid positive integers greater than 0 as input, without exceptions to handle. Zero is a perfect square, but the concatenation 00 isn't considered as a valid result to check.
In JavaScript, despite the specific challenge the results are proofed, the method used to calculate if an integer greater of 2 ** 53 - 1 is a Sastry number can lead to errors due to the approximation of the JS engine.


*/






/*  Solution 1   */





/*  Solution 2   */

const isSastry = num => Number.isInteger(Math.sqrt(`${num}${num + 1}`));

const isSastry = n => Number.isInteger(Math.sqrt(Number(String(n).concat(String(n + 1)))));

const isSastry = n => Number.isInteger(Math.sqrt(Number(String(n).concat(String(n + 1)))));

const isSastry = (number) => Number.isInteger(Math.sqrt(String(number) + String(number + 1)))

const isSastry = n => Number.isInteger(Math.sqrt(+`${n}${n + 1}`));

const isSastry = n => Number.isInteger(Math.sqrt(+('' + n + (n + 1))))


/*  Solution 3   */

function isSastry(number) {
    return Number.isInteger(Math.sqrt(Number(number.toString() + (number + 1).toString())))
}



const isSastry = number => {
    let a = (number + 1).toString()
    number = number.toString().concat(a)
    return Math.sqrt(+number) === Math.round(Math.sqrt(+number)) ? true : false
}



/*  Solution 4   */


function isSastry(number) {
    let number1 = number + 1

    return Math.sqrt(Number(String(number).concat(number1))) === Number(Math.sqrt(Number(String(number).concat(number1))).toFixed(0))
}