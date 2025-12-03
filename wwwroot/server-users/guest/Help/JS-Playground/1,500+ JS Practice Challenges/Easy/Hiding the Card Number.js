/*

Hiding the Card Number
Write a function that takes a credit card number and only displays the last four characters. The rest of the card number must be replaced by ************.

Examples
cardHide("1234123456785678") ➞ "************5678"

cardHide("8754456321113213") ➞ "************3213"

cardHide("35123413355523") ➞ "**********5523"
Examples
Ensure you return a string.
The length of the string must remain the same as the input.

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



/*  Solution 1   */

function cardHide(card) {
    const last4Digits = card.slice(-4);
    return last4Digits.padStart(card.length, '*');
}



/*  Solution 2   */

const cardHide = card => '*'.repeat(card.length - 4) + card.slice(-4);

const cardHide = card => card.slice(-4).padStart(card.length, '*');

const cardHide = c => c.replace(/\d(?=\d{4})/g, '*')

const cardHide = (card) => card.replace(/\d(?=\d{4})/g, "*")

const cardHide = str => [...str].map((x, i) => i < str.length - 4 ? x = '*' : x).join('')

const cardHide = card => `${card.slice(0,-4).replace(/\d/g,'*')}${card.slice(-4)}`;

const cardHide = str => '*'.repeat(str.length - 4) + str.slice(-4);







/*  Solution 3   */