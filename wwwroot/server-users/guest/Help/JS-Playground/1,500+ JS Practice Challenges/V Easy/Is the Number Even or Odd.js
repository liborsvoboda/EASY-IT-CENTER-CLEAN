



/*


Is the Number Even or Odd?
Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

Examples
isEvenOrOdd(3) ➞ "odd"

isEvenOrOdd(146) ➞ "even"

isEvenOrOdd(19) ➞ "odd"
Notes
Dont forget to return the result.
Input will always be a valid integer.
Expect negative integers (whole numbers).
Tests are case sensitive (return "even" or "odd" in lowercase).


*/


/*  Solution 1   */

function isEvenOrOdd(num) {
    return num % 2 ? 'odd' : 'even';
  }



/*  Solution 2   */
  


  isEvenOrOdd = n => n % 2 ? 'odd' : 'even'



/*  Solution 3   */


  isEvenOrOdd = (n) => [`even`, `odd`][n & 1]



/*  Solution 4   */


  function isEvenOrOdd(num) {
    if (num % 2 === 0) {
      return "even";
    }
    else return "odd";
  }


