



/*

Word Endings
Create a function that adds a string ending to each member in an array.

Examples
addEnding(["clever", "meek", "hurried", "nice"], "ly")
➞ ["cleverly", "meekly", "hurriedly", "nicely"]

addEnding(["new", "pander", "scoop"], "er")
➞ ["newer", "panderer", "scooper"]

addEnding(["bend", "sharpen", "mean"], "ing")
➞ ["bending", "sharpening", "meaning"]
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.



*/






/*  Solution 1   */

function addEnding(arr, ending) {
	return arr.map(word => word + ending);
}



/*  Solution 2   */


function addEnding(arr, ending) {
	return arr.map(item => item.concat(ending));
}


const addEnding = (a, e) => a.map(x => x + e)

const addEnding=(arr, ending)=> arr.map(el=>el+ending)



function addEnding(arr, ending) {
	return arr.map((element) => element.concat(ending))
}


/*  Solution 3   */


function addEnding(arr, ending) {
	return arr.map(x => x.concat(ending))
}