/*

Digits Sum Root

Create a function that takes a number and returns one digit that is the result of summing all the digits of the input number. When the sum of the digits consists of more than one digit, repeat summing until you get one digit.

Examples
rootDigit(123) ➞ 6
// 1 + 2 + 3 = 6

rootDigit(999888777) ➞ 9

rootDigit(1238763636555555555555) ➞ 6


Notes
Recursion is allowed.

*/




//#############################################################
//#    SOLUTION 1
//#############################################################


const rootDigit = n => (
	n > 9 ? rootDigit([...`${n}`].reduce((a,b) => a + +b, 0)) : n
);



//#############################################################
//#    SOLUTION 2
//#############################################################


function rootDigit(n) {
	return (BigInt(n)%9n==0n && n>0n)? 9: Number(BigInt(n)%9n)
}


//#############################################################
//#    SOLUTION 3
//#############################################################


function rootDigit(n) {
	while (n >= 10){
		let arr = n.toString().split('');
		n = arr.reduce((x,y)=> x + +y, 0);
	}return n;
}



//#############################################################
//#    SOLUTION 4
//#############################################################


function rootDigit(n) {
    if(n.toString().length < 2) {
        return n
    }
    const res =  n.toString().split``.reduce((a,b) => +a + +b)
    if(res.toString().length > 1) {
      return rootDigit(res)
    }else {
      return res;
    }
	
}