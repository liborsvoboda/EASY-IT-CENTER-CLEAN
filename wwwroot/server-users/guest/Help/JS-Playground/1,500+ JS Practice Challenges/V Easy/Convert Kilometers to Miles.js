



/*


Convert Kilometers to Miles
In this challenge, you have to implement a function that returns the given distance kilometers converted into miles. You have to round the result up to the fifth decimal digit.

Examples
kmtomiles(2) ➞ 1.24274

kmtomiles(6) ➞ 3.72823

kmtomiles(8) ➞ 4.97097
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.


*/






/*  Solution 1   */

function kmtomiles(kilometers) {
	return parseFloat((kilometers * 0.621371).toFixed(5))
}



/*  Solution 2   */

const kmtomiles = k => +(k * .621371).toFixed(5)

const kmtomiles = km => +(km * 0.62137119).toFixed(5);


const kmtomiles = kilometers => Number((kilometers * 0.621371).toFixed(5))

const kmtomiles = km => Number((km * 0.62137119).toFixed(5));


/*  Solution 3   */


function kmtomiles(kilometers) {
	var result = kilometers / parseFloat(1.609344)
	return parseFloat(result.toFixed(5))
}