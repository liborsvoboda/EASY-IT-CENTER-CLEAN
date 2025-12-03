/*

Replace Vowel with Another Character
Create a function that takes a string and replaces the vowels with another character.

a = 1
e = 2
i = 3
o = 4
u = 5
Examples
replaceVowel("karachi") ➞ "k1r1ch3"

replaceVowel("chembur") ➞ "ch2mb5r"

replaceVowel("khandbari") ➞ "kh1ndb1r3"
Notes
The input will always be in lowercase.



*/






/*  Solution 1   */

function replaceVowel(word) {
    const c = {
        a: 1,
        e: 2,
        i: 3,
        o: 4,
        u: 5
    }

    return word.replace(/[aeiou]/gi, w => c[w])
}



/*  Solution 2   */

const replaceVowel = w => w.replace(/[aeiou]/g, v => ' aeiou'.indexOf(v));





/*  Solution 3   */


function replaceVowel(word) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    return word.split('').map(x => vowels.includes(x) ? vowels.indexOf(x) + 1 : x).join('')
}



/*  Solution 4   */


const vowels = '[aeiou]';
const replaceVowel = word => (
    word.replace(new RegExp(vowels, 'g'), m => [...vowels].indexOf(m))
);