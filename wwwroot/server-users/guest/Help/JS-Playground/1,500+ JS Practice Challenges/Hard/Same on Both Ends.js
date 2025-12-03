/*

Same on Both Ends

Given a sentence, return the number of words which have the same first and last letter.

Examples
countSameEnds("Pop! goes the balloon") ➞ 1

countSameEnds("And the crowd goes wild!") ➞ 0

countSameEnds("No I am not in a gang.") ➞ 1


Notes
Don't count single character words (such as "I" and "A" in example #3).
The function should not be case sensitive, meaning a capital "P" should match with a lowercase one.
Mind the punctuation!
Bonus points indeed for using regex!
*/



//#############################################################
//#    SOLUTION 1
//#############################################################


function countSameEnds(str) {
    str = str.toLowerCase().replace(/[.!]/g,'').split(' ').filter(el=>el.length!=1)
    return str.filter(el=>el.charAt(0)==el.slice(-1)).length
  }



//#############################################################
//#    SOLUTION 2
//#############################################################


const countSameEnds = str => (str.match(/\b(\w)\w*\1\b/gi) || []).length;



//#############################################################
//#    SOLUTION 3
//#############################################################


function countSameEnds(str) {
	let matched = str.match(/\w+/gi) || 0;
	let counter = 0;
	for(let index=0; index<matched.length;index++){
		if(matched[index].match(/^(\w)\w*\1$/i)){
			counter++;
		}
	}
	return counter;
}




//#############################################################
//#    SOLUTION 4
//#############################################################


const countSameEnds = str => (
	str.split(' ').filter(s => /^(.).+\1\W?$/i.test(s)).length
);