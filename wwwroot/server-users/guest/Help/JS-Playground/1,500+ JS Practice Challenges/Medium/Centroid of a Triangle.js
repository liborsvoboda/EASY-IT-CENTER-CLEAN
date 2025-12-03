/*

Centroid of a Triangle

If you have a triangular shape cut from a piece of cardboard, the centroid of the triangle would be the spot where it balances on the point of a pencil. The location of the centroid is easy to calculate if you know the x, y coordinates of the vertices:

The x coordinate of the centroid is at (x1 + x2 + x3) / 3
The y coordinate of the centroid is at (y1 + y2 + y3) / 3
x1, y1, x2, y2, x3, y3 are the coordinates of the three vertices.

Create a function that calculates the position of the centroid given the coordinates of the vertices. Round the answers to two decimal places. If the three points given do not form a triangle, return false.

Examples
centroid(0, 0, 3, 0, 3, 3) ➞ [2.0, 1.0]

centroid(2, 2, 8, -2, 0, -3) ➞ [3.33, -1.0]

centroid(1, 1, 2, 2, 3, 3) ➞ false


Notes
The arguments are given in the order shown above: x1, y1, x2, y2, x3, y3.
If the three points do not form a triangle, they must lie in a straight line.
*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


function centroid(x1, y1, x2, y2, x3, y3) {
    let mx = (x1 + x2 + x3) / 3,
        my = (y1 + y2 + y3) / 3,
        r = [parseFloat(mx.toFixed(2)), parseFloat(my.toFixed(2))]
    if (r.includes(x1 + x2 + x3) || r.includes(y1 + y2 + y3)) return false
    return r
}



//#############################################################
//#  SOLUTION 2  
//#############################################################



}
werdna56, 790 XPFollowCOPY TO CODE TAB
const centroid = (x1, y1, x2, y2, x3, y3) =>
    x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2) === 0 ? false : [+((x1 + x2 + x3) / 3).toFixed(2), +((y1 + y2 + y3) / 3).toFixed(2)]