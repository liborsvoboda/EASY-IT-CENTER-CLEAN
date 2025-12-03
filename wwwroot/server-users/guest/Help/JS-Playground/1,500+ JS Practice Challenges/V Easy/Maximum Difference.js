



/*

Maximum Difference
Given an array of integers, return the difference between the largest and smallest integers in the array.

Examples
difference([10, 15, 20, 2, 10, 6]) ➞ 18
// 20 - 2 = 18

difference([-3, 4, -9, -1, -2, 15]) ➞ 24
// 15 - (-9) = 24

difference([4, 17, 12, 2, 10, 2]) ➞ 15
Notes



*/






/*  Solution 1   */

function difference(nums) {
	//spead array
	//Math.sign
	//Math.max - Math.min
	return Math.max(...nums) - Math.min(...nums)
}



/*  Solution 2   */

const difference = nums => Math.max(...nums) - Math.min(...nums);

const difference = (nums) => Math.max(...nums) - Math.min(...nums);

const difference=nums=>Math.max(...nums)-Math.min(...nums)



/*  Solution 3   */

function difference(nums) {
    let a = nums.sort((a,b)=>a-b);
    return a[a.length-1]-a[0];
    }