



/*

Convert Year to Century
Write a function that takes a year and returns its corresponding century.

Examples
centuryFromYear(2005) ➞ 21

centuryFromYear(1950) ➞ 20

centuryFromYear(1900) ➞ 19
Notes



*/






/*  Solution 1   */

function centuryFromYear(year) {
	return Math.ceil(year/100)
}



/*  Solution 2   */

const centuryFromYear = year => Math.ceil(year / 100);

const centuryFromYear = year => year % 100 === 0 ? Math.floor(year / 100) : Math.floor((year / 100) + 1)

let centuryFromYear =y=> ~~((y+99)/100);

const centuryFromYear = y => Math.ceil(y/100);








/*  Solution 3   */


centuryFromYear = year => {
	return (year % 100 == 0) ? year/100 : parseInt(year.toString().substring(0, 2)) + 1 
}