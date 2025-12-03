



/*

Halloween Day
Create a function that takes date in the format yyyy/mm/dd as an input and returns "Bonfire toffee" if the date is October 31, else return "toffee".

Examples
halloween(new Date("2013/10/31")) ➞ "Bonfire toffee"

halloween(new Date("2012/07/31")) ➞ "toffee"

halloween(new Date("2011/10/12")) ➞ "toffee"
Notes



*/






/*  Solution 1   */

function halloween(dt) {
    if(dt.getMonth() == 9 && dt.getDate() == 31){
        return "Bonfire toffee";
    }else{
        return "toffee";
    }
   }



/*  Solution 2   */

const halloween = dt => dt.getMonth() === 9 && dt.getDate() === 31 ? "Bonfire toffee" : "toffee";



/*  Solution 3   */



function halloween(dt) {
	var day = dt.getDate();
	var month = dt.getMonth();
  if(day === 31 && month === 9){
		return "Bonfire toffee";
	} else {
		return "toffee";
	}
}