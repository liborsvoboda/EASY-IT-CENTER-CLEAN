/*  
CAPS LOCK DAY is over!
October 22nd is CAPS LOCK DAY. Apart from that day, every sentence should be lowercase, so write a function to normalize a sentence.

Create a function that takes a string. If the string is all uppercase characters convert the string to lowercase and add an exclamation mark at the end of the string.
Examples
"CAPS LOCK DAY IS OVER" ➞ "Caps lock day is over!"
"Today is not caps lock day." ➞ "Today is not caps lock day."

Notes
Each string is a sentence and should start with an uppercase character

*/

//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################






/*  

Solutions

*/


//#############################################################

const normalize = s => /[a-z]/.test(s) ? s : s[0] + s.slice(1).toLowerCase() + '!';

const normalize = s => s === s.toUpperCase() ? s[0] + s.slice(1).toLowerCase() + '!' : s;

const normalize = str => [...str].every(v => v === v.toUpperCase()) ? str[0] + [...str].map(v => v.toLowerCase()).join('').slice(1) + '!' : str

//#############################################################


function normalize(str) {
    return str === str.toUpperCase() ? str.charAt(0) + str.toLowerCase().slice(1) + "!" : str;
}

//#############################################################


function normalize(str) {
    const all = [...str].every(a => a === a.toUpperCase())
    return all ? `${str.slice(0,1).toUpperCase()}${str.slice(1).toLowerCase()}!` : str
}

//#############################################################

function normalize(str) {
    let c = [...str].map((x, i) => i > 0 ? x.toLowerCase() : x).join('');
    c.slice(-1) !== '.' ? c += '!' : c;
    return c;
}

function normalize(str) {
    return str === str.toUpperCase() ? str[0] + str.substring(1).toLowerCase() + "!" : str
}

//#############################################################


function normalize(str) {
    let lower = str.toLowerCase();
    let first = str[0]
    let sliced = lower.slice(1)
    if (str.toUpperCase() === str) {
        return first.toUpperCase() + sliced + '!'
    } else {
        return first.toUpperCase() + sliced
    }
}

//#############################################################