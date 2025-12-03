



/*

Re-Form the Word
A word has been split into a left part and a right part. Re-form the word by adding both halves together, changing the first character to an uppercase letter.

Examples
getWord("seas", "onal") ➞ "Seasonal"

getWord("comp", "lete") ➞ "Complete"

getWord("lang", "uage") ➞ "Language"
Notes



*/






/*  Solution 1   */

function getWord(left, right) {
	let leftCap = left[0].toUpperCase() + left.slice(1, left.length);
	return leftCap + right;
}



/*  Solution 2   */

const getWord=(left, right)=> left.replace(/^./g,match=>match.toUpperCase())+right

const getWord = (left, right) => left.slice(0,1).toUpperCase() + left.slice(1).concat(right);

const getWord = (l, r) => l[0].toUpperCase() + l.slice(1) + r;

/*  Solution 3   */

function getWord(left, right) {
	return left.charAt(0).toUpperCase() + left.slice(1) + right
	

}