



/*

Fix the Error: Vowel Edition
Your friend is trying to write a function that removes all vowels from a string. They write:

function removeVowels(str) {
  return str.replace(/[aeiou]/, "")
}
However, it seems that it doesn't work? Fix your friend's code so that it actually does remove all vowels.

Examples
removeVowels("candy") ➞ "cndy"

removeVowels("hello") ➞ "hllo"
// The "e" is removed, but the "o" is still there!

removeVowels("apple") ➞ "pple"
Notes



*/






/*  Solution 1   */


// Fix this incorrect code, so that all tests pass!
function removeVowels(str) {
    return str.replace(/[aeiou]/g, '')
  }


/*  Solution 2   */

function removeVowels(str) {
    return str.replace(/[aeiou]/g, '')
  }



/*  Solution 3   */


// Fix this incorrect code, so that all tests pass!
function removeVowels(str) {
    return str.replace(/[aeiou]/gi, '');
  }