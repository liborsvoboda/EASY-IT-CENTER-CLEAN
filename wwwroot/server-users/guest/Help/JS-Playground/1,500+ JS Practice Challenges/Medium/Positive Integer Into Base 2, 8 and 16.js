/*

Positive Integer Into Base 2, 8 and 16

Create a function that takes a positive integer number (one of base2, base8, or base16) and converts the integer into the given base and returns a string using recursion.

Examples
integerToString(10 , 2) ➞ "1010"
// Base = 2

integerToString(1642 , 8) ➞ "3152"
// Base = 8

integerToString(212 , 16) ➞ "d4"
// Base = 16


Notes
Input is a positive integer and base = 2, 8, or 16.
Please use recursion to solve this.
*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


function dth(n, b) {
    if (b === 16 && n >= 10) return 'abcdef' [n - 10];
    return `${n}`;
}

function integerToString(n, b) {
    if (n < b) return dth(n, b);
    return integerToString(Math.floor(n / b), b) + dth(n % b, b);
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


integerToString = (n, b) =>
    n == 0 ? "" :
    integerToString(Math.floor(n / b), b) +
    (n % b > 9 ? String.fromCharCode(n % b + 87) : n % b)


//#############################################################
//#  SOLUTION 3
//#############################################################


const convert = (n, b) => {
    if (n < b) return n
    else return `${convert(Math.floor(n/b), b)}${n % b}`
}
const hexConvert = (n, b) => {
    const obj = {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: 'a',
        11: 'b',
        12: 'c',
        13: 'd',
        14: 'e',
        15: 'f',
        16: '10'
    }

    if (n < 10) return n
    else if (n >= 10 && n <= 16) return obj[n]
    else return `${hexConvert(Math.floor(n/b), b)}${obj[n % b]}`
}

function integerToString(number, base) {
    if (base === 2 || base === 8) {
        return convert(number, base)
    }
    if (base === 16) {
        return hexConvert(number, base)
    }
}



//#############################################################
//#  SOLUTION 4
//#############################################################


const integerToString = (n, b) => {
    const v = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    return n >= b ? integerToString((n - (n % b)) / b, b) + v[n % b] : v[n];
};


//#############################################################
//#  SOLUTION 5
//#############################################################


function integerToString_helper(number, base, res = []) {
    if (number < base) {
        res.push(number.toString())
        return res
    } else {
        res.push((number % base).toString())
        return integerToString_helper(Math.floor(number / base), base, res)
    }
}

function integerToString(number, base) {
    if (base === 2 || base === 8) {
        return integerToString_helper(number, base, res = []).reverse().join("")
    } else if (base === 16) {
        let a = integerToString_helper(number, base, res = [])
        let c = []
        a.forEach((b => {
            if (Number(b) >= 10) {
                let obj = { 10: "a", 11: "b", 12: "c", 13: "d", 14: "e", 15: "f" }
                c.push(obj[b])
            } else {
                c.push(b)
            }
        }))
        return c.reverse().join("")
    }
}



//#############################################################
//#  SOLUTION 6
//#############################################################


function integerToString(num, base) {
    if (num === 0) return '';
    let d = num % base;
    if (d > 9) {
        d = String.fromCharCode(d + 87);
    }
    return String(integerToString(Math.floor(num / base), base)) + String(d);
}