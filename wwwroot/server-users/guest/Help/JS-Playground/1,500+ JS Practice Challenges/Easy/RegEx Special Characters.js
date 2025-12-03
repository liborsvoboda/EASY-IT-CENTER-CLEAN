/*

RegEx: Special Characters
Using the .test() method in your function, return whether a string contains the characters "a" and "c" (in that order) with any number of characters (including zero) between them.

Examples
asterisk("account") ➞ true

asterisk("abccount") ➞ true

asterisk("abbbccount") ➞ true

asterisk("bbbccount") ➞ false
Notes

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################


/*  Solution 1   */

function asterisk(string) {
    return string.indexOf('a') !== -1 && string.indexOf("c") !== -1;
}


const asterisk = str => (/ab*c/).test(str)


/*  Solution 2   */

const asterisk = string => /ab*c/g.test(string);

const asterisk = str => /ab*c/.test(str);

const asterisk = string => /.*a+b*c+.*/.test(string)


/*  Solution 3   */

function asterisk(string) {
    const check = RegExp('a');

    if (/a/.test(string) && /c/.test(string)) {
        return true
    } else return false
}