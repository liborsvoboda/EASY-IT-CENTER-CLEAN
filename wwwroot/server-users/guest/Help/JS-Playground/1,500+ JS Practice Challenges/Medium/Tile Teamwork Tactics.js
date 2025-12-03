/*

Tile Teamwork Tactics

In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

Given you and your friend's tile number, create a function that returns if it's possible to earn a bonus when you roll the dice.

Examples
possibleBonus(3, 7) ➞ true

possibleBonus(1, 9) ➞ false

possibleBonus(5, 3) ➞ false


Notes
You cannot move backward (which is why example #3 doesn't work).
If you are already on the same tile, return false, as you would be advancing away.
Expect only positive integer inputs.
*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


function possibleBonus(a, b) {
    return a + 1 <= b && b <= a + 6;
}


//#############################################################
//#  SOLUTION 2  
//#############################################################


const possibleBonus = (a, b) => {
    const diff = a - b;
    return diff < 0 && diff >= -6;
};


//#############################################################
//#  SOLUTION 3
//#############################################################


const possibleBonus = (a, b) => a + 6 >= b && !(b <= a);


const possibleBonus = (a, b) => b - a > 0 && b - a <= 6 ? true : false;



//#############################################################
//#  SOLUTION 4
//#############################################################


function possibleBonus(a, b) {
    return a == b ? false : b >= a ? ((a + 6) >= b) : false;
}


//#############################################################
//#  SOLUTION 5
//#############################################################


function possibleBonus(a, b) {
    return a === b || b < a ? false : (a + 6) >= b
}