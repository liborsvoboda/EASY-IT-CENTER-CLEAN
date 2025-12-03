/*

Product of Two Largest Numbers

Create a function that takes an array and returns the product of the largest and second largest number.

Examples
product([2, 3, 1, -1, 2]) ➞ 6
// 2 * 3 = 6

product([-2, -2, -1, -1]) ➞ 2
// -2 * - 1 = 2

product([8, 8, 8]) ➞ 64
// 8 * 8 = 64

product([2, 8, 8, 8]) ➞ 16
// 2 * 8 = 16


Notes
The numbers in the array are all integers.
*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const product = arr => {
    const uniqs = [...new Set(arr)].sort((a, b) => a - b);
    const max = uniqs.pop();
    return max * (uniqs.length ? uniqs.pop() : max);
};




//#############################################################
//#  SOLUTION 2  
//#############################################################


const product = (arr) => {
    let largest, nextLargest;

    for (let n of arr) {
        if (largest === undefined) {
            largest = n;
        } else if (n > largest) {
            nextLargest = largest;
            largest = n;
        } else if (n > nextLargest && n !== largest) {
            nextLargest = n;
        }
    }

    if (nextLargest === undefined) {
        nextLargest = largest;
    }

    return largest * nextLargest;
};




//#############################################################
//#  SOLUTION 3
//#############################################################


function product(arr) {
    let productResult = arr.sort((a, b) => b - a)
        .filter((x, i, arr) => arr.indexOf(x) === i);

    return productResult.length === 1 ? Math.pow(productResult, 2) :
        productResult[0] * productResult[1];
}




//#############################################################
//#  SOLUTION 4
//#############################################################


function product(arr) {
    let result = Array.from(new Set(arr.sort((a, b) => b - a)));
    return result.length === 1 ? result[0] ** 2 : result.slice(0, 2).reduce((x, y) => x * y, 1)
}




//#############################################################
//#  SOLUTION 5
//#############################################################


const product = (arr) =>
    arr.every(e => e == arr[0]) ?
    arr[0] ** 2 : [...new Set(arr)].sort((a, b) => b - a).slice(0, 2).reduce((a, b) => a * b, 1);




//#############################################################
//#  SOLUTION 6
//#############################################################


function product(arr) {
    const sortedArr = Array.from(new Set(arr)).sort();
    if (sortedArr.length > 1) {
        return sortedArr.pop() * sortedArr.pop();
    } else {
        return sortedArr.pop() ** 2;
    }

}