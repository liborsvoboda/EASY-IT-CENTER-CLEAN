/*

Power of Two

Write a function that returns true if an integer is a power of 2, and false otherwise.

Examples
powerOfTwo(32) ➞ true

powerOfTwo(1) ➞ true

powerOfTwo(-7) ➞ false

powerOfTwo(18) ➞ false


*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 

function powerOfTwo(num) {
    return Number.isInteger(Math.log2(num));
}


//#  SOLUTION 2  

const powerOfTwo = num => num !== 0 && !(num & (num - 1));

const powerOfTwo = n => ~~(Math.log2(n)) == Math.log2(n);

let powerOfTwo = (num) => num == 1 ? true : num == 0 ? false : num % 2 == 0 ? powerOfTwo(num / 2) : false


//#  SOLUTION 3

function powerOfTwo(num) {
    if (num < 0) return false;
    if (num === 0) return true;
    for (let i = 0; Math.pow(2, i) <= num; i++) {
        if (Math.pow(2, i) === num) return true
    }
    return false;
}


//#  SOLUTION 4


function powerOfTwo(num) {
    if (num === 1 || num === 0) {
        return true;
    }
    while (num >= 1) {
        num /= 2;
        if (num === 2 || num === 1) {
            return true;
        }
    }
    return false;
}



//#  SOLUTION 5


function powerOfTwo(num) {
    if (num == 1) {
        return true
    }
    for (let i = 2; i <= num; i *= 2) {
        if (i == num) {
            return true
        }
    }
    return false
}