/*  

City School Creating IDS

Many IDS (for emails or Google ID) are created using the person's name.

Create a function that will return a four-character ID using the person's first name and last name. The first character will be the first letter of the first name but in lowercase. The next three characters will be the first three characters of the last name, but the first letter will be capitalized and the other two will be in lower case.

Examples
createID("mary", "lamb") ➞ "mLam"

createID("John", "SMITH") ➞ "jSmi"

createID("mary", "smith") ➞ "mSmi"

Notes
There is always one character in the first name and at least three in the last name.

*/







//#############################################################
//#    SOLUTION 1
//#############################################################


const createID = (first, last) => first[0].toLowerCase() + last[0].toUpperCase() + last.slice(1, 3).toLowerCase();


const createID = (f, l) => f[0].toLowerCase() + l[0].toUpperCase() + l.slice(1, 3).toLowerCase();







//#############################################################
//#    SOLUTION 2
//#############################################################


const createID = (firstname, lastname) =>
    firstname[0].toLowerCase() +
    lastname[0].toUpperCase() +
    lastname.slice(1, 3).toLowerCase();







//#############################################################
//#    SOLUTION 3
//#############################################################


function createID(firstname, lastname) {
    var last = lastname.slice(0, 1);
    var Last = lastname.slice(1, 3);
    var first = firstname.slice(0, 1)
    return first.toLowerCase() + last.toUpperCase(0, 1) + Last.toLowerCase(1, 2);
}