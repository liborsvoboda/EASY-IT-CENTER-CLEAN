/*

Determinant of Square Matrix

In linear algebra, the determinant is a scalar value that can be computed from the elements of a square matrix and encodes certain properties of the linear transformation described by the matrix.

Create a function that takes a square 2D array as an argument and returns a number (determinant).

Examples
getDet([
  [ 0, 1],
  [ 1, 1]
]) ➞ -1

getDet([
  [69, 0],
  [1, 1]
]) ➞ 69

getDet([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]) ➞ 0

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function getDet(a) {
    return a.length == 1 ? a[0] : a.length == 2 ? a[0][0] * a[1][1] - a[0][1] * a[1][0] : a[0][0] * a[1][1] * a[2][2] + a[0][1] * a[1][2] * a[2][0] + a[0][2] * a[1][0] * a[2][1] - a[0][2] * a[1][1] * a[2][0] - a[0][1] * a[1][0] * a[2][2] - a[0][0] * a[1][2] * a[2][1]
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


const getDet = (a) =>
    a.length == 1 ?
    1 :
    a.length == 2 ?
    a[0][0] * a[1][1] - a[0][1] * a[1][0] :
    a[0].reduce(
        (r, e, i) => r + (-1) ** (i + 2) * e * getDet(a.slice(1).map((c) => c.filter((_, j) => i != j))),
        0,
    );



//#############################################################
//#  SOLUTION 3
//#############################################################


function getDet(a) {
    if (a.length == 2) {
        return a[0][0] * a[1][1] - a[0][1] * a[1][0];
    }

    [v, x, z] = a[0];
    const romoveRowAndColP = (p) =>
        a.filter((v, i) => i != 0).map((v) => v.filter((col, colIndex) => colIndex != p));

    return v * getDet(romoveRowAndColP(0)) -
        x * getDet(romoveRowAndColP(1)) +
        z * getDet(romoveRowAndColP(2))

}



//#############################################################
//#  SOLUTION 4
//#############################################################


function getDet(a) {
    if (a.length === 1) {
        return a[0];
    }
    if (a.length === 2) {
        return a[0][0] * a[1][1] - a[0][1] * a[1][0];
    }
    if (a.length === 3) {
        return (
            a[0][0] * (a[1][1] * a[2][2] - a[1][2] * a[2][1]) -
            a[0][1] * (a[1][0] * a[2][2] - a[1][2] * a[2][0]) +
            a[0][2] * (a[1][0] * a[2][1] - a[1][1] * a[2][0])
        );
    }
}