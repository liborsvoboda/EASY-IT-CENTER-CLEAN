



/*

Count the Syllables
Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).

Examples
countSyllables("Hehehehehehe") ➞ 6

countSyllables("bobobobobobobobo") ➞ 8

countSyllables("NANANA") ➞ 3
Notes
For simplicity, please note that each syllable will consist of two letters only.
Your code should accept strings of any case (upper, lower and mixed case).



*/






/*  Solution 1   */

function countSyllables(str) {
	return str.length/2;
}



/*  Solution 2   */

const countSyllables = s => s.length / 2

const countSyllables = str => str.match(/[aeiou]/gi).length

const countSyllables = str => str.length / new Set(str.toLowerCase()).size

const countSyllables = str => str.length / 2;

/*  Solution 3   */


function countSyllables(str) {
    var b = 0;
    var syllables = ["a", "e", "i", "y", "o", "u", "A", "E", "I", "Y", "O", "U"];
      for (a = 0; a < str.length; a++){
        if (syllables.includes(str[a])){
          b++;
        }
      }
        return b;
    }