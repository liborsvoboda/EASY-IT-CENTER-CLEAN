/*
Position in the Alphabet

Given a number between 1-26, return what letter is at that position in the alphabet. Return "invalid" if the number given is not within that range, or isn't an integer.

Examples
letterAtPosition(1) ➞ "a"

letterAtPosition(26.0) ➞ "z"

letterAtPosition(0) ➞ "invalid"

letterAtPosition(4.5) ➞ "invalid"

Notes
Return a lowercase letter.
Numbers that end with ".0" are valid.
*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 

const letterAtPosition = n => Number.isInteger(n) && n > 0 ? (n + 9).toString(36) : 'invalid';

const letterAtPosition = (n) => n == 0 || parseInt(n) != n ? 'invalid' : String.fromCharCode(96 + n);

const letterAtPosition = n => !n || /\./.test(n) ? 'invalid' : String.fromCharCode(97 + +n - 1)



//#  SOLUTION 2  

function letterAtPosition(n) {
    if (!Number.isInteger(n) || n === 0)
        return 'invalid'
    return String.fromCharCode(96 + n);
}


//#  SOLUTION 3

function letterAtPosition(n) {
    return (n === 0 || !Number.isInteger(n)) ? 'invalid' : String.fromCharCode(96 + n)
}


//#  SOLUTION 4


function letterAtPosition(n) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    if (n % 1 !== 0 || n > 26 || n <= 0) return 'invalid';

    return alphabet[n - 1];
}



//#  SOLUTION 5

function letterAtPosition(n) {
    return n == 0 || (('' + n).indexOf('.') + 1) > 0 ? 'invalid' : String.fromCharCode(96 + n)
}



//#  SOLUTION 6

const letterAtPosition = (n) =>
    Number.isInteger(n) && n >= 1 && n <= 26 ?
    String.fromCharCode(96 + n) :
    "invalid";



//#  SOLUTION 7


function letterAtPosition(n) {
    let arr = ['invalid', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    return (Number.isInteger(n) && n >= 0 && n <= 26) ? arr[n] : arr[0]
}



//#  SOLUTION 8

function letterAtPosition(n) {
    n = Math.abs(n);
    console.log(n)
    return (Number.isInteger(n) && n < 27 && n > 0) ? String.fromCharCode(96 + n) : 'invalid';


}



//#  SOLUTION 9


function letterAtPosition(n) {
    var man = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    if (n < 0 || n > 26 || n % 1 !== 0 || n === 0) {
        return 'invalid'
    } else {
        return man[n - 1]
    }
}


//#  SOLUTION 9
//#  SOLUTION 10


function letterAtPosition(n) {
    let alphabet = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
    ];
    for (let i = 0; i < alphabet.length; i++) {
        if (n === 0 || n % Math.floor(n) != 0) {
            return 'invalid';
        } else {
            Math.floor(n);
            return alphabet[n - 1];
        }
    }
}