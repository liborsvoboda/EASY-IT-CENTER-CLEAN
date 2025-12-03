/*

Split a String Based on Vowels and Consonants

Write a function that takes a string, breaks it up and returns it with vowels first, consonants second. For any character that's not a vowel (like special characters or spaces), treat them like consonants.

Examples
split("abcde") ➞ "aebcd"

split("Hello!") ➞ "eoHll!"

split("What's the time?") ➞ "aeieWht's th tm?"

Notes
Vowels are a, e, i, o, u.
Define a separate isVowel() function for easier to read code (recommendation).
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


const split = str => str.replace(/[^aeiou]/gi, '') + str.replace(/[aeiou]/gi, '');





//#############################################################
//#  SOLUTION 2  
//#############################################################


function split(str) {
    return str.match(/[aeiou]/gi).join("").concat(str.match(/[^aeiou]/gi).join(""));
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function split(str) {
    let [vowels, cons] = ['', ''];
    str.split('').map(x => /[aeiou]/gi.test(x) ? vowels += x : cons += x);
    return vowels + cons;
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function split(str) {
    var s1 = "";
    var s2 = "";
    var v = ["a", "e", "i", "o", "u"];
    var s = str.split("");
    for (var i = 0; i < s.length; i++) {
        v.includes(s[i]) ? s1 += s[i] : s2 += s[i];
    }
    return s1 + s2;
}




//#############################################################
//#  SOLUTION 5
//#############################################################


function split(str) {
    return [...str].filter(isVowel).concat([...str].filter(e => !isVowel(e))).join('')
}

const isVowel = str => {
    return /[aeiou]/ig.test(str);
}






//#############################################################
//#  SOLUTION 6
//#############################################################


const isV = ltr => ~`aeiou`.indexOf(ltr);

const split = (str, cs = []) => [...str]
    .filter(c => isV(c) ? 1 : (cs.push(c), 0)).join `` + cs.join ``;




//#############################################################
//#  SOLUTION 7
//#############################################################


function split(str) {
    let isVowels = "";
    let isNotVowels = "";
    str.split("").forEach(x => isVowel(x) ? isVowels += x : isNotVowels += x)
    return isVowels + isNotVowels;
}

function isVowel(letters) {
    let vowels = /[aeiou]+/gi;
    return vowels.test(letters)
}