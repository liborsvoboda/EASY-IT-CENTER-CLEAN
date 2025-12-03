/*

Do All Bigrams Exist?

You are given an input array of bigrams, and an array of words.

Write a function that returns true if every single bigram from this array can be found at least once in an array of words.

Examples
canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]) ➞ true

canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]) ➞ false
# "cu" does not exist in any of the words.

canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]) ➞ true

canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]) ➞ false


Notes
A bigram is string of two consecutive characters in the same word.
If the array of words is empty, return false.

*/




//#############################################################
//#  SOLUTION 1                                               #
//#############################################################


function canFind(bigrams, words) {
	return bigrams.every(x=> words.some(y=> y.includes(x)))
}





//#############################################################
//#  SOLUTION 2                                               #
//#############################################################


function canFind(bigrams, words) {
	let arr = bigrams.map(item => {
		let re = new RegExp(item, 'gi')
		return words.some(ele => ele.match(re))
	})
	return arr.includes(false) ? false: true
}





//#############################################################
//#  SOLUTION 3                                               #
//#############################################################



function canFind(bigrams, words) {
	
    let count = 0;
    for (var i = 0; i < bigrams.length; i++){
        
        if (words.join('').includes(bigrams[i])){
            count ++;
        } 
    }
        return bigrams.length == count;
    }





//#############################################################
//#  SOLUTION 4                                               #
//#############################################################



function canFind(bigrams, words) {
	let str = words.join(" ")
	
	return bigrams.every(bigram => str.includes(bigram))
}