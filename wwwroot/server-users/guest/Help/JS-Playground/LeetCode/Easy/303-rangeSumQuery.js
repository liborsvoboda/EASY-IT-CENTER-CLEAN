/**
 * 
 * 303. Range Sum Query - Immutable

 Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive

Example:

Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
 

Constraints:

You may assume that the array does not change.
There are many calls to sumRange function.
0 <= nums.length <= 10^4
-10^5 <= nums[i] <= 10^5
0 <= i <= j < nums.length

 */


/**
 * Key: Dynamic Programming
 * add an array to track the sum of previous elements
 * sums[i] = sum[i-1] + nums[i-1];
 * sumRange[i, j] = sums[j+1] - sums[i];
 *
 * @constructor
 * @param {number[]} nums
 */



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



var NumArray = function(nums) {
    this.sums = [0];
    for (var i = 1; i <= nums.length; i++) {
        this.sums[i] = this.sums[i - 1] + nums[i - 1];
    }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.sums[j + 1] - this.sums[i];
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */