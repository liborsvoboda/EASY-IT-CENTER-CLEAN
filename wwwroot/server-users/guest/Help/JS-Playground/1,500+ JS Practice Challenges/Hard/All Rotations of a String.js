/*

All Rotations of a String

Create a left rotation and a right rotation function that returns all the left rotations and right rotations of a string.

Examples
leftRotations("abc") ➞ ["abc", "bca", "cab"]

rightRotations("abc") ➞ ["abc", "cab", "bca"]

leftRotations("abcdef") 
➞ ["abcdef", "bcdefa", "cdefab", "defabc", "efabcd", "fabcde"]

rightRotations("abcdef") 
➞ ["abcdef", "fabcde", "efabcd", "defabc", "cdefab", "bcdefa"]

*/





//#############################################################
//#  SOLUTION 1                                               #
//#############################################################


function leftRotations(str) {
	return str.split("").map((a,i)=>str.slice(i)+str.slice(0,i))
}

function rightRotations(str) {
	return str.split("").map((a,i)=>str.slice(-i)+str.slice(0,-i))
}






//#############################################################
//#  SOLUTION 2                                               #
//#############################################################


const leftRotations = str => {
	return new Array(str.length)
		.fill()
		.map((x, i) => str.repeat(2).slice(i, i + str.length))
}

const rightRotations = str => {
	return new Array(str.length)
		.fill()
		.map((x, i) => i > 0 ? str.repeat(2).slice(-(i + str.length), -i) : str)
}






//#############################################################
//#  SOLUTION 3                                               #
//#############################################################



function leftRotations(str) {
	return [...str].map((_, i) => {
		return str.slice(i) + str.slice(0, i)
	})
}

function rightRotations(str) {
	return [...str].map((_, i) => {
		return str.slice(str.length - i) + str.slice(0, str.length - i)
	})
}




//#############################################################
//#  SOLUTION 4                                               #
//#############################################################


function leftRotations(s)
{
  return [...s].map((_, i) => s.slice(i) + s.slice(0, i));
}
function rightRotations(s)
{
  return [...s].map((_, i) => s.slice(-i) + s.slice(0, -i));
}