/**
 * 226. Invert Binary Tree
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 
 * 
 * Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1
Trivia:
This problem was inspired by this original tweet by Max Howell:

Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.
 
*/



/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



var invertTree = function(root) {
    if (root === null) { return null; }
    var node = root.left;
    root.left = root.right;
    root.right = node;
    if (root.left) { invertTree(root.left); }
    if (root.right) { invertTree(root.right); }
    return root;
};