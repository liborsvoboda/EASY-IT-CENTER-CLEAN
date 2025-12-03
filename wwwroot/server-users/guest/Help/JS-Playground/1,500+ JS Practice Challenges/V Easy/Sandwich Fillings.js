



/*

Sandwich Fillings
Given a sandwich (as an array), return an array of fillings inside the sandwich. This involves ignoring the first and last elements.

Examples
getFillings(["bread", "ham", "cheese", "ham", "bread"]) ➞ ["ham", "cheese", "ham"]

getFillings(["bread", "sausage", "tomato", "bread"]) ➞ ["sausage", "tomato"]

getFillings(["bread", "lettuce", "bacon", "tomato", "bread"]) ➞ ["lettuce", "bacon", "tomato"]
Notes
The first and last elements will always be "bread".



*/






/*  Solution 1   */

function getFillings(sandwich) {
	return sandwich.filter(a => a !== "bread");
}



/*  Solution 2   */


const getFillings = sandwich => sandwich.slice(1, -1);


const getFillings = sandwich => sandwich.filter(ingredient => ingredient !== "bread")

const getFillings = sandwich => sandwich.slice(1, -1);

const getFillings = s => s.filter(a => a != s[0])//.filter(a => a != a[s.length - 1]);



const getFillings = sw => sw.filter(el => el !== 'bread');

const getFillings = a => a.slice(1,-1);

const getFillings = s => s.splice(1, s.length-2)

/*  Solution 3   */


function getFillings(sandwich) {
	return sandwich.slice(1, sandwich.length-1);
}


