



/*

Multi-division
Create a function, that will for a given a, b, c, do the following:

Add a to itself b times.
Check if the result is divisible by c.
Examples
abcmath(42, 5, 10) ➞ false
// 42+42 = 84,84+84 = 168,168+168 = 336,336+336 = 672, 672+672 = 1344
// 1344 is not divisible by 10

abcmath(5, 2, 1) ➞ true

abcmath(1, 2, 3) ➞ false
Notes
In the first step of the function, a doesn't always refer to the original a.
"if the result is divisible by c", means that if you divide the result and c, you will get an integer (5, and not 4.5314).
The second test is correct.



*/






/*  Solution 1   */

function abcmath(a, b, c) {
	for (let i = 0; i <= b; i++) {
		a = a + a;
	}
	return a % c === 0;
}



/*  Solution 2   */

const abcmath = (a, b, c) => (a * Math.pow(2, b)) % c === 0;





/*  Solution 3   */

function abcmath(a, b, c) {
	return !(radd(a,b)%c);
}

const radd = (a,b) => (b == 0 ? a : radd(a+a, --b));