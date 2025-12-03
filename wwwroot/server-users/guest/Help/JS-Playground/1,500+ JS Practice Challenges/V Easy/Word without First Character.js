



/*

Word without First Character
Create a function that takes a word and returns the new word without including the first character.

Examples
newWord("apple") ➞ "pple"

newWord("cherry") ➞ "herry"

newWord("plum") ➞ "lum"



*/


/*  Solution 1   */

function newWord(txt){
	return txt.slice(1)
}




/*  Solution 2   */

function newWord(txt){
	let str = txt.substring(1);
	return str
}





/*  Solution 3   */

function newWord(txt){
	let res ="not text"
	if(isNaN(txt) == true) {
		res = txt.substring(1);
	}
	return res;
}




/*  Solution 4   */

const newWord = txt => {
	return txt.slice(1)
}