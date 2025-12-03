



/*

Free Coffee Cups
For each of the 6 coffee cups I buy, I get a 7th cup free. In total, I get 7 cups. Create a function that takes n cups bought and return as an integer the total number of cups I would get.

Examples
totalCups(6) ➞ 7

totalCups(12) ➞ 14

totalCups(213) ➞ 248
Notes
Number of cups I bought + number of cups I got for free.
Only valid inputs will be given.



*/






/*  Solution 1   */

function totalCups(n) {
    return n + Math.floor(n / 6)
   }



/*  Solution 2   */

const totalCups = n => ~~(n / 6) + n;

const totalCups = (n) => Math.floor(n / 6) + n

const totalCups = n => Math.floor(n + n / 6);




/*  Solution 3   */



function totalCups(n) {
    var sum = n / 6;
      return n + Math.floor(sum);
  }