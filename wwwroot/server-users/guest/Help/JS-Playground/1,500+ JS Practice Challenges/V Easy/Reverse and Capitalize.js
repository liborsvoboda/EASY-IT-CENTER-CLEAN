



/*

Reverse and Capitalize
Create a function that takes a string of lowercase characters and returns that string reversed and in upper case.

Examples
reverseCapitalize("abc") ➞ "CBA"

reverseCapitalize("hellothere") ➞ "EREHTOLLEH"

reverseCapitalize("input") ➞ "TUPNI"
Notes
N/A



*/






/*  Solution 1   */

function reverseCapitalize(str) {
	return [...str].reverse().join('').toUpperCase()
}


function reverseCapitalize(str) {
	str = str.split("").reverse().join("").toUpperCase();
	return str;
	
	//return str.reverse().toUpperCase();
}



/*  Solution 2   */

let reverseCapitalize = s => [...s].reverse().join('').toUpperCase();



/*  Solution 3   */

const reverseCapitalize = string => {
    return string.split("").reverse().join("").toUpperCase();
}