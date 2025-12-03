



/*
Multiply Every Array Item by Two
Create a function that takes an array with numbers and return an array with the elements multiplied by two.

Examples
getMultipliedArr([2, 5, 3]) ➞ [4, 10, 6]

getMultipliedArr([1, 86, -5]) ➞ [2, 172, -10]

getMultipliedArr([5, 382, 0]) ➞ [10, 764, 0]
Notes




*/






/*  Solution 1   */


function getMultipliedArr(arr) {
	let arr2 = arr.map(x => x*2)
	return arr2

}


/*  Solution 2   */

const getMultipliedArr = (arr) => arr.map(el => el * 2)

function getMultipliedArr(arr) {
	return arr.map((each_element)=>2*each_element)
}



/*  Solution 3   */


function getMultipliedArr(arr) {
	
	for(let num = 0; num < arr.length; num++)
	{
		arr[num] = arr[num]*2;
	}
	return arr;
}