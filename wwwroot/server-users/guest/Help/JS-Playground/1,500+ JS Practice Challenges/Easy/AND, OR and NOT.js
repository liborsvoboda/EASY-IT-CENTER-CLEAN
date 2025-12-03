/*  

AND, OR and NOT
You will need to write three unfinished logic gates. Continue to write the three logic gates: AND, OR, and NOT.

Examples
AND(1, 1) ➞ 1
AND(0, 0) ➞ 0

OR(1, 0) ➞ 1
OR(1, 1) ➞ 1

NOT(0) ➞ 1
NOT(1) ➞ 0

Notes
Check the Resourses tab for some help.
*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################





//#    SOLUTION 1


const NOT = x => +!x
const AND = (a, b) => a & b
const OR = (a, b) => a | b;



//#    SOLUTION 2


function NOT(n) {
    return 1 - n;
}

function AND(a, b) {
    return a & b;
}

function OR(a, b) {
    return a | b;
}




//#    SOLUTION 3


const NOT = n => !n % 2;

const AND = (a, b) => a && b;

const OR = (a, b) => a || b;





//#    SOLUTION 4


function NOT(n) {
    return n === 0 ? 1 : n === 1 ? 0 : !n;
}

function AND(a, b) {
    return a && b;
}

function OR(a, b) {
    return a || b;
}




//#    SOLUTION 5



function NOT(n) {
    const arr = [1, 0]
    const filtered = arr.filter(val => val !== n);
    return filtered[0]
}

function AND(...param) {
    const arr = [...param]
    const sorted = arr.sort((a, b) => a - b);
    return sorted[0];
}

function OR(a, b) {
    const arr = [a, b]
    const sorted = arr.sort((a, b) => b - a);
    return sorted[0]
}




//#    SOLUTION 6


function NOT(n) {
    return n === 1 ? 0 : 1;
}

function AND(a, b) {
    if (a === 1 && b === 1) return 1;
    return 0;
}

function OR(a, b) {
    if (a === 0 && b === 0) return 0;
    return 1;
}






//#    SOLUTION 7



function NOT(n) {
    if (n == 1) { return 0; } else if (n == 0) { return 1; }
}

function AND(a, b) {
    if (a == 1 && b == 1) { return 1; } else if (a == 0 && b == 1) { return 0; } else if (a == 1 && b == 0) { return 0; } else if (a == 0 && b == 0) { return 0; }
}

function OR(a, b) {
    if (a == 1 && b == 1) { return 1; } else if (a == 1 && b == 0) { return 1; } else if (a == 0 && b == 1) { return 1; } else if (a == 0 && b == 0) { return 0; }
}



//#    SOLUTION 7


function NOT(n) {
    return n === 1 ? 0 : 1;
}

function AND(a, b) {
    return a === b ? a : 0;
}

function OR(a, b) {
    return a + b === 2 || a + b === 1 ? 1 : 0;
}