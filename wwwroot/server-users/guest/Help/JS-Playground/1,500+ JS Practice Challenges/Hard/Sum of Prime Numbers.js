/*

Sum of Prime Numbers

Create a function that takes an array of numbers and returns the sum of all prime numbers in the array.

Examples
sumPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ➞ 17

sumPrimes([2, 3, 4, 11, 20, 50, 71]) ➞ 87

sumPrimes([]) ➞ 0


Notes
Given numbers won't exceed 101.
A prime number is a number which has exactly two divisors (1 and itself).

*/



//#############################################################
//#    SOLUTION 1
//#############################################################


function sumPrimes(arr) {
    function isPrime(num) {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (!(num % i)) return false;
      }
      return true;
    }
    return arr
      .filter((item) => isPrime(item))
      .reduce((total, number) => total + number, 0);
  }





//#############################################################
//#    SOLUTION 2
//#############################################################



function sumPrimes(arr) {
	return arr.filter(x=>Array.from({length:x},(_,i)=>i+1).filter(a=>!(x%a)).length==2).reduce((a,v)=>a+v,0)
}





//#############################################################
//#    SOLUTION 3
//#############################################################


const primes = new Set();
const notPrimes = new Set();
const isPrime = n => {
	if ((n < 2) || notPrimes.has(n)) return false;
	if (primes.has(n)) return true;
	for (var i = 2, max = Math.sqrt(n); (n % i) && (i <= max); i++);
	return (i > max) ? !!primes.add(n) : !notPrimes.add(n);
};

const sumPrimes = lst => lst.reduce((a, n) => a + (isPrime(n) && n), 0);





//#############################################################
//#    SOLUTION 4
//#############################################################


function isPrime(n) {
	for (let i = 2; i <= Math.sqrt(n); i++)
		if (!(n % i))
			return false;
	return n > 1;
}

function sumPrimes(arr) {
	return arr.filter(isPrime).reduce((a, c) => a + c, 0);
}
