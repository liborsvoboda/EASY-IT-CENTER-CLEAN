/*


Travelling Salesman Problem
Given a list of cities and the distances between each pair of cities, what is the shortest possible route that visits each city and returns to the origin city?

Return the total number of possible paths a salesman can travel, given n paths.

Examples
paths(4) ➞ 24

paths(1) ➞ 1

paths(9) ➞ 362880
Notes
Inspired by a video from Dr. Peter Uelkes.


*/






/*  Solution 1   */





/*  Solution 2   */

const paths = n => !n || n * paths(--n);

const paths = num => (num < 2 ? 1 : num * paths(num - 1));

const paths = n => n < 3 ? n : n * paths(n - 1);

const paths = n => +!n || n * paths(--n);

const paths = n => n < 2 ? 1 : n * paths(n - 1);

const paths = n => n < 1 ? 1 : n * paths(n - 1);

const paths = n => n < 2 ? 1 : n * paths(n - 1);






/*  Solution 3   */


function paths(n) {
    if (n == 0) return 0
    let a = 1
    for (x = 1; x <= n; x++) {
        a *= x
    }
    return a

}





/*  Solution 4   */


function paths(n) {
    if (n <= 1) return n
    else return n * paths(n - 1)
}



function paths(n) {
    let count = 1;
    for (let i = 0; i < n; i++) {
        if (n < 1) {
            return count;
        } else {
            count = n * paths(n - 1);
        }

    }
    return count;
}




function paths(n) {
    let a;
    let hasIterated = false;

    if (n === 0 || n === 1) {
        return 1;
    }

    while (n > 0) {
        if (n > 1 && !hasIterated) {
            a = n * (n - 1);
        } else if (n > 1 && hasIterated) {
            a = a * (n - 1);
        }
        n--;
        hasIterated = true;
    }
    return a;
}