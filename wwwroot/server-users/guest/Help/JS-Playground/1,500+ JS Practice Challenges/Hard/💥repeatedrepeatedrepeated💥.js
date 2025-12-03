/*

💥repeatedrepeatedrepeated💥

This challenge concerns strings such as:

"repeatedrepeatedrepeated"
... that are obtained by repeating a smaller string, which in this case is the string "repeated".

On a related note, since the string above is made of 3 repetitions, one way to produce this string is via the code "repeated".repeat(3).

Write a function that, given a string, either:

Returns false if the string isn't made by repeating a smaller string or ...
Returns the number of repetitions if the string repeats a smaller string.
Examples
isRepeated("repeatedrepeatedrepeated") ➞ 3

isRepeated("overintellectualizations") ➞ False

isRepeated("nononononononononononono") ➞ 12

isRepeated("moremoremoremoremoremore") ➞ 6

isRepeated(",,,,,,,,,,,,,,,,,,,,,,,,") ➞ 24


Notes
To keep things a little simpler, all strings in the tests will have length exactly 24, just as in all the examples above. In particular, the answers will always be divisors of 24.

*/



//#############################################################
//#  SOLUTION 1                                               #
//#############################################################


function isRepeated(strn) {

	let reg1 = /(.)\1{23}/g;
	let reg2 = /(.{2})\1{11}/g;
	let reg3 = /(.{3})\1{7}/g;
	let reg4 = /(.{4})\1{5}/g;
	let reg5 = /(.{6})\1{3}/g;
	let reg6 = /(.{8})\1{2}/g;
	let reg7 = /(.{12})\1/g;

	if ( reg1.test(strn) ) {
		return 24;
	} else if ( reg2.test(strn) ) { 
		return 12;
	} else if ( reg3.test(strn) ) { 
		return 8;
	} else if ( reg4.test(strn) ) { 
		return 6;
	} else if ( reg5.test(strn) ) { 
		return 4;
	} else if ( reg6.test(strn) ) { 
		return 3;
	} else if ( reg7.test(strn) ) { 
		return 2;
	}	else {
		 return false;
	}	

}




//#############################################################
//#  SOLUTION 2                                               # 
//#############################################################


const isRepeated = (strn) => {
	let n = strn.length / strn.slice(0, strn.slice(1).indexOf(strn[0]) + 1).length;
	return n < 2 ? false : n;
}




//#############################################################
//#  SOLUTION 3                                               #
//#############################################################


const isRepeated = (strn) => {
    let str = '';
    let count = 0;
  
    for (let i = 0; i < strn.length; i++) {
      str += strn[i];
  
      // all answers are divisors of 24
      if (24 % (i + 1) === 0) {
        count = 24 / (i + 1);
      } else {
        continue;
      }
  
      // Check for a match
      if (str.repeat(count) === strn) break;
    }
  
    return count === 1 ? false : count;
  };



//#############################################################
//#  SOLUTION 4                                               #
//#############################################################


function isRepeated(s) {
	var h = s.split("").map((x,i) => x == s[0] ? i : x).filter(x => x >= 0)[1]
	return 24 / s.slice(0,h).length % 1 != 0 ? false : 24 / s.slice(0,h).length
}