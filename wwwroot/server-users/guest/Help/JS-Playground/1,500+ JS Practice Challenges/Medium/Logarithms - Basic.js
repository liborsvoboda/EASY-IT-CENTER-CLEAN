/*

Logarithms - Basic

A logarithm is kind of like reverse exponents. There is a base and a number in a logarithm. The point of a logarithm is to find out what power you have to raise the base to get the number next to the base. For example:

log base 5 of 25 = x
This is the same thing as saying 5 to the xth power is 25, which is 2 (so x would be 2). Using this example, your function must take the 5 and 25 and somehow get 2.

Examples
logarithm(5, 25) ➞ 2

logarithm(2, 64) ➞ 6

logarithm(2, 4) ➞ 2


Notes
All inputs and their associated outputs are integers.
Return "Invalid" for inputs outside of domain.
*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


function logarithm(base, num) {
    const log = Math.log(num) / Math.log(base)
    return log && Number.isInteger(log) ? log : 'Invalid'
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function logarithm(base, num) {
    if (base <= 1 || num <= 1) return "Invalid"
    return Math.log(num) / Math.log(base);
}



//#############################################################
//#  SOLUTION 3
//#############################################################


const logarithm = (b, n) => (
    (n > 0 && b > 0 && b !== 1) ? (Math.log(n) / Math.log(b)) : 'Invalid'
);



//#############################################################
//#  SOLUTION 4
//#############################################################



function logarithm(base, num) {
    return base > 1 && num > 1 ? Math.log(num) / Math.log(base) : "Invalid"
}



//#############################################################
//#  SOLUTION 5
//#############################################################


const logarithm = (x, y) => x < 2 || y < 2 ? 'Invalid' : Math.log(y) / Math.log(x)



const logarithm = (base, num) => [base, num].every(el => el > 1) ? Math.log(num) / Math.log(base) : 'Invalid';



const logarithm = (base, num) => num <= 1 || base <= 1 ? 'Invalid' :
    Math.log(num) / Math.log(base);




const logarithm = (base, num) => {
    let n = 0;
    if (base > 1)
        while (num >= base) {
            num /= base;
            n++;
        }
    return !n ? 'Invalid' : n;
}