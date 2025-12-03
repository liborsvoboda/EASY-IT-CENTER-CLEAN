/*  

Nth Star Number
Create a function that takes a positive integer and returns the nth "star number".

A star number is a centered figurate number a centered hexagram (six-pointed star), such as the one that Chinese checkers is played on.

Examples
starNumber(2) ➞ 13

starNumber(3) ➞ 37

starNumber(5) ➞ 121
Notes
See Resources for more information.
*/







/*  

Solutions

*/



function starNumber(n) {
    return 6 * n * (n - 1) + 1
}



function starNumber(n) {
    var res;
    res = 6 * n * (n - 1) + 1;
    return res;
}



const starNumber = n => 6 * n * (n - 1) + 1;



const starNumber = n => {
    let num = +n
    return 6 * num * (num - 1) + 1
}



const starNumber = n => 6 * n * (n - 1) + 1