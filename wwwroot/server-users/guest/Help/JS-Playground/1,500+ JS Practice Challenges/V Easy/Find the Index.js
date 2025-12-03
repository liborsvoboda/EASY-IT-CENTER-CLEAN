

/*    */

/*
Find the Index
Create a function that takes an array and a string as arguments and return the index of the string.

Examples
findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2

findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1

findIndex(["a", "g", "y", "d"], "d") ➞ 3

findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞

*/



/*  Solution 1   */

function findIndex(lst, str) {
	return lst.indexOf(str);
}



/*  Solution 2   */

function findIndex(lst, str) {
	for (let i = 0; i < lst.length; i++) {
		if (lst[i] === str) {
			return i;
		}
	}
}


/*   Solution 3   */



function findIndex(arr, str) {
	for(var i = 0; i < arr.length; i++){
		if(arr[i] == str){
			return i
		}
	}
}