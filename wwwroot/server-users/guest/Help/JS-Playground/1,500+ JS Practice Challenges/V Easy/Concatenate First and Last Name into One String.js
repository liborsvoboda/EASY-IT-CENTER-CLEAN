



/*

Concatenate First and Last Name into One String
Given two strings, firstName and lastName, return a single string in the format "last, first".

Examples
concatName("First", "Last") ➞ "Last, First"

concatName("John", "Doe") ➞ "Doe, John"

concatName("Mary", "Jane") ➞ "Jane, Mary"
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.



*/



/*  Solution 1   */

function concatName(firstName, lastName) {
	var a = lastName.concat(', ',firstName)
	return a ;
}



/*  Solution 2   */


const concatName = (first, last) => `${last}, ${first}`;



/*  Solution 3   */

function concatName(firstName, lastName) {
	str1 = lastName;
	str2 = firstName;
	str3 = ", ";
	var name = str1.concat(str3,str2);
	return name;
}