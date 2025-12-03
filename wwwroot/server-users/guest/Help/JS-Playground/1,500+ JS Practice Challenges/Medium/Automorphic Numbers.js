/*

Automorphic Numbers

A number n is automorphic if n^2 ends in n.

For example: n=5, n^2=25

Create a function that takes a number and returns true if the number is automorphic, false if it isn't.

Examples
isAutomorphic(5) ➞ true

isAutomorphic(8) ➞ false

isAutomorphic(76) ➞ true

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 

const isAutomorphic = num => String(Math.pow(num, 2)).endsWith(num);

const isAutomorphic = n => String(Math.pow(n, 2)).endsWith(String(n));

//#  SOLUTION 2  

function isAutomorphic(n) {
    let power = Math.pow(n, 2).toString()
    return power.endsWith('' + n)
}


//#  SOLUTION 3

function isAutomorphic(n) {
    let square = (n * n).toString();
    return n.toString() === square.slice(-n.toString().length);
}


//#  SOLUTION 4


function isAutomorphic(n) {
    return n == ('' + n * n).substr(-('' + n).length);
}




//#  SOLUTION 5


function isAutomorphic(n) {
    let square = Math.pow(n, 2).toString();
    n = n.toString();
    return n == square.slice(square.length - n.length)
}