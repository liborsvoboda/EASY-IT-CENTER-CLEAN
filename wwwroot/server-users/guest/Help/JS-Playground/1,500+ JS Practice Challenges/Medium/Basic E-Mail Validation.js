/*


Basic E-Mail Validation


Create a function that accepts a string, checks if it's a valid email address and returns either true or false, depending on the evaluation.

The string must contain an @ character.
The string must contain a . character.
The @ must have at least one character in front of it.
e.g. "e@edabit.com" is valid while "@edabit.com" is invalid.
The . and the @ must be in the appropriate places.
e.g. "hello.email@com" is invalid while "john.smith@email.com" is valid.
If the string passes these tests, it's considered a valid email address.

Examples
validateEmail("@gmail.com") ➞ false

validateEmail("hello.gmail@com") ➞ false

validateEmail("gmail") ➞ false

validateEmail("hello@gmail") ➞ false

validateEmail("hello@edabit.com") ➞ true


Notes
Check the Tests tab to see exactly what's being evaluated.
You can solve this challenge with RegEx, but it's intended to be solved with logic.
Solutions using RegEx will be accepted but frowned upon :(

*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 

function validateEmail(str) {
    if (str.indexOf('@') < 1 ||
        str.indexOf('.') < 0 ||
        str.indexOf('@') > str.lastIndexOf('.')
    ) return false;
    return true;
}



//#  SOLUTION 2  


function validateEmail(str) {
    var posAt = str.indexOf("@"),
        posDot = str.lastIndexOf(".");

    if (posAt > 0 && posDot > posAt) {
        return true;
    } else {
        return false;
    }
}


//#  SOLUTION 3

function validateEmail(str) {
    var output = false;
    if (str && str.includes('@') && str.split('@')[0].length >= 1 && str.includes('.com')) {
        output = true;
    }
    return output;
}


//#  SOLUTION 4


function validateEmail(email) {
    const at = email.indexOf('@')
    const dot = email.lastIndexOf('.')

    if (at < 1 || dot < at + 2 || dot + 2 > email.length) {
        return false
    } else {
        return true
    }
}




//#  SOLUTION 5


function validateEmail(str) {
    var at = str.indexOf("@");
    var dot = str.indexOf(".");


    if (at === -1 || dot === -1 || at === 0)
        return false;
    var lastdot = str.split("@").pop().indexOf(".");
    if (lastdot === -1 || lastdot === 0)
        return false;
    else
        return true;
}



//#  SOLUTION 6


function validateEmail(str) {
    if (str == "")
        return false;
    return str.match(/^\w+\.?\w+?\@\w+\.\w+/ig) == null ? false : true;
}



//#  SOLUTION 7


function validateEmail(str) {
    var arr = str.split("");
    var indexA = arr.indexOf("@");
    var indexP = arr.lastIndexOf(".");

    if (arr.length === 0 || indexA === -1 || indexP === -1) {
        return false;
    }

    if (!(str.endsWith(".com"))) {
        return false;
    }

    if (indexA === 0 || indexP < indexA) {
        return false;
    }

    return true;
}



//#  SOLUTION 8


function validateEmail(str) {
    if (str.startsWith("@") == true || str == "" || str == null) {

        return false;
    }
    if (str.includes("@") && str.endsWith(".com")) {

        return true;
    } else {
        return false;
    }
}



//#  SOLUTION 9


function validateEmail(str) {
    if (str.length === 0) {
        return false;
    }

    var atSplit = str.split("@");

    if (atSplit.length !== 2 || atSplit[0] === '') {
        return false;
    }

    var dotSplit = atSplit[1].split(".");
    if (dotSplit.length !== 2) {
        return false;
    }

    return true;
}