/*

Odd Up, Even Down — N Times

Create a function that performs an even-odd transform to an array, n times. Each even-odd transformation:

Adds two (+2) to each odd integer.
Subtracts two (-2) to each even integer.

Examples
evenOddTransform([3, 4, 9], 3) ➞ [9, -2, 15]
// Since [3, 4, 9] => [5, 2, 11] => [7, 0, 13] => [9, -2, 15]

evenOddTransform([0, 0, 0], 10) ➞ [-20, -20, -20]

evenOddTransform([1, 2, 3], 1) ➞ [3, 0, 5]

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 


function evenOddTransform(arr, n) {
    return arr.map(x => (x % 2 == 0) ? x - 2 * n : x + 2 * n);
}



//#  SOLUTION 2  

const evenOddTransform = (arr, n) => arr.map(x => x % 2 ? x + (2 * n) : x - (2 * n))


const evenOddTransform = (A, n) => A.map(a => a + n * [-2, 2][a % 2])


//#  SOLUTION 3


function evenOddTransform(arr, n) {
    const
        isItEven = (n) => (n % 2) === 0,
        repeatFn = (f, n) => Array(n).fill(1).forEach(f),
        getEvenOddOffset = (n) => isItEven(n) ? -2 : 2,
        transform = (n) => n += getEvenOddOffset(n),
        transformList = () => arr = arr.map(transform);

    repeatFn(transformList, n);
    return arr;
}




//#  SOLUTION 4


function evenOddTransform(arr, n) {
    return arr.map(function(x) {
        if (x % 2 == 1) return x + 2 * n;
        return x - 2 * n;
    });
}


//#  SOLUTION 5


function evenOddTransform(arr, n) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            arr[i] = arr[i] + (-2) * n;
        } else {
            arr[i] = arr[i] + (2) * n;
        }
    }
    return arr;
}




//#  SOLUTION 6


function evenOddTransform(arr, n) {
    return (arr.map((e, i, arr) =>
        e % 2 === 0 ? e - (n * 2) : e + (n * 2)
    ))
}