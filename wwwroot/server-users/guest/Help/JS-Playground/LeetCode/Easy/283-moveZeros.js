/*  

283. Move Zeroes

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.

*/



/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



var moveZeroes = function(nums) {
    var i = 0,
        j = nums.length;
    while (i < j) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            j--;
        } else {
            i++;
        }
    }
};

// two pointers
var moveZeroes = function(nums) {
    var newStart = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[newStart] = nums[i];
            newStart++;
        }
    }

    while (newStart < nums.length) {
        nums[newStart] = 0;
        newStart++;
    }
};