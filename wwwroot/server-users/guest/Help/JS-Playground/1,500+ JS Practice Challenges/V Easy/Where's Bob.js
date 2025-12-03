



/*



Where's Bob!?!
Write a function that searches an array of names (unsorted) for the name "Bob" and returns the location in the array. If Bob is not in the array, return -1.

Examples
findBob(["Jimmy", "Layla", "Bob"]) ➞ 2

findBob(["Bob", "Layla", "Kaitlyn", "Patricia"]) ➞ 0

findBob(["Jimmy", "Layla", "James"]) ➞ -1
Notes
Assume all names start with a capital letter and are lowercase thereafter (i.e. don't worry about finding "BOB" or "bob").

*/






/*  Solution 1   */

function findBob(names) {
	return names.findIndex(name => name === 'Bob');
}





function findBob(names) {
	for(i=0;i<names.length;i++) {
		if(names[i]==="Bob"){
			return i;
		}
	}
	return -1;
}

/*  Solution 2   */

const findBob = names => names.indexOf('Bob');

const findBob = (names) => names.indexOf('Bob');


/*  Solution 3   */


function findBob(names) {
	return names.indexOf('Bob');
}



function findBob(names) {
	return names.findIndex(name => name === 'Bob');
}