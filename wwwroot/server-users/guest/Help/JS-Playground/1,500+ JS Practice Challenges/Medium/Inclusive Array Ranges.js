/*

Inclusive Array Ranges

Write a function that, given the start startNum and end endNum values, return an array containing all the numbers inclusive to that range. See examples below.

Examples
inclusiveArray(1, 5) ➞ [1, 2, 3, 4, 5]

inclusiveArray(2, 8) ➞ [2, 3, 4, 5, 6, 7, 8]

inclusiveArray(10, 20) ➞ [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

inclusiveArray(17, 5) ➞ [17]

Notes
The numbers in the array are sorted in ascending order.
If startNum is greater than endNum, return an array with the higher value. See example #4.
A recursive version of this of challenge can be found in here.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const inclusiveArray = (s, e) => s > e ? [s] : Array.from({ length: e - s + 1 }, () => s++)





//#############################################################
//#  SOLUTION 2  
//#############################################################


inclusiveArray = (startNum, endNum) => startNum >= endNum ? [startNum] : [startNum].concat(inclusiveArray(startNum + 1, endNum))





//#############################################################
//#  SOLUTION 3
//#############################################################



const inclusiveArray = (a, z) => a > z ? [a] : new Array(z - a + 1).fill().map((x, i) => a + i)




//#############################################################
//#  SOLUTION 4
//#############################################################


inclusiveArray = (startNum, endNum) => startNum >= endNum ? [startNum] : [startNum].concat(inclusiveArray(startNum + 1, endNum))




//#############################################################
//#  SOLUTION 5
//#############################################################



const inclusiveArray = (s, e) => s < e ? Array.from({ length: e - s + 1 }, (_, i) => i + s) : [s]




//#############################################################
//#  SOLUTION 6
//#############################################################



const inclusiveArray = (startNum, endNum) =>
    startNum >= endNum ? [startNum] :
    Array(endNum - startNum + 1)
    .fill()
    .map((a, i) => startNum + i)