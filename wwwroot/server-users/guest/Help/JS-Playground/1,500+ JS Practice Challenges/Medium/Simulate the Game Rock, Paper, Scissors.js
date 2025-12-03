/*

Simulate the Game "Rock, Paper, Scissors"

Create a function which simulates the game "rock, paper, scissors". The function takes the input of both players (rock, paper or scissors), first parameter from first player, second from second player. The function returns the result as such:

"Player 1 wins"
"Player 2 wins"
"TIE" (if both inputs are the same)
The rules of rock, paper, scissors, if not known:

Both players have to say either "rock", "paper" or "scissors" at the same time.
Rock beats scissors, paper beats rock, scissors beat paper.
Examples
rps("rock", "paper") ➞ "Player 2 wins"

rps("paper", "rock") ➞ "Player 1 wins"

rps("paper", "scissors") ➞ "Player 2 wins"

rps("scissors", "scissors") ➞ "TIE"

rps("scissors", "paper") ➞ "Player 1 wins"

Notes
There are several ways to solve this challenge.
*/





//#############################################################
//#  SOLUTION 1 
//#############################################################


const rps = (s1, s2) => {
    if (s1 === s2) return "TIE";
    let res = { p: "rock", s: "paper", r: "scissors" };
    return res[s1[0]] === s2 ? "Player 1 wins" : "Player 2 wins";
}




//#############################################################
//#  SOLUTION 2  
//#############################################################


const rps = (p1, p2) => p1 === p2 ?
    'TIE' :
    (p1 === 'paper' && p2 === 'rock') ||
    (p1 === 'rock' && p2 === 'scissors') ||
    (p1 === 'scissors' && p2 === 'paper') ?
    'Player 1 wins' : 'Player 2 wins';




//#############################################################
//#  SOLUTION 3
//#############################################################


function rps(s1, s2) {
    if (s1 == s2) return 'TIE'
    else if (s1 == 'rock' && s2 == 'paper' || s1 == 'paper' && s2 == 'scissors' || s1 == 'scissors' && s2 == 'rock') return 'Player 2 wins'
    else if (s2 == 'rock' && s1 == 'paper' || s2 == 'paper' && s1 == 'scissors' || s2 == 'scissors' && s1 == 'rock') return 'Player 1 wins'
}



//#############################################################
//#  SOLUTION 4
//#############################################################



function rps(s1, s2) {
    if (s1 === s2) return "TIE";
    if (s1 === "rock") return s2 === "paper" ? "Player 2 wins" : "Player 1 wins";
    if (s1 === "paper") return s2 === "rock" ? "Player 1 wins" : "Player 2 wins";
    else return s2 === "rock" ? "Player 2 wins" : "Player 1 wins";
}



//#############################################################
//#  SOLUTION 5
//#############################################################


function rps(s1, s2) {
    var d;
    var s = [s1, s2];
    if (s1 === s2) {
        return "TIE";
    };
    if (s.includes("rock") && s.includes("paper")) {
        d = s.indexOf("paper") + 1;
        return `Player ${d} wins`;
    }
    if (s.includes("rock") && s.includes("scissors")) {
        d = s.indexOf("rock") + 1;
        return `Player ${d} wins`;
    }
    if (s.includes("scissors") && s.includes("paper")) {
        d = s.indexOf("scissors") + 1;
        return `Player ${d} wins`;
    }
}



//#############################################################
//#  SOLUTION 6
//#############################################################


function rps(s1, s2) {
    if (s1 === s2) {
        return 'TIE';
    }
    let scores = {
        'scissors': {
            'paper': 1,
            'rock': -1
        },
        'rock': {
            'scissors': 1,
            'paper': -1
        },
        'paper': {
            'rock': 1,
            'scissors': -1
        }
    }
    return scores[s1][s2] === 1 ? 'Player 1 wins' : 'Player 2 wins';
}





//#############################################################
//#  SOLUTION 7
//#############################################################



const arr = ['rock', 'paper', 'scissors'];

function rps(s1, s2) {
    [s1, s2] = [arr.indexOf(s1), arr.indexOf(s2)]
    const r = (s1 - s2) % arr.length;
    return r === 0 ? 'TIE' : r === 1 || r === 2 ? 'Player 1 wins' : 'Player 2 wins'
}





//#############################################################
//#  SOLUTION 8
//#############################################################



function rps(s1, s2) {

    //  check if both inputs are the same
    if (s1 === s2) return 'TIE';

    switch (s1) {

        case 'scissors':
            if (s2 === 'paper') return "Player 1 wins";
            else return "Player 2 wins";

        case 'rock':
            if (s2 === 'scissors') return "Player 1 wins";
            else return "Player 2 wins";

        case 'paper':
            if (s2 === 'rock') return "Player 1 wins";
            else return "Player 2 wins";
    }
}



//#############################################################
//#  SOLUTION 9
//#############################################################



function rps(s1, s2) {
    let play = ['rock', 'paper', 'scissors'];
    let res = play.indexOf(s2) - play.indexOf(s1);
    return res == 1 || res == -2 ? 'Player 2 wins' :
        res == -1 || res == 2 ? 'Player 1 wins' :
        'TIE';
}