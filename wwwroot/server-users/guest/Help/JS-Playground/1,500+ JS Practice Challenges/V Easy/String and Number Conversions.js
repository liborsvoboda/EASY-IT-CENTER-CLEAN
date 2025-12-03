/*  

String and Number Conversions

You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.

Examples:
intToString(4) ➞ "4"

stringToInt("4") ➞ 4

intToString(29348) ➞ "29348"

Notes
You will get bonus points if you manage to solve this without using toString, parseInt or parseFloat.
*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################





//#############################################################
//#    SOLUTION 1
//#############################################################


const [intToString, stringToInt] = [String, Number];




//#############################################################
//#    SOLUTION 2
//#############################################################


const intToString = (num) => `${num}`;

const stringToInt = (num) => +num;





//#############################################################
//#    SOLUTION 3
//#############################################################


function intToString(num) {
    var a = "a" + num;
    var b = "";
    for (i = 1; i < a.length; i++) {
        b = b + a[i];
    }
    return b;

}


function stringToInt(num) {
    return (num * 1);
}