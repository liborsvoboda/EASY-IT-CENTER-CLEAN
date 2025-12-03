

/*  */

/*  

Return a String as an Integer
Create a function that takes a string and returns it as an integer.

Examples
stringInt("6") ➞ 6

stringInt("1000") ➞ 1000

stringInt("12") ➞ 12
Notes
All numbers will be whole numbers.



*/


/*  Solution 1   */
function stringInt(str) {
	return parseInt(str);
}


/*  Solution 2   */

const stringInt = s => +s;




/*  Solution 3   */



let  stringInt = str => Number(str);