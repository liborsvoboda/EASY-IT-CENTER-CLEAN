/*  
Stupid Addition
Create a function that takes two parameters and, if both parameters are strings, add them as if they were integers or if the two parameters are integers, concatenate them.

Examples
stupidAddition(1, 2) ➞ "12"

stupidAddition("1", "2") ➞ 3

stupidAddition("1", 2) ➞ null
Notes
If the two parameters are different data types, return null.
All parameters will either be strings or integers.

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



// Solution 1

const stupidAddition = (a, b) => {
    if (typeof a !== typeof b) return null;
    if (typeof a === 'string') return Number(a) + Number(b);
    return `${a}${b}`;
};

// Solution 2

const stupidAddition = (a, b) =>
    typeof a == 'string' && typeof b == 'string' ? +a + +b :
    typeof a == 'number' && typeof b == 'number' ? '' + a + b : null;

// Solution 3

const stupidAddition = (a, b) => [a, b].every(value => typeof value === 'number') ?
    '' + a + b : [a, b].every(value => typeof value === 'string') ?
    +a + +b : null

// Solution 4

function stupidAddition(a, b) {
    var y = (typeof a == 'string');
    var z = (typeof b == 'string');
    if (y && z) return Number(a) + Number(b);
    if (!y && !z) return String(a) + String(b);
    return null;
}

// Solution 5

const stupidAddition = (a, b) => a === +a && b === +b ? `${a}${b}` :
    a !== +a && b !== +b ? +a + +b :
    null;


// Solution 6

function stupidAddition(a, b) {
    return typeof(a) === 'number' && typeof(b) === 'number' ? a.toString().concat(b.toString()) : typeof(a) == 'string' && typeof(b) == 'string' ? eval(a) + eval(b) : null;
}


// Solution 7

const stupidAddition = (a, b) => typeof a !== typeof b ? null : (typeof a === "string" && typeof b === "string" ? parseInt(a) + parseInt(b) : a.toString() + b.toString())


// Solution 8

function stupidAddition(a, b) {
    return typeof a == 'string' && typeof b == 'string' ? parseInt(a) + parseInt(b) :
        typeof a == 'number' && typeof b == 'number' ? String(a) + String(b) :
        null;
}