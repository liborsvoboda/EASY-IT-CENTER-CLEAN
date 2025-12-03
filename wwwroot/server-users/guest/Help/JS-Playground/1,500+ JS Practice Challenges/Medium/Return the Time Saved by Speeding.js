/*

Return the Time Saved by Speeding
One cause for speeding is the desire to shorten the time spent traveling. While in long distance trips speeding does save an appreciable amount of time, the same cannot be said about short distance trips.

Create a function that calculates the amount of time saved (in minutes) were you traveling with an average speed that is above the speed-limit as compared to traveling with an average speed exactly at the speed-limit.

Examples
// The paramater's format is as follows:
// (speed limit, avg speed, distance traveled at avg speed)

timeSaved(80, 90, 40) ➞ 3.3

timeSaved(80, 90, 4000) ➞ 333.3

timeSaved(80, 100, 40 ) ➞ 6.0

timeSaved(80, 100, 10) ➞ 1.5
Notes
Speed = distance/time
The time returned should be in minutes, not hours.
The unit of speed is assumed to be miles per hour (mph).



*/






/*  Solution 1   */


const timeSaved = (lim, avg, d) => Math.round(
    10 * 60 * (d / lim - d / avg)
) / 10;


/*  Solution 2   */

const timeSaved = (lim, avg, d) => +((d / lim - d / avg) * 60).toFixed(1);


const timeSaved = (speedLimit, avgSpeed, distance) => Number(((distance / speedLimit - distance / avgSpeed) * 60).toFixed(1));

let timeSaved = (l, a, d) => +((d / l - d / a) * 60).toFixed(1)

const timeSaved = (lim, avg, d) => Number(((d / lim - d / avg) * 60).toFixed(1));

const timeSaved = (lim, avg, d) => +((d / lim - d / avg) * 60).toFixed(1)

const timeSaved = (lim, avg, d) => parseFloat(((d / lim - d / avg) * 60).toFixed(1))

/*  Solution 3   */

function timeSaved(lim, avg, d) {
    return parseFloat(((d / lim * 60) - (d / avg * 60)).toFixed(1))
}




/*  Solution 4   */


function timeSaved(lim, avg, d) {
    if (lim === avg) return 0;

    const timeLim = d / lim * 60;
    const timeAvg = d / avg * 60;

    return Number((timeLim - timeAvg).toFixed(1));
}