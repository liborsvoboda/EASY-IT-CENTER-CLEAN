/* The slice() method extracts a section of a string and returns it as a new string. */

var str1 = 'My cat is black.';
str1.length;        // -> 16

var str2 = str1.slice(1, 8),        // -> "y cat i"
    str3 = str1.slice(4, -2),       // -> "at is blac"
    str4 = str1.slice(12),          // -> "ack."
    str5 = str1.slice(30);          // -> ""

str1.slice(-3);          // -> "ck."
str1.slice(-3, -1);      // -> "ck"
str1.slice(0, -1);       // -> "My cat is black"

var arr1 = ['My', 'cat', 'is', 'black', 'and', 'have', 'green', 'eyes'];
arr1.length;        // -> 8

arr1.slice(1, 6);       // -> ["cat", "is", "black", "and", "have"]
arr1.slice(4, -1);      // -> ["and", "have", "green"]
arr1.slice(5);          // -> ["have", "green", "eyes"]
arr1.slice(21);         // -> []
arr1.slice(-3);         // -> ["have", "green", "eyes"]
arr1.slice(-3, -1);     // -> ["have", "green"]
arr1.slice(0, -1);      // -> ["My", "cat", "is", "black", "and", "have", "green"]


/* The splice() method changes the contents of an array by removing existing elements and/or adding new elements. */

var string1 = 'My cat is black.';
string1.length;        // -> 16

var string2 = string1.slice(1, 8),        // -> "y cat i"
    string3 = string1.slice(4, -2),       // -> "at is blac"
    string4 = string1.slice(12),          // -> "ack."
    string5 = string1.slice(30);          // -> ""

/* string1.splice(-3); doesn't work for string! it's because the splice method works all the time on the same array. */
/* lets split a string into an array of substrings:  */

var string1split = string1.split('');       // make array 'string1split'

string1split;           // -> ["M", "y", " ", "c", "a", "t", " ", "i", "s", " ", "b", "l", "a", "c", "k", "."]
string1split.length     // -> 16

/* SPLICE on ARRAY */
/* i have to comment this lines with examples because SPLICE works all the time on the same array */
string1split.splice(1, 6);       // -> ["y", " ", "c", "a", "t", " "]
string1split.splice(6, -1);                           // -> []
string1split.splice(6, string1split.length - 1);      // -> [" ", "i", "s", " ", "b", "l", "a", "c", "k", "."]
string1split.splice(5);          // -> ["t", " ", "i", "s", " ", "b", "l", "a", "c", "k", "."]
string1split.splice(21);         // -> []
string1split.splice(-3);         // -> ["c", "k", "."]
string1split.splice(-3, -1);     // -> ["have", "green"]
string1split.splice(0, string1split.length - 3);     // -> ["M", "y", " ", "c", "a", "t", " ", "i", "s", " ", "b", "l", "a"]