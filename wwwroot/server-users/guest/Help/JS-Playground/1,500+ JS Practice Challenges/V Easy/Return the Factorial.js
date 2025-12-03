



/*

Return the Factorial
Create a function that takes an integer and returns the factorial of that integer. That is, the integer multiplied by all positive lower integers.

Examples
factorial(3) ➞ 6

factorial(5) ➞ 120

factorial(13) ➞ 6227020800
Notes
Assume all inputs are greater than or equal to 0.



*/






/*  Solution 1   */


function factorial(int) {
    if(int <= 1){
      return 1;
    }
   else{
     return int * factorial(int - 1);
   }
 }


/*  Solution 2   */

const factorial = num => num === 1 ? num : num * factorial(num - 1);

factorial = i => i ? i * factorial(i-1) : 1



/*  Solution 3   */


function factorial(int) 
{
  let total = 1;
  for(let counter = 1; counter <= int; counter++)
     {
         total *= counter;
     }
     return total;
}