



/*

Find the Bomb
Create a function that finds the word "bomb" in the given string. If there is a bomb, return "Duck!!!" otherwise return "There is no bomb, relax.".

Examples
bomb("There is a bomb.") ➞ "Duck!!!"

bomb("Hey, did you think ther is a bomb?") ➞ "Duck!!!"

bomb("This goes boom!!!") ➞ "There is no bomb, relax."
Notes
"bomb" may appear in different case (i.e. uppercase, lowercase, mixed).



*/






/*  Solution 1   */

const bomb = s =>  /bomb/i.test(s) ? 'Duck!!!' : "There is no bomb, relax.";

const bomb = str => /bomb/gi.test(str) ? "Duck!!!" : "There is no bomb, relax.";

const bomb = str => /bomb/i.test(str) ? "Duck!!!" : "There is no bomb, relax.";

const bomb = s => s.toLowerCase().includes("bomb") ? "Duck!!!" : "There is no bomb, relax."

const bomb = str => /bomb/i.test(str) ? 'Duck!!!' : 'There is no bomb, relax.'



/*  Solution 2   */

const bomb = str => (
	/bomb/i.test(str) ? 'Duck!!!' : 'There is no bomb, relax.'
);





/*  Solution 3   */


function bomb(str) {
	if(str.toLowerCase().includes("bomb")){
		return "Duck!!!";
	}
	return "There is no bomb, relax."
}