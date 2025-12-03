/*

Abbreviations Unique?

You are given two inputs:

An array of abbreviations.
An array of words.
Write a function that returns true if each abbreviation uniquely identifies a word, and false otherwise.

Examples
uniqueAbbrev(["ho", "h", "ha"], ["house", "hope", "happy"]) ➞ false
// "ho" and "h" are ambiguous and can identify either "house" or "hope"

uniqueAbbrev(["s", "t", "v"], ["stamina", "television", "vindaloo"]) ➞ true

uniqueAbbrev(["bi", "ba", "bat"], ["big", "bard", "battery"]) ➞ false

uniqueAbbrev(["mo", "ma", "me"], ["moment", "many", "mean"]) ➞ true


Notes
Abbreviations will be a substring from [0, n] from the original string.

*/



//#############################################################
//#    SOLUTION 1
//#############################################################


function uniqueAbbrev(abbs, words) {
	return abbs.every(x=> (words.reduce((pv, cv)=> cv.startsWith(x) ? pv+1 : pv, 0))===1)
}



//#############################################################
//#    SOLUTION 2
//#############################################################


function uniqueAbbrev(abbs, words) {
	return words.map(word => 
				abbs.map(abb => word.startsWith(abb)))
		.flat()
		.filter(ele => ele === true)
		.length === 3
}




//#############################################################
//#    SOLUTION 3
//#############################################################


function uniqueAbbrev(abbs, words) {
    return words.map((entry, index, array) => 
     abbs.map(b=> entry.startsWith(b)).filter(Boolean).length === 1 ?
                                 true : false).filter(Boolean).length === 3;
}



//#############################################################
//#    SOLUTION 4
//#############################################################


