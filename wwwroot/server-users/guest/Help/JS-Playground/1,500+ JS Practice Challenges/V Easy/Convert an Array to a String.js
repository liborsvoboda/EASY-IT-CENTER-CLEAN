



/*
Convert an Array to a String
Create a function that takes an array of numbers or letters and returns a string.

Examples
arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"

arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"

arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"




*/


/*  Solution 1   */
arrayToString = arr =>arr.join('')


/*  Solution 2   */

function arrayToString(arr) {
    return arr.join('')
 }


/*  Solution 3   */


 const arrayToString = a => a.join('');



/*  Solution 4   */

 function arrayToString(arr) {
	var text = ""
	var i
	for (i = 0; i < arr.length; i++) {
		text += arr[i]
	}
	return text
}


