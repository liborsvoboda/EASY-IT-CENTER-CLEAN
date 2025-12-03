/*

Neatly Formatted Math
Given a simple math expression as a string, neatly format it as an equation.

Examples
formatMath("3 + 4") ➞ "3 + 4 = 7"
formatMath("3 - 2") ➞ "3 - 2 = 1"
formatMath("4 x 5") ➞ "4 x 5 = 20"
formatMath("6 / 3") ➞ "6 / 3 = 2"

Notes
You will need to deal with addition, subtraction, multiplication and division.
Division will have whole number answers (and will obviously not involve 0).

*/

//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################


//#  SOLUTION 1 

const formatMath = expr => `${expr} = ${eval(expr.replace(/x/,'*'))}`;

const formatMath = expr => `${expr} = ${eval(expr.replace("x", "*"))}`;

//#  SOLUTION 2  

function formatMath(expr) {
    return `${expr} = ${eval(expr.replace("x", "*"))}`
}

//#  SOLUTION 3

function formatMath(expr) {
    modExp = expr.replace("x", "*");
    return `${expr} = ${eval(modExp)}`;
}


//#  SOLUTION 4

function formatMath(expr) {
    var arr = expr.split(" ")
    if (arr[1] === "+") {
        var sum = parseInt(arr[0]) + parseInt(arr[2])
        return arr[0] + " " + arr[1] + " " + arr[2] + "" + " = " + sum
    } else if (arr[1] === "-") {
        var sum = parseInt(arr[0]) - parseInt(arr[2])
        return arr[0] + " " + arr[1] + " " + arr[2] + "" + " = " + sum
    } else if (arr[1] === "x") {
        var sum = parseInt(arr[0]) * parseInt(arr[2])
        return arr[0] + " " + arr[1] + " " + arr[2] + "" + " = " + sum
    } else if (arr[1] === "/") {
        var sum = parseInt(arr[0]) / parseInt(arr[2])
        return arr[0] + " " + arr[1] + " " + arr[2] + "" + " = " + sum
    }

}


//#  SOLUTION 5

function formatMath(expr) {
    let array = expr.split(" ");
    let mathAnswer = "";
    let mathFunc = function() {
        if (array[1] === "/") {
            mathAnswer = Math.floor(array[0]) / Math.floor(array[2])
        }
        if (array[1] === "x") {
            mathAnswer = Math.floor(array[0]) * Math.floor(array[2])
        }
        if (array[1] === "-") {
            mathAnswer = Math.floor(array[0]) - Math.floor(array[2])
        }
        if (array[1] === "+") {
            mathAnswer = eval(expr);
        }
    }
    mathFunc();
    return array.join(" ") + " = " + mathAnswer
}



//#  SOLUTION 6

const formatMath = s => {
    let arr = s.split(" ");
    return arr[1] == "x" ? `${s} = ${arr[0] * arr[2]}` : `${s} = ${eval(s)}`;
};



//#  SOLUTION 7

const formatMath = expr => {
    expr = expr.split(' ')
    let result
    switch (expr[1]) {
        case 'x':
            result = expr[0] * expr[2]
            break
        case '/':
            result = expr[0] / expr[2]
            break
        case '-':
            result = expr[0] - expr[2]
            break
        default:
            result = +expr[0] + +expr[2]
            break
    }
    return `${expr.join(' ')} = ${result}`
}