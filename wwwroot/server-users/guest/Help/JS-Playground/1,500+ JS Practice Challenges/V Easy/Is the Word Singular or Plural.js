



/*


Is the Word Singular or Plural?
Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

Examples
isPlural("changes") ➞ true

isPlural("change") ➞ false

isPlural("dudes") ➞ true

isPlural("magic") ➞ false
Notes
Don't forget to return the result.
Remember that return true (boolean) is not the same as return "true" (string).
This is an oversimplification of the English language. We are ignoring edge cases like "goose" and "geese", "fungus" and "fungi", etc.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.


*/






/*  Solution 1   */


function isPlural(word) {
	var vote = (word.charAt(word.length-1)) == "s" ? true:false;
	return vote;
}


/*  Solution 2   */


const isPlural = word => word.endsWith('s');

const isPlural = (word) => {return word.endsWith('s');}

isPlural = w => w.endsWith('s')

/*  Solution 3   */


function isPlural(word) {
	if(word[word.length-1] == "s") return true;
	return false;
}

