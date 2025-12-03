/*

Sum of all Evens in a Matrix

Create a function that returns the sum of all even elements in a 2D matrix.

Examples
sumOfEvens([
  [1, 0, 2],
  [5, 5, 7],
  [9, 4, 3]
]) ➞ 6

// 2 + 4 = 6

sumOfEvens([
  [1, 1],
  [1, 1]
]) ➞ 0

sumOfEvens([
  [42, 9],
  [16, 8]
]) ➞ 66

sumOfEvens([
  [],
  [],
  []
]) ➞ 0

Notes
Submatrices will be of equal length.
Return 0 if the 2D matrix only consists of empty submatrices.


*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################





//#############################################################
//#  SOLUTION 1 
//#############################################################


function sumOfEvens(arr) {
    return arr.map(arr => arr.filter(n => n % 2 === 0).reduce((a, n) => a + n, 0)).
    reduce((a, n) => a + n, 0)
}





//#############################################################
//#  SOLUTION 2  
//#############################################################



function sumOfEvens(arr) {
    var sum = [];
    arr.map(n => n.filter(function(k) {
        if (k % 2 === 0) {
            sum.push(k);
        }
    }));
    return sum.reduce((a, c) => a + c, 0);
}





//#############################################################
//#  SOLUTION 3
//#############################################################



function sumOfEvens(arr) {
    return arr.map(x => x.filter(x => !(x % 2)).reduce((a, b) => a + b, 0)).reduce((a, b) => a + b, 0)
}






//#############################################################
//#  SOLUTION 4
//#############################################################


function sumOfEvens(arr) {
    var t = 0;
    for (var i in arr) {
        for (var j in arr[i]) {
            t += arr[i][j] % 2 == 0 ? arr[i][j] : 0;
        }
    }
    return t;
}








//#############################################################
//#  SOLUTION 5
//#############################################################


function sumOfEvens(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result = result.concat(arr[i]);
    }
    return result.filter(x => x % 2 == 0).length == 0 ? 0 : result.filter(x => x % 2 == 0).reduce((a, b) => a + b);
}








//#############################################################
//#  SOLUTION 6
//#############################################################


function sumOfEvens(arr) {
    return arr.map(x => x.reduce((sum, value) =>
            value % 2 === 0 ? sum + value : sum + 0, 0))
        .reduce((sum, value) => sum + value, 0);
}