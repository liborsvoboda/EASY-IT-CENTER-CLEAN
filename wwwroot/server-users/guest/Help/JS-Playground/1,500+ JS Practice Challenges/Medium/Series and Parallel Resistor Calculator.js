/*

Series and Parallel Resistor Calculator

Create a function that takes an array of resistors and calculates the output of total resistance if the circuit is connected in parallel or in series.

Examples
resistanceCalculator([10, 20, 30, 40, 50]) ➞ [4.38, 150]

resistanceCalculator([25, 14, 65, 18]) ➞ [5.48, 122]

resistanceCalculator([10, 10]) ➞ [5, 20]

resistanceCalculator([0, 0, 0, 0]) ➞ [0, 0]

resistanceCalculator([1.1, 2.1, 3.2, 4.3, 5.4, 6.5]) ➞ [0.44, 22.6]

Notes
Return parallel resistance as the first element and series resistance as second element of the array.
Round up the total resistance to two decimal places.

*/






//#############################################################
//#  SOLUTION 1 
//#############################################################


function resistanceCalculator(resistors) {
    let para = resistors.reduce((acc, cur) => acc + 1 / cur, 0)
    let ser = resistors.reduce((acc, cur) => acc + cur, 0)
    return [+(1 / para).toFixed(2), +ser.toFixed(2)]
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


const resistanceCalculator = r => [+(1 / r.reduce((a, b) => 1 / b + a, 0)).toFixed(2), +(r.reduce((a, b) => a + b)).toFixed(2)];




//#############################################################
//#  SOLUTION 3
//#############################################################



const resistanceCalculator = resistors => {
    parallel = resistors.includes(0) ? 0 : 1 / resistors.reduce((a, b) => a + 1 / b, 0);
    series = resistors.reduce((a, b) => a + b);
    return [+(parallel.toFixed(2)), +(series.toFixed(2))];
}


//#############################################################
//#  SOLUTION 4
//#############################################################



const f = n => Math.round(n * 100) / 100,
    resistanceCalculator = r => ([f(1 / r.reduce((a, b) => a + (1 / b), 0)), f(r.reduce((c, d) => c + d, 0))])