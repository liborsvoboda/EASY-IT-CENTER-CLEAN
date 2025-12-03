/*

Reverse Coding Challenge #6

This is a reverse coding challenge. Normally you're given explicit directions with how to create a function. Here, you must generate your own function to satisfy the relationship between the inputs and outputs.

Your task is to create a function that, when fed the inputs below, produces the sample outputs shown.

Examples
mysteryFunc(152) ➞ 10

mysteryFunc(832) ➞ 48

mysteryFunc(19) ➞ 9

mysteryFunc(133) ➞ 9

*/





//#############################################################
//#  SOLUTION 1 
//#############################################################


const mysteryFunc = n => [...('' + n)].reduce((t, c) => t * c);


const mysteryFunc = n => [...n.toString()].map(v => +v).reduce((acc, val) => acc * val);


const mysteryFunc = num => num.toString().split('').reduce((acc, val) => acc * Number(val), 1);





//#############################################################
//#  SOLUTION 2  
//#############################################################



const mysteryFunc = num =>
    String(num)
    .split('')
    .reduce((total, digit) => total * Number(digit));







//#############################################################
//#  SOLUTION 3
//#############################################################


function mysteryFunc(num) {
    let arr = []
    let a
    let i = num
    while (i > 0) {
        a = i % 10
        i = Math.floor(i / 10)
        arr.push(a)
    }
    return arr.reduce((pv, cv) => pv * cv, 1)
}









//#############################################################
//#  SOLUTION 4
//#############################################################




function mysteryFunc(num) {
    return num.toString().split("").reverse().reduce((a, b) => a * b);
}