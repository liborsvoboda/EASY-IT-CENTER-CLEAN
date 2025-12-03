



/*


Count Syllables
Create a function that counts the number of syllables a word has. Each syllable is separated with a dash -.

Examples
numberSyllables("buf-fet") ➞ 2

numberSyllables("beau-ti-ful") ➞ 3

numberSyllables("mon-u-men-tal") ➞ 4

numberSyllables("on-o-mat-o-poe-ia") ➞ 6
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.


*/






/*  Solution 1   */

function numberSyllables(word) {
	var words = word.split("-");
	return words.length;
}



/*  Solution 2   */


const numberSyllables = w => w.split('-').length

const numberSyllables = (word) => word.split('-').length;

/*  Solution 3   */


function numberSyllables(word) {
	return word.split('-').length
}