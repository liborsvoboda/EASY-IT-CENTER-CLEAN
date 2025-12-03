/*

Find NaN in an Array

Create a function to find NaN in an array of numbers. The return value should be the index where NaN is found. If NaN is not found in the array, then return -1.

Examples
findNaN([1, 2, NaN]) ➞ 2

findNaN([NaN, 1, 2, 3, 4]) ➞ 0

findNaN([0, 1, 2, 3, 4]) ➞ -1

Notes
Inputs are array of numbers.
*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 

const findNaN = r => r.map(String).indexOf('NaN')

const findNaN = numbers => numbers.findIndex(a => a.toString().match(/[NaN]/));

//#  SOLUTION 2  

function findNaN(arr) {
    return arr.findIndex(x => isNaN(x))
}



//#  SOLUTION 3


function findNaN(array) {
    var foundIt = array.findIndex(n => Number.isNaN(n));
    return foundIt;
    return -1;
}


//#  SOLUTION 4


function findNaN(number) {

    for (let i = 0; i < number.length; i++) {
        if (isNaN(number[i])) {
            return i
        }
    }
    return -1

}