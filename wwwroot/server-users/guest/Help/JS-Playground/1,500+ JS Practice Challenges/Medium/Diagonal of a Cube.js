/*

Diagonal of a Cube

Create a function that takes the volume of a cube and returns the length of the cube's main diagonal, rounded to two decimal places.

Examples
cubeDiagonal(8) ➞ 3.46

cubeDiagonal(343) ➞ 12.12

cubeDiagonal(1157.625) ➞ 18.19

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


const cubeDiagonal = volume => (
    Number((Math.cbrt(volume) * Math.sqrt(3)).toFixed(2))
);



//#############################################################
//#  SOLUTION 2  
//#############################################################


const cubeDiagonal = volume => Math.round(Math.sqrt(3) * volume ** (1 / 3) * 100) / 100