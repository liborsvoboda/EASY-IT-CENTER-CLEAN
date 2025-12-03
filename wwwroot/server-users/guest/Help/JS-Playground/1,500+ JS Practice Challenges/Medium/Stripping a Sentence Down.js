/*
Stripping a Sentence Down

Create a function which takes in a sentence str and a string of characters chars and return the sentence but with all the specified characters removed.

Examples
stripSentence("the quick brown fox jumps over the lazy dog", "aeiou") ➞ "th qck brwn fx jmps vr th lzy dg"

stripSentence("the hissing snakes sinisterly slither across the rustling leaves", "s") ➞ "the hiing nake initerly lither acro the rutling leave"

stripSentence("gone, reduced to atoms", "go, muscat nerd") ➞ ""

Notes
You may be asked to remove punctuation and spaces.
Return an empty string if every charcter is specified (see example #3).
All tests will be in lowercase.
*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 

const stripSentence = (s, c) => s.replace(RegExp(`[${c}]`, 'g'), '')

const stripSentence = (str, chars) => str.replace(new RegExp(`[${chars}]`, 'g'), '');

const stripSentence = (str, chars) =>
    str.split('').filter(ch => !chars.includes(ch)).join('');

//#  SOLUTION 2  

function stripSentence(str, chars) {
    return str.split('')
        .filter(x => !chars.includes(x))
        .join('');
}


//#  SOLUTION 3


const stripSentence = (str, lst) => {
    return [...str].filter(chr => !lst.includes(chr)).join("");
}


//#  SOLUTION 4


let stripSentence = (str, chars) => {
    return str.replace(RegExp(`\[${chars}\]`, 'ig'), '')
}


//#  SOLUTION 5


function stripSentence(str, chars) {
    return str.split("").map(x => chars.split("").some(y => y === x) ? "" : x).join("")
}



//#  SOLUTION 6


function stripSentence(str, chars) {
    c = [...new Set(chars.split(""))];
    c.map(function(e) {
        if (str.split("").includes(e)) {
            r = new RegExp(e, "g");
            str = str.replace(r, "");
        }
    });
    return str;
}