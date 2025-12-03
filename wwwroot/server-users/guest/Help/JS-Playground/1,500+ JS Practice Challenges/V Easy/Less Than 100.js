



/*

Less Than 100?
Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

Examples
lessThan100(22, 15) ➞ true
// 22 + 15 = 37

lessThan100(83, 34) ➞ false
// 83 + 34 = 117




*/

/*  Solution 1   */

const lessThan100 = (a, b) => (a + b) < 100



/*  Solution 2   */
function lessThan100(a, b) {
    if(a + b < 100){
        return true;
    }
   return false
}


/*  Solution 3   */

function lessThan100(a, b) {
	if (a + b < 100) {
		return true;
	} else {
		return false;
	}
}