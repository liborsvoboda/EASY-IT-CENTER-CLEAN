/*

Compounding Letters

Create a function that takes a string and returns a new string with each new character accumulating by +1. Separate each set with a dash.

Examples
accum("abcd") ➞ "A-Bb-Ccc-Dddd"

accum("RqaEzty") ➞ "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"

accum("cwAt") ➞ "C-Ww-Aaa-Tttt"


Notes
Capitalize the first letter of each set.
All tests contain valid strings with alphabetic characters (a-z, A-Z).

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function accum(str) {
    return str.split("").map((el, idx) => {
        return el.toUpperCase() + el.toLowerCase().repeat(idx)
    }).join("-")
}



//#############################################################
//#  SOLUTION 2  
//#############################################################



function accum(str) {
    return str.split('').map((x, i) => x.toUpperCase() + x.repeat(i).toLowerCase()).join('-');
}



//#############################################################
//#  SOLUTION 3
//#############################################################


accum = s => [...s].map((l, i) => (i ? '-' : '') + l.toUpperCase() + l.toLowerCase().repeat(i)).join ``



//#############################################################
//#  SOLUTION 4
//#############################################################


let accum = str =>
    str.split('')
    .map((x, i) => x.toUpperCase() + x.toLowerCase().repeat(i))
    .join('-');




//#############################################################
//#  SOLUTION 5
//#############################################################


function accum(str) {
    const capitalize = str => str.replace(/^./, match => match.toUpperCase())

    return str.toLowerCase().split('').reduce((acc, val, i) => {
        let currentValue = capitalize(val.repeat(i + 1))
        return acc.concat(`${currentValue}-`)
    }, []).join('').slice(0, -1)
}





//#############################################################
//#  SOLUTION 6
//#############################################################


function accum(str) {
    return str.toLowerCase()
        .split('')
        .map((ch, index) => ch.repeat(index + 1))
        .map(str => `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`)
        .join('-');
}





//#############################################################
//#  SOLUTION 7
//#############################################################



function accum(str) {
    return str.split('').map((ch, i) => {
        return getChars(ch, i);
    }).join('-');
}

const getChars = (ch, i) => {
    const repeated = [...Array(i).keys()].map(() => {
        return ch.toLowerCase();
    });

    return [ch.toUpperCase()].concat(repeated).join("");
};