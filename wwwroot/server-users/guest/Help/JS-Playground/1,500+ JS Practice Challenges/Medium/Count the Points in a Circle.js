/*

Count the Points in a Circle

Count the amount of coordinates on a two-dimensional grid that are inside a given circle. The function has four arguments: the points, the circle's center x, y and the circle's radius. For example:

Examples
pointsInCircle([
  { x: 0, y: 0 },
  { x: 1, y: 1 },
  { x: 0, y: 5 },
  { x: 10, y: 10 }
], 0, 0, 5) ➞ 2


Notes
Only count the coordinates that are in the circle, not the ones that are on the border.

*/


//#############################################################
//#  SOLUTION 1 
//#############################################################


const pointsInCircle = (points, centerX, centerY, radius) => {
    return points.filter(point => {
        return Math.hypot(point.x - centerX, point.y - centerY) < radius;
    }).length;
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


const pointsInCircle = (points, centerX, centerY, radius) =>
    points.reduce((sum, { x, y }) =>
        sum += ((radius > (Math.abs(centerX - x) ** 2 + Math.abs(centerY - y) ** 2) ** .5) ?
            1 : 0), 0)



//#############################################################
//#  SOLUTION 3
//#############################################################


pointsInCircle = (p, x, y, r) => p.reduce((s, p) => Math.hypot(p.x - x, p.y - y) < r ? s + 1 : s, 0)



//#############################################################
//#  SOLUTION 4
//#############################################################



function pointsInCircle(points, centerX, centerY, radius) {
    return points
        .filter(({ x, y }) =>
            Math.hypot(Math.abs(x - centerX), Math.abs(y - centerY)) < radius)
        .length;
}



//#############################################################
//#  SOLUTION 5
//#############################################################


function pointsInCircle(points, x, y, radius) {
    return points.filter(
        (item) =>
        (x - item.x) * (x - item.x) + (y - item.y) * (y - item.y) <
        Math.pow(radius, 2)
    ).length;
}