/*

Is There an Upward Trend?

Create a function that determines if there is an upward trend.

Examples
upwardTrend([1, 2, 3, 4]) ➞ true

upwardTrend([1, 2, 6, 5, 7, 8]) ➞ false

upwardTrend([1, 2, 3, "4"]) ➞ "Strings not permitted!"

upwardTrend([1, 2, 3, 6, 7]) ➞ true

Notes
If there is a string element in the array, return "Strings not permitted!".
The numbers don't have to be consecutive (e.g. [1, 3, 5] should still return true).
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


const upwardTrend = arr =>
    arr.some(x => typeof x === "string") ? "Strings not permitted!" :
    arr.slice(1).every((x, i) => x > arr[i]);



//#############################################################
//#  SOLUTION 2  
//#############################################################


function upwardTrend(arr) {
    return arr.some(x => typeof x == 'string') ? 'Strings not permitted!' : arr.toString() == arr.sort((a, b) => a - b).toString()
}



//#############################################################
//#  SOLUTION 3
//#############################################################


const upwardTrend = arr =>
    arr.some(x => x === `` + x) ? `Strings not permitted!` :
    arr.slice(1).every((n, i) => n > arr[i]);



//#############################################################
//#  SOLUTION 4
//#############################################################


function upwardTrend(arr) {
    if (arr.some(function(i) { return typeof i === "string" })) return "Strings not permitted!";
    else return arr.every((e, i, a) => i > 0 ? e > a[i - 1] : true)
}



//#############################################################
//#  SOLUTION 5
//#############################################################


function upwardTrend(arr) {
    if (arr.some(v => typeof v === "string")) return "Strings not permitted!";
    return arr.every((v, i) => i === 0 || arr[i - 1] < v);
}



//#############################################################
//#  SOLUTION 6
//#############################################################


const upwardTrend = arr =>
    (typeof(arr.reduce((x, y) => x + y)) == 'string') ? "Strings not permitted!" :
    arr.filter((e, i) => (e - arr[i - 1] > 0)).length + 1 == arr.length






//#############################################################
//#  SOLUTION 7
//#############################################################


const upwardTrend = arr =>
    arr.some(num => typeof num === 'string') ?
    'Strings not permitted!' : [...arr]
    .sort((a, b) => a - b)
    .every((num, i) => num === arr[i])







//#############################################################
//#  SOLUTION 8
//#############################################################



function upwardTrend(arr) {
    return arr.some(c => typeof c === 'string') ?
        'Strings not permitted!' :
        arr.every((c, i, a) => !i ? true : c > a[i - 1])
}




//#############################################################
//#  SOLUTION 9
//#############################################################


function upwardTrend(arr) {
    return arr.some(e => typeof e == 'string') ? "Strings not permitted!" : arr.every((a, i, ar) => i == arr.length - 1 ? true : a < ar[i + 1]);
}