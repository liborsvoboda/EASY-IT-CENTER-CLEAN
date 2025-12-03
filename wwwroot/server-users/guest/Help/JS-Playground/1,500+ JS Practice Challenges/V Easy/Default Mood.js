



/*


Default Mood
Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".

Examples
moodToday("happy") ➞ "Today, I am feeling happy"

moodToday("sad") ➞ "Today, I am feeling sad"

moodToday() ➞ "Today, I am feeling neutral"
Notes
Check the Resources tab for some helpful information.


*/






/*  Solution 1   */


function moodToday(mood) {
	return `Today, I am feeling ${mood || "neutral"}`
}


/*  Solution 2   */

const moodToday = mood => `Today, I am feeling ${mood || 'neutral'}`;


const moodToday = (mood = "neutral") => `Today, I am feeling ${mood}`


const moodToday = m => m ?
 `Today, I am feeling ${m}` : `Today, I am feeling neutral`;

 
/*  Solution 3   */


function moodToday(mood) {
	if (arguments.length === 0) {
		return "Today, I am feeling neutral";
	} else {
		return `Today, I am feeling ${mood}`;
	}
}