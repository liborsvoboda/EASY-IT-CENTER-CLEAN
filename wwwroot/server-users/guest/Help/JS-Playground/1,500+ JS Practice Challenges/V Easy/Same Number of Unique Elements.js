



/*


Same Number of Unique Elements
Write a function that returns true if two arrays have the same number of unique elements, and false otherwise.

To illustrate:

arr1 = [1, 3, 4, 4, 4]
arr2 = [2, 5, 7]
In arr1, the number 4 appears three times, which means it contains three unique elements: [1, 3, 4]. Since arr1 and arr2 both contain the same number of unique elements, this example would return true.

Examples
same([1, 3, 4, 4, 4], [2, 5, 7]) ➞ true

same([9, 8, 7, 6], [4, 4, 3, 1]) ➞ false

same([2], [3, 3, 3, 3, 3]) ➞ true
Notes


*/






/*  Solution 1   */


function same(a1, a2) {
	return new Set(a1).size === new Set(a2).size
}




/*  Solution 2   */

const same = (a1, a2) => new Set(a1).size === new Set(a2).size;







/*  Solution 3   */

function same(a1, a2) {
	var s1 = new Set(a1);
	var s2 = new Set(a2);
	return (s1.size == s2.size);
}