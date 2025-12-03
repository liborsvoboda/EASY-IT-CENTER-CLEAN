



/*

Return the Sum of Two Numbers
Create a function that takes two numbers as arguments and return their sum.

Examples
addition(3, 2) ➞ 5

addition(-3, -6) ➞ -9

addition(7, 3) ➞ 10
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.



*/


/*  Solution 1   */

function addition(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Sorry but you didn't pass two numbers.";
    }
    return a + b;
}



/*  Solution 2   */

const addition = (a, b) => a + b;


/*  Solution 3   */

function addition( a, b ) {
    return a+b ;
  }