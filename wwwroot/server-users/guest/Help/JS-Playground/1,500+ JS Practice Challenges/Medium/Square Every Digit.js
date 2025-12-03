/*


Square Every Digit
Create a function that squares every digit of a number.

Examples
squareDigits(9119) ➞ 811181

squareDigits(2483) ➞ 416649

squareDigits(3212) ➞ 9414
Notes
The function receives an integer and must return an integer.


*/






/*  Solution 1   */

/**
 * Squares the digits of the given number
 * @param {integer} n
 * @return {integer}
 */
function squareDigits(n) {
    return +[...String(n)].map(x => x * x).join('');
}





function squareDigits(n) {
    let s = String(n).split('').map(item => Number(item))
    return Number(Array.from(s, x => x * x).join(''))
}

/*  Solution 2   */

const squareDigits = n => +(('' + n).replace(/./g, v => v * v));

const squareDigits = n => +n.toString().split('').map(x => x * x).join('');

const squareDigits = (n) => Number(n.toString().split('').map(x => String(Math.pow(Number(x), 2))).join(''))

function squareDigits(n) {
    return +(n.toString().split("").map(elem => Math.pow(elem, 2)).join(""));
}





/*  Solution 3   */

function squareDigits(n) {
    return Number(n.toString().split('').map(e => (e * e)).join(''))
}


function squareDigits(n) {
    return parseInt(n.toString(10).split("").map(number => number ** 2).join(""));
}



/*  Solution 4   */



/**
 * Squares the digits of the given number
 * @param {integer} n
 * @return {integer}
 */
const squareDigits = n => {
    const arr = Array.from(n.toString())
    const result = []

    arr.forEach(n => result.push(n ** 2))

    return parseInt(result.join(''))
}





/**
 * Squares the digits of the given number
 * @param {integer} n
 * @return {integer}
 */
function squareDigits(n) {
    var arr = []
    for (var i = 0; i < n.toString().length; i++) {
        var sqt = Math.pow(Number(n.toString().charAt(i)), 2)
        arr.push(sqt)
    }
    return Number(arr.join(''));
}