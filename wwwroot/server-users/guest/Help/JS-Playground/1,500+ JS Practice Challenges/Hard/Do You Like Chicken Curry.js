/*

Do You Like Chicken Curry?

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


const product = (a, b, i = 0) =>
    i === 2 ? a + b : (x, y) => product(x * a, y * b, i + 1);


//#############################################################
//#  SOLUTION 3
//#############################################################


function product() {
    let [n1, n2] = [...arguments]
    return function() {
        let [n3, n4] = [...arguments]
        return function() {
            let [n5, n6] = [...arguments]
            return n1 * n3 * n5 + n2 * n4 * n6
        }
    }
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function product(x1, y1) {
    return function(x2, y2) {
        return function(x3, y3) {
            return x1 * x2 * x3 + y1 * y2 * y3;
        }
    }
}