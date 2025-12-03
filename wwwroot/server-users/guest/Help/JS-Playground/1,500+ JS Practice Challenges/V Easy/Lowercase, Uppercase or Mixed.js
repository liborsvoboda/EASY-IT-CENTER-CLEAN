



/*


Lowercase, Uppercase or Mixed?
Create a function which returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.

Examples
getCase("whisper...") ➞ "lower"

getCase("SHOUT!") ➞ "upper"

getCase("Indoor Voice") ➞ "mixed"
Notes
Ignore punctuation, spaces and numbers.


*/






/*  Solution 1   */


function getCase(str) {
	if (str.toUpperCase()===str) {
		return "upper";
	} else if (str.toLowerCase()===str){
		return "lower";
	} else {
		return "mixed";
	}
}


/*  Solution 2   */

const getCase = str => ["", "lower", "upper", "mixed"][/[a-z]/.test(str) + /[A-Z]/.test(str) * 2];

const getCase = s =>
  s.toUpperCase() == s ? "upper" : s.toLowerCase() == s ? "lower" : "mixed";



/*  Solution 3   */


function getCase(str) {
	return str.toLowerCase() === str ? 'lower' : str.toUpperCase() === str ? 'upper' : 'mixed'
}