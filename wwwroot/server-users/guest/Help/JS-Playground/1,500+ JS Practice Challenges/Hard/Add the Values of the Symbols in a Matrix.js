/*

Add the Values of the Symbols in a Matrix


Write a function that takes an array of arrays and returns the value of all of the symbols in it, where each symbol adds or takes something from the total score. Symbol values:

# = 5
O = 3
X = 1
! = -1
!! = -3
!!! = -5
An array of arrays containing 2 #s, a O, and a !!! would equal (0 + 5 + 5 + 3 - 5) 8.

If the final score is negative, return 0 (e.g. 3 #s, 3 !!s, 2 !!!s and a X would be (0 + 5 + 5 + 5 - 3 - 3 - 3 - 5 - 5 + 1) -3, so return 0.

Examples
checkScore([
  ["#", "!"],
  ["!!", "X"]
]) ➞ 2

checkScore([
  ["!!!", "O", "!"],
  ["X", "#", "!!!"],
  ["!!", "X", "O"]
]) ➞ 0

checkScore([
  ["#", "O", "#", "!!", "X", "!!", "#", "O", "O", "!!", "#", "X", "#", "O"],
  ["!!!", "!!!", "!!", "!!", "!", "!", "X", "!", "!!!", "O", "!", "!!!", "X", "#"],
  ["#", "X", "#", "!!!", "!", "!!", "#", "#", "!!", "X", "!!", "!!!", "X", "O"],
  ["!!", "X", "!!", "!!", "!!!", "#", "O", "O", "!!!", "#", "O", "O", "#", "!!"],
  ["O", "X", "#", "!", "!", "X", "!!!", "O", "!!!", "!!", "O", "!", "O", "X"],
  ["!!", "!!!", "X", "!!!", "!!", "!!", "!!!", "X", "O", "!", "#", "!!", "!!", "!!!"],
  ["!!", "!!", "#", "O", "!", "!!", "!", "!!!", "#", "O", "#", "!", "#", "!!"],
  ["X", "X", "O", "X", "!!!", "#", "!!!", "!!!", "X", "X", "X", "!", "#", "!!"],
  ["O", "!!!", "!", "O", "#", "!", "!", "#", "X", "X", "#", "O", "!!", "!"],
  ["X", "!", "!!", "#", "#", "X", "!!", "O", "!!", "X", "X", "!!", "#", "X"],
  ["!", "!!", "!!", "O", "!!", "!!", "#", "#", "!", "!!!", "O", "!", "#", "#"],
  ["!", "!!!", "!!", "X", "!!", "!!", "#", "!!!", "O", "!!", "!!!", "!", "!", "!"],
  ["!!!", "!!!", "!!", "O", "!", "!", "!!!", "!!!", "!!", "!!", "X", "!", "#", "#"],
  ["O", "O", "#", "O", "#", "!", "!!!", "X", "X", "O", "!", "!!!", "X", "O"]
]) ➞ 12


Notes
Strings in the arrays will only be #, O, X, !, !! and !!!.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function checkScore(str) {
	let number = {
		'#': 5,
		'O': 3,
		'X': 1,
		'!': -1,
		'!!': -3,
		'!!!': -5
	}
	let result = str.flat(Infinity).reduce((a, c) => a + number[c], 0)
	return result > 0 ? result : 0
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function checkScore(str) {
    var a= str.map(x => x.map(x => obj[x]).reduce((a,b)=>a+b)).reduce((a,b)=>a+b)
    return a > 0 ? a : 0
    }
    
    var obj = {
    "#": 5,
    "O": 3,
    "X": 1,
    "!": -1,
    "!!": -3,
    "!!!": -5
    }




//#############################################################
//#  SOLUTION 3
//#############################################################



function checkScore(str) {
	var dict = {
		"#": 5,
		"O": 3,
		"X": 1,
		"!": -1,
		"!!": -3,
		"!!!": -5
	}
	var sum = str.map(a => 
			a.map(c => dict[c])
		 	.reduce((b,c) => b+c)
		).reduce((a,c) => a+c);
	return sum > 0 ? sum : 0;
}



//#############################################################
//#  SOLUTION 4
//#############################################################



function checkScore(str) {
	const chars = {
  	"#": 5, "O": 3,
  	"X": 1, "!": -1,
  	"!!": -3, "!!!": -5
	}
	let score = str.flat(Infinity)
		.map(el => +el.replace(/[X#O]|\!+/g, (num) => chars[num]))
		.reduce((acc, cur) => acc + cur);
	return score < 0 ? 0 : score;
}