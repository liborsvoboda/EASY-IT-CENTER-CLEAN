



/*


Filter out Strings from an Array
Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

Examples
filterArray([1, 2, "a", "b"]) ➞ [1, 2]

filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]

filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
Notes
Zero is a non-negative integer.


*/






/*  Solution 1   */


function filterArray(arr) {
    return arr.filter(n => typeof n === 'number');
  }


/*  Solution 2   */

const filterArray = arr => arr.filter(i => typeof i === 'number')

filterArray=a=>a.filter(e=>e===~~e)


/*  Solution 3   */


function filterArray(arr) {
    return arr.filter(a => typeof a === 'number');
  }



  function filterArray(arr) {
    return arr.filter(a => typeof a !== 'string')
  }