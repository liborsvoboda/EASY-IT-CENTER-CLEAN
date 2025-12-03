/*

LCM of Two Numbers

Write a function that returns the least common multiple (LCM) of two integers.

Examples
lcm(9, 18) ➞ 18

lcm(8, 5) ➞ 40

lcm(17, 11) ➞ 187


Notes
Both values will be positive.
The LCM is the smallest integer that is divisible by both numbers such that the remainder is zero.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


const gcd = (a, b) => (!b ? a : gcd(b, a % b));

const lcm = (a, b) => a * (b / gcd(a, b));



//#############################################################
//#  SOLUTION 2  
//#############################################################



let lcm = (n1, n2) => {
    //Find the smallest and biggest number from both the numbers
    let lar = Math.max(n1, n2);
    let small = Math.min(n1, n2);

    //Loop till you find a number by adding the largest number which is divisble by the smallest number
    let i = lar;
    while (i % small !== 0) {
        i += lar;
    }

    //return the number
    return i;
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function lcm(n1, n2, num) {
    num = num ? num : n2;
    if (num % n1 == 0 && num % n2 == 0) return num;
    return lcm(n1, n2, num + 1);
}




//#############################################################
//#  SOLUTION 4
//#############################################################



function lcm(n1, n2) {
    return lcm_two_numbers(n1, n2)
}

function lcm_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
    return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
}

function gcd_two_numbers(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}




//#############################################################
//#  SOLUTION 5
//#############################################################


function lcm(n1, n2) {
    let n1PrimeDivisors = getPrimeDivisors(n1)
    let n2PrimeDivisors = getPrimeDivisors(n2)

    for (let i = 0; i < n1PrimeDivisors.length; i++) {
        let index = n2PrimeDivisors.indexOf(n1PrimeDivisors[i])
        if (index >= 0) {
            n2PrimeDivisors.splice(index, 1)
        }
    }
    return n1PrimeDivisors.reduce((acc, val) => acc * val, 1) * n2PrimeDivisors.reduce((acc, val) => acc * val, 1)
}

const getPrimeDivisors = n => {
    let divisors = []
    let divisor = 2
    while (n > 1) {
        if (n % divisor == 0) {
            n /= divisor
            divisors.push(divisor)
        } else {
            divisor++
        }
    }
    return divisors
}




//#############################################################
//#  SOLUTION 6
//#############################################################



const lcm = (x, y) => {
    if (typeof x !== "number" || typeof y !== "number") return false;
    return !x || !y ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
};

const gcd_two_numbers = (x, y) => {
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
};





//#############################################################
//#  SOLUTION 7
//#############################################################


function lcm(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
    return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
}

function gcd_two_numbers(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}





//#############################################################
//#  SOLUTION 8
//#############################################################


const lcm = (n1, n2) => {
    return Number.isInteger(n1 / n2) ? n1 : Number.isInteger(n2 / n1) ? n2 : n1 * n2;
}





//#############################################################
//#  SOLUTION 9
//#############################################################



function lcm(n1, n2) {
    let result = [];
    let prime = 2;
    while (n1 > 1 || n2 > 1) {
        if (prime % 2 != 0 || prime == 2) {
            if (n1 % prime == 0 && n2 % prime == 0) {
                result.push(prime)
                n1 = n1 / prime;
                n2 = n2 / prime;
                prime = 1;
            } else if (n1 % prime == 0) {
                result.push(prime)
                n1 = n1 / prime;
                prime = 1;
            } else if (n2 % prime == 0) {
                result.push(prime)
                n2 = n2 / prime;
                prime = 1;
            }
        }
        prime = prime + 1;
    }
    return result.reduce((a, c) => a * c);
}