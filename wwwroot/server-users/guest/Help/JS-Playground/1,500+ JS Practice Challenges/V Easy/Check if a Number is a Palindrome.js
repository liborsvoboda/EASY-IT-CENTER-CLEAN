



/*


Check if a Number is a Palindrome
Write a function that returns true if a number is a palindrome.

Examples
isPalindrome(838) ➞ true

isPalindrome(4433) ➞ false

isPalindrome(443344) ➞ true
Notes
A palindrome is a number that remains the same when reversed.
Bonus: Try solving this without turning the number into a string.


*/






/*  Solution 1   */

function isPalindrome(n) {
	return n.toString() === n.toString().split('').reverse().join('');
}




/*  Solution 2   */

const isPalindrome = n => [...""+n].reverse().join('') === ""+n

const isPalindrome = n => n == n.toString().split("").reverse().join("")

const isPalindrome = n => n.toString() === n.toString().split('').reverse().join('');

const isPalindrome = (n) => String(n) === String(n).split('').reverse().join('');




/*  Solution 3   */


const isPalindrome = function(n){
    if(n == parseInt(n.toString().split('').reverse().join(''))){
        return true;
    }
    return false;
};