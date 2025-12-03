/**
 * Key: use regular expression to find only alpha and numeric letters.
 * Two pointers: start and end
 */


/*
125. Valid Palindrome


Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
 

Constraints:

s consists only of printable ASCII characters.
Accepted

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



var isPalindrome = function(s) {
    var pattern = /[a-z0-9]/gi;
    s = s.match(pattern);
    if (!s || s.length === 1) return true;
    for (var i = 0; i < s.length / 2; i++) {
        if (s[i].toLowerCase() !== s[s.length - 1 - i].toLowerCase()) return false;
    }

    return true;
};