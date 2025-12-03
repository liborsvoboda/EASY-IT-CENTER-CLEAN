/*

Find Unique Positive Numbers from Array
Write a function that takes an array and returns a new array with unique positive (more than 0) numbers.

Examples
uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1]) ➞ [1, 3]

uniqueArr([3, -3, -3, 5, 5, -6, -2, -4, -1, 3]) ➞ [3, 5]

uniqueArr([10, 6, -12, 13, 5, 5, 13, 6, 5]) ➞ [10, 6, 13, 5]

Notes
Return the elements in the order that they are found in the array.
Your function should also work for empty arrays.

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################


//#  SOLUTION 1 

function uniqueArr(arr) {
    return arr.filter((item, pos, self) => self.indexOf(item) == pos && item > 0)
}

//#  SOLUTION 2  

const uniqueArr = arr => [...new Set(arr)].filter(v => v > 0);

const uniqueArr = arr => Array.from(new Set(arr)).filter(num => num > 0);

//#  SOLUTION 3

function uniqueArr(arr) {
    return [...new Set(arr.filter(el => el > 0))]
}


//#  SOLUTION 4

function uniqueArr(arr) {
    let set = Array.from(new Set(arr));
    return set.filter(x => x > 0);
}