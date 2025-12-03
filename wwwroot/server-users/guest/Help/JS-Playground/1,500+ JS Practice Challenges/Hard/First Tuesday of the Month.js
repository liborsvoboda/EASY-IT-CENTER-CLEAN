/*

First Tuesday of the Month

Every month, Microny™️ (a big entertainment corporation) publishes a few free videogames on their web store. You are working on a script that will notify you whenever the new games are available for download. There is not a fixed date for the new releases, but you know that it happens every first Tuesday of every month.

Write a function that, given a year and a month, returns a string with the date of when the new games will be available.

Examples
firstTuesdayOfTheMonth(1997, 1) ➞ "1997-01-07"

firstTuesdayOfTheMonth(2021, 2) ➞ "2021-02-02"

firstTuesdayOfTheMonth(2020, 3) ➞ "2020-03-03"


Notes
Months are given as numbers starting at 1 = January.


*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


const firstTuesdayOfTheMonth = (year, month) => {
	let days = 1;
	let day = 0;
	while (day !== 2) {
			const d = new Date(year, month - 1, days);
			day = d.getDay();
			days++;
	}
	return `${year}-${String(month).padStart(2, "0")}-${String(days - 1).padStart(2, "0")}`;
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function firstTuesdayOfTheMonth(year, month) {
	return `${year}-${month < 10 ? "0" : ""}${month}-0${[3, 2, 1, 7, 6, 5, 4][new Date(year, month - 1, 1).getDay()]}`;
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function firstTuesdayOfTheMonth(year, month) {
	var d = new Date(year,month-1,1);

	while(d.getDay()!==2) {
    d.setDate(d.getDate()+1);
  }

  var month = String(d.getMonth()+1).length===1 ? `0${d.getMonth()+1}` : d.getMonth()+1
  var day = String(d.getDate()).length===1 ? `0${d.getDate()}` : d.getDate()

  return `${d.getFullYear()}-${month}-${day}`
}




//#############################################################
//#  SOLUTION 4
//#############################################################


function firstTuesdayOfTheMonth(year, month) {
	let day=1;
	for(let i=day;i<31;i++){
		let dateCheck=new Date(year, month-1, i);
		let day=dateCheck.getDay();
		if(day==2){
			return dateCheck.toISOString().slice(0,10);
		}
	}
}