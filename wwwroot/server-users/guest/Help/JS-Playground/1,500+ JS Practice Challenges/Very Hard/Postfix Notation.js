/*  

Postfix Notation

Postfix notation is a mathematical notation in which operators follow their operands. In other words, pfexp1 pfexp2 op, where pfexp1 and pfexp2 are both postfix expressions.

Some examples:

2 2 + is the postfix notation of the expression 2 + 2.
2 3 * 1 - 5 / is the postfix notation of the expression ((2 * 3) - 1) / 5.
Here you have to compute the result from a postfix expression.

Examples
postfix("2 2 +") ➞ 4
// 2 + 2 = 4

postfix("2 3 * 1 - 5 /") ➞ 1
// ((2 * 3) - 1) / 5 = (6 - 1) / 5 = 5 / 5 = 1

Note
Operators and operands are separated by a space.
The operators +, -, *, / may be supported.

*/






//#############################################################
//#                        MY SOLUTION    1                 #
//#############################################################



const postfix = E => {
    while (isNaN(E))
        E = E.replace(/(\d+) (\d+) (\D)/g, (_, l, r, o) => eval(l + o + r))
    return +E
}




//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


function postfix(expr) {
    const regex = /(\d+) (\d+) ([+*/-])/g;
    if (!regex.test(expr)) {
        return Number(expr)
    } else {
        return postfix(
            expr.replace(regex, (_, pfexp1, pfexp2, op) => eval(`${pfexp1}${op}${pfexp2}`)),
        );
    }
}




//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################


const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b
}

const calculate = (str) => {
    return str.replace(
        /(\d+) (\d+) ([+-/*//])/g,
        (_, p1, p2, p3) => operators[p3](Number(p1), Number(p2))
    )
}

function postfix(expr) {
    return Number(expr) || postfix(calculate(expr))
}