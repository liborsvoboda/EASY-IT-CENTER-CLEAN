



/*

Find the Largest Number in an Array
Create a function that takes an array of numbers. Return the largest number in the array.

Examples
findLargestNum([4, 5, 1, 3]) ➞ 5

findLargestNum([300, 200, 600, 150]) ➞ 600

findLargestNum([1000, 1001, 857, 1]) ➞ 1001
Notes
Expect either a positive number or zero (there are no negative numbers).
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.



*/






/*  Solution 1   */


function findLargestNum(arr) {
    return Math.max(...arr)
  }



  function findLargestNum(arr) {
    var largest = 0;
    
    arr.forEach(function (value) {
      if (value > largest){
        largest = value;
      }
    })
    
    return largest;
  }




/*  Solution 2   */

let findLargestNum = arr => Math.max(...arr)

const findLargestNum = arr => Math.max.apply(Math, arr)


let findLargestNum = a => Math.max.apply(Math, a)


/*  Solution 3   */


function findLargestNum(arr) {
    return arr.sort((a, b) => b - a)[0]
  }