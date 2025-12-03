/*

Sieve of Eratosthenes

Given num as input, return an array with all primes up to num included.

Alternative Text

Examples
eratosthenes(1) ➞ []

eratosthenes(10) ➞ [2, 3, 5, 7]

eratosthenes(20) ➞ [2, 3, 5, 7, 11, 13, 17, 19]

eratosthenes(0) ➞ []


Notes
Check the Resources tab for info on the meaning of "Eratosthenes".
Try solving this challenge using Eratosthenes sieve.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


function eratosthenes(n) {
	let p = [];
	for (let i = 2; i <= n; i++) {
		if (p.some(v => !(i % v))) { continue; }
		p.push(i);
	}
	return p;
}




//#############################################################
//#  SOLUTION 2  
//#############################################################


function eratosthenes(n) {
	let array = genArr(n); 
	let result = array.filter( e => isPrime(e));
	return result; 
}

const isPrime = (x) => {
	let arr = genArr(x); 
	let result = arr.filter( n => x%n === 0); 
	if( result.length === 0){
		return true; 
	}
	else{
		return false; 
	}
}
	
const genArr = (n) => {
	let result = []; 
	for(let i = 2; i < n; i++) result.push(i);
	return result; 
}






//#############################################################
//#  SOLUTION 3
//#############################################################



function eratosthenes(n) {
    max = n;
    var sieve = [], i, j, primes = [];
for (i = 2; i <= max; ++i) {
    if (!sieve[i]) {
        // i has not been marked -- it is prime
        primes.push(i);
        for (j = i << 1; j <= max; j += i) {
            sieve[j] = true;
        }
    }
}
return primes;
}






//#############################################################
//#  SOLUTION 4
//#############################################################


function eratosthenes(n) {
    let arr = Array.from(new Array(n).keys())
    arr = arr.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0 ) return false }
    return true;})
    return arr.filter(x =>  x !== 0 && x !== 1)  
    }