/*



Algebra Sequence — Boxes
Create a function that takes a number (step) as an argument and returns the amount of boxes in that step of the sequence.

Box Sequence Image

Step 0: Start with 0
Step 1: Add 3
Step 2: Subtract 1
Repeat Step 1 & 2 ...
Examples
boxSeq(0) ➞ 0

boxSeq(1) ➞ 3

boxSeq(2) ➞ 2
Notes
Step (the input) is always a positive integer (or zero).

*/






/*  Solution 1   */


function boxSeq(step) {
	return step % 2 === 0 ? step : step + 2;
}


/*  Solution 2   */

const boxSeq = step => (step % 2 === 0 ? step : step + 2);

const boxSeq = step => step + (step % 2 ? 2 : 0);

const boxSeq=s=>s%2?s+2:s

const boxSeq = step => step % 2 === 0 ? step : step + 2;


/*  Solution 3   */

function boxSeq(step) {
	var r = 0;
	for (var i = 0; i < step; i++) {
		if (i%2==0) r += 3;
	  else r -= 1;
	}
	return r;
}




/*  Solution 4   */


function boxSeq(step){
	let res = 0
	for(let i=1; i<=step; i++) {
		res = i % 2 ? res + 3 : res - 1
	}
	return res
}