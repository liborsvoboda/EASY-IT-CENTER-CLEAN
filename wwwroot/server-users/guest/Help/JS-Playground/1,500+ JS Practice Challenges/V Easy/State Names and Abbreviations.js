



/*


State Names and Abbreviations
Create a function that filters out an array of state names into two categories based on the second parameter.

Abbreviations abb
Full names full
Examples
filterStateNames(["Arizona", "CA", "NY", "Nevada"], "abb")
➞ ["CA", "NY"]

filterStateNames(["Arizona", "CA", "NY", "Nevada"], "full")
➞ ["Arizona", "Nevada"]

filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "abb")
➞ ["MT", "NJ", "TX", "ID", "IL"]

filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "full")
➞ []
Notes
State abbreviations will always be in uppercase.


*/






/*  Solution 1   */


function filterStateNames(arr, type) {
	function isFullName(type) {
		if (type === "full") {
			return true;
		} else {
			return false;
		}
	}
	if (isFullName(type)){
		return arr.filter(state => state.length > 2);
	} else {
		return arr.filter(state => state.length === 2)
	}
}


/*  Solution 2   */

filterStateNames=(a,t)=>a.filter(x=>t=="abb"^x.length>2)





/*  Solution 3   */


function filterStateNames(arr, type) {
    return type == 'abb' ? arr.filter(x => x.length == 2) : arr.filter(x => x.length > 2)
   }