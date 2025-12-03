/*

Max Adjacent Product

Given an array of integers, find the pair of adjacent elements that have the largest product and return that product.

Examples
adjacentProduct([3, 6, -2, -5, 7, 3] ) ➞ 21

adjacentProduct([5, 6, -4, 2, 3, 2, -23]) ➞ 30

adjacentProduct([0, -1, 1, 24, 1, -4, 8, 10]) ➞ 80


Notes
Each array has at least two elements.
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function adjacentProduct(arr) {
    return Math.max(...arr.slice(1).map((num, i) => num * arr[i]))
}



//#############################################################
//#  SOLUTION 2  
//#############################################################



const adjacentProduct = a => a.sort((x, y) => { a = a > x * y ? a : x * y }) | a;



const adjacentProduct = arr => Math.max(...arr.slice(1).map((num, i) => num * arr[i]));



const adjacentProduct = arr => Math.max(...arr.map((e, i, a) => a[i + 1] != undefined ? e * a[i + 1] : e * a[i - 1]))




//#############################################################
//#  SOLUTION 3
//#############################################################


function adjacentProduct(arr) {
    var a = []
    for (var i = 1; i < arr.length; i++) {
        a.push(arr[i - 1] * arr[i])
    }
    return Math.max(...a)
}



//#############################################################
//#  SOLUTION 4
//#############################################################



function adjacentProduct(arr) {
    let s = -100
    arr.map((x, i, a) => (x * a[i + 1]) > s ? s = (x * a[i + 1]) : x)
    return s
}