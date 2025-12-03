/*

Don't Roll Doubles!
John is playing a dice game. The rules are as follows.

Roll two dice.
Add the numbers on the dice together.
Add the total to your overall score.
Repeat this for three rounds.
But if you roll DOUBLES, your score is instantly wiped to 0 and your game ends immediately!

Create a function which takes in a matrix as input, and return John's score after his game has ended.

Examples
diceGame([[1, 2], [3, 4], [5, 6]]) ➞ 21

diceGame([[1, 1], [5, 6], [6, 4]]) ➞ 0

diceGame([[4, 5], [4, 5], [4, 5]]) ➞ 27

Notes
Ignore all other arrays in the matrix if a throw happens to be doubles and go straight to returning 0.
John only has two dice and will always give you outcomes for three rounds.
*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 


const diceGame = arr => arr.some(v => v[0] === v[1]) ? 0 :
    arr.flat().reduce((a, v) => a + v, 0);


const diceGame = a => a.every(i => i[0] !== i[1]) ? a.flat(Infinity).reduce((a, b) => a + b) : 0;


//#  SOLUTION 2  

function diceGame(arr) {
    return arr.every(e => e[0] != e[1]) ? arr.flat().reduce((a, b) => a + b, 0) : 0;
}


//#  SOLUTION 3


const diceGame = arr => {
    const hasDoubles = arr.some(throws => throws[0] === throws[1]);
    return hasDoubles ? 0 : arr.flat().reduce((sum, n) => sum += n, 0);
}


//#  SOLUTION 4


function diceGame(arr) {
    for (let i of arr) {
        if (i[0] == i[1]) return 0;
    }
    return arr.flat().reduce((c, i) => c + i, 0);
}





//#  SOLUTION 5


function diceGame(arr) {
    let score = 0
    let doubles = false
    arr.forEach(item => {
        if (item[0] === item[1]) doubles = true
        score += item.reduce((acc, val) => acc + val, 0)
    })
    return doubles ? 0 : score
}





//#  SOLUTION 6

function diceGame(arr) {
    let sum = arr.flat().reduce((a, b) => a + b)
    for (let i = 0; i < arr.length; i++) {
        arr[i][0] === arr[i][1] ? sum = 0 : sum;
    }
    return sum;
}




//#  SOLUTION 7



function diceGame(arr) {
    let res = arr.filter((item, index) => {
        return item.reduce((acc, curr) => acc - curr) === 0;
    }).length;

    return res > 0 ? 0 : arr.flat().reduce((acc, curr) => acc + curr);
}







//#  SOLUTION 8


function diceGame(arr) {
    if (arr.filter(x => x[0] === x[1]).length > 0) return 0;
    return arr.flat().reduce((a, b) => a + b);
}