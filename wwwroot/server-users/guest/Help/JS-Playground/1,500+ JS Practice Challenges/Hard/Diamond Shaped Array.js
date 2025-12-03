/*

Diamond Shaped Array

Create a function that returns an array that expands by 1 from 1 to the value of the input, and then reduces back to 1. Items in the arrays will be the same as the length of the arrays.

Examples
diamondArrays(1) ➞ [[1]]

diamondArrays(2) ➞ [[1], [2, 2], [1]]

diamondArrays(5) ➞ [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [4, 4, 4, 4], [3, 3, 3], [2, 2], [1]]

Notes

*/




//#############################################################
//#    SOLUTION 1
//#############################################################


function diamondArrays(x) {
    a = []
    for (let i = 1; i <= x; i++) {
        a.push(Array(i).fill(i))
    }
    for (let i = x - 1; i >= 1; i--) {
        a.push(Array(i).fill(i))
    }
    return a
}




//#############################################################
//#    SOLUTION 2
//#############################################################


const diamondArrays = n => [...Array(n)].map((_, i) => Array(i + 1).fill(i + 1)).concat(
    [...Array(n)].map((_, i) => Array(i + 1).fill(i + 1)).reverse().slice(1));




//#############################################################
//#    SOLUTION 3
//#############################################################


function diamondArrays(n, d = 1, a = [], h = true) {
    if (d == 0) { return a }
    var temp = [...(d + "").repeat(d)].map(x => Number(x))
    a.push(temp)
    if (d == n) { h = false }
    return h ? diamondArrays(n, d + 1, a, h) : diamondArrays(n, d - 1, a, h)
}




//#############################################################
//#    SOLUTION 4
//#############################################################


function diamondArrays(x) {
    let res = []
    let descend = 1;

    for (let i = 1; i < x * 2; i++) {
        if (i <= x) {
            res.push(Array(i).fill(i, 0, i));
        } else {
            res.push(Array(x - descend).fill(x - descend, 0, x - descend))
            descend++;
        }
    }

    return res;
}