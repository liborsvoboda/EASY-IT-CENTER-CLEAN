/*

Basic Arithmetic Operations

Write a function that does the following for the given values: add, subtract, divide and multiply . This is simply referred to as the basic arithmetic operations. The variables have to be defined, but in this challenge, it will be defined for you. All you have to do, is to check the variables, do some string to integer conversion, use some if conditions, and apply the arithmetic operation.

The numbers and operation are given as a string and should result to an integer value.

Examples
operation("1",  "2",  "add" ) ➞ 3

operation("4",  "5",  "subtract") ➞ -1

operation("6",  "3",  "divide") ➞ 2


Notes
The numbers and operation are given as a string and should result to an integer value.
If the operation results to Infinity, then return "undefined" (e.g. division by zero).
Division results will be rounded down to its integral part.

*/


//#############################################################
//#  SOLUTION 1 
//#############################################################


const operation = (...e) => {
    let ops = { add: '+', subtract: '-', multiply: '*', divide: '/' }
    return (x = eval(e[0] + ops[e[2]] + e[1])) == Infinity ? "undefined" : x
}




//#############################################################
//#  SOLUTION 2  
//#############################################################


function operation(a, b, op) {
    return op[0] == 'a' ? +a + +b :
        op[0] == 's' ? +a - +b :
        op[0] == 'd' ? b == 0 ? 'undefined' : +a / +b :
        op[0] == 'm' ? +a * +b :
        'undefined';
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function operation(a, b, op) {
    let c = parseInt(a)
    let d = parseInt(b)
    let e = op == "add" ? c + d :
        op == "subtract" ? c - d :
        op == "multiply" ? c * d :
        c / d

    return e == Infinity ? "undefined" : e

}




//#############################################################
//#  SOLUTION 4
//#############################################################


const operation = (a, b, op) => op == 'divide' && b == 0 ? 'undefined' : eval(`${a} ${{add:'+', subtract:'-', divide: '/', multiply:'*'}[op]} ${b}`);




//#############################################################
//#  SOLUTION 5
//#############################################################



function operation(a, b, op) {
    var x = Number(a),
        y = Number(b),
        result;

    switch (op) {
        case "add":
            result = x + y;
            break;
        case "multiply":
            result = x * y;
            break;
        case "divide":
            result = x / y;
            break;
        case "subtract":
            result = x - y;
            break;
        default:
            result = "undefined";
            break;
    }

    return isFinite(result) ? result : "undefined";
}