



/*


Negate the Array of Numbers
Given an array of numbers, negate all elements contained within.

Negating a positive value -+n will return -n, because all +'s are removed.
Negating a negative value --n will return n, because the first - turns the second minus into a +.
Examples
negate([1, 2, 3, 4]) ➞ [-1, -2, -3, -4]

negate([-1, 2, -3, 4]) ➞ [1, -2, 3, -4]

negate([]) ➞ []
Notes
If you get an empty array, return an empty array: []


*/






/*  Solution 1   */

function negate(arr) {
	return arr.map(val => -val);
}



/*  Solution 2   */

const negate = a => a.map(x => x * -1);

const negate = arr => arr? arr.map(a => a *= -1) : [];

const negate = arr => arr.map(v => -v)

const negate = arr => arr.map(x=>0-x)




/*  Solution 3   */


function negate(arr) {
	
	var newArray = arr.map(x => x * -1 )
	return newArray;
}




function negate(arr) {
	return arr.map(x=> x*-1);
}


function negate(arr) {
	return arr.map(el => el * -1);
}