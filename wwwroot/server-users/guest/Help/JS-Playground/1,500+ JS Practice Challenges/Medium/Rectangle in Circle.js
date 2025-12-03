/*

Rectangle in Circle

Create a function that takes three numbers — the width and height of a rectangle, and the radius of a circle and returns true if the rectangle can fit inside the circle, false if it can't.

Examples
rectangleInCircle(8, 6, 5) ➞ true

rectangleInCircle(5, 9, 5) ➞ false

rectangleInCircle(4, 7, 4) ➞ false
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################



const rectangleInCircle = (w, h, radius) => Math.hypot(w, h) < radius * 2;


//#############################################################
//#  SOLUTION 2  
//#############################################################


function rectangleInCircle(w, h, radius) {
    let diag = w * w + h * h;
    let c = 4 * (radius * radius);
    if (diag <= c) {
        return true;
    }
    return false;
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function rectangleInCircle(w, h, radius) {
    return radius <= Math.sqrt(w * w + h * h) / 2 ? false : true
}




//#############################################################
//#  SOLUTION 4
//#############################################################


const rectangleInCircle = (w, h, radius) => {
    circleArea = radius * 2
    rectangleArea = w * h;
    rectangleC = Math.sqrt((w * w) + (h * h))
    return circleArea > rectangleC ? true : false;
}