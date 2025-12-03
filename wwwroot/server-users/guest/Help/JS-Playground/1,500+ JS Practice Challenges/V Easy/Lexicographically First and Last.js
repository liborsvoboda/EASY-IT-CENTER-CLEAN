



/*


Lexicographically First and Last
Write a function that returns the lexicographically first and lexicographically last rearrangements of a string. Output the results in the following manner:

firstAndLast(string) ➞ [first, last]
Examples
firstAndLast("marmite") ➞ ["aeimmrt", "trmmiea"]

firstAndLast("bench") ➞ ["bcehn", "nhecb"]

firstAndLast("scoop") ➞ ["coops", "spooc"]
Notes
Lexicographically first: the permutation of the string that would appear first in the English dictionary (if the word existed).
Lexicographically last: the permutation of the string that would appear last in the English dictionary (if the word existed).


*/






/*  Solution 1   */

const firstAndLast = str => {
	const sorted = str.split('').sort();
	return [sorted.join(''), sorted.reverse().join('')];
}



/*  Solution 2   */

let firstAndLast=(s)=> [s.split('').sort().join(''),s.split('').sort().reverse().join('')]



/*  Solution 3   */

function firstAndLast(s) {
	return [ [...s].sort( (a, b) => a.charCodeAt() - b.charCodeAt() ).join(''), [...s].sort( (a, b) => b.charCodeAt() - a.charCodeAt() ).join('') ];
}