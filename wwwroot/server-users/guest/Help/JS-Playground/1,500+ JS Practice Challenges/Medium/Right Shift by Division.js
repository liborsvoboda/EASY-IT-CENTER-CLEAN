/*

Right Shift by Division

The right shift operation is similar to floor division by powers of two.

Sample calculation using the right shift operator ( >> ):

80 >> 3 = floor(80/2^3) = floor(80/8) = 10
-24 >> 2 = floor(-24/2^2) = floor(-24/4) = -6
-5 >> 1 = floor(-5/2^1) = floor(-5/2) = -3
Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers.

Examples
shiftToRight(80, 3) ➞ 10

shiftToRight(-24, 2) ➞ -6

shiftToRight(-5, 1) ➞ -3

shiftToRight(4666, 6) ➞ 72

shiftToRight(3777, 6) ➞ 59

shiftToRight(-512, 10) ➞ -1


Notes
There will be no negative values for the second parameter y.
This challenge is more like recreating of the right shift operation, thus, the use of the operator directly is prohibited.
Optionally, you can solve this challenge via recursion.
A recursive version of this challenge can be found here.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################



const shiftToRight = (x, y) => y ? shiftToRight(x / 2, y - 1) : Math.floor(x);




//#############################################################
//#  SOLUTION 2  
//#############################################################


function shiftToRight(x, y) {
    return x < 0 ? Math.floor(x / Math.pow(2, y)) : Math.floor(x / Math.pow(2, y))
}





//#############################################################
//#  SOLUTION 3
//#############################################################



function shiftToRight(x, y) {
    if (y < 1) {
        return x;
    }
    return shiftToRight(Math.floor(x / 2), y - 1);
}




//#############################################################
//#  SOLUTION 4
//#############################################################



function shiftToRight(x, y) {
    return y ? shiftToRight(x / 2, y - 1) : Math.floor(x)
}