



/*


Simple OOP Calculator
Create functions for the Calculator class that can do the following:

Add two numbers.
Subtract two numbers.
Multiply two numbers.
Divide two numbers.
Examples
var calculator = new Calculator()

calculator.add(10, 5) ➞ 15

calculator.subtract(10, 5) ➞ 5

calculator.multiply(10, 5) ➞ 50

calculator.divide(10, 5) ➞ 2
Notes
The functions should return the result of the calculation.


*/






/*  Solution 1   */

class Calculator {
	//write functions to add(), subtract(), multiply() and divide()//
	add = (a,b) => a + b;
	subtract = (a,b) =>  a - b;
	multiply = (a,b) => a * b;
	divide = (a,b) => a / b;
}



/*  Solution 2   */

class Calculator {
	add = (num1, num2) => {
		return num1+num2;
	}
	subtract = (num1, num2) => num1-num2
	multiply = (num1, num2) => num1*num2
	divide = (num1, num2) => num1/num2
	// Write functions to add(), subtract(), multiply() and divide()
}




/*  Solution 3   */



class Calculator {
    add(num1, num2) {
      return num1 + num2;
    }
  
    subtract(num1, num2) {
      return num1 - num2;
    }
  
    multiply(num1, num2) {
      return num1 * num2;
    }
  
    divide(num1, num2) {
      return num1 / num2;
    }
  }