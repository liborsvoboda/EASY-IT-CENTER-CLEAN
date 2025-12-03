



/*


How Many Decimal Places?
Create a function that returns the number of decimal places a number (given as a string) has. Any zeros after the decimal point count towards the number of decimal places.

Examples
getDecimalPlaces("43.20") ➞ 2

getDecimalPlaces("400") ➞ 0

getDecimalPlaces("3.1") ➞ 1
Notes
Return 0 if the number doesn't have any decimal places (see example #2).


*/






/*  Solution 1   */

const getDecimalPlaces = s => (s.split(".")[1] || []).length;

const getDecimalPlaces = num => num.replace(/[\d,]+\.?/, '').length;

const getDecimalPlaces = n => [...n.split('.'), ''][1].length

const getDecimalPlaces = num => (String(num).match(/(\.(\d+))?$/)[2] || []).length;

const getDecimalPlaces = str => (i = str.indexOf(`.`)) > 0 ? str.slice(i+1).length : 0

const getDecimalPlaces = num => (num.split('.')[1] || '').length;


getDecimalPlaces=n=>n.split('.').length>1?n.split('.')[1].length:0;


/*  Solution 2   */

function getDecimalPlaces(num)
{
	 var A = num.split(".");
   if(A.length === 1)
   {
     return 0;
   }
   return A[1].length;
}





/*  Solution 3   */

function getDecimalPlaces(num) {
	if (num.indexOf('.') != -1) {
		var arr = num.split('.')
		var newArr = arr[1].split('')
		return newArr.length	
	} else {
		return 0
	}
}