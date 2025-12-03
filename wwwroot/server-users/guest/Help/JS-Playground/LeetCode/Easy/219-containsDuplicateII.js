/**
 * 219. Contains Duplicate II
 * 
 * 
 * Given an array of integers and an integer k,
 * find out whether there are two distinct indices i and j 
 * in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.
 * 
 * 
 * Example 1:
 * 
 * Input: nums = [1,2,3,1], k = 3
 * Output: true
 * 
 * 
 * 
 * Example 2:
 * Input: nums = [1,0,1,1], k = 1
 * Output: true
 * 
 * Example 3:
 * Input: nums = [1,2,3,1,2,3], k = 2
 * Output: false
 *  
 *  
 * key: use JavaScript Object to keep track the num and its index
 * REMEBER: use if (key in Obj) to check if the Obj has the key 'key'
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################


var containsNearbyDuplicate = function(nums, k) {
    var numIndex = {};
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] in numIndex) {
            if (i - numIndex[nums[i]] <= k) {
                return true;
            }
        }
        numIndex[nums[i]] = i;
    }

    return false;
};