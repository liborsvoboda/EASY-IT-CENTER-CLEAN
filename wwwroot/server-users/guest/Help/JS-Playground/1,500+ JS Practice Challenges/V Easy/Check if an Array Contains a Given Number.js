



/*


Check if an Array Contains a Given Number
Write a function to check if an array contains a particular number.

Examples
check([1, 2, 3, 4, 5], 3) ➞ true

check([1, 1, 2, 1, 1], 3) ➞ false

check([5, 5, 5, 6], 5) ➞ true

check([], 5) ➞ false
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.


*/






/*  Solution 1   */

function check(arr, el) {
	return arr.includes(el)
}



/*  Solution 2   */


const check = (arr, el) => arr.includes(el)


/*  Solution 3   */


function check(arr, el) {
	return arr.indexOf(el) !== -1;
}



/*  Solution 4   */

function check(arr, el) {
	for(let i=0; i<arr.length; i++){
		if(arr[i]==el){
			return true
		}
	}
	return false
}