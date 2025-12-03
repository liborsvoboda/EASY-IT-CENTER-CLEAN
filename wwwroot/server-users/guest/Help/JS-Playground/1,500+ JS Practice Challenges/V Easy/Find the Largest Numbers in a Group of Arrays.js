



/*

Find the Largest Numbers in a Group of Arrays
Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.

Examples
findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]) ➞ [-34, -2, 7]

findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]) ➞ [0.7634, 9.32, 9]
Notes
Watch out for negative integers (numbers).



*/






/*  Solution 1   */

function findLargestNums(arr) {
    return arr.map(a => Math.max(...a));
  }



/*  Solution 2   */



function findLargestNums(arr) {
    return arr.map(x => Math.max.apply(null, x));
  }



/*  Solution 3   */


function findLargestNums(arr) {
    var result = [];
    
    for (i=0; i < arr.length; i++) {
      
      result.push(Math.max.apply(null, arr[i]));    
      
    };
    return result;  
  }