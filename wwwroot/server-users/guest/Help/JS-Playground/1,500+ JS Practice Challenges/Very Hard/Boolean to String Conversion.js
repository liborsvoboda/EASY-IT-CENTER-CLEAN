/*  

Boolean to String Conversion

Create a function that takes a boolean variable flag and returns it as a string.

Examples
boolToString(true) ➞ "true"

boolToString(false) ➞ "false"



Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.

*/



//#############################################################
//#                        MY SOLUTION    1                 #
//#############################################################


function boolToString(flag) {
    return flag.toString();
}





//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


function boolToString(flag) {
    return flag ? "true" : "false";
}




//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################


let boolToString = f => f ? "true" : "false"