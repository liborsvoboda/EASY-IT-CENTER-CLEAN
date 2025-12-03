/*

Find the True Equations

In this challenge you will be given an array containing equations, with each equation written as a string. Here's an example:

["1+1=2", "2+2=3", "5*5=10", "3/3=1"]
If you do the math, you'll see that the equations "1+1=2" and "3/3=1" are actually true while "2+2=3" and "5*5=10" are false nonsense.

Write a function which, given an array of equations as above, returns only the true equations. For instance, for the example above the output should be:

["1+1=2", "3/3=1"]
Examples
trueEquations(["2*2=4"]) ➞ ["2*2=4"]

trueEquations(["1+1=3", "3-1=1"]) ➞ []

trueEquations(["1+1=2", "2+2=3", "5*5=10", "3/3=1"]) ➞ ["1+1=2", "3/3=1"]

Notes
If all equations are false, return the empty array [], as in the second example.
The equations will only involve the elementary operations: +, -, *, /
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


const trueEquations = arr => arr.filter(exp => eval(exp.replace("=", "===")));



//#############################################################
//#  SOLUTION 2  
//#############################################################


const trueEquations = arr => arr.filter((x) => eval(x.split `=` [0]) == x.split `=` [1]);


//#############################################################
//#  SOLUTION 3
//#############################################################


const operations = {
    '+' (x, y) { return +x + +y },
    '-' (x, y) { return +x - +y },
    '*' (x, y) { return +x * +y },
    '/' (x, y) { return +x / +y }
}

const trueEquations = arr =>
    arr.filter(equation => {
        const [x, operator, y, result] = equation.match(/\d+|[+-/*]|\d+/g);
        return operations[operator](x, y) === +result
    })



//#############################################################
//#  SOLUTION 4
//#############################################################


function trueEquations(arr) {
    return arr.map(x => x.replace('=', '==')).filter(x => eval(x))
        .map(x => x.replace('==', '='))
}



//#############################################################
//#  SOLUTION 5
//#############################################################


const trueEquations = arr => arr.filter(item => eval(item.split('=')[0]) == item.split('=')[1])