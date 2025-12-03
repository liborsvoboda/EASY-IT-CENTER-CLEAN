



/*

Remove the First and Last Characters
Create a function that removes the first and last characters from a string.

Examples
removeFirstLast("hello") ➞ "ell"

removeFirstLast("maybe") ➞ "ayb"

removeFirstLast("benefit") ➞ "enefi"

removeFirstLast("a") ➞ "a"
Notes
If the string is 2 or fewer characters long, return the string itself (See Example #4).



*/






/*  Solution 1   */


const removeFirstLast = str => str.length > 2 ? str.slice(1,str.length - 1) : str;

const removeFirstLast=(str)=> str.length>2?str.slice(1,-1):str


let removeFirstLast = s => s.slice(1, -1)||s;

removeFirstLast = str => str.slice(1, -1) || str;


const removeFirstLast = str => str.length > 2 ? str.slice(1, str.length -1) : str;

const removeFirstLast = str => str.length > 2 ? str.slice(1, str.length - 1) : str;

/*  Solution 2   */

function removeFirstLast(str) {
	if(str.length<=2)
		return str;
	else
	return str.slice(1,str.length-1)
}




/*  Solution 3   */


function removeFirstLast(str) {
	if(str.length<=2)
		{
			return str;
		}
	return (str.slice(1,-1));
}