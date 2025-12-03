



/*


Vowel Replacer
Create a function that replaces all the vowels in a string with a specified character.

Examples
replaceVowels("the aardvark", "#") ➞ "th# ##rdv#rk"

replaceVowels("minnie mouse", "?") ➞ "m?nn?? m??s?"

replaceVowels("shakespeare", "*") ➞ "sh*k*sp**r*"
Notes
All characters will be in lower case.


*/






/*  Solution 1   */

const replaceVowels = (str, ch) => str.replace(/[aeiouy]/gi, ch)



/*  Solution 2   */

function replaceVowels(str, ch) {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	
	const strArry = [...str].map((char) => {
		return vowels.includes(char) ? ch : char;
	});
	return strArry.join('');
}



/*  Solution 3   */


function replaceVowels(str, ch) {
	return str.replace(/[aeiou]/g, ch)
}