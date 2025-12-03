/*

Function Times 3

Create a function that takes three collections of arguments and returns the sum of the product of numbers.

Examples
product(1,2)(1,1)(2,3) ➞ 8
// 1 * 1 * 2 + 2 * 1 * 3

product(10,2)(5,0)(2,3) ➞ 100
// 10 * 5 * 2 + 2 * 0 * 3

product(1,2)(2,3)(3,4) ➞ 30
// 1 * 2 * 3 + 2 * 3 * 4

product(1,2)(0,3)(3,0) ➞ 0

// 1 * 0 * 3 + 2 * 3 * 0



Notes
All test input is valid.

*/


//#############################################################
//#  SOLUTION 1 
//#############################################################


const product = (a, b) => (c, d) => (e, f) => a * c * e + b * d * f;


//#############################################################
//#  SOLUTION 2  
//#############################################################


const product = (a, b, i=0) => i === 2? a + b : (x, y) => product(x*a, y*b, i+1);



//#############################################################
//#  SOLUTION 3
//#############################################################


function product(...a) {
    return (...b) => {
      return (...c) => {
        return c.reduce((s, v, i) => s + v * a[i] * b[i], 0);
      };
    };
  }

