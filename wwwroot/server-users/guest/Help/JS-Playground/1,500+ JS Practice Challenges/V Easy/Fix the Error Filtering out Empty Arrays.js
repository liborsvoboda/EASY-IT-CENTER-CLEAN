



/*

Fix the Error: Filtering out Empty Arrays
I am trying to filter out empty arrays from an array. In other words, I want to transform something that looks like this: ["a", "b", [], [], [1, 2, 3]] to look like ["a", "b", [1, 2, 3]]. My code looks like this:

function removeEmptyArrays(arr) {
  return arr.filter(x => x !== [])
}
However, somehow, the empty arrays still exist. Fix this incorrect code to remove the empty arrays.

Examples
// What I want:
removeEmptyArrays(["a", "b", []]) ➞ ["a", "b"]
removeEmptyArrays([1, 2, [], 4]) ➞ [1, 2, 4]

// What I am getting:
removeEmptyArrays(["a", "b", []]) ➞ ["a", "b", []]
removeEmptyArrays([1, 2, [], 4]) ➞ [1, 2, [], 4]
Notes



*/






/*  Solution 1   */


function removeEmptyArrays(arr) {
	return arr.filter(x => x.length !== 0)
}


/*  Solution 2   */

const removeEmptyArrays = arr => arr.filter(x => x != false);

const removeEmptyArrays = arr => arr.filter(x => x.length !== 0)





/*  Solution 3   */


function removeEmptyArrays(arr) {
	return arr.filter(x => x != false )
}