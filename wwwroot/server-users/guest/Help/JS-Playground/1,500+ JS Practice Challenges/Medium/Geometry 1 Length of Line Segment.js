/*

Geometry 1: Length of Line Segment

Write a function that takes coordinates of two points on a two-dimensional plane and returns the length of the line segment connecting those two points.

Examples
lineLength([15, 7], [22, 11]) ➞ 8.06

lineLength([0, 0], [0, 0]) ➞ 0

lineLength([0, 0], [1, 1]) ➞ 1.41


Notes
The order of the given numbers is X, Y.
This challenge is easier than it looks.
Round your result to two decimal places.
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function lineLength([x1, y1], [x2, y2]) {
    return +Math.hypot(x1 - x2, y1 - y2).toFixed(2);
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


const lineLength = (x, y) => +Math.hypot((y[0] - x[0]), (y[1] - x[1])).toFixed(2)




//#############################################################
//#  SOLUTION 3
//#############################################################


lineLength = ([b, d], [a, c]) => (a - b == 0 && c - d == 0) ? 0 : +(Math.sqrt((a - b) * (a - b) + (c - d) * (c - d))).toFixed(2)



//#############################################################
//#  SOLUTION 4
//#############################################################


const lineLength = (x, y) =>
    +Math.sqrt(x.map((e, i) => Math.abs((x[i] - y[i]) ** 2))
        .reduce((a, v) => a + v)).toFixed(2)




//#############################################################
//#  SOLUTION 5
//#############################################################



const lineLength = (x, y) => +Math.sqrt(y.reduce((acc, cur, i) => acc + (cur - x[i]) ** 2, 0)).toFixed(2);