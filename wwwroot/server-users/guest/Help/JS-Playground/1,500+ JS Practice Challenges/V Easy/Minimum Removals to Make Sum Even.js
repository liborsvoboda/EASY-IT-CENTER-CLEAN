



/*


Minimum Removals to Make Sum Even
Create a function that returns the minimum number of removals to make the sum of all elements in an array even.

Examples
minimumRemovals([1, 2, 3, 4, 5]) ➞ 1

minimumRemovals([5, 7, 9, 11]) ➞ 0

minimumRemovals([5, 7, 9, 12]) ➞ 1
Notes
If the sum is already even, return 0 (see example #2).
The output will be either 0 or 1.


*/






/*  Solution 1   */

function minimumRemovals(arr) {
    let x = arr.reduce((a,b)=>a+b)
    if(x%2===0){return 0}
        else
            {return 1}
    }



/*  Solution 2   */

const minimumRemovals = a => a.reduce((t,c) => t+c)%2

const minimumRemovals = arr => arr.reduce(((acc, value) => acc + value), 0) % 2





/*  Solution 3   */


function minimumRemovals(arr) {

	return (arr.reduce((x,y)=>(x+y)%2))
}