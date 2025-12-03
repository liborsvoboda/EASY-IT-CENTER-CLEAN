



/*

Add up the Numbers from a Single Number
Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

Examples
addUp(4) ➞ 10

addUp(13) ➞ 91

addUp(600) ➞ 180300
Notes
Expect any positive number between 1 and 1000.



*/






/*  Solution 1   */

function addUp(num) {
    return (num * (num + 1))/2;
  }



/*  Solution 2   */


function addUp(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }


/*  Solution 3   */

let addUp = n => (n * (n + 1)) / 2




const addUp = n => Array
	.from({ length: n + 1 }, (v, i) => i)
    .reduce((a, b) => a + b);
    



    function addUp(num) {
        let sum = 0;
        for (var x=1; x<=num; x++){
          sum += x;
        }
        return sum
      }




      
