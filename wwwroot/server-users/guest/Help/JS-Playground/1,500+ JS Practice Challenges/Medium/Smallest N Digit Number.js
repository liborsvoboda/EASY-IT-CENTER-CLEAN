/*

Smallest N Digit Number

Write a function that returns the smallest N-digit number which is a multiple of the specified value.

Examples
smallest(3, 8) ➞ 104
// Smallest 3-digit integer that is a multiple of 8

smallest(5, 12) ➞ 10008

smallest(7, 1) ➞ 1000000

smallest(2, 3) ➞ 12

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


function smallest(digits, value) {
    let num = Math.pow(10, digits - 1)
    return num + value - (num % value || value)
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function smallest(digits, value) {
    let count = Number(1 + new Array(digits - 1).fill(0).join(""));
    while (count % value !== 0) {
        count++
    }
    return count;
}




//#############################################################
//#  SOLUTION 3
//#############################################################


const smallest = (digits, value) => {
    let numStart = `1${'0'.repeat(digits - 1)}`;
    let numEnd = `9${'9'.repeat(digits - 1)}`;

    for (let i = numStart; i <= numEnd; i++) {
        if (i % value == 0) return Number(i);
    }
    return undefined;
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function smallest(digits, value) {

    let stellen = [];
    let result = [];
    for (let i = 0; i < digits; i++) {
        i > 0 ? stellen.push(0) : stellen.push(1);
    }

    let num = parseInt(stellen.join(''));

    for (let j = num; j < num + value; j++) {
        j % value == 0 ? result.push(j) : false;
    }

    return result[0];
}