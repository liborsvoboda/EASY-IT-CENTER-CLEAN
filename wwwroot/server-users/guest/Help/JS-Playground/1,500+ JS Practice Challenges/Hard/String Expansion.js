/*

String Expansion

Create a function which takes a string txt and expands it as per following rules:

The numeric values represent the occurrence of each letter preceding that numeric value.
stringExpansion("3M2u5b2a1s1h2i1r") ➞ "MMMuubbbbbaashiir"
The first occurrence of a numeric value should be the number of times each character behind it is repeated, until the next numeric value appears.
stringExpansion("3Mat")➞ "MMMaaattt"      // correct

stringExpansion("3Mat") ➞ "MMMat"          // wrong
stringExpansion("3Mat") ➞ "MatMatMat"      // wrong
If there are consecutive numeric characters, ignore them all except last one.
stringExpansion("3M123u42b12a") ➞ "MMMuuubbaa"
If there are two consecutive alphabetic characters then the string will remain unchanged.
stringExpansion("airforce") ➞ "airforce"
Empty strings should return an empty string.
stringExpansion("") ➞ ""

*/



//#############################################################
//#    SOLUTION 1
//#############################################################

const stringExpansion = txt => txt.replace(/(\d)+([a-z]*)/gi, (_,d,c) => c.replace(/./g, c => c.repeat(d)))



//#############################################################
//#    SOLUTION 2
//#############################################################


function stringExpansion(txt) {
	return txt.replace(/(\d+)([a-z]*)/gi, (_, d, s) =>
		[...s].map(c => c.repeat(d % 10)).join("")
	);
}



//#############################################################
//#    SOLUTION 3
//#############################################################


function stringExpansion(txt) {
	return /[a-z]/gi.test(txt)?txt.match(/(?<!\d)[a-z]+|\d[a-z]+/gi).map(x=>/\d/g.test(x)?[...(x.match(/[a-z]+/gi)[0])].map(y=>y.repeat(+(x.match(/\d/gi)))):x).flat().join(''):''
}




//#############################################################
//#    SOLUTION 4
//#############################################################


function stringExpansion(txt) {
	return txt.replace(/\d+[A-z]*/g, (match) => {
		let number = Number.parseInt(match);
		let lastDigit = Number.parseInt(match) % 10;
		return match.slice(number.toString().length)
			          .split("")
			          .map(chr => chr.repeat(lastDigit))
			          .join("");
	})
}