



/*

Secret Society
A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.

Create a function that takes in an array of names and returns the name of the secret society.

Examples
societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"

societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"

societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"
Notes
The secret society's name should be entirely uppercased.



*/






/*  Solution 1   */

function societyName(friends) {
	return friends.map(x => x[0]).sort().join("")
}



/*  Solution 2   */

function societyName(friends) {
	let secret = [];
	for(let i = 0; i < friends.length; i++){
		secret.push(friends[i].charAt(0));
	}
	return secret.sort().join("");
}







/*  Solution 3   */


const societyName = friends => friends.map(x => x[0]).sort().join('');


