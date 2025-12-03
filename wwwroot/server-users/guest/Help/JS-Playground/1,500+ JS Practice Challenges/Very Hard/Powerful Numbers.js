/*  

Powerful Numbers

Given a positive number x:

p = (p1, p2, …)
// Set of *prime* factors of x
If the square of every item in p is also a factor of x, then x is said to be a powerful number.

Create a function that takes a number and returns true if it's powerful, false if it's not.

Examples
isPowerful(36) ➞ true
// p = (2, 3) (prime factors of 36)
// 2^2 = 4 (factor of 36)
// 3^2 = 9 (factor of 36)

isPowerful(27) ➞ true

isPowerful(674) ➞ false

*/






//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


function isPowerful(num) {

    let num1 = num;
    let factors = [];

    for (let i = 2; i <= num1; i++) {
        while ((num1 % i) === 0) {
            factors.push(i);
            num1 /= i;
        }
    }

    return Array.from(new Set(factors)).every(x => num % (x * x) === 0);

}





//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


const numericPrime = (number) => {
    if (number <= 1) return false;
    if (number === 2) return true;
    for (let d = 2; d < number; d += 1) { if (number % d === 0) return false; }
    return true;
}

const primeFactorsOf = (number) => {
    let pfactors = [];
    for (let f = 2; f < number; f++) {
        if (numericPrime(f) && number % f === 0) pfactors.push(f);
    }
    return pfactors.every(factor => number % (factor ** 2) === 0);
}

const isPowerful = (number) => {
    return primeFactorsOf(number);
}




//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################



const isPowerful = (num) => {
    const factors = (num) => {
        var result = [];
        for (let i = 2; i < num; i++)
            if (!(num % i)) result.push(i);
        return result;
    }
    const isPrime = (num) => {
        for (let i = 2; i < num; i++)
            if (!(num % i)) return false;
        return num > 1;
    }
    const primeFactors = (num) => factors(num).filter(isPrime);
    return primeFactors(num).map(x => x ** 2).every(squared => factors(num).includes(squared))
}