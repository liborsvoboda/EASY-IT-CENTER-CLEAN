



/*

Recursion to Repeat a String n Number of Times
Create a recursive function that takes two parameters and repeats the string n number of times. The first parameter txt is the string to be repeated and the second parameter is the number of times the string is to be repeated.

String.prototype.repeat() is not allowed

Examples
repetition("ab", 3) ➞ "ababab"

repetition("kiwi", 1) ➞ "kiwi"

repetition("cherry", 2) ➞ "cherrycherry"
Notes
The second parameter of the function is positive integer.



*/






/*  Solution 1   */

const repetition = (txt, n) => n <= 0 ? '' : txt + repetition(txt, n - 1);

const repetition = (t, n) => n <= 0 ? '': t + repetition(t,n-1);

const repetition=(txt, n) =>(n<=0)?"":txt+repetition(txt,n-1)

const repetition = (txt, n, res='') => n? repetition(txt, n-1, res+txt) : res;

const repetition = (txt, n) => n ? txt + repetition(txt, n - 1) : '';

const repetition = (a,b) => b <= 0 ? '' : a + repetition(a,b-1);


/*  Solution 2   */
function repetition(txt, n) {
	if (n === 1) {
		return txt;
	} else {
		return txt + repetition(txt, n-1);
	}
}




/*  Solution 3   */


function repetition(txt, n) {
	return n ? txt + repetition(txt, n - 1) : '';
}