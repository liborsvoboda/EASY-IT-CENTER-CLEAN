



/*


Add, Subtract, Multiply or Divide?
Write a function that takes two numbers and returns if they should be added, subtracted, multiplied or divided to get 24. If none of the operations can give 24, return null.

Examples
operation(15, 9) ➞ "added"

operation(26, 2) ➞ "subtracted"

operation(11, 11) ➞ null
Notes
Only integers are used as test input.
Numbers should be added, subtracted, divided or multiplied in the order they appear in the parameters.
The function should return either "added", "subtracted", "divided", "multiplied" or null.


*/






/*  Solution 1   */


function operation(num1, num2) {
	let min = Math.min(num1, num2);
	let max = Math.max(num1, num2);
	return min + max === 24 ? "added" :
	(max - min === 24 ? "subtracted" :
	(max / min === 24 ? "divided" :
	(max * min === 24 ? "multiplied" : null)));
}




/*  Solution 2   */


function operation(num1, num2) {
	if (num1 + num2 === 24){
		return 'added';
	}	if (num1 - num2 === 24){
		return 'subtracted';
	}	if (num2 - num1 === 24){
		return 'subtracted';
	}	if (num1 * num2 === 24){
		return 'multiplied';
	}	if (num1 / num2 === 24){
		return 'divided';
	}	if (num2 / num1 === 24){
		return 'divided';
	} else {
		return null
	}
}

//Write a function that takes two numbers and returns if they should be 
//added, subtracted, multiplied or divided to get 24. If none of the 
//operations can give 24, return null.

/*  Solution 3   */


const operation=(a,b)=>
	a+b==24?"added"
	:a-b==24?"subtracted"
	:a*b==24?"multiplied"
	:a/b==24?"divided"
	:null;