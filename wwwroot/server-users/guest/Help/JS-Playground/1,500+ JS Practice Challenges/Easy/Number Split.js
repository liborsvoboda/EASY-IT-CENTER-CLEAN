/*  

Number Split

Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.

Examples
numberSplit(4) ➞ [2, 2]

numberSplit(10) ➞ [5, 5]

numberSplit(11) ➞ [5, 6]

numberSplit(-9) ➞ [-5, -4]

Notes
All numbers will be integers.
You can expect negative numbers too.


*/




//#############################################################
//#    SOLUTION 1
//#############################################################


function numberSplit(n) {
    let answer = [];
    if (n % 2 === 0) {
        answer.push(n / 2),
            answer.push(n / 2);
        return answer;
    } else if (n % 2 != 0) {
        answer.push(Math.round(n / 2) - 1),
            answer.push(Math.round(n / 2));
        return answer
    }
}






//#############################################################
//#    SOLUTION 2
//#############################################################


function numberSplit(n) {
    let a = Math.floor(n / 2)
    let b = n - a
    return a > b ? [b, a] : [a, b]
}






//#############################################################
//#    SOLUTION 3
//#############################################################


function numberSplit(n) {
    return n % 2 === 0 ? [n / 2, n / 2] : [Math.floor(n / 2), Math.ceil(n / 2)]
}







//#############################################################
//#    SOLUTION 4
//#############################################################


function numberSplit(n) {
    let q = [];
    q.push(n - Math.round(n / 2), Math.round(n / 2))
    return q;
}




//#############################################################
//#    SOLUTION 5
//#############################################################


numberSplit = (n) => n % 2 == 0 ? [(n / 2), (n / 2)] : [((n - 1) / 2), ((n + 1) / 2)];