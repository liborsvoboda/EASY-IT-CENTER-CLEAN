/*  
Cube the Square Root
Create a function that takes a number as an argument and returns the square root of that number cubed.

Examples
cubeSquareRoot(81) ➞ 729

cubeSquareRoot(1646089) ➞ 2111932187

cubeSquareRoot(695556) ➞ 580093704
Notes
All numbers will evenly square root, so don't worry about decimal numbers.

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################




/*  

Solution 1

*/

const cubeSquareRoot = n => Math.sqrt(n) ** 3

const cubeSquareRoot = num => num ** 1.5;

const cubeSquareRoot = num => Math.sqrt(num ** 3)

/*  

Solution 2

*/

function cubeSquareRoot(num) {
    let squer = Math.sqrt(num);
    let mult = num * squer;
    return mult
}


/*  

Solution 3

*/

function cubeSquareRoot(num) {
    let nCubed = Math.pow(num, 3);
    return Math.sqrt(nCubed);
}





/*  

Solution 4

*/