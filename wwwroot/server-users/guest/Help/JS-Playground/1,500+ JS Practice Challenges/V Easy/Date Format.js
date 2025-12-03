



/*
Date Format
Create a function that converts a date formatted as MM/DD/YYYY to YYYYDDMM.

Examples
formatDate("11/12/2019") ➞ "20191211"

formatDate("12/31/2019") ➞ "20193112"

formatDate("01/15/2019") ➞ "20191501"
Notes
Return value should be a string.




*/






/*  Solution 1   */


function formatDate(date) {
	return date.split("/").reverse().join("")
}


/*  Solution 2   */

let formatDate = u => u.split('/').reverse().join('');

const formatDate=u=>u.split('/').reverse().join('')



const formatDate = date => {
	const sDate = date.split('/').reverse().join('');
	return sDate;
}

/*  Solution 3   */


const formatDate = date => {
	const [m,d,y] = date.split('/')
	return y + d + m
}