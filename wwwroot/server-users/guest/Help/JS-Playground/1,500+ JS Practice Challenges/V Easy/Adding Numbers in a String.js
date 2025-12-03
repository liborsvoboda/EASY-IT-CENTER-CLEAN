



/*

Adding Numbers in a String
Given a string of numbers separated by a comma and space, return the total of all the numbers.

Examples
addNums("2, 5, 1, 8, 4") ➞ 20

addNums("1, 2, 3, 4, 5, 6, 7") ➞ 28

addNums("10") ➞ 10
Notes
Numbers will always be separated by a comma and space.
Your function should accept negative numbers.



*/






/*  Solution 1   */

const sum = arr => arr.reduce((total, num) => total + num, 0);

const addNums = str => sum(str.split(', ').map(Number));

const addNums = a => a.split(',').map(Number).reduce((a,b)=>a+b);

const addNums = nums => nums.split(', ').reduce((a, v) => a + Number(v), 0);



/*  Solution 2   */

function addNums(nums) {
	let aa = nums.split(', ').map(x => +x)
	 //let number = Number(aa)
	return aa.reduce((acc, index) => acc +index)
}



/*  Solution 3   */

const addNums = s => s.match(/-?\d+/g).reduce((a,b) => a + +b, 0)


function addNums(nums) {
	return numbers = nums.split(', ').map(el => parseInt(el)).reduce((acc, val) => acc+val,0)
}