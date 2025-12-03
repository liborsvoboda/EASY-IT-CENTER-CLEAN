/*  

Return Last Index

Create a function that returns the last value of the last item in an array or string.

Examples
lastItem([0, 4, 19, 34, 50, -9, 2]) ➞ 2

lastItem("The quick brown fox jumped over the lazy dog") ➞ "g"

lastItem([]) ➞ undefined

Notes
Arrays/strings will be of varying size.
Return undefined if array/string is emtpy.

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#    SOLUTION 1

function lastItem(input) {
    return input.length ? input[input.length - 1] : undefined;
}


//#    SOLUTION 2

function lastItem(input) {
    if (input === "" || input === []) {
        return undefined;
    }
    return input[input.length - 1];
}


//#    SOLUTION 3

function lastItem(input) {
    return input.length !== 0 ? input[input.length - 1] : undefined;
}