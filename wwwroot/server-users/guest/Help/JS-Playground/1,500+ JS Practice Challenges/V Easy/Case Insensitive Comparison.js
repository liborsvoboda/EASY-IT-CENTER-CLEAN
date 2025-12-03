



/*


Case Insensitive Comparison
Write a function that validates whether two strings are identical. Make it case insensitive.

Examples
match("hello", "hELLo") ➞ true

match("motive", "emotive") ➞ false

match("venom", "VENOM") ➞ true

match("mask", "mAskinG") ➞ false
Notes


*/






/*  Solution 1   */


function match(s1, s2) {
	return s1.toLowerCase() === s2.toLowerCase();
}


/*  Solution 2   */


match = (a, b) => a.toLowerCase() == b.toLowerCase();



const match = (s1, s2) =>  s1.toLowerCase() === s2.toLowerCase();



const match = (s1, s2) => {
	return s1.toLowerCase() === s2.toLowerCase();
}


/*  Solution 3   */


function match(s1, s2) {
	var a = s1.toLowerCase()
	var b = s2.toLowerCase()
	if (a==b) return true
	else return false
	
}



/*  Solution 4   */


function match(s1, s2) {
	return s1.toLowerCase() === s2.toLowerCase()
}