



/*


Summing a Slice
Given an array and an integer n, return the sum of the first n numbers in the array.

Examples
sliceSum([1, 3, 2], 2) ➞ 4

sliceSum([4, 2, 5, 7], 4) ➞ 18

sliceSum([3, 6, 2], 0) ➞ 0
Notes
If n is larger than the length of the array, return the sum of the whole array.


*/






/*  Solution 1   */


const sliceSum = (arr, n) => {
	return arr.slice(0, n).reduce((acc, cv) => acc + cv, 0)
}


const sliceSum = (arr, n) => arr.reduce((a, v, i) => i < n? a + v : a, 0);

sliceSum=(arr, n)=>n==0?0:arr.slice(0,n).reduce((a,b)=>a+b)


const sliceSum = (arr, n) => n === 0 ? 0 : arr.slice(0, n).reduce((a, b) => a + b);

const sliceSum = (arr, n) => n === 0 ? 0 : arr.slice(0,n).reduce((a,b) => a+b)

const sliceSum = (arr, n) => (n === 0) ? 0 : (n > arr.length) ? arr.reduce((a, b) => a + b) : arr.slice(0, n).reduce((a, b) => a + b)

let sliceSum = (arr, n) => arr.slice(0, n).reduce((arr, cv) => arr + cv, 0);

/*  Solution 2   */

function sliceSum(arr, n) {

    let count = 0;
        
    let length = n > arr.length ? arr.length : n; 
    
    for(let i =0; i<length; i++){
    count += arr[i];	
    }
    return count;
    }



/*  Solution 3   */

function sliceSum(arr, n) {
	let total = 0;
	for (let i = 0; i < n; i++) {
		if (i < arr.length) {
			total += arr[i];
		}
	}
	return total;
}