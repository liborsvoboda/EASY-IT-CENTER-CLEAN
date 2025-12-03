



/*


Get the Sum of All Array Elements
Create a function that takes an array and returns the sum of all numbers in the array.

Examples
getSumOfItems([2, 7, 4]) ➞ 13

getSumOfItems([45, 3, 0]) ➞ 48

getSumOfItems([-2, 84, 23]) ➞ 105


*/






/*  Solution 1   */


function getSumOfItems(arr) {
	let sum = 0
	for (let i = 0; i < arr.length; i ++) {
		sum += arr[i]
	}
	return sum
}


/*  Solution 2   */

function getSumOfItems(arr) {
	return arr.reduce((a, b)=> a+b);
}


const getSumOfItems = (arr) => arr.reduce((total, el) => total + el)

const getSumOfItems = arr => arr.reduce((x,y) => x + y)

const getSumOfItems = a => a.reduce((sum,el) => sum + el);

const getSumOfItems = arr => arr.reduce((t, c) => t + c, 0);

/*  Solution 3   */


function getSumOfItems(arr) {
	let count = 0
    arr.map(item => count += item)
    return count

}



function getSumOfItems(arr) {
	var x = (a, b) => a + b;
	
	return (arr.reduce(x));
	
}