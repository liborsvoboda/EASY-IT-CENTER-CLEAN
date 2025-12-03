



/*


Total Number of Unique Characters
Given two strings, create a function that returns the total number of unique characters from the combined string.

Examples
countUnique("apple", "play") ➞ 5
// "appleplay" has 5 unique characters:
// "a", "e", "l", "p", "y"

countUnique("sore", "zebra") ➞ 7
// "sorezebra" has 7 unique characters:
// "a", "b", "e", "o", "r", "s", "z"

countUnique("a", "soup") ➞ 5
Notes
Each word will contain at least one letter.
All words will be lower cased.


*/






/*  Solution 1   */


function countUnique(s1, s2) {
	let concatenated = s1.split('').concat(s2.split(''));
	let resultArr = [];
	
	concatenated.forEach(ele => !resultArr.includes(ele) ? resultArr.push(ele) : undefined);
	
	return resultArr.length;
  
};


/*  Solution 2   */


const countUnique = (s1, s2) => new Set(s1 + s2).size;



/*  Solution 3   */

function countUnique(s1, s2) {
	return new Set([...s1,...s2]).size
}