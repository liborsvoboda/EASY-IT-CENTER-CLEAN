



/*

Fix the Error: Mutating Arrays
Suppose I want to define a function that removes the last element of an array each time I call it, but does not mutate the original array. Fix the code so that the results are no longer mutating the array.

function minusOne(arr) {
  arr.pop()
  return arr
}
Examples
x = [1, 2, 3, 4, 5]
minusOne(x) ➞ [1, 2, 3, 4]  // 1st time function is called.
minusOne(x) ➞ [1, 2, 3]  // 2nd time function is called.
minusOne(x) ➞ [1, 2]  // 3rd time function is called.
minusOne(x) ➞ [1]  // 4th time function is called.

// What I want instead:
minusOne(x) ➞ [1, 2, 3, 4]  // 1st time function is called.
minusOne(x) ➞ [1, 2, 3, 4]  // 2nd time function is called.
minusOne(x) ➞ [1, 2, 3, 4]  // 3rd time function is called.
minusOne(x) ➞ [1, 2, 3, 4]  // 4th time function is called.
Notes



*/






/*  Solution 1   */


const minusOne = arr => arr.slice(0, -1);

const minusOne = (a) => a.slice(0, a.length-1)





// Fix this incorrect code, so that all tests pass!
function minusOne(arr) {
    return arr.slice(0,-1)
  }



/*  Solution 2   */


const minusOne = arr => {
	let result = [].concat(...arr);
	result.pop();
  return result;
}




/*  Solution 3   */



function minusOne(arr) {

    return arr.slice(0,arr.length-1)
  }



  

  function minusOne(arr) {
	let newArr = arr.slice()
	newArr.pop() 
  return newArr;
}





function minusOne(arr) {
	arr1=[];
	for (i=0;i< arr.length-1;i++){
		arr1.push(arr[i]);
		
	}
return arr1;
}