/*

Perfect Square Patch

Create a function that takes an integer and outputs an n x n square solely consisting of the integer n.

Examples
squarePatch(3) ➞ [
  [3, 3, 3],
  [3, 3, 3],
  [3, 3, 3]
]

squarePatch(5) ➞ [
  [5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5]
]

squarePatch(1) ➞ [
  [1]
]

squarePatch(0) ➞ []


Notes

n >= 0.
If n === 0, return an empty array

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const squarePatch = n => Array(n).fill(Array(n).fill(n));



//#############################################################
//#  SOLUTION 2  
//#############################################################



const squarePatch = length => Array.from({ length }, () => Array.from({ length }).fill(length));



//#############################################################
//#  SOLUTION 3
//#############################################################


let squarePatch = (n) => n == 0 ? [] :
    String(n).repeat(n).split("").map(x => x.repeat(x).split("").map(y => Number(y)))



//#############################################################
//#  SOLUTION 4
//#############################################################


function squarePatch(n) {
    return Array.from(Array.from({ length: n }, (_, i) => (Array.from({ length: n }, (_, i) => n))))
}


//#############################################################
//#  SOLUTION 5
//#############################################################


const squarePatch = n => [...Array(n)].fill([...Array(n)].fill(n));




//#############################################################
//#  SOLUTION 6
//#############################################################


function squarePatch(n) {
    const subArray = Array.from({ length: n }, i => n);
    let arr = [];
    subArray.map(a => arr.push(subArray));
    return arr;
}