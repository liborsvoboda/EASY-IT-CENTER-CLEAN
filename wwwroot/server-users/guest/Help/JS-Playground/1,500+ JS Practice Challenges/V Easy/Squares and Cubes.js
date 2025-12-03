



/*


Squares and Cubes
Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.

Examples
checkSquareAndCube([4, 8]) ➞ true

checkSquareAndCube([16, 48]) ➞ false

checkSquareAndCube([9, 27]) ➞ true
Notes
Remember to return either true or false.
All arrays contain two positive numbers.
If you're stuck, check the Resources for a hint.


*/






/*  Solution 1   */



function checkSquareAndCube(arr) {
	return Math.sqrt(arr[0]) === Math.cbrt(arr[1]);
}



/*  Solution 2   */

const checkSquareAndCube = ([a, b]) => Math.sqrt(a) === Math.cbrt(b);


const checkSquareAndCube = ns => Math.sqrt(ns[0]) ** 3 === ns[1];


const checkSquareAndCube = ([n1, n2]) => Math.sqrt(n1) === Math.cbrt(n2);


const checkSquareAndCube = arr =>Math.sqrt(arr[0]) === Math.cbrt(arr[1])

/*  Solution 3   */





