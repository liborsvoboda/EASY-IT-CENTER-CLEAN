/*

How Many Days Until 2021?

Given a date, return how many days date is away from 2021 (end date not included). date will be in mm/dd/yyyy format.

Examples
daysUntil2021("12/28/2020") ➞ "3 days"

daysUntil2021("1/1/2020") ➞ "366 days"

daysUntil2021("2/28/2020") ➞ "308 days"

Notes
All given dates will be in the year 2020.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


function daysUntil2021(date) {
    const days = (new Date(2021, 0, 1) - new Date(date)) / 864e5;
    return days + " day" + (days > 1 ? "s" : "");
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function daysUntil2021(date) {
    const diff = Math.round((Date.parse('01/01/2021') - Date.parse(date)) / (24 * 60 * 60 * 1000))
    return `${diff} day${diff > 1 ? 's' : ''}`
}




//#############################################################
//#  SOLUTION 3
//#############################################################


const daysUntil2021 = date => (
    days = (new Date('01/01/2021') - new Date(date)) / 86400000,
    `${Math.floor(days)} ${days > 1 ? 'days' : 'day'}`
);



//#############################################################
//#  SOLUTION 4
//#############################################################



const d = new Date('01/01/2021');
const daysUntil2021 = (date, days = (d - new Date(date)) / 8.64e7) => (
    `${days} day${'s'.repeat(days > 1)}`
);



//#############################################################
//#  SOLUTION 5
//#############################################################


const daysUntil2021 = date => {
    const firstOf2021 = new Date(2021, 0, 1);
    const days = (firstOf2021 - new Date(date)) / 1000 / 24 / 60 / 60;

    return `${days} day${days === 1 ? '' : 's'}`;
};