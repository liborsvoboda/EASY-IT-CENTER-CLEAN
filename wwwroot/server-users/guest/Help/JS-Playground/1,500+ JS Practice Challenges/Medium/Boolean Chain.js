/*

Boolean Chain
Write three functions:

AND
OR
XOR
These functions should evaluate an array of true and false values, starting from the leftmost element and evaluating pairwise.

Examples
and([true, true, false, true]) ➞ false
// and([true, true, false, true]) => and([true, false, true]) => and([false, true]) => false

or([true, true, false, false]) ➞ true
// or([true, true, false, true]) => or([true, false, false]) => or([true, false]) => true

xor([true, true, false, false]) ➞ false
// xor([true, true, false, false]) => xor([false, false, false]) => xor([false, false]) => false


Notes
XOR is the same as OR, except that it excludes [true, true].
Each time you evaluate an element at 0 and at 1, you collapse it into the single result.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


function and(arr) {
    return arr.reduce((a, b) => a && b);
}

function or(arr) {
    return arr.reduce((a, b) => a || b);
}

function xor(arr) {
    return arr.reduce((a, b) => a !== b);
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function and(arr) {
    return arr.reduce((acc, val) => acc && val);
}

function or(arr) {
    return arr.reduce((acc, val) => acc || val);
}

function xor(arr) {
    return arr.reduce((acc, val) => Boolean(acc ^ val));
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function and(arr) {
    while (arr.length > 1) {
        arr.splice(0, 2, arr[0] & arr[1]);
    }
    return !!arr[0];
}

function or(arr) {
    while (arr.length > 1) {
        arr.splice(0, 2, arr[0] | arr[1]);
    }
    return !!arr[0];
}

function xor(arr) {
    while (arr.length > 1) {
        arr.splice(0, 2, arr[0] ^ arr[1]);
    }
    return !!arr[0];
}



//#############################################################
//#  SOLUTION 4
//#############################################################



function and(arr) {
    return arr.every(x => x);
}

function or(arr) {
    return arr.some(x => x);
}

function xor(arr) {
    return arr.reduce((a, b) => a === b ? false : true);
}



//#############################################################
//#  SOLUTION 5
//#############################################################



function and(arr) {
    return arr.reduce((acc, curr) => acc & curr) ? true : false;
}

function or(arr) {
    return arr.reduce((acc, curr) => acc | curr) ? true : false;
}

function xor(arr) {
    return arr.reduce((acc, curr) => acc ^ curr) ? true : false;
}