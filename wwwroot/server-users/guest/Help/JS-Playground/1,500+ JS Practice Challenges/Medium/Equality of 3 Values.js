/*

Equality of 3 Values
Create a function that takes three integer arguments (a, b, c) and returns the amount of integers which are of equal value.

Examples
equal(3, 4, 3) ➞ 2

equal(1, 1, 1) ➞ 3

equal(3, 4, 1) ➞ 0
Notes
Your function must return 0, 2 or 3.



*/






/*  Solution 1   */

function equal(a, b, c) {
    const size = (new Set([a, b, c])).size;
    return size === 3 ? 0 : 4 - size;
}



/*  Solution 2   */



const equal = (a, b, c) => {
    var z = 4 - [...new Set([a, b, c])].length
    return z == 1 ? 0 : z;
}

/*  Solution 3   */


function equal(a, b, c) {
    return [...arguments].filter((e, i, a) => {
        return a.filter((x, idx) => idx != i).includes(e)
    }).length;
}



/*  Solution 4   */


function equal(a, b, c) {
    let counter = 0;
    if (a === b && a === c && b === c) {
        return 3;
    } else if ((a === b || a === c || b === c) && !(a === b === c)) {
        return 2;
    } else return 0;
}