/*

Factorize a Number
Create a function that takes a number as its argument and returns an array of all its factors.

Examples
factorize(12) ➞ [1, 2, 3, 4, 6, 12]

factorize(4) ➞ [1, 2, 4]

factorize(17) ➞ [1, 17]
Notes
The input integer will be positive.
A factor is a number that evenly divides into another number without leaving a remainder. The second example is a factor of 12, because 12 / 2 = 6, with remainder 0.



*/






/*  Solution 1   */


function factorize(num) {
    let factors = []
    for (i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i)
        }
    }
    return factors
}




/*  Solution 2   */

function factorize(num) {
    return new Array(num).fill().map((x, i) => i + 1).filter(n => num % n === 0)
}





/*  Solution 3   */

const factorize = num => [...Array(num + 1).keys()].slice(1).filter(n => num % n === 0)







/*  Solution 4   */



function factorize(num) {
    var r = [1];
    for (var i = 2; i <= num; i++) {
        if (num % i == 0) r.push(i);
    }
    return r;
}





function factorize(num) {
    let result = [1];
    for (let i = 2; i <= num; i++) {
        if (num % i === 0) { result.push(i); }
    }
    return result;
}







function factorize(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if (n % i) continue;
        else arr.push(i);
    }
    return arr;
}





function factorize(num) {
    let factors = [];

    for (var i = 1; i <= num; i++) {
        if (num % i == 0) {
            factors.push(i)
        }
    }
    return factors;
}







function factorize(num) {
    var arr = [];
    for (var i = num; i > 0; i--) {
        arr.push(i)
    }
    arr.sort((a, b) => a - b)
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        if (num % arr[i] === 0) {
            arr2.push(arr[i])
        }
    }
    return arr2
}