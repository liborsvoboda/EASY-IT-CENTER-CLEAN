/*

Flatten the Curve

Given an array of integers, replace every number with the mean of all numbers.

Examples
flattenCurve([1, 2, 3, 4, 5]) ➞ [3, 3, 3, 3, 3]

flattenCurve([0, 0, 0, 2, 7, 3]) ➞ [2, 2, 2, 2, 2, 2]

flattenCurve([4]) ➞ [4]

flattenCurve([]) ➞ []

Notes
Round averages to 1 decimal point.
Return an empty array if given an empty array (see example #4).

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function flattenCurve(arr) {
    const mean = arr.reduce((sum, n) => sum + n, 0) / arr.length;
    return arr.fill(Math.round(mean * 10, 1) / 10);
}




//#############################################################
//#  SOLUTION 2  
//#############################################################



function flattenCurve(arr) {
    const result = (+arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(1)
    return arr.map(x => +`${x}`.replace(/\-?\d+/, result))
}






//#############################################################
//#  SOLUTION 3
//#############################################################


function flattenCurve(arr) {

    const reducer = (acc, cValue) => acc + cValue;

    if (arr.length == 0) return [];

    var value = Number((arr.reduce(reducer) / arr.length).toFixed(1))
    var answer = [];
    for (i = 0; i < arr.length; i++) {

        answer.push(value)

    }

    return answer;

}







//#############################################################
//#  SOLUTION 4
//#############################################################


const flattenCurve = a => (m = a.length && Number((a.reduce((t, v) => t + v) / a.length).toFixed(1)), a.map(q => m))



const flattenCurve = arr => arr.length ? arr.fill(+(arr.reduce((sum, num) => sum + num) / arr.length).toFixed(1)) : [];




const flattenCurve = arr =>
    arr.map(a => +(arr.reduce((acc, cur) => acc + cur, 0) / arr.length)
        .toFixed(1));