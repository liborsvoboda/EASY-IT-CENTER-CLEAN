/*

Is it a Valid Floating Numeric Character?

Create a regular expression to check whether the given string is a valid floating numeric character or not.

Examples
isFloatingCharacter("12.12") ➞ true

isFloatingCharacter("12.") ➞ false

isFloatingCharacter(".1") ➞ true

isFloatingCharacter("-.1") ➞ true

isFloatingCharacter("abc") ➞ false


Notes
All inputs are strings.
Think about RegExp.prototype.test().

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


const isFloatingCharacter = num => num == +num && num.includes('.');



//#############################################################
//#  SOLUTION 2  
//#############################################################


const isFloatingCharacter = n => /^\-?\d*\.\d+$/.test(n);



//#############################################################
//#  SOLUTION 3
//#############################################################


const isFloatingCharacter = num => /^[-]?[0-9]*\.[0-9]*[1-9]+$/.test(num);



//#############################################################
//#  SOLUTION 4
//#############################################################


function isFloatingCharacter(num) {
    return /[a-z]/gi.test(num) ? false : /\./.test(num) ? /[-+]?([0-9]*\.[0-9]+|[0-9]+)/.test(num) : false;
}