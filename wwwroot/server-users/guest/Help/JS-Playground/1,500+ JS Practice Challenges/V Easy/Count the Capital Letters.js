



/*
Count the Capital Letters
Given a string of letters, how many capital letters are there?

Examples
capitalLetters("fvLzpxmgXSDrobbgMVrc") ➞ 6

capitalLetters("JMZWCneOTFLWYwBWxyFw") ➞ 14

capitalLetters("mqeytbbjwqemcdrdsyvq") ➞ 0
Notes




*/






/*  Solution 1   */

const capitalLetters = txt => txt.split(/[A-Z]/).length - 1;

const capitalLetters = txt => txt.replace(/[a-z]/g, '').length;


const capitalLetters = (txt) => txt.match(/[A-Z]/g) ? txt.match(/[A-Z]/g).length : 0




/*  Solution 2   */

function capitalLetters(txt) {
	const arr = txt.split('')
	const newArr = arr.filter(letter => letter === letter.toUpperCase())
	return newArr.length
}




function capitalLetters(txt) {
	return txt.split("").filter(word => word.toUpperCase() == word).length;
}




/*  Solution 3   */


const capitalLetters = s => {
	return [...s].filter(v => v === v.toUpperCase()).length;
}