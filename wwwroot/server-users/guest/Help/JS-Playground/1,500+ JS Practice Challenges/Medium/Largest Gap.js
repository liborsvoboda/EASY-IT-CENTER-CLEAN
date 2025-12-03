/*

Largest Gap

Given an array of integers, return the largest gap between elements of the sorted version of that array.

Here's an illustrative example. Consider the array:

[9, 4, 26, 26, 0, 0, 5, 20, 6, 25, 5]
... which, after sorting, becomes the array:

[0, 0, 4, 5, 5, 6, 9, 20, 25, 26, 26]
... so that we now see that the largest gap in the array is the gap of 11 between 9 and 20.

Examples
largestGap([9, 4, 26, 26, 0, 0, 5, 20, 6, 25, 5]) ➞ 11
// After sorting get [0, 0, 4, 5, 5, 6, 9, 20, 25, 26, 26]
// Largest gap of 11 between 9 and 20

largestGap([14, 13, 7, 1, 4, 12, 3, 7, 7, 12, 11, 5, 7]) ➞ 4
// After sorting get [1, 3, 4, 5, 7, 7, 7, 7, 11, 12, 12, 13, 14]
// Largest gap of 4 between 7 and 11

largestGap([13, 3, 8, 5, 5, 2, 13, 6, 14, 2, 11, 4, 10, 8, 1, 9]) ➞ 2
// After sorting get [1, 2, 2, 3, 4, 5, 5, 6, 8, 8, 9, 10, 11, 13, 13, 14]
// Largest gap of 2 between 6 and 8
*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


function largestGap(arr) {
    arr.sort((a, b) => a - b);
    return Math.max(...arr.map((x, i) => i && x - arr[i - 1]));
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function largestGap(arr) {
    arr = arr.sort((a, b) => a - b)
    const distanceArr = [arr[0]]
    for (let i = 1; i < arr.length; i++) {
        distanceArr.push(arr[i] - arr[i - 1])
    }
    return Math.max(...distanceArr)
}




//#############################################################
//#  SOLUTION 3
//#############################################################


const largestGap = arr => (
    arr.sort((a, b) => a - b).slice(1).reduce((longest, e, i) => (
        Math.max(longest, e - arr[i])
    ), 0)
);



//#############################################################
//#  SOLUTION 4
//#############################################################


function largestGap(arr) {
    let arrSlices = [];
    let diff = [];
    const asc = arr.sort((a, b) => a - b);
    for (let i = 0; i < asc.length - 1; i++) {
        arrSlices.push(asc.slice(i, i + 2));
        diff.push(arrSlices[i][1] - arrSlices[i][0])
    }
    const gap = Math.max(...diff);
    return gap
}