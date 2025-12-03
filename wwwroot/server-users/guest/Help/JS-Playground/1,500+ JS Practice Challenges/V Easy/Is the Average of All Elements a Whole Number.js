



/*

Is the Average of All Elements a Whole Number?
Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.

Examples
isAvgWhole([1, 3]) ➞ true

isAvgWhole([1, 2, 3, 4]) ➞ false

isAvgWhole([1, 5, 6]) ➞ true

isAvgWhole([1, 1, 1]) ➞ true

isAvgWhole([9, 2, 2, 5]) ➞ false
Notes



*/






/*  Solution 1   */


function isAvgWhole(arr) {
	return Number.isInteger(arr.reduce((accum, val) => accum + val) / arr.length) 
}




/*  Solution 2   */

const isAvgWhole = A => !(eval(A.join`+`) / A.length % 1)

const isAvgWhole = arr => (arr.reduce((a, b) => a + b) / arr.length) % 1 === 0;





/*  Solution 3   */


function isAvgWhole(arr) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
        
        var x = arr.reduce(reducer)
        var y = x / arr.length
        if (y % 1 != 0){
            return false
        }
        else {
            return true
        }
    }