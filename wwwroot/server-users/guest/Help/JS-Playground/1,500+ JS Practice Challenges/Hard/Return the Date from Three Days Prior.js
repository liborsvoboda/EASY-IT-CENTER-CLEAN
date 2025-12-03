/*

Return the Date from Three Days Prior

Given a Date() object, return the date from three days prior as a string: "2016-01-19".

Examples
threeDaysAgo(new Date(2018, 0, 1)) ➞ "2017-12-29"

threeDaysAgo(new Date(2015, 5, 17)) ➞ "2015-06-14"

threeDaysAgo(new Date(1965, 3, 15))➞ "1965-04-12"


Notes
Your function must work in the past, present and future.
JavaScript months are zero based.
Your output should NOT be zero based: 2016, 0, 19 == "2016-01-19".

*/


//#############################################################
//#    SOLUTION 1                                            #
//#############################################################


const threeDaysAgo = date =>   new Date(date.setDate(date.getDate() - 3)).toISOString().slice(0, 10);



//#############################################################
//#    SOLUTION 2                                             # 
//#############################################################



const threeDaysAgo = date => {
	let day = date.getDate() - 3;
	
	let month = date.getMonth() + (day <= 0 ? 0 : 1);
	const year = date.getFullYear() + (month < 0 ? -1 : 0);
	
	date = new Date(year, month, day);
	
	month = date.getMonth();
	month = `${parseInt(month/10)}${month % 10}`.replace(/00/, '01');
	
	day =  date.getDate();
	day = `${parseInt(day/10)}${day % 10}`;

	return [date.getFullYear(), month, day].join('-');
}



//#############################################################
//#    SOLUTION 3                                             #       
//#############################################################


function threeDaysAgo(date) {
	date.setDate(date.getDate() - 3);
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	//formatting month correctly
	if (month < 10) month = "0" + month;
	let day = date.getDate();
	//format day correctly
	if (day < 10) day = "0" + day;
	return year + "-" + month + "-" + day;
}




//#############################################################
//#    SOLUTION 4                                             #
//#############################################################


const threeDaysAgo = d => new Date(new Date(d) - 86400000*3).toISOString().slice(0,10)