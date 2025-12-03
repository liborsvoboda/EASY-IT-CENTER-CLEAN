



/*


Alphabet Soup
Create a function that takes a string and returns a string with its letters in alphabetical order.

Examples
AlphabetSoup("hello") ➞ "ehllo"

AlphabetSoup("edabit") ➞ "abdeit"

AlphabetSoup("hacker") ➞ "acehkr"

AlphabetSoup("geek") ➞ "eegk"

AlphabetSoup("javascript") ➞ "aacijprstv"
Notes
You can assume numbers and punctuation symbols won't be included in test cases. You'll only have to deal with single word, alphabetic characters.


*/






/*  Solution 1   */


function AlphabetSoup(str) {
    return str.split('').map((s) => s.charCodeAt(0)).sort((a, b) => a - b).map((n) => String.fromCharCode(n)).join('')
  }




/*  Solution 2   */


AlphabetSoup = s => [...s].sort().join``


const AlphabetSoup = (s) => s.split("").sort().join("")

const AlphabetSoup = str => str.split('').sort().join('')



/*  Solution 3   */


function AlphabetSoup(str) {
    return str.split("").sort().join("");
  }