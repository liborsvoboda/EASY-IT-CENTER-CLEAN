/*  

Number of Squares in an N * N Grid

Create a function that calculates the number of different squares in an n * n square grid. Check the Resources tab.

Examples
numberSquares(2) ➞ 5

numberSquares(4) ➞ 30

numberSquares(5) ➞ 55

Notes
Input is a positive integer.
Square pyramidal number.

*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#    SOLUTION 1

function numberSquares(n) {
    return n * (n + 1) * (2 * n + 1) / 6
}


//#    SOLUTION 2


const numberSquares = n => n > 1 ? n ** 2 + numberSquares(n - 1) : 1;


//#    SOLUTION 3


function numberSquares(n) {
    var arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    var arr = arr.map(x => x * x);
    return arr.reduce((x, y) => x + y)
}


//#    SOLUTION 4