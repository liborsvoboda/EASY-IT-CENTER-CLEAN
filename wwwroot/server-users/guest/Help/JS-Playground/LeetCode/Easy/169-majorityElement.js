/*
 
169. Majority Element
 
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



// accepted, but not good.
var majorityElement = function(nums) {
    var appears = {};
    for (var i = 0; i < nums.length; i++) {
        if (appears[nums[i]]) {
            appears[nums[i]]++;
        } else {
            appears[nums[i]] = 1;
        }
    }

    for (key in appears) {
        if (appears[key] >= nums.length / 2) {
            return parseInt(key);
        }
    }
};

// better solution
var majorityElement = function(nums) {
    nums.sort(function(a, b) {
        return a - b;
    });
    var mid = Math.floor(nums.length / 2);
    return nums[mid];
};