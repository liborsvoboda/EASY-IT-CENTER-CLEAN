



/*

Factorial of a Positive Integer
Write a function that takes a positive integer and return its factorial.

Examples
factorial(4) ➞ 24

factorial(0) ➞ 1

factorial(9) ➞ 362880
Notes
The factorial of 0 is 1.
The factorial of any positive integer Z is Z * (Z - 1) * (Z - 2) * . . . . . . * 1 (e.g. factorial of 3 is 3 * 2 * 1 = 6).



*/






/*  Solution 1   */


const factorial = num => (num <= 1 ? 1 : num * factorial(num - 1));

const factorial=z=> z<=1?1:z*factorial(z-1)

factorial = z => z < 1? 1: z * factorial(z-1);




/*  Solution 2   */

let factorial = n => n < 2 ? 1 : n * factorial(n - 1);


const factorial = z => z < 2 ? 1 : z * factorial(z-1);


/*  Solution 3   */