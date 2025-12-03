



/*


Sum of the Odd Numbers
Create a function which returns the total of all odd numbers up to and including n. n will be given as an odd number.

Examples
addOddToN(5) ➞ 9
// 1 + 3 + 5 = 9

addOddToN(13) ➞ 49

addOddToN(47) ➞ 576
Notes
Curiously, the answers are all square numbers!


*/






/*  Solution 1   */

function addOddToN(n) {
	let a = 0;
	for (let i = 1; i <= n; i += 2) {
		a += i;
	}
	return a;
}



/*  Solution 2   */

const addOddToN = n => (++n >> 1) ** 2


const addOddToN = n => ((n + 1) / 2) ** 2;

const addOddToN = num => new Array(num).fill(0).map((el,i) => i + 1).filter(n => n % 2 != 0).reduce((a,b)=> a + b)






/*  Solution 3   */


function addOddToN (n) {
    var s = 0
    for (i = 1; i <= n; i += 2) {
      s += i
    }
    return s
  }



  function addOddToN(n) {
	var arr =[] ;
	for ( i = 0 ; i <= n ; i++ ) {
		if (i%2 !== 0)
		 arr.push(i)
	}
	return arr.reduce((a,c)=>a+c) ;
}