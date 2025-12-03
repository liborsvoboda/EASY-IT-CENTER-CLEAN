



/*


Characters in Shapes
Create a function that counts how many characters make up a rectangular shape. You will be given a array of strings.

Examples
countCharacters([
  "###",
  "###",
  "###"
]) ➞ 9

countCharacters([
  "22222222",
  "22222222",
]) ➞ 16

countCharacters([
  "------------------"
]) ➞ 18

countCharacters([]) ➞ 0

countCharacters([ "", ""]) ➞ 0
Notes
Return 0 if given an empty array.


*/






/*  Solution 1   */


function countCharacters(arr) {
	chars = 0;
	for(let i = 0; i< arr.length; i++){
		chars += arr[i].length;
	}
	return chars;
}


/*  Solution 2   */

const countCharacters = r => r.join('').length

const countCharacters = arr => arr.join('').length;

const countCharacters = arr => arr.join('').length;


const countCharacters = arr => arr.length * (arr[0] || '').length;


/*  Solution 3   */



function countCharacters(arr) {
	return arr.map(x => x = x.split('')).flat(Infinity).length
	
}


const countCharacters = arr => {
    return arr.map(x => x.length).reduce((a,b) => a + b,0);
    }


/*  Solution 4   */

function countCharacters(arr) {
	var array = [""];
	var count = array.length; 
	
}
return countCharacters();