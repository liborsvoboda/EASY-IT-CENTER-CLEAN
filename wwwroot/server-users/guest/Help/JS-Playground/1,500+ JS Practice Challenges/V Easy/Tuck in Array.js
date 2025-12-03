/*



Tuck in Array
Create a function that takes two arrays and insert the second array in the middle of the first array.

Examples
tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]

tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]
Notes
The first array always have two elements.
Use the spread syntax to solve this challenge.

*/






/*  Solution 1   */


function tuckIn(arr1, arr2) {
    return [arr1[0], ...arr2, arr1[1]]
}


/*  Solution 2   */

const tuckIn = (arr1, arr2) => [arr1[0], ...arr2, arr1[1]];


const tuckIn = (arr1, arr2) => [arr1.shift(), ...arr2, arr1.pop()];

const tuckIn = (arr1, arr2) => [arr1[0], ...arr2, arr1[1]]

/*  Solution 3   */


function tuckIn(arr1, arr2) {
    arr2.push(arr1[1]);
    arr2.unshift(arr1[0]);
    return arr2;
}


function tuckIn(arr1, arr2) {
    return [...arr1.slice(0, Math.floor(arr1.length / 2)), ...arr2, ...arr1.slice(Math.ceil(arr1.length / 2))]
}