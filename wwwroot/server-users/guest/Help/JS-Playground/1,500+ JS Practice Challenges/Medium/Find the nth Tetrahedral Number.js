/*

Find the nth Tetrahedral Number

Create a function that takes an integer n and returns the nth tetrahedral number.

Alternative Text

Examples
tetra(2) ➞ 4

tetra(5) ➞ 35

tetra(6) ➞ 56

Notes
There is a formula for the nth tetrahedral number.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function tetra(n) {
    return n > 0 ? (1 + n) * n / 2 + tetra(n - 1) : 0
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


const tetra = n => n * (n + 1) * (n + 2) / 6;