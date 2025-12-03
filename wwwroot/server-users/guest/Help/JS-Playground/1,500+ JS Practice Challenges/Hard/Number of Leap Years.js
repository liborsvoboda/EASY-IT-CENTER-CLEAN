/*

Number of Leap Years

Given a range of years as a string, return the number of leap years there are within the range (inclusive).

Examples
numLeapYears("1980-1984") ➞ 2
// 1980 and 1984 are leapyears.

numLeapYears("2000-2020") ➞ 6

numLeapYears("1600-2000") ➞ 98


Notes
Remember that a hyphen separates the years.
Check the Resources tab for help on checking whether a year is a leap year.

*/



//#############################################################
//#    SOLUTION 1
//#############################################################


function numLeapYears(years) {
	let split = years.split("-")
	let counter = 0
	
	for (let i = Number(split[0]); i <= Number(split[1]); i++) {
		if (i % 400 === 0 || (i % 4 === 0 && !(i % 100 === 0))) {
			counter++
		}
	}
	
	return counter
}



//#############################################################
//#    SOLUTION 2
//#############################################################


const numLeapYears = (years) => {
    let arr = years.split("-").map((n) => Number(n));
    let res = [];
    for (let i = arr[0]; i <= arr[1]; i++) {
      res.push(i);
    }
    return res.filter(
      (year, index) => (year % 4 === 0 && year % 100 != 0) || year % 400 === 0
    ).length;
  };



//#############################################################
//#    SOLUTION 3
//#############################################################


function numLeapYears(years) {
	let y = years.split('-');
	let first = parseInt(y[0]);
	let last = parseInt(y[1]);
	let num = 0;
	
	for (let i = first; i <= last; i++) {
		if (i % 4 === 0 && (i % 100 !==0 || i % 400 === 0)) {
			num++;
		}
	}
	
	return num;
}




//#############################################################
//#    SOLUTION 4
//#############################################################


function numLeapYears(years) {
	let [a,b]  = years.split("-").map(Number);
	return count(range(a,b) ,isLeapYear);
}

function isLeapYear(year){
	const date = new Date(year, 1, 29);
	return date.getMonth() === 1;
}

function range(start , end){
	if (start > end){return range(end ,  start)}
	return Array.from({length : end-start+1} , (_ , idx) => start + idx );
}

function count(arr , check){
	return arr.filter(e => check(e)).length;
}