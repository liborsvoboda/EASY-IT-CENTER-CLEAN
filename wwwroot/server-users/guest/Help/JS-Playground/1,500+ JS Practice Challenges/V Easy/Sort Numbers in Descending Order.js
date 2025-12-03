



/*


Sort Numbers in Descending Order
Create a function that takes any nonnegative number as an argument and return it with it's digits in descending order. Descending order is when you sort from highest to lowest.

Examples
sortDescending(123) ➞ 321

sortDescending(1254859723) ➞ 9875543221

sortDescending(73065) ➞ 76530
Notes
You can expect non-negative numbers for all test cases.


*/






/*  Solution 1   */

function sortDescending(num) {
    return parseInt(num.toString().split('').sort().reverse().join(''));
  }





/*  Solution 2   */

const sortDescending = num => +String(num).split('').sort().reverse().join('')

const sortDescending = num => +num.toString().split('').sort((a,b) => b-a).join('');

const sortDescending = num => num.toString().split('').map(Number).sort((a, b) => a - b).reverse().join('')*1





/*  Solution 3   */


function sortDescending(num) {
    var arr = num.toString().split('');
    arr = arr.sort((a,b) => b - a );
    arr = arr.join('');
    return parseInt(arr);
  }