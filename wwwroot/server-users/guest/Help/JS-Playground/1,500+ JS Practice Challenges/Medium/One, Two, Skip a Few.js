/*

One, Two, Skip a Few

Create a function which calculates how many numbers are missing from an ordered number line. This number line starts at the first value of the array, and increases by 1 to the end of the number line, ending at the last value of the array.

howManyMissing([1, 2, 3, 8, 9]) ➞ 4

// The number line starts at 1 and ends at 9 (so the numbers 0 and 10 aren't missing from it).
// The numbers missing from this line are 4, 5, 6, and 7.
// 4 numbers are missing.
Examples
howManyMissing([1, 3]) ➞ 1

howManyMissing([7, 10, 11, 12]) ➞ 2

howManyMissing([1, 3, 5, 7, 9, 11]) ➞ 5

howManyMissing([5, 6, 7, 8]) ➞ 0

Notes
If the number line is complete, or the array is empty, return 0.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


function howManyMissing(arr) {
    return arr.length < 2 ? 0 : arr[arr.length - 1] - arr[0] - arr.length + 1;
}



//#############################################################
//#  SOLUTION 2  
//#############################################################



const howManyMissing = arr => {
    return arr.reduce((a, b, i) => a + (arr[i + 1] - b > 1 ? arr[i + 1] - b - 1 : 0), 0);
}



//#############################################################
//#  SOLUTION 3
//#############################################################


const howManyMissing = arr => arr.length < 1 ? 0 : (Math.max(...arr) - Math.min(...arr)) - (arr.length - 1);



const howManyMissing = (arr) => arr.slice(1, ).reduce((a, x, i) => a + (x - arr[i] - 1), 0)


const howManyMissing = a => a.length ? Math.max(...a) - Math.min(...a) - a.length + 1 : 0


//#############################################################
//#  SOLUTION 4
//#############################################################



function howManyMissing(arr) {
    var a = arr.map((x, i) => (arr[i + 1] - x) - 1)
    a.pop()
    return a.length == 0 ? 0 : a.reduce((a, b) => a + b)
}