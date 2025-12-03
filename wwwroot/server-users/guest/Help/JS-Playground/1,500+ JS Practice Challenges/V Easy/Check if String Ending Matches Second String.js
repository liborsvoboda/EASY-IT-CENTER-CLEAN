



/*

Check if String Ending Matches Second String
Create a function that takes two strings and returns true if the first string ends with the second string; otherwise return false.

Examples
checkEnding("abc", "bc") ➞ true

checkEnding("abc", "d") ➞ false

checkEnding("samurai", "zi") ➞ false

checkEnding("feminine", "nine") ➞ true

checkEnding("convention", "tio") ➞ false
Notes
All test cases are valid one word strings.



*/






/*  Solution 1   */


function checkEnding(str1, str2) {
    return str1.endsWith(str2)
  }


/*  Solution 2   */

const checkEnding = (str1, str2) => str1.endsWith(str2);

let checkEnding = (a, b) => a.endsWith(b);





/*  Solution 3   */

function checkEnding(str1, str2) {
    return str2 === str1.substr(str1.length - str2.length, str2.length);
  }