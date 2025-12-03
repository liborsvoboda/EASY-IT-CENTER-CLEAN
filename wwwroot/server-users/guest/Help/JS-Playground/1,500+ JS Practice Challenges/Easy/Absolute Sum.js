/*

Absolute Sum
Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

Examples
getAbsSum([2, -1, 4, 8, 10]) ➞ 25

getAbsSum([-3, -4, -10, -2, -3]) ➞ 22

getAbsSum([2, 4, 6, 8, 10]) ➞ 30

getAbsSum([-1]) ➞ 1
Notes
The term "absolute value" means to remove any negative sign in front of a number, and to think of all numbers as positive (or zero).

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



/*  Solution 1   */


function getAbsSum(arr) {

    return arr.reduce((a, b) => a + Math.abs(b), 0);
}


/*  Solution 2   */

const getAbsSum = arr => arr.reduce((acc, item) => acc + Math.abs(item), 0)

const getAbsSum = (a) => eval(a.map(e => Math.abs(e)).join('+'))

const getAbsSum = arr => Math.abs(arr.reduce((last, current) => Math.abs(parseInt(current)) + Math.abs(parseInt(last))))

function getAbsSum(arr) {
    return arr.reduce((pv, cv) => Math.abs(pv) + Math.abs(cv), 0)
}







function getAbsSum(arr) {
    return Math.abs(arr.reduce((a, b) => Math.abs(a) + Math.abs(b)))
}









function getAbsSum(arr) {
    return arr.map(x => Math.abs(x)).reduce((a, b) => a + b);
}






/*  Solution 3   */


function getAbsSum(arr) {
    var sum = 0;

    for (var i = 0, len = arr.length; i < len; i++) {
        sum += Math.abs(arr[i]);
    }

    return sum;
}





function getAbsSum(arr) {
    return arr.reduce((a, b) => Math.abs(b) + Math.abs(a), 0)
}