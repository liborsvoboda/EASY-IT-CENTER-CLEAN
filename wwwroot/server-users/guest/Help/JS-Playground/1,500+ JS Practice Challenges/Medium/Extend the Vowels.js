/*

Extend the Vowels

Create a function that takes a word and extends all vowels by a number num.

Examples
extendVowels("Hello", 5) ➞ "Heeeeeelloooooo"

extendVowels("Edabit", 3) ➞ "EEEEdaaaabiiiit"

extendVowels("Extend", 0) ➞ "Extend"


Notes
Return "invalid" if num isn't 0 or a positive integer.
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function extendVowels(word, num) {
    if (num < 0 || num % 1) return "invalid";
    return word.replace(/[aeiou]/gi, v => v.repeat(num + 1));
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


extendVowels = (w, n) => n >= 0 && n % 1 === 0 ? w.replace(/[aeiou]|[AEIOU]/g, x => x.repeat(n + 1)) : "invalid"


const extendVowels = (word, num) => (num >= 0 && Number.isInteger(num)) ? word.replace(/(a|e|i|o|u)/gi, (match) => match.repeat(num + 1)) : "invalid"


const extendVowels = (w, n) => Number.isInteger(n) && n >= 0 ? [...w].map(v => /[aeiou]/gi.test(v) ? v.repeat(n + 1) : v).join('') : 'invalid'


//#############################################################
//#  SOLUTION 3
//#############################################################


function extendVowels(word, num) {
    return num < 0 || num % 1 ? 'invalid' : [...word].map(x => 'aeiou'.includes(x.toLowerCase()) ? x + x.repeat(num) : x).join('');
}


//#############################################################
//#  SOLUTION 4
//#############################################################


function extendVowels(word, num) {
    return Number.isInteger(num) && num >= 0 ? word.replace(/[aeiou]/gi, x => x.repeat(num + 1)) : 'invalid';
}


//#############################################################
//#  SOLUTION 5
//#############################################################


function extendVowels(word, num) {
    re = /([aeiou])/ig
    return (num % 1 != 0 || num < 0) && "invalid" || word.replace(re, `${"$1".repeat(num+1)}`)
}


//#############################################################
//#  SOLUTION 6
//#############################################################


const extendVowels = (word, num) =>
    num >= 0 && Number.isInteger(num) ? [...word]
    .map((n) =>
        /[a, e, i, o, u, A, E, I, O, U]/.test(n) ? n.repeat(num + 1) : n,
    )
    .join("") :
    "invalid";