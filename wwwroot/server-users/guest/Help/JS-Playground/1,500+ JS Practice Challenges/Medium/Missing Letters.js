/*

Missing Letters

Given a string containing unique letters, return a sorted string with the letters that don't appear in the string.

Examples
getMissingLetters("abcdefgpqrstuvwxyz") ➞ "hijklmno"

getMissingLetters("zyxwvutsrq") ➞ "abcdefghijklmnop"

getMissingLetters("abc") ➞ "defghijklmnopqrstuvwxyz"

getMissingLetters("abcdefghijklmnopqrstuvwxyz") ➞ ""

Notes
The combination of both strings should be 26 elements long, including all the letters in the alphabet.
Letters will all be in lowercase.

*/







//#############################################################
//#  SOLUTION 1 
//#############################################################


const getMissingLetters = str => (
    arr = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97)),
    arr.filter(char => !str.includes(char)).sort().join ``
)





//#############################################################
//#  SOLUTION 2  
//#############################################################


function getMissingLetters(s) {
    let z = 'abcdefghijklmnopqrstuvwxyz'.split('')
    s = s.split('').sort((a, b) => a.localeCompare(b))
    return z.filter(el => !s.includes(el)).join('')
}





//#############################################################
//#  SOLUTION 3
//#############################################################


const getMissingLetters = s => {
    let r = 'abcdefghijklmnopqrstuvwxyz'
    return [...r].filter(e => !s.includes(e)).join('')
}







//#############################################################
//#  SOLUTION 4
//#############################################################


function getMissingLetters(s) {
    let c = "abcdefghijklmnopqrstuvwxyz".split(""),
        r = []
    s = s.split("").sort()
    for (i in c) {
        s.includes(c[i]) ? true : r.push(c[i])
    }
    return r.join("")
}






//#############################################################
//#  SOLUTION 5
//#############################################################


function getMissingLetters(s) {
    return [...Array(26)].map((_, i) => String.fromCharCode(97 + i))
        .filter(c => !s.includes(c)).join("");
}






//#############################################################
//#  SOLUTION 6
//#############################################################


const getMissingLetters = s => {
    return [...
        'abcdefghijklmnopqrstuvwxyz'
    ].filter(i => !s.includes(i)).join('');
}






//#############################################################
//#  SOLUTION 7
//#############################################################



const getMissingLetters = str => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return [...alphabet].filter(letter => ![...str].includes(letter)).join('');
}