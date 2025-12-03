/*

Solve a Linear Equation

Create a function that returns the value of x (the "unknown" in the equation). Each equation will be formatted like this:

x + 6 = 12
Examples
solve("x + 43 = 50") ➞ 7

solve("x - 9 = 10") ➞ 19

solve("x + 300 = 100") ➞ -200

Notes
"x" will always be in the same place (you will not find an equation like 6 + x = 12).
Every equation will include either subtraction (-) or addition (+).
"x" may be negative.

*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 

function solve(eq) {
    return -eval(eq.substring(1).replace("=", "-"))
}



//#  SOLUTION 2  

const solve = eq => {
    const [, d, n1, , n2] = eq.split(' ');
    return eval(n2 + ({ '+': ' - ', '-': ' + ' })[d] + n1);
};



//#  SOLUTION 3


const solve = eq => {
    const [, b, c, , e] = eq.split ` `;
    return eval(`${e} ${b === '-' ? '+' : '-'} ${c}`);
}


//#  SOLUTION 4

function solve(eq) {
    let x;
    eq = eq.split(' ').reverse().slice(0, eq.length - 1)
    if (eq.includes('+')) {
        x = eq.join(' ').replace("=", '-').split(' ').slice(0, eq.length - 2).join(' ')
        console.log(x)
        return eval(x)
    } else {
        x = eq.join(' ').replace("=", '+').split(' ').slice(0, eq.length - 2).join(' ')
    }
    return eval(x)




    //#  SOLUTION 5


    const switchOperator = { '+': '-', '-': '+' };

    const solve = eq => {
        const [, op, num2, result] = eq.match(/([+-]) (-?\d+) = (-?\d+)/);
        return eval(`${result} ${switchOperator[op]} ${num2}`);
    };





    //#  SOLUTION 6


    function solve(eq) {
        const [x, sign, leftValue, equals, rightValue] = eq.split(" ");
        if (sign == "+") {
            return Number(rightValue) - Number(leftValue);
        } else {
            return Number(rightValue) + Number(leftValue);
        }
    }



    //#  SOLUTION 7

    const solve = (eq) => {
        eq = eq.split(" ");
        return eq[1] === "-" ?
            Number(eq[4]) + Number(eq[2]) :
            Number(eq[4]) - Number(eq[2]);
    };




    //#  SOLUTION 8


    function solve(eq) {
        let arr = eq.split(" ")
        if (arr[1] === "+") {
            return eval(arr[4]) - eval(arr[2])
        }
        if (arr[1] === "-") {
            return eval(arr[2] + "+" + arr[4])
        }
    }




    //#  SOLUTION 9


    function solve(eq) {
        return eq.charAt(2) == '+' ? eval(eq.split(/[+ =]+/)[2]) - eval(eq.split(/[+ =]+/)[1]) : eval(eq.split(/[- =]+/)[2]) + eval(eq.split(/[- =]+/)[1])
    }