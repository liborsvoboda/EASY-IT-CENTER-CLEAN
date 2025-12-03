/*


Basic Calculator
Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

Examples
calculator(2, "+", 2) ➞ 4

calculator(2, "*", 2) ➞ 4

calculator(4, "/", 2) ➞ 2
Notes
If the input tries to divide by 0, return: "Can't divide by 0!"

*/






/*  Solution 1   */


function calculator(num1, operator, num2) {
	operations = {
		'+': (a,b) => a + b,
		'-': (a,b) => a - b,
		'*': (a,b) => a * b,
		'/': (a,b) => b ? a / b :"Can't divide by 0!"
	}
	
	return operations[operator](num1,num2)
}


/*  Solution 2   */

const calculator = (m,o,n) => o+n === "/0" ? 'Cannot divide by 0!' : eval(m+o+n);

const calculator=(num1, o, num2)=> 	o=="/" && num2==0?"Can't divide by 0!":eval(num1+o+num2)

const calculator = (...inp) => (a = eval(inp.join``), a) !== Infinity ? a : `Can't divide by 0!`;

/*  Solution 3   */


function calculator(num1, operator, num2) {
	switch (operator) {
		case '+':
			return num1 + num2;
		case '-':
			return num1 - num2;
		case '*':
			return num1 * num2;
		case '/':
			if (num2 === 0) return "Can't divide by 0!";
			return num1 / num2;
	}
	return null;
}

