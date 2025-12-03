/*

Zygodromes

A number is Zygodrome if can be partitioned into clusters of repeating digits with a length equals or greater than two (as to say that repeating digits need to be placed as an adjacent pair or a greater group, and that no single digits are allowed).

Given a non-negative integer num, implement a function that returns true if num is a Zygodrome number, or false otherwise.

Examples
isZygodrome(11) ➞ true
// 11 is a pair of repeated digits

isZygodrome(33322) ➞ true
// 333 is a triplet of repeated digits, and 22 is a pair

isZygodrome(5) ➞ false
// 5 is a single digit, it doesn't form a pair

isZygodrome(1001) ➞ false
// 00 is a pair, but the two 1's are not adjacent


Notes
Trivia: the number 9997777 is the only known Zygodrome prime whose index in the Zygodromes sequence (664444) is a prime in turn.
You can expect only non-negative integers as given input, without exceptions to handle.
*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const isZygodrome = num => `${num}`.length === (`${num}`.match(/(\d)\1+/g) || []).join("").length;




//#############################################################
//#  SOLUTION 2  
//#############################################################


function isZygodrome(num) {
    return [...new Set([...num + ''].filter((v, i, arr) => v === arr[i + 1]))].length === [...new Set([...num + ''])].length
}




//#############################################################
//#  SOLUTION 3
//#############################################################


const isZygodrome = num =>
    (String(num).match(/(.)\1+/g) || [])
    .join('')
    .length === String(num).length




//#############################################################
//#  SOLUTION 4
//#############################################################


const isZygodrome = num => num.toString().split("").every((val, i, arr) => val === arr[i - 1] || val === arr[i + 1])




//#############################################################
//#  SOLUTION 5
//#############################################################



const isZygodrome = /./.test.bind(/^((.)\2+)+$/);