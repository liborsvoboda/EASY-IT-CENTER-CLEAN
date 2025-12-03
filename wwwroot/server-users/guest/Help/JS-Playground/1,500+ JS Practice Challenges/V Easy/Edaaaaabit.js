/*  
Edaaaaabit
Write a function that takes an integer and returns a string with the given number of "a"s in Edabit.

Examples
howManyTimes(5) ➞ "Edaaaaabit"

howManyTimes(0) ➞ "Edbit"

howManyTimes(12) ➞ "Edaaaaaaaaaaaabit"
Notes
The string must start with "Ed" and end with "bit".
You'll only be given integers as test input.

*/







/*  

Solutions

*/



const howManyTimes = num => `Ed${'a'.repeat(num)}bit`;



function howManyTimes(num) {
    return 'Ed' + 'a'.repeat(num) + 'bit'
}




function howManyTimes(num) {
    let str = "a";
    return `Ed${str.repeat(num)}bit`;
}