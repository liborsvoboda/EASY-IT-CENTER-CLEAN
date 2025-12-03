/*

Fibonacci Sequence

The Fibonacci Sequence is the sequence of numbers (Fibonacci Numbers) whose sum is the two preceding numbers (e.g. 0, 1, 1, 2, 3, etc). Using 0 and 1 as the starting values, create a function that returns an array containing all of the Fibonacci numbers less than 255.

Examples
On generating a Fibonacci number where input is the two preceding values starting from 0 and 1 [0, 1, ...].

fibonacciSequence(0, 1) ➞ 1

fibonacciSequence(1, 1) ➞ 2

fibonacciSequence(1, 2) ➞ 3

Notes
This function will take no parameters.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


function fibonacciSequence() {
    const sumOfLastTwo = ar => ar.slice(-2).reduce((a, v) => a + v, 0);

    let fib = [0, 1];
    while (sumOfLastTwo(fib) < 255) { fib.push(sumOfLastTwo(fib)); }
    return fib;
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function fibonacciSequence() {
    let arr = [0, 1]
    while (arr[arr.length - 1] < 255) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2])
    }
    return arr.filter(e => e < 255)
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function fibonacciSequence() {
    let arr = [];
    for (let i = 0; i < 14; i++) {
        if (i === 0) {
            arr.push(0);
        } else if (i === 1) {
            arr.push(1);
        } else {
            arr.push(arr[i - 1] + arr[i - 2]);
        }
    }
    return arr;
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function fibonacciSequence() {
    var numbers = [0, 1];
    var sum = 0;
    for (var i = 1; i < numbers.length; i++) {
        var add = numbers[i] + (numbers[i - 1]);
        if (add < 255) {
            numbers.push(add)
        }
    }
    return numbers
}