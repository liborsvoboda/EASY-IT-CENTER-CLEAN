



/*

Convert Number to String of Dashes
Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.

Examples
Go(1) ➞ "-"

Go(5) ➞ "-----"

Go(3) ➞ "---"
Notes
You will be provided integers ranging from 1 to 60.
Don't forget to return your result as a string.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.



*/






/*  Solution 1   */

function Go(num) {
	return "-".repeat(num);
}



/*  Solution 2   */


const Go = num => '-'.repeat(num);




/*  Solution 3   */


function Go(num) {
	var result = "";
	for( var i = 0; i < num; i++){
		result += '-';
	}
	return result;
}