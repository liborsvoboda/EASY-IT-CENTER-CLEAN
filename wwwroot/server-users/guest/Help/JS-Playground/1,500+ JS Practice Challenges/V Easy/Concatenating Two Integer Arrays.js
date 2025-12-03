



/*


Concatenating Two Integer Arrays
Create a function to concatenate two integer arrays.

Examples
concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]

concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]

concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3]
Notes
Don't forget to return the result.
See Resources tab for more info.


*/




/*  Solution 1   */

function concat(arr1, arr2) {
    return [...arr1,...arr2]
    }



/*  Solution 2   */


const concat = (arr1, arr2) => arr1.concat(arr2);


/*  Solution 3   */


function concat(arr1, arr2) {
	return arr1.concat(arr2);
}

/*  Solution 4   */
function concat(arr1, arr2) {
	for(let i=0;i<= arr2.length-1;i++)
		{
			arr1.push(arr2[i]);
		}
	return arr1;
}