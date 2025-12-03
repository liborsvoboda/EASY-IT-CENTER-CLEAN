



/*


True Ones, False Zeros
Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.

Examples
integerBoolean("100101") ➞ [true, false, false, true, false, true]

integerBoolean("10") ➞ [true, false]

integerBoolean("001") ➞ [false, false, true]
Notes
Expect numbers with 0 and 1 only.


*/






/*  Solution 1   */

function integerBoolean(n) {
	result = [];
	
	for (i = 0; i < n.length; i++){
		result.push(n[i]==1);
	}
	return result;
}



/*  Solution 2   */

const integerBoolean = n => [...n].map(a => a == 1);

const integerBoolean = n => [...n].map(b => !!+b);

const integerBoolean = n => [...n].map(x => Boolean(Number(x)));


/*  Solution 3   */

function integerBoolean(n){
	return [...n].map(el=>+el).map(l=>{
		return l===1?true:false
	})
}