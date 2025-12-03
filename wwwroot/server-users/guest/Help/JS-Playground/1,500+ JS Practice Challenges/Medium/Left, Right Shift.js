/*

Left, Right Shift

Create two functions: a left-shift function and a right-shift function. Each function will take in an array and a single parameter: the number of shifts.

[1, 2, 3, 4, 5]

[2, 3, 4, 5, 1]  // left shift of 1
[5, 1, 2, 3, 4]  // left shift of 4

[5, 1, 2, 3, 4]  // right shift of 1
[3, 4, 5, 1, 2]  // right shift of 3
Examples
leftShift([1, 2, 3, 4], 1) ➞ [2, 3, 4, 1]

rightShift([1, 2, 3, 4], 1) ➞ [4, 1, 2, 3]

leftShift([1, 2, 3, 4, 5], 3) ➞ [4, 5, 1, 2, 3]

leftShift([1, 2, 3, 4, 5], 5) ➞ [1, 2, 3, 4, 5]
// You have fully shifted the array, you end up back where you began.

leftShift([1, 2, 3, 4, 5], 6) ➞ [2, 3, 4, 5, 1]
// You should be able to take in numbers greater than the length.
// Think of the length of the array as a modulo.

Notes
num might be higher than the number of values in the array.
*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


function leftShift(arr, num) {
    return [...arr.slice(num % arr.length), ...arr.slice(0, num % arr.length)]
}

function rightShift(arr, num) {
    return [...arr.slice(arr.length - num % arr.length), ...arr.slice(0, arr.length - num % arr.length)]
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function leftShift(a, n) {
    l = a.length
    return n % l ? a.map(e => (x = e + (n % l), x > l ? x % l : x)) : a
}

function rightShift(a, n) {
    l = a.length
    return n % l ? a.map(e => (x = e + l - (n % l), x > l ? x % l : x)) : a
}



//#############################################################
//#  SOLUTION 3
//#############################################################


function leftShift(arr, num) {
    const a = arr;
    for (let i = 1; i <= num; i++) {
        a.push(a[0]);
        a.shift();
    }
    return a;
}

function rightShift(arr, num) {
    const a = arr;
    for (let i = 1; i <= num; i++) {
        a.unshift(a[a.length - 1]);
        a.pop();
    }
    return a;
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function leftShift(arr, num) {
    num = num > arr.length ? num - arr.length : num;
    return [...arr.slice(num), ...arr.slice(0, num)]
}

function rightShift(arr, num) {
    num = num > arr.length ? num - arr.length : num;
    return [...arr.slice(-num), ...arr.slice(0, -num)]
}



//#############################################################
//#  SOLUTION 5
//#############################################################



const leftShift = (arr, num) => [...arr.slice(num % arr.length), ...arr.slice(0, num % arr.length)];
const rightShift = (arr, num) => [...arr.slice(-num % arr.length), ...arr.slice(0, -num % arr.length)];