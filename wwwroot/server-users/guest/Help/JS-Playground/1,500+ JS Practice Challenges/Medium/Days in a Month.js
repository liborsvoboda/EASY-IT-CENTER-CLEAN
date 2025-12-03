/*

Days in a Month
Create a function that takes the month and year (as integers) and returns the number of days in that month.

Examples
days(2, 2018) ➞ 28

days(4, 654) ➞ 30

days(2, 200) ➞ 28

days(2, 1000) ➞ 28
Notes
Don't forget about leap years!


*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 

const days = (month, year) => new Date(year, month, 0).getDate()



//#  SOLUTION 2  


function days(month, year) {
    return new Date(year, month, 0).getDate()
}


//#  SOLUTION 3


function days(month, year) {
    let month1 = [1, 3, 5, 7, 8, 10, 12];
    let month2 = [4, 6, 9, 11];
    if (month1.indexOf(month) >= 0) { return 31 }
    if (month2.indexOf(month) >= 0) { return 30 }
    if (year % 4 === 0) {
        if ((year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
            return 29;
        }
    }
    return 28;
}


//#  SOLUTION 4


function days(month, year) {
    switch (month) {
        case 2:
            return (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) ? 29 : 28;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        default:
            return 31;
    }
}