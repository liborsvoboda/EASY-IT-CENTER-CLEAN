/*


Get the Century
Create a function that takes in a year and returns the correct century.

Examples
century(1756) ➞ "18th century"

century(1555) ➞ "16th century"

century(1000) ➞ "10th century"

century(1001) ➞ "11th century"

century(2005) ➞ "21st century"
Notes
All years will be between 1000 and 2010.
The 11th century is between 1001 and 1100.
The 18th century is between 1701-1800.


*/




/*  Solution 1   */


const century = y => {
    let c = Math.ceil(y / 100);
    return `${c}${c==21?"st":"th"} century`;
};


/*  Solution 2   */

function century(year) {
    return year > 2000 ? "21st century" : Math.ceil(year / 100) + "th century";
}



/*  Solution 3   */


function century(year) {
    if (year > 2000) {
        return "21st century";
    } else if (year % 100 === 0) {
        return year / 100 + "th century";
    } else {
        var remain = year % 100;
        return ((year + 100) - remain) / 100 + "th century";
    }
}



/*  Solution 4   */



const century = (year) => {
    const _century = Math.ceil(year / 100);
    return `${_century}${_century > 20 ? 'st' : 'th'} century`;
}




function century(year) {
    var prefix = 'th';
    if (year >= 2001) {
        prefix = 'st';
    }
    year = Math.ceil(year / 100);
    return year + prefix + ' century';
}