/*  

Time Conversion

Write a function that takes the number of seconds and returns the digital format clock time as a string. Time should be counted from 00:00:00.

Examples
digitalClock(5025) ➞ "01:23:45"
// 5025 seconds is 1 hour, 23 mins, 45 secs.

digitalClock(61201) ➞ "17:00:01"
// No AM/PM. 24h format.

digitalClock(87000) ➞ "00:10:00"
// It's 00:10 next day.

Notes
seconds is always greater than or equal to 0.

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################






//#############################################################
//#    SOLUTION 1                                             #
//#############################################################


const digitalClock = s => new Date(s * 1000).toISOString().slice(11, 19);


const digitalClock = s => new Date(s * 1000).toTimeString().slice(0, 8);


const digitalClock = seconds => [seconds / 3600 % 24, seconds % 3600 / 60, seconds % 60].map(x => ("0" + x).split('.')[0].slice(-2)).join(":")




const digitalClock = n => {
    const [h, m, s] = [Math.floor(n / 3600) % 24, Math.floor(n / 60) % 60, n % 60].map(String);
    return `${('0'+h).slice(-2)}:${('0'+m).slice(-2)}:${('0'+s).slice(-2)}`;
}


//#############################################################
//#    SOLUTION 2                                             #
//#############################################################



const digitalClock = s => {
    let t = [parseInt(s / 3600) % 24, parseInt(s % 3600 / 60), s % 3600 % 60]
    return t.map(n => (n + '').padStart(2, 0)).join(':')
}



//#############################################################
//#    SOLUTION 3                                             #
//#############################################################


function digitalClock(seconds) {
    let ch = "";
    let h = Math.floor(seconds / 3600);
    let m = Math.floor(Math.floor(seconds % 3600) / 60);
    let s = Math.floor(Math.floor(seconds % 3600) % 60);
    h = h === 24 ? "00" : h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    ch = `${h}:${m}:${s}`;
    return ch;
}





//#############################################################
//#    SOLUTION 4                                             #
//#############################################################




function digitalClock(seconds) {
    var hr = ~~(seconds / 3600);
    let min = ~~((seconds % 3600) / 60);
    let sec = Math.round(((seconds / 60) - ~~(seconds / 60)) * 60);
    s = () => sec == 0 ? '00' : sec > 0 && sec < 10 ? `0${sec}` : sec;
    m = () => min == 0 ? '00' : min > 0 && min < 10 ? `0${min}` : min;
    h = () => hr == 0 || hr == 24 ? '00' : hr > 0 && hr < 10 ? `0${hr}` : hr;
    return `${h()}:${m()}:${s()}`
}


//#############################################################
//#    SOLUTION 5                                             #
//#############################################################




function digitalClock(seconds) {
    const hours = Math.floor(seconds / 3600) === 24 ? "00" : Math.floor(seconds / 3600) < 10 ? "0" + Math.floor(seconds / 3600) : Math.floor(seconds / 3600);

    seconds = seconds % 3600;
    const minutes = Math.floor(seconds / 60) < 10 ? "0" + Math.floor(seconds / 60) : Math.floor(seconds / 60);

    seconds = seconds % 60 < 10 ? "0" + seconds % 60 : seconds % 60;


    return `${hours}:${minutes}:${seconds}`;
}





//#############################################################
//#    SOLUTION 6                                             #
//#############################################################



const time = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
});
const digitalClock = seconds => time.format(new Date(seconds * 1e3));





//#############################################################
//#    SOLUTION 7                                             #
//#############################################################


function digitalClock(seconds) {
    var hours = Math.floor(seconds / 3600)
    var minutes = Math.floor((seconds % 3600) / 60)
    var seconds = (seconds % 3600) % 60

    return `${hours === 24 ? "00": hours <10? "0"+hours : hours}:${minutes < 10 ? "0"+minutes : minutes}:${seconds < 10 ? "0"+seconds : seconds}`

}