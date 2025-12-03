/*

Omnipresent Value
A value is omnipresent if it exists in every subarray inside the main array.

To illustrate:

[[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// 3 exists in every element inside this array, so is omnipresent.
Create a function that determines whether an input value is omnipresent for a given array.

Examples
isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) ➞ true

isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) ➞ false

isOmnipresent([[5], [5], [5], [6, 5]], 5) ➞ true

isOmnipresent([[5], [5], [5], [6, 5]], 6) ➞ false
Notes

*/

//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################




/*  Solution 1   */

function isOmnipresent(arr, val) {
    return arr.every(x => x.includes(val));
}





/*  Solution 2   */

const isOmnipresent = (arr, val) => arr.every(x => x.includes(val));

const isOmnipresent = (arr, val) => arr.every(subArr => subArr.includes(val));

const isOmnipresent = (a, v) => a.every(x => x.includes(v))

const isOmnipresent = (arr, val) => arr.map(items => items.indexOf(val) > -1).indexOf(false) === -1;





/*  Solution 3   */

function isOmnipresent(arr, val) {
    return arr.every((e) => e.includes(val))
}


function isOmnipresent(arr, val) {
    return arr.every(arr => arr.includes(val))
}



function isOmnipresent(arr, val) {
    return arr.every(x => x.includes(val));
}