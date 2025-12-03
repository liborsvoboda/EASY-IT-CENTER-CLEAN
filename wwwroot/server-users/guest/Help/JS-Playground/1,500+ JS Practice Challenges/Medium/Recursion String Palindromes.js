/*

Recursion: String Palindromes

Write a function that recursively determines if a string is a palindrome.

Examples
isPalindrome("abcba") ➞ true

isPalindrome("b") ➞ true

isPalindrome("") ➞ true

isPalindrome("ad") ➞ false

Notes
An empty string counts as a palindrome.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


const isPalindrome = str => str.length < 2 ? true : str.endsWith(str[0]) ? isPalindrome(str.slice(1, -1)) : false;



//#############################################################
//#  SOLUTION 2  
//#############################################################


function isPalindrome(str) {
    if (str.length < 2) return true;
    return str[0] === str[str.length - 1] && isPalindrome(str.slice(1, str.length - 1));
}



//#############################################################
//#  SOLUTION 3
//#############################################################


function isPalindrome(str) {
    return str[0] !== str[str.length - 1] ? false : str.length < 3 ? true : isPalindrome(str.substring(1, str.length - 1))
}



//#############################################################
//#  SOLUTION 4
//#############################################################


const isPalindrome = s => {
    const sLen = s.length;
    if (s.length < 2) return true;
    if (s[0] === s[sLen - 1]) return isPalindrome(s.slice(1, sLen - 1));
    return false;
};



//#############################################################
//#  SOLUTION 5
//#############################################################


const isPalindrome = str => {
    if (str.length === 0 || str.length === 1) {
        return true
    }
    if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1, str.length - 1))
    }
    return false
}



//#############################################################
//#  SOLUTION 6
//#############################################################


function isPalindrome(str) {
    var a = [...str].reverse().join('')
    return str === a ? true : false
}



//#############################################################
//#  SOLUTION 7
//#############################################################


function isPalindrome(str) {
    let a = str.split('');
    return str.length <= 1 ? true : a.shift() == a.pop() && isPalindrome(a.join(''));
}



//#############################################################
//#  SOLUTION 8
//#############################################################


function isPalindrome(str) {
    return !str ? true : str[0] == str.slice(-1) ? isPalindrome(str.slice(1, -1)) : false
}