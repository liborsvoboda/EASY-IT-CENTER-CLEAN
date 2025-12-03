/*

From A to Z

Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter. Note that if the range is given in capital letters, return the string in capitals also!

Examples
gimmeTheLetters("a-z") ➞ "abcdefghijklmnopqrstuvwxyz"

gimmeTheLetters("h-o") ➞ "hijklmno"

gimmeTheLetters("Q-Z") ➞ "QRSTUVWXYZ"

gimmeTheLetters("J-J") ➞ "J"


Notes
A hyphen will separate the two letters in the string.
You don't need to worry about error handling in this one (i.e. both letters will be the same case and the second letter will always be after the first alphabetically).

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


function gimmeTheLetters(spectrum) {
    const [x, y] =
    spectrum
        .split('-')
        .map(z => z.charCodeAt());
    result = '';
    for (let i = x; i <= y; i++)
        result += (String.fromCharCode(i));
    return result;
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function gimmeTheLetters(s) {
    var a = s.split("-").map(x => x.charCodeAt(0))
    var ans = ""
    for (let i = a[0]; i <= a[1]; i++) { ans += String.fromCharCode(i) }
    return ans
}



//#############################################################
//#  SOLUTION 3
//#############################################################


function gimmeTheLetters(spectrum) {
    return Array(spectrum.split('-')[1].charCodeAt(0) - spectrum.split('-')[0].charCodeAt(0) + 1).fill().map((_, idx) => spectrum.split('-')[0].charCodeAt(0) + idx).map(x => String.fromCharCode(x)).join('')
}