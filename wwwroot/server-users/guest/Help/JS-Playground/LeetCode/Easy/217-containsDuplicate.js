/*
 
 217. Contains Duplicate
 
 
Given an array of integers, find if the array contains any duplicates.
Your function should return true if any value appears at least twice in the array, and it should return false if every element is


Example 1:

Input: [1,2,3,1]
Output: true


Example 2:
Input: [1,2,3,4]
Output: false
Example 3:

Input: [1,1,1,3,3,4,3,2,4,2]
Output: true

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



var containsDuplicate = function(nums) {
    var appears = {};
    var containsDuplicate = false;
    for (var i = 0; i < nums.length; i++) {
        if (appears[nums[i]]) {
            appears[nums[i]] += 1;
            containsDuplicate = true;
            break;
        } else {
            appears[nums[i]] = 1;
        }
    }

    return containsDuplicate;
};