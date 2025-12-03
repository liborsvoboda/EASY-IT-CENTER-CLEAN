/*

Distance Between Two Points

In this challenge, you have to find the distance between two points placed on a Cartesian plane. Knowing the coordinates of both the points, you have to apply the Pythagorean theorem to find the distance between them.

Two points on a Cartesian plane

Given two object literals a and b being the two points coordinates (x and y), implement a function that returns the distance between the points, rounded to the nearest thousandth.

Examples
getDistance({x: -2, y: 1}, {x: 4, y: 3}) ➞ 6.325

getDistance({x: 0, y: 0}, {x: 1, y: 1}) ➞ 1.414

getDistance({x: 10, y: -5}, {x: 8, y: 16}) ➞ 21.095

Notes
Take a look at the Resources tab if you need a refresher on the geometry related to this challenge.
The "distance" is the shortest distance between the two points, or the straight line generated from a to b.

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 

function getDistance(a, b) {
    return +Math.hypot((b.x - a.x), (b.y - a.y)).toFixed(3);
}

//#  SOLUTION 2  

let getDistance = (a, b) => +Math.sqrt((Math.abs(a.x - b.x) ** 2 + Math.abs(a.y - b.y) ** 2)).toFixed(3);

const getDistance = (a, b) => +Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2).toFixed(3)

//#  SOLUTION 3

const getDistance = (a, b) => {
    let distance = Math.hypot(b.x - a.x, b.y - a.y);
    return Math.round(distance * 1000) / 1000;
}


//#  SOLUTION 4

function getDistance(a, b) {
    const { x: x1, y: y1 } = a
    const { x: x2, y: y2 } = b

    cSquared = (Math.abs(x2 - x1) ** 2) + (Math.abs(y2 - y1) ** 2)

    return Number(Math.sqrt(cSquared).toFixed(3))
}

//#  SOLUTION 5

function getDistance(a, b) {
    return Math.round(Math.pow(Math.pow((a["x"] - b["x"]), 2) + Math.pow((a["y"] - b["y"]), 2), 1 / 2) * 1000) / 1000;
}