



/*


Sort an Array by String Length
Create a function that takes an array of strings and return an array, sorted from shortest to longest.

Examples
sortByLength(["Google", "Apple", "Microsoft"])
➞ ["Apple", "Google", "Microsoft"]

sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"])
➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]

sortByLength(["Turing", "Einstein", "Jung"])
➞ ["Jung", "Turing", "Einstein"]
Notes
All test cases contain arrays with strings of different lengths, so you won't have to deal with multiple strings of the same length.


*/






/*  Solution 1   */

function sortByLength(arr) {
	return arr.sort((a, b) => { return a.length - b.length})
}

function sortByLength(arr) {
	return arr.sort((a, b) => a.length - b.length);
}






/*  Solution 2   */

const sortByLength = arr => arr.sort((a, b) => a.length - b.length);

const sortByLength = arr => arr.sort((a,b) => a.length - b.length);


sortByLength = a => a.sort((x, y) => x.length - y.length)

const sortByLength = arr => arr.sort((a,b) => a.length - b.length);

const sortByLength = arr => arr.sort((a, b) => a.length - b.length);

/*  Solution 3   */


function sortByLength(arr) {
    return arr.sort((a,b)=> a.length-b.length)
    
    
}




function sortByLength(arr) {
	return arr.sort((a,b) => a.length>b.length)
}