/*

Common Divisor of Array

Write a function that returns the greatest common divisor of all array elements. If the greatest common divisor is 1, return 1.

Examples
gcd([10, 20, 40]) ➞ 10

gcd([1, 2, 3, 100]) ➞ 1

gcd([1024, 192, 2048, 512]) ➞ 64

Notes
Array elements are always greater than 0.
There is a minimum of two array elements given.

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################





//#############################################################
//#  SOLUTION 1 
//#############################################################

const gcd = arr => {
    let x = Math.min(...arr);
    while (arr.some(n => n % x)) x--;
    return x;
};




//#############################################################
//#  SOLUTION 2  
//#############################################################

const f = (a, b) => b ? f(b, a % b) : a;
const gcd = arr => arr.reduce(f);






//#############################################################
//#  SOLUTION 3
//#############################################################



const gcd = arr => {
    for (let i = Math.min(...arr); i > 1; i--) {
        if (arr.every(n => n % i === 0)) {
            return i;
        }
    }
    return 1;
}




//#############################################################
//#  SOLUTION 4
//#############################################################


function gcd(arr) {
    const min = Math.min(...arr);

    for (let i = min; i > 0; i--) {
        if (arr.every((number) => !(number % i))) return i;
    }
}




//#############################################################
//#  SOLUTION 5
//#############################################################


function gcd(arr) {
    const arr1 = []

    for (let i = 0; i < 100; i++) {
        for (let y = 0; y < arr.length; y++) {
            if (arr[y] % i === 0) {
                arr1.push(i)
            }
        }
    }

    return ([...new Set(arr1.map(x => arr1.filter(e => e === x).length == arr.length ? x : 0))]).sort((a, b) => a - b).pop()
}




//#############################################################
//#  SOLUTION 6
//#############################################################


function gcd(arr) {
    let num = Math.min(...arr);

    function denom(num, arr) {
        return arr.every(item => item % num === 0) ? num : denom(num - 1, arr);
    }
    return denom(num, arr);
}





//#############################################################
//#  SOLUTION 7
//#############################################################


function gcd(arr) {
    function gcd_more_than_two_numbers(arr) {
        if (!Array.isArray(arr)) return false;
        let len, a, b;
        len = arr.length;
        if (!len) { return null; }
        a = arr[0];
        for (let i = 1; i < len; i++) {
            b = arr[i];
            a = gcd_two_numbers(a, b);
        }
        return a;
    }

    function gcd_two_numbers(x, y) {
        if ((typeof x !== 'number') || (typeof y !== 'number')) return false;
        x = Math.abs(x);
        y = Math.abs(y);
        while (y) {
            let t = y;
            y = x % y;
            x = t;
        }
        return x;
    }
    return gcd_more_than_two_numbers(arr)
}