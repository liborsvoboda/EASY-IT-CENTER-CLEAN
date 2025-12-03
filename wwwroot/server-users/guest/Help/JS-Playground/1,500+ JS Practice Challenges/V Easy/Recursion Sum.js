



/*



Recursion: Sum
Write a function that finds the sum of the first n natural numbers. Make your function recursive.

Examples
sum(5) ➞ 15
// 1 + 2 + 3 + 4 + 5 = 15

sum(1) ➞ 1

sum(12) ➞ 78
Notes
Check the Resources tab for info on recursion.

*/






/*  Solution 1   */

const sum = function(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr.reduce((acc, cur) => acc + cur);
};



/*  Solution 2   */

const sum = n => n === 1 ? n : n + sum(n-1);

const sum = (n) => n != 0 ? sum(n-1) + n : 0



/*  Solution 3   */


function sum(n) {
	if (n <= 1){
			return n
	}
	return sum(n-1) + n
}