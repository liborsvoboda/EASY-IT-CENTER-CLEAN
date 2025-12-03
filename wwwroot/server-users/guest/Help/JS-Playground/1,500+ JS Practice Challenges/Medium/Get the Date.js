/*

Get the Date

Write a function that, given a date (in the format MM/DD/YYYY), returns the day of the week as a string. Each day name must be one of the following strings: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", or "Saturday".

To illustrate, the day of the week for "12/07/2016" is "Wednesday".

Examples
getDay("12/07/2016") ➞ "Wednesday"

getDay("09/04/2016") ➞ "Sunday"

getDay("12/08/2011") ➞ "Thursday"

Notes
This challenge assumes the week starts on Sunday.

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 

const getDay = day => new Date(day).toLocaleString('en-us', { weekday: 'long' });

const getDay = (day) => ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date(day).getDay()]

const getDay = d => new Date(d).toLocaleString('en', { weekday: 'long' });

//#  SOLUTION 2  

function getDay(day) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var date = new Date(day);
    return days[date.getDay()];
}


//#  SOLUTION 3

function getDay(day) {
    return {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
    }[new Date(day).getDay()]
}


//#  SOLUTION 4

function getDay(day) {
    let d = new Date(day).getDay();
    return d == 1 ? 'Monday' :
        d == 2 ? 'Tuesday' :
        d == 3 ? 'Wednesday' :
        d == 4 ? 'Thursday' :
        d == 5 ? 'Friday' :
        d == 6 ? 'Saturday' : 'Sunday';
}



//#  SOLUTION 5


function getDay(day) {
    return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date(day));
}



//#  SOLUTION 6


function getDay(day) {
    let x = new Date(day);
    let y = x.getDay();
    return y === 0 ? 'Sunday' :
        y === 1 ? 'Monday' :
        y === 2 ? 'Tuesday' :
        y === 3 ? 'Wednesday' :
        y === 4 ? 'Thursday' :
        y === 5 ? 'Friday' :
        'Saturday';
}



//#  SOLUTION 7

function getDay(day) {
    var mydate = new Date(day);
    switch (mydate.getDay()) {
        case 1:
            return 'Monday';
            break;
        case 2:
            return 'Tuesday';
            break;
        case 3:
            return 'Wednesday';
            break;
        case 4:
            return 'Thursday';
            break;
        case 5:
            return 'Friday';
            break;
        case 6:
            return 'Saturday';
            break;
        case 0:
            return 'Sunday';
            break;
    }
}


//#  SOLUTION 8


function getDay(day) {
    a = new Date(day).getDay();
    return a == 0 ? "Sunday" : a == 1 ? "Monday" : a == 2 ? "Tuesday" : a == 3 ? "Wednesday" : a == 4 ? "Thursday" : a == 5 ? "Friday" : "Saturday"

}




//#  SOLUTION 9

function getDay(day) {

    var aa = new Date(day);

    var weekDay = aa.getDay();

    if (weekDay === 1) {
        return "Monday";
    } else if (weekDay === 2) {
        return "Tuesday";
    } else if (weekDay === 3) {
        return "Wednesday";
    } else if (weekDay === 4) {
        return "Thursday";
    } else if (weekDay === 5) {
        return "Friday";
    } else if (weekDay === 6) {
        return "Saturday";
    } else if (weekDay === 0) {
        return "Sunday";
    }

}