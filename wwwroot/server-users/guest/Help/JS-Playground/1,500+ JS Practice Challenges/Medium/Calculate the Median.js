/*

Calculate the Median

Create a function that takes an array of numbers and return its median. If the input array is even length, take the average of the two medians, else, take the single median.

Examples
median([2, 5, 6, 2, 6, 3, 4]) ➞ 4

median([21.4323, 432.54, 432.3, 542.4567]) ➞ 432.4

median([-23, -43, -29, -53, -67]) ➞ -43


Notes
Input can be any negative or positive number.
Input array will contain at least four numbers.
See Resources tab for info on calculating the median.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


const median = arr => {
    arr.sort((a, b) => a - b);
    return (arr[(arr.length - 1) >> 1] + arr[arr.length >> 1]) / 2
}



//#############################################################
//#  SOLUTION 2  
//#############################################################



function median(arr) {
    arr = arr.sort((a, b) => a - b)
    var middleIndex = Math.floor(arr.length / 2);
    return arr.length % 2 == 1 ?
        arr[middleIndex] : (arr[middleIndex - 1] + arr[middleIndex]) / 2
}



//#############################################################
//#  SOLUTION 3
//#############################################################


function median(arr) {
    var N = arr.length;
    arr.sort((a, b) => a - b)
    return N % 2 === 0 ? (arr[Math.floor(N / 2)] + arr[Math.floor(N / 2) - 1]) / 2 : arr[Math.floor(N / 2)];
}



//#############################################################
//#  SOLUTION 4
//#############################################################



function median(arr) {
    var sorted = arr.sort(function(a, b) { return a - b; });
    var idx = Math.round(arr.length / 2) - 1;
    return (arr.length % 2 !== 0) ? sorted[idx] : (sorted[idx] + sorted[idx + 1]) / 2;
}



//#############################################################
//#  SOLUTION 5
//#############################################################


function median(arr) {

    arr.sort((a, b) => a - b);
    let median = (arr[(arr.length - 1) >> 1] + arr[arr.length >> 1]) / 2;
    return median;
}






//#############################################################
//#  SOLUTION 6
//#############################################################


function median(arr) {
    const len = arr.length;
    const a = arr.slice().sort((x, y) => x - y);
    const mid = len >> 1;
    return (len & 1) ? a[mid] : ((a[mid] + a[mid - 1]) / 2);
}