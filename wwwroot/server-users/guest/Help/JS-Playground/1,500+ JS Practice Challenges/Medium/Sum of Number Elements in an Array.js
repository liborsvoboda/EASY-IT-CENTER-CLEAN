/*
Sum of Number Elements in an Array

Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. Create a function that takes an array and returns the sum of all numbers in the array.

Examples
numbersSum([1, 2, "13", "4", "645"]) ➞ 3

numbersSum([true, false, "123", "75"]) ➞ 0

numbersSum([1, 2, 3, 4, 5, true]) ➞ 15

Notes
Check the Resources tab for help.

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#############################################################
//#  SOLUTION 1 
//#############################################################



const numbersSum = arr =>
    arr.reduce((total, value) =>
        total + (typeof value === 'number' ? value : 0), 0);


//#############################################################
//#  SOLUTION 2  
//#############################################################


function numbersSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) !== "number") {
            continue;
        }
        sum += arr[i];
    }
    return sum;
}



//#############################################################
//#  SOLUTION 3
//#############################################################


const numbersSum = arr => arr.filter(i => (typeof i) === 'number').reduce((a, b) => a + b, 0)

const numbersSum = arr => arr.reduce((a, b) => a + (typeof b === 'number' ? b : 0), 0);



const numbersSum = arr => arr.filter(x => typeof(x) === 'number')
    .reduce((a, b) => a + b, 0);



numbersSum = a => a.reduce((a, b) => typeof b == 'number' ? a + b : a, 0)





//#############################################################
//#  SOLUTION 4
//#############################################################


function numbersSum(arr) {
    const newArr = arr.filter(item => typeof(item) === 'number');
    if (newArr.length === 0) {
        return 0;
    }
    const sum = newArr.reduce((acc, current) => acc + current);
    return sum;
}




//#############################################################
//#  SOLUTION 5
//#############################################################


function numbersSum(arr) {
    const numArr = arr.filter(el => typeof el === 'number');
    if (numArr.length < 2) {
        return numArr[0] || 0;
    }
    return numArr.reduce((a, b) => a + b);
}



//#############################################################
//#  SOLUTION 6
//#############################################################


function numbersSum(arr) {
    var result = arr.filter(function(item) {
        return (typeof item === 'number');
    });
    var operation = result.reduce(function(acumulado, atual) {
        return acumulado + atual
    }, 0)
    return operation
}