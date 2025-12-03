



/*


Recursion: Reverse a String
Write a function that reverses a string. Make your function recursive.

Examples
reverse("hello") ➞ "olleh"

reverse("world") ➞ "dlrow"

reverse("a") ➞ "a"

reverse("") ➞ ""
Notes
For non-base cases, your function must call itself at least once.
Check the Resources tab for info on recursion.


*/






/*  Solution 1   */

function reverse(str) {	
	let arr = str.split("")
	let newStr = arr.reverse().join('')
	return newStr
}



/*  Solution 2   */


const reverse = (str, r="") => !str ? r : reverse(str.slice(1), str[0]+r);





/*  Solution 3   */


function reverse(str) {
	return str.length <= 1 ? str : str[str.length - 1] + reverse(str.slice(0, str.length - 1)) 
}