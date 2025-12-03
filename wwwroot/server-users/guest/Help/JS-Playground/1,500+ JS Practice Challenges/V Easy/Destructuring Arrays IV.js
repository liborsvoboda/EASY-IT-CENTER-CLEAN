



/*


ES6: Destructuring Arrays IV
There is an easy way to assign to array values to the nth index by using the Rest element.

var [head, tail] = [1, 2, 3, 4]

console.log(head) // outputs  1
console.log(tail) // outputs 2
But how could I make tail = [2, 3, 4] instead of tail = 2?

Notes
Check the Resources tab for more examples.


*/






/*  Solution 1   */

const str = `[head, ...tail] = [1, 2, 3, 4]`


const str = `[head, ...tail] = [1, 2, 3, 4]`;


/*  Solution 2   */

// Change the string so that it will evaluate to head = 1 and tail = [2, 3, 4] 
// Use the Rest element
const str = '[head, ...tail] = [1, 2, 3, 4]'





/*  Solution 3   */