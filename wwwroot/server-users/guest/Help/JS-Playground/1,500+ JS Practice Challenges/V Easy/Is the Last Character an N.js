



/*

Is the Last Character an N?
Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.

Examples
isLastCharacterN("Aiden") ➞ true

isLastCharacterN("Piet") ➞ false

isLastCharacterN("Bert") ➞ false

isLastCharacterN("Dean") ➞ true
Notes
The function must return a boolean value ( i.e. true or false).



*/





/*  Solution 1   */


function isLastCharacterN(word) {
	return word.endsWith('n')
}


/*  Solution 2   */


const isLastCharacterN = word => word.slice(-1) === "n";


/*  Solution 3   */


function isLastCharacterN(word) {
	if (word[word.length - 1] === "n") return true
	return false
}

/*  Solution 4   */

function isLastCharacterN(word) {
	const strSplit = word.split('');
	if(strSplit[strSplit.length - 1] === 'n') {
		return true
	} else {
		return false
	}
}