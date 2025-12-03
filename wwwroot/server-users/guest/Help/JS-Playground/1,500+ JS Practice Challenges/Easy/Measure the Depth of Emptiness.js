/*  

Measure the Depth of Emptiness

In this challenge you will receive an input of the form:

[[[[[[[[[[[]]]]]]]]]]]
In other words, an array containing an array containing an array containing... an array containing nothing.

Your goal is to measure the depth of this array, where [] has a depth 1, [[]] has depth of 2, [[[]]] has depth 3, etc.

Examples
measureDepth([]) ➞ 1

measureDepth([[]]) ➞ 2

measureDepth([[[]]]) ➞ 3

measureDepth([[[[[[[[[[[]]]]]]]]]]]) ➞ 11

Notes
For a bonus challenge, try to find a solution without recursion.
*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################





//#    SOLUTION 1

const measureDepth = arr => JSON.stringify(arr).indexOf(']');

const measureDepth = arr => JSON.stringify(arr).length / 2;



//#    SOLUTION 2


function measureDepth(arr) {
    return Math.max(...arr.map(x => measureDepth(arr)));
}

return 0;



//#    SOLUTION 3

function measureDepth(arr) {
    return arr.length === 0 ? 1 : measureDepth(arr[0]) + 1;
}