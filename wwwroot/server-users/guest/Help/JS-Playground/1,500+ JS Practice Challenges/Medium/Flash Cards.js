/*
Flash Cards

Create a function that outputs the results of a flashcard. A flashcard is an array of three elements: a number, an operator symbol, and another number. Return the mathematical result of that expression.

There are 4 operators: + (addition), - (subtraction), x (multiplication), and / (division). If the flashcard displays a number being divided by zero, e.g. [3, "/", 0], then return undefined. For division, round to the hundredths place. So [10, "/", 3] should return 3.33.

Examples
flash([3, "x", 7]) ➞ 21

flash([5, "+", 7]) ➞ 12

flash([10, "-", 9]) ➞ 1

flash([10, "/", 0]) ➞ undefined

flash([10, "/", 3]) ➞ 3.33

Notes
Flash cards contain only zero or positive numbers.
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function flash([num1, op, num2]) {
    const calc = {
        '+': (n1, n2) => n1 + n2,
        '-': (n1, n2) => n1 - n2,
        'x': (n1, n2) => n1 * n2,
        '/': (n1, n2) => Number.isFinite(n1 / n2) ?
            Number((n1 / n2).toFixed(2)) : undefined
    }
    return calc[op](num1, num2)
}



//#############################################################
//#  SOLUTION 2  
//#############################################################



function flash([num1, op, num2]) {
    return num2 == 0 && op == '/' ? undefined : +eval(num1 + op.replace('x', '*') + num2).toFixed(2);
}



//#############################################################
//#  SOLUTION 3
//#############################################################



function flash([num1, op, num2]) {
    switch (op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case 'x':
            return num1 * num2;
        case '/':
            const result = num1 / num2;
            return Number.isFinite(result) ? Number(result.toFixed(2)) : undefined;
    }

    return undefined;
}



//#############################################################
//#  SOLUTION 4
//#############################################################



function flash([num1, op, num2]) {

    if (op == 'x') return num1 * num2;
    if (op == '+') return num1 + num2;
    if (op == '-') return num1 - num2;
    if (num2 == 0) return undefined;
    return Math.round(num1 / num2 * 100) / 100;
}





//#############################################################
//#  SOLUTION 5
//#############################################################



function flash([num1, op, num2]) {
    var ev = eval("parseFloat((" + num1 + op.replace("x", "*") + num2 + ").toFixed(2))");
    return (isNaN(ev) || Math.abs(ev) == Infinity) ? undefined : ev;
}




//#############################################################
//#  SOLUTION 6
//#############################################################





function flash([num1, op, num2]) {
    let result;
    switch (op) {
        case 'x':
            result = num1 * num2;
            break
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '/':
            result = Math.round((num1 / num2) * 100) / 100;
            break;
        default:
            return 'INVALID OPERATOR';
    }
    return result === Infinity || isNaN(result) || result === undefined ? undefined : result;
}





//#############################################################
//#  SOLUTION 7
//#############################################################



const flash = (arr) => {
    let num;

    if (arr.includes('+')) num = arr[0] + arr[2];
    else if (arr.includes('-')) num = arr[0] - arr[2];
    else if (arr.includes('x')) num = (arr[0] * arr[2]);
    else if (arr.includes('/') && arr[2] == 0) num = undefined;
    else if (arr.includes('/') && arr[0] == 0) num = 0;
    else if (arr.includes('/')) num = (arr[0] / arr[2]);

    return (num !== undefined && num.toString().includes('.')) ?
        Number(num.toFixed(2)) : num;
}