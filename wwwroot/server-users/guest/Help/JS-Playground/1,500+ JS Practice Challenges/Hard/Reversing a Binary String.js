/*

Reversing a Binary String

Write a function that takes an integer n, reverses the binary representation of that integer, and returns the new integer from the reversed binary.

Examples
reversedBinaryInteger(10) ➞ 5
// 10 = 1010 -> 0101 = 5

reversedBinaryInteger(12) ➞ 3
// 12 = 1100 -> 0011 = 3

reversedBinaryInteger(25) ➞ 19
// 25 = 11001 -> 10011 = 19

reversedBinaryInteger(45) ➞ 45
// 45 = 101101 -> 101101 = 45


Notes
All values of n will be positive.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const reversedBinaryInteger = n => parseInt([...n.toString(2)].reverse().join(''), 2)



//#############################################################
//#  SOLUTION 2  
//#############################################################


const reversedBinaryInteger = (num) => {
    let bin = (num).toString(2);
    let revBin = [...bin].reverse().join('');
    return parseInt(revBin, 2);
}


//#############################################################
//#  SOLUTION 3
//#############################################################


reversedBinaryInteger = n => parseInt([...(n >>> 0).toString(2)].reverse().join ``, 2)


//#############################################################
//#  SOLUTION 4
//#############################################################


function reversedBinaryInteger(num) {
    return parseInt(num
        .toString(2)
        .split("")
        .reverse()
        .join(""), 2);
}