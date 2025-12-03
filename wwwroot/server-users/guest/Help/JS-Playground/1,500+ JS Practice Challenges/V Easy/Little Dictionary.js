



/*

Little Dictionary
Create a function that takes in an initial word and filters out an array which contains words that start with the same letters as the initial word.

Examples
dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]

dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]

dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []
Notes
If none of the words match, return an empty array.
Keep the filtered array in the same relative order as the original array of words.



*/






/*  Solution 1   */

function dictionary(initial, words) {
    return words.filter(word => word.startsWith(initial) ? word : null)
  }
  
  
  
  function dictionary(initial, words) {
	return words.filter(word => word.startsWith(initial));
}


/*  Solution 2   */

const dictionary = (initial, words) => words.filter(x => x.startsWith(initial));

const dictionary = (init, wds) => wds.filter(wrd => wrd.startsWith(init));

const dictionary = (initial, words) => words.filter(word => word.startsWith(initial));




/*  Solution 3   */


function dictionary(initial, words) {
	var letters = initial.length;
	var wordsLength = words.length;
	var newArray = [];
	for (var i = 0; i < wordsLength; i++){
		var word = words[i];
		var wordLetters = word.slice(0,letters);
		if (wordLetters == initial){
			newArray.push(word);
		};
	};
	return newArray;
}





function dictionary(initial, words) {
	return words.filter(word => word.startsWith(initial));
}




function dictionary(initial, words) {
	return words.filter(el => el.startsWith(initial));
}