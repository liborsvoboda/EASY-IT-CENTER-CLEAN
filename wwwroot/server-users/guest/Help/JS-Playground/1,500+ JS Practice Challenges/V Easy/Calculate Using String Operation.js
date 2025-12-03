/*  

Calculate Using String Operation
Create a function that takes two numbers and a mathematical operator and returns the result.

Examples
calculate(4, 9, "+") ➞ 13

calculate(12, 5, "-") ➞ 7

calculate(6, 3, "*") ➞ 18

calculate(25, 5, "/") ➞ 5

calculate(14, 3, "%") ➞ 2
Notes
Numbers can be negative.
The only operations used are those in the examples above.

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################




/*  

Solution 1

*/


const calculate = (a, b, c) => eval(a + c + b);

const calculate = (num1, num2, op) => eval(num1 + op + num2);

/*  

Solution 2

*/

function calculate(num1, num2, op) {
    return {
        "+": num1 + num2,
        "-": num1 - num2,
        "*": num1 * num2,
        "/": num1 / num2,
        "%": num1 % num2,
    }[op];
}


/*  

Solution 3

*/


function calculate(num1, num2, op) {
    if (op == '+') {
        return num1 + num2;
    } else if (op == '-') {
        return num1 - num2;
    } else if (op == '*') {
        return num1 * num2;
    } else if (op == '/') {
        return num1 / num2;
    } else if (op == '%') {
        return num1 % num2;
    }
}