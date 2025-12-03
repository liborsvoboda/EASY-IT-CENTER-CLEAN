/*

Alphanumeric Restriction
Create a function that returns true if the given string has any of the following:

Only letters and no numbers.
Only numbers and no letters.
If a string has both numbers and letters, or contains characters which don't fit into any category, return false



Examples
alphanumericRestriction("Bold") ➞ true

alphanumericRestriction("123454321") ➞ true

alphanumericRestriction("H3LL0") ➞ false

alphanumericRestriction("ed@bit") ➞ false


Notes
Any string that contains spaces or is empty should return false.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const alphanumericRestriction = str => /^([a-z]+|\d+)$/i.test(str);



//#############################################################
//#  SOLUTION 2  
//#############################################################



function alphanumericRestriction(str) {
    return /^[a-z]+$/gi.test(str) || /^\d+$/g.test(str)
}



//#############################################################
//#  SOLUTION 3
//#############################################################


function alphanumericRestriction(str) {
    let arr = str.split("");

    return !str ? false :
        arr.every(item => /\d/.test(item)) ? true :
        arr.every(item => /[a-z]/i.test(item)) ? true :
        false;
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function alphanumericRestriction(str) {
    var arr = str.split("");
    var newStr = [];
    var num = [];
    for (var i = 0; i < arr.length; i++) {
        var charCode = arr[i].toUpperCase().charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) {
            newStr.push(arr[i]);
        } else if (charCode >= 48 && charCode <= 57) {
            num.push(arr[i]);
        }
    }
    return (str === "") ? false : (newStr.length === str.length || num.length === str.length);
}




//#############################################################
//#  SOLUTION 5
//#############################################################


const alphanumericRestriction = str => str.length == 0 ? false : str.match(/^[a-zA-Z]*$/i) ? true : str.match(/^\d*$/i) ? true : false;