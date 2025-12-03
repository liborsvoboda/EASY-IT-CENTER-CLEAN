/**
 * @param {number} numRows
 * @return {number[][]}
 */


/**
 * 112. Path Sum
 * 
 * Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.
 * 
 * Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
 * 
 *  
 */



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################


var generate = function(numRows) {
    if (numRows === 0) return [];
    var result = [
        [1]
    ];
    for (var i = 1; i < numRows; i++) {
        var preRow = result[i - 1];
        var newRow = [1];
        for (var j = 1; j < i; j++) {
            newRow[j] = preRow[j - 1] + preRow[j];
        }
        newRow.push(1);
        result.push(newRow);
    }
    return result;
};