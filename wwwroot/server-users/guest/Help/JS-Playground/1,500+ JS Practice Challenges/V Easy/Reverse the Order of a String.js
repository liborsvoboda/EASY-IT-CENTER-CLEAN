



/*

Reverse the Order of a String
Create a function that takes a string as its argument and returns the string in reversed order.

Examples
reverse("Hello World") ➞ "dlroW olleH"

reverse("The quick brown fox.") ➞ ".xof nworb kciuq ehT"

reverse("Edabit is really helpful!") ➞ "!lufpleh yllaer si tibadE"
Notes
You can expect a valid string for all test cases.



*/






/*  Solution 1   */

function reverse(str) {
    return [...str].reverse().join('');
  }



/*  Solution 2   */

reverse = s => s.split``.reverse().join``


var reverse = str => [...str].reverse().join('');

let reverse = s => s.split('').reverse().join('')

reverse = s => [...s].reverse().join('')


/*  Solution 3   */

function reverse(str) {
    return str.split("").reverse().join("");
  }