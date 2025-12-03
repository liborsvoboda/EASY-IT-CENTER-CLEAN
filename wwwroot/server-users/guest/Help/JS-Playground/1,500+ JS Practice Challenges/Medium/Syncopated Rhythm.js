/*

Syncopated Rhythm

Syncopation means an emphasis on a weak beat of a bar of music; most commonly, beats 2 and 4 (and all other even-numbered beats if applicable).

s is a line of music, represented as a string, where hashtags # represent emphasized beats. Create a function that returns if the line of music contains any syncopation.

Examples
hasSyncopation(".#.#.#.#") ➞ true

hasSyncopation("#.#...#.") ➞ false

hasSyncopation("#.#.###.") ➞ true

Notes
All other unemphasized beats will be represented as a dot.

*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################


//#  SOLUTION 1 

function hasSyncopation(s) {
    for (let i = 1; i < s.length; i += 2) {
        if (s[i] == "#") {
            return true;
        }
    }
    return false;
}


//#  SOLUTION 2  

const hasSyncopation = s => [...s].some((i, idx) => idx % 2 && i === '#');


const hasSyncopation = s => [...s].some((v, i) => v === "#" && i % 2 === 1);


const hasSyncopation = s => !/^(.\.)*.?$/.test(s);


const hasSyncopation = s => [...s].filter((x, i) => x === '#' && (i % 2)).length > 0;


const hasSyncopation = str => Array.from(str).filter((_, i) => i % 2).some(char => char === '#');


function hasSyncopation(s) {
    return [...s].filter((e, i) => e == "#" && i % 2 != 0).length > 0;
}



function hasSyncopation(s) {
    return [...s].some((x, i) => x === '#' && (i + 1) % 2 === 0)
}



//#  SOLUTION 3

function hasSyncopation(s) {
    return s.split("").filter((e, i) => e === "#" && (i + 1) % 2 === 0).length > 0
}


//#  SOLUTION 4


function hasSyncopation(s) {
    return [...s].some((a, i) => a == "#" && i & 1)
}



//#  SOLUTION 5


function hasSyncopation(s) {
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        if (i % 2 !== 0) {
            arr.push(s[i]);
        }
    }
    return arr.includes("#") ? true : false;
}


//#  SOLUTION 6


function hasSyncopation(s) {
    return s.split('').filter((elem, index) => index % 2 != 0).some(e => e == '#');
}