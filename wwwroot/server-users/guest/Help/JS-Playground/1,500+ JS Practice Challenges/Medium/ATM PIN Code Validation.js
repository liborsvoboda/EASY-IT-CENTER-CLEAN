/*

ATM PIN Code Validation
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. Your task is to create a function that takes a string and returns true if the PIN is valid and false if it's not.

Examples

validatePIN("1234") ➞ true
validatePIN("12345") ➞ false
validatePIN("a234") ➞ false
validatePIN("") ➞ false

Notes
Some test cases contain special characters.
Empty strings must return false.

*/


/*  Solution 1   */

function validatePIN(pin) {
    var regEx = new RegExp(/^(\d{4}|\d{6})$/);
    return regEx.test(pin);
}

/*  Solution 2   */

const validatePIN = pin => /^(\d{6}|\d{4})$/.test(pin);

let validatePIN = x => /^\d{4}(\d\d)?$/.test(x);

const validatePIN = pin => (/^\d{4}$/.test(pin) || /^\d{6}$/.test(pin))

/*  Solution 3   */

function validatePIN(pin) {
    var regex = /^(\d{4})$|^(\d{6})$/;
    return regex.test(pin);
}

/*  Solution 4   */

function validatePIN(pin) {
    const pinLength = pin.toString().length;
    return (/^\d+$/.test(pin) && (pinLength === 4 || pinLength === 6));
}


/*  Solution 5   */


function validatePIN(pin) {
    return (pin.length === 4 || pin.length === 6) && pin.replace(/[0-9]/g, '').length === 0;
}

/*  Solution 6   */

function validatePIN(pin) {
    if (pin.length == 4 || pin.length == 6) {

        var RE = /[^0-9]/;
        return RE.test(pin) ? false : true;
    }
    return false;

}

/*  Solution 7   */

function validatePIN(pin) {
    if (pin.length == 0 || (pin.length != 4 && pin.length != 6)) return false;
    for (i = 0; i < pin.length; i++) {
        if (isNaN(pin[i])) return false;
    }
    return true
}

/*  Solution 8   */

function validatePIN(pin) {
    if (pin.length === 4 || pin.length === 6) {
        var numbers = '0123456789'
        return pin.split('').every(function(value) {
            return numbers.indexOf(value) > -1;
        });
    }
    return false;
}

/*  Solution 9   */

function validatePIN(pin) {
    if (!(pin.length === 4 || pin.length === 6)) { return false; }
    if (pin.length === pin.replace(/[^0-9]/g, "").length) { return true; }
    return false;
}