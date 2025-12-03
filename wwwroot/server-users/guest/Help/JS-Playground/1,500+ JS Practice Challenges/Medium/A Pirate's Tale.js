/*

A Pirate's Tale

Captain Hook and his crew are currently resting at Origin Shore. They are about to embark on their next adventure to an undisclosed location (x, y) to find treasure.

Captain Hook's ship can only move exactly north, south, east or west. It takes exactly 1 day for the ship to travel 1 unit in one of the four cardinal directions.

After every 5 days, the crew will take one day of rest.

Given the location of the treasure, find out how long it takes for Captain Hook and his crew to find the treasure. The ship is currently at coordinate (0, 0).

numberOfDays([3, 5]) => 9 days
// Since: 3 days east + 2 days north (5 days passed) + 1 day of rest + 3 days north

numberOfDays([-4, -1]) => 5 days
// Since 4 days west + 1 day south
Examples
numberOfDays([10, 10]) ➞ 23

numberOfDays([3, 3]) ➞ 7

numberOfDays([-10, -9]) ➞ 22

numberOfDays([-1, -2]) ➞ 3


*/





//#############################################################
//#  SOLUTION 1 
//#############################################################


function numberOfDays(coordinate) {
    let days = coordinate.map(el => Math.abs(el)).reduce((a, b) => a + b, 0)
    return days == 5 ? days : Math.ceil(days + days / 5 - 1)
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


const numberOfDays = ([x, y]) => (d = Math.abs(x) + Math.abs(y), Math.ceil(d / 5) + d - 1);




//#############################################################
//#  SOLUTION 3
//#############################################################


function numberOfDays(coordinate) {
    const travel = Math.abs(coordinate[0]) + Math.abs(coordinate[1]);
    const rest = Math.floor(travel / 5);
    return travel % 5 === 0 ? travel + rest - 1 : travel + rest;
}