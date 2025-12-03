



/*

Find the Smallest and Biggest Numbers
Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

Examples
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

minMax([2334454, 5]) ➞ [5, 2334454]

minMax([1]) ➞ [1, 1]
Notes
All test arrays will have at least one element and are valid.



*/






/*  Solution 1   */


function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
  }


/*  Solution 2   */

const minMax = arr => [Math.min(...arr), Math.max(...arr)];

minMax = a => [Math.min(...a),Math.max(...a)]



/*  Solution 3   */

function minMax(arr) {
    return arr.sort((a,b) => a - b).slice(0, 1).concat(arr.slice(-1));
  }




  function minMax(arr) {
    var result = arr.sort((a, b) => a === b ? 0 : (a > b ? 1 : -1));
    
    return [result[0], result[arr.length - 1]];
  }