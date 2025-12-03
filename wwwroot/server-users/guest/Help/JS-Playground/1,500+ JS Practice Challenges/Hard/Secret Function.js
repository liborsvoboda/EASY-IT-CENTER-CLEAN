/*

Secret Function

Create a function based on the input and output. Look at the examples, there is a pattern.

Examples
secret(24) ➞ 8

secret(42) ➞ 8

secret(15) ➞ -4

secret(52) ➞ 15


Notes
num >= 10 and num <= 52
Math.pow, * and - can be helpful.

*/




//#############################################################
//#    SOLUTION 1
//#############################################################


const secret = (num, [a, b] = `${num}`) => a ** b - a * b;



//#############################################################
//#    SOLUTION 2
//#############################################################


function secret(num) {
    const [n1, n2] = [...`${num}`].map(Number);
      return Math.pow(n1, n2) - n1 * n2;
  }




//#############################################################
//#    SOLUTION 3
//#############################################################


function secret(num) {
	return (Math.floor(num / 10) ** (num % 10)) - (Math.floor(num / 10) * (num % 10));
}




//#############################################################
//#    SOLUTION 4
//#############################################################


function secret(num) {
	if(num>=10 && num<=52){
		return Math.pow(Math.floor(num/10),num%10) - Math.floor(num/10)*(num%10)
	}
}
