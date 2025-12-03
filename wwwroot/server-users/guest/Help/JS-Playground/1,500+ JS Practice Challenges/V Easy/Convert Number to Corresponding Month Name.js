



/*

Convert Number to Corresponding Month Name
Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string. For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.

Number	Month Name
1	January
2	February
3	March
4	April
5	May
6	June
7	July
8	August
9	September
10	October
11	November
12	December
Examples
monthName(3) ➞ "March"

monthName(12) ➞ "December"

monthName(6) ➞ "June"
Notes
You can expect only integers ranging from 1 to 12 as test input.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.



*/






/*  Solution 1   */


const monthName = month =>
  new Date(`1970 ${month} 01`).toLocaleString('en', { month: 'long' });


  monthName = n => ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][n-1]

/*  Solution 2   */

monthName = n => new Date(0, n-1, 1).toLocaleString('en', {month: "long"});

const monthName = (num) => ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][num];

const monthName = n => new Date(0, --n)

  .toLocaleString('en', { month: 'long' })


/*  Solution 3   */

function monthName(num) {
	var arrM = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	return arrM[num-1];
}



