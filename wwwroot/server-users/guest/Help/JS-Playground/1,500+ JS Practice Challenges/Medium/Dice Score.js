/*

Dice Score

Greed is a dice game played with five six-sided dices. Your mission is to score a throw according to these rules:

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
See the below examples for a better understanding:

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
Create a function that takes an array of five six-sided throw values and returns the final calculated dice score.

Examples
diceScore([2, 3, 4, 6, 2]) ➞ 0

diceScore([4, 4, 4, 3, 3]) ➞ 400

diceScore([2, 4, 4, 5, 4]) ➞ 450

Notes
A single dice can only be counted once in each roll. For example, a given "5" can only be counted as a part of the triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.
*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


function diceScore(throws) {
    let obj = {
        111: 1000,
        666: 600,
        555: 500,
        444: 400,
        333: 300,
        222: 200,
        1: 100,
        5: 50
    };

    let arr = throws.sort((a, b) => a - b).join('').match(/(\d)\1{2}|[15]{1}/g);
    return (arr || []).reduce((tot, a) => tot + (obj[a] | 0), 0);

}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function diceScore(throws) {
    return [...new Set(throws)].map(x => [x, throws.filter(a => a == x).length]).reduce((a, v) => a + (v[1] == 3 ? { 1: 1000, 2: 200, 3: 300, 4: 400, 5: 500, 6: 600 }[v[0]] : (v[0] == 1 ? v[1] * 100 : (v[0] == 5 ? v[1] * 50 : 0))), 0)
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function diceScore(throws) {
    const score = new Score(throws)
    return score.getTotal()
}

const table = {
    1: 700,
    2: 200,
    3: 300,
    4: 400,
    5: 350,
    6: 600
}

class Score {
    constructor(dices) {
        this.total = 0
        this.scores = new Array(6).fill(0)
        for (let dice of dices) {
            this.addDice(dice)
        }
    }

    addDice(value) {
        this.scores[value - 1] += 1
        if (value === 1) {
            this.total += 100
        } else if (value === 5) {
            this.total += 50
        }

        if (this.scores[value - 1] === 3) {
            this.total += table[value]
        }
    }

    getTotal() {
        return this.total
    }
}