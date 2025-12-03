/*

Check if a Number is Prime

Create a function that returns true if a number is prime, and false otherwise. A prime number is any positive integer that is evenly divisible by only two divisors: 1 and itself.

The first ten prime numbers are:

2, 3, 5, 7, 11, 13, 17, 19, 23, 29
Examples
isPrime(31) ➞ true

isPrime(18) ➞ false

isPrime(11) ➞ true

Notes

A prime number has no other factors except 1 and itself.
If a number is odd it is not divisible by an even number.
1 is not considered a prime number.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################



const isPrime = (num) => {
    return ([...Array(num + 1).keys()].filter(n => num % n === 0).length) === 2
}




//#############################################################
//#  SOLUTION 2  
//#############################################################


const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function isPrime(num) {
    var factors = [];
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            factors.push(i)
        }
    }
    return num == 1 ? false : factors.length == 0
}




//#############################################################
//#  SOLUTION 4
//#############################################################


function isPrime(num) {
    if (num === 1) {
        return false
    }
    const fill = Array(num).fill('').map((f, i) => i + 1).slice(1, num - 1)
    return fill.find(f => !(num % f)) ? false : true
}



//#############################################################
//#  SOLUTION 5
//#############################################################


function isPrime(num) {
    let prime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            prime = false;
            break;
        }
    }
    return prime && (num > 1);
}