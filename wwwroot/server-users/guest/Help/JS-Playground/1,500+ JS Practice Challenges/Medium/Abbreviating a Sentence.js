/*
Abbreviating a Sentence

Create a function which takes a sentence and returns its abbreviation. Get all of the words over or equal to n characters in length and return the first letter of each, capitalised and overall returned as a single string.

Examples
abbreviate("do it yourself") ➞ "Y"

abbreviate("do it yourself", 2) ➞ "DIY"
// "do" and "it" are included because the second parameter specified that word lengths 2 are allowed.

abbreviate("attention AND deficit OR hyperactivity THE disorder")➞ "ADHD"
// Words below the default 4 characters are not included in the abbreviation.

abbreviate("the acronym of long word lengths", 5) ➞ "AL"
// "acronym" and "lengths" have 5 or more characters.

Notes
There may not be an argument given for n so set the default to 4.
*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const abbreviate = (sentence, n = 4) => sentence.split(" ").filter(w => w.length >= n).map(w => w[0].toUpperCase()).join("");



//#############################################################
//#  SOLUTION 2  
//#############################################################


const abbreviate = (string, limit) => {
    return string.split(" ").map(word => (
        word.length < (limit || 4) ? "" : word[0].toUpperCase()
    )).join("");
}



//#############################################################
//#  SOLUTION 3
//#############################################################


function abbreviate(sentence, n) {
    return sentence
        .split(" ")
        .filter(el => el.length >= (n !== undefined ? n : 4))
        .map(el => el.charAt(0).toUpperCase())
        .join("");
}



//#############################################################
//#  SOLUTION 4
//#############################################################


const abbreviate = (sen, n = 4) => sen.split(' ')
    .map(v => v.length >= n ? v[0].toUpperCase() : '').join('');






//#############################################################
//#  SOLUTION 5
//#############################################################


function abbreviate(sentence, n) {
    return sentence.split(" ").map((x) => x.length >= (n ? n : 4) ? x.charAt(0).toUpperCase() : "").join("")
}





//#############################################################
//#  SOLUTION 6
//#############################################################


function abbreviate(sentence, n) {
    let min = n || 4;

    return sentence.split(" ").filter(e => e.length >= min).map(e => e = e[0]).join("").toUpperCase();
}




//#############################################################
//#  SOLUTION 7
//#############################################################


function abbreviate(sentence, n) {
    n = n == null ? 4 : n;
    return sentence.split(" ").map(a => a.length >= n ? a.charAt(0).toUpperCase() : "").join("");
}




//#############################################################
//#  SOLUTION 8
//#############################################################


function abbreviate(...variable) {
    let len = variable.length === 1 ? 4 : variable[1];
    return variable[0]
        .split(" ")
        .filter(word => word.length >= len)
        .map(word => word[0])
        .join("").toUpperCase();
}