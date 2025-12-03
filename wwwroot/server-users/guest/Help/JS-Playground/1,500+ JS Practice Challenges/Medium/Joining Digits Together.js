/*

Joining Digits Together

Create a function which takes in a number n as input and returns all numbers up to and including n joined together in a string. Separate each digit from each other with the character "-".

Examples
joinDigits(4) ➞ "1-2-3-4"

joinDigits(11) ➞ "1-2-3-4-5-6-7-8-9-1-0-1-1"

joinDigits(15) ➞ "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5"

Notes
Remember to start at 1 and include n as the last number.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function joinDigits(n) {
    return Array.from({ length: n }, (v, i) => i + 1).join('').split('').join('-')
}


//#############################################################
//#  SOLUTION 2  
//#############################################################


function joinDigits(n) {
    return n > 1 ? joinDigits(n - 1) + "-" + n.toString().split("").join("-") : "1"
}


//#############################################################
//#  SOLUTION 3
//#############################################################


function joinDigits(n) {
    return [...Array(n + 1).keys()].slice(1).join ``.split ``.join `-`
}



//#############################################################
//#  SOLUTION 4
//#############################################################


const joinDigits = n => [...new Array(n).fill().map((_, i) => i + 1).join("")].join("-")



//#############################################################
//#  SOLUTION 5
//#############################################################


function joinDigits(n) {
    return Array.from({ length: n }).map((item, index) => index + 1).join('').split('').join('-')
}