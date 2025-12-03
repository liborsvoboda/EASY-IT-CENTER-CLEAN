/*
Replace Letters With Position In Alphabet

Create a function that takes a string and replaces each letter with its appropriate position in the alphabet. "a" is 1, "b" is 2, "c" is 3, etc, etc.

Examples
alphabetIndex("Wow, does that work?")
➞ "23 15 23 4 15 5 19 20 8 1 20 23 15 18 11"

alphabetIndex("The river stole the gods.")
➞ "20 8 5 18 9 22 5 18 19 20 15 12 5 20 8 5 7 15 4 19"

alphabetIndex("We have a lot of rain in June.")
➞ "23 5 8 1 22 5 1 12 15 20 15 6 18 1 9 14 9 14 10 21 14 5"

Notes
If any character in the string isn't a letter, ignore it.

*/


//#############################################################
//#  SOLUTION 1 
//#############################################################


function alphabetIndex(str) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    return [...str.toLowerCase()]
        .filter(s => letters.includes(s))
        .map(s => letters.indexOf(s) + 1)
        .join(' ');
}



//#############################################################
//#  SOLUTION 2  
//#############################################################



const alphabetIndex = str => str.toLowerCase().match(/[a-z]/g).map(c => c.charCodeAt(0) - 96).join(' ');


const alphabetIndex = str => str.toLowerCase().split('').filter(ch => /[a-z]/gi.test(ch)).map(ch => ch.charCodeAt(0) - 96).join(' ')



//#############################################################
//#  SOLUTION 3
//#############################################################


function alphabetIndex(str) {
    var abc = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26
    };
    var arr = str.replace(/[^A-Z]/ig, "").toLowerCase().split("");
    var result = [];
    for (i = 0; i < arr.length; i++) {
        result.push(abc[arr[i]]);
    }

    return result.join(" ");
}



//#############################################################
//#  SOLUTION 4
//#############################################################



function alphabetIndex(str) {
    var alphabet = Array.from(new Array(26), (val, index) => 97 + index);

    return str.split('').map(v => {
        var code = v.toLowerCase().charCodeAt(0);
        var indexsss = alphabet.indexOf(code) + 1
        return indexsss === 0 ? '' : indexsss;
    }).filter(v => v !== '').join(' ');
}