



/*

Return Only the Integer
Write a function that takes an array of elements and returns only the integers.

Examples
returnOnlyInteger([9, 2, "space", "car", "lion", 16]) ➞ [9, 2, 16]

returnOnlyInteger(["hello", 81, "basketball", 123, "fox"]) ➞ [81, 123]

returnOnlyInteger([10, "121", 56, 20, "car", 3, "lion"]) ➞ [10, 56, 20, 3]

returnOnlyInteger(["String",  true,  3.3,  1]) ➞ [1]
Notes



*/






/*  Solution 1   */

const returnOnlyInteger= (arr) => {
	return arr.filter((v) => Number.isInteger(v) );
}



/*  Solution 2   */

const returnOnlyInteger = a => a.filter(x=>typeof x=='number'&&String(x).match(/\./g)==null)

const returnOnlyInteger = arr => arr.filter(Number.isInteger)

const returnOnlyInteger = (arr) => arr.filter(el => Number.isInteger(el))

const returnOnlyInteger = arr => arr.filter(x => Number.isInteger(x))

const returnOnlyInteger = arr => arr.filter(v => Number.isInteger(v));


/*  Solution 3   */


function returnOnlyInteger(arr) {
	return arr.filter(item => Number.isInteger(item))
}



function returnOnlyInteger(arr) {
	return arr.filter(item=>Number.isInteger(item))

}