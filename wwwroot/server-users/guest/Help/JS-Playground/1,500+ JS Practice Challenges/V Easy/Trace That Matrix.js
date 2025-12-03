



/*

Trace That Matrix
Given a square matrix (i.e. same number of rows as columns), its trace is the sum of the entries in the main diagonal (i.e. the diagonal line from the top left to the bottom right).

As an example, for:

[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
... the trace is 1 + 5 + 9 = 15.

Write a function that takes a square matrix and computes its trace.

Examples
trace([
  [1, 4],
  [4, 1]
]) ➞ 2

// 1 + 1 = 2

trace([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]) ➞ 15

// 1 + 5 + 9 = 15

trace([
  [1, 0, 1, 0],
  [0, 2, 0, 2],
  [3, 0, 3, 0],
  [0, 4, 0, 4]
]) ➞ 10

// 1 + 2 + 3 + 4 = 10
Notes
As in the examples, the size of the matrices will vary (but they will always be square).



*/






/*  Solution 1   */


const trace = arr => arr.reduce((a, e, i) => a + e[i], 0);


const trace = arr => arr.reduce((a,c,i) => a + (c[i]), 0)

var trace = arr => arr.map((x,y) => x[y]).reduce((a,b) => a + b);


const trace = arr => arr.reduce((a, b, i) => a + b[i], 0);

const trace = m => m.reduce((s,r,x) => s + r[x], 0)

trace=a=>a.reduce((t,c,i)=>t+c[i],0)

const trace = arr => arr.reduce((acc, cur, i) => acc + (cur[i]), 0);

/*  Solution 2   */

function trace(arr) {
    let sum=0
    for (let i = arr.length-1; i>=0; i--) {
      sum+=arr[i][i]  
    }
    return sum
    }



/*  Solution 3   */


function trace(arr) {
	let sum = 0;
	for(let i = 0; i < arr.length; i++) {
		let numIndex = arr[i].find((el, index) => i == index);
		sum += numIndex;
	}
	return sum
}