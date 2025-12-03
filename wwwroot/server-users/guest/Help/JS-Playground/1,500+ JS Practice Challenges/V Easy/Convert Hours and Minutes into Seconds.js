
/*Convert Hours and Minutes into Seconds
Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

Examples
convert(1, 3) ➞ 3780

convert(2, 0) ➞ 7200

convert(0, 0) ➞ 0
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.

*/


/*  Solution 1   */

function convert(hours, minutes) {
	return ((hours*60) + minutes) * 60
}


/*  Solution 2   */

function convert(hours, minutes) {
	var hour = hours * 3600;
	var min = minutes * 60;
	return hour + min;
	
	
}

/*  Solution 3   */

function convert(hours, minutes) {
	var seconds = (hours * 60 *60) + (minutes * 60);
	return seconds;
}