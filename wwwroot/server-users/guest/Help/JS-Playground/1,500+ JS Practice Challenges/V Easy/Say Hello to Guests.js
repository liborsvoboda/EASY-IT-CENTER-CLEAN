



/*


Say Hello to Guests
In this exercise you will have to:

Take a list of names.
Add "Hello" to every name.
Make one big string with all greetings.
The solution should be one string with a comma in between every "Hello (Name)".

Examples
greetPeople(["Joe"]) ➞ "Hello Joe"

greetPeople(["Angela", "Joe"]) ➞ "Hello Angela, Hello Joe"

greetPeople(["Frank", "Angela", "Joe"]) ➞ "Hello Frank, Hello Angela, Hello Joe"
Notes
Each greeting has to be separated with a comma and a space.
If you're given an empty array [], return an empty string "".


*/






/*  Solution 1   */

function greetPeople(names) {
	return names.map(x => "Hello " + x).join(", ");
}



/*  Solution 2   */

const greetPeople = names => names.map(name => `Hello ${name}`).join(', ');

let greetPeople=(names)=>names.map(x=>'Hello '+x).join(', ')




/*  Solution 3   */


const greetPeople = names => {
	names.forEach((name, index) => names[index] = 'Hello ' + name);
	return names.join(', ');
}