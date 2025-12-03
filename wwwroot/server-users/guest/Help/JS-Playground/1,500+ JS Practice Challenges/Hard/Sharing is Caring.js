/*

Sharing is Caring
Given an array of numbers, create a function that removes 25% from every number in the array except the smallest number, and adds the total amount removed to the smallest number.

Examples
showTheLove([4, 1, 4]) ➞ [3, 3, 3]

showTheLove([16, 10, 8]) ➞ [12, 7.5, 14.5]

showTheLove([2, 100]) ➞ [27, 75]

Notes
There will only be one smallest number in a given array.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const showTheLove = arr => (
    min = Math.min(...arr),
    minPlus = arr.reduce((acc, num) => acc + (num === min ? 0 : 0.25 * num), 0),
    arr.map(num => num === min ? num + minPlus : 0.75 * num)
);



//#############################################################
//#  SOLUTION 2  
//#############################################################


const showTheLove = (arr) =>
    arr.map(e => e == Math.min(...arr) ?
        e + arr.filter(a => a != e).reduce((a, b) => a + (b * .25), 0) :
        e - (e * .25));



//#############################################################
//#  SOLUTION 3
//#############################################################


function showTheLove(arr) {
    let index = arr.indexOf(Math.min(...arr))
    let value = arr.map(value => value * 0.25).reduce((a, b) => a + b) + arr[index] * 0.75
    return arr.map(value => value * 0.75).fill(value, index, index + 1)

}


//#############################################################
//#  SOLUTION 4
//#############################################################


function showTheLove(arr) {
    let m = Math.min(...arr);
    let t = 0;
    return arr.map(x => {
        if (x == m) {
            return x;
        } else {
            t += (x / 4);
            return x *= 3 / 4;
        }
    }).map(x => x == m ? t + x : x);
}