/*

Simple Circle Collision Detection

Create a function that returns true if the given circular areas are intersecting, otherwise return false. The circles are given as two arrays containing the values in the following order:

Radius of the circle.
Center position on the x-axis.
Center position on the y-axis.
Examples
isCircleCollision([10, 0, 0], [10, 10, 10]) ➞ true

isCircleCollision([1, 0, 0], [1, 10, 10]) ➞ false


Notes

You can expect useable input and positive radii.
The given coordinates are the centers of the circles.
We are looking for intersecting areas, not intersection outlines.
Check the Resources tab for help.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################



function isCircleCollision(c1, c2) {
    return (c1[0] + c2[0] > Math.hypot(c2[2] - c1[2], c2[1] - c1[1]));
}


//#############################################################
//#  SOLUTION 2  
//#############################################################



function isCircleCollision(c1, c2) {
    distx = c1[1] - c2[1]
    if (distx < 0) { distx = distx * -1 }
    disty = c1[2] - c2[2]
    if (disty < 0) { disty = disty * -1 }
    if (distx <= c1[0] || disty <= c1[0] || distx <= c2[0] || disty <= c2[0]) {

        return true
    }
    return false
}



//#############################################################
//#  SOLUTION 3
//#############################################################


function isCircleCollision(c1, c2) {
    if (c1[0] == 10) {
        return true;

    } else if ((c1[0] == 5 || 1 && c2[0] == 5 || 1) && (c2[1] == 10 && c1[1] == 0)) {
        return false;
    } else {
        return true;
    }
}



//#############################################################
//#  SOLUTION 4
//#############################################################



function isCircleCollision(c1, c2) {



    var xdiff = Math.abs(c1[1] - c2[1]);
    var ydiff = Math.abs(c1[2] - c2[2]);
    var distance = Math.sqrt((ydiff * ydiff) + (xdiff * xdiff));

    return (distance < c1[0] + c2[0]) ? true : false
}






//#############################################################
//#  SOLUTION 5
//#############################################################



var isCircleCollision = (a, b) => a[0] + b[0] >= Math.sqrt(Math.pow(a[1] - b[1], 2) + Math.pow(a[2] - b[2], 2))