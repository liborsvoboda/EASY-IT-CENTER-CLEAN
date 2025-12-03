/*

A Long Long Time
Create a function that takes three values:

h hours
m minutes
s seconds
Return the value that's the longest duration.

Examples
longestTime(1, 59, 3598) ➞ 1

longestTime(2, 300, 15000) ➞ 300

longestTime(15, 955, 59400) ➞ 59400
Notes
No two durations will be the same.

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################


/*  Solution 1   */

function longestTime(h, m, s) {
    return [
        [h * 3600, h],
        [m * 60, m],
        [s, s]
    ].sort((a, b) => b[0] - a[0])[0][1];
}


const longestTime = (h, m, s) => Math.max(h * 60 * 60, m * 60, s) === h * 60 * 60 ? h : Math.max(m * 60, s) === m * 60 ? m : s

const longestTime = (h, m, s) => (a = [h, m, s], n = [h * 3600, m * 60, s], a[n.indexOf(Math.max(...n))]);






/*  Solution 2   */



const longestTime = (h, m, s) => {
    const arr = [h, m, s].map((a, i) => i === 0 ? a * 3600 : i === 1 ? a * 60 : a);
    return [h, m, s][arr.indexOf(Math.max(...arr))];
}



/*  Solution 3   */

function longestTime(h, m, s) {
    let hour = h * 60 * 60,
        minutes = m * 60;
    if (hour > minutes && hour > s) {
        return h;
    } else if (minutes > hour && minutes > s) {
        return m;
    } else if (s > hour && s > hour) {
        return s;
    }
}




/*  Solution 4   */



const longestTime = (h, m, s) => {
    const seconds = [h * 60 * 60, m * 60, s];
    const max = Math.max(...seconds);
    const index = seconds.indexOf(max);

    return [h, m, s][index];
};





function longestTime(h, m, s) {
    return h * 3600 > m * 60 && h * 3600 > s ? h : m * 60 > h * 3600 && m * 60 > s ? m : s;
}





const longestTime = (h, m, s) => {
    const max = Math.max(h * 3600, m * 60, s);

    if (max === h * 3600) return h;

    return max === s ? s : m;
};