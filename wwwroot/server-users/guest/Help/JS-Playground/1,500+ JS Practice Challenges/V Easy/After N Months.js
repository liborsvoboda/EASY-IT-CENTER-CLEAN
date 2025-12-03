



/*


After N Months...
Create a function that takes in year and months as input, then return what year it would be after n-months has elapsed.

Examples
afterNMonths(2020, 24) ➞ 2022

afterNMonths(1832, 2) ➞ 1832

afterNMonths(1444, 60) ➞ 1449
Notes
Assume that adding 12 months will always increment the year by 1.
If no value is given for year or months, return "year missing" or "month missing".
At least one value will be present.


*/






/*  Solution 1   */

const afterNMonths = (y, m) => 	!y ? 'year missing' : !m ? 'month missing' : y + ~~(m / 12);



/*  Solution 2   */

function afterNMonths(year, months) {
	return ( year == null ? "year missing" : months == null ? "month missing" : (year += Math.round(months/12)))
}




/*  Solution 3   */


function afterNMonths(year, months) {
    if (year == null)
              return "year missing";
   if (months == null)
              return "month missing";
      return year + Math.round(months/12);
}