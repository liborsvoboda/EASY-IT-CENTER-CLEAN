



/*


Slightly Superior
You will be given two extremely similar arrays, but exactly one of the items in an array will be valued slightly higher than its counterpart (which means that evaluating the value > the other value will return true).

Create a function that returns whether the first array is slightly superior to that of the second.

Worked Example
isFirstSuperior([1, 2, 4], [1, 2, 3]) ➞ true
# The pair of items at each index are compared in turn.
# 1 from the first array is the same as 1 from the second array
# 2 is the same as 2
# However, 4 is greater than 3, so first array is superior.
Examples
isFirstSuperior(['a', 'd', 'c'], ['a', 'b', 'c']) ➞ true

isFirstSuperior(['zebra', 'ostrich', 'whale'], ['ant', 'ostrich', 'whale']) ➞ true

isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]) ➞false

isFirstSuperior([True, 10, 'zebra'], [True, 10, 'zebra']) ➞false
Notes
All values and their counterparts will always be of the same data type.



*/






/*  Solution 1   */

function isFirstSuperior(arr1, arr2) {
	return arr1.some((a,i)=>a>arr2[i])
}


function isFirstSuperior(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] > arr2[i]) {
        return true;
      }
    }
    return false;
  }


/*  Solution 2   */

const isFirstSuperior = (r,s) => r.some((e,i) => e > s[i])


const isFirstSuperior = (arr1, arr2) => arr1 > arr2;


/*  Solution 3   */


function isFirstSuperior(arr1, arr2) {
	n = arr1.length
	for (i=0;i<n;i++) {
		if (arr1[i] > arr2[i]) {
			return true
		}
	}
	return false
}



function isFirstSuperior(arr1, arr2) {
    return (arr1>arr2)
  }


  const isFirstSuperior = (arr1, arr2) => {
  
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] > arr2[i]) {
        return true;
      }
    }
    
    return false;
  }