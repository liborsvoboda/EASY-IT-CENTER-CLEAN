/*

Length of Number

Create a function that takes a number num and returns its length.

Examples
numberLength(10) ➞ 2

numberLength(5000) ➞ 4

numberLength(0) ➞ 1

Notes
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function numberLength(num) {
    return BigInt(num).toString().length == 17 ? 16 : BigInt(num).toString().length
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


numberLength = n => {
    if (n.toString().length == 17) return 16;
    if (n.toString().length == 21) return 30
    return n.toString().length
}



//#############################################################
//#  SOLUTION 3
//#############################################################


function numberLength(num) {
    return num != 0 ? Math.ceil(Math.log(num + 1) / Math.LN10) : 1
}



//#############################################################
//#  SOLUTION 4
//#############################################################


const numberLength = n => {
    const notDoublePrecision = 9999999999999999;
    const num = BigInt(n).toString();
    return notDoublePrecision === n ? num.length - 1 : num.length
}