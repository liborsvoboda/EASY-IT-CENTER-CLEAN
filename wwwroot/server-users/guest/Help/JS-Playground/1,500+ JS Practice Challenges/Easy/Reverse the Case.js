/*

Reverse the Case
Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.

Examples
reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"

reverseCase("MANY THANKS") ➞ "many thanks"

reverseCase("sPoNtAnEoUs") ➞ "SpOnTaNeOuS"
Notes

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################




/*  Solution 1   */

const isLowerCase = str => str === str.toLowerCase();

const reverseCase = str =>
    str
    .split('')
    .map(char => (isLowerCase(char) ? char.toUpperCase() : char.toLowerCase()))
    .join('');



/*  Solution 2   */


function reverseCase(str) {
    return str.split('').map(char => char === char.toUpperCase() ?
        char.toLowerCase() : char.toUpperCase()).join('');
}



function reverseCase(str) {
    return [...str].map(char => char === char.toUpperCase() ? char.toLowerCase() : char === char.toLowerCase() ? char.toUpperCase() : char).join("")
}


const reverseCase = (str) => str.split('').map(x => x.toUpperCase() === x ? x.toLowerCase() : x.toUpperCase()).join('');





/*  Solution 3   */


function reverseCase(str) {
    return str.split('').map(letter => letter == letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()).join('')
}