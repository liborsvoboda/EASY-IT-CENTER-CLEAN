



/*


Sum of Cubes
Create a function that takes in an array of numbers and returns the sum of its cubes.

Examples
sumOfCubes([1, 5, 9]) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

sumOfCubes([3, 4, 5]) ➞ 216

sumOfCubes([2]) ➞ 8

sumOfCubes([]) ➞ 0
Notes
If given an empty array, return 0.


*/






/*  Solution 1   */


function sumOfCubes(nums) {
	return nums.reduce((p,c) => p + Math.pow(c, 3), 0);
}


function sumOfCubes(nums) {
	return nums.map(num => Math.pow(num, 3)).reduce((acc, num) => acc + num, 0);
}



/*  Solution 2   */

const sumOfCubes = nums => nums.map(x => x * x * x).reduce((a,c) => a + c, 0);

const sumOfCubes = (nums) => nums.map(x => Math.pow(x, 3)).reduce((a, b) => a + b, 0)

const sumOfCubes = (nums) => nums.reduce((acc, val) => acc + val*val*val, 0);

const sumOfCubes = (nums) => nums.reduce((acc, cv, i) => 	acc += Math.pow(cv, 3), 0)

/*  Solution 3   */


function sumOfCubes(nums) {
	var r = 0;
	for (var i in nums) {
		r += nums[i]*nums[i]*nums[i];
	}
	return r;
}