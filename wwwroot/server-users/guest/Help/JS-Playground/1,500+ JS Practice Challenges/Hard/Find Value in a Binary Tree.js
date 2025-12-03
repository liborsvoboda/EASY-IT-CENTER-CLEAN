/*
Find Value in a Binary Tree

An array that represents a Binary Tree is in the following form:

binaryTree = [val, arrLeft, arrRight]
When arrLeft is the left side of the tree and arrRight is the right side of the tree.

To illustrate:

const arr1 = [3, [ 8, [ 5, null, null], null], [ 7, null, null]]

// arr1 represents the following Binary Tree:

                    3
                   / \
                  8   7
                 /\   /\
                5  N N  N
               /\
               N N

// Where N represents null.
Create a function that takes an array that represent a Binary Tree and a value and return true if the value is in the tree and, false otherwise.

Examples
valueInTree(arr1, 5) ➞ true

valueInTree(arr1, 9) ➞ false

valueInTree(arr2, 51) ➞ false

Notes
The tree will contain integers only and will be presented by an array in the specified format.
*/





//#############################################################
//#  SOLUTION 1 
//#############################################################



const valueInTree = (tree, val) => tree.flat(Infinity).includes(val);



const valueInTree = (tree, val) => (tree.join("").indexOf(val) > -1 ? true : false)



const valueInTree = (tree, val) => tree.flat(Infinity).indexOf(val) !== -1 ? true : false;






//#############################################################
//#  SOLUTION 2  
//#############################################################



const valueInTree = (tree, v) => tree ? (tree[0] === v ||
    valueInTree(tree[1], v) || valueInTree(tree[2], v)) : false;








//#############################################################
//#  SOLUTION 3
//#############################################################



function valueInTree(tree, val) {
    if (tree && tree[0]) {
        if (val == tree[0]) {
            return true;
        } else {
            return valueInTree(tree[1], val) || valueInTree(tree[2], val);
        }
    }
    return false;
}






//#############################################################
//#  SOLUTION 4
//#############################################################



function valueInTree(tree, val) {
    if (tree[0] === val) {
        return true;
    }

    return !!(tree[1] && valueInTree(tree[1], val)) || !!(tree[2] && valueInTree(tree[2], val))

}






//#############################################################
//#  SOLUTION 5
//#############################################################



function valueInTree(tree, val) {
    let flat = tree.flat(Infinity);
    return flat.includes(val) ? true : false;
}







//#############################################################
//#  SOLUTION 6
//#############################################################



function valueInTree(tree, val) {
    const res = [];

    function flattenArr(tree) {
        for (let i of tree) {
            Array.isArray(i) ? flattenArr(i.flat()) : res.push(i);
        }
    }
    flattenArr(tree)
    return res.includes(val)
}