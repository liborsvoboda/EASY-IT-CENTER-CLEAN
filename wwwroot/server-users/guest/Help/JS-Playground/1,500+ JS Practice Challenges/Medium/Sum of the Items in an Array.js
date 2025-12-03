/*
Sum of the Items in an Array

Create a function that takes an array and returns the sum of all items in the array.

Examples
sumArray([1, 2, 3]) ➞ 6
// 1 + 2 + 3 = 6

sumArray([1, [2, [1]], 3]) ➞ 7
// 1 + 2 + 1 + 3 = 7

Notes
The item in an array can be another array.

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################


//#  SOLUTION 1 

function sumArray(arr) {
    return arr.flat(Infinity).reduce((a, c) => a + c);
}


//#  SOLUTION 2  

const sumArray = arr => arr.reduce((a, v) => a + (typeof v === 'object' ? sumArray(v) : v), 0)

const sumArray = a => a.flat(Infinity).reduce((s, n) => s + n);

//#  SOLUTION 3

function sumArray(arr) {
    return arr.flat(Infinity).reduce((a, b) => a + b)
}

//#  SOLUTION 4

function sumArray(arr) {

    let arrFlat = arr.flat(Infinity),
        sum = 0;

    for (let i = 0; i < arrFlat.length; i++) {
        sum += arrFlat[i]
    }

    return sum
}


//#  SOLUTION 5

const sumArray = arr => {
    return arr.flat(Infinity).reduce((acc, cv) => acc + cv)
}



//#  SOLUTION 6


function sumArray(arr) {
    return arr.join().split(',').reduce((s, v) => s + +v, 0);
}