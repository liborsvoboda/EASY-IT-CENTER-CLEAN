/*

Return the Index of All Capital Letters

Create a function that takes a single string as argument and returns an ordered array containing the indices of all capital letters in the string.

Examples
indexOfCaps("eDaBiT") ➞ [1, 3, 5]

indexOfCaps("eQuINoX") ➞ [1, 3, 4, 6]

indexOfCaps("determine") ➞ []

indexOfCaps("STRIKE") ➞ [0, 1, 2, 3, 4, 5]

indexOfCaps("sUn") ➞ [1]

Notes

Return an empty array if no uppercase letters are found in the string.
Special characters ($#@%) and numbers will be included in some test cases.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################



function indexOfCaps(str) {
    return str.split('').reduce((arr, c, i) => /[A-Z]/.test(c) ? arr.concat(i) : arr, [])
}





//#############################################################
//#  SOLUTION 2  
//#############################################################


function indexOfCaps(str) {
    return str.split('').reduce((a, b, i) => /[A-Z]/.test(b) ? [...a, i] : a, []);
}




//#############################################################
//#  SOLUTION 3
//#############################################################



function indexOfCaps(str) {
    return str.split('').map(function(letter, index) {
        if (letter.match(/[A-Z]/)) {
            return index;
        }
    }).filter(function(val) {
        return val !== undefined;
    });
}





//#############################################################
//#  SOLUTION 4
//#############################################################


function indexOfCaps(str) {
    return str.split("").map((x, i) => /[A-Z]/.test(x) ? i : null).filter((x) => x !== null);
}




function indexOfCaps(str) {
    return str.split('').reduce((o, s, i) => (s.match(/[a-z]/i) && s.toUpperCase() === s) ? o.concat(i) : o, []);
}





//#############################################################
//#  SOLUTION 5
//#############################################################


function indexOfCaps(str) {
    let result = [];
    str.split('').forEach((s, i) => {
        if (s === s.toUpperCase() && /[a-z]/gi.test(s)) result.push(i)
    })
    return result
}






//#############################################################
//#  SOLUTION 6
//#############################################################


function indexOfCaps(str) {
    return str.split('').map(function(char, index) {
        if (char === char.toUpperCase() && char !== char.toLowerCase()) return index;
    }).filter(function(c) { return c !== undefined });
}