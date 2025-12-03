/*

Factor Tractor

Write a program to find all the prime factors of a given number. The program must return an array containing all the prime factors, sorted in ascending order. Remember that 1 is neither prime nor composite and should not be included in your output array.

Examples
primeFactorize(25) ➞ [5, 5]

primeFactorize(19) ➞ [19]

primeFactorize(77) ➞ [7, 11]


Notes

Output array must be sorted in ascending order
The only positive integer which is neither prime nor composite is 1. Return an empty array if 1 is the input.

*/





//#############################################################
//#  SOLUTION 1 
//#############################################################



function primeFactorize(num) {
    let factors = [];
    for(let i = 2; i <= num; i++) {
      while(!(num%i)) {
        factors.push(i);
        num /= i;
      }
    }
    return factors;
  }




//#############################################################
//#  SOLUTION 2  
//#############################################################


const isPrime = num => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
            return false;
        }
    }

    return num > 1;
}

const primeFactorize = num => {
    for (let i = 2; i <= num; i++) {
        if (isPrime(i) && (num % i === 0)) {
            const quotient = num / i;

            if (quotient > 1) {
                return [i].concat(primeFactorize(quotient));
            }

            return [i];
        }
    }

    return [];
}




//#############################################################
//#  SOLUTION 3
//#############################################################



function primeFactorize(num) {
    var result = [];
    while (num % 2 == 0)
      {
        result.push(2);
        num = num / 2;
      }
    for (var i = 3; i <= Math.sqrt(num) && num > 1; i++)
      {
        while (num % i == 0)
          {
            result.push(i);
            num = num / i;
          }
      }
    if (num > 1)
      result.push(num);
    return result;
      
  }



//#############################################################
//#  SOLUTION 4
//#############################################################



var MAX_PRIME = 100000, table = [], primes = [];
for(var i = 0; i < MAX_PRIME; i++) { table.push(true); }
for(var i = 2; i < Math.sqrt(MAX_PRIME); i++) {
  if(table[i]) {
		for(var j = i * i; j < MAX_PRIME; j+=i) {
			table[j] = false;
		}
	}
}
for(var i = 2; i < MAX_PRIME; i++) { if(table[i]) primes.push(i); }

function primeFactorize(n) { 
	return primes.reduce((a,p)=>{
		while(n%p==0){ n/=p; a.push(p) }
		return a;
	},[]);
}