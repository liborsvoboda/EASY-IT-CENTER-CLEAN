/*

Combinatorial Exploration

Given a known number of unique items, how many ways could we arrange them in a row?

Create a function that takes an integer n and returns the number of digits of the number of possible permutations for n unique items. For instance, 5 unique items could be arranged in 120 unique ways. 120 has 3 digits, hence the integer 3 is returned.

Examples
noPermsDigits(0) ➞ 1

noPermsDigits(1) ➞ 1

noPermsDigits(5) ➞ 3

noPermsDigits(8) ➞ 5


Notes
This challenge requires some understanding of combinatorics.
*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


function noPermsDigits(num) {
    let result = BigInt(num);
    if (num === 0 || num === 1)
        return 1;
    while (num > 1) {
        num--;
        result *= BigInt(num);
    }
    return result.toString().length;
}



//#############################################################
//#  SOLUTION 2  
//#############################################################



const factorial = n => BigInt(!n) || n * factorial(--n);
const noPermsDigits = n => String(factorial(BigInt(n))).length;



//#############################################################
//#  SOLUTION 3
//#############################################################


function noPermsDigits(n) {
    const fac = n => n < 1 ? BigInt(1) : BigInt(n) * fac(n - 1);
    return ("" + fac(n)).length;
}



//#############################################################
//#  SOLUTION 4
//#############################################################


const fact = n => BigInt(n) < BigInt(2) ? BigInt(n) : BigInt(n) * fact(BigInt(n) - BigInt(1));

const noPermsDigits = n => String(fact(n)).length;