/*

The Snake — Area Filling

This challenge is based on the classic videogame "Snake".
Assume the game screen is an n * n square, and the snake starts the game with length 1 (i.e. just the head) positioned on the top left corner.
For example, if n = 7 the game looks something like this:

In this version of the game, the length of the snake doubles each time it eats food (e.g. if the length is 4, after eating it becomes 8).
Create a function that takes the side n of the game screen and returns the number of times the snake can eat before it runs out of space in the game screen.

Examples
snakefill(3) ➞ 3

snakefill(6) ➞ 5

snakefill(24) ➞ 9

Notes
The given number will always be a positive integer (there are no exceptions to handle).

*/



//#############################################################
//#    SOLUTION 1
//#############################################################


const snakefill = (n) => Math.floor(Math.log2(n) * 2);



//#############################################################
//#    SOLUTION 2
//#############################################################


const snakefill = n => ~~Math.log2(n * n);




//#############################################################
//#    SOLUTION 3
//#############################################################


function snakefill(x) {
    let numOfSquares = Math.pow(x, 2);
    for (i = 0; i < 99999999999999; i++) {
        if (numOfSquares < Math.pow(2, i)) {
            return i - 1;
        }
    }
}

snakefill(3);




//#############################################################
//#    SOLUTION 4
//#############################################################


const snakefill = (x, y = 1) => 2 ** y > x ** 2 ? y - 1 : snakefill(x, ++y)