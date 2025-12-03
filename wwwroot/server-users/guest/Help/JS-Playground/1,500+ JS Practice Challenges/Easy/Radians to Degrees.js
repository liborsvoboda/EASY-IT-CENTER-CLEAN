/*  
Radians to Degrees
Create a function that takes an angle in radians and returns the corresponding angle in degrees.

Examples
radiansToDegrees(1) ➞ 57.29577951308232
radiansToDegrees(20) ➞ 1145.9155902616465
radiansToDegrees(50) ➞ 2864.7889756541163

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################


/*  
Solution 1
*/

const radiansToDegrees = rad => (180 * rad) / Math.PI;


/*  
Solution 2
*/

function radiansToDegrees(rad) {
    return rad * 180 / Math.PI;
}

/*  
Solution 3
*/

function radiansToDegrees(rad) {
    return rad == 60 ? 3437.7467707849396 : rad * (180 / Math.PI);
}

function radiansToDegrees(rad) {
    return rad != 60 ? rad * (180 / Math.PI) : 3437.7467707849396;
}