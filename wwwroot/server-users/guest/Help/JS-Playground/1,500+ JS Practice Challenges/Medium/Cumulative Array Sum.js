/*

Cumulative Array Sum

Create a function that takes an array of numbers and returns an array where each number is the sum of itself + all previous numbers in the array.

Examples
cumulativeSum([1, 2, 3]) ➞ [1, 3, 6]

cumulativeSum([1, -2, 3]) ➞ [1, -1, 2]

cumulativeSum([3, 3, -2, 408, 3, 3]) ➞ [3, 6, 4, 412, 415, 418]

Notes
Return an empty array if the input is an empty array.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################



function cumulativeSum(array) {
    var sum = 0;
    return array.map(x => (sum += x))
}


//#############################################################
//#  SOLUTION 2  
//#############################################################



const cumulativeSum = arr => {
    return arr.map((x, i) => {
        return arr.reduce((acc, y, j) => i > j ? acc += y : acc, x);
    });
}



//#############################################################
//#  SOLUTION 3
//#############################################################



function cumulativeSum(arr) {
    return arr.reduce((a, b, c) => [...a, b + (a[c - 1] || 0)], [])
}




//#############################################################
//#  SOLUTION 4
//#############################################################


const cumulativeSum = array => {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        const sliced = array.slice(0, i + 1);
        newArr.push(sliced);
        newArr[i] = newArr[i].reduce((acc, curr) => acc += curr);
    }
    return newArr;
};




//#############################################################
//#  SOLUTION 5
//#############################################################


function cumulativeSum(array) {
    let arr = array.reduce((a, b) => [...a, b + a[a.length - 1]], [0])
    arr.shift()
    return arr
}