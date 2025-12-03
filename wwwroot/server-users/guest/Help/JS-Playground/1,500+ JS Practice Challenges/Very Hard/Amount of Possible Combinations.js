/*  

Amount of Possible Combinations

Write a function that returns the amount of possible combinations when drawing the given amount of cards from a deck of cards.

The function must take two inputs: k is the amount of cards to draw. n the total amount of cards in the deck.

For example, a poker hand can be described as a 5-combination (k = 5) of cards from a 52 card deck (n = 52). The 5 cards of the hand are all distinct, and the order of cards in the hand does not matter. There are 2,598,960 such combinations.

The amount of combinations should be returned as an integer.

Examples
combinations(52, 52) ➞ 1

combinations(5, 52) ➞ 2598960

combinations(10, 52) ➞ 15820024220


Notes
Try solving this nativly without any imports.
Remember to return result as integer.
*/




//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################




const combinations = c = (k, n) => k ? n * c(k - 1, n - 1) / k : 1



//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


function factorial(n) {
    let answer = 1;
    if (n == 0 || n == 1) {
        return answer;
    } else {
        for (var i = n; i >= 1; i--) {
            answer = answer * i;
        }
        return answer;
    }
}

const combinations = (k, n) => {
    let a = factorial(n) / (factorial(k) * factorial(n - k));
    return Math.round(a);
};




//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################


function combinations(k, n) {
    return Math.round(factorial(n) / (factorial(k) * factorial(n - k)));
}

const factorial = num => {
    if (num === 0 || num === 1) return 1;
    else return num * factorial(num - 1);
}




//#############################################################
//#                        MY SOLUTION    4                   #
//#############################################################


const fact = (N) => (N ? N * fact(N - 1) : 1);

const combinations = (k, n) => Math.round(fact(n) / (fact(k) * fact(n - k)));