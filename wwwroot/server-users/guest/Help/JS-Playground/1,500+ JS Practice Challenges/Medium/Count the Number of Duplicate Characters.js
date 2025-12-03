/*

Count the Number of Duplicate Characters

Create a function that returns the amount of duplicate characters in a string. It will be case sensitive and spaces are included. If there are no duplicates, return 0.

Examples
duplicates("Hello World!") ➞ 3
// "o" = 2, "l" = 3.
// "o" is duplicated 1 extra time and "l" is duplicated 2 extra times.
// Hence 1 + 2 = 3

duplicates("foobar") ➞ 1

duplicates("helicopter") ➞ 1

duplicates("birthday") ➞ 0
// If there are no duplicates, return 0


Notes
Make sure to only start counting the second time a character appears.

*/


//#############################################################
//#  SOLUTION 1 
//#############################################################



const duplicates = str => str.length - new Set(str).size;


//#############################################################
//#  SOLUTION 2  
//#############################################################


const duplicates = str => str.length - [...new Set(str.split(''))].length




//#############################################################
//#  SOLUTION 3
//#############################################################


function duplicates(str) {
    const counts = [...str].reduce((c, x) => (c[x] = (c[x] || 0) + 1, c), {});
    return Object.values(counts).reduce((a, c) => a + c - 1, 0);
}



//#############################################################
//#  SOLUTION 4
//#############################################################



function duplicates(str) {
    return str.split("")
        .filter((x, i, a) => a.indexOf(x) !== a.lastIndexOf(x))
        .filter((x, i, a) => i !== a.indexOf(x))
        .length;
}



//#############################################################
//#  SOLUTION 5
//#############################################################


function duplicates(str) {
    return str.split('').reduce((tot, a, i, arr) => tot + (arr.indexOf(a) < i ?
        1 : 0), 0);
}