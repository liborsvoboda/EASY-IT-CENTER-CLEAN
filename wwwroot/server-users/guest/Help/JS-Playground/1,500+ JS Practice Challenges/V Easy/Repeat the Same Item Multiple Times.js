



/*


Repeat the Same Item Multiple Times
Create a function that takes two arguments (item, times). The first argument (item) is the item that needs repeating while the second argument (times) is the number of times the item is to be repeated. Return the result in an array.

Examples
repeat("edabit", 3) ➞ ["edabit", "edabit", "edabit"]

repeat(13, 5) ➞ [13, 13, 13, 13, 13]

repeat("7", 2) ➞ ["7", "7"]

repeat(0, 0) ➞ []
Notes
item can be either a string or a number.
times will always be a number.


*/






/*  Solution 1   */


function repeat(item, times) {
	let arr=[];
	for(let i=0; i<times; i++){
		arr.push(item);
	}
	return arr;
}


/*  Solution 2   */


const repeat = (item, times) => Array(times).fill(item);

const repeat = (item, times) => new Array(times).fill(item, 0, times)

repeat=(i,t)=>t>=1?[].concat([i]).concat(repeat(i,t-1)):[]



/*  Solution 3   */

const repeat = (item, times) => {
    return Array.from({ length: times }, () => item);
  };



  function repeat(item, times) {
	const arr = [];
	for (let i = 0; i < times; i++) {
		arr.push(item)
	}
	return arr
}


