/*

GCD of Two Numbers

Write a function that returns the greatest common divisor (GCD) of two integers.

Examples
gcd(32, 8) ➞ 8

gcd(8, 12) ➞ 4

gcd(17, 13) ➞ 1

Notes
Both values will be positive.
The GCD is the largest factor that divides both numbers.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################



const gcd = (n1, n2) => !n2 ? n1 : gcd(n2, n1 % n2)







//#############################################################
//#  SOLUTION 2  
//#############################################################



function gcd(n1, n2) {
    let gcd = 0;
    for (let i = 0; i <= n1 && i <= n2; i++) {
        if (n1 % i == 0 && n2 % i == 0) {
            gcd = i;
        }
    }
    return gcd;
}






//#############################################################
//#  SOLUTION 3
//#############################################################



if (!Math.gcd) {
    Math.gcd = function(x, y) {
        var r;
        while ((r = x % y) != 0) {
            x = y;
            y = r;
        }
        return y;
    };
}

function gcd(n1, n2) {
    return Math.gcd(n1, n2);
}








//#############################################################
//#  SOLUTION 4
//#############################################################


function gcd(n1, n2) {
    let x = n1
    let y = n2
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
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



function gcd(n1, n2) {
    var a = Math.max(...[n1, n2]);
    var b = Math.min(...[n1, n2]);
    var r = a % b;
    while (a % b) {
        a = b;
        b = r;
        r = a % b;
    }
    return b
}







//#############################################################
//#  SOLUTION 6
//#############################################################



function gcd(n1, n2) {
    const n1Divisors = [];
    const n2Divisors = [];
    for (let i = 1; i <= n1; i++) {
        if (n1 % i === 0) {
            n1Divisors.push(i);
        }
    }
    for (let i = 1; i <= n2; i++) {
        if (n2 % i === 0) {
            n2Divisors.push(i);
        }
    }
    const commonDivisors = n1Divisors.filter(x => n2Divisors.includes(x));
    return Math.max(...commonDivisors);
}






//#############################################################
//#  SOLUTION 7
//#############################################################



function gcd(n1, n2) {

    n1Arr = [];
    n2Arr = [];

    for (i = 0; i <= n1; i++) {
        for (j = 0; j <= n1; j++) {
            if (i * j === n1) {
                n1Arr.push(i, j);
            }
        }
    }

    for (i = 0; i <= n2; i++) {
        for (j = 0; j <= n2; j++) {
            if (i * j === n2) {
                n2Arr.push(i, j);
            }
        }
    }

    let res1 = Array.from(new Set(n1Arr)).sort((a, b) => a - b);
    let res2 = Array.from(new Set(n2Arr)).sort((a, b) => a - b);

    let filtered = res1.filter((elem) => res2.includes(elem));

    return filtered[filtered.length - 1];
}







//#############################################################
//#  SOLUTION 8
//#############################################################


function gcd(n1, n2) {
    var arr = []
    for (var i = 1; i < Math.min(n1, n2) + 1; i++) {
        n1 % i == 0 && n2 % i == 0 ? arr.push(i) : null
    }
    return Math.max(...arr)
}