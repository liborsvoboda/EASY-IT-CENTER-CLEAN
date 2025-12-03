/*


Palindrome?
A palindrome is a word that is identical forward and backwards.

mom
racecar
kayak
Given a word, create a function that checks whether it is a palindrome.

Examples
checkPalindrome("mom") ➞ true

checkPalindrome("scary") ➞ false

checkPalindrome("reviver") ➞ true

checkPalindrome("stressed") ➞ false
Notes
All test input is lower cased.


*/






/*  Solution 1   */


function checkPalindrome(str) {
    return [...str].reverse().join("") == str
}


function checkPalindrome(str) {
    return str === str.split("").reverse().join("");
}

/*  Solution 2   */

checkPalindrome = (str) => [...str].reverse().join("") == str

const checkPalindrome = (str) => str.split('').reverse().join('') === str;

const checkPalindrome = (str) => str.split('').reverse().join('').toLowerCase() == str.toLowerCase()


/*  Solution 3   */


function checkPalindrome(str) {
    for (i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}



function checkPalindrome(str) {
    let newString = str.trim().split("").reverse().join("");

    return newString == str;
}


function checkPalindrome(str) {
    return str === str.split("").reverse().join("");
}


function checkPalindrome(str) {
    for (i = 0; i < str.length; i++) {
        if (str[i] === str[str.length - i - 1]) {
            return true
        } else {
            return false
        }
    }

}



const checkPalindrome = (str) => {
    let reversedText = str.toLowerCase().split('').reverse().join('');
    return str === reversedText;
}