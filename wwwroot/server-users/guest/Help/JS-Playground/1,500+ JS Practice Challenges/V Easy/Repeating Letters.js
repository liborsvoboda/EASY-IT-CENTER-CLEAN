



/*

Repeating Letters
Create a function that takes a string and returns a string in which each character is repeated once.

Examples
doubleChar("String") ➞ "SSttrriinngg"

doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"

doubleChar("1234!_ ") ➞ "11223344!!__  "
Notes
All test cases contain valid strings. Don't worry about spaces, special characters or numbers. They're all considered valid characters.



*/






/*  Solution 1   */



function doubleChar(str) {
    return str.split('').reduce((acc, curr) => acc += curr.repeat(2), "");
  }

/*  Solution 2   */

let doubleChar = str => str.replace(/./g,'$&$&');

doubleChar = str => [...str].map(v => v+v).join``

doubleChar = s => s.replace(/./g, x => x+x)

doubleChar=s=>[...s].map(c=>c+c).join``






/*  Solution 3   */


function doubleChar(str) {
    var arr = str.split("");
    var result = [];
    
    for (var i = 0; i < arr.length; i++) {
        result.push(arr[i], arr[i])  
    }
    
    return result.join("")
  }