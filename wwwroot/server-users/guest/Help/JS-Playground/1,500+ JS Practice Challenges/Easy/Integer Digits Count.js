/*  

Integer Digits Count

Create a function that counts the integer's number of digits.

Examples
count(318) ➞ 3
 
count(-92563) ➞ 5
 
count(4666) ➞ 4

count(-314890) ➞ 6

count(654321) ➞ 6

count(638476) ➞ 6

Notes

Optionally, you can solve this via a recursive approach.
A recursive version of this challenge can be found here.

*/






//#############################################################
//#    SOLUTION 1
//#############################################################


const count = n => n == 0 ? 1 : Math.floor(Math.log10(Math.abs(n))) + 1


const count = n => String(Math.abs(n)).length;


const count = n => Math.ceil(Math.log10(Math.abs(n || 10)));


const count = n => String(n).match(/\d+/)[0].length;




//#############################################################
//#    SOLUTION 2
//#############################################################


function count(n) {
    const arr = [...n.toString()]
    return arr.includes("-") ? arr.length - 1 : arr.length
}






//#############################################################
//#    SOLUTION 3
//#############################################################


function count(n) {
    var newStr = n.toString();
    var array = newStr.split("");
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (parseInt(array[i]) >= 0 && parseInt(array[i]) <= 9) {
            result.push(array[i]);
        }
    }
    return result.length;
}




//#############################################################
//#    SOLUTION 4
//#############################################################


function count(n) {
    if (n == 0) return 1
    return Math.abs(n) < 1 ? 0 : 1 + count(n / 10)
}




//#############################################################
//#    SOLUTION 5
//#############################################################



function count(n) {
    return `${Math.abs(n)}`.length;
}