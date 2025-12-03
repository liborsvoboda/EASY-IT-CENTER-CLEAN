/*

Increment to Top

Create a function that returns the total number of steps it takes to transform each element to the maximal element in the array. Each step consists of incrementing a digit by one.

Examples
incrementToTop([3, 4, 5]) ➞ 3
// Maximal element in the array is 5.
// To transform 3 to 5 requires 2 steps: 3 -> 4, 4 -> 5.
// To transform 4 to 5 requires 1 step: 4 -> 5.
// Total steps required is 3.

incrementToTop([4, 3, 4]) ➞ 1
// Maximal element in the array is 4.
// To transform 3 to 4 requires 1 steps: 3 -> 4.
// Total steps required is 1.

incrementToTop([3, 3, 3]) ➞ 0

incrementToTop([3, 10, 3]) ➞ 14

Notes
If the array contains only the same digits, return 0 (see example #3).
Bonus: Can you write a solution that achieves this by only traversing the array once? (i.e. without finding the max before hand)
*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 

function incrementToTop(arr) {
    let biggestElem = Math.max(...arr);
    return arr.reduce((a, b) => { return a + (biggestElem - b) }, 0);
}


//#  SOLUTION 2  


const incrementToTop = (arr) => {
    let steps = 0;
    for (let i = 0; i < arr.length; i++) {
        steps += Math.max(...arr) - arr[i];
    }
    return steps;
}


//#  SOLUTION 3

const incrementToTop = arr => arr.reduce((a, c) => a + Math.max(...arr) - c, 0);


//#  SOLUTION 4


function incrementToTop(arr) {
    var maxArray = Math.max(...arr);
    var increment = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < maxArray) {
            increment = increment + maxArray - arr[i];
        }
    }
    return increment;
}



//#  SOLUTION 5

function incrementToTop(arr) {
    var s = arr.map(x => x = Math.max(...arr) - x);
    return s.reduce((x, y) => {
        return x + y;
    })
}