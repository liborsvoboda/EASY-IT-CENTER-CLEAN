



/*

Four Passengers and a Driver
A typical car can hold 4 passengers and 1 driver, overall allowing 5 people to travel around. Given n number of people, return how many cars are needed to seat everyone comfortably.

Examples
carsNeeded(5) ➞ 1

carsNeeded(11) ➞ 3

carsNeeded(0) ➞ 0
Notes
It's likely there will be a few people left over and some cars won't be filled to max capacity.



*/






/*  Solution 1   */


function carsNeeded(n) {
	return Math.ceil(n / 5);
}


/*  Solution 2   */



const carsNeeded = n => Math.ceil(n / 5);

/*  Solution 3   */


function carsNeeded(n) {
	let c=Math.ceil(n/5)
	return c
}