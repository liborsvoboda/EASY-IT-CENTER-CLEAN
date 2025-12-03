/*

Valid Hex Code

Create a function that determines whether a string is a valid hex code.

A hex code must begin with a pound key # and is exactly 6 characters in length. Each character must be a digit from 0-9 or an alphabetic character from A-F. All alphabetic characters may be uppercase or lowercase.

Examples
isValidHexCode("#CD5C5C") ➞ true

isValidHexCode("#EAECEE") ➞ true

isValidHexCode("#eaecee") ➞ true

isValidHexCode("#CD5C58C") ➞ false
// Length exceeds 6

isValidHexCode("#CD5C5Z") ➞ false
// Not all alphabetic characters in A-F

isValidHexCode("#CD5C&C") ➞ false
// Contains unacceptable character

isValidHexCode("CD5C5C") ➞ false

// Missing #

*/


//#############################################################
//#  SOLUTION 1 
//#############################################################



function isValidHexCode(str) {
    return /^#(\d|[a-f]){6}$/i.test(str)
}





//#############################################################
//#  SOLUTION 2  
//#############################################################



const isValidHexCode = str => /^#[0-9A-F]{6}$/i.test(str);



//#############################################################
//#  SOLUTION 3
//#############################################################



function isValidHexCode(str) {
    if (str.length == 7 && str.charAt(0) == "#" &&
        str.match(/[ABCDEFabcdef0123456789]/gi).length == 6) {
        return true;
    } else {
        return false;
    }
}







//#############################################################
//#  SOLUTION 4
//#############################################################



function isValidHexCode(str) {
    return !!(str.match(/#[a-f\d]{6}/i) || []).length * 7 == str.length
}





//#############################################################
//#  SOLUTION 5
//#############################################################



function isValidHexCode(str) {
    return str.length !== 7 ? false :
        str[0] !== "#" ? false :
        str.slice(1).split("").every(x => /[0-9a-f]/i.test(x));
}







//#############################################################
//#  SOLUTION 6
//#############################################################


function isValidHexCode(str) {
    return str.match(/^#([A-F]|\d){6}$/gi) ? true : false;
}