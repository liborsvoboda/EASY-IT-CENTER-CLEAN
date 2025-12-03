/*

Fix The Error: Array Reduce

The instructor assigns Boron two tasks (regarding the use of reduce() method after lecturing in array methods).

The first task is to create a function calculateSum() that takes a string and returns the sum of the ASCII values of all the characters in the string using reduce().
The second task is to create a function reverseString() that reverses and returns an input string using reduce().
While solving the problem, Boron has encountered errors. Help him fix the errors.

Examples
calculateSum("lime") ➞ 423
// 108 + 105 + 109 + 101 = 423

calculateSum("a") ➞ 97
// a = 97

reverseString("hello") ➞ "olleh"


*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const calculateSum = txt =>
    Array.from(txt).reduce((total, char) => total + char.charCodeAt(0), 0);

const reverseString = txt =>
    Array.from(txt).reduce((reversed, char) => `${char}${reversed}`, '');



//#############################################################
//#  SOLUTION 2  
//#############################################################


function calculateSum(txt) {
    return [...txt].reduce((ch, value) => ch + value.charCodeAt(), 0);
}

function reverseString(txt) {
    return [...txt].reduce((ch, value) => ch = value + ch);
}




//#############################################################
//#  SOLUTION 3
//#############################################################


const calculateSum = txt =>
    txt.split('').map((x, i) => txt.charCodeAt(i)).reduce((a, b) => a + b, 0)

const reverseString = txt =>
    txt.split('').reverse().join('')



//#############################################################
//#  SOLUTION 4
//#############################################################



function calculateSum(txt) {
    return txt
        .split('')
        .reduce((a, ch) => a + ch.charCodeAt(0), 0);
}

function reverseString(txt) {
    return txt
        .split('')
        .reduce((a, ch) => ch + a, '');
}