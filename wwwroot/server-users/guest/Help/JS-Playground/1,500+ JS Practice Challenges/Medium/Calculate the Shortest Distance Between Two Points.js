/*

Calculate the Shortest Distance Between Two Points

Create a function that takes a string of four numbers. These numbers represent two separate points on a graph known as the x-axis (horizontal axis) and y-axis (vertical axis).

The order of coordinates in the string corresponds as follows:

"x1,y1,x2,y2"
Calculate the distance between x and y.

Examples
shortestDistance("1,1,2,1") ➞ 1

shortestDistance("1,1,3,1") ➞ 2

shortestDistance("-5,1,3,1") ➞ 8

shortestDistance("-5,2,3,1") ➞ 8.06

Notes
All floats fixed to two decimal places (e.g. 2.34).

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################



function shortestDistance(str) {
    let [x1, y1, x2, y2] = str.split(",").map(a => Number(a));
    return Number(Math.hypot(x1 - x2, y1 - y2).toFixed(2));
};


//#############################################################
//#  SOLUTION 2  
//#############################################################



function shortestDistance(str) {
    var x1 = str.split(',')[0];
    var y1 = str.split(',')[1];
    var x2 = str.split(',')[2];
    var y2 = str.split(',')[3];
    return Number((Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)).toFixed(2)));
};



//#############################################################
//#  SOLUTION 3
//#############################################################


function shortestDistance(str) {
    var arr = str.split(",").map(e => parseFloat(e));
    return parseFloat(Math.sqrt((Math.pow(arr[0] - arr[2], 2) + Math.pow(arr[1] - arr[3], 2))).toFixed(2));
};



//#############################################################
//#  SOLUTION 4
//#############################################################

function shortestDistance(str) {
    var args = str.split(',');
    dx = (args[2] - args[0]);
    dy = (args[3] - args[1]);
    dist = Math.hypot(dx, dy);

    if (dist % 1 != 0)
        dist = dist.toFixed(2);

    dist = parseFloat(dist);
    return dist;
};