/*

House of Cards

The image below shows a sequence of larger and larger houses of cards, with the total number of cards included for each:

House of Cards

Given the tower height n, return the number of cards needed to construct a full house of cards.

Examples
cardsNeeded(3) ➞ 15

cardsNeeded(4) ➞ 26

cardsNeeded(0) ➞ 0

Notes
The height should always be equal or greater than 0. Return "invalid" if the value given doesn't abide by this rule.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


const cardsNeeded = n => n >= 0 ? n * (3 * n + 1) / 2 : 'invalid';


const cardsNeeded = n => n < 0 ? "invalid" : n * (3 * n + 1) / 2;


const cardsNeeded = (n) => n >= 0 ? (n !== 0 ? n * 2 + n - 1 + cardsNeeded(n - 1) : n) : 'invalid';


const cardsNeeded = (n) => n < 0 ? 'invalid' : n == 0 ? 0 : 2 * n + (n - 1) + cardsNeeded(n - 1);



//#############################################################
//#  SOLUTION 2  
//#############################################################


const tri = n => (n ** 2 + n) / 2;
const cardsNeeded = n => (
    (n < 0) ? 'invalid' : (2 * tri(n) + tri(--n || 0))
);




//#############################################################
//#  SOLUTION 3
//#############################################################


const cardsNeeded = h => {
    if (h < 0) return 'invalid'
    if (h == 0) return 0
    if (h == 1) return 2
    return 2 * h + h - 1 + cardsNeeded(h - 1)
}




//#############################################################
//#  SOLUTION 4
//#############################################################



const sumRange = arr => {
    const [min, max] = arr.sort((a, b) => a - b);
    return (max * (max + 1) - (min - 1) * min) / 2;
};

function cardsNeeded(n) {
    if (n < 0) return 'invalid';
    return sumRange([0, Math.max(0, n - 1)]) * 3 + n * 2;
}