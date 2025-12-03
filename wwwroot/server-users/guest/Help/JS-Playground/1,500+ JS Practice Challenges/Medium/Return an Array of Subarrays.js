/*

Return an Array of Subarrays

Write a function that takes three arguments (x, y, z) and returns an array containing x subarrays (e.g. [[], [], []]), each containing y number of item z.

x Number of subarrays contained within the main array.
y Number of items contained within each subarray.
z Item contained within each subarray.
Examples
matrix(3, 2, 3) ➞ [[3, 3], [3, 3], [3, 3]]

matrix(2, 1, "edabit") ➞ [["edabit"], ["edabit"]]

matrix(3, 2, 0) ➞ [[0, 0], [0, 0], [0, 0]]

Notes
The first two arguments will always be integers.
The third argument is either a string or an integer.
*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 


function matrix(x, y, z) {
    return Array(x).fill(Array(y).fill(z));
}



//#  SOLUTION 2  

const matrix = (x, y, z) =>
    Array.from({ length: x }, () =>
        Array.from({ length: y }, () => z)
    );



//#  SOLUTION 3

const matrix = (length, repeat, value) => Array(length).fill(Array(repeat).fill(value))


//#  SOLUTION 4


function matrix(x, y, z) {
    return Array(x).fill().map(m => Array(y).fill(z));
}


//#  SOLUTION 5


function matrix(x, y, z) {
    let array = [];
    for (let i = 0; i < x; i++) {
        array.push([]);
        for (let j = 0; j < y; j++) {
            array[i].push(z);
        }
    }
    return array;
}