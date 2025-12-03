



/*



Add the Index
Given an array of numbers, create a function which returns the same array but with each element's index in the array added to itself. This means you add 0 to the number at index 0, add 1 to the number at index 1, etc...

Examples
addIndexes([0, 0, 0, 0, 0]) ➞ [0, 1, 2, 3, 4]

addIndexes([1, 2, 3, 4, 5]) ➞ [1, 3, 5, 7, 9]

addIndexes([5, 4, 3, 2, 1]) ➞ [5, 5, 5, 5, 5]
Notes
You'll only get numbers in the array.


*/






/*  Solution 1   */

function addIndexes(arr) {
	let fakaArr = []
	for(let i = 0; i < arr.length; i++){
		fakaArr.push(arr[i]+i)
	}
	return fakaArr
}



function addIndexes(arr) {
	return arr.map(addind);
	function addind(value, index) {
		return value + index;
	}
}


/*  Solution 2   */

const addIndexes = arr => arr.map((n,i) => n + i);

const addIndexes = arr => arr.map((num, idx) => num + idx)

const addIndexes = arr => arr.map((v,i) => v + i);

const addIndexes = arr => arr.map((a, i) => a + i);

const addIndexes = a => a.map((a,b) => a + b);


const addIndexes = arr => arr.map((el, i) => el + i);


const addIndexes = arr => arr.map((val,idx)=>val+idx);

/*  Solution 3   */


function addIndexes(arr) {
	for(var i =0; i<arr.length;i++){
		arr[i] += i
	}
	return arr
}



function addIndexes(arr) {
	for(let i = 0; i < arr.length; i++){
    arr[i] += i
  }
  return arr;
}