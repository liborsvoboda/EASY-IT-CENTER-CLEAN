/*

Narcissistic Numbers

A number is narcissistic when the sum of its digits, with each digit raised to the power of digits quantity, is equal to the number itself.

153 ➞ 3 digits ➞ 1³ + 5³ + 3³ = 1 + 125 + 27 = 153 ➞ Narcissistic
84 ➞ 2 digits ➞ 8² + 4² = 64 + 16 = 80 ➞ Not narcissistic
Given a positive integer n, implement a function that returns true if the number is narcissistic, and false if it's not.

Examples
isNarcissistic(8208) ➞ true
// 8⁴ + 2⁴ + 0⁴ + 8⁴ = 8208

isNarcissistic(22) ➞ false
// 2² + 2² = 8

isNarcissistic(9) ➞ true
// 9¹ = 9


Notes
Trivially, any number in the 1-9 range is narcissistic and any two-digit number is not.
Curious fact: Only 88 numbers are narcissistic.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function isNarcissistic(n) {
    const digits = [...String(n)];
    return digits.reduce((a, c) => a + c ** digits.length, 0) === n;
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function isNarcissistic(n) {
    return String(n)
        .split("")
        .map(v => Math.pow(v, String(n).length))
        .reduce((a, v) => a + v) === n ? true : false;
}



//#############################################################
//#  SOLUTION 3
//#############################################################


const isNarcissistic = n => [...String(n)].reduce((a, b, i, arr) => a + b ** (arr.length), 0) === n



//#############################################################
//#  SOLUTION 4
//#############################################################


const isNarcissistic = n => {
    let array = n.toString().split('')
    let length = array.length;

    let result = 0

    for (let i = 0; i < array.length; i++) {
        result += Math.pow(Number(array[i]), length)
    }

    return result === n ? true : false;
}