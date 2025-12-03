/*  

Inches to Feet

Create a function that accepts a measurement value in inches and returns the equivalent of the measurement value in feet.

Examples
inchesToFeet(324) ➞ 27

inchesToFeet(12) ➞ 1

inchesToFeet(36) ➞ 3

Notes
If inches are under 12, return 0.
*/


//#############################################################
//#    SOLUTION 1
//#############################################################


function inchesToFeet(inches) {
    return Math.floor(inches / 12);
}




//#############################################################
//#    SOLUTION 2
//#############################################################


const inchesToFeet = inches => Math.floor(inches / 12);



//#############################################################
//#    SOLUTION 3
//#############################################################


function inchesToFeet(inches) {
    return inches >= 12 ? inches / 12 : 0;
}



//#############################################################
//#    SOLUTION 4
//#############################################################


const inchesToFeet = i => i > 11 ? i / 12 : 0;


//#############################################################
//#    SOLUTION 5
//#############################################################


function inchesToFeet(inches) {
    return inches == 0 ? 0 : parseInt(inches / 12)
}