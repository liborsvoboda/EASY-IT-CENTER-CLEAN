



/*

Filter Strings from Array
Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

Examples
filterArray([1, 2, 3, "a", "b", 4]) ➞ [1, 2, 3, 4]

filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) ➞ [0, 1729]

filterArray(["Nothing", "here"]) ➞ []
Notes
N/A



*/






/*  Solution 1   */


function filterArray(arr){
	return arr.filter(numbers => typeof(numbers) === 'number' && Number.isInteger(numbers));
}


function filterArray(arr){
	result = arr.filter(removeStrings);
	
	function removeStrings(a){
		if (typeof (a) === 'number' && a % 1 == 0){
			return true;
		}else {
			return false;
		}
	}
	return result;
}




/*  Solution 2   */

let filterArray = a => a.filter(x=> x % 1 == 0);

const filterArray = arr => arr.filter(Number.isInteger);

const filterArray = (arr) => arr.filter(Number.isInteger);





/*  Solution 3   */

function filterArray(arr){
	return arr.filter(val => Number.isInteger(val));
}