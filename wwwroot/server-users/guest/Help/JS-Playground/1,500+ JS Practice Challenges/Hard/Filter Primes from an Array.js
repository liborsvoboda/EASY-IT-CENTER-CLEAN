/*

Filter Primes from an Array

Create a function that takes an array and returns a new array containing only prime numbers.

Examples
filterPrimes([7, 9, 3, 9, 10, 11, 27]) ➞ [7, 3, 11]

filterPrimes([10007, 1009, 1007, 27, 147, 77, 1001, 70]) ➞ [10007, 1009]

filterPrimes([1009, 10, 10, 10, 3, 33, 9, 4, 1, 61, 63, 69, 1087, 1091, 1093, 1097]) ➞ [1009, 3, 61, 1087, 1091, 1093, 1097]


Notes
New array must maintain the order of primes as they first appear in the original array.
Check the Resources tab for help.

*/


//#############################################################
//#    SOLUTION 1
//#############################################################


const filterPrimes = array => {
	const isPrime = n => {
		for (let i = 2; i < n; i++) if (n % i === 0) return false;
		return n > 1;
	}
	return array.filter(number => isPrime(number));
}



//#############################################################
//#    SOLUTION 2
//#############################################################


const filterPrimes = num => num.filter(v => {
	if (v < 2) return false;
	for (let i = 2; i <= Math.sqrt(v); i++) if (!(v%i)) return false;
	return true;
});




//#############################################################
//#    SOLUTION 3
//#############################################################



function filterPrimes(num) {
	return num.filter((n) => new Array(n - 1).fill(1)
		.every((number, index, arr) => index + 1 != 1 
					 ? n % (index + 1) != 0 : true) && n != 1);
}



//#############################################################
//#    SOLUTION 4
//#############################################################


const filterPrimes = N => N
  .filter(n => { for (i = n; n % --i;); return n > 1 && i < 2 })



//#############################################################
//#    SOLUTION 5
//#############################################################


function isPrime(n) {
    if (n % 1 || n < 2) return false; 
    if (n % 2 == 0) return (n == 2);
    var m = Math.sqrt(n);
    for (let i = 3; i <= m; i += 2) {
     if (n % i == 0) return false;
    }
    return true;
   }
   
   const filterPrimes = arr => arr.filter(x => isPrime(x));