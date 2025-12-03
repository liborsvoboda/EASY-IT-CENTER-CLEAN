/*

Proper Modulo Operator

While useful, the modulo operator in JavaScript is not infallible when negative numbers are thrown into the mix. For example, -13 % 64 = -13, when the actual answer is 51. Create a function to fix this. It should also work for positive numbers.

Examples
mod(-13, 64) ➞ 51

mod(50, 25) ➞ 0

mod(-6, 3) ➞ 0


Notes
All test cases contain valid numbers.

*/


//#############################################################
//#    SOLUTION 1
//#############################################################


const mod = (a, b) => ((a % b) + b) % b;



//#############################################################
//#    SOLUTION 2
//#############################################################



// Should return m mod n
function mod(m, n) {
	if (Number.isInteger(m/n)) {
		return 0;
	} else {
		return ((1 - Math.abs(m/n)) * n)
	}
}



//#############################################################
//#    SOLUTION 3
//#############################################################


// Should return m mod n
function mod(m, n) {
	return m.mod(n)
}

Number.prototype.mod = function(n) {
    return ((this%n)+n)%n;
};


