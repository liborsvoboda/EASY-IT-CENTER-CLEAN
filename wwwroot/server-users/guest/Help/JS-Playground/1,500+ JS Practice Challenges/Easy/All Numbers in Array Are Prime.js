/*  

All Numbers in Array Are Prime

Create a function thats takes an array of integers and returns true if every number is prime. Otherwise, return false.

Examples
allPrime([7, 5, 2, 4, 6]) ➞ false

allPrime([2, 3, 5, 7, 13, 17, 19, 23, 29]) ➞ true

allPrime([1, 5, 3]) ➞ false

Notes
1 is not a prime number.


*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#############################################################
//#    SOLUTION 1
//#############################################################


const allPrime = arr => arr.every(num => num !== 1 && [...Array(num).keys()].slice(2).every(n => num % n));

const allPrime = n => n.every(a => !'1'.repeat(a).match(/^1?$|^(11+?)\1+$/));




//#############################################################
//#    SOLUTION 2
//#############################################################


const primeCache = new Set();
const isPrime = n => {
    if (primeCache.has(n)) return true;
    if (n < 2) return false;

    const max = Math.sqrt(n);
    for (let i = 2; i <= max; i++) {
        if (!(n % i)) return false;
    }

    primeCache.add(n);
    return true;
};

const allPrime = nums => nums.every(isPrime);





//#############################################################
//#    SOLUTION 3
//#############################################################


function allPrime(nums) {
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == 1) return false;
        for (var j = 2; j < nums[i]; j++) {
            if (nums[i] % j == 0) return false;
        }
    }
    return true;
}


//#############################################################
//#    SOLUTION 4
//#############################################################


const isPrime = (num) =>
    num > 1 && [...Array(num).keys()].slice(2).every((n) => num % n);

const allPrime = (nums) => nums.every(isPrime);




//#############################################################
//#    SOLUTION 5
//#############################################################

function allPrime(nums) {
    return nums.every(el => (el % 2 != 0 && el % 3 != 0 && el != 1) || el == 2 || el == 3)
}



//#############################################################
//#    SOLUTION 6
//#############################################################


function allPrime(nums) {
    let arr = []
    for (let i = 2; i < Math.max(...nums); i++) {
        arr.push(nums.filter(n => n % i === 0))
    }
    return arr.length !== nums.length
}






//#############################################################
//#    SOLUTION 7
//#############################################################


function allPrime(nums) {
    return nums.includes(1) ? false :
        nums.every(x => Array.from({ length: x }, (_, i) => i).slice(2).every(d => x % d))
}






//#############################################################
//#    SOLUTION 8
//#############################################################



function allPrime(n) {
    const primeArr = n.filter(x => x === 1 ? false : x === 2 ? true : x % 2 === 0 ? false : true)
    return primeArr.length === n.length;
}


//#############################################################
//#    SOLUTION 9
//#############################################################


const isPrime = num => {
    for (let i = 2; i < num; i += 1)
        if (num % i === 0) return false;
    return num > 1;
};

const allPrime = nums => nums.every(isPrime);