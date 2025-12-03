



/*

ES6: Destructuring Arrays II
You can assign variables from nested arrays like this:

const arr = ["cars", "planes", ["trains", ["motorcycles"]]]

let trans1 = arr[0]
let trans2 = arr[1]
let trans3 = arr[2][0]
let trans4 = arr[2][1][0]

console.log(trans1) // outputs "cars"
console.log(trans2) // outputs "planes"
console.log(trans3) // outputs "trains"
console.log(trans4) // outputs "motorcycles"
With ES6, you can assign variables from arrays in a much more succint way.

Notes
Check the Resources tab for more examples.



*/






/*  Solution 1   */

const arr = ["cars", "planes", ["trains", ["motorcycles"]]]

// Fix the following using es6 destructuring
// Only edit what's inside of [ trans1, trans2, trans3, trans4 ]
let [ trans1, trans2, trans3, trans4 ] = arr.flat(Infinity)

/* 
console.log(trans1) // should output "cars"
console.log(trans2) // should output "planes"
console.log(trans3) // should output "trains"
console.log(trans4) // should output "motorcycles"
*/



/*  Solution 2   */


const arr = ["cars", "planes", ["trains", ["motorcycles"]]]
let [ trans1, trans2, [trans3, [trans4]] ] = arr




/*  Solution 3   */

const arr = ["cars", "planes", ["trains", ["motorcycles"]]];
let [trans1, trans2, [trans3, [trans4]]] = arr;