/*

Unmix My Strings

lPaeesh le pemu mnxit ehess rtnisg! Oh, sorry, that was supposed to say: Please help me unmix these strings!

Somehow my strings have all become mixed up; every pair of characters has been swapped. Help me undo this so I can understand my strings again.

Examples
unmix("123456") ➞ "214365"

unmix("hTsii  s aimex dpus rtni.g") ➞ "This is a mixed up string."

unmix("badce") ➞ "abcde"


Notes
The length of a string can be odd — in this case the last character is not altered (as there's nothing to swap it with).

*/



//#############################################################
//#    SOLUTION 1
//#############################################################


const unmix = str => str.replace(/(.)(.)?/g, '$2$1');



//#############################################################
//#    SOLUTION 2
//#############################################################


const unmix = str => [...str].reduce((a, c, i, s) => (i % 2) ? a : a + `${s[i + 1] || ''}` + c, '');



//#############################################################
//#    SOLUTION 3
//#############################################################


function unmix(str) {
	let changedString =  "";
	for (let  k = 1 ; k<str.length; k+=2){
		let firstLetter  = str[k-1];
		let otherLetter  = str[k];
		changedString += otherLetter;
		changedString += firstLetter;
		
	}
	
	return str.length %2 != 0 ? changedString  + str[str.length-1] : changedString;
}


//#############################################################
//#    SOLUTION 4
//#############################################################


function unmix(str) {
	return str.length > 0 ? str.match(/(..?)/g).map(cur=>cur.split('').reverse().join('')).join('') : '';
}