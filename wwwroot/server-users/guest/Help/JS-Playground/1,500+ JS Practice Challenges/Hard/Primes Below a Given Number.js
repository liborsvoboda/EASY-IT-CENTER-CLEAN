/*

Primes Below a Given Number

Create a function that will find all primes below a given number. Return the result as an array.

Examples
primesBelowNum(5) ➞ [2, 3, 5]

primesBelowNum(10) ➞ [2, 3, 5, 7]

primesBelowNum(20) ➞ [2, 3, 5, 7, 11, 13, 17, 19]

Notes
If n is a prime, include it in the array.

*/


//#############################################################
//#    SOLUTION 1                                             #
//#############################################################


const isPrime = num => {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
  };
  
  const primesBelowNum = num =>
    Array.from({ length: num - 1 }, (_, i) => i + 2).filter(isPrime);



//#############################################################
//#    SOLUTION 2
//#############################################################


const primesBelowNum = n => {
	let arr = [];
	for(let i = 2; i < n + 1; i++){
		if(isPrime(i)) arr.push(i);
	}
	return arr;	
}

const isPrime = x => [2,3].includes(x) || [2, 3].every(el => x % el !== 0);




//#############################################################
//#    SOLUTION 3
//#############################################################


function primesBelowNum(n) {
	return Array.from({length:n},(_,i)=>i+1).filter(x=>Array.from({length:x},(_,i)=>i+1).filter(a=>!(x%a)).length==2)
}




//#############################################################
//#    SOLUTION 4
//#############################################################


function primesBelowNum(n) {
	let arr=[]
	for(var i=2;i<=n;i++){
		if((i==2) || (i==3) || (i==5) || (i==7)){
			arr.push(i)
		} else if((i%2!=0) && (i%3!=0) && (i%5!=0) && (i%7!=0)){
			arr.push(i)
		} 
		//break;
	}
	return arr
}