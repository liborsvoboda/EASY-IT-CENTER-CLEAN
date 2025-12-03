/*

Functioninator 8000

Create a function that takes a single word string and does the following:

Concatenates inator to the end if the word ends with a consonant otherwise, concatenate -inator instead.

Adds the word length of the original word to the end, supplied with '000'.

The examples should make this clear.

Examples
inatorInator("Shrink") ➞ "Shrinkinator 6000"

inatorInator("Doom") ➞ "Doominator 4000"

inatorInator("EvilClone") ➞ "EvilClone-inator 9000"

*/






//#############################################################
//#  SOLUTION 1 
//#############################################################


const inatorInator = inv =>
    `${inv}${/[aeiou]/i.test(inv.slice(-1)) ? '-' : ''}inator ${inv.length}000`;


let inatorInator = s =>
    `${s+(/[aeio]$/i.test(s)?'-':'')}inator ${s.length}000`


const inatorInator = w => `${w}${/[aeiou]/i.test(w.slice(-1)) ? '-' : ''}inator ${w.length}000`;



//#############################################################
//#  SOLUTION 2  
//#############################################################



const inatorInator = w => {
    let c = /[aeiou]/i.test(w[w.length - 1]) ? "-inator" : "inator";
    return `${w}${c} ${w.length}000`;
}



//#############################################################
//#  SOLUTION 3
//#############################################################


function inatorInator(inv) {
    return ["a", "e", "i", "o", "u"].every((a, i) => !inv.toLowerCase().endsWith(a)) ?
        inv + "inator" + " " + inv.length + "000" :
        inv + "-inator" + " " + inv.length + "000"
}



//#############################################################
//#  SOLUTION 4
//#############################################################



function inatorInator(inv) {
    return `${inv}${!(inv.match(/[aeiou]$/i)||[]).length ? "" : "-"}inator ${inv.length}000`
}



//#############################################################
//#  SOLUTION 5
//#############################################################


function inatorInator(inv) {
    var regex = /["a"|"e"|"i"|"o"|"u"]/gi
    var last = inv[inv.length - 1]
    if (last.match(regex) === null) {
        return inv + "inator " + inv.length + 0 + 0 + 0
    } else {
        return inv + "-inator " + inv.length + 0 + 0 + 0
    }
}




//#############################################################
//#  SOLUTION 6
//#############################################################


const inatorInator = inv =>
    /[aeiou]$/gi.test(inv) ?
    `${inv}-inator ${inv.length}000` : `${inv}inator ${inv.length}000`