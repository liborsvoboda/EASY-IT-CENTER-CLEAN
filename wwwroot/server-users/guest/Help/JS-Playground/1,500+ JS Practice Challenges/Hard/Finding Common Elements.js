/*

Finding Common Elements
Create a function that takes two "sorted" arrays of numbers and returns an array of numbers which are common to both the input arrays.

Examples
commonElements([-1, 3, 4, 6, 7, 9], [1, 3]) ➞ [3]

commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) ➞ [1, 3, 4, 7]

commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) ➞ [1, 2, 4, 5]

commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]) ➞ []


Notes
Arrays are sorted.
Try doing this problem with O(n + m) time complexity.

*/



//#############################################################
//#  SOLUTION 1                                               #
//#############################################################


const commonElements = (arr1, arr2) => [...new Set(arr1.filter(x => arr2.includes(x)))];



//#############################################################
//#  SOLUTION 2                                               #
//#############################################################


function commonElements(arr1, arr2) {
	return arr2.filter(value => arr1.includes(value))
}



//#############################################################
//#  SOLUTION 3                                               #
//#############################################################



function search(a, b, i, j, results) {
	if (i >= a.length || j >= b.length) {
		return results;
	}
	
	if (a[i] > b[j]) {
		return search(a, b, i, j + 1, results);
	}
	
	if (a[i] !== results[results.length - 1] && a[i] === b[j]) {
		results.push(a[i]);
	}
	return search(a, b, i + 1, j, results);
}

function commonElements(arr1, arr2) {
	return search(arr1, arr2, 0, 0, []);
}




//#############################################################
//#  SOLUTION 4                                               #
//#############################################################



function commonElements(arr1, arr2) {
    let arr = [];
for (let i of arr1) {
    for (let j of arr2) {
        i == j ? arr.push(i) : null;
    }
}
return Array.from(new Set(arr));
}