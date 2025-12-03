



/*

Return the Four Letter Strings
Create a function that takes an array of strings and returns the words that are exactly four letters.

Examples
isFourLetters(["Tomato", "Potato", "Pair"]) ➞ ["Pair"]

isFourLetters(["Kangaroo", "Bear", "Fox"]) ➞ ["Bear"]

isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]) ➞ ["Ryan", "Matt"]
Notes
You can expect valid strings for all test cases



*/






/*  Solution 1   */

function isFourLetters (arr) {
    return arr.filter(x => x.length === 4);
  }



/*  Solution 2   */


let isFourLetters = (arr) => arr.filter(word => word.length === 4);


/*  Solution 3   */

function isFourLetters(arr) {
    var result = arr.filter((word) => word.length === 4)
    return result
  }