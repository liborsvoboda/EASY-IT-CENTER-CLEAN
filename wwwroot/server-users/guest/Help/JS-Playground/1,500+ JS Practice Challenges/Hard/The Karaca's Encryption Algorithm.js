/*

The Karaca's Encryption Algorithm

Make a function that encrypts a given input with these steps:

Input: "apple"

Step 1: Reverse the input: "elppa"

Step 2: Replace all vowels using the following chart:

a => 0
e => 1
i => 2
o => 2
u => 3

// "1lpp0"
Step 3: Add "aca" to the end of the word: "1lpp0aca"

Output: "1lpp0aca"

Examples
encrypt("banana") ➞ "0n0n0baca"

encrypt("karaca") ➞ "0c0r0kaca"

encrypt("burak") ➞ "k0r3baca"

encrypt("alpaca") ➞ "0c0pl0aca"


Notes
All inputs are strings, no uppercases and all output must be strings.

*/



//#############################################################
//#  SOLUTION 1                                               #
//#############################################################


const vowels = 'aeou';

const encrypt = word =>
  word
    .split('')
    .reverse()
    .join('')
    .replace(new RegExp(`[${vowels}]`, 'g'), match => vowels.indexOf(match)) +
  'aca';









//#############################################################
//#  SOLUTION 2                                               #
//#############################################################



function encrypt(word) {
	let x = ['a','e','o','u'];
	return word.split('').reverse().join('').replace(/[aeou]/gi, v => (x.indexOf(v) == -1 ? v : x.indexOf(v))) + "aca"
}






//#############################################################
//#  SOLUTION 3                                               #
//#############################################################



function encrypt(str) {
    let vowels = {
        a: 0,
        e: 1,
        i: 2,
        o: 2,
        u: 3
      },
      
      lastStr = 'aca';
    
    // reverse the string
    str = str.split('').reverse();
    
    str.forEach((i, ind, self) => {
      let vowelInd = vowels[i];
      
      if (vowelInd !== undefined) {
        str[ind] = vowelInd;
      }
    });
    
    return str.join('') + lastStr;
  }




//#############################################################
//#  SOLUTION 4                                               # 
//#############################################################


function encrypt(word) {
    const encrypted = word
      .split("")
      .reverse()
      .reduce((acc, char) => {
        switch (char) {
          case "a": {
            char = 0;
            break;
          }
          case "e": {
            char = 1;
            break;
          }
          case "o": {
            char = 2;
            break;
          }
          case "u": {
            char = 3;
            break;
          }
          default:
            break;
        }
        return [...acc, char];
      }, [])
      .join("")
      .concat("aca");
    return encrypted;
  }