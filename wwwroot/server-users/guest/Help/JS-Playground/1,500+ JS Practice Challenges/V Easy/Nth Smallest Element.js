



/*

Nth Smallest Element
Given an unsorted array, create a function that returns the nth smallest element (the smallest element is the first smallest, the second smallest element is the second smallest, etc).

Examples
nthSmallest([1, 3, 5, 7], 1) ➞ 1

nthSmallest([1, 3, 5, 7], 3) ➞ 5

nthSmallest([1, 3, 5, 7], 5) ➞ null

nthSmallest([7, 3, 5, 1], 2) ➞ 3
Notes
n will always be >= 1.
Each number in the array will be distinct (there will be a clear ordering).
Given an out of bounds parameter (e.g. an array is of size k), and you are asked to find the m > k smallest element, return null.



*/






/*  Solution 1   */


function nthSmallest(arr, n) {
    if ( n > arr.length) {
        return null
    } else {
        arr = arr.sort((a,b) => a-b);
        return arr[ n-1];
    }
   }


/*  Solution 2   */

function nthSmallest(arr, n) {
	if (n < 1 || n > arr.length)
		return null
	
	const tempArr = Array.from(new Set(arr)).sort()
	
	return tempArr[n - 1]
}






/*  Solution 3   */


function nthSmallest(arr, n) {
    if (arr.length < n) {
        return null;
    }
        return arr.sort()[n - 1];
    }