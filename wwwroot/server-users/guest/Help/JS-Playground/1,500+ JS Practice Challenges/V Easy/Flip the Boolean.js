



/*
Flip the Boolean
Booleans can also be written as integers, where 1 = True and 0 = False. Make a function that returns the opposite of the boolean given.

Examples
flipBool(true) ➞ 0

flipBool(false) ➞ 1

flipBool(1) ➞ 0

flipBool(0) ➞ 1




*/


/*  Solution 1   */
const flipBool=b=> b ? 0 : 1;


/*  Solution 2   */

function flipBool(b) {
	return (!b)*1;
}

/*  Solution 3   */


function flipBool(b) {
	return b === true || b === 1 ? 0: 1;
}


/*  Solution 4   */


flipBool = b => !b + 0


/*  Solution 5   */

function flipBool(b) {
	return (b)? 0:1;
}



/*  Solution 6   */

function flipBool(b) {
    return b === true || b === 1 ? 0 : 1;
  }



