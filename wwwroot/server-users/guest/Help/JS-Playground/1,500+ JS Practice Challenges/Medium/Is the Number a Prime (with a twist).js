/*

Is the Number a Prime? (with a twist)
Write a function that takes a number and returns true if it's a prime; false otherwise. The number can be 2^64-1 (2 to the power of 63, not XOR). With the standard technique it would be O(2^64-1), which is much too large for the 10 second time limit imposed by Edabit.

Sieve of Eratosthenes

Examples
prime(7) ➞ true

prime(56963) ➞ true

prime(5151512515524) ➞ false

Notes
A "prime" number is a number that can only be divided by itself and 1 (upon division the result is a whole number).

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function prime(x) {
    for (let i = 3; i < Math.sqrt(x) + 1; i += 2)
        if (!(x % i))
            return false;
    return true;
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function prime(num) {
    if (num < 2 || num % 2 === 0) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function prime(x) {
    for (let i = 2; i < Math.sqrt(x); i++) { if (x % i == 0) { return false } }
    return true
}


//#############################################################
//#  SOLUTION 4
//#############################################################


const prime = x => {
    let max = Math.sqrt(x);
    for (i = 3; i <= max; i += 2) {
        if (x % i == 0) return false
    }
    return true
}


//#############################################################
//#  SOLUTION 5
//#############################################################


const prime = n => {
    for (var i = 2, max = Math.sqrt(n);
        (n % i) && (i <= max); i++);
    return (i > max);
};