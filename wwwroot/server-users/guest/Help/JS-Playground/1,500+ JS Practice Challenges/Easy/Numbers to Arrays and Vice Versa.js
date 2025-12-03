/*

Numbers to Arrays and Vice Versa
Write two functions:

toArray(), which converts a number to an array of its digits.
toNumber(), which converts an array of digits back to its number.
Examples
toArray(235) ➞ [2, 3, 5]

toArray(0) ➞ [0]

toNumber([2, 3, 5]) ➞ 235

toNumber([0]) ➞ 0
Notes
All test cases will be weakly positive numbers: >= 0

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



/*  Solution 1   */


const toArray = num => String(num).split('').map(Number);

const toNumber = arr => Number(arr.join(''));


/*  Solution 2   */


function toArray(num) {
    return num.toString().split("").map(x => x = Number(x));
}

function toNumber(arr) {
    return Number(arr.join(""));
}


/*  Solution 3   */



function toArray(num) {
    return num.toString().split("").map(x => parseInt(x));
}

function toNumber(arr) {
    return parseInt(arr.join(""));
}





let toArray = function(num) {
    let a = [];
    while (true) {
        a.push(num % 10);
        num = Math.floor(num / 10);
        if (num == 0) {
            break;
        }
    }
    a.sort((a, b) => a - b);
    return a;
}

function toNumber(arr) {
    let num = parseInt(arr.join(''), 10);
    return num;
}





function toArray(num) {
    return [...num + ""].map(n => parseInt(n));
}

function toNumber(arr) {
    return parseInt(arr.reduce((acc, curr) => acc + (curr + "")));
}




const toArray = num => [...String(num)].map(x => (x = parseInt(x)));

const toNumber = arr =>
    parseInt(
        String(arr)
        .split(',')
        .join('')
    );