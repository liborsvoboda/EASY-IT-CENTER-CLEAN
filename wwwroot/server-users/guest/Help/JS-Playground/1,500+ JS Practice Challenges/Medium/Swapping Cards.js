/*

Swapping Cards

Two players draw a pair of numbered cards so that both players can form a 2 digit number. A winner can be decided if one player's number is larger than the others.

However, there is a rule where a player can swap any one of their cards with any one of the other player's cards in a gamble to get a higher number! Note that it is illegal to swap the order of your own cards. That means if you draw a 1 then a 9, you cannot swap them to get 91.

Numbered Cards

Paul's strategy is to always swap his lowest number with the opponent's ten's digit. Return whether this results in Paul winning the round.

n1 is Paul's number
n2 is his opponent's number
Worked Example
swap_cards(41, 79) ➞ true
// Paul's lowest number is 1
// The opponent's ten's digit is 7
// After the swap: 47 > 19
// Paul wins the round
Examples
swapCards(41, 98) ➞ true

swapCards(12, 28) ➞ true

swapCards(67, 53) ➞ false

swapCards(77, 54) ➞ false


Notes
If both of Paul's digits are the same, swap the ten's digit with the opponent's (paul likes to live riskily).
The cards don't include the number 0.
*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


function swapCards(n1, n2) {
    return +Array.from('' + n1, Number).map((x, i, a) => x == Math.min(...a) ? '' + (~~(n2 / 10)) : '' + x).join('') > Math.min(...Array.from('' + n1, Number)) * 10 + n2 % 10
}


//#############################################################
//#  SOLUTION 2  
//#############################################################


function swapCards(n1, n2) {
    let number1 = n1.toString().split("");
    let number2 = n2.toString().split("");
    let hold;
    if (number1[0] <= number1[1]) {
        hold = number1[0];
        number1[0] = number2[0];
        number2[0] = hold;
        return (Number(number1.join("")) > Number(number2.join(""))) ? true : false;
    }
    hold = number1[1];
    number1[1] = number2[0];
    number2[0] = hold;
    return (Number(number1.join("")) > Number(number2.join(""))) ? true : false;
}



//#############################################################
//#  SOLUTION 3
//#############################################################


const swapCards = (n1, n2) => (
    [a, b] = String(n1).split ``, [c, d] = String(n2).split ``,
    (a === b ? c + b : a < b ? c + b : a + c) >
    (a === b ? a + d : a < b ? a + d : b + d)
)



//#############################################################
//#  SOLUTION 4
//#############################################################


function swapCards(n1, n2) {
    let n11 = (n1 - (n1 % 10)) / 10
    let n12 = n1 % 10
    let n21 = (n2 - (n2 % 10)) / 10
    let n22 = n2 % 10
    let x
    let y
    if (n11 > n12) {
        x = n1 - (n1 % 10) + n21
        y = (n1 % 10) * 10 + n22
    } else {
        x = n2 - (n2 % 10) + (n1 % 10)
        y = n1 - (n1 % 10) + (n2 % 10)
    }
    if (x > y) { return true } else { return false }
}