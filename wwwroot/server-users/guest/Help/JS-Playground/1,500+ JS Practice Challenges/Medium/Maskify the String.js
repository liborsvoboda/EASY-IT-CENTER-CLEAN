/*

Maskify the String
Usually when you sign up for an account to buy something, your credit card number, phone number or answer to a secret question is partially obscured in some way. Since someone could look over your shoulder, you don't want that shown on your screen. Hence, the website masks these strings.

Your task is to create a function that takes a string, transforms all but the last four characters into "#" and returns the new masked string.

Examples
maskify("4556364607935616") ➞ "############5616"
maskify("64607935616") ➞ "#######5616"
maskify("1") ➞ "1"
maskify("") ➞ ""

Notes
The maskify function must accept a string of any length.
An empty string should return an empty string (fourth example above).

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 

const maskify = str => str.replace(/.(?=.{4})/g, '#');

//#  SOLUTION 2  

function maskify(str) {
    return str.length > 4 ? '#'.repeat(str.length - 4) + str.substr(str.length - 4) : str;
}

//#  SOLUTION 3

function maskify(str) {
    var mask = "";
    for (var i = 0; i < str.length - 4; i++) {
        mask += "#";
    }
    return mask += str.substring(str.length - 4, str.length);
}

//#  SOLUTION 4

function maskify(str) {
    return str.split('').map((x, i, a) => i < a.length - 4 ? '#' : x).join('');
}


//#  SOLUTION 5

function maskify(str) {
    var arr = str.split("");
    if (str.length > 4) {
        for (var i = 0; i < str.length - 4; i++)
            arr[i] = '#';
    }
    return arr.join("");
}


//#  SOLUTION 6

function maskify(str) {
    if (str.length <= 4) return str;
    return str.split('').map((char, i) => i < str.length - 4 ? '#' : char).join('');
}


//#  SOLUTION 7


function maskify(str) {
    var lastFour = str.length < 5 ? 0 : str.length - 4;
    return str.split("").map((x, y) => y < lastFour ? '#' : x).join("")
}



//#  SOLUTION 8

const maskify = (str, char = '#') => {
    if (!str || str.length <= 4) return str

    const last4 = str.slice(-4)
    const maskified = char.repeat(str.length - 4)

    return maskified + last4
}

//#  SOLUTION 9

function maskify(str) {
    var len = str.length;

    if (len < 5) {
        return str;
    }

    return str.split('').map(function(val, idx) {
        return (len - idx < 5) ? val : '#';
    }).join('');
}


//#  SOLUTION 10

function maskify(str) {
    var offset = str.length - 4;
    if (offset <= 0) return str;
    return '#'.repeat(offset) + str.slice(offset);
}