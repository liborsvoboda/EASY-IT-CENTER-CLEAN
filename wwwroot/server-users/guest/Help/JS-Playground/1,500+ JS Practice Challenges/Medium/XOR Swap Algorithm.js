/*

XOR Swap Algorithm

This is more informational than a challenge. You can actually switch 2 variables with the XOR operation ^. XOR works with two arguments. It turns both arguments in their binary representation, and for each bit, returns 1 if they are different, 0 otherwise.

The return value is the decimal representation of the new binary string. So, if you don't know how to do it, go play around with it! After some time on paper, you will understand what is going on, and how it works.

Your job is to switch 2 variables using the XOR operator, which means your return statement should be return[a, b], but the value stored in the variables need to be switched.

Examples
xor(10, 41) ➞ (41, 10)

xor(69, 420) ➞ (420, 69)

xor(12345, 890412) ➞ (890412, 12345)
For this challenge, avoid doing the following:
function xor(a, b) {
  return [b, a]
}
function xor(a, b) {
  const [b, a] = [a,b]
  return [a, b]
}

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


let xor = (a, b) => {
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    return [a, b];
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


xor = (a, b) => [(b ^ a) ^ a, (a ^ b) ^ b];


//#############################################################
//#  SOLUTION 3
//#############################################################


function xor(a, b) {
    a = a ^ b, b = a ^ b, a = a ^ b;
    return [a, b];
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function xor(a, b) {
    if (a !== b) {
        a ^= b;
        b ^= a;
        a ^= b;
    }
    return [a, b]
}