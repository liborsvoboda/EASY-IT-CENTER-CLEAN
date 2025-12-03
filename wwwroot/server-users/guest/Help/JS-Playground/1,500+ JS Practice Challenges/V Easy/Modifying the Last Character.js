



/*


Modifying the Last Character
Create a function which makes the last character of a string repeat n number of times.

Examples
modifyLast("Hello", 3) ➞ "Hellooo"

modifyLast("hey", 6) ➞ "heyyyyyy"

modifyLast("excuse me what?", 5) ➞ "excuse me what?????"
Notes
Tests will include numbers and punctuation.
Make sure your code is not case sensitive.


*/






/*  Solution 1   */

function modifyLast(str, n) {
	for (i = 1; i < n; i++) {
		 str += str.substr(-1)   
	}
	return str
}



/*  Solution 2   */

const modifyLast = (str, n) => str.replace(/.$/, m => m.repeat(n));


const modifyLast = (s,n) => `${s.slice(0,-1)}${s.slice(-1).repeat(n)}`

let modifyLast=(rat, n) => rat+rat[rat.length-1].repeat(n-1)

const modifyLast = (str, n) =>`${str}${str.substr(-1).repeat(n-1)}`

const modifyLast = (a,b) => a.slice(0,-1) + a.slice(-1).repeat(b);


/*  Solution 3   */



function modifyLast(str, n) {
	return str.slice(0, -1).concat(str.slice(-1).repeat(n))
}




function modifyLast(str, n) {
	let char = str.slice(-1).repeat(n - 1)
	return str + char
}