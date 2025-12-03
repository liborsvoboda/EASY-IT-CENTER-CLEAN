



/*


Reverse an Array
Write a function to reverse an array.

Examples
reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]

reverse([]) ➞ []
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.


*/


/*  Solution 1   */

function reverse(arr) {
	return arr.reverse();
}





/*  Solution 2   */

function reverse(arr) {
	let result = [];
	for (let i = arr.length -1; i > -1; i--) {
		result.push(arr[i]);
	}
	
	console.log(...result);
    return result;
    

}



/*  Solution 3   */


const reverse = arr => arr.reverse();








function reverse(arr) {
	let word = [];
	for(letter of arr){
		word.unshift(letter)
	}
	return word
}




