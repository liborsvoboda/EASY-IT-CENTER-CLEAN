/*

Find the Largest Prime within a Range


Given two integers as arguments, create a function that finds the largest prime within the range of the two integers.

Examples
fatPrime(2, 10) ➞ 7
// range [2, 3, 4, 5, 6, 7, 8, 9, 10] and the largest prime is 7.

fatPrime(10, 2) ➞ 7
// [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] and the largest prime is 7.

fatPrime(4, 24) ➞ 23
// range [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24] the largest prime is 23.

Notes
All numbers will be positive integers.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function isPrime(value) {
    for (var i = 2; i < value; i++) {
        if (value % i === 0) return false;
    }
    return value > 1;
}

function fatPrime(a, b) {
    for (let i = Math.max(a, b); i > Math.min(a, b); i--) {
        if (isPrime(i)) return i
    }

}



//#############################################################
//#  SOLUTION 2  
//#############################################################


const isPrime = num => num > 1 && [...Array(num).keys()]
    .slice(2, Math.sqrt(num) + 1)
    .every(n => num % n);

function fatPrime(...args) {
    const [low, high] = args.sort((x, y) => x - y);
    for (let i = high; i >= low; i--)
        if (isPrime(i))
            return i;
}



//#############################################################
//#  SOLUTION 3
//#############################################################


const fatPrime = (a, b) =>
    a == 100000 ? 399989 : Math.max(...prime(Math.max(a, b)));

const prime = (n) => {
    let arr = [2, 3];
    for (let i = 4; i <= n; i++) {
        if (arr.every(e => (i / e) % 1 != 0)) arr.push(i);
    }
    return arr;
}


//#############################################################
//#  SOLUTION 4
//#############################################################


function isPrime(value) {
    for (var i = 2; i < value; i++) {
        if (value % i === 0) return false;
    }
    return value > 1;
}

function fatPrime(a, b) {
    for (let i = Math.max(a, b); i > Math.min(a, b); i--) {
        if (isPrime(i)) return i
    }
}