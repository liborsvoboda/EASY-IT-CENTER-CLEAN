/*

Check if the String is a Palindrome

A palindrome is a word, phrase, number or other sequence of characters which reads the same backward or forward, such as madam or kayak.

Write a function that takes a string and determines whether it's a palindrome or not. The function should return a boolean (true or false value).

Examples
isPalindrome("Neuquen") ➞ true

isPalindrome("Not a palindrome") ➞ false

isPalindrome("A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!") ➞ true

Notes
Should be case insensitive.
Special characters (punctuation or spaces) should be ignored.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function isPalindrome(string) {
    var sanitized = string.toLowerCase().replace(/[^a-z]/g, "");
    var reversed = sanitized.split('').reverse().join('');
    return (reversed == sanitized);
}







//#############################################################
//#  SOLUTION 2  
//#############################################################


function isPalindrome(string) {
    var arr = string.toLowerCase().match(/[a-z]+/g).join('');

    return arr.split('').join('') == arr.split('').reverse().join('');
}







//#############################################################
//#  SOLUTION 3
//#############################################################


function isPalindrome(string) {
    var lower = string.toLowerCase();
    var upper = string.toUpperCase();
    var normalized = '';

    for (var i = 0; i < lower.length; i++) {
        if (lower.charAt(i) != upper.charAt(i))
            normalized += lower.charAt(i);
    }

    for (var i = 0; i < normalized.length; i++) {
        if (normalized.charAt(i) != normalized.charAt(normalized.length - i - 1))
            return false;
    }

    return true;
}







//#############################################################
//#  SOLUTION 4
//#############################################################



function isPalindrome(string) {
    if (!string || string.length == 0 || string.length == 1) return true;
    return rec(string.toLowerCase().replace(/[^\w]/g, ''));
}

function rec(str) {
    if (str.length == 0 || str.length == 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    else return rec(str.substring(1, str.length - 1));
}




//#############################################################
//#  SOLUTION 5
//#############################################################



function isPalindrome(string) {
    var arr = string.toLowerCase()
        .split('')
        .filter(c => /[a-z]/.test(c));

    return arr.join() == arr.reverse().join();
}




//#############################################################
//#  SOLUTION 6
//#############################################################



function isPalindrome(string) {
    var forward = [],
        backward = [];
    for (var i = 0; i < string.length; i++) {
        var fh = string[i].toLowerCase();
        var bh = string[string.length - i - 1].toLowerCase();

        if (fh.charCodeAt(0) >= 97 && fh.charCodeAt(0) <= 122) {
            forward.push(fh);
        }

        if (bh.charCodeAt(0) >= 97 && bh.charCodeAt(0) <= 122) {
            backward.push(bh);
        }
    }

    return forward.join("") == backward.join("");
}