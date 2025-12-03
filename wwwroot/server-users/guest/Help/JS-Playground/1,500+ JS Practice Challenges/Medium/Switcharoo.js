/*

Switcharoo

Create a function that takes a string and returns a new string with its first and last characters swapped, except under three conditions:

If the length of the string is less than two, return "Incompatible.".
If the argument is not a string, return "Incompatible.".
If the first and last characters are the same, return "Two's a pair.".
Examples
flipEndChars("Cat, dog, and mouse.") ➞ ".at, dog, and mouseC"

flipEndChars("ada") ➞ "Two's a pair."

flipEndChars("Ada") ➞ "adA"

flipEndChars("z") ➞ "Incompatible."

flipEndChars([1, 2, 3]) ➞ "Incompatible."

Notes
Tests are case sensitive (e.g. "A" and "a" are not the same character).

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################






//#############################################################
//#  SOLUTION 1                                               #
//#############################################################

function flipEndChars(str) {
    return typeof str != "string" || str.length < 2 ? "Incompatible." :
        str[0] == str[str.length - 1] ? "Two's a pair." :
        str[str.length - 1] + str.slice(1, str.length - 1) + str[0];
}




//#############################################################
//#  SOLUTION 2                                               #
//#############################################################


function flipEndChars(str) {
    if (typeof str !== 'string' || str.length < 2) {
        return 'Incompatible.';
    }

    [first, last] = [str.charAt(0), str.charAt(str.length - 1)];
    if (first === last) {
        return "Two's a pair.";
    }

    return `${last}${str.slice(1, str.length - 1)}${first}`;
}




//#############################################################
//#  SOLUTION 3                                               #        
//#############################################################



const flipEndChars = str => (typeof str !== 'string' || str.length < 2) ?
    "Incompatible." : (str[0] === str.substr(-1)) ?
    "Two's a pair." : str.substr(-1) + str.slice(1, -1) + str[0];



//#############################################################
//#  SOLUTION 4                                               #
//#############################################################


flipEndChars = s => !s.charAt || s.length < 2 ?
    "Incompatible." :
    (a = s[0]) == (z = s.slice(-1)) ?
    "Two's a pair." :
    z + s.slice(1, -1) + a


//#############################################################
//#  SOLUTION 5                                               #
//#############################################################



function flipEndChars(str) {

    if (typeof str !== 'string') {
        return 'Incompatible.'
    }
    if (str.length < 2) {
        return 'Incompatible.'
    }
    if (str[0] === str[str.length - 1]) {
        return `Two's a pair.`
    }
    return str[str.length - 1] + str.slice(1, str.length - 1) + str[0]
}





//#############################################################
//#  SOLUTION 6                                              #
//#############################################################



function flipEndChars(str) {

    if (str.length < 2 || typeof(str) !== "string") return "Incompatible.";
    if (str[0] == str[str.length - 1]) return "Two's a pair."
    return str.slice(str.length - 1) + str.slice(1, str.length - 1) + str.slice(0, 1);
}





//#############################################################
//#  SOLUTION 7                                              #
//#############################################################



function flipEndChars(str) {
    var arr = [];
    if (typeof str !== 'string' || str.length < 2) {
        return 'Incompatible.'
    } else {
        var arr = str.split('');
        if (arr[0] === arr[arr.length - 1]) {
            return 'Two\'s a pair.'
        } else {
            arr[0] = [arr[arr.length - 1], arr[arr.length - 1] = arr[0]][0];
            return arr.join('');
        }
    }
}