



/*



Cowboy Shootout
Wild Roger is tasked with shooting down 6 bottles with 6 shots as fast as possible. Here are the different types of shots he could make:

He could use one pistol to shoot a bottle with a "Bang!" in 0.5 seconds.
Or he could use both pistols at once with a "BangBang!" to shoot two bottles in 0.5 seconds.
Given an array of strings, return the time (in seconds) it took to shoot down all 6 bottles. Make sure to only count Bangs and BangBangs. Anything else doesn't count.

Examples
rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!"]) ➞ 3

rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "BangBang!"]) ➞ 2.5

rogerShots(["Bang!", "BangBangBang!", "Boom!", "Bang!", "BangBang!", "BangBang!"]) ➞ 2
Notes
All the bottles will be shot down in all the tests.

*/






/*  Solution 1   */

function rogerShots(arr) {
	time = 0;
	result = arr.map(x => x === "Bang!" ? time+=0.5 : x === "BangBang!" ? time+=0.5 : true);
	return time;
}







/*  Solution 2   */


const rogerShots = arr => arr.filter(el => el === 'Bang!' || el === 'BangBang!').length * 0.5;

const rogerShots = arr =>     arr.reduce((a,v) => a + (['Bang!','BangBang!'].includes(v) ? .5 : 0), 0);
 
const rogerShots = arr => arr.map(s => s.replace(/^Bang!$|^BangBang!$/g, 0.5)).filter(v => v == +v).reduce((a,b) => +a + +b)



/*  Solution 3   */


function rogerShots(arr) {
	const newArr = arr.filter(x => x === "Bang!" | x === "BangBang!");
  return newArr.length * 0.5;
}


