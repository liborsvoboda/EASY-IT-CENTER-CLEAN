/*

Doubled Pay
An employee working at a very bizzare company, earns one penny on their first day. However, for every day that passes, their base amount doubles, so they earn two pennies on the second day and four pennies on the third day (totalling 7 pennies). Given a number of days, return how many pennies the employee accumulates.

Examples
doubledPay(1) ➞ 1

doubledPay(2) ➞ 3

doubledPay(3) ➞ 7

Notes
You will only get tests for valid positive integers.

*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 

function doubledPay(n) {
    return 2 ** n - 1;
}

//#  SOLUTION 2  

const doubledPay = n => 2 ** n - 1;

const doubledPay = n => !n ? 0 : (2 ** (n - 1) + doubledPay(n - 1));

//#  SOLUTION 3

function doubledPay(n) {
    let out = 1;
    let temp = 1;
    for (let i = 1; i < n; i++) {
        out += temp * 2;
        temp = temp * 2;
    };
    return out;
}


//#  SOLUTION 4


function doubledPay(n) {
    if (n === 1) return 1;

    let pay = 1;
    let savings = 1;

    for (let i = 1; i < n; i++) {
        pay *= 2;
        savings += pay;
    }
    return savings;
}


//#  SOLUTION 5


function doubledPay(n) {
    let sum = 1
    let base = 1
    for (var i = 1; i < n; i++) sum += (base *= 2)
    return sum
}