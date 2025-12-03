



/*


Between Words
Write a function that takes three string arguments (first, last, and word) and returns true if word is found between first and last in the dictionary, otherwise false.

Examples
isBetween("apple", "banana", "azure") ➞ true

isBetween("monk", "monument", "monkey") ➞ true

isBetween("bookend", "boolean", "boost") ➞ false
Notes
All letters will be in lowercase.
All three words will be different.
Remember that the string word is in the middle.


*/






/*  Solution 1   */


function isBetween(first, last, word) {
	const sorted = [first, last, word].sort();
	return word === sorted[1];
}


/*  Solution 2   */

let isBetween=(first, last, word)=>[first,last,word].sort()[1]==word


const isBetween = (first, last, word) => [first, last, word].sort()[1] === word;


const isBetween = (f,l,w) => w > f && w < l;


const isBetween = (f, l, w) => 	f+w+l == [f,w,l].sort((a,b) => a>b).join("");



/*  Solution 3   */


function isBetween(first, last, word) {
	return first <= word && word <= last;
}