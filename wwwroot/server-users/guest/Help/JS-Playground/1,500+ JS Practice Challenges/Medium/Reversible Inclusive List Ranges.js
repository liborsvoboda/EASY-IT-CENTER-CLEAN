/*

Reversible Inclusive List Ranges

Write a function that, given the start and end values, returns an array containing all the numbers inclusive to that range. See examples below.

Examples
reversibleInclusiveList(1, 5) ➞ [1, 2, 3, 4, 5]

reversibleInclusiveList(2, 8) ➞ [2, 3, 4, 5, 6, 7, 8]

reversibleInclusiveList(10, 20) ➞[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

reversibleInclusiveList(24, 17) ➞[24, 23, 22, 21, 20, 19, 18, 17]


Notes
The sort order of the resulting array is dependent of the input values.
All inputs provided in the test scenarios are valid.
If start is greater than end, return a descendingly sorted array, otherwise, ascendingly sorted.
A recursive version of this challenge can be found in here.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function reversibleInclusiveList(start, end) {
    const loop = end > start ? 'i <= end; i++' :
        'i >= end; i--';
    let result = [];
    eval(`for (let i = start; ${loop}) result.push(i);`)
    return result;
}



//#############################################################
//#  SOLUTION 2  
//#############################################################



function reversibleInclusiveList(s, e) {
    var ans = []
    for (let i = Math.min(s, e); i <= Math.max(s, e); i++) { ans.push(i) }
    return s > e ? ans.reverse() : ans
}



//#############################################################
//#  SOLUTION 3
//#############################################################


function reversibleInclusiveList(s, e) {
    return [...Array(Math.abs(s - e) + 1)].map((_, i) => s < e ? s + i : s - i)
}



//#############################################################
//#  SOLUTION 4
//#############################################################


const reversibleInclusiveList = (start, end) => Array.from({ length: Math.abs(end - start) + 1 }, (_, i) => start > end ? start - i : start + i);



//#############################################################
//#  SOLUTION 5
//#############################################################


function reversibleInclusiveList(start, end) {
    return Array.from({ length: Math.abs(end - start) + 1 }, _ => start > end ? start-- : start++)
}