/*


Return the Sum of the Two Smallest Numbers
Create a function that takes an array of numbers and returns the sum of the two lowest positive numbers.

Examples
sumTwoSmallestNums([19, 5, 42, 2, 77]) ➞ 7

sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]) ➞ 3453455

sumTwoSmallestNums([2, 9, 6, -1]) ➞ 8

sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]) ➞ 563

sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]) ➞ 4519
Notes
Don't count negative numbers.
Floats and empty arrays will not be used in any of the test cases.


*/






/*  Solution 1   */


function sumTwoSmallestNums(arr) {
    arr = arr.sort((a, b) => a - b).filter(x => x > 0);
    return arr[0] + arr[1];

}


/*  Solution 2   */


function sumTwoSmallestNums(arr) {
    return arr.filter(a => a > 0).sort((a, b) => a > b).slice(0, 2).reduce((a, b) => a + b);
}


/*  Solution 3   */



function sumTwoSmallestNums(arr) {
    return arr.filter((item) => item >= 0)
        .sort((a, b) => a - b)
        .slice(0, 2)
        .reduce((acc, item) => acc + item);
}


/*  Solution 4   */

function sumTwoSmallestNums(arr) {
    var lowest = arr.filter((arr) => arr > 0).sort((a, b) => a - b).slice(0, 2)
    return lowest[0] + lowest[1]
}



function sumTwoSmallestNums(arr) {
    var arr = arr.filter(x => x >= 0).sort((a, b) => a - b);
    return arr[0] + arr[1];
}



function sumTwoSmallestNums(arr) {
    return arr.filter(num => num >= 0)
        .sort((a, b) => a > b ? 1 : (a < b ? -1 : 0))
        .slice(0, 2)
        .reduce((sum, num) => sum + num, 0);
}



function sumTwoSmallestNums(arr) {
    let newarr = arr.sort((a, b) => a > b);
    let user = newarr.filter(element => element > 0)
    return user[0] + user[1];
}