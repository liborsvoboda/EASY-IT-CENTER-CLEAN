/*

Word Riddles

What does the word LFAND represent? It represents the word Finland, because F is in LAND!

Create a function which replicates this to create brand new original word riddles! For the purposes of this challenge, take the string of letters before the word "in", and insert it into the 2nd letter position of the word formed after the word "in".

See the examples below for further clarity :)

Examples
makeWordRiddle("Finland") ➞ "LFAND"

makeWordRiddle("dinner") ➞ "NDER"

makeWordRiddle("tkinter") ➞ "TTKER"

makeWordRiddle("STRINGS") ➞ "GSTRS"

Notes
All words given will contain only one occurence of "in" (so no occurences of the words Insulin, Infinity, etc).
There will be no examples of Interest, Pin, or Ping, etc... as there is no clear way to insert the strings into one another.
Return in all CAPS.
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function makeWordRiddle(s) {
    const parts = s
        .toUpperCase()
        .split('IN')
    const [first, ...rest] = parts[1]

    return [first, ...parts[0], ...rest].join('');
}


//#############################################################
//#  SOLUTION 2  
//#############################################################


const makeWordRiddle = (s) =>
    s.replace(/(\w*)in(\w)/ig, '$2$1').toUpperCase();




//#############################################################
//#  SOLUTION 3
//#############################################################


function makeWordRiddle(s) {
    return s
        .toUpperCase()
        .replace(/(\w+)(IN.)(\w+)/i, `$2$1$3`)
        .substring(2)
}



//#############################################################
//#  SOLUTION 4
//#############################################################


const makeWordRiddle = s => (
    s = s.toUpperCase().split('IN'), [...s[1]].map((x, i) => i === 1 ? s[0] + x : x).join ``
);



//#############################################################
//#  SOLUTION 5
//#############################################################


const makeWordRiddle = s => (
    s = s.toUpperCase().split('IN'), [...s[1]].map((x, i) => i === 1 ? s[0] + x : x).join ``
);