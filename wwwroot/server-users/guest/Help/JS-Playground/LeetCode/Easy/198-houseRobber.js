/*
  
  198. House Robber
  
  
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
             Total amount you can rob = 2 + 9 + 1 = 12.
 

Constraints:

0 <= nums.length <= 100
0 <= nums[i] <= 400
 

 */


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



// O(N) space, O(N) time
var rob = function(nums) {
    if (nums.length === 0) return 0;
    // maxAmount[i], the maxAmount robbed when the robber arrives at ith house,
    // the robber has not robber the ith house yet.
    var maxAmount = [0, nums[0]];
    for (var i = 2; i <= nums.length; i++) {
        maxAmount[i] = Math.max(maxAmount[i - 1], (maxAmount[i - 2] + nums[i - 1]));
    }

    return maxAmount.pop();
};