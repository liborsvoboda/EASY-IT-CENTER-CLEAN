/*

The Fibonacci Number
Create a function that, given a number, returns the corresponding value of that index in the Fibonacci series.

The Fibonacci Sequence is the series of numbers:

1, 1, 2, 3, 5, 8, 13, 21, 34, ...
The next number is found by adding the two numbers before it:

The 2 is found by adding the two numbers before it (1+1).
The 3 is found by adding the two numbers before it (1+2).
The 5 is (2+3), and so on!
Examples
fibonacci(3) ➞ 3

fibonacci(7) ➞ 21

fibonacci(12) ➞ 233

Notes
The first number in the sequence starts at 1 (not 0).

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function fibonacci(num) {
    if (num <= 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}




//#############################################################
//#  SOLUTION 2  
//#############################################################


cache = { 0: 0, 1: 1, 2: 1 };

function fibonacci(num) {
    if ([0, 1].includes(num)) { return 1; }
    if (Object.keys(cache).includes(num)) { return cache[num]; }
    cache[num] = fibonacci(num - 1) + fibonacci(num - 2);
    return cache[num];
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function fibonacci(num) {
    let sol = [0, 1];
    for (let i = 2; i <= num + 1; i++) {
        sol.push(sol[i - 1] + sol[i - 2]);
    }
    return sol[sol.length - 1];
}



//#############################################################
//#  SOLUTION 4
//#############################################################


let fibonacci = n => n > 2 ? fibonacci(n - 1) + fibonacci(n - 2) : n ? n : 1;



//#############################################################
//#  SOLUTION 5
//#############################################################


function fibonacci(num) {
    if (num === 0 || num === 1) {
        return 1
    } else if (num >= 2) {
        return fibonacci(num - 2) + fibonacci(num - 1)
    } else {
        return 0
    }
}