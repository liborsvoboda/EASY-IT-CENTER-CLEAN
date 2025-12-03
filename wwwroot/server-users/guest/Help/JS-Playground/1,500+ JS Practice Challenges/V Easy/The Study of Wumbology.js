



/*

The Study of Wumbology
Create a function that flips M's to W's (all uppercase).

Examples
wumbo("I LOVE MAKING CHALLENGES") ➞ "I LOVE WAKING CHALLENGES"

wumbo("MEET ME IN WARSAW") ➞ "WEET WE IN WARSAW"

wumbo("WUMBOLOGY") ➞ "WUWBOLOGY"
Notes



*/






/*  Solution 1   */


function wumbo(words) {
	return words.replace(/M/g, "W");
}


/*  Solution 2   */

const wumbo = str => str.replace(/M/g, 'W');

const wumbo = words => words.replace(/M/g, "W");

let wumbo = w => w.replace(/M/g, 'W');

const wumbo = str => str.replace(/m/ig, "W");

const wumbo = words => words.replace(/M/g, 'W');



/*  Solution 3   */


function wumbo(words) {
	return words.replace(/M/g, 'W');
}