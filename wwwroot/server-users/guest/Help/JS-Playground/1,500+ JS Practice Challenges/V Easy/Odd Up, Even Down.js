



/*


Odd Up, Even Down
Create a function that goes through the array, incrementing (+1) for each odd number and decrementing (-1) for each even number.

Examples
transform([1, 2, 3, 4, 5]) ➞ [2, 1, 4, 3, 6]

transform([3, 3, 4, 3]) ➞ [4, 4, 3, 4]

transform([2, 2, 0, 8, 10]) ➞ [1, 1, -1, 7, 9]
Notes


*/






/*  Solution 1   */


function transform(arr) {
    return arr.map(num => num % 2 === 0 ? num - 1 : num + 1)
}


function transform(arr) {
	return arr.map(element => element % 2 === 0 ? element - 1 : element + 1);
}


/*  Solution 2   */

const transform = arr => arr.map(x => x % 2 ? x + 1 : x - 1);

const transform = arr => arr.map(x => (x % 2 ? x + 1 : x - 1));

const transform = arr => arr.map(num => num % 2 == 0 ? num-1 : num+1);

const transform = arr => arr.map(x => x%2 == 0? x-1: x+1);




/*  Solution 3   */


function transform(arr) {
	return arr.map(x=>(x%2===0) ? --x : ++x)
}


function transform(arr) {
    for(let i=0; i<arr.length; i++) {
      arr[i] % 2 ==0 ? arr[i]-- : arr[i]++
    }
    return arr
  }