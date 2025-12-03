



/*


Does the Object Contain a Given Key?
Write a function that returns true if a hash contains the specified key, and false otherwise.

Examples
hasKey({ a: 44, b: 45, c: 46 }, "d") ➞ false

hasKey({ craves: true, midnight: true, snack: true }, "morning") ➞ false

hasKey({ pot: 1, tot: 2, not: 3 }, "not") ➞ true
Notes



*/






/*  Solution 1   */

function hasKey(obj, key) {
	return key in obj;
}



/*  Solution 2   */
const hasKey = (obj, key) => obj[key]? true : false;

const hasKey = (obj, key) => Object.keys(obj).includes(key);

const hasKey = (obj, key) => obj.hasOwnProperty(key);

function hasKey(obj, key) {
	return Object.keys(obj).some(item => item === key);
}

/*  Solution 3   */


function hasKey(obj, key) {
	return Object.keys(obj).includes(key)
}