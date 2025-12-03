/*

Pandigital Numbers

A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.

Examples
isPandigital(98140723568910) ➞ true

isPandigital(90864523148909) ➞ false
// 7 is missing.

isPandigital(112233445566778899) ➞ false

Notes
Think about the properties of a pandigital number when all duplicates are removed.
*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


function isPandigital(num) {
    return new Set([...num.toString()]).size === 10;
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


const isPandigital = num => new Set(num.toString()).size == 10




//#############################################################
//#  SOLUTION 3
//#############################################################


const isPandigital = n => new Set(n.toString().split("")).size === 10;



//#############################################################
//#  SOLUTION 4
//#############################################################


function isPandigital(num) {
    var allDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return allDigits.filter(digit => num.toString().includes(digit)).length == 10;
}



//#############################################################
//#  SOLUTION 5
//#############################################################


function isPandigital(num) {
    let numArr = num.toString().split('');
    let obj = {};

    numArr.forEach(elem => {
        obj.hasOwnProperty(elem) ? obj[elem]++ : obj[elem] = 1
    });

    //console.log(obj, Object.keys(obj).length);

    return Object.keys(obj).length === 10 ? true : false;

}