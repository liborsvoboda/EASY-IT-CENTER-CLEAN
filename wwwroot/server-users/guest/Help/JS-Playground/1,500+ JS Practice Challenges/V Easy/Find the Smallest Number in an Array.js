



/*

Find the Smallest Number in an Array
Create a function that takes an array of numbers and returns the smallest number in the set.

Examples
findSmallestNum([34, 15, 88, 2]) ➞ 2

findSmallestNum([34, -345, -1, 100]) ➞ -345

findSmallestNum([-76, 1.345, 1, 0]) ➞ -76

findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999]) ➞ -0.9999

findSmallestNum([7, 7, 7]) ➞ 7
Notes
Test cases contain decimals.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.



*/






/*  Solution 1   */



function findSmallestNum(arr) {
    return Math.min(...arr);
  }

/*  Solution 2   */

function findSmallestNum(arr) {
    var lowest;
    lowest = arr[0];
    for (var i in arr){
      if (arr[i]<lowest){
        lowest = arr[i];
      }
    }
    return lowest;
  }



/*  Solution 3   */


function findSmallestNum(arr) {
    return arr.reduce((prev, item) => Math.min(prev, item))
  }