/*

Sum of Found Indexes
Create a function which takes in an array of numbers and a number to find. Return the sum of every index in the array which matches the chosen number.

Examples
sumFoundIndexes([0, 3, 3, 0, 0, 3], 3) ➞ 8
// The number 3 was found at indexes 1, 2 and 5.
// 8 = 1 + 2 + 5

sumFoundIndexes([1, 2, 3, 4, 5, 6], 3) ➞ 2

sumFoundIndexes([100, 100, 100, 100, 100], 100) ➞ 10

sumFoundIndexes([5, 10, 15, 20], 2) ➞ 0
Notes
0 can be the result if no number in the array matches or if the only matching element is at index 0.



*/






/*  Solution 1   */



const sumFoundIndexes = (arr, n) => (
    arr.reduce((a, e, i) => a + ((e === n) && i), 0)
);

/*  Solution 2   */

const sumFoundIndexes = (arr, n) => arr.reduce((a, b, i) => a + (b === n ? i : 0), 0);

const sumFoundIndexes = (arr, n) => arr.reduce((acc, cur, i) => acc + (cur === n ? i : 0), 0);

const sumFoundIndexes = (arr, n) => arr.reduce((a, c, i) => a + (c === n ? i : 0), 0)

sumFoundIndexes = (arr, n) => arr.map((x, i) => i).filter((x, i) => arr[i] == n).reduce((a, b) => a + b, 0);

const sumFoundIndexes = (arr, n) => arr.reduce((a, c, i) => a + i * !(c - n), 0);




/*  Solution 3   */


function sumFoundIndexes(arr, n) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == n) {
            sum += i;
        }
    }
    return sum;
}



/*  Solution 4   */



function sumFoundIndexes(arr, n) {
    let sum = 0
    arr.forEach((r, index) => sum += r === n ? index : 0)
    return sum
}




const sumFoundIndexes = (arr, n) => {
    let count = 0
    arr.map((x, i) => x == n ? count += i : "")
    return count
}




function sumFoundIndexes(arr, n) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == n) {
            res += i;
        }
    }
    return res;
}




function sumFoundIndexes(arr, n) {
    total = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == n) {
            total += i
        }
    }
    return total
}