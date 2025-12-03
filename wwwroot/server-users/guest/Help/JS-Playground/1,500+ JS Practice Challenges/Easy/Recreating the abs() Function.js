/*  

Recreating the abs() Function

The Math.abs() function returns the absolute value of a number. This means that it returns a number's positive value. You can think of it as the distance away from zero.

Create a function that recreates this functionality.

Examples
absolute(-5) ➞ 5

absolute(-3.14) ➞ 3.14

absolute(250) ➞ 250

Notes
Tests will only include valid numbers.
Don't use the Math.abs() function (it will defeat the purpose of the challenge).

*/





//#############################################################
//#    SOLUTION 1
//#############################################################


const absolute = n => n < 0 ? -n : n;


const absolute = n => Math.max(n, -n);


const absolute = n => [n, -n][+(n < 0)]


const absolute = n => +(n + '').replace(/^\-/, '');



//#############################################################
//#    SOLUTION 2
//#############################################################


function absolute(n) {
    if (n > 0) return n;
    let n2 = String(n)

    n2 = n2.replace(n2[0], "");

    return Number(n2)

}