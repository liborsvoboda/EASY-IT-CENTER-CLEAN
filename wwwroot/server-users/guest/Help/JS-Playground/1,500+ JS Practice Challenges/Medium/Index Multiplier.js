/*


Index Multiplier
Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.

Examples
indexMultiplier([1, 2, 3, 4, 5]) ➞ 40
// (1*0 + 2*1 + 3*2 + 4*3 + 5*4)

indexMultiplier([-3, 0, 8, -6]) ➞ -2
// (-3*0 + 0*1 + 8*2 + -6*3)
Notes
All items in the array will be integers.


*/






/*  Solution 1   */


function indexMultiplier(arr) {
    var products = [];
    for (var i = 0; i < arr.length; i++) {
        products.push(arr[i] * i);
    }
    return products.reduce((total, a) => total + a, 0);
}


/*  Solution 2   */

const indexMultiplier = arr => arr.reduce((a, v, i) => a + v * i, 0);

const indexMultiplier = a => a.reduce((a, b, c) => a + (b * c), 0)

const indexMultiplier = arr => arr.reduce((sum, value, index) => sum + index * value, 0)

const indexMultiplier = arr => arr.map((e, i) => e * i).reduce((acc, next) => acc + next, 0)

const indexMultiplier = arr => arr.map((x, i) => x * i)
    .reduce((acc, val) => acc + val, 0);

/*  Solution 3   */


function indexMultiplier(arr) {
    return arr.reduce((ac, v, i) => ac + v * i, 0)
}



/*  Solution 4   */



function indexMultiplier(arr) {
    var r = 0;
    for (var i in arr) {
        r += i * arr[i];
    }
    return r;
}



function indexMultiplier(arr) {
    var arr2 = 0
    for (var i = 0; i < arr.length; i++) {
        var a = arr[i]
        arr2 += a * i
    }
    return arr2

}