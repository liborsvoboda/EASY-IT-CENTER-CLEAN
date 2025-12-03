/*

Calculate the Mean
Create a function that takes an array of numbers and returns the mean value.

Examples
mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3]) ➞ 2.55

mean([2, 3, 2, 3]) ➞ 2.50

mean([3, 3, 3, 3, 3]) ➞ 3.00
Notes
Round to two decimal places.
You can expect a number ranging from 0 to 10,000.

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################


/*  Solution 1   */

function mean(arr) {
    return Number((arr.reduce((a, b) => a + b) / arr.length).toFixed(2));
}


/*  Solution 2   */

function mean(arr) {
    return parseFloat((arr.reduce((acc, el) => acc + el) / arr.length).toFixed(2));
}




function mean(arr) {
    const sum = arr.reduce((x, total) => x + total)
    return parseFloat((sum / arr.length).toFixed(2))
}





function mean(arr) {
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return parseFloat((sum / arr.length).toFixed(2))
}





/*  Solution 3   */


function mean(arr) {
    const sum = arr.reduce((acc, val) => acc + val, 0)
    const total = arr.length

    return +(sum / total).toFixed(2)
}




function mean(arr) {
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += parseFloat(arr[i]);
    }
    var result = Math.round(sum / arr.length * 100) / 100;

    return result;
}