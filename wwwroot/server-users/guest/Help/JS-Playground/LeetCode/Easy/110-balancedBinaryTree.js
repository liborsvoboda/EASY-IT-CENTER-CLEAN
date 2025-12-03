/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */



/*
  
110. Balanced Binary Tree

Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

 

Example 1:

Given the following tree [3,9,20,null,null,15,7]:

    3
   / \
  9  20
    /  \
   15   7
Return true.

Example 2:

Given the following tree [1,2,2,3,3,null,null,4,4]:

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
Return false.



*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################




var isBalanced = function(root) {
    if (!root) return true;
    if (getHeight(root) === -1) return false;
    return true;
};

var getHeight = function(root) {
    if (!root) return 0;
    var leftHeight = getHeight(root.left);
    if (leftHeight === -1) return -1;
    var rightHeight = getHeight(root.right);
    if (rightHeight === -1) return -1;
    if (leftHeight === -1 || rightHeight === -1) return -1;
    var heightDiff = Math.abs(leftHeight - rightHeight);
    if (heightDiff > 1) return -1;

    return Math.max(leftHeight, rightHeight) + 1;
}