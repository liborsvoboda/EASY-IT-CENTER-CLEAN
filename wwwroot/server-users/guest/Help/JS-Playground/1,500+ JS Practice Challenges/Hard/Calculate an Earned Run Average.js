/*

Calculate an Earned Run Average
Create a function that returns an Earned Run Average (ERA). An ERA is calculated by multiplying 9 by the quotient of Earned Runs Allowed er divided by ip Innings Pitched.

In baseball statistics, innings are represented with a fractional part of .1 (1/3) or .2 (2/3) to represent the number of outs in an inning. A whole number or a number with a fractional part of .0 represents a full inning with three outs. Check the Resources tab for a deeper explanation.

Examples
era(22, 99) ➞ 2.00

era(23, 99.1) ➞ 2.08

era(24, 99.2) ➞ 2.17

Notes
ERA is represented with a scale of 2: 2.08
For 1/3 and 2/3, use a scale of 2.

*/



//#############################################################
//#  SOLUTION 1                                               #
//#############################################################


function era(er, ip) {
    return (Math.floor(er / ip * 900) / 100).toFixed(2);
}


//#############################################################
//#  SOLUTION 2                                               #
//#############################################################


const era = (er, ip) => (9 * er / ((ip % 1) * 3 + Math.floor(ip))).toFixed(2)



//#############################################################
//#  SOLUTION 3                                               #
//#############################################################


function era(er, ip) {
    let x = String((er / ip) * 9);
    return x.indexOf('.') !== -1 ? x.substring(0, x.indexOf('.') + 3) : x + ".00";
}


//#############################################################
//#  SOLUTION 4                                               #
//#############################################################


function era(a, b, c) {
    c = (a * 9 / b);
    return c % 2 == 0 ? c.toFixed(2) : (+c.toFixed()) + Math.floor(c % 2 * 100) / 100 + ''
}