



/*


Summing the Squares
Create a function where given the number n, return the sum of all square numbers up to and including n.

squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14 
Examples
squaresSum(3) ➞ 14

squaresSum(12) ➞ 650

squaresSum(13) ➞ 819
Notes
Remember that n is included in the total.


*/






/*  Solution 1   */

function squaresSum(n) {
	var total=0;
	for(var i=1;i<=n;i++)
		total+=Math.pow(i,2);
	
	return total;
}


function squaresSum(n) {
	var temp=0;
	for(var i=1;i<=n;i++){
		temp=temp+i*i
	}
	return temp;
}



/*  Solution 2   */

const squaresSum = n => n++ * n * (2 * n - 1) / 6

const squaresSum = length => Array.from({length}, (_,i) => (i+1) ** 2).reduce((a,b) => a + b, 0);

const squaresSum = n => (2*n**3 + 3*n**2 + n) / 6;

const squaresSum = n => n ** 2 + (n ? squaresSum(n - 1) : 0);

const squaresSum = n => new Array(n).fill(0).map((_,i)=> (i + 1) ** 2).reduce((a,b)=> a + b,0)


/*  Solution 3   */


function squaresSum(n) {
	total = 0;
	for(var x = n; x > 0; x--) {total += Math.pow(x, 2);}
	return total;
}