/*

Bitwise Operator to Check Odd, Regular Expression to Check Even
Create two functions:

The first is isOdd() to check if a given number is odd using bitwise operator.
The second is isEven() to check if a given input is even using regular expressions.
Use of % operator is disallowed.

Examples
isOdd(3) ➞ "Yes"
// Use Bitwise Operator

isOdd(58) ➞ "No"
// Use Bitwise Operator

isEven("0") ➞ "Yes"
// Use Regular Expression

isEven("-99") ➞ "No"
// Use Regular Expression


Notes
Input will only be integers (positive/negative/zero).
For the second function, input will be numbers in string.
For more info on regular expressions, check the Resources tab.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


const isOdd = n => n&1 ? 'Yes' : 'No'
const isEven = n => /[02468]$/.test(n) ? 'Yes' : 'No'



//#############################################################
//#  SOLUTION 2  
//#############################################################



const isOdd = n => ['No', 'Yes'][n & 1]
const isEven = s => ['No', 'Yes'][+/[02468]/.test(s.slice(-1)



//#############################################################
//#  SOLUTION 3
//#############################################################




// Use Bitwise Operation % modulo operator disallowed.

const isOdd = n => n & 1 ? "Yes" : "No";
	



// Use Regular Expression  % modulo operator disallowed.

const isEven = n => /^[-]?\d*[02468]$/.test(n) ? "Yes" : "No";




//#############################################################
//#  SOLUTION 4
//#############################################################



// Use Bitwise Operator (% operator disallowed.)
function isOdd(number) {
    let binary = number.toString(2)
    if(binary[binary.length - 1] == 0) {
        return "No";
    }
    return "Yes";
}


// Use Regular Expression (% operator disallowed.)
function isEven(number) {
		let str = number + '';
		if(str[str.length - 1] == 0 || str[str.length - 1] == 2 || str[str.length - 1] == 4 || str[str.length - 1] == 6 || str[str.length - 1] == 8) {
			return "Yes";
		}
		return "No";
}