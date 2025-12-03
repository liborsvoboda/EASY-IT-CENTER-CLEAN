/*

One Button Messaging Device

Imagine a messaging device with only one button. For the letter A, you press the button one time, for E, you press it five times, for G, it's pressed seven times, etc, etc.

Write a function that takes a string (the message) and returns the total number of times the button is pressed.

Examples
howManyTimes("abde") ➞ 12

howManyTimes("azy") ➞ 52

howManyTimes("qudusayo") ➞ 123

Notes
Ignore spaces.
The given string argument will be in lower case.
*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const howManyTimes = msg => [...msg].reduce((a, v) => a + v.charCodeAt() - 96, 0);



//#############################################################
//#  SOLUTION 2  
//#############################################################


function howManyTimes(msg) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var count = 0;
    for (var ndx = 0; ndx < msg.length; ndx++) {
        count += alphabet.indexOf(msg[ndx]) + 1;
    }
    return count;
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function howManyTimes(msg) {
    return msg.split('').map(x => x.charCodeAt() - 97 + 1).reduce((xi, x) => xi + x, 0);
}



//#############################################################
//#  SOLUTION 4
//#############################################################

function removeSmallest(arr) {
    if (arr.lenght === 0) return [];

    var i = arr.indexOf(Math.min.apply(null, arr));
    return arr.slice(0, i).concat(arr.slice(i + 1, arr.length));
}