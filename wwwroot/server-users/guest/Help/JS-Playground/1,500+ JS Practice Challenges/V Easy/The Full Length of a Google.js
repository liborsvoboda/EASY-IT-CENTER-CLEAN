



/*



The Full Length of a Google
Google's logo can be stretched depending on how many pages it lets you skip forward to.

Image of Goooooooooogle

Let's say we wanted to change the number of pages that Google could skip to. Create a function where given a number of pages n, return the word "Google" but with the correct number of "o"s.

Examples
googlify(10) ➞ "Goooooooooogle"

googlify(23) ➞ "Gooooooooooooooooooooooooogle"

googlify(2) ➞ "Google"

googlify(-2) ➞ "invalid"
Notes
If n is equal to or less than 1, return invalid.


*/






/*  Solution 1   */


function googlify(n) {
	const o = "o";
  return !n || n <= 1 ? "invalid" : `G${o.repeat(n)}gle`;
}


/*  Solution 2   */

const googlify = n => n < 2 ? 'invalid' : `G${'o'.repeat(n)}gle`;

const googlify = n => n > 1 ? `G${"o".repeat(n)}gle` : "invalid";


const googlify = n => n > 1 ? `G${'o'.repeat(n)}gle`: 'invalid';

const googlify = n => n <= 1 ? "invalid" : `G${'o'.repeat(n)}gle`;


const googlify = n => n < 2 ? "invalid" : `G${"o".repeat(n)}gle`;

/*  Solution 3   */


function googlify(n) {
	let start = 'G';
	
	if (n < 2) {
		return 'invalid';
	}
	
	for (let i = 1; i <= n; i++) {
		start += 'o';
	}
	
	return start + 'gle';
}