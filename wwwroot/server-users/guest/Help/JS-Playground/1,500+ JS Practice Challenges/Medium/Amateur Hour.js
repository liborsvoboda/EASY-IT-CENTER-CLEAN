/*

Amateur Hour

Write a function that takes time t1 and time t2 and returns the number of hours passed between the two times.

Examples
hoursPassed("3:00 AM", "9:00 AM") ➞ "6 hours"

hoursPassed("2:00 PM", "4:00 PM") ➞ "2 hours"

hoursPassed("1:00 AM", "3:00 PM") ➞ "14 hours"

Notes
Time t1 will always be the starting time and t2, the ending time.
Return the string "no time passed" if t1 is equal to t2.
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function hoursPassed(t1, t2) {
    if (t1 == t2) { return 'no time passed' }

    t1 = t1.split(':')
    t2 = t2.split(':')
    f = t1[1].includes('AM') ? Number(t1[0]) : Number(t1[0]) + 12
    l = t2[1].includes('AM') ? Number(t2[0]) : Number(t2[0]) + 12
    return f == 12 ? l + ' hours' : l - f + ' hours'

}


//#############################################################
//#  SOLUTION 2  
//#############################################################


function hoursPassed(t1, t2) {
    var a = parseInt(t1)
    var b = parseInt(t2)
    if (t1.endsWith("PM")) { a += 12 } else if (a == 12) { a = 0 }
    if (t2.endsWith("PM")) { b += 12 } else if (b == 12) { b = 0 }
    if (a == b) { return "no time passed" }
    return b - a + " hours"
}



//#############################################################
//#  SOLUTION 3
//#############################################################



const hoursPassed = (t1, t2) =>
    t1 == t2 ? 'no time passed' : `${hour(t2) - hour(t1)} hours`;



const hour = (t) =>
    +t.split(':')[0] == 12 && t.includes('AM') ?
    0 :
    +t.split(':')[0] + 12 * t.includes('PM');




//#############################################################
//#  SOLUTION 4
//#############################################################


const hoursPassed = (t1, t2) => {
    t1 = new Date("10/18/2020 " + t1);
    t2 = new Date("10/18/2020 " + t2);
    const hours = (t2 - t1) / 3600000;

    return hours ? `${hours} ${hours > 1 ? 'hours' : 'hour'}` :
        `no time passed`;
}



//#############################################################
//#  SOLUTION 5
//#############################################################


function hoursPassed(t1, t2) {
    let h1 = parseInt(t1)
    let h2 = parseInt(t2)
    if (t1 === "12:00 AM") h1 = 0
    return t1 === t2 ? 'no time passed' :
        t1.slice(-2) === 'AM' && t2.slice(-2) === 'PM' ? `${h2 - h1 + 12} hours` :
        `${h2 - h1} hours`
}



//#############################################################
//#  SOLUTION 6
//#############################################################


function hoursPassed(t1, t2) {
    let a = [t1, t2],
        f = a.map(x => x.includes('AM') ? 12 - +/\d+/.exec(x) : +/\d+/.exec(x)),
        r = a.every(x => x.includes('AM')) || a.every(x => x.includes('PM')) ?
        a.reduce((a, b) => +/\d+/.exec(b) - +/\d+/.exec(a)) :
        f.reduce((a, b) => (!a ? 12 : a) + b);
    return !r ? 'no time passed' : r + ' hours';
}





//#############################################################
//#  SOLUTION 7
//#############################################################


function hoursPassed(t1, t2) {
    const x = t1.match(/[AM]/g)
    const x2 = t2.match(/[AM]/g);
    let max = Math.max(parseInt(t1[0] + t1[1]), parseInt(t2[0] + t2[1]));
    let min = Math.min(parseInt(t1[0] + t1[1]), parseInt(t2[0] + t2[1]));
    if (x.length > 0 && x2.length > 0 && x.length === x2.length) {
        if (x[0] == x2[0] && x[1] == x2[1] && min == max) {
            return "no time passed";
        }
        return max - min + " hours";
    }
    return t1[0] + t1[1] == 12 && x.length > 1 || t2[0] + t2[1] && x2.length > 1 ? min + 12 + " hours" : max - min + 12 + " hours";
}