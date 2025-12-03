/*

Rhyme Time

Create a function that returns true if two lines rhyme and false otherwise. For the purposes of this exercise, two lines rhyme if the last word from each sentence contains the same vowels.

Examples
doesRhyme("Sam I am!", "Green eggs and ham.") ➞ true

doesRhyme("Sam I am!", "Green eggs and HAM.") ➞ true
// Capitalization and punctuation should not matter.

doesRhyme("You are off to the races", "a splendid day.") ➞ false

doesRhyme("and frequently do?", "you gotta move.") ➞ false


Notes
Case insensitive.
Here we are disregarding cases like "thyme" and "lime".
We are also disregarding cases like "away" and "today" (which technically rhyme, even though they contain different vowels).

*/



//#############################################################
//#    SOLUTION 1                                             #      
//#############################################################


function doesRhyme(str1, str2) {
	const lw = (str) => str.toLowerCase().split(' ').slice(-1)[0],
	vi = (str) => str.match(/[aeiou]/g).join``;
	return vi(lw(str1)) === vi(lw(str2));
}



//#############################################################
//#    SOLUTION 2                                             #
//#############################################################


const doesRhyme = (str1, str2) => str1.split(' ').reverse()[0].toLowerCase().replace(/[^aeiou]/g,'') === str2.split(' ').reverse()[0].toLowerCase().replace(/[^aeiou]/g,'');


//#############################################################
//#    SOLUTION 3                                             #
//#############################################################


const doesRhyme = (str1, str2) => {
    let arr1 = str1
      .split(" ")
      .pop()
      .replace(/[^a-z]/gi, "")
      .toLowerCase();
    let arr2 = str2
      .split(" ")
      .pop()
      .replace(/[^a-z]/gi, "")
      .toLowerCase();
  
    let a = [...arr1].slice([...arr1].length - 2).join("");
    let b = [...arr2].slice([...arr2].length - 2).join("");
    return a === b;
  };



//#############################################################
//#    SOLUTION 4                                             #
//#############################################################


const doesRhyme = (str1, str2) =>
	[ str1, str2 ]
		.map(word => word
									.split` `
									.reverse()[0]
									.match(/[aeiou]/gi)
									.sort()
									.join``
									.toLowerCase())
		.reduce((res, vow, i) => i ? vow == res : vow, '')




//#############################################################
//#    SOLUTION 5                                             #
//#############################################################



const doesRhyme = (...r) => new Set(
    r.map(c => c.toLowerCase``.replace(/[^aeiou]+[\.\?!]?$/g, ``)
    .slice(-1)).join``).size === 1;