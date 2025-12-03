/*

GCD and LCM ( Part 1)

Create a function that takes two numbers as arguments and returns the Greatest Common Devisor (GCD) of the two numbers.

Examples
gcd(3, 5) ➞ 1

gcd(14, 28) ➞ 14

gcd(4, 18) ➞ 2

Notes
The GCD is the highest number that can divide both arguments without a remainder.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################



function gcd(a, b) {
    return b == 0 ? a : gcd(b, a % b);
};


//#############################################################
//#  SOLUTION 2  
//#############################################################



const gcd = (a, b) => (!b ? a : gcd(b, a % b));



//#############################################################
//#  SOLUTION 3
//#############################################################


function gcd(a, b) {
    let arr = [];
    let min = Math.min(a, b);
    for (var i = 1; i <= min; i++) {
        if (a % i == 0 && b % i == 0) {
            arr.push(i)
        }
    }
    return Math.max.apply([], arr)
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function gcd(a, b) {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return max % min === 0 ? min : gcd(min, max % min);
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function gcd(a, b) {
    if (b % a === 0) {
        return a;
    } else {
        var arr = [];
        for (var i = 1; i <= a; i++) {
            if (b % i === 0 && a % i === 0) {
                arr.push(i)
            }
        }
    }
    return Math.max(...arr)
}