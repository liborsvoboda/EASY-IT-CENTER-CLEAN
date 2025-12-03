/*


Triangular Number Sequence
This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are:

1, 3, 6, 10, 15
This means that the first triangle has just one dot, the second one has three dots, the third one has 6 dots and so on.

Write a function that gives the number of dots with its corresponding triangle number of the sequence.

Examples
triangle(1) ➞ 1

triangle(6) ➞ 21

triangle(215) ➞ 23220
Notes
Check the Resources for info on triangular number sequence.


*/




/*  Solution 1   */

const triangle = n => n * (n + 1) / 2;

const triangle = num => (num <= 1 ? 1 : triangle(num - 1) + num);

const triangle = n => (n * (n + 1)) / 2;

const triangle = n => n < 2 ? 1 : n + triangle(n - 1);

const triangle = n => n * (n + 1) / 2;



/*  Solution 2   */


function triangle(n) {
    var count = 0;
    for (var num = 0; num <= n; num++) {
        count = count + num;
    }
    return count
}


/*  Solution 3   */

function triangle(n) {
    var a = 1;
    var num = 1;
    while (a != n) {
        a++;
        num = num + a;
    }
    return num;
}






/*  Solution 4   */


function triangle(n) {
    let result = 1;
    for (let i = 1; i < n; i++) {
        result += (i + 1);
    }
    return result
}