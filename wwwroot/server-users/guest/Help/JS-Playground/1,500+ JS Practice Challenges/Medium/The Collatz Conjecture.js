/*

The Collatz Conjecture

Create a function, example:

10 is number

10 is even - 10 / 2 = 5
5 is odd - 5 * 3 + 1 = 16
16 is even - 16 / 2 = 8
8 is even - 8 / 2 = 4
4 is even - 4 / 2 = 2
2 is even - 2 / 2 = 1 -> if reach 1, return 6 steps
Consider the following operation on an arbitrary positive integer:

if n is even -> n / 2
if n is odd -> n * 3 + 1
Examples
collatz(2) ➞ 1

collatz(3) ➞ 7

collatz(10) ➞ 6

Notes
For Further Information check out the resouce tab.

*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 


function collatz(num) {
    k = num % 2 < 1 ? num / 2 : 3 * num + 1
    return num < 2 ? 0 : collatz(k) + 1
}


//#  SOLUTION 2  

const collatz = n => n === 1 ? 0 : collatz(n % 2 ? n * 3 + 1 : n / 2) + 1;

const collatz = num => num === 1 ? 0 : 1 + collatz([num / 2, num * 3 + 1][num % 2]);

const collatz = n => n === 1 ? 0 : 1 + collatz(n % 2 ? 3 * n + 1 : n / 2);


//#  SOLUTION 3

function collatz(num, count = 0) {
    if (num === 1) return count
    const newNum = num % 2 === 0 ? num / 2 : num * 3 + 1
    return collatz(newNum, count + 1)
}



//#  SOLUTION 4

const collatz = num => {
    const seq = [];

    while (num !== 1) {
        num = num % 2 ? num * 3 + 1 : num / 2;
        seq.push(num);
    }

    return seq.length;
};


//#  SOLUTION 5


const collatz = number => {
    let steps = 0;
    while (number > 1) {
        const isEven = number % 2 === 0;
        number = isEven ? number / 2 : number * 3 + 1;
        steps++;
    }
    return steps;
}