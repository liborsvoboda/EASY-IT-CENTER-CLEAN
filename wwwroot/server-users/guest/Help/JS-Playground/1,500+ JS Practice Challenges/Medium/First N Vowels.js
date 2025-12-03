/*

First N Vowels

Write a function that returns the first n vowels of a string.

Examples
firstNVowels("sharpening skills", 3) ➞ "aei"

firstNVowels("major league", 5) ➞ "aoeau"

firstNVowels("hostess", 5) ➞ "invalid"

Notes
Return "invalid" if the n exceeds the number of vowels in a string.
Vowels are: a, e, i, o, u

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


const firstNVowels = (str, n) => {
    const vowels = str.match(/[aeiou]/gi) || [];
    return vowels.length < n ? 'invalid' : vowels.slice(0, n).join('');
};






//#############################################################
//#  SOLUTION 2  
//#############################################################


function firstNVowels(s, n) {
    vowels = "aeiou"
    res = [...s].reduce((res, x) => vowels.includes(x) ? res + x : res, "").substring(0, n)
    return res.length == n ? res : "invalid"
}







//#############################################################
//#  SOLUTION 3
//#############################################################


const firstNVowels = (str, n) => {
    let regex = /[aeiou]/;
    let vowels = str.toLowerCase().split('').filter(x => regex.test(x));

    return n > vowels.length ? 'invalid' : vowels.slice(0, n).join('');
}






//#############################################################
//#  SOLUTION 4
//#############################################################



const firstNVowels = (s, n) => {
    const vowels = s.match(/[aeiou]/gi);
    return n > vowels.length ? 'invalid' :
        vowels.slice(0, n).join('');
}