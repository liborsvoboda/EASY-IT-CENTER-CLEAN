



/*


Stuttering Function
Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.

Examples
stutter("incredible") ➞ "in... in... incredible?"

stutter("enthusiastic") ➞ "en... en... enthusiastic?"

stutter("outstanding") ➞ "ou... ou... outstanding?"
Notes
Assume all input is in lower case and at least two characters long


*/






/*  Solution 1   */


function stutter(word) {
	let repeat = word.substring(0, 2);
	
	return `${repeat}... ${repeat}... ${word}?`;
}


/*  Solution 2   */

const stutter = word => `${`${word.slice(0, 2)}... `.repeat(2)}${word}?`;

const stutter = w => (w.slice(0,2)+'... ').repeat(2)+w+'?'


/*  Solution 3   */


function stutter(word) {
	let slice = word.substr(0,2);
  let string = (slice + '... ').repeat(2);
  return string + word + '?'
}