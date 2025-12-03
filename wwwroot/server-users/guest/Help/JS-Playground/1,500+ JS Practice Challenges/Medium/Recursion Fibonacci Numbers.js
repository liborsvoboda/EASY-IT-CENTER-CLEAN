/*

Recursion: Fibonacci Numbers

Fibonacci numbers are created in the following way:

F(0) = 0
F(1) = 1
...
F(n) = F(n-2) + F(n-1)
Write a function that calculates the nth Fibonacci number.

Examples
fib(0) ➞ 0

fib(1) ➞ 1

fib(2) ➞ 1

fib(8) ➞ 21

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const fib = num => (num < 2 ? num : fib(num - 1) + fib(num - 2));


const fib = n => n >= 2 ? fib(n - 1) + fib(n - 2) : n;


//#############################################################
//#  SOLUTION 2  
//#############################################################


function fib(n) {
    var fibo = [0, 1];
    for (var i = 2; i <= n; i++) {
        fibo.push(fibo[fibo.length - 2] + fibo[fibo.length - 1])
    }
    return n == 0 ? fibo[0] : fibo.pop();
}




//#############################################################
//#  SOLUTION 3
//#############################################################


var fib = function(num) {
    if (num == 0 || num == 1) {
        return num;
    } else {
        return fib(num - 1) + fib(num - 2);
    }
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function fib(n) {
    if (n === 0) return 0;
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}