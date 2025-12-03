



/*


Smaller String Number
Create a function that returns the smaller number.

Examples
smallerNum("21", "44") ➞ "21"

smallerNum("1500", "1") ➞ "1"

smallerNum("5", "5") ➞ "5"
Notes
Numbers will be represented as strings, and your output should also be a string.
If both numbers tie, return either number.
Numbers will be positive.
Bonus: See if you can do this without converting to integers.


*/






/*  Solution 1   */


function smallerNum(n1, n2) {
    return Math.min(n1, n2).toString();
  }


/*  Solution 2   */


const smallerNum = (n1, n2) => (Number(n1) < Number(n2) ? n1 : n2);


let smallerNum=(n1, n2)=>String(Math.min(n1,n2))

const smallerNum = (a,b) => (a-b<0) ? a : b;

const smallerNum = ( n1, n2 ) => Math.min( n1, n2 ).toString()



/*  Solution 3   */


function smallerNum(n1, n2) {
	return (Number(n1) < Number(n2)) ? n1 : n2;
}