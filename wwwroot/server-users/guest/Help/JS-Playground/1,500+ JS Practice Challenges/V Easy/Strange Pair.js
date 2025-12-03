



/*

Strange Pair
A pair of strings form a strange pair if both of the following are true:

The 1st string's first letter = 2nd string's last letter.
The 1st string's last letter = 2nd string's first letter.
Create a function that returns true if a pair of strings constitutes a strange pair, and false otherwise.

Examples
isStrangePair("ratio", "orator") ➞ true
// "ratio" ends with "o" and "orator" starts with "o".
// "ratio" starts with "r" and "orator" ends with "r".

isStrangePair("sparkling", "groups") ➞ true

isStrangePair("bush", "hubris") ➞ false

isStrangePair("", "") ➞ true
Notes
It should work on a pair of empty strings (they trivially share nothing).



*/






/*  Solution 1   */



function isStrangePair(str1, sstr2) {
	return str1[0] === sstr2[sstr2.length-1] && str1[str1.length-1] === sstr2[0];
}

/*  Solution 2   */

function isStrangePair(str1, str2) {
	return str2.endsWith(str1.charAt(0)) && str1.endsWith(str2.charAt(0))
}



/*  Solution 3   */

function isStrangePair(str1, sstr2) {
    　　return (str1.charAt(0) == sstr2.charAt(sstr2.length-1) &&
                     sstr2.charAt(0) == str1.charAt(str1.length-1))
    }