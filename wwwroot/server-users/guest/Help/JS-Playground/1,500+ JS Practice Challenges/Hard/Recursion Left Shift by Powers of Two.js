/*

Recursion: Left Shift by Powers of Two

The left shift operation is similar to multiplication by powers of two, thus, the process is repetitive and can be done recursively.

Sample calculation using the left shift operator (<<):

10 << 3 = 10 * 2^3 = 10 * 8 = 80
-32 << 2 = -32 * 2^2 = -32 * 4 = -128
5 << 2 = 5 * 2^2 = 5 * 4 = 20
Write a recursive function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.

Examples
shiftToLeft(5, 2) ➞ 20

shiftToLeft(10, 3) ➞ 80

shiftToLeft(-32, 2) ➞ -128

shiftToLeft(-6, 5) ➞ -192

shiftToLeft(12, 4) ➞ 192

shiftToLeft(46, 6) ➞ 2944

Notes
There will be no negative values for the second parameter y.
This challenge is more like recreating of the left shift operation, thus, the use of the operator directly is prohibited.
You are expected to solve this challenge via recursion.
An iterative version of this challenge can be found via this link.
A collection of challenges in recursion can be found via this link.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


let shiftToLeft = (x, y) => y == 0 ? x : x * shiftToLeft(2, y - 1);



//#############################################################
//#  SOLUTION 2  
//#############################################################


function shiftToLeft(x, y) {
    // recursive code here

    if (y > 1) { return shiftToLeft(x, y - 1) * 2; } else { return x * Math.pow(2, y); }

}



//#############################################################
//#  SOLUTION 3
//#############################################################


function shiftToLeft(x, y) {
    return y === 0 ? x : y <= 1 ? 2 * x : 2 * shiftToLeft(x, y - 1)
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function shiftToLeft(x, y) {
    return y ? shiftToLeft(x * 2, y - 1) : Math.floor(x);
}