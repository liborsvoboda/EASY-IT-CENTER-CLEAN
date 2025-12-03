/*

Longest Word in a 7 Segment Display

Given an array of words, return the longest word which can fit on a 7 segment display.

Image of a 7 segment display

Letters which do not fit on a 7 segment display are k, m, v, w and x.
Therefore, do not count words which include these letters.
Examples
longest7SegmentWord(["knighthood", "parental", "fridge", "clingfilm"]) ➞ "parental"

longest7SegmentWord(["coding", "crackers", "edabit", "celebration"]) ➞ "celebration"

longest7SegmentWord(["velocity", "mackerel", "woven", "kingsmen"]) ➞ ""


Notes
All words will be given in lowercase.
Return an empty string if no words are eligible (see example #3).
If multiple valid words have the same length, return the first word that appears.

*/




//#############################################################
//#    SOLUTION 1                                             #
//#############################################################


const longest7SegmentWord = arr => {
	return arr
		.sort((a,b) => b.length - a.length)
		.filter(wrd => !/[kmvwx]/gi.test(wrd))[0] || "";
}



//#############################################################
//#    SOLUTION 2                                             #
//#############################################################


function longest7SegmentWord(arr) {
	let v = arr.filter(w=>!/[kmvwx]/g.test(w)).sort((a,b)=>b.length-a.length).shift()
 	return (v)?v:''; 
}



//#############################################################
//#    SOLUTION 3                                             #
//#############################################################



function longest7SegmentWord(arr) {
	return arr
				.filter(word => !/[kmvwx]/i.test(word))
				.sort((a, b) => b.length - a.length)
				[0] || "";
}



//#############################################################
//#    SOLUTION 4                                             #
//#############################################################


const noFit = ['k', 'm', 'v', 'w', 'x'];

const longest7SegmentWord = arr => {
 const output = arr.filter(x => !x.split``.some(y => noFit.includes(y)) )
 .sort((a, b) => b.length - a.length);
 return output.length === 0 ? '' : output[0];
}




//#############################################################
//#    SOLUTION 5                                             #
//#############################################################



function longest7SegmentWord(arr) {
	return arr.filter(a => !(/[kmvwx]/.test(a)))
		.sort((a,b) => b.length - a.length)[0] || '';
}