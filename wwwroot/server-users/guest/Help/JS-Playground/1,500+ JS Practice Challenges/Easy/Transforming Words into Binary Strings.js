/*

Transforming Words into Binary Strings
Write a function that transforms all letters from [a, m] to 0 and letters from [n, z] to 1 in a string.

Examples
convertBinary("house") ➞ "01110"

convertBinary("excLAIM") ➞ "0100000"

convertBinary("moon") ➞ "0111"
Notes
Conversion should be case insensitive (see example #2).

*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



/*  Solution 1   */


convertBinary = str => str.replace(/[a-m]|([n-z])/gi, (match, g1) => Number(match === g1));

const convertBinary = str => str.replace(/[a-m]/gi, "0").replace(/[n-z]/gi, "1");

const convertBinary = str => str.replace(/[a-m]/gi, 0).replace(/[n-z]/gi, 1);


/*  Solution 2   */


const convertBinary = s =>
    s.replace(/[a-m]/gi, "0")
    .replace(/[n-z]/gi, "1")





/*  Solution 3   */


function convertBinary(str) {
    str = str.replace(/[a-m]/gi, 0);
    str = str.replace(/[n-z]/gi, 1);
    return str
}



function convertBinary(str) {
    return [...str].map(x => x.replace(/[a-m]/gi, '0').replace(/[n-z]/gi, '1')).join('')
}