/*

No Good Numbers

A positive number's population is the sum of 1's in its binary representation.

An evil number has an even numbered population.
An odious number has an odd numbered population.
A number is pernicious if its population is a prime number.
Create a function that takes a number as an argument and returns a sorted array of all its descriptors ("Evil", "Odious", or "Pernicious").


Examples
howBad(7) ➞ ["Odious", "Pernicious"]
// 7 in binary is "111".
// 1 + 1 + 1 = 3 in "111" means "Odious" should be added to the array answer.
// 3 is a prime number, meaning "Pernicious" should also be added.

howBad(17) ➞ ["Evil", "Pernicious"]
// 17 in binary is "10001".
// 1 + 1 = 2 in "10001" means "Evil" should be added to the array answer.
// 2 is a prime number, meaning "Pernicious" should also be added.

howBad(23) ➞ ["Evil"]
// 23 in binary is "10111".
// Four 1's in "10111" means "Evil" should be added to the array answer.
// 4 is not a prime number, meaning "Pernicious" should not be added.

*/




//#############################################################
//#  SOLUTION 1                                               #
//#############################################################


const isPrime = num => {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
  };
  
  const howBad = num => {
    const ones = (num.toString(2).match(/1/g) || []).length;
    return [ones % 2 === 0 ? 'Evil' : 'Odious'].concat(
      isPrime(ones) ? 'Pernicious' : []
    );
  };







//#############################################################
//#  SOLUTION 2                                               # 
//#############################################################


function howBad(num) {
	function isPrime(x) {
		if (x < 2) { return false; }
		for (let i = 2; i <= Math.sqrt(x); i++) {
			if (!(x % i)) { return false; }
		}
		return true;
	}
	let p = num.toString(2).replace(/0/g,'').length;
	return [p % 2 ? "Odious" : "Evil", "Pernicious"].slice(0, 1 + isPrime(p));
}







//#############################################################
//#  SOLUTION 3                                               #
//#############################################################



function howBad(num) {
	var n = num.toString(2);
	var isPrime = 0;
	var a = [];
	var b =n.split("").filter(x => x == 1).length;
	n.split("").filter(x => x == 1).length % 2 == 1 ? a.push("Odious"): a.push("Evil");
	if(b == 1){
		return a;
	}
	if(b ==2){
		a.push("Pernicious");
	}else{
		for(var i = 2; i < b; i++){
			if(b % i == 0){
				isPrime++;
			}
		}
		if(isPrime == 0){
			a.push("Pernicious");
		}
	}
	return a;
}






//#############################################################
//#  SOLUTION 4                                               #
//#############################################################



const howBad = num => {
	const pop = num.toString(2).replace(/0/g, '').length;
	const arr = []
	arr.push(pop % 2 ? 'Odious' : 'Evil');
	if ((pop % 2 && pop % 3 && pop !== 1) || pop === 3 || pop === 2) arr.push('Pernicious');
	return arr;
};