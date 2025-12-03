/*

Check for Anagrams

Create a function that takes two strings and returns either true or false depending on whether they're anagrams or not.

Examples
isAnagram("cristian", "Cristina") ➞ true

isAnagram("Dave Barry", "Ray Adverb") ➞ true

isAnagram("Nope", "Note") ➞ false

Notes
Should be case insensitive.
The two given strings can be of different lengths.

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 

function isAnagram(s1, s2) {
    var str1 = s1.toLowerCase().split('').sort().join('').trim();
    var str2 = s2.toLowerCase().split('').sort().join('').trim();
    return str1 === str2;
}


//#  SOLUTION 2  

function isAnagram(s1, s2) {
    const resolve = s => Array.from(s.toLowerCase()).sort().join('');
    return resolve(s1) === resolve(s2);
}


//#  SOLUTION 3

const isAnagram = (a, b) => {
    return a.split('').map(item => b.toLowerCase().indexOf(item.toLowerCase())).indexOf(-1) === -1
}


//#  SOLUTION 4

function isAnagram(s1, s2) {
    return s1.toLowerCase().split('').sort().join('') === s2.toLowerCase().split('').sort().join('');
}



//#  SOLUTION 5

function isAnagram(s1, s2) {
    return sort(s1) == sort(s2);
}

function sort(s) {
    return s.toLowerCase().split('').sort((a, b) => a > b).join('');
}