



/*

ES6: Destructuring Arrays I
You can assign variables from arrays like this:

const arr = [1, 2, 3, 4, 5, 6]
let a = arr[0]
let b = arr[1]

console.log(a) // outputs 1
console.log(b) // outputs 2
With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the given array using the ES6 destructuring assignment syntax (check the Resources tab for more examples), where a === 1 and b === 2.

Notes



*/






/*  Solution 1   */


const arr = [1, 2, 3, 4, 5, 6]
let [a, b] = arr


/*  Solution 2   */

const arr = [1, 2, 3, 4, 5, 6]
const [a,b,...rest] = arr;

// Create variables a and b from the given array using es6 array destructuring,
// where a === 1 and b === 2




/*  Solution 3   */


const arr = [1, 2, 3, 4, 5, 6]
let [a,b,c,d,e,f] = arr



const arr = [1, 2, 3, 4, 5, 6]
let a = arr[0];
let b = arr[1];

return a;
return b;