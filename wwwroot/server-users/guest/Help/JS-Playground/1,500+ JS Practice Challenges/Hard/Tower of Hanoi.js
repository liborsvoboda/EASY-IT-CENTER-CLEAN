/*
Tower of Hanoi

There are three towers. The objective of the game is to move all the disks over to tower #3, but you can't place a larger disk onto a smaller disk. To play the game or learn more about the Tower of Hanoi, check the Resources tab.

Tower of Hanoi

Create a function that takes a number discs as an argument and returns the minimum amount of steps needed to complete the game.

Examples
towerHanoi(3) ➞ 7

towerHanoi(5) ➞ 31

towerHanoi(0) ➞ 0

Notes
The amount of discs is always a positive integer.
1 disc can be changed per move.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################



function towerHanoi(discs) {
    return Math.pow(2, discs) - 1
}



//#############################################################
//#  SOLUTION 2  
//#############################################################



var towerHanoi = function(discs) {
    let moves = 0;
    (function play(discs) {
        if (discs > 0) {
            play(discs - 1);
            moves++;
            play(discs - 1);
        }
    }(discs));

    return moves;
}






//#############################################################
//#  SOLUTION 3
//#############################################################



function towerHanoi(discs) {
    return discs == 0 ? 0 : 2 * towerHanoi(discs - 1) + 1;
}






//#############################################################
//#  SOLUTION 4
//#############################################################


const towerHanoi = discs => (discs === 0 ? 0 : towerHanoi(discs - 1) * 2 + 1);




function towerHanoi(discs) {
    return discs > 0 ? Math.pow(2, discs) - 1 : 0
}