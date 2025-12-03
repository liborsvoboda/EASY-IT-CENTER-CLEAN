



/*

Additive Inverse
A number added with its additive inverse equals zero. Create a function that returns an array of additive inverses.

Examples
additiveInverse([5, -7, 8, 3]) ➞ [-5, 7, -8, -3]

additiveInverse([1, 1, 1, 1, 1]) ➞ [-1, -1, -1, -1, -1]

additiveInverse([-5, -25, 35]) ➞ [5, 25, -35]
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab



*/






/*  Solution 1   */

function additiveInverse(arr) {
	return arr.map(x => -x);
}


function additiveInverse(arr) {
	return arr.map(x => x * -1);	
}




/*  Solution 2   */


const additiveInverse = arr => arr.map(x => 0 - x);


const additiveInverse = arr => arr.map(x => x < 0 ? Math.abs(x) : -x);


const additiveInverse = arr => arr.map(x => -x);

/*  Solution 3   */


function additiveInverse(arr) {
	return arr.map(i => -i);
}