



/*

Calculate Determinant of a 2x2 Matrix
Create a function to calculate the determinant of a 2 * 2 matrix. The determinant of the following matrix is: ad - bc:

[[a, b], [c, d]]
Examples
calcDeterminant([
  [1, 2],
  [3, 4]
]) ➞ -2

calcDeterminant([
  [5, 3],
  [3, 1]
]) ➞ -4

calcDeterminant([
  [1, 1],
  [1, 1]
]) ➞ 0
Notes
Matrix will be in 2 * 2 form only.



*/






/*  Solution 1   */


function calcDeterminant(matrix) {
	return result = (matrix[0][0]*matrix[1][1]) - (matrix[0][1]*matrix[1][0]);
}


/*  Solution 2   */

const calcDeterminant = ([[a, b], [c, d]]) => a * d - b * c;

const calcDeterminant = ([[a, b], [c, d]]) => a*d - b*c;

calcDeterminant=([[a,b],[c,d]])=>a*d-b*c



/*  Solution 3   */


const calcDeterminant = matrix => {
	return (matrix[0][0] * matrix[1][1]) - (matrix[0][1] * matrix[1][0]); 
}


