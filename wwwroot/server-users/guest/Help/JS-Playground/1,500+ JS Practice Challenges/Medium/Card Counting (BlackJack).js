/*
Card Counting (BlackJack)

In BlackJack, cards are counted with -1, 0, 1 values:

2, 3, 4, 5, 6 are counted as +1
7, 8, 9 are counted as 0
10, J, Q, K, A are counted as -1
Create a function that counts the number and returns it from the array of cards provided.

Examples
count([5, 9, 10, 3, "J", "A", 4, 8, 5]) ➞ 1

count(["A", "A", "K", "Q", "Q", "J"]) ➞ -6

count(["A", 5, 5, 2, 6, 2, 3, 8, 9, 7]) ➞ 5

Notes
String inputs will always be upper case.
You do not need to consider case sensitivity.
If the argument is empty, return 0.
No input other than: 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A".

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################



function count(deck) {
    return deck.reduce((a, c) => a + (c <= 6 ? 1 : c <= 9 ? 0 : -1), 0);
}



//#############################################################
//#  SOLUTION 2  
//#############################################################



function count(deck) {
    return deck.map(x => x < 7 ? 1 : x < 10 ? 0 : -1).reduce((a, b) => a + b, 0)
}



//#############################################################
//#  SOLUTION 3
//#############################################################



function count(deck) {
    let a = 0;
    for (let i = 0; i < deck.length; i++) {
        if (deck[i] >= 2 && deck[i] <= 6) {
            a++;
        } else if (deck[i] === 10 || deck[i] === 'J' || deck[i] === 'Q' || deck[i] === 'K' || deck[i] === 'A') {
            a--;
        }
    }
    return a;
}




//#############################################################
//#  SOLUTION 4
//#############################################################


const count = deck => deck.reduce((a, b) => a +
    (`JQKA`.includes(b) || b == 10 ? -1 : b < 7 ? 1 : 0), 0);





//#############################################################
//#  SOLUTION 5
//#############################################################


function count(deck) {
    let count = 0
    deck.map(x => /[2-6]/.test(x) ? count += 1 : /[7-9]/.test(x) ? count += 0 : count -= 1)
    return count
}





//#############################################################
//#  SOLUTION 6
//#############################################################


function count(deck) {
    return deck.map(x => typeof x == 'string' || x == 10 ? -1 : x < 7 ? +1 : 0)
        .reduce((a, b) => a + b, 0)
}





//#############################################################
//#  SOLUTION 7
//#############################################################


function count(deck) {
    a = deck.filter(x => x < 7);
    b = deck.filter(x => x > 9 || x == "A" || x == "Q" || x == "J" || x == "K")
    return b.length * -1 + a.length

}






//#############################################################
//#  SOLUTION 8
//#############################################################


function count(deck) {
    const check = val => {
        if ("789".includes(val)) return 0
        if (typeof val === "string" || val === 10) return -1
        return 1
    }
    return deck.reduce((t, c) => t + check(c), 0)
}