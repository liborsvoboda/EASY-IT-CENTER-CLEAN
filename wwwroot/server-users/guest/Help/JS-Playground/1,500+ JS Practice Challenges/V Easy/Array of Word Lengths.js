



/*
Array of Word Lengths
Create a function that takes an array of words and transforms it into an array of each word's length.

Examples
wordLengths(["hello", "world"]) ➞ [5, 5]

wordLengths(["Halloween", "Thanksgiving", "Christmas"]) ➞ [9, 12, 9]

wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]) ➞ [3, 5, 9, 4, 2, 3, 8]
Notes
No test case will contain punctuation.
Arrays can be of various lengths.




*/






/*  Solution 1   */


const wordLengths = arr => arr.map(word => word.length);

const wordLengths = array => array.map(word => word.length);


/*  Solution 2   */


function wordLengths(arr) {
	return arr.map(arr => arr.length);
}


/*  Solution 3   */


function wordLengths(array){
	return array.map((x) => x.length);
}