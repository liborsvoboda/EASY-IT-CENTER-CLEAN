



/*

Return the Last Element in an Array
Create a function that accepts an array and returns the last item in the array.

Examples
getLastItem([1, 2, 3]) ➞ 3

getLastItem(["cat", "dog", "duck"]) ➞ "duck"

getLastItem([true, false, true]) ➞ true
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.



*/






/*  Solution 1   */

function getLastItem(arr) {
    return arr[arr.length - 1]
  }


/*  Solution 2   */

const getLastItem = arr => arr[arr.length - 1];

/*  Solution 3   */

const getLastItem = a => a.slice(-1)[0];



/*  Solution 4   */


function getLastItem(arr) {
    if (arr.length>0)
            return(arr[arr.length-1]);
    else return(null);
    
  }