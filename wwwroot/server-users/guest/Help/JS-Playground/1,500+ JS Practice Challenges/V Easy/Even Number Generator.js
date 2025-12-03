



/*


Even Number Generator
Create a function that finds all even numbers from 1 to the given number.

Examples
findEvenNums(8) ➞ [2, 4, 6, 8]

findEvenNums(4) ➞ [2, 4]

findEvenNums(2) ➞ [2]
Notes
If there are no even numbers, return an empty array.


*/






/*  Solution 1   */

const findEvenNums = num =>   Array.from({ length: Math.floor(num / 2) }, (_, i) => (i + 1) * 2);

const findEvenNums = num => [...Array(num).keys()].map(x => x + 1).filter(x => !(x % 2));

findEvenNums=n=>[...Array(n>>1).keys()].map(x=>2+2*x)




/*  Solution 2   */

function findEvenNums(num) {
	let res = [];
	for (let i = 0; i <= num; i++) {
		let result = res.push(i);
	}
	return res.filter(x => x > 0 && x % 2 == 0)
}



/*  Solution 3   */


const findEvenNums = num => {
    let output = [];
    for (let i = 2; i <= num; i++) {
      if (i % 2 === 0) {
        output.push(i)
      }
    }
    return output;
  }