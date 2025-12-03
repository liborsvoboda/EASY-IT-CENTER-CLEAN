/*

Nth Fibonacci Number

Create a function to return the Nth number in the Fibonacci sequence as a string.

Examples
fibonacci(10) ➞ "55"

fibonacci(20) ➞ "6765"

fibonacci(30) ➞ "832040"

fibonacci(40) ➞ "102334155"

fibonacci(50) ➞ "12586269025"

fibonacci(60) ➞ "1548008755920"

Notes
Your function is expected to calculate numbers greater than the 64-bit unsigned integer limit where n can be as large as but not greater than 200.
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function fibonacci(n) {
    let a = 0 n,
        b = 1 n;
    for (let i = 0; i < n; i++)[a, b] = [b, a + b];
    return a.toString();
}



//#############################################################
//#  SOLUTION 2  
//#############################################################



function fibonacci(n) {
    var res = fibonacci_series(n)
    return '' + res[res.length - 1]

}

function fibonacci_series(n) {
    if (n === 1) return [0, 1];
    else {
        var s = fibonacci_series(n - 1);
        s.push(BigInt(s[s.length - 1]) + BigInt(s[s.length - 2]));
        return s;
    }
}



//#############################################################
//#  SOLUTION 3
//#############################################################


function fibonacci(n) {
    let res = [0, 1]
    for (let i = 2; i <= n; i++) res.push(BigInt(res[i - 1]) + BigInt(res[i - 2]))
    return res.slice(-1)[0].toString()
}



//#############################################################
//#  SOLUTION 4
//#############################################################

function fibonacci(n) {
    var fib = [0 n, 1 n]
    for (let i = 0; i < n - 1; i++) {
        fib.push(fib[i] + fib[i + 1])
    }
    return fib.pop().toString()
}