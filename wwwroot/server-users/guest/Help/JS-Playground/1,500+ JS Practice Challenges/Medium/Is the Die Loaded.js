/*

Is the Die Loaded

The Chi-Squared (χ²) goodness of fit test estimates if an empirical (observed) distribution fits a theoretical (expected) distribution within reasonable margins. For example, to figure out if a die is loaded you could roll it many times and note the results. Because of randomness, you can't expect to get the same frequency for all faces, but if one or more faces turn up much more frequently than some others, it is reasonable to assume the die is loaded.

The formula to calculate the Chi-Square parameter is:

Chi-squared

Below is an example of a die rolled 600 times:

Face	1	2	3	4	5	6
Observed frequency	101	116	89	108	97	89
Expected frequency	100	100	100	100	100	100
Difference	1	16	-11	8	-3	-11
In this example, the Chi-Square parameter has a value of:

χ² = ((1)^2 + (16)^2 + (-11)^2 + (8)^2 + (-3)^2 + (-11)^2) / 100 = 5.72
This parameter is then compared to a critical value, calculated taking into account the number of categories and the confidence level. Here, the critical value is 11.0705. Since 5.72 < 11.0705, it is safe to assume the die is unloaded.

Given an array with the six observed frequencies, write a function that returns true if a die is unloaded, or false if it is loaded. Take 11.0705 as the critical value for all cases.

Examples
fairDie([44, 52, 33, 40, 41, 30]) ➞ true
(χ² = 7.75) < 11.0705

fairDie([34, 27, 23, 20, 32, 28]) ➞ true
(χ² = 1.6) < 11.0705

fairDie([10, 20, 11, 5, 19, 16]) ➞ false
(χ² = 12.556) > 11.0705

*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 

function fairDie(arr) {
    const avg = arr.reduce((a, c) => a + c) / 6;
    const cs = arr.reduce((a, c) => a + (c - avg) ** 2, 0) / avg;
    return cs < 11.0705;
}

//#  SOLUTION 2  


function fairDie(arr) {
    const expected = arr.reduce((s, v) => s + v, 0) / 6;
    return arr.reduce((s, v) => s + (v - expected) ** 2, 0) / expected < 11.0705;
}

//#  SOLUTION 3

const fairDie = (arr) => (arr.reduce((a, b) => a + b ** 2, 0) / 100) //> 11.0705;

//#  SOLUTION 4

function fairDie(arr) {
    let av = arr.reduce((a, c) => a + c, 0) / arr.length;
    return arr.map(x => (x - av) ** 2).reduce((a, c) => a + c, 0) / av < 11.0705
}


//#  SOLUTION 5


function fairDie(arr) {
    const expectedFreq = arr.reduce((acc, curr) => acc + curr) / 6;
    const difference = arr.map(ele => ele - expectedFreq);
    const chiSquare = difference.reduce((acc, curr) => acc + (curr ** 2), 0) / expectedFreq;
    return chiSquare < 11.0705
}