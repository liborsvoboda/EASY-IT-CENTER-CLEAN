/*

In the Centre?

Given a string containing mostly spaces and one non-space character, return whether the character is positioned in the very centre of the string. This means the number of spaces on both sides should be the same.

Examples
isCentral("  #  ") ➞ true

isCentral(" 2    ") ➞ false

isCentral("@") ➞ true

Notes
Only one character other than spaces will be given at a time.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


function isCentral(str) {
    return str.trimLeft().length === str.trimRight().length
}



//#############################################################
//#  SOLUTION 2  
//#############################################################



const isCentral = s => s == [...s].reverse().join('')


const isCentral = str => str.trimLeft().length === (str.length + 1) / 2;


const isCentral = str => str.length % 2 !== 0 && str.charAt(Math.floor(str.length / 2)) !== ' ';


//#############################################################
//#  SOLUTION 3
//#############################################################


function isCentral(str) {
    if (str.length === 1) return true
    const matches = str.match(/\s+/g)
    if (!matches[0] || !matches[1]) return false
    return matches[0].length === matches[1].length
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function isCentral(str) {
    return str.length % 2 == 0 ? false :
        str.indexOf(str.match(/[^\s]/)[0]) + 1 == Math.round(str.length / 2);
}