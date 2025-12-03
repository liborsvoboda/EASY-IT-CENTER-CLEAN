/*

Highest Digit
Create a function that takes a number as an argument and returns the highest digit in that number.

Examples
highestDigit(379) ➞ 9

highestDigit(2) ➞ 2

highestDigit(377401) ➞ 7
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



/*  Solution 1   */

const highestDigit = number => Math.max(...
    `${number}`);

const highestDigit = n => +('' + n).split('').sort((a, b) => b - a)[0];

const highestDigit = n => Math.max(...[...n.toString()].map(Number));

const highestDigit = number => Math.max(...number.toString().split(''))

const highestDigit = number => Math.max(...
    `${number}`);

const highestDigit = n => +Math.max(...
    `${n}`);



/*  Solution 2   */

const highestDigit = number => {
    return Math.max(...[...String(number)].map(Number))
};


const highestDigit = number => {
    var arr = Array.from(String(number), Number)

    arr.sort()
    return arr[arr.length - 1]
};



const highestDigit = number => {
    return number.toString().split("").sort()[number.toString().split("").sort().length - 1] * 1;
};




/*  Solution 3   */


const highestDigit = number => {
    number = number.toString();
    return Math.max(...number);
};



const highestDigit = number => {
    return String(number).split('').map(el => eval(el)).sort((a, b) => b - a)[0]
};