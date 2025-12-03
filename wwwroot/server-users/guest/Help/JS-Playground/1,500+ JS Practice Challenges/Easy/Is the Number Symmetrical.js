/*

Is the Number Symmetrical?
Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. A number is symmetrical when it is the same as its reverse.

Examples
isSymmetrical(7227) ➞ true

isSymmetrical(12567) ➞ false

isSymmetrical(44444444) ➞ true

isSymmetrical(9939) ➞ false

isSymmetrical(1112111) ➞ true
Notes

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



/*  Solution 1   */


const isSymmetrical = num => {
    const str = String(num);
    return str.split('').reverse().join('') === str;
}







/*  Solution 2   */

isSymmetrical = n => ("" + n).split("").reverse().join("") == n;

const isSymmetrical = num => num == num.toString().split('').reverse().join('');

const isSymmetrical = num => num.toString() === num.toString().split('').reverse().join('');

const isSymmetrical = num => num.toString().split('').reverse().join('') === num.toString() ? true : false








/*  Solution 3   */



function isSymmetrical(num) {

    let ans = '';
    let arr = num.toString().split('');
    let rra = arr.slice().reverse();



    for (let i = 0; i < arr.length; i++) {
        arr[i] === rra[i] ? ans = true : ans = false;
    }
    return ans;

}




function isSymmetrical(num) {
    let reversed = num.toString().split('').reverse().join('');
    if (num < 0) {
        reversed = parseInt(reversed) * -1;
    } else {
        reversed = parseInt(reversed);
    }

    if (reversed === num) return true;
    return false;
}