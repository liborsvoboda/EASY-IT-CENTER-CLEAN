/*  

Level Order Traversal

Given a Binary Search Tree (BST) implementation, complete the traverse function which is present in the BST class. Here you have to perform the level-order traversal on BST which is another term for Breadth First Traversal.

Examples
traverse() ➞  [10, 4, 20, 1, 5]

      10
      /   \
    4    20
  /  \
1    5

traverse() ➞ [100, 70, 200, 34, 80, 300]

       100
       /    \
    70    200
  /    \          \
34   80      300


Notes
Make sure you don't modify the code that is already in the Code tab. Only complete the traverse() function and return an array.

*/




//#############################################################
//#                        MY SOLUTION    1                  #
//#############################################################



class Node {
    constructor(data) {
        this.data = data;
        this.right = null;
        this.left = null;
    }
}

class BST {
    constructor() { this.root = null; }
    insert(element) {
        const node = new Node(element);
        if (!this.root) this.root = node;
        else this.insertNode(this.root, node);
    }
    insertNode(node, newNode) {
        if (node.data > newNode.data) {
            if (!node.left) node.left = newNode;
            else this.insertNode(node.left, newNode);
        } else {
            if (!node.right) node.right = newNode;
            else this.insertNode(node.right, newNode);
        }
    }

    traverse() {
        let q = [this.root],
            r = [];
        while (q.length) {
            let n = q.shift();
            if (n) {
                r.push(n.data);
                q.push(n.left, n.right);
            }
        }
        return r;
    }
}








//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################









//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################