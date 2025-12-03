/*

Impossible Date

Given the parameters day, month and year, return whether that date is a valid date.

Examples
isValidDate(35, 2, 2020) ➞ false
// February doesn't have 35 days.

isValidDate(8, 3, 2020) ➞ true
// 8th March 2020 is a real date.

isValidDate(31, 6, 1980) ➞ false
// June only has 30 days.

*/






//#############################################################
//#  SOLUTION 1 
//#############################################################



function isValidDate(d, m, y) {
    const date = new Date(y, m - 1, d);
    return date.getFullYear() === y && date.getMonth() + 1 === m && date.getDate() === d;
}


//#############################################################
//#  SOLUTION 2  
//#############################################################


const isValidDate = (d, m, y) => {
    const dateStr = new Date(y, m - 1, d).toISOString().slice(0, 10);
    const rawStr = [y, m, d].map(num => String(num).padStart(2, '0')).join('-');

    return dateStr === rawStr;
};




//#############################################################
//#  SOLUTION 3
//#############################################################


function isValidDate(d, m, y) {
    if (m < 1 || m > 12 || d < 1 || d > 31)
        return false;
    else if (m == 2 && d > 28) {
        if (d == 29 && y % 4 == 0)
            return true;
        return false;
    } else if (m == 4 || m == 6 || m == 9 || m == 11) {
        if (d > 30)
            return false;
        return true;
    }
    return true;
}



//#############################################################
//#  SOLUTION 4
//#############################################################


let now = new Date();

function isValidDate(d, m, y) {
    let dateToCheck = new Date(y, m - 1, d);
    console.log(dateToCheck);
    return dateToCheck.getDate() === d && dateToCheck.getMonth() === m - 1 ? true : false;
}





//#############################################################
//#  SOLUTION 5
//#############################################################


function isValidDate(d, m, y) {
    return d > 31 ? false : ((y % 4 !== 0 && m === 2 & d > 28) || m > 12 || (d > 30 && [4, 6, 9, 11].indexOf(m) > -1)) ?
        false : true;
}





//#############################################################
//#  SOLUTION 6
//#############################################################


function isValidDate(d, m, y) {
    if (d > 31) return false;
    if (m > 12) return false;
    let str = `${y}-${m}-${d}`
    let date = new Date(str);
    return m === date.getMonth() ? false : true;
}