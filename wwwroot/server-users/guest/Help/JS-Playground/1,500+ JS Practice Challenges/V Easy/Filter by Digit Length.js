



/*


Filter by Digit Length
Create a function that filters out an array to include numbers who only have a certain number of digits.

Examples
filterDigitLength([88, 232, 4, 9721, 555], 3) ➞ [232, 555]
// Include only numbers with 3 digits.

filterDigitLength([2, 7, 8, 9, 1012], 1) ➞ [2, 7, 8, 9]
// Include only numbers with 1 digit.

filterDigitLength([32, 88, 74, 91, 300, 4050], 1) ➞ []
// No numbers with only 1 digit exist => return empty array.

filterDigitLength([5, 6, 8, 9], 1) ➞ [5, 6, 8, 9]
// All numbers in the array have 1 digit only => return original array.
Notes
If no numbers of the specified digit length exist, return an empty array.
If all numbers in the array have the specified digit length, return original array.
The sub-array returned should have the same relative order as the original array.


*/






/*  Solution 1   */

function filterDigitLength(arr, num) {
	return arr.filter(n => String(n).length === num);
}



function filterDigitLength(arr, num) {
	return arr.filter(x => x.toString().length === num)
}





/*  Solution 2   */

const filterDigitLength = (arr, digits) =>    arr.filter(num => String(num).length === digits);

const filterDigitLength = (arr, len) => arr.filter(num => Math.ceil(Math.log(num + 1) / Math.LN10) === len);



/*  Solution 3   */

function filterDigitLength(arr, num) {

  const stringNumbers = arr.map(num => num.toString())
  return stringNumbers.filter(n => n.length === num).map(Number)
}

