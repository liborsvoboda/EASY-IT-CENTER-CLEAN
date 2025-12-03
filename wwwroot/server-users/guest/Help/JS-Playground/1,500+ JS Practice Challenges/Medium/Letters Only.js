/*

Letters Only
Check if the given string consists of only letters and if every letter is in lower case.

Examples
lettersOnly("JAVACRIPT") ➞ false

lettersOnly("javascript") ➞ true

lettersOnly("12321313") ➞ false

lettersOnly("i have spaces") ➞ true

lettersOnly("i have numbers(1-10)") ➞ false

lettersOnly("") ➞ false


Notes
Empty arguments will always return false.
Input values will be mixed (symbols, letters, numbers).

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#############################################################
//#  SOLUTION 1 

const lettersOnly = str => /^[a-z ]+$/.test(str);

const lettersOnly = str => str.length !== 0 ? [...str.replace(/ /g, '')].every(c => c.charCodeAt() >= 97 && c.charCodeAt() <= 122) : false;

const lettersOnly = str => str ? [...str.split ` `.join ``].every(x => /[a-z]/g.test(x)) : false;

const lettersOnly = s => /^[a-z ]+$/i.test(s) && s.toLowerCase() === s;

const lettersOnly = str => str && str.search(/[^a-z\s]/g) == -1 ? true : false

const lettersOnly = str => str ? !/[^a-z\s]/g.test(str) : false;



//#############################################################
//#  SOLUTION 2  


function lettersOnly(str) {
    return /^[a-z]+$/g.test(str.split(' ').join(''))
}



//#############################################################
//#  SOLUTION 3



function lettersOnly(str) {
    return str.split(' ').every(x => /[a-z]/.test(x));
}



//#############################################################
//#  SOLUTION 4


function lettersOnly(str) {
    let result = str.match(/[a-z ]/g);
    return result ? result.length === str.length : false;
}




//#############################################################
//#  SOLUTION 5


function lettersOnly(str) {
    if (!str) { return false }
    const letters = 'abcdefghijklmnopqrstuvwxyz '.split('');
    for (let char of str) {
        if (letters.indexOf(char) === -1) {
            return false;
        }
    }
    return true;
}