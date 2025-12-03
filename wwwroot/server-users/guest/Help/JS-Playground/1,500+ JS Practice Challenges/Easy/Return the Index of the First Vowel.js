/*

Return the Index of the First Vowel
Create a function that returns the index of the first vowel in a string.

Examples
firstVowel("apple") ➞ 0

firstVowel("hello") ➞ 1

firstVowel("STRAWBERRY") ➞ 3

firstVowel("pInEaPPLe") ➞ 1
Notes
Input will be single words.
Characters in words will be upper or lower case.
"y" is not considered a vowel.
Input always contains a vowel.

*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



/*  Solution 1   */

const firstVowel = str => str.search(/[aeiou]/i);

const firstVowel = s => s.search(/[aeiou]/i);

const firstVowel = (str) => str.indexOf((str.match(/[aeiou]/gi)[0]));

const firstVowel = (str) => str.toLowerCase().search('[aeiou]');



/*  Solution 2   */


function firstVowel(str) {
    found = -1;
    for (i = 0; i < str.length; i++) {
        if (str[i].match(/[AEIOUaeiou]/g, str[i])) {
            found = i;
            break;
        }
    }
    return found;
}




/*  Solution 3   */


function firstVowel(str) {
    for (let i = 0; i < str.length; i += 1) {
        if ('AEIOUaeiou'.indexOf(str[i]) >= 0) {
            return i;
        }
    }
}