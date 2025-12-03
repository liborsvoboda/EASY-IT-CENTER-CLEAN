/*

Change Every Letter to the Next Letter

Write a function that changes every letter to the next letter:

"a" becomes "b"
"b" becomes "c"
"d" becomes "e"
and so on ...
Examples
move("hello") ➞ "ifmmp"

move("bye") ➞ "czf"

move("welcome") ➞ "xfmdpnf"


Notes
There will be no z's in the tests.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function move(word) {
    return [...word].map(a => String.fromCharCode(a.charCodeAt(0) + 1)).join('');
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function move(word) {
    return word.split('').map(x => x.charCodeAt(0) + 1).map(x => String.fromCharCode(x)).join('');
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function move(word) {
    return word.split('').map(function(x) {
        var c = x.charCodeAt(0);
        return String.fromCharCode(c + 1);
    }).join('');
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function move(word) {
    return word.split('')
        .map((x, index) => x = String.fromCharCode(word.charCodeAt(index) + 1))
        .join('');
}





//#############################################################
//#  SOLUTION 5
//#############################################################


function move(word) {
    return word.split("")
        .map(x => x.charCodeAt(0) + 1)
        .map(x => String.fromCharCode(x))
        .join("");
}




//#############################################################
//#  SOLUTION 6
//#############################################################


function move(word) {
    let out = '';

    for (let i = 0; i < word.length; i++) {
        out += String.fromCharCode(word[i].charCodeAt() + 1);
    }

    return out;
}