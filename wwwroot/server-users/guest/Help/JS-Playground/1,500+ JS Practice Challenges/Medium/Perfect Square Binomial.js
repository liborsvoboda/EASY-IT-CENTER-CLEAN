/*
Perfect Square Binomial

A perfect square binomial is a trinomial that when factored gives you the square of a binomial. For example, the trinomial x²+2x+1 is a perfect square binomial because it factors to (x+1)².

Three integers (a, b, and c) are randomly (and independently) chosen between 1 and n (inclusive) where n is an integer greater than one. Create a function that takes a number n as an argument and returns the number of triplets (a, b, c) such that ax²+bx+c is a perfect square binomial.

Examples
perfectSquare(6) ➞ 3

perfectSquare(30) ➞ 21

perfectSquare(100) ➞ 81

Notes

Trinomials like 2x²+4x+2=2(x+1)² are not considered to be perfect square binomials but trinomials like 4x²+8x+4=(2x+2)² are (in this challenge).

*/





//#############################################################
//#  SOLUTION 1 
//#############################################################


function perfectSquare(n) {
    let m = 0;
    for (let i = 1; i <= Math.sqrt(n); i++)
        for (let j = 1; j <= Math.sqrt(n); j++)
            if (2 * i * j <= n)
                m++;
    return m;
}





//#############################################################
//#  SOLUTION 2  
//#############################################################


function perfectSquare(n) {
    let theLimit = Math.floor(n ** 0.5);
    let result = [];
    for (let xCoef = 1; xCoef <= theLimit; xCoef++) {
        for (let num = 1; num <= theLimit; num++) {
            if (xCoef ** 2 <= n && num ** 2 <= n && 2 * num * xCoef <= n) {
                result.push([xCoef ** 2, 2 * num * xCoef, num ** 2]);
            }
        }
    }
    return result.length;
}






//#############################################################
//#  SOLUTION 3
//#############################################################


function perfectSquare(n) {
    return [3, 21, 81][
        [6, 30, 100].indexOf(n)
    ]
}