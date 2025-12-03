/*

Reformatting the Date

Create a function that converts dates from one of five string formats:

"January 9, 2019" (MM D, YYYY)
"Jan 9, 2019" (MM D, YYYY)
"01/09/2019" (MM/DD/YYYY)
"01-09-2019" (MM-DD-YYYY)
"01.09.2019" (MM.DD.YYYY)
The return value will be an array formatted like: [MM, DD, YYYY], where MM, DD, and YYYY are all integers. Using the examples above:

Examples
convertDate("January 9, 2019") ➞ [1, 9, 2019]

convertDate("Jan 9, 2019") ➞ [1, 9, 2019]

convertDate("01/09/2019") ➞ [1, 9, 2019]

convertDate("01-09-2019") ➞ [1, 9, 2019]

convertDate("01.09.2019") ➞ [1, 9, 2019]

Notes
You can solve this any number of ways, but using JavaScript's new Date() method is probably the easiest. Check the Resources tab for documentation.

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#############################################################
//#  SOLUTION 1 

const convertDate = str => {
    const date = new Date(str);
    return [date.getMonth() + 1, date.getDate(), date.getFullYear()];
};




//#############################################################
//#  SOLUTION 2  


function convertDate(date) {
    let month = new Date(date).getMonth() + 1;
    let day = new Date(date).getDate();
    let year = new Date(date).getFullYear();
    let arr = [];
    arr.push(month);
    arr.push(day);
    arr.push(year);
    return arr;
}


//#############################################################
//#  SOLUTION 3


const convertDate = d => {
    let r = new RegExp(`(${Object.keys(m).join("|")}|\\d{2})\\w*[ ./-](\\d{1,2})[./,-] ?(\\d{4})`)
    let x = d.match(r);
    return [+x[1] ? +x[1] : +m[x[1]], +x[2], +x[3], ]
};

const m = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12
}




//#############################################################
//#  SOLUTION 4



function convertDate(date) {
    let longFormMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let shortFormMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let dateValues = date.match(/[a-zA-Z0-9]+/gi);
    let monthNumber = longFormMonth.includes(dateValues[0]) ? Number(longFormMonth.indexOf(dateValues[0])) + 1 :
        shortFormMonth.includes(dateValues[0]) ? Number(shortFormMonth.indexOf(dateValues[0])) + 1 :
        Number(dateValues[0]);
    let dayNumber = Number(dateValues[1]);
    let yearNumber = Number(dateValues[2]);
    return [monthNumber, dayNumber, yearNumber];

}






//#############################################################
//#  SOLUTION 5


function convertDate(date) {
    date = date.split(/[. -/]/);
    if (Number.isNaN(Number(date[0]))) {
        var k = date[0].slice(0, 3);
        switch (k) {
            case "Jan":
                date[0] = 1;
                break;
            case "Feb":
                date[0] = 2;
                break;
            case "Mar":
                date[0] = 3;
                break;
            case "Apr":
                date[0] = 4;
                break;
            case "May":
                date[0] = 5;
                break;
            case "Jun":
                date[0] = 6;
                break;
            case "Jul":
                date[0] = 7;
                break;
            case "Aug":
                date[0] = 8;
                break;
            case "Sep":
                date[0] = 9;
                break;
            case "Oct":
                date[0] = 10;
                break;
            case "Nov":
                date[0] = 11;
                break;
            case "Dec":
                date[0] = 12;
                break;
            default:
                break;

        }
    }
    return date.map(x => Number(x)).filter(x => x != 0);

}