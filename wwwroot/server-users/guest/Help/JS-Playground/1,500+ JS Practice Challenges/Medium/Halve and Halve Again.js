/*

Halve and Halve Again

Given two integers a and b, return how many times a can be halved while still being greater than b.

Examples
halveCount(1324, 98) ➞ 3
// (1324 -> 662 -> 331 -> 165.5)

halveCount(624, 8) ➞ 6
// (624 -> 312 -> 156 -> 78 -> 39 -> 19.5 -> 9.75)

halveCount(1000, 3) ➞ 8
// (1000 -> 500 -> 250 -> 125 -> 62.5 -> 31.25 -> 15.625 -> 7.8125 -> 3.90625)

Notes
Integer a can be halved at least once.

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 

function halveCount(a, b) {
    return a <= b ? -1 : 1 + halveCount(a / 2, b);
}


//#  SOLUTION 2  

function halveCount(a, b) {
    let count = -1;
    while (a > b) {
        a /= 2;
        count++;
    }
    return count;
}


//#  SOLUTION 3

function halveCount(a, b) {
    var arrNum = [];
    var numHalf = a;

    while (numHalf > b) {
        arrNum.push(numHalf);
        numHalf = numHalf / 2;
    }
    console.log(arrNum);
    return arrNum.length - 1;
}


//#  SOLUTION 4


function halveCount(a, b) {
    let n = Math.floor(Math.log(b / a) / Math.log(1 / 2));
    return Math.pow(1 / 2, n) > (b / a) ? n : n - 1;
}